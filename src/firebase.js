import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyDkyxSfd8JSKbpsSW3rHZ1B7TrBFnMMmZY",
	authDomain: "todo-app-e3687.firebaseapp.com",
	projectId: "todo-app-e3687",
	storageBucket: "todo-app-e3687.appspot.com",
	messagingSenderId: "46075032423",
	appId: "1:46075032423:web:0ca3ead925cec547e7f5c2",
	measurementId: "G-N68LFF8CQL",
});

const db = getFirestore(firebaseApp);

export default db;
