// this is a decorator factory, because it's return 
// value is of type "ClassDecorator" and it implements
// the signature required for a class decorator
// because it has an outer fn. "logClass" and
// an inner fn. (lambda expression)
// the reason why we create this factory
// is to be able to pass in a message as it's param.
const logClass = (msg: string): ClassDecorator => {
    console.log(`${msg} evaluated`)
    return (constructor: Function): void => { // <-- note fn. params.
        console.log(`${msg} called`)
    }
}

const logProperty = (msg: string): PropertyDecorator => {
    console.log(`${msg} evaluated`)
    return (target: Object, proeprtyKey: string): void => { // <-- comparte to the class decorator
        console.log(`${msg} called`)
    }
}

const logMethod = (msg: string): MethodDecorator => {
    console.log(`${msg} evaluated`)
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void => {
        console.log(`${msg} called`)
    }
}

// this is a class decorator
// it's parameter is "Class Decorator"
// this means that it's leveraging
// a decorator factory
@logClass("Class Decorator")
class Person {

    private _directReports: Person[]

    @logProperty("Property Decorator")
    public _emailAddress: string

    public constructor(firstname: string, lastname: string) {
        this._directReports = []
    }

    @logMethod("Method Decorator")
    public addDirectReport(person: Person) {
        this._directReports.push(person)
    }
}

const person = new Person("Ilir", "Kosumi")
