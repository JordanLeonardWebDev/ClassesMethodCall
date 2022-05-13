class School {

    constructor(name,level,_numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = _numberOfStudents;
    }

    //Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get _numberOfStudents() {
    return this.__numberOfStudents;
  }

  //Getters: all properties have getters

  set _numberOfStudents(value) {
    if(value.isNaN()) {
        console.log('Invalid input numberOfStudents must be set to a Number');
    }
    else {
        this._numberOfStudents = value;
    }
  } 

  //Setters: the numberOfStudents property has a setter

  toggleCheckedOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
    }

    quickFacts() {
        console.log('${name} educates ${numberOfStudents} at the ${level} school level');
    }
}


// Under getters, created a method named quickFacts that logs the string



//Under .quickFacts(), created a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.