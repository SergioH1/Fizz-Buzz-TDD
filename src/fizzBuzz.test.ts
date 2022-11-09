import { fizzBuzz } from "./fizzBuzz";
let Fizz = Array.from(Array(101).keys());
describe("Given the function is called", () => {
  test("Name of the group", () => {
    const result = fizzBuzz(Fizz);
    expect(result).not.toContain(3);
  });
  test("should", () => {
    const result = fizzBuzz(Fizz);
    expect(result).not.toContain(5);
  });
  test("should s", () => {
    const result = fizzBuzz(Fizz);
    expect(result[15]).toBe("fizzBuzz");
  });
});
