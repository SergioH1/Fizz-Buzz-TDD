export function fizzBuzz(
  arrayFizz: Array<string | number>
): Array<string | number> {
  for (let i = 0; i < arrayFizz.length; i++) {
    if ((arrayFizz[i] as number) % 15 === 0) {
      arrayFizz[i] = "fizzBuzz";
    }
    if ((arrayFizz[i] as number) % 3 === 0) {
      arrayFizz[i] = "fizz";
    }
    if ((arrayFizz[i] as number) % 5 === 0) {
      arrayFizz[i] = "buzz";
    }
  }

  return arrayFizz;
}
