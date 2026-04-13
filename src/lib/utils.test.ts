import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('concatenates plain class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('drops duplicate Tailwind classes, keeping the last one', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2')
  })

  it('ignores falsy conditional values', () => {
    const isActive = false
    expect(cn('base', isActive && 'active', 'end')).toBe('base end')
  })

  it('accepts arrays and objects (clsx passthrough)', () => {
    expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c')
  })
})
