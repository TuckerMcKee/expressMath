const { mean, mode, median } = require('./math.js');

describe("math", function () {
  
    test("mean", function () {

        let nums = [1,2,3]
      expect(mean(nums)).toBe(2);

      nums = [2,6,4,8,8,6,3,3,4,2]
      expect(mean(nums)).toBe(4.6);

      nums = [0,0,0,20]
      expect(mean(nums)).toBe(5);
    });
    
    test("mode", function () {

        let nums = [1,2,3,1,2,3,4,1]
      expect(mode(nums)).toBe(1);

      nums = [2,6,4,8,8,6,3,3,4,2,4]
      expect(mode(nums)).toBe(4);

      nums = [0,0,0,20]
      expect(mode(nums)).toBe(0);
    });

    test("median", function () {

        let nums = [1,1,1,2,2,3,3]
      expect(median(nums)).toBe(2);

      nums = [2,6,4,8,8,6,3,3,4,2,4]
      expect(median(nums)).toBe(4);

      nums = [0,0,0,20]
      expect(median(nums)).toBe(0);

      nums = [0,3,5,20]
      expect(median(nums)).toBe(4);

      nums = [0,4,5,9]
      expect(median(nums)).toBe(4.5);

    });
    

  });