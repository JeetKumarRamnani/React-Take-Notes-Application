import React from 'react'

function NotesContainer({notesData}) {
    console.log(notesData)
  return (
    <section className='Notes-Container border-4 mt-5 p-4'>
        <h2 className="text-3xl text-center">ALL Notes</h2>
        <section className="Notes flex border-t-2 p-8 gap-8 flex-wrap justify-start">
        {
            notesData.length > 0 ? notesData.map((note,index)=>{
               return <article key={index} className='Note border-2 w-[30%]  flex flex-col'>
                <h3 className="border-b-2 text-center">{note.noteTitle}</h3>
                <p className="text-sm p-3 text-justify">{note.noteDescription}</p>
            </article>
            }) : <h2 className="text-3xl">No Notes Are Available Right Now</h2>
       
        }
        {/* <article className='Note border-2 w-1/3 flex flex-col'>
            <h3 className="border-b-2 text-center">Note Title</h3>
            <p className="text-sm p-3 text-justify">Note Description</p>
        </article>
        <article className='Note border-2 w-1/3 flex flex-col'>
            <h3 className="border-b-2 text-center">Note Title</h3>
            <p className="text-sm p-3 text-justify">Note Description</p>
        </article> */}
        </section>
        </section>
  )
}

export default NotesContainer