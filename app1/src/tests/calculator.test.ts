import { describe, expect, it } from "vitest";
import { add, divide, multiply, subtract } from "../calculator.js";


describe("Caculator", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5)
    });

    it("subtracts two numbers", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it("multiplies two numbers", () => {
        expect(multiply(4, 5)).toBe(20);
    });

    it("divides two numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });
})