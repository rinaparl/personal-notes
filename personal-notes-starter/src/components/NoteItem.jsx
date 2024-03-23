import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import {showFormattedDate} from "../utils/index";
import NoteItemAction from "./NoteItemAction";

function NoteItem({title, body, id, onDelete, createdAt, onUpdate}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} date={showFormattedDate(createdAt)} />
            <NoteItemAction id={id} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
}

export default NoteItem;