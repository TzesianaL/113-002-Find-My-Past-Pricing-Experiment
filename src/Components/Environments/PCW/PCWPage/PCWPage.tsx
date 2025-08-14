import React, { createContext, FC, useState } from 'react'
import { PCWSchema, PCWProductData, CellDataType, PlanInfoData } from 'types'
import { CSSProperties } from 'styled-components'
import StoreBanner from 'Components/Shared/StoreBanner/StoreBanner'
import Title from 'Components/Shared/Title/Title'
import OutsideClickHandler from 'react-outside-click-handler'
import { useSelector } from 'react-redux'
import {
  selectPCWSchema,
  selectSortedPCWData,
} from 'redux/reducers/dataStore/dataStore.selectors'
import {
  PCWPageStyle,
  FooterStyle,
  ButtonWrapper,
  HeaderWrapper,
  ContentStyle,
  HeaderStyle,
} from './PCWPageStyle'
import PlanInfo from '../PlanInfo/PlanInfo'
import Modal from '../PlanInfo/Modal'
import PCWTable from '../Table/Table'
import SortBy from '../SortBy/SortBy'

interface PlanInfoDataBundle {
  planInfoData?: PlanInfoData
  cellsData?: CellDataType[]
}

export const PlanInfoContext = createContext<
  ((PlanInfoDataBundle) => void) | undefined
>(undefined)

export interface PCWPageProps {
  headerText?: string
  footerText?: string
  titleStyle?: CSSProperties
  logo?: string
  text?: string
  onSelect: (id: string) => void
}

const PCWPage: FC<PCWPageProps> = ({
  headerText,
  footerText,
  titleStyle,
  logo,
  text,
  onSelect,
}) => {
  const [{ planInfoData, cellsData }, setPlanInfoData] =
    useState<PlanInfoDataBundle>({})
  const [planInfoVisible, setPlanInfoVisible] = useState(false)

  const handleCloseClick = () => {
    setPlanInfoVisible(false)
  }

  const handleShowPlanInfoClick = (newData) => {
    setPlanInfoData({
      planInfoData: newData.planInfoData,
      cellsData: newData.cellsData,
    })
    setPlanInfoVisible(true)
  }

  // Grab the schema and dataset from Redux instead of passed props
  const schema: PCWSchema[] = useSelector(selectPCWSchema)
  const products: PCWProductData[] = useSelector(selectSortedPCWData)

  return (
    <PlanInfoContext.Provider value={handleShowPlanInfoClick}>
      <PCWPageStyle blur={planInfoVisible} blurDuration={0.3}>
        <StoreBanner name={text} logoSrc={logo} />
        <HeaderWrapper>
          <Title subtitle style={titleStyle}>
            {headerText && (
              <HeaderStyle dangerouslySetInnerHTML={{ __html: headerText }} />
            )}
          </Title>
        </HeaderWrapper>
        <ContentStyle>
          <ButtonWrapper>
            <SortBy schema={schema} />
          </ButtonWrapper>
          <PCWTable schema={schema} products={products} onSelect={onSelect} />
          {footerText && (
            <FooterStyle dangerouslySetInnerHTML={{ __html: footerText }} />
          )}
        </ContentStyle>
      </PCWPageStyle>
      <OutsideClickHandler onOutsideClick={handleCloseClick}>
        <Modal show={planInfoVisible} animationDuration={650}>
          <PlanInfo
            data={planInfoData}
            dataRow={cellsData}
            onClose={handleCloseClick}
          />
        </Modal>
      </OutsideClickHandler>
    </PlanInfoContext.Provider>
  )
}

export default PCWPage
