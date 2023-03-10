import { app } from "./config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const db = getFirestore(app);

console.log("executing");

function parseResults(querySnapshot) {
  const foundItems = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${Object.keys(doc.data())}`);

    const timeStamp = doc.data().date.seconds * 1000;
    const newItem = { id: doc.id, ...doc.data(), date: new Date(timeStamp) };
    foundItems.push(newItem);
  });

  return foundItems;
}

export async function getItems(pagination) {
  const querySnapshot = await getDocs(collection(db, "items"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function getItemById(id) {
  const querySnapshot = await getDocs(collection(db, "items"), id);
  const foundItems = parseResults(querySnapshot);

  return foundItems[0];
}

export async function getRecentItems() {
  const querySnapshot = await getDocs(collection(db, "items"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function getNotifications() {
  const querySnapshot = await getDocs(collection(db, "notifications"));

  const foundItems = parseResults(querySnapshot);

  return foundItems;
}

export async function saveScanned(data) {
  await addDoc(collection(db, "scanned"), {
    data,
  });
}
