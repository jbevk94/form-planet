const name = document.getElementById('name')

const form = document.getElementById('form')

const no = document.getElementById('no')

const submit = document.getElementsByClassName('submit')

// This event listener prevents the form from refreshing when submit is pushed if there are errors
form.addEventListener('submit', (e) => {

    // let messages = []

    if (event.keyCode === 13) {
        console.log("key")
    }

const pressNo  = () => {
    if (no.checked == true) {
        const answer = document.getElementById('.answer').innerHTML = "That's great! Just be sure to bring along someone 18 years old or older."
       
    } 
} 

pressNo();
})

