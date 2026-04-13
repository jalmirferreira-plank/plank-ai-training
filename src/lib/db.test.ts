import { describe, it, expect, vi } from 'vitest'

vi.mock('@prisma/client', () => {
  return {
    PrismaClient: class {
      $connect = vi.fn()
      $disconnect = vi.fn()
    },
  }
})

describe('db', () => {
  it('exports a prisma singleton', async () => {
    const { prisma } = await import('@/lib/db')
    expect(prisma).toBeDefined()
    expect(typeof prisma).toBe('object')
  })

  it('reuses the same instance across imports (singleton)', async () => {
    const { prisma: a } = await import('@/lib/db')
    const { prisma: b } = await import('@/lib/db')
    expect(a).toBe(b)
  })
})
