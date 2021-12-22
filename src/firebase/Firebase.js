// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    doc,
    getFirestore,
    collection,
    updateDoc,
    onSnapshot,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUM5A_g__8iGunnWKMRlwnEO7oznytuFo",
    authDomain: "e-commerce-f5615.firebaseapp.com",
    projectId: "e-commerce-f5615",
    storageBucket: "e-commerce-f5615.appspot.com",
    messagingSenderId: "236385334049",
    appId: "1:236385334049:web:73d0eeeb235809b7868460",
    measurementId: "G-4XKJEH79Y6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

export const UploadData = async () => {
    const q = collection(db, "ProductsData");

    const UnsubscribeFromSearchData = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach(async (docdata) => {
            console.log(doc.id);
            const docRef = doc(db, `ProductsData/${docdata.id}`);
            await updateDoc(docRef, {
                uid: docdata.id,
            });
        });
    });
    // await Data.forEach( async element => {
    //   const docRef = await addDoc(collection(db, "ProductsData"),{
    //     name: element.name,
    //     uid: null,
    //     images:null,
    //     description: element.description,
    //     rating: element.rating,
    //     price: element.price,
    //     features:element.features
    //   });
    //   });
};
