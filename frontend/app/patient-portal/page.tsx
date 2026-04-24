import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, FileText, Activity } from "lucide-react"
import Link from "next/link"
import { appointments } from "@/lib/mock-data"

export default function PatientPortalPage() {
  const userAppointments = appointments.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Patient Portal</h1>
              <p className="text-xl text-muted-foreground">Manage your appointments and health records</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Appointments</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {userAppointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{appointment.doctorName}</h3>
                              <Badge
                                variant={
                                  appointment.status === "confirmed"
                                    ? "default"
                                    : appointment.status === "pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {appointment.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {appointment.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/appointments">Book New Appointment</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Medical Records</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                          <FileText className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Lab Results - Blood Test</h3>
                          <p className="text-sm text-muted-foreground">January 10, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                          <FileText className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Prescription - Medication</h3>
                          <p className="text-sm text-muted-foreground">January 8, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                          <FileText className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">X-Ray Report</h3>
                          <p className="text-sm text-muted-foreground">December 28, 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">John Smith</h3>
                          <p className="text-sm text-muted-foreground">Patient ID: #12345</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span className="font-medium">45 years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Blood Type:</span>
                          <span className="font-medium">O+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Visit:</span>
                          <span className="font-medium">Jan 10, 2025</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <Link href="/appointments">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <FileText className="h-4 w-4 mr-2" />
                        View Records
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Activity className="h-4 w-4 mr-2" />
                        Health Tracker
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
