const findTheOldest = function (people) {
  let oldestPerson;
  let oldestAge = 0;
  for (const person of people) {
    let age;
    let date = new Date();
    if (!person.hasOwnProperty("yearOfDeath"))
      age = date.getFullYear() - person.yearOfBirth;
    else age = person.yearOfDeath - person.yearOfBirth;

    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  }

  return oldestPerson;
};

/*
- this is me trying to understand the solution using reduce

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = oldest.getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = currentPerson.getAge(
      oldest.yearOfBirth,
      oldest.yearOfDeath
    );
    return currentAge > oldestAge ? currentPerson : oldest;
  });
};

function getAge(birthYear, deathYear) {
  let date = new Date().getFullYear();

  if (!deathYear) return date - birthYear;
  else return deathYear - birthYear;
}
*/

// Do not edit below this line
module.exports = findTheOldest;
