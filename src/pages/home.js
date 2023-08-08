import axios from 'axios';
import React from 'react';
import Sound from 'react-sound'
import { useState } from 'react';
import "../css/inputs.css"

function Home() {

    let config = {
        headers : {
            'X-RapidAPI-Key': '078e000b8fmshfadd6cd9a80da9ep1784c1jsne3532782c4c5',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
        }
    }

    const [price, setPrice] = useState('')

    const getListOfCryptos = () => {
        let id = document.getElementById('cryptoName').value
        axios.get(`https://coingecko.p.rapidapi.com/coins/${id}`, config)
        .then(res => {
            console.log(res)
            setPrice(res.data.current_price)
            console.log(setPrice)
        })
        .catch(err => {
            console.log(err)
        })
    }




    return(
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel='stylesheet' href='./css/styles.css' />
      <link rel='stylesheet' href='./css/inputs.css'/>
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





        <div class="container" id='container'>
          <input type='text' id='cryptoName' placeholder='Enter a crypto name...' />
          <input type='button' id='coinData' onClick={getListOfCryptos} value="Get Coin Data!" />
        </div>







      </body>




    </html>
    );
}


export default Home;