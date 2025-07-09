export interface NationalPaymentInterface{
    initiateTransaction(amount: number, fromAccount: string, toAccount: string): string;
    verifyTransaction(transactionId: string): boolean;
};



export function processPayment(
    paymentProvider: NationalPaymentInterface,
    amount: number,
    fromAccount: string,
    toAccount: string
){

}