interface Adminn {
    name: string;
    roles: string[];
};

interface Employeee {
    name: string;
    startDate: Date;
}
// here superemploye is the one who has admin + employees properties

/* type superEmployee = {
    name: string;
    roles: string[];
    startDate: Date;
} */

// type superEmployee = Admin & Employee;
interface super_Employee extends Adminn ,Employeee{}


let new_emp: super_Employee = {
    name: 'srushti',
    roles: ['admin'],
    startDate: new Date(),
}
