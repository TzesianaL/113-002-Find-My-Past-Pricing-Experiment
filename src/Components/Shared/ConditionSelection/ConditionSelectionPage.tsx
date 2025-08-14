import React, { FC, useCallback, useState } from 'react'
import Button from 'Components/Shared/Button/Button'
// import { useDispatch } from 'react-redux'
import { DataFileType } from 'types'
import { ConditionSelector } from './ConditionSelector'
import { ConditionSelectionPageStyle } from './ConditionSelectionPageStyle'

export interface ConditionSelectionPageProps {
  dataFile: DataFileType
  onClick: (number) => void
}
/**
 * This component represents a page which allows the user to select a condition from the given data file
 * and then continue
 */
export const ConditionSelectionPage: FC<ConditionSelectionPageProps> = ({
  dataFile,
  onClick,
}) => {
  const [chosenCondition, setChosenCondition] = useState(0)

  const handleConditionChange = useCallback(
    (newCondition: number) => {
      setChosenCondition(newCondition)
    },
    [setChosenCondition]
  )

  return (
    <ConditionSelectionPageStyle>
      <h1>Condition Selection</h1>
      <ConditionSelector dataFile={dataFile} onChange={handleConditionChange} />
      <Button onClick={() => onClick(chosenCondition)}>Continue</Button>
    </ConditionSelectionPageStyle>
  )
}
