//starts at 14:43, sat 21/9/2019

//jsonph

const url = 'https://jsonplaceholder.typicode.com/todos?_limit=9';

async function getDataFromCinemasAPI() {
  const response = await fetch(url);
  const data = await response.json();
  
  const cardContentForFilling = '<div class="col-md-4"><div class="card mb-4 box-shadow"><div class="card-body"><p class="card-text"> <p class="price"></p></p></div></div></div>';

  for (let i = 0; i < data.length; i++) {
    $('.append-here').append(cardContentForFilling);
    let cards = $('.card-text');
    let cardsPrices = $('.price');
    cards.eq(i).html((data[i]["title"]));
    cardsPrices.eq(i).html('€' + (data[i]["id"]));
  }
}

getDataFromCinemasAPI();
