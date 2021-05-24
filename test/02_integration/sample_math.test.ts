// [TODO]: Remove sample test
import * as math from "@util/sample_math";

describe("Math library", () => {
  describe("Sum and multiply functions", () => {
    it("Should sum up two numbers and multiply them by 10", () => {
      expect(math.multiply(math.sum(2, 3), 5)).toEqual(25);
    });
  });
});
