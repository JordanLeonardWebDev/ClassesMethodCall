class School { 

  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  /*Properties: name (string),
  level (one of three strings: 'primary', 'middle', or 'high'), 
  and numberOfStudents (number)
  */
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
  return this._numberOfStudents
  }

 //Getters: all properties have getters

 set numberOfStudents(value) {
  if(value.isNaN()) {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
  } else {
    this._numberOfStudents = value;
    }
  }


 //Setters: the numberOfStudents property has a setter

 quickFacts() {
  console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
}


// Under getters, created a method named quickFacts that logs the string

  static pickSubstituteTeacher(substituteTeachers) {
  const randInt = Math.floor(Math.random() * substituteTeachers.length);
  return substituteTeachers[randInt];
    }
}

/*Under .quickFacts(), created a static method named pickSubstituteTeacher. 
This method will receive one parameter, named substituteTeachers. 
The substituteTeachers parameter will take an array of strings.
*/

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy) {
    super(name, 'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  /*build a PrimarySchool class that extends School.
  Call super on the first line of the PrimarySchool‘s constructor().
  Remaining argument to set the pickupPolicy property.*/

  get pickupPolicy() {
    return this._pickupPolicy;
  }
 }
//Addded getter to the PrimarySchool class.


class HighSchool extends School {

  constructor(name, numberOfStudents, sportsTeams)  {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

   get sportsTeams() {
     return this._sportsTeams;
   }
 }
/*created a HighSchool class that extends the School class.
 added the properties, getters, and methods in School
 added Properties: sportsTeams (array of strings)
 added Getters: A getter for the sportsTeams array. */


 const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
 lorraineHansbury.quickFacts();
 
 const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
 
 const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
 console.log(alSmith.sportsTeams);