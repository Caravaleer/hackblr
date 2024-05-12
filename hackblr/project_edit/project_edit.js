// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
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
let p = 'p2'
function load(project_name){
    const p_ref = ref(db, 'ideas/'+ project_name);
    onValue(p_ref, (snapshot)=>{
        document.getElementById("project_name").value = snapshot.val()['projectName'];
        document.getElementById("project_description").value = snapshot.val()['projectDescription'];
        document.getElementById("project_tags").value = snapshot.val()['tags'].join(",");
        document.getElementById("demands").value = snapshot.val()['projectDemands'];
    })
    document.getElementById("delete").addEventListener('click', (e) => {
        e.preventDefault();
        delete_profile(p);       
    })
    document.getElementById("submit").addEventListener('click', (e) => {
        e.preventDefault();
        edit();        
    })
}
function edit(){
    let project_name = document.getElementById("project_name").value;
    let project_description = document.getElementById("project_description").value;
    let tags_array = document.getElementById("project_tags").value.split(",");
    let demands_ = document.getElementById("demands").value;
    set(ref(db, 'ideas/' + project_name), {
        projectName: project_name,
        projectDescription: project_description,
        tags: tags_array,
        projectDemands: demands_
    });

}
function delete_profile(project_name){
    remove(ref(db, 'ideas/'+ project_name)).then(()=>{
        alert("data removed")
    })
    document.getElementById("project_name").value=""
    document.getElementById("project_description").value=""
    document.getElementById("project_tags").value=""
    document.getElementById("demands").value=""
}
p=prompt("Enter project name");
load(p)


// document
