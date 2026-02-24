// class Notifications1 {
//     protected recipient: string;
//     protected message: string;

//     constructor(recipient: string, message: string) {
//         this.recipient = recipient;
//         this.message = message;
//     }

//     send(): void {
//         console.log(`Sending generic notification to ${this.recipient}. Message: ${this.message}`);
//     }
// }

// class EmailNotification extends Notifications1 {
//     private subject: string;

//     constructor(recipient: string, message: string, subject: string) {
//         super(recipient, message);
//         this.subject = subject;
//     }

//     send(): void {
//         console.log(`Sending EMAIL to ${this.recipient} | Subject: ${this.subject}`);
//     }
// }

// class SMSNotification extends Notifications1 {
//     private phoneNumber: string;

//     constructor(recipient: string, message: string, phoneNumber: string) {
//         super(recipient, message);
//         this.phoneNumber = phoneNumber;
//     }

//     send(): void {
//         console.log(`Sending SMS to ${this.phoneNumber} | Message: ${this.message}`);
//     }
// }

// class PushNotification extends Notifications1 {
//     private deviceToken: string;

//     constructor(recipient: string, message: string, deviceToken: string) {
//         super(recipient, message);
//         this.deviceToken = deviceToken;
//     }

//     send(): void {
//         console.log(`Sending PUSH to device ${this.deviceToken.substring(0, 8)}`
//             + `... | Alert: ${this.message}`);
//     }
// }

// const notifications: Notifications1[] = [
//     new EmailNotification("alice@example.com", "Your order shipped!", "Order Update"),
//     new SMSNotification("Bob", "Code: 482910", "+1-555-0123"),
//     new PushNotification("Charlie", "New message", "d8a3f4b2c1e5a9b7"),
//     new Notifications1('dummy','generic test message')
// ];

// for (const n of notifications) {
//     n.send();
// }