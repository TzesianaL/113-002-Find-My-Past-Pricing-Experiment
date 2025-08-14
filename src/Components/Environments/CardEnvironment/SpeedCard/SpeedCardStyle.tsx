import styled from 'styled-components'

/**
 * Styled component is used to decorate CardWrapper component.
 * Props are passed from ThemeProvider component.
 */

interface SpeedCardStyleProps {
  highlightColor?: string
  selected?: boolean
}

export const SpeedCardStyle = styled.div<SpeedCardStyleProps>`
  --borderColor: ${(props) =>
    props.selected ? '#008000' : (props.highlightColor ?? '#d1d5db')};
  padding: 0px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

export const SpeedCardHighlight = styled.div`
  /* background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); */
  /* color: #1f2937; */
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 16px 10px 16px;
  border-radius: 0.3rem 0.3rem 0 0;
  text-align: left;
  position: absolute;
  top: 0;
  left: -2px;
  translate: 0 calc(-100% + 2px);
  z-index: -10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  min-width: 80%;
  max-width: calc(100% + 2 * 2px); /* 2px for left and right border offsets */
  background-color: var(--borderColor);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    min-width: 80px;
  }
`

export const CardContainer = styled.div`
  background: white;
  /* border: 2px solid #d1d5db; */
  border: 2px solid var(--borderColor);
  border-radius: 0.3rem;
  padding: 24px;
  width: 255px;
  height: 298px;
  display: flex;
  flex-direction: column;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 16px 0;
  line-height: 1.3;
`

export const MainSpeed = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0 0;
  line-height: 1;
`

export const SubTitle = styled.p`
  font-size: 20px;
  color: black;
  margin: 10px 0px 0px 0;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #e5e7eb;
  margin: 16px 0;
`

export const SpeedDetail = styled.div`
  margin-bottom: 12px;
`

export const SpeedValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`

export const SpeedExample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: black;
`

export const TimeValue = styled.span`
  color: #dc2626;
  font-weight: 600;
  min-width: 26px;
`

export const PricingSection = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const PriceContainer = styled.div`
  flex: 1;
`

export const FromText = styled.p`
  font-size: 18px;
  color: gray;
  font-weight: 500;
  margin: 0 0 4px 0;
`

export const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0;
`

export const PriceUnit = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #9ca3af;
`

export const SelectButton = styled.button`
  background: #111827;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #1f2937;
  }

  &:active {
    background: #374151;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 12px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px;
  }
`
