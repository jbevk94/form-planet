const name = document.getElementById("name");

const form = document.getElementById("form");

const no = document.getElementById("no");

let yes = document.getElementById("yes");

const submit = document.getElementsByClassName("submit");

// This event listener prevents the form from refreshing when submit is pushed if there are errors

const pressNo = () => {
  if (no.checked == true) {
    let answer = document.getElementById("answer").innerHTML =
      "That's great! Just be sure to bring along someone 18 years old or older."
  }else if(yes.checked == true){
    let answer = document.getElementById("answer").innerHTML =
      "Cool! Feel free to bring some friends along."
  }else {
     answer = document.getElementById("answer").innerHTML = ''
  }
};

pressNo();

no.addEventListener("click", pressNo);
yes.addEventListener("click", pressNo);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let messages = []

  if (event.keyCode === 13) {
    console.log("key");
  }
});
