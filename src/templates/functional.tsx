import React, { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {}

const COMPONENT_NAME: FC<Props> = () => {
  return <div />
}

export default COMPONENT_NAME
