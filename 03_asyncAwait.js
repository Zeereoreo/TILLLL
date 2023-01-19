async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const promiseOne = await fetch(newsURL)
  .then((response) => response.json())
  const promiseTwo = await fetch(weatherURL)
  .then((response) => response.json());

  return {news: promiseOne.data, weather : promiseTwo}
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}