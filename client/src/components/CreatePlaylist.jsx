
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useState } from "react"
import { addPlaylist } from "@/Api/localApi"
import { toast } from "./ui/use-toast"
  
export default function CreatePlaylist(props) {
  const [name,setName] = useState("")
  const [coverurl,setcouverurl] = useState("")
  const handleSave = async () =>{
    const data = await addPlaylist(name,coverurl)
    if(data.message == false){
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Check login creditanals.",
      })
      return 
    }
    toast({
      variant:"success",
      title:"playlist created "
     })
    props.handleChange(!props.open)
    props.onCreation()
  }
  return (
    <div>
        <Popover open={props.open}>
  <PopoverTrigger asChild>

    <button onClick={()=>props.handleChange(!props.open)}>
    <Button size="sm">
        <PlusIcon className="mr-2 h-4 w-4" />
        Create Playlist
      </Button>
      </button>
      </PopoverTrigger>
  <PopoverContent> <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Playlist</CardTitle>
        <CardDescription>Add a new playlist to your library.</CardDescription>
      </CardHeader>
      <CardContent>
       
          <div className="grid gap-2">
            <Label htmlFor="title">Playlist Title</Label>
            <input id="title" placeholder="Enter playlist title" value={name} onChange={(e)=>setName(e.target.value)} className="w-[200px] h-[40px] pl-[10px] text-balance" />
          </div>

          <div className="grid gap-2 pt-[10px]">
            <Label htmlFor="cover">Cover Image URL</Label>
            <input id="cover" placeholder="Enter image URL" value={coverurl} onChange={e=>setcouverurl(e.target.value)}  className="w-[200px] h-[40px] pl-[10px] text-balance"/>
          </div>
        
      </CardContent>
      <CardFooter>
        <button onClick={handleSave}>
        <Button className="ml-auto">save playlist</Button>
        </button>
      </CardFooter>
      
    </Card></PopoverContent>
</Popover>

   
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}