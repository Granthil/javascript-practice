// Create a function passingStudents that accepts an array of student objects.
// It should iterate through the list of students and return an array of the names of all the students who have an average grade of at least 70.

function passingStudents(students) {

    let passing = [];

    for (let i = 0; i < students.length; i++) {
        let total = 0;
        let grades = students[i].grades;        
        for (let j = 0; j < grades.length; j++) {
            total += grades[j].score;
        }   
        let average = total / grades.length;
        if (average >= 70) {
            passing.push(students[i].name);
        }   
    }
    return passing; 
}




var students = [
 {
   "name": "Marco",
   "id": 12345,
   "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
   "name": "Donna",
   "id": 55555,
   "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Jukay",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
 ];

 console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]