import React from 'react'

const Text: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children,...rest }) => {
  return (
    <p {...rest}>{children}</p>
  )
}

export default Text