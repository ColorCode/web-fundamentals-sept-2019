// GOOD LUCK!!!
var fam = [
  {
    name: 'Sina',
    age: 33
  },
  {
    name: 'Sam',
    age: 41
  },
  {
    name: 'Jimmy',
    age: 10
  }
];

var oldestPerson = {
  age: 0
}
for (var i = 0; i < fam.length; i++) {
  var thisPerson = fam[i];
  console.log(thisPerson.name + ' is ' + thisPerson.age + ' years old.');

  if (thisPerson.age < 21) {
    console.log('*****' + thisPerson.name + ' cannot drink 😩');
  }

  if (thisPerson.age > oldestPerson.age) {
    oldestPerson = thisPerson;
  }
}

console.log(oldestPerson.name + ' is the oldest.');





