import type { OrderRepository } from "../repositories/order.repo.js";
import type { paymentDetails, PaymentGateway } from "../types/users-types.js";
export type PaymentResult = {
    success: true;
    orderId: string;
    transactionId: string;
    message: string;
} | {
    success: false;
    message: string;
};
export declare class PaymentService {
    private readonly paymentData;
    private readonly paymentGateway;
    private readonly orderRepository;
    constructor(paymentData: paymentDetails, paymentGateway: PaymentGateway, orderRepository: OrderRepository);
    private check;
    pay(orderId: string): Promise<PaymentResult>;
}
//# sourceMappingURL=payment.service.d.ts.map