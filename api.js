const apiURL =
  'https://api.currencylayer.com/live?access_key=08124f1a600868baaa3eeb0aaf04cff3&currencies=CAD';

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let cad = data.quotes.USDCAD;
    document.querySelector('#cad').textContent = cad;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

/* api link：https://currencylayer.com/dashboard */
