import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('renders with default variant and size classes', () => {
    render(<Button>Save</Button>)

    const button = screen.getByRole('button', { name: 'Save' })
    expect(button).toHaveClass('inline-flex')
    expect(button).toHaveClass('h-9')
  })

  it('defaults native button type to button', () => {
    render(<Button>Submit</Button>)

    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toHaveAttribute('type', 'button')
  })

  it('forwards refs to the rendered button element', () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement | null>

    render(<Button ref={ref}>Ref test</Button>)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current?.textContent).toContain('Ref test')
  })

  it.each([
    ['default', 'bg-primary'],
    ['destructive', 'bg-destructive'],
    ['outline', 'border'],
    ['secondary', 'bg-secondary'],
    ['ghost', 'hover:bg-accent'],
    ['link', 'underline-offset-4'],
  ] as const)('applies %s variant class token', (variant, classToken) => {
    render(<Button variant={variant}>Variant</Button>)

    const button = screen.getByRole('button', { name: 'Variant' })
    expect(button).toHaveClass(classToken)
  })

  it.each([
    ['default', 'h-9'],
    ['sm', 'h-8'],
    ['lg', 'h-10'],
    ['icon', 'size-9'],
  ] as const)('applies %s size class token', (size, classToken) => {
    render(<Button size={size}>Sized</Button>)

    const button = screen.getByRole('button', { name: 'Sized' })
    expect(button).toHaveClass(classToken)
  })

  it('shows loading state, aria-busy, and spinner test id', () => {
    render(<Button loading>Saving</Button>)

    const button = screen.getByRole('button', { name: 'Saving' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByTestId('button-spinner')).toBeInTheDocument()
  })

  it('replaces children with loadingText when loading', () => {
    render(
      <Button loading loadingText="Saving changes...">
        Save
      </Button>,
    )

    expect(screen.getByRole('button', { name: 'Saving changes...' })).toBeInTheDocument()
    expect(screen.queryByText('Save')).not.toBeInTheDocument()
  })

  it('renders as child anchor with button classes', () => {
    render(
      <Button asChild variant="outline" size="lg">
        <a href="/docs">Docs</a>
      </Button>,
    )

    const link = screen.getByRole('link', { name: 'Docs' })
    expect(link).toHaveClass('inline-flex')
    expect(link).toHaveClass('border')
    expect(link).toHaveClass('h-10')
  })

  it.each([
    ['disabled', { disabled: true, loading: false }],
    ['loading', { disabled: false, loading: true }],
  ] as const)('prevents activation for asChild anchor when %s', (_state, { disabled, loading }) => {
    const onClick = vi.fn()
    const onKeyDown = vi.fn()

    render(
      <Button asChild disabled={disabled} loading={loading}>
        <a href="/docs" onClick={onClick} onKeyDown={onKeyDown}>
          Docs
        </a>
      </Button>,
    )

    const link = screen.getByRole('link', { name: 'Docs' })
    link.click()
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))

    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(onClick).not.toHaveBeenCalled()
    expect(onKeyDown).not.toHaveBeenCalled()
  })

  it.each([
    ['disabled', { disabled: true, loading: false }],
    ['loading', { disabled: false, loading: true }],
  ] as const)('blocks asChild activation even when capture handlers are provided via props while %s', (_state, { disabled, loading }) => {
    const onClick = vi.fn()
    const onKeyDown = vi.fn()
    const onClickCapture = vi.fn()
    const onKeyDownCapture = vi.fn()

    render(
      <Button
        asChild
        disabled={disabled}
        loading={loading}
        onClickCapture={onClickCapture}
        onKeyDownCapture={onKeyDownCapture}
      >
        <a href="/docs" onClick={onClick} onKeyDown={onKeyDown}>
          Docs
        </a>
      </Button>,
    )

    const link = screen.getByRole('link', { name: 'Docs' })
    link.click()
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))

    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(onClickCapture).toHaveBeenCalled()
    expect(onKeyDownCapture).toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
    expect(onKeyDown).not.toHaveBeenCalled()
  })

  it('does not fire native button click when disabled', () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Save
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Save' })
    button.click()

    expect(button).toBeDisabled()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders left and right icons', () => {
    render(
      <Button leftIcon={<span data-testid="left-icon" />} rightIcon={<span data-testid="right-icon" />}>
        Continue
      </Button>,
    )

    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('prioritizes loading spinner over left icon and hides right icon', () => {
    render(
      <Button loading leftIcon={<span data-testid="left-icon" />} rightIcon={<span data-testid="right-icon" />}>
        Continue
      </Button>,
    )

    expect(screen.getByTestId('button-spinner')).toBeInTheDocument()
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument()
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument()
  })
})
