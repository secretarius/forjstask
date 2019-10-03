let employee1 = {
    name: 'Hanna',
    position: 'Project manager',
    salary: 1000
};

let employee2 = {
    name: 'Bill',
    position: 'Junior developer',
    salary: 800
};

function promote (newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise

    return this.name+ " is " +this.position+" and earns $" + this.salary
};

let hannaRise = promote.call(employee1, "Department head", 500);
console.log(hannaRise);

let billRise = promote.apply(employee2, ["Middle developer", 300]);
console.log(billRise);


let promoteHanna = promote.bind(employee1);
console.log(promoteHanna("Department head", 500));

let promoteHannaToDepartment = promote.bind(employee1, "Department head");
console.log(promoteHannaToDepartment(500));
