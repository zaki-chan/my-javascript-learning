const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping.length);
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

console.log(shopping.indexOf("パン")); //0


// 追加
newlength = shopping.push("砂糖");
console.log(shopping);
console.log(newlength);

shopping.pop()


const cities = ["Tokyo","Osaka","Kobe"];
const index = cities.indexOf("Osaka");

if(index !== -1){
    // splice(startindex,length of delete)
    cities.splice(index,1);
}

// それぞれの要素にアクセス
for(const city of cities){
    console.log(city);
}

// map:配列全体に関数を適用
function double(number){
    return number * 2;
}
const numbers = [5,2,7,6];
const doubled = numbers.map(double);
console.log(doubled);
// filter:条件を満たすものだけ抽出
function isLong(city){
    return city.length > 2;
}
const longer = cities.filter(isLong);
console.log(longer);
// split:文字列の分割(文字列->配列)
const data = "札幌,仙台,東京,名古屋,大阪,福岡";
const citiesdata = data.split(",");
console.log(citiesdata);
// join:文字列の結合(配列->文字列)
const commaSeparated = citiesdata.join(",");
console.log(commaSeparated);
// toString():配列->文字列
const dogNames = ["pochi","hachi","tarou","moco"];
dogNames.toString();