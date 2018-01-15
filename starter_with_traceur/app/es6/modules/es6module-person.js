export class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    work(){
        return `${this._name} is working`;
    }
}

export let log = function(person){
    console.log("Person: " + person.name);
}

export let SOME_VAR = 0.03;

export let modelPerson = new Person("Model");