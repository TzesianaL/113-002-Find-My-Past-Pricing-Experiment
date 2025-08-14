import React, { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PopupWindowStyle } from './PopupWindowStyle'

const Modal: FC<{ show: boolean; animationDuration: number }> = ({
  show,
  animationDuration,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <PopupWindowStyle
          as={motion.div}
          initial={{
            transform: 'translateX(100%)',
          }}
          animate={{
            transform: 'translateX(0%)',
            transition: {
              duration: animationDuration / 1000,
            },
          }}
          exit={{
            transform: 'translateX(100%)',
            transition: {
              duration: animationDuration / 1000,
            },
          }}
        >
          {children}
        </PopupWindowStyle>
      )}
    </AnimatePresence>
  )
}

export default Modal
