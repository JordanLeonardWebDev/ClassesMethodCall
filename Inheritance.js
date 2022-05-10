/*In this exercise, you will begin to create the Nurse class as a child of the HospitalEmployee class. Remember the Nurse class has the following properties and methods:

Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
Under HospitalEmployee, create an empty class named Nurse that extends HospitalEmployee. */
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  /*Inside the Nurse class, create a constructor() that accepts two arguments. Use the list of properties above to name these arguments. */
  
  /*In the Nurse constructor, call the parent’s constructor method and pass the appropriate value(s). */
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      /*Inside of the Nurse constructor, and under super, set _certifications.*/
      super(name);
      this._certifications = certifications;
    }

    get certifications(){
      return this._certifications;
    }
  addCertification(newCertification) {
  this._certifications.push(newCertification);
   }
  }
  /*Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property:
  
  name: 'Olynyk'
  certifications: ['Trauma', 'Pediatrics']*/
    const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);
  
    const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
    nurseOlynyk.takeVacationDays(5);
    console.log(nurseOlynyk.remainingVacationDays);
    
    console.log(nurseOlynyk.addCertification('Genetics'));
    
    console.log(nurseOlynyk.certifications);

    /* 1.Added method "addCertifications under the certifications getter"
    The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.
       2.Add a method called addCertification under the certifications getter.
    The method should accept one input (newCertification).
       3.At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.
      4.At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.*/