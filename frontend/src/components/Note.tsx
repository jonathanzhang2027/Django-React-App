// import react from 'react'
import "../styles/Note.css"
interface Note {
    id: number;
    title: string;
    content: string;
    created_at: string; // Assuming created_at is a string representing the date
}
function Note({note, onDelete} : {note: Note, onDelete : (id : number) => void}) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    return <div className = "note-container">
        <p className = "note-title">{note.title}</p>
        <p className = "note-content">{note.content}</p>
        <p className = "note-date">{formattedDate}</p>
        <button className = "delete-button" onClick = {() => onDelete(note.id)}>Delete</button>
    </div>

}
export default Note