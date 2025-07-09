const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
    {
        title: {
            type: String,
            required: true

        },

        content: {
            type: String,
            required: true,
            default: null
        },
        notebookId: {
            type: Schema.Types.ObjectId,
            default: null
        }
    },

    {
        timestamps: true
    }
);

const Note = mongoose.model('Note', NoteSchema);

module.exports = {
    Note,
};