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
const tbody: HTMLTableSectionElement = document.createElement('tbody');


    studentsList.forEach((student: Student): void => {
const row: HTMLTableRowElement = document.createElement('tr');

const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;

const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
