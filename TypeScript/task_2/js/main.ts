  // Task 1 - Teacher interface
  interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  const teacher3: Teacher = {
    firstName: 'Greg',
    fullTimeEmployee: false,
    lastName: 'Sala',
    location: 'London',
    contract: false,
  };

  // Task 2 - Directors interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'Philippe',
    lastName: 'Lapique',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  // Task 3 - printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  // Task 4 - StudentClass
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }

  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(): string {
      return 'Currently working';
    }

    displayName(): string {
      return this.firstName;
    }
  }
  //task 5 -
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak():string;
    workDirectorTasks():string;

  }
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak():string;
    workTeacherTasks():string;

  }
  class DirectorClass implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  class TeacherClass implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }

  function createEmployee(salary: number | string): DirectorClass | TeacherClass {
    if (typeof salary === 'number' && salary < 500) {
      return new TeacherClass();
    } else {
      return new DirectorClass();
    }
  }
  // Task_6 -
  function isDirector(employee: DirectorClass | TeacherClass): employee is DirectorClass {
    return (employee as DirectorClass).workDirectorTasks !== undefined;
  }
  function executeWork(employee: DirectorClass | TeacherClass): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }



  
  // Tests
  console.log(teacher3);
  console.log(director1);
  console.log(printTeacher('John', 'Doe'));
  const student = new StudentClass('John', 'Doe');
  console.log(student.displayName());
  console.log(student.workOnHomework());
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));
  console.log(createEmployee(200));
  console.log(createEmployee(1000));



