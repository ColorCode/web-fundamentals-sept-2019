function whoIsOlder(person1, person2) {
  console.log('Sina is older than Tom');
};

var me = {
  name: 'Sina',
  age: 33
};
var mySibling = {};
var myFriend = {};

whoIsOlder(me, mySibling);
whoIsOlder(me, myFriend);
whoIsOlder(mySibling, myFriend);