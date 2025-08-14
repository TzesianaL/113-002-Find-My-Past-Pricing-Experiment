import React, { FC } from 'react'
import Button from 'Components/Shared/Button/Button'
import Title from 'Components/Shared/Title/Title'
import { PlanInfoData, CellDataType } from 'types'
import { PlanInfoMainText } from './PlanInfoMainText'
import { PopupTitle } from './PopupWindowStyle'

export interface PlanInfoProps {
  data?: PlanInfoData
  dataRow?: CellDataType[]
  onClose: () => void
}

const PlanInfo: FC<PlanInfoProps> = ({ data, dataRow, onClose }) => {
  const brandData = dataRow?.find((row) => row.id === 'productLogo')

  return (
    <>
      <PopupTitle>
        <img src={brandData?.imagePath} alt="" />
        <h3>{brandData?.text}</h3>
      </PopupTitle>
      <Title subtitle>{data?.introText}</Title>
      {data && PlanInfoMainText(data)}
      <Button onClick={onClose}>Back</Button>
      <div className="footerText">{data?.footerText}</div>
    </>
  )
}

export default PlanInfo
