import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Button from '../Button/Button'
import {
  ChoicesWrapper,
  DropDownSelectedChoiceText,
  DropDownTitle,
  DropDownWrapper,
  HeaderButtonWrapper,
} from './DropDown.style'

interface Choice {
  text: string
  value: string
}

interface DropDownProps {
  title: string
  choices: Choice[]
  selectedValue?: string
  onSelect: (string) => void
}

/**
 * Hook to handle simple boolean toggling
 */
const useBooleanToggle = (
  defaultState?: boolean
): [boolean, () => void, (boolean) => void] => {
  const [isActive, setActive] = useState(defaultState || false)

  const toggleState = () => setActive((oldState) => !oldState)

  return [isActive, toggleState, setActive]
}

const DropDown: FC<DropDownProps> = ({
  title,
  choices,
  selectedValue,
  onSelect,
}) => {
  const [isSelected, toggleSelected, setSelected] = useBooleanToggle(false)

  const handleSelect = useCallback(
    (value) => {
      setSelected(false)
      onSelect(value)
    },
    [onSelect, setSelected]
  )

  // Handle click outside the thing
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelected(false)
      }
    },
    [setSelected]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])

  const selectedChoiceText =
    choices.find((choice) => selectedValue === choice.value)?.text || 'Default'

  return (
    <DropDownWrapper ref={ref}>
      <HeaderButtonWrapper isOpen={isSelected}>
        <Button onClick={toggleSelected}>
          <DropDownTitle>{title}:</DropDownTitle>
          <DropDownSelectedChoiceText>
            {selectedChoiceText}
          </DropDownSelectedChoiceText>
        </Button>
      </HeaderButtonWrapper>
      <CSSTransition
        in={isSelected}
        timeout={300}
        unmountOnExit
        classNames="choices"
      >
        <ChoicesWrapper>
          {choices.map((choice) => (
            <Button
              key={choice.value}
              onClick={() => handleSelect(choice.value)}
            >
              {choice.text}
            </Button>
          ))}
        </ChoicesWrapper>
      </CSSTransition>
    </DropDownWrapper>
  )
}

export default DropDown
