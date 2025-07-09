const NotebooksDbUser = process.env.NOTEBOOKS_DB_USER
const NotebooksDbPassword = process.env.NOTEBOOKS_DB_PASSWORD
const NotebooksDbName = process.env.NOTEBOOKS_DB_NAME


console.log('Initializing : Notebooks DB user');
db = db.getSiblingDB(NotebooksDbName);

db.createUser({
    user: NotebooksDbUser,
    pwd: NotebooksDbPassword,
    roles: [
        {
            role: "readWrite",
            db: NotebooksDbName
        }
    ]
});