// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX3C_kUKXRGYLrwbZeBlI-5S7mA8hcW9U",
  authDomain: "hack-948c8.firebaseapp.com",
  projectId: "hack-948c8",
  storageBucket: "hack-948c8.appspot.com",
  messagingSenderId: "133575282569",
  appId: "1:133575282569:web:9fd5db13b15134029a5b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


export function add_value(userId){
  document.getElementById("submit").addEventListener('click', (e) =>{
    e.preventDefault();
    let project_name = document.getElementById("project_name").value;
    let project_description = document.getElementById("project_description").value;
    let tags_array = document.getElementById("project_tags").value.toLowerCase().split(",").sort();
    let demands_ = document.getElementById("demands").value;
    // console.log(project_name)
    // console.log(project_description)
    // console.log(tags)
    set(ref(db, 'ideas/' + project_name), {
      id:userId,
      projectName : project_name,
      projectDescription : project_description,
      tags : tags_array,
      projectDemands : demands_
    });
    document.getElementById("project_name").value=""
    document.getElementById("project_description").value=""
    document.getElementById("project_tags").value=""
    document.getElementById("demands").value=""
  })

}
