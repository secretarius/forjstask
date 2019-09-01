// class classWithAutomaticProperties {
//     constructor(public id: number, private name: string){
//     }
//     }
//     let myAutoClass = new classWithAutomaticProperties(1, "className");
//     console.log(`myAutoClass id: ${myAutoClass.id}`);
//     console.log(`myAutoClass.name: ${myAutoClass.name}`);

abstract class AbstractEmployee {
    public id: number | undefined;
    public name: string | undefined;
    abstract getDetails(): string;
    public printDetails() {
    console.log(this.getDetails());
    }
    }
    class NewEmployee extends AbstractEmployee {
    getDetails(): string {
    return `id : ${this.id}, name : ${this.name}`;

}
}
class NewManager extends NewEmployee {
public Employees: NewEmployee[] | undefined;
getDetails() : string {
return super.getDetails()
+ `, employeeCount ${this.Employees.length}`;
}
}

var employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();