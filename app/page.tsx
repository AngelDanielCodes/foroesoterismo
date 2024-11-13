import { Card } from "@/components/ui/card"
import { categorias } from "@/lib/data"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Bienvenido al Círculo Místico
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Explora los misterios del universo y comparte tus experiencias con nuestra comunidad.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria) => (
          <Link
            key={categoria.titulo}
            href={`/foro/${categoria.titulo.toLowerCase()}`}
            className="block"
          >
            <Card className="h-full p-6 card-hover glass-effect">
              <h3 className="text-xl font-semibold mb-2">{categoria.titulo}</h3>
              <p className="text-muted-foreground mb-4">{categoria.descripcion}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{categoria.temasRecientes} temas</span>
                <span>{categoria.totalPublicaciones} publicaciones</span>
              </div>
            </Card>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <Card className="p-6 glass-effect">
          <h2 className="text-2xl font-semibold mb-4">Últimas Discusiones</h2>
          {/* Lista de últimas discusiones */}
        </Card>

        <Card className="p-6 glass-effect">
          <h2 className="text-2xl font-semibold mb-4">Miembros Activos</h2>
          {/* Lista de miembros activos */}
        </Card>
      </section>
    </div>
  )
}