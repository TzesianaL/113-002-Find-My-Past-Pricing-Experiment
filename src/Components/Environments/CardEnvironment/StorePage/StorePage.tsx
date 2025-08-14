import Button from 'Components/Shared/Button/Button'
import {
  MutexButton,
  MutexButtonGroup,
} from 'Components/Shared/Mutex/MutexButton'
import { useScrollToTop } from 'hooks/useScrollToTop'
import React, {
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllAddons,
  getSelectedCondition,
} from 'redux/reducers/dataStore/dataStore.selectors'
import {
  addItemToBasket,
  addSpeedItemToBasket,
} from 'redux/reducers/logicStore/logicStore'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import type { CardItem, SpeedCardItem } from 'types'
import { ContractDuration, isContractDuration } from 'types'
import { StorePageAddonLayout } from '../../../../StandardLayouts/AddonLayouts'
import StoreBanner from '../../../Shared/StoreBanner/StoreBanner'
import CardGroup from '../CardGroup/CardGroup'
import SpeedCardGroup from '../SpeedCardGroup/SpeedCardGroup'
import { StorePageStyle } from './StorePageStyle'

enum ConfigurationStep {
  CONTRACT_LENGTH = 'CONTRACT_LENGTH',
  SPEED_SELECTION = 'SPEED_SELECTION',
  PLAN_SELECTION = 'PLAN_SELECTION',
}

export interface StorePageProps {
  bannerName?: string
  bannerLogoSrc?: string
  introText?: string
  footerText?: string
  hidePrice?: boolean
  showCancelButton?: boolean
  purchaseButtonText?: string
  items: CardItem[]
  speedItems: SpeedCardItem[]
  onCancel: () => void
  onSelect: (id: string) => void
  onSpeedSelect?: (id: string) => void
  cancelButtonText?: string
}

