function whoIsOlder(person1, person2) {
  var message;
  var ageDifference;

  // Person 1 is older
  if (person1.age > person2.age) {
    ageDifference = (person1.age - person2.age);
    message = person1.name + ' is older than ' + person2.name + ' by ' + ageDifference + ' years';
  } 

  // Person 2 is older
  else if (person2.age > person1.age) {
    ageDifference = (person2.age - person1.age);
    message = person2.name + ' is older than ' + person1.name + ' by ' + ageDifference + ' years';
  } 
  
  // Same age
  else {
    message = person1.name + ' and ' + person2.name + ' are the same age';
  }
  console.log(message);
};

var sina = { 
  name: 'Sina', 
  age: 33 
};

var mySibling = {
  name: 'Sam',
  age: 41
};

var myFriend = {
  name: 'James',
  age: 38
};

whoIsOlder(sina, mySibling);
whoIsOlder(sina, myFriend);
whoIsOlder(mySibling, myFriend);