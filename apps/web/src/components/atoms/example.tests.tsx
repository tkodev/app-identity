import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import { Example } from '.'

describe('#Example', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Example />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
