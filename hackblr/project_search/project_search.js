import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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
let search_div = document.getElementById("search_div")

document.getElementById("submit").addEventListener('click', (e)=>{
    e.preventDefault()
    search_div.innerHTML=""
    checktags()
    
})
checktags()
function checktags(){
    let tags=document.getElementById("tags").value.toLowerCase().split(",")
    const p_ref = ref(db, 'ideas/');
    let snaps=[]
    let result = []
    onValue(p_ref, (snapshot)=>{
        snaps = Object.values(snapshot.val())
    })
    let inside
    for(let i of snaps){
        inside = true
        for(let s of tags){
            console.log("s is " + s);
            console.log("r is " + i['tags'])
            console.log(i['tags'].includes(s));
            if(!(i['tags'].includes(s))){
                inside= false
            }
        }
        if(inside){
            result.push({projectName : i['projectName'],description : i['projectDescription'], tg : i['tags'], demands : i['projectDemands']})
        }
        
        
        // d.innerText = val['description'] + "\n\n" + "tags:" + "\n" + val['tags'].sort().toString();
        // val['projectName'] + "\n\n" + val['description'] + "\n\n" + val['demands'] + "\n\n" + val['tg'].sort().toString()
        
    }
    console.log(result)
    
    
    for(let val of result){
        let d = document.createElement('div')
        let newP = document.createElement("a");
        
        let btn = document.createElement("button");
        btn.setAttribute("class", "visit");
        btn.innerText = "Visit Profile";
        newP.append(btn);
        newP.setAttribute("href", "");
        d.setAttribute("class", "result_div");
        // d.setAttribute("id", "result_div");
        
        d.innerText = "Project name : \n"+ val['projectName'] + "\n\n" + "Description : \n" + val['description'] + "\n\n" +"Demands : \n" + val['demands'] + "\n\n" +"Tags : \n" + val['tg'].sort().toString();
        search_div.append(d);
        d.append(newP);
        newP.append(btn)
    }

}
