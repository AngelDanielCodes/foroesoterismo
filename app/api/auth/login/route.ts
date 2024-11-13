import { NextResponse } from 'next/server'
import { hashPassword, generateToken } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Aquí iría la verificación con la base de datos
    const hashedPassword = hashPassword(password)
    
    // Simularemos un ID de usuario para este ejemplo
    const userId = 'user_123'
    
    const token = generateToken(userId)

    return NextResponse.json({ token })
  } catch (error) {
    return NextResponse.json(
      { error: 'Credenciales inválidas' },
      { status: 401 }
    )
  }
}