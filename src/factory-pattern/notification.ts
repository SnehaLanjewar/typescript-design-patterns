interface INotifications {
    send(message: string): void;
}

//abstract creator
abstract class NotificationCreator {
    // Factory Method - subclasses decide what to create
    abstract createNotification(): INotifications;

    // Shared logic that uses the factory method
    sendNotify(message: string): void {
        const notification = this.createNotification();
        notification.send(message);
    }
}

//concrete products
class EmailNotification implements INotifications {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}


//concrete creators
class EmailNotificationCreator extends NotificationCreator {
    createNotification(): INotifications {
        return new EmailNotification();
    }
}


//client code
function main(): void {
    let creator: NotificationCreator;

    // Send Email
    creator = new EmailNotificationCreator();
    creator.sendNotify("Welcome to our platform!");

}

main();