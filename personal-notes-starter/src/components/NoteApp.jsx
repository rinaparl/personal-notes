import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onUpdateArchive = this.onUpdateArchive.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onUpdateArchive(id){
        const notes = this.state.notes
        const indexData = notes.findIndex(note => note.id === id);
        
        if (notes[indexData].archived) {
            notes[indexData].archived = false
            this.setState({notes : notes})
        } else {
            notes[indexData].archived = true
            this.setState({notes : notes})
        }
    }
    
    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        });
    }

    render() {
        const data = this.state.notes
        function dataNotes(bool){
                const filterNotes = data.filter(item => item.archived === bool)
                return filterNotes
        }
        
        return (
            <div className="note-app__body">
                <h1>Notes</h1> <hr />
                <h2>Tambah Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <h2>Catatan Aktif</h2>
                <NoteList notes={dataNotes(false)} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateArchive} />
                <h2>Arsip</h2>
                <NoteList notes={dataNotes(true)} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateArchive}/>

            </div>
        );
    }
}


export default NoteApp;