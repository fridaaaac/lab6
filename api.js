const apiURL =
  'https://api.currencylayer.com/live?access_key=08124f1a600868baaa3eeb0aaf04cff3&currencies=CAD,EUR,GBP';

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let cad = data.quotes.USDCAD.toFixed(4);
    let eur = data.quotes.USDEUR.toFixed(4);
    let gbp = data.quotes.USDGBP.toFixed(4);

    document.querySelector('#cad').textContent = cad;
    document.querySelector('#eur').textContent = eur;
    document.querySelector('#gbp').textContent = gbp;

    let when = new Date(data.timestamp * 1000);
    document.querySelector('#time').textContent = when.toLocaleTimeString('en-CA', {
      hour: 'numeric',
      minute: '2-digit'
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

/* api link：https://currencylayer.com/dashboard */