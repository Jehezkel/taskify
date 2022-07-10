export class Todo {
    id: number;
    isDone: boolean;
    /**
     *
     */
    constructor(public todo: string) {
        this.id = Date.now();
        this.isDone = false;
    }
}