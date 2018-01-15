import { Person, SOME_VAR, modelPerson} from "./es6/es6module-person";
// { } - destructuring expression - multiple objects references in es6module-person
// make it into one object with 3 properites - all prop are importe in current scope
// with their respective name
var person = new Person("George");
console.log(person.work());

