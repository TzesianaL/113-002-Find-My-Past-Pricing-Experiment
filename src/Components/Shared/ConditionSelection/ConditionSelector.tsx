/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { DataFileType } from 'types'

export interface ConditionSelectorProps {
  dataFile: DataFileType
  onChange: (number) => void
}

export const ConditionSelector: FC<ConditionSelectorProps> = ({
  dataFile,
  onChange,
}) => {
  // Create the condition list whenever dataFile changes
  const conditionList = useMemo(
    () =>
      Object.keys(dataFile.conditions || []).map((conditionValue) =>
        parseInt(conditionValue, 10)
      ),
    [dataFile]
  )

  const [selectedCondition, setSelectedCondition] = useState(0)

  // fire the condition on first render
  useEffect(() => {
    if (conditionList.length > 0) {
      onChange(conditionList[0]) // use the first condition by default
    }
  }, [onChange, conditionList])

  // Handler to deal with different conditions being selected
  const handleChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCondition = parseInt(e.target.value, 10)
      setSelectedCondition(newCondition)
      onChange(newCondition)
    },
    [onChange]
  )

  if (!dataFile.conditions) {
    return <p>No conditions found in data file</p>
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <label htmlFor="conditions">Select a condition:</label>
      <select
        id="conditions"
        onChange={handleChangeSelect}
        value={selectedCondition}
      >
        {conditionList.map((condition) => {
          return (
            <option value={condition} key={condition}>
              {/* {condition} -  */}
              {dataFile.conditions?.[condition].conditionName}
            </option>
          )
        })}
      </select>
    </div>
  )
}
