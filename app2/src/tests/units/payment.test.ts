import { describe, expect, vi, afterEach, it } from "vitest";
import type { PaymentGateway } from "../../types/users-types.js";
import { PaymentService } from "../../services/payment.service.js";
import type { OrderRepository } from "../../repositories/order.repo.js";

describe('payment service', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("charges customer and marks order as paid", async () => {
        //arrange
        const paymentDetails = {
            amount: 200,
            currency: "GHS"
        }
        const charge = vi.fn().mockResolvedValue({
            transactionId: "txn_test_001",
            success: true

        });

        const paymentGateway = {
            charge
        } satisfies PaymentGateway;

        const marksPaid = vi.fn().mockResolvedValue(true);
        const orderRepo = {
            marksPaid
        } satisfies OrderRepository;

        const payment = new PaymentService(paymentDetails, paymentGateway, orderRepo)

        //act
        const res = await payment.pay("order_001");

        //assert
        expect(res).toEqual({
            success: true,
            orderId: "order_001",
            transactionId: "txn_test_001",
            message: "Payment successful and order placed",
        });
    });

    it('rejects invalid payment amount and does not charge', async () => {
        const paymentDetails = {
            amount: -1234,
            currency: "ghs"
        }
        const charge = vi.fn()

        const paymentGateway = {
            charge
        } satisfies PaymentGateway;

        const marksPaid = vi.fn();
        const orderRepo = {
            marksPaid
        } satisfies OrderRepository;

        const payment = new PaymentService(paymentDetails, paymentGateway, orderRepo)

        //act
        const res = await payment.pay("order_001");

        //assert
        expect(res).toEqual({
            success: false,
            message: "Invalid payment details",
        });

    })

})