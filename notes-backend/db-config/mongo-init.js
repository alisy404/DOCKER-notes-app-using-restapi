const NotesDbUser = process.env.NOTES_DB_USER
const NotesDbPassword = process.env.NOTES_DB_PASSWORD
const NotesDbName = process.env.NOTES_DB_NAME


console.log('Initializing : notes DB user');
db = db.getSiblingDB(NotesDbName);

db.createUser({
    user: NotesDbUser,
    pwd: NotesDbPassword,
    roles: [
        {
            role: "readWrite",
            db: NotesDbName
        }
    ]
});