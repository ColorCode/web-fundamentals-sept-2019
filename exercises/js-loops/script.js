// GOOD LUCK!!!
function createPerson(name, age, relation) {
  var person = {
      name: name,
      age: age,
      relation: relation
  };

  return person;
}

var me = createPerson('Ashok', 34, 'self')
var spouse = createPerson('Tina', 32, 'spouse')
var harshita = createPerson('Harshita', 9, 'daughter')
var nishra = createPerson('Nishra', .5, 'daughter')

var family = [me, spouse, harshita, nishra]
var oldest;
for(var i = 0; i<family.length; i++) {
    var nameAgeOld = family[i].name +' is '+ family[i].age + ' years old !!!';
    var drinkingEligibility = family[i].age > 21 
        ? family[i].name + ' is old enough to drink' 
        : family[i].name + ' is not allowed to drink'
    if(!oldest) {
        oldest = family[i]
    } 
    
    if(oldest.age < family[i].age){
        oldest = family[i]
    }
    
    console.log(nameAgeOld, drinkingEligibility)
}

console.log(oldest.name + ' is oldest member in family');