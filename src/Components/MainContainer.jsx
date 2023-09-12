import React, { useState } from "react";
import NotesContainer from "./NotesContainer";

function MainContainer() {
  const [formNoteTitle, setFormNoteTitle] = useState("");
  const [formNoteDescription, setFormNoteDescription] = useState("");

  const [notesData,setNoteData] = useState([]);
 

console.log(notesData)
  function handleDeleteAllNotes(e){
    e.preventDefault();
        // setFormNoteTitle("");
        // setFormNoteDescription(""); 
        setNoteData([]);  
  }

  function handleAddNote(e){
    e.preventDefault();
        setNoteData([...notesData,{noteTitle:formNoteTitle,noteDescription:formNoteDescription}])
        setFormNoteTitle("");
        setFormNoteDescription("");  
  }

  return (
    <main className='w-full'>
      <form className="flex flex-col max-w-2xl w-[500px] gap-5 backdrop-blur-lg shadow-2xl bg-white bg-opacity-10 mx-auto rounded-xl">
        <input
          type="text"
          placeholder="Enter Note Title...."
          className="p-3 rounded-lg outline-none bg-transparent border-b-4 border-gray-800  text-xl"
          value={formNoteTitle}
          onChange={(e)=>setFormNoteTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="7"
          placeholder="Enter Your Note Description Here..."
          className=" p-3 rounded-lg outline-none bg-transparent border-2 border-gray-800 border-opacity-20 text-xl"
          value={formNoteDescription}
          onChange={(e)=>setFormNoteDescription(e.target.value)}
        ></textarea>
        <div className="Action-Buttons p-2 flex gap-10 justify-center items-center border-t-4  border-gray-800">
          <button className="bg-green-500 px-10 py-4 font-semibold shadow-2xl "
          onClick={handleAddNote}
          >
            Add Note
          </button>
          <button className="bg-red-500 px-10 py-4 shadow-2xl font-semibold" onClick={handleDeleteAllNotes}>
            Delete All Notes
          </button>
        </div>
      </form>

    <NotesContainer notesData={notesData} />      
    </main>
  );
}

export default MainContainer;
