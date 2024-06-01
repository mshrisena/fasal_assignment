
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "@/Contextprovider/AuthProvider"
import { signin } from "@/Api/localApi"
import { toast } from "@/components/ui/use-toast"

export default function SignIn() {
    const {} = useAuth()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async ()=>{
        // alert(`${username} - ${password}`)
       const data = await  signin(username,password)
       if(data.message == false || !data.token){
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Check login creditanals.",
        })
        return 
       }
       toast({
        variant:"success",
        title:"logined in "
       })
       localStorage.setItem("token",data.token)
       localStorage.setItem("username",data.user.name)
       window.location.replace(window.location.href.split('/').slice(0,-1).join('/'))
    }
  return (
    <div className="grid md:grid-cols-2 min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="hidden md:block">
        <img src="https://scontent-tir3-1.xx.fbcdn.net/v/t1.6435-9/44061617_10161346795390352_2628071852559302656_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8dDNuIzSTi4Q7kNvgHot7bJ&_nc_ht=scontent-tir3-1.xx&oh=00_AYCo6F_QRQE0EWa9zmUQesJ3_vABPTmyBkWx8FUuRO7X_A&oe=668203CD" alt="Sign In" width={600} height={800} className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-center p-0 md:py-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Welcome back! Please sign in to your account.</p>
          </div>
        
            <div>
              <Label htmlFor="email">Username</Label>
              <br />
              <input id="email" type="text" placeholder="John" value={username} onChange={(e)=>setUsername(e.target.value)} required className="w-[400px] h-[40px] pl-[10px] text-balance" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <br />
              <input id="password" type="password" required value={password} onChange={e=>setPassword(e.target.value)} className="w-[400px] h-[40px] pl-[10px] text-balance"/>
            </div>
            <button onClick={handleSubmit}>
            <Button className="w-full">
              Sign In
            </Button>
            </button>
          
          <p>Create a new account ? <Link to="/Sign-up"> <span className="hover:cursor-pointer underline text-blue-900">Click here</span> </Link></p>
        </div>
      </div>
    </div>
  )
}