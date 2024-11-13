import { createHash } from 'crypto'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_seguro'

export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

export function generateToken(userId: string): string {
  return sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}