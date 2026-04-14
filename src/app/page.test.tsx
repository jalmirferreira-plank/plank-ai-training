import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Home page', () => {
  it('renders a generic hero with an email form', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: 'A simple homepage for your project' })).toBeInTheDocument()
    expect(
      screen.getByText('Use this space to introduce your product and collect interest from visitors.'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Learn more' })).toBeInTheDocument()
  })
})
