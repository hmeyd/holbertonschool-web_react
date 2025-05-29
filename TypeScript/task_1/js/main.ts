// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Définition de l'interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d'objet Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface de la fonction printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d’utilisation
console.log(printTeacher("John", "Doe")); // Affiche : J. Doe

// Interface décrivant le constructeur
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface décrivant les méthodes de la classe
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Classe StudentClass qui implémente StudentClassInterface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

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
