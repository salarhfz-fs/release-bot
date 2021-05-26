// [TODO]: Remove sample test
import * as math from "@util/sample_math";

describe("Math library", () => {
  describe("Sum function", () => {
    it("Should sum up two numbers", () => {
      expect(math.sum(10, 20)).toEqual(30);
    });
  });
  describe("Multiply function", () => {
    it("Should multiply two numbers", () => {
      expect(math.multiply(10, 20)).toEqual(200);
    });
  });
});
