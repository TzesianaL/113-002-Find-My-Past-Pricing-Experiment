import React, { FC } from 'react'
import { useEFSData } from '@dectech/react-library'
import { useSelector } from 'react-redux'
import { OutputTypes } from 'redux/reducers/output/outputSlice'
import { getActionLog } from 'redux/reducers/actionLogStore/actionLogStore'
import {
  getOutputFromKey,
  getSerializedStores,
} from 'redux/reducers/output/output.selectors'
import { getPageDurationsInFractionalSeconds } from 'redux/reducers/pageDurationStore/pageDurationStore'
import {
  getMoreInfoClicks,
  getSortByHistory,
} from 'redux/reducers/logicStore/logicStore.selectors'

interface OutputLineProps {
  varname: string
  value: string
  label: string
}

const OutputLine: FC<OutputLineProps> = ({ varname, value = '', label }) => {
  const { showOutput = true } = useEFSData<{ showOutput: boolean }>()

  // if showing output, then show labels in clear way
  if (showOutput) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0px 0px 8px 8px',
        }}
      >
        {showOutput && label && <span style={{ width: '15em' }}>{label}</span>}
        <input
          type={showOutput ? 'text' : 'hidden'}
          id={varname}
          name={varname}
          value={value !== null ? value : ''}
          onChange={() => {}}
          style={{
            width: '80%',
          }}
          readOnly
        />
      </div>
    )
  }

  return (
    <input
      type="hidden"
      id={varname}
      name={varname}
      value={value !== null ? value : ''}
      onChange={() => {}}
      readOnly
    />
  )
}

/**
 * Component to display the needed output for this experiment
 */

export const OutputSection: FC = () => {
  const {
    outputCondition,
    outputSelectedItemId,
    outputItemOrderShown,
    outputNumberOfItemsShown,
    outputSkipCardPage,
    outputReachedBasket,
    outputEmptyBasket,
    outputTimeSpentPerPage,
    outputReduxDebug,
    outputActionLog,
    outputSelectedAddons,
    outputPcwMoreInfoClicked,
    outputSortByKeysSelected,
    outputTotalMonthlyPayment,
    outputSpeedCardSelected,
    outputCardPrice,
    outputContractLength,
    outputAddonPrice,
    outputCardHasMultipleContractLengths,
    outputUltimateSelected,
  } = useEFSData()

  const outputByKey = useSelector(getOutputFromKey)
  const pageDurations = useSelector(getPageDurationsInFractionalSeconds)
  const reduxStores = encodeURIComponent(useSelector(getSerializedStores))
  const actionLog = useSelector(getActionLog)
  const sortByHistory = useSelector(getSortByHistory)
  const moreInfoClicks = useSelector(getMoreInfoClicks)

  return (
    <>
      <OutputLine
        varname={outputCardHasMultipleContractLengths}
        value={outputByKey(OutputTypes.cardHasMultipleContractLengths)}
        label="Card has multiple contract lengths"
      />
      <OutputLine
        varname={outputUltimateSelected}
        value={outputByKey(OutputTypes.ultimateSelected)}
        label="Ultimate Selected"
      />
      <OutputLine
        varname={outputCardPrice}
        value={outputByKey(OutputTypes.cardPrice)}
        label="Card price"
      />
      <OutputLine
        varname={outputAddonPrice}
        value={outputByKey(OutputTypes.addonPrice)}
        label="Addon price"
      />
      <OutputLine
        varname={outputContractLength}
        value={outputByKey(OutputTypes.contractLength)}
        label="Contract length"
      />
      <OutputLine
        varname={outputSpeedCardSelected}
        value={outputByKey(OutputTypes.speedCardSelected)}
        label="Speed Card Selected"
      />
      <OutputLine
        varname={outputTotalMonthlyPayment}
        value={outputByKey(OutputTypes.totalMonthlyPayment)}
        label="Total Monthly Payment"
      />
      <OutputLine
        varname={outputPcwMoreInfoClicked}
        value={JSON.stringify(moreInfoClicks)}
        label="PCW - More Info Clicked"
      />
      <OutputLine
        varname={outputCondition}
        value={outputByKey(OutputTypes.condition)}
        label="condition"
      />
      <OutputLine
        varname={outputSelectedItemId}
        value={outputByKey(OutputTypes.selectedItemID)}
        label="selectedItemID"
      />
      <OutputLine
        varname={outputSelectedAddons}
        value={outputByKey(OutputTypes.selectedAddons)}
        label="selectedAddons"
      />
      <OutputLine
        varname={outputItemOrderShown}
        value={outputByKey(OutputTypes.itemOrderShown)}
        label="itemOrderShown"
      />
      <OutputLine
        varname={outputNumberOfItemsShown}
        value={outputByKey(OutputTypes.numberOfItemsShown)}
        label="numberOfItemsShown"
      />
      <OutputLine
        varname={outputSkipCardPage}
        value={outputByKey(OutputTypes.skipCardPage)}
        label="skipCardPage"
      />
      <OutputLine
        varname={outputReachedBasket}
        value={outputByKey(OutputTypes.reachedBasket)}
        label="reachedBasket"
      />
      <OutputLine
        varname={outputEmptyBasket}
        value={outputByKey(OutputTypes.emptyBasket)}
        label="emptyBasket"
      />
      <OutputLine
        varname={outputTimeSpentPerPage}
        value={JSON.stringify(pageDurations)}
        label="timeSpentPerPage"
      />
      <OutputLine
        varname={outputSortByKeysSelected}
        value={sortByHistory?.join(',') || ''}
        label="Sort By Keys Selected"
      />
      <OutputLine
        varname={outputActionLog}
        value={actionLog}
        label="Action Log"
      />
      <OutputLine
        varname={outputReduxDebug}
        value={reduxStores}
        label="Redux Debug"
      />
    </>
  )
}
