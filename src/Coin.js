import React from "react";
import "./coin.css";

const Coin = ({ name, img, symbol, price, volume, priceChange, marketCap }) => {
  return (
    <div className="conContainer">
      <div className="coinRow">
        <div className="coin">
          <img src={img} alt="crypto" />
          <h2>{name}</h2>
          <p className="coinSymbol">{symbol}</p>
        </div>
        <div className="coinData">
          <p className="coinPrice">BDT{price}</p>
          <p className="coinVolume">BDT{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="cointPercent red">{priceChange.toFixed(1)}</p>
          ) : (
            <p className="cointPercent green">{priceChange.toFixed(1)}</p>
          )}
          <p className="coinMarketCap">
            Mkt Cap: BDT{marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
