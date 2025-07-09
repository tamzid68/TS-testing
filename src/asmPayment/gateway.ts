import {NationalPaymentInterface, processPayment}  from '../nationalg/paymentlib';


class asmProvider implements NationalPaymentInterface{
    initiateTransaction(amount: number, fromAccount: string, toAccount: string): string {
        console.log(`Initiating transaction of ${amount} from ${fromAccount} to ${toAccount}`);
        // Simulate a transaction ID
        return `TXN-${Math.floor(Math.random() * 1000000)}`;
    }
    verifyTransaction(transactionId: string): boolean {
        console.log(`Verifying transaction with ID: ${transactionId}`);
        // Simulate verification logic
        return Math.random() > 0.5; // Randomly return true or false
    }
}

const asmPaymentProvider = new asmProvider();

processPayment(asmPaymentProvider,100,'sabit','tamzid');