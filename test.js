test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 106.58333333333334 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    const expected = (3.5/1.2)*127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04166666666674); 
})
test("One Yen should be 0.006254886630179828 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound(3.5)

    const expected = (3.5/127.9)*0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.0218921032056294); 
})