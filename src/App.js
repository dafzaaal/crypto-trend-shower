import './css/styles.css';
import React from 'react';
import bitcoin from './images/bitcoin.png'

function App() {
  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Asap:wght@100&family=IBM+Plex+Sans:wght@100&family=Noto+Sans+JP:wght@100&family=Nunito:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&family=Space+Mono&display=swap" rel="stylesheet"/>
      <title>Cyrpto Currency Trend Graph</title>
      </head>



      <body>

        <div class="intro">
          <h2>Crypto-Tracker!</h2>
          <p>
          This is an application which when given a valid crypto currency name will return a graph visualizing 
          it's trend over the last 7-days!
          </p>
        </div>





        <div class="container">
          <input type='text' name='crypto name' id="cryptoName" placeholder="Enter a crypto name..." />
        </div>
      </body>




    </html>
  );
}

export default App;
