import Button, { ButtonProps } from 'Components/Shared/Button/Button'
import React, { createContext, FC, useContext, ReactNode } from 'react'

type MutexContextValue = {
  value: string | undefined
  onValueChange: (value: string | undefined) => void
}

const MutexContext = createContext<MutexContextValue | undefined>(undefined)

// Custom hook for type-safe context access
const useMutexContext = () => {
  const context = useContext(MutexContext)
  if (!context) {
    throw new Error('MutexButton must be used within a MutexButtonGroup')
  }
  return context
}

interface MutexButtonGroupProps {
  value: string | undefined
  onValueChange: (value: string | undefined) => void
  children: ReactNode
  /** Optional: Allow deselection by clicking the same button */
  allowDeselect?: boolean
  /** Optional: Custom styling for the button group container */
  style?: React.CSSProperties
  /** Optional: Direction of button layout */
  direction?: 'row' | 'column'
  /** Optional: Accessibility label for the button group */
  'aria-label'?: string
}

const MutexButtonGroup: FC<MutexButtonGroupProps> = ({
  value,
  onValueChange,
  children,
  allowDeselect = false,
  style,
  direction = 'row',
  'aria-label': ariaLabel,
}) => {
  const handleValueChange = (newValue: string) => {
    // Allow deselection if the same value is clicked and deselect is enabled
    if (allowDeselect && value === newValue) {
      onValueChange(undefined)
    } else {
      onValueChange(newValue)
    }
  }

  return (
    <MutexContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
      }}
    >
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: 'center',
          gap: '0.5rem', // More modern than margins
          ...style,
        }}
      >
        {children}
      </div>
    </MutexContext.Provider>
  )
}

type MutexButtonProps = Omit<ButtonProps, 'onClick'> & {
  value: string
  /** Optional: Custom colors for selected/unselected states */
  selectedColor?: string
  unselectedColor?: string
  borderColor?: string
}

const MutexButton: FC<MutexButtonProps> = ({
  value,
  style,
  selectedColor = '#d6d6d6',
  unselectedColor = '#d6d6d6',
  borderColor = '#007000',
  ...props
}) => {
  const { value: selectedValue, onValueChange } = useMutexContext()
  const isSelected = selectedValue === value

  return (
    <Button
      aria-checked={isSelected}
      onClick={() => onValueChange(value)}
      style={{
        color: 'black',
        backgroundColor: isSelected ? selectedColor : unselectedColor,
        border: isSelected
          ? `2px solid ${borderColor}`
          : '2px solid transparent',
        // Remove margin in favor of gap in parent
        transition: 'all 0.2s ease-in-out', // Smooth transitions
        ...style,
      }}
      {...props}
    />
  )
}

export { MutexButtonGroup, MutexButton }