const StorePage: FC<StorePageProps> = ({
  bannerLogoSrc,
  bannerName,
  introText,
  footerText,
  hidePrice,
  showCancelButton,
  purchaseButtonText,
  items,
  speedItems,
  onCancel,
  onSpeedSelect,
  onSelect,
  cancelButtonText,
}) => {
  const selectedCondition = useSelector(getSelectedCondition)
  const dispatch = useDispatch()

  const [contractLengthFilter, setContractLengthFilter] = useState<
    ContractDuration | undefined
  >(undefined)

  const [speedSelected, setSpeedSelected] = useState<string | undefined>(
    undefined
  )

  const [planSelected, setPlanSelected] = useState<string | undefined>(
    undefined
  )

  // Derive current step from state - this ensures consistency
  const currentStep = useMemo(() => {
    if (!contractLengthFilter) return ConfigurationStep.CONTRACT_LENGTH
    if (!speedSelected) return ConfigurationStep.SPEED_SELECTION
    return ConfigurationStep.PLAN_SELECTION
  }, [contractLengthFilter, speedSelected])

  // Scroll to relevant section when step changes
  useEffect(() => {
    const scrollToStep = () => {
      let targetRef: React.RefObject<HTMLDivElement> | null = null

      switch (currentStep) {
        case ConfigurationStep.CONTRACT_LENGTH:
          return
          break
        case ConfigurationStep.SPEED_SELECTION:
          targetRef = speedSelectionRef
          break
        case ConfigurationStep.PLAN_SELECTION:
          targetRef = planSelectionRef
          break
      }

      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    }

    // Small delay to ensure DOM is updated before scrolling
    const timeoutId = setTimeout(scrollToStep, 100)
    return () => clearTimeout(timeoutId)
  }, [currentStep])

  const totalCost = useSelector(getCost)

  const handlePlanClick = (id: string) => {
    // Validation: ensure user can't skip steps
    if (!contractLengthFilter) {
      throw new Error('Cannot select plan without contract length')
    }
    setPlanSelected(id)
  }

  const handleSpeedSelect = (id: string) => {
    setSpeedSelected(id)
  }

  const handleContractLengthChange = (value: string | undefined) => {
    if (!value) {
      setContractLengthFilter(undefined)
      // Auto-reset dependent selections when contract changes
      setSpeedSelected(undefined)
      setPlanSelected(undefined)
      return
    }

    // Type-safe validation using type guard
    if (!isContractDuration(value)) {
      console.warn(`Invalid contract duration: ${value}`)
      return
    }

    setContractLengthFilter(value)
    // Auto-reset dependent selections when contract changes
    setSpeedSelected(undefined)
    setPlanSelected(undefined)
  }

  const addons = useSelector(getAllAddons)

  if (showCancelButton && !onCancel) {
    throw new Error(
      'OnCancel function is undefined when showCancelButton is provided'
    )
  }

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.itemOrderShown,
        value: items.map((item) => item.id).toString(),
      })
    )

    dispatch(
      addOutput({
        key: OutputTypes.numberOfItemsShown,
        value: String(items.length),
      })
    )
  }, [dispatch, items, speedItems])

  const durationData = useMemo(() => {
    const durationData = items.reduce(
      (acc, item) => {
        if (item.contractDuration) {
          if (!acc.durations.has(item.contractDuration)) {
            acc.durations.add(item.contractDuration)
            acc.cheapestPrices.set(item.contractDuration, item.price)
          } else {
            // Update if we found a cheaper price
            const currentCheapest = acc.cheapestPrices.get(
              item.contractDuration
            )!
            if (item.price < currentCheapest) {
              acc.cheapestPrices.set(item.contractDuration, item.price)
            }
          }
        }
        return acc
      },
      {
        durations: new Set<ContractDuration>(),
        cheapestPrices: new Map<ContractDuration, number>(),
      }
    )

    if (durationData.durations.size === 1) {
      const singleDuration = durationData.durations.values().next().value
      if (contractLengthFilter !== singleDuration) {
        handleContractLengthChange(singleDuration)
      }
    }

    return durationData
  }, [items, handleContractLengthChange])

  const DurationOptions: FC<{}> = () => {
    // Build unique durations and calculate cheapest prices in one pass
    const buttonOptions = Array.from(durationData.durations).map((duration) => {
      let buttonText: string
      const cheapestPrice = durationData.cheapestPrices.get(duration) || 0

      switch (duration) {
        case '24 months':
          buttonText = `24-month broadband, from £${cheapestPrice} a month`
          break
        case '30 days':
          buttonText = `30-day broadband, from £${cheapestPrice} per month`
          break
        default:
          buttonText = duration
          break
      }

      return (
        <MutexButton
          key={duration}
          value={duration}
          style={{ backgroundColor: 'white', borderRadius: '15px' }}
        >
          {buttonText}
        </MutexButton>
      )
    })

    return <>{buttonOptions}</>
  }

  const filteredSpeedItems = useMemo(() => {
    if (contractLengthFilter === undefined) {
      return []
    }

    const filteredSpeedIDs = items
      .filter((item) => item.contractDuration === contractLengthFilter)
      .reduce((acc, item) => {
        acc.add(item.parentSpeedId)
        return acc
      }, new Set<string>())

    return speedItems.filter((item) => filteredSpeedIDs.has(item.id))
  }, [items, speedItems, contractLengthFilter])

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.contractDuration === contractLengthFilter &&
        item.parentSpeedId === speedSelected
    )
  }, [items, contractLengthFilter, speedSelected])

  useScrollToTop()

  // #region scroll to relevant section when step changes
  const speedSelectionRef = useRef<HTMLDivElement>(null)
  const contractLengthSelectionRef = useRef<HTMLDivElement>(null)
  const planSelectionRef = useRef<HTMLDivElement>(null)
  const isAutoSelecting = useRef(false)

  // Custom scroll function that uses center if element fits, otherwise start with offset
  const smartScrollIntoView = (
    element: HTMLElement,
    offsetFromTop: number = 80
  ) => {
    const elementRect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const elementHeight = elementRect.height

    // Check if element would fit entirely on screen when centered
    const wouldFitWhenCentered = elementHeight <= viewportHeight * 0.8 // Use 80% of viewport for safety margin

    console.group('Smart Scroll Debug')
    if (wouldFitWhenCentered) {
      console.log(`Element fits, so scrolling to center`)
      // Use native center behavior if element fits comfortably
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    } else {
      console.log(
        `Element does not fit when centered, scrolling with offset ${offsetFromTop}px`
      )
      // Calculate manual scroll position with offset
      const elementTop = element.offsetTop
      const targetScrollPosition = elementTop - offsetFromTop

      window.scrollTo({
        top: Math.max(0, targetScrollPosition), // Ensure we don't scroll above the page
        behavior: 'smooth',
      })
    }
    console.groupEnd()
  }

  // Scroll to relevant section when step changes
  useLayoutEffect(() => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null

    switch (currentStep) {
      case ConfigurationStep.SPEED_SELECTION:
        // We have to handle this separately to ensure we scroll to speed selection but not on the intial autoselect
        return
      case ConfigurationStep.CONTRACT_LENGTH:
        targetRef = contractLengthSelectionRef
        break
      case ConfigurationStep.PLAN_SELECTION:
        targetRef = planSelectionRef
        break
    }

    if (targetRef?.current) {
      smartScrollIntoView(targetRef.current, 20) // 20px offset from top
    }
  }, [currentStep, speedSelected, contractLengthFilter])

  // Separate effect for scrolling to speed selection when broadband type is manually changed
  useLayoutEffect(() => {
    // Only scroll if broadband type was manually selected (not auto-selected)
    // and we're now at the speed selection step
    if (
      !isAutoSelecting.current &&
      currentStep === ConfigurationStep.SPEED_SELECTION &&
      speedSelectionRef.current
    ) {
      smartScrollIntoView(speedSelectionRef.current, 20)
    }

    // Reset the auto-selecting flag after processing
    if (isAutoSelecting.current) {
      isAutoSelecting.current = false
    }
  }, [currentStep, isAutoSelecting])
  // #endregion
  return (
    <StorePageStyle>
      <StoreBanner name={bannerName} logoSrc={bannerLogoSrc} />
      <h1>Build your broadband plan</h1>
      {introText && (
        <div
          className="introText"
          dangerouslySetInnerHTML={{ __html: introText }}
        />
      )}
      <>
        {/* Step 1: Contract Length Selection */}
        {durationData.durations.size > 1 && (
          <p style={{ fontSize: '1.25rem' }}>
            First, pick your <strong>contract length</strong>
          </p>
        )}
        {durationData.durations.size === 1 && (
          <p style={{ fontSize: '1.25rem', marginTop: '1.5em' }}>
            <strong>Contract length</strong>{' '}
          </p>
        )}

        <MutexButtonGroup
          value={contractLengthFilter}
          onValueChange={handleContractLengthChange}
        >
          <DurationOptions />
        </MutexButtonGroup>

        {/* Step 2: Speed Selection */}
        {(currentStep === ConfigurationStep.SPEED_SELECTION ||
          currentStep === ConfigurationStep.PLAN_SELECTION) && (
          <section ref={speedSelectionRef} style={{ marginTop: '2.5em' }}>
            <p style={{ fontSize: '1.25rem' }}>
              Select a <strong>speed</strong>
            </p>

            <SpeedCardGroup
              items={filteredSpeedItems.sort((a, b) => a.speed - b.speed)}
              hidePrice={hidePrice}
              selected={speedSelected}
              onSelect={onSpeedSelect}
              selectedCondition={selectedCondition}
              handleCardClick={handleSpeedSelect}
              purchaseButtonText={purchaseButtonText}
            />
          </section>
        )}

        {/* Step 3: Plan Selection */}
        {currentStep === ConfigurationStep.PLAN_SELECTION && (
          <section ref={planSelectionRef}>
            {selectedCondition !== 2 && (
              <p style={{ fontSize: '1.25rem', marginBottom: '0' }}>
                Now choose a plan with a <strong>{contractLengthFilter}</strong>{' '}
                contract
              </p>
            )}
            {selectedCondition === 2 && (
              <p style={{ fontSize: '1.25rem', marginBottom: '0' }}>
                Your <strong>{contractLengthFilter}</strong> contract include
              </p>
            )}

            <CardGroup
              items={filteredItems}
              hidePrice={hidePrice}
              selected={planSelected}
              onSelect={onSelect}
              handleCardClick={handlePlanClick}
              purchaseButtonText={purchaseButtonText}
              // avgScore={sumOfWeights}
            />
          </section>
        )}
      </>
      {footerText && (
        <div
          className="footerText"
          dangerouslySetInnerHTML={{ __html: footerText }}
        />
      )}
      <br />
      <br />
    </StorePageStyle>
  )
}

export default StorePage
