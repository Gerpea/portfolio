import React, { PropsWithChildren } from 'react'

const Text: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <p {...rest}>{children}</p>
  )
}

export default Text