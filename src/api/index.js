import axios from "axios";

export const fetchcoinsdata = async (currency = "usd") => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  try {
    const { data } = await axios.get(url);
    // console.log("api data", data);
    const data_need = data.map((coin_info) => ({
      id: coin_info.id,
      symbol: coin_info.symbol,
      name: coin_info.name,
      image: coin_info.image,
      price: coin_info.current_price,
      change_24h: coin_info.market_cap_change_percentage_24h,
      market_cap: coin_info.market_cap,
    }));
    // console.log(data);
    return data_need;
  } catch (error) {
    console.log("Error");
  }
};
export const fetchcoinsdatacomplete = async (currency = "usd") => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error");
  }
};
export const singlecoin = async (id) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const historicalChart = async (
  id = "bitcoin",
  days = 365,
  currency = "usd"
) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error");
  }
};
