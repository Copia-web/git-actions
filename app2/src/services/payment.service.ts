import type { OrderRepository } from "../repositories/order.repo.js";
import type {
    paymentDetails,
    PaymentGateway,
} from "../types/users-types.js";

export type PaymentResult =
    | {
        success: true;
        orderId: string;
        transactionId: string;
        message: string;
    }
    | {
        success: false;
        message: string;
    };

export class PaymentService {
    constructor(
        private readonly paymentData: paymentDetails,
        private readonly paymentGateway: PaymentGateway,
        private readonly orderRepository: OrderRepository,
    ) { }

    private check(): boolean {
        return (
            Number.isFinite(this.paymentData.amount) &&
            this.paymentData.amount > 0 &&
            typeof this.paymentData.currency === "string" &&
            /^[A-Z]{3}$/.test(this.paymentData.currency)
        );
    }

    async pay(orderId: string): Promise<PaymentResult> {
        if (!this.check()) {
            return {
                success: false,
                message: "Invalid payment details",
            };
        }

        try {
            // 1. Charge the customer.
            const payres = await this.paymentGateway.charge(
                this.paymentData.amount,
                this.paymentData.currency,
            );

            if (!payres || !payres.transactionId) {
                return {
                    success: false,
                    message: "Payment failed",
                };
            }

            // 2. Mark the correct order as paid.
            const ordermarked = await this.orderRepository.marksPaid(
                orderId,
                payres.transactionId,
            );

            if (!ordermarked) {
                return {
                    success: false,
                    message:
                        "Payment received, but order update failed. Reconciliation required.",
                };
            }

            // 3. Return a successful result.
            return {
                success: true,
                orderId,
                transactionId: payres.transactionId,
                message: "Payment successful and order placed",
            };
        } catch (error: unknown) {
            // Log this through your application's logger in production.
            console.error("Payment processing error:", error);

            return {
                success: false,
                message: "Payment processing failed",
            };
        }
    }
}