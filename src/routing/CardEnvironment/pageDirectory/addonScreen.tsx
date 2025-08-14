import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddonPage from 'Components/Environments/CardEnvironment/AddonPage/AddonPage'
import { useHistory } from 'react-router-dom'
import {
  getAddonLayout,
  selectAddonPageOptions,
  selectBannerData,
} from 'redux/reducers/dataStore/dataStore.selectors'
import {
  getAddonsForSelectedItem,
  getAddonsInBasket,
} from 'redux/reducers/logicStore/logicStore.selectors'

interface AddonScreenProps {
  nextPage: string
}

const AddonScreen: FC<AddonScreenProps> = ({ nextPage }) => {
  const { logoSrc: bannerLogoSrc, text: bannerText } =
    useSelector(selectBannerData)
  const pageOptions = useSelector(selectAddonPageOptions)
  const addons = useSelector(getAddonsForSelectedItem)
  const layout = useSelector(getAddonLayout)
  const history = useHistory()
  const addonsInBasket = useSelector(getAddonsInBasket)

  useEffect(() => {
    if (addons.length === 0) {
      history.push(nextPage)
    }
  }, [addons, history, nextPage])

  const handleAddonNextPage = (): void => {
    history.push(nextPage)
  }

  return (
    <AddonPage
      data={addons}
      layout={layout}
      bannerName={bannerText}
      bannerLogoSrc={bannerLogoSrc}
      introText={pageOptions?.introText}
      footerText={pageOptions?.footerText}
      onContinue={handleAddonNextPage}
    />
  )
}

export default AddonScreen
