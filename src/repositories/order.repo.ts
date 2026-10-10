
export interface OrderRepository {
    marksPaid(
        orderid: string, transactionid: string
    ): Promise<boolean>;
}