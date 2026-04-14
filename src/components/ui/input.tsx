import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  hint?: string
  error?: string
  id?: string
  name?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      label,
      hint,
      error,
      id,
      name,
      type = 'text',
      placeholder,
      disabled = false,
      required = false,
      className,
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const supportText = error ?? hint
    const supportTextId = supportText ? `${inputId}-${error ? 'error' : 'hint'}` : undefined

    return (
      <div className="space-y-1.5">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required ? <span className="ml-0.5 text-destructive">*</span> : null}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={supportTextId}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            error ? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20' : null,
            className,
          )}
        />
        {supportText ? (
          <p id={supportTextId} className={cn('text-xs', error ? 'text-destructive' : 'text-muted-foreground')}>
            {supportText}
          </p>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'
