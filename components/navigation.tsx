"use client"

import Link from "next/link"
import { useAuth } from "./auth/auth-provider"
import { Button } from "./ui/button"
import { categorias } from "@/lib/data"
import { MoonIcon, SunIcon, UserCircle } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">✧ Círculo Místico</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              {categorias.map((categoria) => (
                <div key={categoria.titulo} className="nav-item">
                  <span className="font-medium">{categoria.titulo}</span>
                  <div className="subcategories p-2">
                    {categoria.subcategorias.map((sub) => (
                      <Link
                        key={sub.titulo}
                        href={`/foro/${categoria.titulo.toLowerCase()}/${sub.titulo.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-primary/20 rounded-md"
                      >
                        {sub.titulo}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/perfil">
                  <Button variant="ghost" className="gap-2">
                    <UserCircle className="h-5 w-5" />
                    {user.nombre}
                  </Button>
                </Link>
                <Button variant="outline" onClick={logout}>
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost">Iniciar Sesión</Button>
                </Link>
                <Link href="/registro">
                  <Button>Registrarse</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}