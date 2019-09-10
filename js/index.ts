// // class classWithAutomaticProperties {
// //     constructor(public id: number, private name: string){
// //     }
// //     }
// //     let myAutoClass = new classWithAutomaticProperties(1, "className");
// //     console.log(`myAutoClass id: ${myAutoClass.id}`);
// //     console.log(`myAutoClass.name: ${myAutoClass.name}`);

// abstract class AbstractEmployee {
//     public id: number | undefined;
//     public name: string | undefined;
//     abstract getDetails(): string;
//     public printDetails() {
//     console.log(this.getDetails());
//     }
//     }
//     class NewEmployee extends AbstractEmployee {
//     getDetails(): string {
//     return `id : ${this.id}, name : ${this.name}`;

// }
// }
// class NewManager extends NewEmployee {
// public Employees: NewEmployee[] | undefined;
// getDetails() : string {
// return super.getDetails()
// + `, employeeCount ${this.Employees.length}`;
// }
// }

// var employee = new NewEmployee();
// employee.id = 1;
// employee.name = "Employee Name";
// employee.printDetails();

enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefined
}

interface IPerson {
    Category: PersonCategory;
    canSignContracts(): boolean;
    printDetalis();
}

abstract class Person implements IPerson {
    Category: PersonCategory;
    private DateOfBirth: Date;

    constructor(dateOfBirth: Date){
        this.DateOfBirth = dateOfBirth;
        this.Category = PersonCategory.Undefined;
    }

    abstract canSignContracts(): boolean;
    printDetalis(): void{
        console.log(`Person :`);
        console.log(`Date of Birth : ` + `${this.DateOfBirth.toDateString()}`);
        console.log(`Catrgory : ` + `${PersonCategory[this.Category]}`);
        console.log(`Can sign : ` + `${this.canSignContracts}`);
    }
}

class Infant extends Person {
    constructor(dateOfBirth: Date){
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    }
    canSignContracts(): boolean{return false};
}

class Child extends Person {
    constructor(dateOfBirth: Date){
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    }
    canSignContracts(): boolean{return false};
}

class Adult extends Person {
    constructor(dateOfBirth: Date){
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    }
    canSignContracts(): boolean{return true};
}
