import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Círculo Místico - Foro de Comunidad Esotérica',
  description: 'Únete a nuestra comunidad esotérica para explorar numerología, tarot, horóscopo, astrología, hechizos e interpretación de sueños.',
  keywords: 'foro esotérico, numerología, tarot, horóscopo, astrología, hechizos, interpretación de sueños',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <div className="stars" />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              <div className="container mx-auto px-4 py-6">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}