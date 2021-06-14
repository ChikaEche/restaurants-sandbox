import firebase from "firebase";

const projectId = "myportfolio-2f9e2";
const config = {
  databaseURL: 'http://localhost:8080?ns=emulatorui',
  projectId
}
firebase.initializeApp(config);
const db = firebase.firestore();
db.useEmulator("localhost", 8080);

export default db;