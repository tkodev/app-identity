import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import { Main  } from '.'

describe('Main', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Main />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
