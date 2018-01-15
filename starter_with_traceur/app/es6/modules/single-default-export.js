export default class Person{
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