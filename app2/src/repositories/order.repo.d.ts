export interface OrderRepository {
    marksPaid(orderid: string, transactionid: string): Promise<boolean>;
}
//# sourceMappingURL=order.repo.d.ts.map