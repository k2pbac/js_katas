const organizeInstructors = function(instructors) {
  
  let organized = {};

  for (let instructor of instructors) {
    if (!organized[instructor.course]) {
      organized[instructor.course] = [];
    }
    organized[instructor.course].push(instructor.name);
  }

return organized;


};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"},
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));