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

const director1: Directors = {
  firstName: 'Philippe',
  lastName: 'Lapique',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
