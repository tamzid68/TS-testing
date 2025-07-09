export interface NationalPaymentInterface {
    initiateTransaction(amount: number, fromAccount: string, toAccount: string): string;
    verifyTransaction(transactionId: string): boolean;
};



export function processPayment(
    paymentProvider: NationalPaymentInterface,
    amount: number,
    fromAccount: string,
    toAccount: string
) {
    console.log("Processing payment...");

    const transactionId = paymentProvider.initiateTransaction(
        amount,
        fromAccount,
        toAccount
    );

    console.log(`Transaction initiated with ID: ${transactionId}`);
    const isVerified = paymentProvider.verifyTransaction(transactionId);
    if (isVerified) {
        console.log("Transaction verified successfully.");
    } else {
        console.log("Transaction verification failed.");
    }
}