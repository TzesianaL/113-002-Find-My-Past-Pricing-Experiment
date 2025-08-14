import React, {
  FC,
  useState,
  useLayoutEffect,
  useEffect,
  useContext,
  createContext,
} from 'react'

interface EFSContinueContextType {
  isContinueShown: boolean
  isContinueActivated: boolean
  HideSubmit: () => void
  ShowSubmit: () => void
  ActivateSubmit: () => void
  DeactivateSubmit: () => void
  EFSSubmit: () => void
}

const defaultContext = {
  isContinueShown: true,
  isContinueActivated: true,
  HideSubmit: () => {},
  ShowSubmit: () => {},
  ActivateSubmit: () => {},
  DeactivateSubmit: () => {},
  EFSSubmit: () => {},
}

const EFSContinueContext = createContext<EFSContinueContextType>(defaultContext)

interface EFSContinueProviderProps {
  defaultShow?: boolean
  defaultActivate?: boolean
  efsButtonID?: string
}

// This provides various methods for interacting with the Continue button
// which can then be used anywhere in the React project via the power of
// React's context and hooks
export const EFSContinueProvider: FC<EFSContinueProviderProps> = ({
  defaultShow = true,
  defaultActivate = true,
  efsButtonID = 'os',
  children,
}) => {
  const continueButtonDOM = document.getElementById(
    efsButtonID
  ) as HTMLInputElement

  useLayoutEffect(() => {
    if (continueButtonDOM) {
      // Set the initial state
      continueButtonDOM.hidden = !defaultShow
      continueButtonDOM.disabled = !defaultActivate
    }
  }, [continueButtonDOM, defaultActivate, defaultShow])

  const [isContinueShown, setContinueShown] = useState(defaultShow)
  const [isContinueActivated, setContinueActivate] = useState(defaultActivate)

  // Some effects to handle the change in the shown and activation states
  useEffect(() => {
    // We only want to set teh attributes this if the DOM exists
    if (continueButtonDOM) {
      continueButtonDOM.hidden = !isContinueShown
      continueButtonDOM.disabled = !isContinueActivated
    }
  })

  // function to handle submitting the form and going onto the next page in EFS
  function EFSSubmit() {
    const form = document.getElementsByName('f1')[0] as HTMLFormElement
    form.submit()
  }

  // An object with all the methods and values that the user might care about
  // Basically using helper functions so that the components which use this
  // can be totally isolated from how this actually works

  const contextValue: EFSContinueContextType = {
    // This is a pretty bad variable name -- must be a better one out there
    isContinueShown,
    isContinueActivated,
    HideSubmit: () => {
      setContinueShown(false)
    },
    ShowSubmit: () => {
      setContinueShown(true)
    },
    ActivateSubmit: () => {
      setContinueActivate(false)
    },
    DeactivateSubmit: () => {
      setContinueActivate(true)
    },
    EFSSubmit,
  }

  // Do the providing and render the children
  return (
    <EFSContinueContext.Provider value={contextValue}>
      {children}
    </EFSContinueContext.Provider>
  )
}

// A simple hook to provide access to the EFS continue methods
// Very basic, but this allow us to isolate the concerns so the
// components which use this doesn't need to know it's using context
// We could put some checks in here to ensure the continue button exists, etc.
export const useEFSContinue = (): EFSContinueContextType => {
  const continueContext = useContext<EFSContinueContextType>(EFSContinueContext)

  return continueContext
}
