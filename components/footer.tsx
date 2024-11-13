import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Círculo Místico</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tu comunidad esotérica de confianza desde 2024
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-foreground">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Comunidad</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/directrices" className="text-muted-foreground hover:text-foreground">
                  Directrices
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="text-muted-foreground hover:text-foreground">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Círculo Místico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}