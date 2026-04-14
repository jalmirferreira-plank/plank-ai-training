import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Input } from './input'

describe('Input', () => {
  it('renders label and associates it with the input by id', () => {
    render(<Input id="email" label="Email" value="" onChange={() => {}} />)

    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('shows hint when there is no error', () => {
    render(<Input label="Username" hint="Use 3-20 chars" value="" onChange={() => {}} />)
    expect(screen.getByText('Use 3-20 chars')).toBeInTheDocument()
  })

  it('shows error and hides hint when both are provided', () => {
    render(
      <Input
        label="Username"
        hint="Use 3-20 chars"
        error="Username is required"
        value=""
        onChange={() => {}}
      />,
    )

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.queryByText('Use 3-20 chars')).not.toBeInTheDocument()
  })

  it('shows hint when error is empty string', () => {
    render(<Input id="username" label="Username" hint="Use 3-20 chars" error="" value="" onChange={() => {}} />)

    const input = screen.getByLabelText('Username')
    expect(screen.getByText('Use 3-20 chars')).toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).toHaveAttribute('aria-describedby', 'username-hint')
  })

  it('calls onChange in controlled mode', () => {
    const onChange = vi.fn()
    render(<Input label="Name" value="" onChange={onChange} />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ana' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('applies aria-invalid and aria-describedby when error is present', () => {
    render(<Input id="password" label="Password" error="Too short" value="" onChange={() => {}} />)

    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'password-error')
    expect(screen.getByText('Too short')).toHaveAttribute('id', 'password-error')
  })
})
