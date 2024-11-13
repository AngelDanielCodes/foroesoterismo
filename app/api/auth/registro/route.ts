import { NextResponse } from 'next/server'
import { hashPassword, generateToken } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { nombre, email, password } = await request.json()

    // Aquí irían las validaciones y la creación del usuario en la base de datos
    const hashedPassword = hashPassword(password)
    
    // Simularemos un ID de usuario para este ejemplo
    const userId = 'user_' + Date.now()
    
    const token = generateToken(userId)

    return NextResponse.json({ token })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error en el registro' },
      { status: 400 }
    )
  }
}