let Courses = []

function addCourse() {
  let college = document.getElementById("college").value;
  let Department = document.getElementById("Department").value;
  let Course = document.getElementById("Course").value;
  Courses.push({college,Department,Course});
  console.log(Courses);
  load();
  save();
}

let item = document.getElementById("list");
function load(){
    item.innerHTML="";
    Courses.forEach((Newcourse)=>{
      item.innerHTML+=`<div><h6>${Newcourse.college} - ${ Newcourse.Department}</h6><h6>${Newcourse.Course}</h6></div>`;
    });
  
}
function save(){
  localStorage.setItem("Courses",JSON.stringify(Courses));
}
function read(){
  Courses = JSON.parse(localStorage.getItem("Courses")||[]);
  load();
}
read();
function Delete(){
  item.innerHTML="";
  localStorage.clear()
}