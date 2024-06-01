import axios from "axios"
import { fetchMovieDetails } from "./apicalls"

export const  baseurl = "https://fasal-assignment-cdr6.onrender.com/"


export async function signin(username,password){
    try {
        const data = await axios.get(`${baseurl}user/login`,{
            params:{
                name:username,
                password:password
            }
           }
        )
        console.log(data.data,"xcgvhbjl")
        return data.data
        
    } catch (error) {
        console.log(error,"sjdbfdsjf")
        return {message:false}
    }
   
}

export async function signup(username,email,password){
    try {
        const data = await axios.post(`${baseurl}user/create`,{
           
                name:username,
                password:password,
                email:email
            
           }
        )
        console.log(data.data,"xcgvhbjl")
        return data.data
        
    } catch (error) {
        console.log(error,"sjdbfdsjf")
        return {message:false}
    }
   
}

export async function getUserPlaylist(){
    try {
        const data = await axios.get(`${baseurl}playlist/user`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(data.data)
        return data.data
        
    } catch (error) {
        console.log(error,"erre")
    }
}

export async function addPlaylist(name,coverurl){
    try {

        const data = await axios.post(`${baseurl}playlist/create`,{
        name :name,
        coverImageUrl:coverurl,
        },{
            headers:{
                Authorization :`Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(data.data,"ssrdtfgvjbh")
        return data.data
    } catch (error) {
        console.log(error)
        return {message:false}
    }
}

export async function fetchMovieDetailsFromPlaylist(id){
    try{
        let playlistData = await axios.get(`${baseurl}playlist/get/${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
      playlistData = playlistData.data.data 
      console.log(playlistData,"info")
        let data = await axios.get(`${baseurl}movies/playlist/${id}`,{
           
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        data = data.data
        console.log(data,"playlistdata")
        if(data.message==false){
            return {message:false}
        }
        const movies = []
        var runtime = 0
        for(let i=0;i<data.data.length;i++){
                const res = await fetchMovieDetails(data.data[i].movieid)
                movies.push({...res,id:data.data[i].movieid,pkid:data.data[i].id})
                runtime += res.runtime
        }
        const user = await axios.get(`${baseurl}user/${id}`)
        return {movies,runtime,isPublic:playlistData.isPublic,name:user.data.data}
    }
    catch(error){
        console.log(error)
        return {message:false}
    }
}


export async function fetchPlaylistWithoutMovie(id){
    http://localhost:3001/movies/playlistWithoutMovie/5789
    try {
        const result = await axios.get(`${baseurl}movies/playlistWithoutMovie/${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log("error",error)
        return []
    }
}


export async function addMovieToPlaylist(playlistId, movieid){
    try {
        const result = await axios.post(`${baseurl}movies/create`,{playlistId,movieid},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(result.data,"txcyvuibon")
        return result.data 
    } catch (error) {
        
        return {message : true}
    }

}


export async function changePlaylistVisisbilty(e,id){
    try {
        const res  = await axios.get(`${baseurl}playlist/changeVisibility`,{
            params:{
                isPublic:e,
                id:id
            },
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
    return res.data
        
    } catch (error) {
        return {error}
    }
}
