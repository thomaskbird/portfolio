import { getApp, getApps, initializeApp } from "@firebase/app";
import {collection, Firestore, getFirestore, orderBy, where} from "@firebase/firestore";
import moment from "moment";
import config from "../config/sites";
import { query } from "@firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const renderFirestoreTimestamp = (timestamp: any) =>
  moment(timestamp.toDate()).format(config.momentFormat);

let firestoreDb: Firestore | null = null;
let thomaskbird = null;

try {
  if (!getApps().length) {
    thomaskbird = initializeApp(firebaseConfig);
  } else {
    thomaskbird = getApp();
  }

  firestoreDb = getFirestore(thomaskbird);
} catch (e) {
  console.log("e", e);
}

const collectionJobs = collection(firestoreDb, "jobs");
const collectionPortfolio = collection(firestoreDb, "portfolio");
const collectionContent = collection(firestoreDb, "content");

const queryAllPortfolioOrdered = query(collectionPortfolio);
const queryAllJobsOrdered = query(collectionJobs, orderBy("endAt", "desc"));

const queryAllContentOrdered = query(collectionContent, where('version_of', '==', '0'), where('status', '==', 'published'), where('deleted_at', '==', null), orderBy("created_at", "desc"));

export {
  firestoreDb,
  thomaskbird,
  renderFirestoreTimestamp,
  collectionPortfolio,
  collectionContent,
  queryAllJobsOrdered,
  queryAllPortfolioOrdered,
  queryAllContentOrdered,
};
