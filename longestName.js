const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let obj = {};
  let length = 0;
  if(instructors && instructors.length > 0) {
    for ( let instructor of instructors ) {
      if(length < instructor.name.length) {
        length = instructor.name.length;
        obj = instructor;
      }
    }
  }
  return obj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));