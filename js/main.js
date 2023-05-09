'use scrict';

//to jest stala w JS

const btn = document.querySelector('header a');

const h1 = document.querySelector('header h1');

const h1Text = h1.innerText;

let counter = 0;

btn.addEventListener('click', () =>{
    counter ++;

    // if(counter % 2 === 0) {
    //     h1.innerText = h1Text;
    // }else {
    //     h1.innerText = 'Będzie Pan zadowolony ;)';
    // }
    
    counter % 2 === 0 ? h1.innerText = h1Text : h1.innerText = "bedzie pan zadowolony ;)"

});