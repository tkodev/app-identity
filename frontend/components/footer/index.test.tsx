import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import { Footer  } from '.'

describe('Footer', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
