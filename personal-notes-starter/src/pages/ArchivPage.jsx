import React from "react";
import PropTypes from "prop-types";
import NoteList from "../components/Notes/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, deleteNote, getNote } from "../utils/local-data";
import NoteListEmpty from "../components/Notes/NoteListEmpty";

class ArchivPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUpdateArchive = this.onUpdateArchive.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  onUpdateArchive(id) {
    if (id) {
      const note = getNote(id);
      note.archived = false;

      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
  }

  onAddNoteHandler(data) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, data],
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    if (typeof this.props.keywordChange === 'function') {
    this.props.keywordChange(keyword);
    }
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archive-page">
        <h2>Catatan Arsip</h2>
        <section className="search-bar">
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </section>
        <section className="notes-list">
          {filteredNotes.length > 0 ? (
            <NoteList
              notes={filteredNotes}
              onDelete={this.onDeleteHandler}
              onUpdate={this.onUpdateArchive}
            />
          ) : (
            <NoteListEmpty />
          )}
        </section>
      </section>
    );
  }
}

ArchivPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivPage;
