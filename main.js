const form = document.forms.myForm;
const input = form.elements.input
const submit = form.elements.submit
const button = form.elements.random
const option = form.elements.option
const span = document.querySelector('span')
const ul = document.querySelector('.inner')
const ol = document.querySelector('.text')
span.hidden = true
// input.onblur = function() {
//     if (input.value === '') {
//         this.classList.add("error");
//         input.focus();
//         submit.disabled = true
//     } else {
//         this.classList.remove("error");
//         submit.disabled = false
//     }
// };
input.addEventListener('blur', onblur);
submit.addEventListener('click', function (event) {
    let inputValue = input.value;
    let Selectvalue = option.value;
    if (event.target && inputValue === '') {
        span.hidden = false
        // inputValue === alert(Error)
    }
    else {
        span.hidden = true
        const li = document.createElement("li");
        li.classList.add('list')
        if (event.target) {
            fetch(`http://numbersapi.com/${inputValue}/${Selectvalue}`, {
                method: 'GET'
            })
                .then((response) => response.text())
                .then((result) =>
                    li.append(result),
                    ul.append(li))
                .catch((error) => { console.log('My error', error) })
                .finally(() => {
                    console.log('Finish request');
                })
        }
    }
})
button.addEventListener('click', function (event) {
    let randomValue = 'random';
    let Selectvalue = option.value;
    const li = document.createElement("li");
    li.classList.add('random')
    console.log(Selectvalue)
    if (event.target) {
        fetch(`http://numbersapi.com/${randomValue}/${Selectvalue}`, {
            method: 'GET'
        })
            .then((response) => response.text())
            .then((result) =>
                li.append(result),
                ol.append(li))
            .catch((error) => { console.log('My error', error) })
            .finally(() => {
                console.log('Finish request');
            })
    }
})
// button.addEventListener('click', function (event) {
//     let raddomValue = Math.floor(Math.random() * 1000);
//     let Selectvalue = Math.floor(Math.random() * option.value.length);
//     const li = document.createElement("li");
//     if (Selectvalue === 0) {
//         Selectvalue = 'trivia'
//     }
//     else if (Selectvalue === 1) {
//         Selectvalue = 'math'
//     }
//     else if (Selectvalue === 2) {
//         Selectvalue = 'date'
//     }
//     else if (Selectvalue === 3) {
//         Selectvalue = 'year'
//     }
//     console.log(Selectvalue)
//     if (event.target) {
//         fetch(`http://numbersapi.com/${raddomValue}/${Selectvalue}`, {
//             method: 'GET'
//         })
//         .then((response) => response.text())
//         .then((result) =>
//         li.append(result))
//         ul.append(li)
//         .catch((error) => { console.log('My error', error) })
//         .finally(() => {
//             console.log('Finish request');
//         })
//     }
// })


// console.log(input.type)
// console.log(option.value)
// if(option.value === 'date'){
//     input.type = 'date'
// }
// else {
//     input.type = 'number'
// }