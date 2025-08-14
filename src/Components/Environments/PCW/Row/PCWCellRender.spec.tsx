import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { PCWSchema, TagType, PlanInfoData } from 'types'
import { render } from '@testing-library/react'
import PCWCellRender from './PCWCellRender'

describe('<PCWCellRender/>', () => {
  const testSchemaColumn: PCWSchema = {
    type: 'subtext',
    shaded: false,
    sortable: false,
    excludedFromBasket: true,
    excludedFromPlanInfo: true,
    dataSource: 'tariffType',
  }
  it('should display corectly', () => {
    const testDataRow = [
      {
        id: 'tariffType',
        text: 'Fixed',
        subtext: 'Tariff Type',
      },
    ]
    const tags: TagType[] = [
      {
        text: 'test tag',
        color: 'white',
        tagColorType: 'primary',
      },
    ]

    const testPlanInfoData: PlanInfoData = {
      type: 'table',
      introText: 'test intro text',
      title: 'features',
    }
    const onselect = () => {}
    const container = render(
      <PCWCellRender
        schemaColumn={testSchemaColumn}
        cellsData={testDataRow}
        planInfoData={testPlanInfoData}
        tags={tags}
        handleSelect={onselect}
        mobileScreenSize={false}
      />
    )

    expect(container.getByText('Tariff Type')).toBeInTheDocument()
    expect(container.getByText('Fixed')).toBeInTheDocument()
  })

  // it('should throw error', () => {
  //   const mockError = jest.spyOn(console, 'error')
  //   mockError.mockImplementation(() => {})

  //   const testDataRow = []

  //   expect(() =>
  //     render(RenderFromSchema(testSchemaColumn, testDataRow, onselect))
  //   ).toThrowError('Incorrect column type')

  //   mockError.mockRestore()
  // })
})
