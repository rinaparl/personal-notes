import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
      super(props);
  
      // inisial state
      this.state = {
        id: '',
        title: '',
        body: '',
        archived:'',
        createdAt: +new Date()
      };

      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
      this.setState(() => {
        return {
          title: event.target.value,
        }
      });
    }
    
    onNoteChangeEventHandler(event) {
      this.setState(() => {
        return {
          body: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNotes(this.state);
    }

    render() {
      return (
        <form className='note-input' onSubmit={this.onSubmitEventHandler}>
          <input type="text" placeholder='Ini adalah judul ...' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <input type="text" placeholder='Tuliskan catatanmu di sini ...' value={this.state.body} onChange={this.onNoteChangeEventHandler} />
          <button type='submit' className=''>Buat</button>
        </form>
      )
    }
  }

  export default NoteInput;
