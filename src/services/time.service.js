export class Time {
    static currentTime() {
        return moment().format('D/M/Y, HH:mm')
    }
}