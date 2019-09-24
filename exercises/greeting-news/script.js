var family = [];

function createPerson(name, age, coder, relationship) {
  var person = {};
  person.name = name;
  person.age = age;
  person.coder = coder;
  person.relationship = relationship;
  family.push(person);
}

createPerson('Sina', 33, true, 'self');
createPerson('Zohreh', 61, false, 'mom');
createPerson('Ala', 68, false, 'dad');
createPerson('Sam', 41, false, 'brother');
createPerson('Ben', 38, false, 'brother');

console.log(family);