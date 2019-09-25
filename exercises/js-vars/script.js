var me = {
  name: 'Sina',
  age: 24,
  relationship: 'self',
  children: [],
  karateSkills: null
};

var sam = {};
sam.name = 'Sam';
sam.age = 41;
sam.relationship = 'brother';
sam.karateSkills = 'blue belt';
sam.children = [];

var mom = {};
mom.name = 'Zohreh';
mom.age = 61;
mom.relationship = 'mother';
mom.children = [me, sam];
mom.karateSkills = 'black belt';

var family = [me, mom, sam];

console.log(family);