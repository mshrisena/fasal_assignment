import axios from "axios"
import { fetchMovieDetails } from "./apicalls"

let baseurl = "http://localhost:3001/"


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
        return data.data
    } catch (error) {
        return {message:false}
    }
}

export async function fetchMovieDetailsFromPlaylist(id){
    try{
        let data = await axios.get(`${baseurl}movies/playlist/${id}`,{
           
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        data = data.data
        if(data.message==false){
            return {message:false}
        }
        const movies = []
        var runtime = 0
        for(let i=0;i<data.data.length;i++){
                const res = await fetchMovieDetails(data.data[0].movieid)
                movies.push({...res,id:data.data[0].movieid,pkid:data.data[0].id})
                runtime += res.runtime
        }
        return {movies,runtime}
    }
    catch(error){
        console.log(error)
        return {message:false}
    }
}