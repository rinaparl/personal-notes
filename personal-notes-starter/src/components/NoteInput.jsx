import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
      super(props);
  
      // inisial state
      this.state = {
        id:  +new Date(),
        title: '',
        body: '',
        archived:false,
        createdAt: +new Date()
      };

      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
      const newTitle = event.target.value
      if (newTitle.length <= 50) {
        this.setState({
          title: newTitle
        })

      }
      
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
      if (this.state.title.length === 0 || this.state.body.length === 0 ) {
        alert('Judul atau Catatan harus di isi ')
      }  
      if (this.state.title.length > 50) {
        alert('judul tidak boleh lebih dari 50 karakter')
      }

      this.props.addNote(this.state);
    }

    render() {
      return (
        <form className='note-input' onSubmit={this.onSubmitEventHandler}>
          <p>Sisa Karakter : { 50 - this.state.title.length } </p>
          <input type="text" placeholder='Ini adalah judul ...' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <input type="text" placeholder='Tuliskan catatanmu di sini ...' value={this.state.body} onChange={this.onNoteChangeEventHandler} />
          <button type='submit' className=''>Buat</button>
        </form>
      )
    }
  }

  export default NoteInput;
