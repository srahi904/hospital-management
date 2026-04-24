import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Heart, Award, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { stats } from "@/lib/mock-data"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <Header />

      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Welcome to MediCare Plus
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Your Health, Our Priority</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. Book
                your appointment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/appointments">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/doctors">Meet Our Doctors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{stats.totalPatients.toLocaleString()}+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{stats.totalDoctors}+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{stats.totalAppointments.toLocaleString()}+</div>
                <div className="text-sm text-muted-foreground">Appointments</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{stats.satisfactionRate}%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose MediCare Plus</h2>
              <p className="text-muted-foreground text-pretty">
                We provide comprehensive healthcare services with a patient-first approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Doctors</h3>
                  <p className="text-muted-foreground">
                    Our team consists of highly qualified and experienced medical professionals
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Easy Appointments</h3>
                  <p className="text-muted-foreground">
                    Book appointments online 24/7 with our simple and convenient system
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Compassionate Care</h3>
                  <p className="text-muted-foreground">
                    We treat every patient with dignity, respect, and personalized attention
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Award Winning</h3>
                  <p className="text-muted-foreground">
                    Recognized for excellence in healthcare delivery and patient satisfaction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Emergency</h3>
                  <p className="text-muted-foreground">Round-the-clock emergency services for urgent medical needs</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Safe & Secure</h3>
                  <p className="text-muted-foreground">
                    Your health data is protected with industry-leading security measures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-primary-foreground/90">
                Book your appointment today and experience healthcare excellence
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/appointments">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
