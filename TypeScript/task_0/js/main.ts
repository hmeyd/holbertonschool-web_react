interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Dupont',
  age: 20,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Durand',
  age: 22,
  location: 'Toulouse',
};

const studentsList: Student[] = [student1, student2];

// Création de la table
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  nameCell.style.border = '1px solid black';
  nameCell.style.padding = '4px';

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '4px';

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
