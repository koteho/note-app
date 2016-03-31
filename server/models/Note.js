import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, require: true},
    colour:{type: String},
    createDate:{type: Date}
});

const Note = mongoose.model('Note', NoteSchema);