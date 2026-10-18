import { describe, expect, it } from "vitest";
import { changeQuantity, orderTotal } from "../lib/order";
describe("basket calculations", () => {
  const espresso = { name: "Espresso", price: 300 };
  it("adds repeated items and totals quantities", () => {
    const lines = changeQuantity(changeQuantity([], espresso, 1), espresso, 1);
    expect(lines).toEqual([{ ...espresso, quantity: 2 }]);
    expect(orderTotal(lines)).toBe(600);
  });
  it("removes an item at zero without negative quantities", () => {
    expect(changeQuantity(changeQuantity([], espresso, 1), espresso, -1)).toEqual([]);
    expect(changeQuantity([], espresso, -1)).toEqual([]);
  });
});