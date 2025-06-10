import Note from "../models/Note.js"

export async function getAllNotes(req,res){
  try {
    const notes = await Note.find().sort({createdAt:-1})
    res.json(notes)
  } catch (error) {
    console.log("There was an error in fetching all the notes" , error);
     res.json({message:"Error while getting the notes , Check console for further details"})
  }
}

export async function getNoteById(req,res){
   try {
    const note = await Note.findById(req.params.id)
    if(!note){
       return res.json({message:"Note doesnot exists"})
    }
    res.json(note)
   } catch (error) {
    console.log("There was an error in fetching your specific note" , error);
    res.json({message:"Error while getting your specific note , Check console for further details"})
   }
}

export async function createNote(req,res){
 try {
    const {title, content} = req.body

    const note = new Note({title , content})
  
    const savedNote = await note.save()
    res.json(savedNote)
 } catch (error) {
    console.log("There was an error while saving the values in database", error);
    res.json({message:"There was an error in saving values in DB"})
    
 }
}

export async function updateNote(req,res){
  try {
    const {title , content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
    
    if(!updateNote){
       return res.json({message:"Note not found"})
    }
    
    res.json(updatedNote)
  } catch (error) {
    console.log("There was an error while updating the values in database", error);
    res.json({message:"There was an error in updating the values in DB"})
  }
}

export async function deleteNote(req,res){
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote){
        res.json({message:"Note not found!"})
    }
    res.json({message:"Note deleted successfully from the database!"}) 
  } catch (error) {
    console.log("There was an error while updating the values in database", error);
    res.json({message:"There was an error in updating the values in DB"})
  }
}