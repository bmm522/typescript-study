export class Interview{

    private id: Number;
    private subject: string;
    private answer: string;

    constructor(id: Number, subject: string, answer: string){
        this.id = id;
        this.subject = subject;
        this.answer = answer;
    }

    getId(): Number{
        return this.id;
    }

    getSubject(): string{
        return this.subject;
    }

    getAnswer(): string{
        return this.answer;
    }

    
}