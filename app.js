
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(a){
    let euro=a/oneEuroIs.USD
    let yen=euro*oneEuroIs.JPY
    return yen
   }
   
function fromEuroToDollar(a){
    let dollar=a*oneEuroIs.USD
    return dollar
   }
   
function fromYenToPound(a){
    let euro=a/oneEuroIs.JPY
    let pound=euro*oneEuroIs.GBP
    return pound
   }

   module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
