import React from 'react'
import Navbar from '../components/Navbar'
import { useState , useEffect} from 'react'
import RateLimitedUi from '../components/RateLimitedUi'
import axios from "axios"
import toast from "react-hot-toast"
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'
import Footer from '../components/Footer'
import { LoaderIcon } from 'lucide-react'


const HomePage = () => {
  const [isRateLimited , setIsRateLimited] = useState(false)
  const [notes , setNotes] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
      const fetchNotes = async ()=>{
       try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data);
        setNotes(res.data)
        setIsRateLimited(false)
       } catch (error) {
        if(error.response.status === 429){
          setIsRateLimited(true)
        } else{
          toast.error("Failer to load notes ")
          console.log("Error while fetching the notes from DB", error);
        } 
       }  finally{
        setLoading(false)
      }  
      }
      fetchNotes()
  },[])
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <>
    <div className='min-h-screen'>
      <Navbar/>

      {isRateLimited && <RateLimitedUi/>}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
       {notes.length ===0 && !isRateLimited && <NotesNotFound/>}
       {notes.length>0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note)=>{
           return(
           <NoteCard key={note._id} note={note} setNotes={setNotes}/>
           )
          })}
        </div>
       )}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage