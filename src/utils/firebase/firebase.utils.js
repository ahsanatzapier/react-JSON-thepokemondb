// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  collection,
  getFirestore,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuEMqq4LwPUMgeHeUFqg__A-XlH59AUnQ",
  authDomain: "thepokemondb-9b5cd.firebaseapp.com",
  projectId: "thepokemondb-9b5cd",
  storageBucket: "thepokemondb-9b5cd.appspot.com",
  messagingSenderId: "763056058404",
  appId: "1:763056058404:web:7857e436ee507a32bba8b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line
export const db = getFirestore();

export const addCollectionandDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);

  // *****************************
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  // *****************************

  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "pokemons");
  // console.log(collectionRef);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const pokemonMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, Pokemons } = docSnapshot.data();
    // console.log(Pokemons);
    acc[title.toLowerCase()] = Pokemons;
    return acc;
  }, {});
  // console.log(pokemonMap);
  return pokemonMap;
};
