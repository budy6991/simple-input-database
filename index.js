// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO9jXwny9OCfkNv6I_TYjU8MQRFA1MStk",
  authDomain: "simple-input-database.firebaseapp.com",
  databaseURL:
    "https://simple-input-database-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simple-input-database",
  storageBucket: "simple-input-database.appspot.com",
  messagingSenderId: "813296102253",
  appId: "1:813296102253:web:b00697a5cefeb7ceb88864",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const db = getDatabase();

const enterId = document.querySelector("#enterID");
const enterName = document.querySelector("#enterName");
const enterAge = document.querySelector("#enterAge");
const findId = document.querySelector("#findId");
const findName = document.querySelector("#findName");
const findAge = document.querySelector("#findAge");

const insertBtn = document.querySelector("#insert");
const updateBtn = document.querySelector("#update");
const removeBtn = document.querySelector("#remove");
const findBtn = document.querySelector("#find");

const insertData = () => {
  set(ref(db, "People/" + enterId.value), {
    Name: enterName.value,
    ID: enterId.value,
    Age: enterAge.value,
  })
    .then(() => {
      alert("Data added succesfully!");
    })
    .catch((error) => {
      alert(error);
    });
};
const findData = () => {
  const dbref = ref(db);

  get(child(dbref, "People/" + findId.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findName.innerHTML = "Name:" + snapshot.val().Name;
        findAge.innerHTML = "Age:" + snapshot.val().Age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
};
const updateData = () => {
  update(ref(db, "People/" + enterId.value), {
    Name: enterName.value,
    Age: enterAge.value,
  })
    .then(() => {
      alert("Data updated succesfully!");
    })
    .catch((error) => {
      alert(error);
    });
};

const removeData = () => {
  remove(ref(db, "People/" + enterId.value))
    .then(() => {
      alert("Data removed successfully");
    })
    .cath((error) => {
      alert(error);
    });
};

insertBtn.addEventListener("click", insertData);
updateBtn.addEventListener("click", updateData);
removeBtn.addEventListener("click", removeData);
findBtn.addEventListener("click", findData);
