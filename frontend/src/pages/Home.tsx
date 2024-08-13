import { useState } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const getNote = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id: number ) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status == 204) alert("Note Deleted");
        else alert("Failed to delete note.");
        getNote();
      })
      .catch((error) => alert(error));
    
  };

  const createNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status == 201) alert("Note Created");
        else alert("Failed to create note.");
        getNote();
      })
      .catch((err) => alert(err));
    
  };
  return (
    <>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => <Note note={note} onDelete = {deleteNote} key = {note.id}/>)}
      </div>
      <h2> Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title"> Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <label htmlFor="title"> Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default Home;
