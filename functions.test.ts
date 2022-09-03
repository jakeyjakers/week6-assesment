const {shuffleArray} = require('./utils')

//// sorry these test are really terrrible. I couldn't quite figure out how to access the 
// contents of the passed in array in the funtion///

describe('shuffleArray should', () => {
    
    test('robots arr should be full when run', () =>{
        let testArr = shuffleArray
        expect(testArr).not.toBe(Number)
    })

    test('expect shuffeldarray to not be false', () => {
        let testArr = shuffleArray
        expect(testArr).not.toBeFalsy
    })
})