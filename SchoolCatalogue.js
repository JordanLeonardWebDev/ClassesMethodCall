class School {

    constructor(name,level,_numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = _numberOfStudents;
    }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get _numberOfStudents() {
    return this.__numberOfStudents;
  }


  set _numberOfStudents(value) {
    if(value.isNaN()) {
        console.log('Invalid input numberOfStudents must be set to a Number');
    }
    else {
        this._numberOfStudents = value;
    }
  } 

  toggleCheckedOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
    }

    quickFacts() {
        console.log('${name} educates ${numberOfStudents} at the ${level} school level');
    }
}
