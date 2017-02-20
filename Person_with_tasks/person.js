var Person = {
 task : []
}

Person.task[0] = ["Task1" , true];
Person.task[1] = ["Task2" , true];
Person.task[2] = ["Task3" , true];
Person.task[3] = ["Task4" , false];
Person.task[4] = ["Task5" , false];
Person.task[5] = ["Task6" , false];

function compliteTask() {
  for (var i=0; i<Person.task.length; i++) {
if (Person.task[i][1] == true) {
  document.getElementById("showTask").value += Person.task[i][0]  + "\n";
}
}}

//Create the object Person, which has the property: tasks (of the array type).
//Add 3 completed and 3 unfinished tasks to the array so that each task is
//based on the following properties: name (string) and completed (boolean).
//Display only the completed tasks.
