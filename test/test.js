const assert = require('assert');

const stringToArray = (string) => string.split(' ');

const sockMerchant = (inputCount, input) => {
  if (inputCount && input) {
    const sockStock = {};
    const socks = stringToArray(input);
    let pairSum = 0;

    for (let i = 0; i < inputCount; i++) {
      if (!sockStock[socks[i]]) {
        sockStock[socks[i]] = 1;
      } else {
        sockStock[socks[i]] += 1;
      }
    }

    for (const s in sockStock) {
      pairSum += Math.floor(sockStock[s] / 2);
    }

    return pairSum;
  }
  return 0;
};

const testData = [
  { inputCount: 9, input: '10 20 20 10 10 30 50 10 20', expected: 3 },
  { inputCount: 15, input: '6 5 2 3 5 2 2 1 1 5 1 3 3 3 5', expected: 6 },
  {
    inputCount: 20,
    input: '4 5 5 5 6 6 4 1 4 4 3 6 6 3 6 1 4 5 5 5',
    expected: 9,
  },
  // TODO : Add some more test cases
];

const testWithData = (inputCount, input, expected) => {
  describe(`Input: ${input}, Expected: ${expected}`, function () {
    it('should calculate the correct result', function () {
      assert.equal(sockMerchant(inputCount, input), expected);
    });
  });
};

describe('sockMerchant tests', function () {
  testData.forEach(({ inputCount, input, expected }) => {
    testWithData(inputCount, input, expected);
  });
});

describe(`Test with no params`, function () {
  it('should return 0 with no data ', function () {
    assert.equal(sockMerchant(), 0);
  });
});
