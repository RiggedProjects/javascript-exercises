const findTheOldest = function(peoples) {
    // Use the reduce method to iterate over the peoples array and find the oldest person
    return peoples.reduce((prev, curr) => {
      // Check if prev is falsy (first iteration) or if the age of curr is greater than the age of prev
      if (!prev || calculateAge(curr) > calculateAge(prev)) {
        return curr; // If true, return curr as the new oldest person
      } else {
        return prev; // Otherwise, return prev, indicating that prev remains as the oldest person so far
      }
    });
  };
  
  // Helper function to calculate the age of a person
  function calculateAge(person) {
    if (!person.yearOfDeath) {
      // If yearOfDeath is not defined, calculate the age based on the current year
      return new Date().getFullYear() - person.yearOfBirth;
    } else {
      // If yearOfDeath is defined, calculate the age based on the difference between yearOfDeath and yearOfBirth
      return person.yearOfDeath - person.yearOfBirth;
    }
  }
  
  module.exports = findTheOldest;
  