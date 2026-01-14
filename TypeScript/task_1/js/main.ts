interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean,
}

const teacher3: Teacher = {
  firstName: 'Greg',
  fullTimeEmployee: false,
  lastName: 'Sala',
  location: 'London',
  contract: false,
};
interface Directors extends Teacher {
    numberOfReports: number,
    }

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));
console.log(printTeacher('Jane', 'Smith'));

