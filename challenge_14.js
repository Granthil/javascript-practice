// Create a function highestScore that takes in an array of student objects as a parameter


function highestScore(students) {
 var highestScore = -Infinity;
 var topStudent = null;

 for(var i = 0; i < students.length; i++) {
    if(students[i].score > highestScore) {
        highestScore = students[i].score;
        topStudent = students[i];
    }


}
      return topStudent.name[0] +
         topStudent.name.split(" ")[1][0] +
         topStudent.id;

}


 var students = [
 {name: 'Will Sentance', id: 128, score: -42},
 {name: 'Jamie Bradshaw', id: 32, score: 57},
 {name: 'Lisa Simpson', id: 2, score: 99},
 {name: 'Luke Skywalker', id: 256, score: 94}
 ];

console.log(highestScore(students)); //=> 'LS2'