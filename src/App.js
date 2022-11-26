import {useState} from 'react';
import './App.css';

const restaurantList ={
  "Mumbai":[{
    "name" : "Tanatan Juhu - Kitchen & Bar",
    "adress": "462, A.B. Nair Rd, Juhu, opposite Novotel, Mumbai, Maharashtra 400049",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHbwl.md.jpg"
  },{
    "name" : "Masala Library by Jiggs Kalra",
    "adress": "Bandra Kurla Complex Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    "ratings": "4.3",
    "image":"https://iili.io/HFmHt9f.md.jpg"
  },{
    "name" : "The Bombay Canteen",
    "adress": "Unit-1, Process House, S.B. Road, Kamala Mills, Near Radio Mirchi Office Lower, Parel, Mumbai, Maharashtra 400013",
    "ratings": "4.6",
    "image":"https://iili.io/HFmHQ8G.md.jpg"
  },{
    "name" : "Yauatcha Mumbai",
    "adress": "Raheja Tower, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHP6X.md.jpg"
  }],
  "Bangalore":[{
    "name" : "Hakuna Matata",
    "adress": "Opposite Brigade Palm Springs, 1231/35/2, Brigade Millenium Rd, JP Nagar 7th Phase, Bengaluru, Karnataka 560076",
    "ratings": "4.8",
    "image":"https://iili.io/HFmHsFn.md.jpg"
  },{
    "name" : "ShakesBierre - Brewpub & Kitchen",
    "adress": "Eva Mall, Level 5, Brigade Rd, Bengaluru, Karnataka 560001",
    "ratings": "4.6",
    "image":"https://iili.io/HFmH4nI.md.jpg"
  },{
    "name" : "Karavalli",
    "adress": "Vivanta, 66, Residency Rd, Ashok Nagar, Bengaluru, Karnataka 560025",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHgZN.md.jpg"
  },{
    "name" : "The Fatty Bao",
    "adress": "Third Floor, 610, 12th Main Rd, 7th Cross, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHSuR.md.jpg"
  }],
  "Pune":[{
    "name" : "Malaka Spice",
    "adress": "Siddharth Chambers, Lane, off North Main Road, Koregaon Park, Pune, Maharashtra 411001",
    "ratings": "4.8",
    "image":"https://iili.io/HFmHUjp.md.jpg"
  },{
    "name" : "The Sassy Spoon Pune",
    "adress": "Sanskriti Lifestyle, Lane No. 7, Ashok Chakra Society, Meera Nagar, Koregaon Park, Pune, Maharashtra 411001",
    "ratings": "4.8",
    "image":"https://iili.io/HFmHk8J.md.jpg"
  },{
    "name" : "Little Italy Restaurant",
    "adress": "Park Plaza, 465/C1, CTS - 1085, Ganeshkhind Rd, next to Central Mall, Shivajinagar, Pune, Maharashtra 411005",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHeaa.md.jpg"
  },{
    "name" : "Le Plaisir",
    "adress": "Rajkamal Survey No. 759/125, Prabhat Road, Opposite Cox and Kings, Near, Kelkar Nursing Home, Pune, Maharashtra 411004",
    "ratings": "4.6",
    "image":"https://iili.io/HFmHhCP.md.jpg"
  }],
  "Delhi":[{
    "name" : "Sandoz Restaurant",
    "adress": "L-9, Connaught Cir, Block L, Connaught Place, New Delhi, Delhi 110001",
    "ratings": "4.6",
    "image":"https://iili.io/HFmHw6F.md.png"
  },{
    "name" : "Bukhara",
    "adress": "ITC MAURYA, Sardar Patel Marg, Akhaura Block, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021",
    "ratings": "4.7",
    "image":"https://iili.io/HFmHWZB.md.jpg"
  },{
    "name" : "The GT Road",
    "adress": "M-39, Shankar Market, Block M, Connaught Place, New Delhi, Delhi 110001",
    "ratings": "4.6",
    "image":"https://iili.io/HFmHO3g.md.jpg"
  },{
    "name" : "Parikrama The Revolving Restaurant",
    "adress": "Antriksh Bhavan, 22, KG Marg, Barakhamba, New Delhi, Delhi 110001",
    "ratings": "4.5",
    "image":"https://iili.io/HFmHjG1.md.jpg"
  }]
}

var cityList = Object.keys(restaurantList);

function App() {

  var [city,setCity]=useState("Pune");
  function cityHandler(city){
    setCity(city);
  }

  return (
    <div className="App">
      <h1>Best Restaurant in India</h1>
      <h3>An React Application</h3>
      
      <div ></div>



    </div>
  );
}

export default App;
