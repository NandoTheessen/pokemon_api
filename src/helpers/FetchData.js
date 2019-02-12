const axios = require('axios');

async function fetchDataFromAPI(url) {
  console.log('url', url);
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw e;
  }
}

module.exports = fetchDataFromAPI;
