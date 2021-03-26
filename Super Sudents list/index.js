let student =[
  {name: "Nikhil",
  superId: "Senpai Knock",
  profession: "Game Developer",
  tools: "C++, C# & Unity"}, 
  {name: "Prathamesh",
  superId: "Maari",
  profession: "Animator & Rapper",
  tools: "FL Studio, Photoshop, After Effects, Premier Pro"},
  {name: "Aniket",
  superId: "Roar",
  profession: "Rapper & Actor",
  tools: "Premier Pro, Photoshop, After Effects"},
  {name: "Jay",
  superId: "J4yke",
  profession: "Designer",
  tools: "Figma, Bravo & Webflow"},
  {name: "Raju",
  superId: "Ramma",
  profession: " Software Engineer",
  tools: "JavaScript, React, Angular, Node.js, MongoDB, MySQL"},
  {name: "Monya",
  superId: "Mon.cpp",
  profession: "Online Programmer",
  tools: "C++, Docker, Kubernetes, AWS, Networking, Devops"},
  {name: "Vaibhav",
  superId: "Vivem",
  profession: "3D artist",
  tools: "Maya, Blender, Unity, Unreal"},
  {name: "Sunny",
  superId: "Fage",
  profession: "VFX Editor",
  tools: "After Effects, NukeX, Photoshop, Premier Pro "},
  {name: "Rudraksha",
  superId: "Wild Card",
  profession: "3D artist & Writer",
  tools: "Maya, Blender, Mudbox, Animate, Pen"},
  {name: "Clark",
  superId: "Superman",
  profession: "Super Hero",
  tools: "Invincible, Flight, SuperHuman Strength, X-ray/Heat Vision"}
];

function display(arr){
  let rows = "";
  for(let i=0; i < arr.length; i++){
    rows += `
    <tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].superId}</td>
    <td>${arr[i].profession}</td>
    <td>${arr[i].tools}</td>
    </tr>`;   
  }
  //return console.log(rows);
  let body = document.getElementById("body");
  //console.log(body);
  body.innerHTML = rows;
}
display(student);

function searchBySuperPower(){
  //console.log( "hello shit");
  let searchedStudent =[];
  let search = document.getElementById("searchbar");
  let value = search.value;
  student.filter(function(obj){
    if(obj.tools.toUpperCase().includes(value.toUpperCase())){
      searchedStudent.push(obj);
      //console.log(searchedStudent)
    }
    
  });
  display(searchedStudent);
  
}
function addStudents(){
  //console.log("hello");
  let addStudent = {};
  let name = document.getElementById("name").value;
  let superid = document.getElementById("superId").value;
  let profess = document.getElementById("profess").value;
  let superPow = document.getElementById("superPow").value;

 
  addStudent.name =name[0].toUpperCase() + name.slice(1);
  addStudent.superId =superid[0].toUpperCase() + superid.slice(1);;
  addStudent.profession =profess[0].toUpperCase() + profess.slice(1);;
  addStudent.tools =superPow[0].toUpperCase() + superPow.slice(1);
  //console.log(addStudent);
  
  student.push(addStudent);
  
  display(student);
  }