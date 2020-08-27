/* eslint-disable no-unused-vars */
import React from 'react'
import { render, screen } from '@testing-library/react'

import COMPONENT_NAME from '..'

describe(`COMPONENT_NAME`, () => {
  it(`renders correctly`, () => {
    const { container } = render(<COMPONENT_NAME />)
    expect(container.firstChild).toBeInTheDocument()
    // expect(screen.getByText(`test`)).toBeInTheDocument()
  })
})
