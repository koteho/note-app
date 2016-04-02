import React from 'react';

import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#ffffff'
        };
    },
    
    hanldeTextChange(event) {
        this.setState({ text: event.target.value});
    },
    
    hanldeTitleChange(event) {
        this.setState({ title: event.target.value});
    },
    
    handleColorChange(color) {
        this.setState({ color });
    },
    
    handleNoteAdd(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };
        
        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#ffffff'
        });
    },
    
    render() {
        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='NoteEditor__text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                
                <button
                    className='NoteEditor__button'
                    disabled={!this.state.text}
                    onClick={this.handleNoteAdd}
                >
                    Add
                </button>
            </div>
        );
    }
});

export default NoteEditor;