
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl px-4 mx-auto py-6">
      <div>
      <img src="https://scontent-tir3-1.xx.fbcdn.net/v/t1.6435-9/44061617_10161346795390352_2628071852559302656_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8dDNuIzSTi4Q7kNvgHot7bJ&_nc_ht=scontent-tir3-1.xx&oh=00_AYCo6F_QRQE0EWa9zmUQesJ3_vABPTmyBkWx8FUuRO7X_A&oe=668203CD" alt="Sign In" width={600} height={800} className="h-full w-full object-cover" />
      
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign up to get started with our platform.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="jdoe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <p>already have a account ? <Link to="/Sign-in"> <span className="hover:cursor-pointer text-blue-700 underline">Click here</span></Link></p>
      </div>
    </div>
  )
}