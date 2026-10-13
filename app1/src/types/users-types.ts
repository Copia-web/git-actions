export interface User {
    name: string,
    age: number,
    email: string
    id: string
};


export interface PaymentGateway {
    charge(amount: number, currency: string): Promise<{
        transactionId: string,
        success: boolean
    }>;
}

export interface paymentDetails {
    amount: number,
    currency: string
}