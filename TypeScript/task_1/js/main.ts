interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean,
    key?: string,
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
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}    

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));
console.log(printTeacher('Jane', 'Smith'));

class StudentClass {
  firstName: string;
  lastName: string;
  workingOnHomework: string;
  displayName:string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = `${firstName} ${lastName}`;
    this.workingOnHomework = 'false';
  }

  workOnHomework(): string {
    this.workingOnHomework = 'true';
    return 'Currently working';
  }

  displayNameMethod(): string {
    return this.displayName;
  }
  
}
