//starts at 14:43, sat 21/9/2019

//jsonph

const url = 'https://jsonplaceholder.typicode.com/todos?_limit=3';

async function getDataFromCinemasAPI() {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        $('.card-text.c1').html((data[i]["title"]));
        $('.card-text.c2').html((data[i]["title"]));
        $('.card-text.c3').html((data[i]["title"]));
    }    
}

getDataFromCinemasAPI();
