import DropDown from 'Components/Shared/DropDown/DropDown'
import React, { FC, useCallback, useState } from 'react'
import { PCWSchema } from 'types'
import { useDispatch } from 'react-redux'
import {
  clearSortedByKey,
  setSortedByKey,
} from 'redux/reducers/logicStore/logicStore'

const DEFAULT_KEY = 'default'

interface SortByProps {
  schema: PCWSchema[]
}

const SortBy: FC<SortByProps> = ({ schema }) => {
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  )

  // Pick out the columns to sort by from the schema
  const sortableSchema = schema.filter(
    (cellSchema) => cellSchema.sortable === true
  )

  const choices = sortableSchema.map((cellSchema) => ({
    text: cellSchema.name || '-',
    value: cellSchema.dataSource,
  }))

  choices.unshift({ text: 'Default', value: DEFAULT_KEY })

  const handleSelect = useCallback(
    (value) => {
      setSelectedValue(value)
      if (value === DEFAULT_KEY) {
        dispatch(clearSortedByKey())
      } else {
        dispatch(setSortedByKey(value))
      }
    },
    [dispatch]
  )

  return (
    <DropDown
      title="Sorted By"
      choices={choices}
      onSelect={handleSelect}
      selectedValue={selectedValue}
    />
  )
}

export default SortBy
