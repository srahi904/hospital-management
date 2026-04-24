"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("patient@medicare.com")
  const [password, setPassword] = useState("password123")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call for fake login
    setTimeout(() => {
      if (email === "admin@medicare.com" && password === "password123") {
        document.cookie = "auth=admin; path=/"
        toast.success("Login successful")
        router.push("/admin")
      } else if (email === "patient@medicare.com" && password === "password123") {
        document.cookie = "auth=patient; path=/"
        toast.success("Login successful")
        router.push("/patient-portal")
      } else {
        toast.error("Invalid email or password. Use patient@medicare.com or admin@medicare.com with password123")
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your account.
              <span className="mt-4 block p-3 bg-primary/10 rounded-md text-sm text-primary font-medium">
                Try these fake credentials:<br/>
                <br/>
                <span className="font-semibold">Patient:</span><br/>
                patient@medicare.com / password123<br/>
                <br/>
                <span className="font-semibold">Admin:</span><br/>
                admin@medicare.com / password123
              </span>
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      
      <Footer />
    </div>
  )
}
