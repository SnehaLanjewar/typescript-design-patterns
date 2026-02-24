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

class SMSNotification implements INotifications {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotification implements INotifications {
    send(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}


//concrete creators
class EmailNotificationCreator extends NotificationCreator {
    createNotification(): INotifications {
        return new EmailNotification();
    }
}

class SMSNotificationCreator extends NotificationCreator {
    createNotification(): INotifications {
        return new SMSNotification();
    }
}

class PushNotificationCreator extends NotificationCreator {
    createNotification(): INotifications {
        return new PushNotification();
    }
}

//client code
function main(): void {
    let creator: NotificationCreator;

    // Send Email
    creator = new EmailNotificationCreator();
    creator.sendNotify("Welcome to our platform!");

    // Send SMS
    creator = new SMSNotificationCreator();
    creator.sendNotify("Your OTP is 123456");

    // Send Push INotifications
    creator = new PushNotificationCreator();
    creator.sendNotify("You have a new follower!");

}

main();