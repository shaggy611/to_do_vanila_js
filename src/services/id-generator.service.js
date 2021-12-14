export class idGeneratorService {
    static generator() {
        return Math.random().toString(32).slice(-6);
    }
}