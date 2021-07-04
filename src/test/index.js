const country = document.getElementById("country")
const township = document.getElementById("township")
const postcode = document.getElementById("postcode")

let countryIndex = -1
let townshipIndex = -1

// 預設選項值為-1
const defaultOption = `<option value"-1">請選擇</option>`

// 一開始呈現縣市下拉選項
country.innerHTML = defaultOption + countries.map(
  (v,i) => `<option value="${i}">${v}</option>`
)

country.addEventListener('change', function (e) {
  // 需為整數值(索引值用)
  countryIndex = +e.target.value
  
  //console.log(countryIndex)

  // 產生鄉鎮區市下拉選單項目
  township.innerHTML =
    defaultOption + townships[countryIndex].map((v,i) => `<option value="${i}">${v}</option>`)
})

township.addEventListener('change', function (e) {
  // 需為整數值(索引值用)
  townshipIndex = +e.target.value

  //console.log(townshipIndex)

  // 呈現郵遞區號
  postcode.innerHTML = postcodes[countryIndex][townshipIndex]
})

