type Admin = {
    name: string;
    roles: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}
// here superemploye is the one who has admin + employees properties

/* type superEmployee = {
    name: string;
    roles: string[];
    startDate: Date;
} */

type superEmployee = Admin & Employee;

let emp: superEmployee = {
    name: 'srushti',
    roles: ['admin'],
    startDate: new Date(),
}
