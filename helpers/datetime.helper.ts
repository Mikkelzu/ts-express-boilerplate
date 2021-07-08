export class DateTime {

    constructor() { }

    public returnDateAsString(date: Date) {
        return date.toDateString();
    }

    public returnTimeAsString(time: Date) {
        return time.toTimeString();
    }
}