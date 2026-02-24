class TemperatureSensor {
    private _readings: number[] = [];

    addReading(value: number) {
        if (value > -50 && value < 150) {
            this._readings.push(value);
        }
    }

    getAverage(): number {
        if (!this._readings.length) {
            return 0;
        }
        const sumOfReadings = this._readings.reduce((acc, val) => acc = acc + val);
        return sumOfReadings / this._readings.length;
    }

    getReadingCount() {
        return this._readings.length;
    }

    public get getReading(): number[] {
        return this._readings;
    }
}

// Test your implementation
const sensor = new TemperatureSensor();
sensor.addReading(22.5);
sensor.addReading(23.1);
sensor.addReading(200.0);  // Should be rejected
sensor.addReading(-10.0);

console.log(`Count: ${sensor.getReadingCount()}`);  // 3
console.log(`Average: ${sensor.getAverage()}`);  