export default function initFetchBitcoin() { }

fetch('https://blockchain.info/ticker')
  .then((resp) => resp.json())
  .then((bitcoin) => {
    const span = document.querySelector('.btc-preco');
    span.innerText = (5000 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });
