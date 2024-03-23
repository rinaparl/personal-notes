import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({id, onDelete, onUpdate}) {
    return(
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onUpdate={onUpdate} />
        </div>
    )
}

export default NoteItemAction;