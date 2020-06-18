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


//==========================================================================
// Factory

enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefined,
  }
  
  interface IPerson {
    Category: PersonCategory;
    canSignContracts(): string;
    printDetails(): any;
  }
  
  abstract class Persone implements IPerson {
    Category: PersonCategory;
    private DateOfBirth: Date;
  
    constructor(dateOfBirth: Date) {
      this.DateOfBirth = dateOfBirth;
      this.Category = PersonCategory.Undefined;
    }
  
    abstract canSignContracts(): string
  
    printDetails(): void {
      console.log('Person: ');
      console.log("Date of Birth: " + `${this.DateOfBirth.toDateString()}`);
      console.log("Category: " + `${PersonCategory[this.Category]}`);
      console.log("Can sign: " + `${this.canSignContracts()}`);
    }
  }
  
  class Infant extends Persone {
    constructor(dateOfBirth: Date) {
      super(dateOfBirth);
      this.Category = PersonCategory.Infant;
    }
    canSignContracts(): string {
      return 'Немовля не може підписувати контракти!';
    }
  }
  
  class Child extends Persone {
    constructor(dateOfBirth: Date) {
      super(dateOfBirth);
      this.Category = PersonCategory.Child;
    }
    canSignContracts(): string {
      return "Дитина не може підписувати контракти!";
    }
  }
  
  class Adult extends Persone {
    constructor(dateOfBirth: Date) {
      super(dateOfBirth);
      this.Category = PersonCategory.Adult;
    }
    canSignContracts(): string {
      return "Повнолітній може підписувати контракти!";
    }
  }
  
  class PersonFactory {
    getPerson(dateOfBirth: Date): IPerson {
      let dateNow = new Date();
      let currentMonth = dateNow.getMonth() + 1;
      let currentDate = dateNow.getDate();
      let dateTwoYearsAgo = new Date(
        dateNow.getFullYear() - 2,
        currentMonth,
        currentDate
      );
      let date18YearsAgo = new Date(
        dateNow.getFullYear() - 18,
        currentMonth,
        currentDate
      );
  
      if (dateOfBirth >= dateTwoYearsAgo) {
        return new Infant(dateOfBirth);
      }
      if (dateOfBirth >= date18YearsAgo) {
        return new Child(dateOfBirth);
      }
      return new Adult(dateOfBirth);
    }
  }
  
  let factory = new PersonFactory();
  
  let p1 = factory.getPerson(new Date(2020, 0, 20));
  p1.printDetails();
  
  let p2 = factory.getPerson(new Date(2018, 0, 20));
  p2.printDetails();
  
  let p3 = factory.getPerson(new Date(2001, 0, 20));
  p3.printDetails();