interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Philippe',
    lastName: 'Martin',
    age: 33,
    location: 'Canada'
};

const student2: Student = {
    firstName: 'Sophie',
    lastName: 'Durand',
    age: 21,
    location: 'France'
};
const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = table.insertRow();
