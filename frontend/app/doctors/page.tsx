import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"
import Link from "next/link"
import { doctors } from "@/lib/mock-data"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Our Doctors</h1>
              <p className="text-xl text-muted-foreground">
                Meet our team of experienced and dedicated healthcare professionals
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium">{doctor.rating}</span>
                        </div>
                        <div className="text-muted-foreground">{doctor.patients}+ patients</div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">{doctor.experience} experience</div>
                        <div className="flex flex-wrap gap-1">
                          {doctor.availability.map((day) => (
                            <Badge key={day} variant="secondary" className="text-xs">
                              {day}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/appointments?doctor=${doctor.id}`}>
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
