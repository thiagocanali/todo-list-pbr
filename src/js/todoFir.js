// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

// firebase.initializeApp(config);

const collection = "todo";

let db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

function addTask(task, callback) {

    db.collection(collection).add(task).then(function (docRef) {
        console.log("Sucess - Task Id", docRef.id);
        callback(docRef.id);
    }).catch(function (error) {
        console.log("error ", error);
        callback(false, error);
    }
    )
}

function dataWasUpdated(callback){

    db.collection(collection).onSnapshot(callback);

}