// write a class to extract year, month, day from date.
//abstaction, encapsulation

//epoch time is hidden from client comes under excapsulaiton

class DateExtractor {
    private date: Date;

    constructor(date: Date) {
        this.date = date;
    }
    getYear(): number {
        return this.date.getFullYear();
    }
    getMonth(): number {
        return this.date.getMonth() + 1;
    }

    getDay(): number {
        return this.date.getDate();
    }
}

// client code
let date = new Date();
let extractor = new DateExtractor(date);
console.log("Year:", extractor.getYear());
console.log("Month:", extractor.getMonth());
console.log("Day:", extractor.getDay());