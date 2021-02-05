// this is a decorator factory.
// because it has an outer fn. "logClass"
// and an inner fn. 

const logClass = (msg: string) => {
    console.log(`${msg} evaluated`)
    return (constructor: Function): void => {
        console.log(`${msg} called`)
    }
}

@logClass("Class Decorator")
class Person {

    private _directReports: Person[]
    public _emailAddress: string

    public constructor(firstname: string, lastname: string) {
        this._directReports = []
    }

    public addDirectReport(person: Person) {
        this._directReports.push(person)
    }
}

const person = new Person("Ilir", "Kosumi")
