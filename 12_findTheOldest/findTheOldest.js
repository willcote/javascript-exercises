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

// Do not edit below this line
module.exports = findTheOldest;
