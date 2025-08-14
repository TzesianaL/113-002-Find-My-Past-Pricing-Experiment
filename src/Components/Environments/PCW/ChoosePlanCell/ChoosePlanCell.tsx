import React, { FC, useContext } from 'react'
import { CSSProperties } from 'styled-components'
import { PlanInfoData, CellDataType } from 'types'
import { useDispatch } from 'react-redux'
import Button from 'Components/Shared/Button/Button'
import { addPCWMoreInfoClick } from 'redux/reducers/logicStore/logicStore'
import { ChoosePlanStyle, PlanInfoStyle } from './ChoosePlanStyle'
import Cell from '../Cell/Cell'
import { TableContext } from '../Table/Table'
import { PlanInfoContext } from '../PCWPage/PCWPage'

export interface ChoosePlanCellProps {
  buttonText?: string
  onSelect: () => void
  buttonStyle?: CSSProperties
  moreInfoText?: string
  planInfoData: PlanInfoData
  cellsData: CellDataType[]
}

const ChoosePlanCell: FC<ChoosePlanCellProps> = ({
  buttonText,
  onSelect,
  buttonStyle,
  moreInfoText,
  planInfoData,
  cellsData,
  ...props
}) => {
  const { product } = useContext(TableContext)
  const handleShowPlanInfoClick = useContext(PlanInfoContext)

  const dispatch = useDispatch()
  const handlePlanInfoClick = () => {
    dispatch(addPCWMoreInfoClick(product?.id ?? 'Product_not_found'))
    handleShowPlanInfoClick?.({ planInfoData, cellsData })
  }

  return (
    <Cell {...props}>
      <ChoosePlanStyle>
        <Button style={buttonStyle} onClick={onSelect}>
          {'Choose Plan' || buttonText}
        </Button>
        <PlanInfoStyle onClick={handlePlanInfoClick}>
          {'Plan Info' || moreInfoText}
        </PlanInfoStyle>
      </ChoosePlanStyle>
    </Cell>
  )
}

export default ChoosePlanCell
