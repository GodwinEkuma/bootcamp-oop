export default class Person {
    constructor(firstName, lastName, age, gender, interests ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    bio() {
        return `${this.getName()} is a ${this.gender} and is ${this.age} old`
    }
}