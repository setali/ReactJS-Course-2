const {sum: mySum, sumString: mySumString} = require('./sum')

const sum = jest.fn(mySum)
const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Before execute all tests')
})

beforeEach(() => {
  console.log('Before execute every tests')
})

afterEach(() => {
  console.log('After execute every tests')
})

afterAll(() => {
  console.log('After execute all tests')
})


describe('Sum tests', () => {

  test('Testing sum', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2)).toBe(3)
    expect(sum(5, 2)).toBe(7)
    expect(sum(5, '1')).toBe(6)
    expect(sum(5, NaN)).toBeNaN()
    expect(sum(5, 'salam')).toBeNaN()
  })

  test('Testing sum string', () => {
    expect(sumString(1, 2)).toBe('Sum is 3')
    expect(sumString(11, 2)).toBe('Sum is 13')
    expect(sumString('salam', 2)).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(1,2)
    expect(sumString).toBeCalledWith(11,2)
    expect(sumString).toBeCalledWith('salam',2)
  })
})

// describe('My tests', () => {
//   test('Testing 1', () => {
//     expect(false).toBeFalsy()
//     expect(2).toBeTruthy()
//   })
//
//   test('Testing 2', () => {
//     expect(1 + 2).toBe(3)
//     expect(1 + NaN).toBeNaN()
//   })
//
// })

// if (sum(1,2) !== 3) {
//   throw 'Test fail'
// }
//
//
// if (sum(4,2) !== 6) {
//   throw 'Test fail'
// }
//


