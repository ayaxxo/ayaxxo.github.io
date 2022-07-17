const GRADES = {

    "A": 4.0,
    "A-": 3.67,
    "B+": 3.33,
    "B": 3.0,
    "B-": 2.67,
    "C+": 2.33,
    "C": 2.0,
    "C-": 1.67,
    "D+": 1.33,
    "D": 1.0,
    "F": 0.0
  };

  const MAX_CREDIT_HOURS = 5.0;
  const MIN_CREDIT_HOURS = 1.0;

  let creditHours = document.querySelectorAll(".credit-hours");
  let grades = document.querySelectorAll(".grade");
  let gradePoints = document.querySelectorAll(".grade-points")
  let gradePointsEarned = document.querySelectorAll(".grade-points-earned");

  let totalCredit = document.querySelectorAll(".total-credit");
  let totalGradePoints = document.querySelectorAll(".total-grade-points");
  let gpa = document.querySelector("#gpa");

  let sumCreditHours = 0;
  let sumGradePoints = 0;

  for(let i=0; i<creditHours.length; ++i) {

    creditHours[i].addEventListener("blur", () => {

      let creditHour = creditHours[i].value;
      let grade = grades[i].value;
      let gradePoint = GRADES[grade];


      if(validCreditHours(creditHour) && gradePoint !== undefined) {
        gradePointsEarned[i].textContent = creditHour*gradePoint;
      
      } else {
        gradePointsEarned[i].textContent = "";
      }

      calcTotalCreditHours();
      calcTotalGradePoints();
      calcGPA();

    });

    grades[i].addEventListener("blur", () => {

      let creditHour = creditHours[i].value;
      let grade = grades[i].value;
      console.log(grade);
      let gradePoint = GRADES[grade];
      console.log(gradePoint);

      if(validCreditHours(creditHour) && gradePoint !== undefined) {
        gradePoints[i].textContent = gradePoint;
        gradePointsEarned[i].textContent = creditHour*gradePoint;
      
      } else if(gradePoint !== undefined) {
        gradePoints[i].textContent = gradePoint;

      } else {
        gradePoints[i].textContent = "";
        gradePointsEarned[i].textContent = "";
      }

      calcTotalCreditHours();
      calcTotalGradePoints();
      calcGPA();

    });
  }

  function validCreditHours(credit) {
    
    return credit >=MIN_CREDIT_HOURS && credit <= MAX_CREDIT_HOURS;

  }

  function calcTotalCreditHours() {

    sumCreditHours = 0;
    
    for(let ch of creditHours) {

      if(validCreditHours(ch.value)) {
        sumCreditHours += parseInt(ch.value);
      }
    }

    totalCredit[0].textContent = sumCreditHours;
    totalCredit[1].textContent = sumCreditHours;
  }

  function calcTotalGradePoints() {
    sumGradePoints = 0;

    for(let e of gradePointsEarned) {

      if(e.textContent !== "") {
        sumGradePoints += parseFloat(e.textContent);
      }
      
      console.log(sumGradePoints);
    }

    totalGradePoints[0].textContent = sumGradePoints.toFixed(2);
    totalGradePoints[1].textContent = sumGradePoints.toFixed(2);
  }

  function calcGPA() {
    
    if(sumCreditHours > 0) {
      gpa.textContent = (sumGradePoints/sumCreditHours).toFixed(2);
    }
  }
  //Horizontal scrolling Function
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    document.documentElement.scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    e.preventDefault();
  }
  
  if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
  }
  let credits=document.getElementById("credits").value;
  let Gpa = document.getElementById("GPA").value;
  //   Dean's List function
  function deanList(){
    let msg= document.getElementById("msg")
    let Gpa = document.getElementById("GPA").value;
    if( Gpa<2.5){
        msg.innerHTML=`<div><h3>Be Careful you have a GPA warning! </h3></div>`;
        msg.style.color="#FF8080";
        // alert("Be Careful you have a GPA warning!!")
    }
    else if(Gpa>=2.5 && Gpa<3.5) {
        // alert("You are not on the Dean's List Yet. KEEP TRYING WE BELIEVE IN YOU!! ")
        msg.innerHTML=`<div><h3>You are not on the Dean's List Yet. KEEP TRYING WE BELIEVE IN YOU! </h3></div>`;
        msg.style.color="#79CFE0";
    }
    else if(Gpa>=3.5){
        // alert("CONGRATULATIONS! YOU ARE ON THE DEAN'S LIST")
        msg.innerHTML=`<div><h3> CONGRATULATIONS! You are on the Dean's List :) </h3></div>`;
        msg.style.color = "#7DDF7C";

    }
  
}
