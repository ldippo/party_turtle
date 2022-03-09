import { power } from "./power";

test("Power Function works", () => {
  expect(power(2, 3)).toEqual(8);
  expect(power(2, -3)).toEqual(1 / 8);
  expect(power(2, 1)).toEqual(2);
  expect(power(2, 0)).toEqual(1);
});
