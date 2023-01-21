function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  const promiseOne = fetch(newsURL)
  .then((response) => response.json())
  const promiseTwo = fetch(weatherURL)
  .then((response) => response.json());

  // let obj = {};
  return Promise.all([promiseOne, promiseTwo])
    // 두개가 배열로 합쳐져서 나온다..
    .then((json) => {
      return {news: json[0].data, weather : json[1]}
    })
    
    // 1번 -> 1/2번을 둘 다 가지고있어서 [0]을 써야 1번의 값을 쓸 수 있어서..
    // .then(json => {
    //   obj['news'] = json[0]['data'];
    //   return fetch(weatherURL);
    // })
    // // 2번
    // .then(json => {
    //   console.log(json)
    //   obj['weather'] = json;
    //   return obj;
    // })
}
// return Promise.all([user1, user2])
//     .then((value) => {
//       return value.map((el) => JSON.parse(el));
//     })

// 복습완료

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}