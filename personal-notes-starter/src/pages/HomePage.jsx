import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Notes/NoteList";
import SearchBar from "../components/SearchBar";
import {
  getActiveNotes,
  getNote,
} from "../utils/local-data";
import NavAdd from "../components/layout/NavAdd";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onUpdateArchive = this.onUpdateArchive.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onUpdateArchive = (id) => {
    if (id) {
      const note = getNote(id);
      note.archived = true;

      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
  };

  onAddNoteHandler = (data) => {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, data],
      };
    });
  };

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <section className="search-bar">
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </section>
        <section>
          <NoteList
            notes={notes}
            onDelete={this.onDeleteHandler}
            onUpdate={this.onUpdateArchive}
          />
        </section>
        <div className="homepage__action">
          <NavAdd />
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
