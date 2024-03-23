import React from 'react';
 
function ArchiveButton({ id, onUpdate }) {
  return <button className='note-item__archive-button' onClick={() => onUpdate(id)}>Arsipkan</button>
}
 
export default ArchiveButton;