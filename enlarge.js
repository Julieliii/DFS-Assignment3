var s1 = document.getElementById("sel1");
var s2 = document.getElementById("sel2");
var s3 = document.getElementById("sel3");
var s4 = document.getElementById("sel4");
var s5 = document.getElementById("sel5");
var s6 = document.getElementById("sel6");
var s7 = document.getElementById("sel7");
var s8 = document.getElementById("sel8");
var s9 = document.getElementById("sel9");

function enlarge1(){
    if(s1.style.width === "80%"){
        s1.style.width = "30%";
      }
    else{
        s1.style.width = "80%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge2(){
    if(s2.style.width === "80%"){
        s2.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "80%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge3(){
    if(s3.style.width === "80%"){
        s3.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "80%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge4(){
    if(s4.style.width === "80%"){
        s4.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "80%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge5(){
    if(s5.style.width === "80%"){
        s5.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "80%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge6(){
    if(s6.style.width === "80%"){
        s6.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "80%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }
 
  function enlarge7(){
    if(s7.style.width === "80%"){
        s7.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "80%";
        s8.style.width = "30%";
        s9.style.width = "30%";
      }
  }

  function enlarge8(){
    if(s8.style.width === "80%"){
        s8.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "80%";
        s9.style.width = "30%";
      }
  }

  function enlarge9(){
    if(s9.style.width === "80%"){
        s9.style.width = "30%";
      }
    else{
        s1.style.width = "30%";
        s2.style.width = "30%";
        s3.style.width = "30%";
        s4.style.width = "30%";
        s5.style.width = "30%";
        s6.style.width = "30%";
        s7.style.width = "30%";
        s8.style.width = "30%";
        s9.style.width = "80%";
      }
  }

  $(document).ready(function() {
    $('.js-dropdown-item').dropdownLayer({
      'elemSelector': "js-dropdown-item",
      'containerClass': "js-dropdown-items", 
      'descriptionClass': "js-description",
      'arrowClass': "js-dropdown-arrow",
      'dropdownClass': "js-dropdown",
      'dropdownContentClass': "js-dropdown-content",
      'disableDropdownClass': "js-dropdown-disable",
      'useSlideUp': true,
      'slideUpSpeed': 200,
      'useSlideDown': true,
      'slideDownSpeed': 200,
      'callOnCompleteHide': function(){ console.log('your custom function which will be called on complete after hiding'); },
      'callOnCompleteShow': function(){ console.log('your custom function which will be called on complete after showing'); }
    });
  });