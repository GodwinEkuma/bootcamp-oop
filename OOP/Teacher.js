import Person from './Person';

export default class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject){
        super(firstName, lastName, age, gender, interests);
        this.subject = subject;
    }
    role(){
        return `${super.getName()} is a ${this.subject} teacher`
    }
}