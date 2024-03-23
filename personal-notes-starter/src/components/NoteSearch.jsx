import React from "react";

function NoteSearch({ onSearch }) {
    const handleSearch = (event) => {
      const newSearchTerm = event.target.value;
    //   console.log(newSearchTerm); 
      onSearch(newSearchTerm);
    };
  
    return (
      <input
        type="text"
        placeholder="Cari catatan ..."
        onChange={handleSearch} 
      />
    );
  }

export default NoteSearch;