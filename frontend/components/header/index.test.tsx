import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import { Header  } from '.'

describe('Header', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
