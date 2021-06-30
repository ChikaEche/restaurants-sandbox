
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { MeiliSearch } from 'meilisearch';

admin.initializeApp();

export const firestore = admin.firestore();
const firestoreSettings = { timestampsInSnapshots: true };
firestore.settings(firestoreSettings);
 
export const search = new MeiliSearch({
  host: functions.config().meilisearch.host, 
  apiKey: functions.config().meilisearch.api_key
});

export const storage = admin.storage();
