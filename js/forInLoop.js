// The below is the format for a for in loop.
// It's used primarily for objects. Try it with an array and see why it's not the best for arrays

// Format below:
// for (variable in object) {
//   statement
// }

let codeFamily = {
  Aurora: "I love CSS!",
  Juana: "I hate Javascript",
  Akaki: "Ain't nothing but a g-thang babuh babuh",
  Ashok: "I love coding!",
  Jarvis: "They named an AI after me in Iron man",
  Joey: "I <3 coding",
  Adam: "Some call me the man of Steele. I just go by Adam",
  Margaret: "I will be a future coder, positive words of Affirmation!",
  Tara: "This aint so hard",
  Luca: "On the road to glory",
  Pooja: "No more testing for meeee!",
  Kalen: "I don't do pushups, I push the earth down"
};

for (let member in codeFamily) {
  // console.log(member)
  // console.log(codeFamily[member])
  console.log("My name is", member, "and", codeFamily[member]);
}
