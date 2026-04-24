import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Activity, TrendingUp } from "lucide-react"
import { appointments, patients, stats } from "@/lib/mock-data"

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Admin Dashboard</h1>
              <p className="text-xl text-muted-foreground">Manage hospital operations and monitor performance</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalPatients.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">+12%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Appointments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalAppointments.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">+8%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalDoctors}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">+3</span> new this month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.satisfactionRate}%</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">+2%</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border">
                          <div className="space-y-1">
                            <p className="font-medium">{appointment.patientName}</p>
                            <p className="text-sm text-muted-foreground">
                              {appointment.doctorName} - {appointment.specialty}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
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
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Patient Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 rounded-lg border">
                          <div className="space-y-1">
                            <p className="font-medium">{patient.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {patient.age} years • {patient.gender} • {patient.bloodType}
                            </p>
                            <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
