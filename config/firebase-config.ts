import firebase from "firebase";
import { env } from "./env";

firebase.initializeApp(env);
const db = firebase.firestore();

export default db;