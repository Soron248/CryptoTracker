import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const loadingMessege = <p className="loadngMessege">Data is loading... </p>;
  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=bdt&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coinApp">
      <div className="coinSearch">
        <h1 className="coinHead">Search Crypto Currency</h1>
        <form action="" className="coinForm">
          <input
            type="text"
            placeholder="Search"
            className="coinInput"
            onChange={handleSearch}
          />
        </form>
        {isLoading && loadingMessege}
        {filteredCoin.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              img={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              volume={coin.total_volume}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
