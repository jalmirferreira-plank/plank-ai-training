import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-disabled:pointer-events-none aria-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disabled?: boolean
  loading?: boolean
  loadingText?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Spinner() {
  return (
    <svg
      data-testid="button-spinner"
      className="size-4 animate-spin"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disabled = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      type,
      onClick,
      onKeyDown,
      onClickCapture,
      onKeyDownCapture,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = disabled || loading
    const shouldBlockActivation = asChild && isDisabled

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if (shouldBlockActivation) {
        event.preventDefault()
        event.stopPropagation()
        return
      }

      onClick?.(event as React.MouseEvent<HTMLButtonElement>)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (shouldBlockActivation && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        event.stopPropagation()
        return
      }

      onKeyDown?.(event as React.KeyboardEvent<HTMLButtonElement>)
    }

    const handleClickCapture = (event: React.MouseEvent<HTMLElement>) => {
      if (shouldBlockActivation) {
        event.preventDefault()
        event.stopPropagation()
      }

      onClickCapture?.(event as React.MouseEvent<HTMLButtonElement>)
    }

    const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLElement>) => {
      if (shouldBlockActivation && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        event.stopPropagation()
      }

      onKeyDownCapture?.(event as React.KeyboardEvent<HTMLButtonElement>)
    }

    return (
      <Comp
        {...props}
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={!asChild ? isDisabled : undefined}
        aria-disabled={asChild && isDisabled ? true : undefined}
        aria-busy={loading ? true : undefined}
        type={!asChild ? (type ?? 'button') : undefined}
        onClick={handleClick}
        onClickCapture={handleClickCapture}
        onKeyDown={handleKeyDown}
        onKeyDownCapture={handleKeyDownCapture}
      >
        {loading ? <Spinner /> : leftIcon}
        <Slottable>{loading && loadingText ? loadingText : children}</Slottable>
        {!loading ? rightIcon : null}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
