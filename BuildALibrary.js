class Media  { /*Create an empty class called Media.*/
   
/*Inside the Media class, create an empty constructor() method that takes one parameter.*/
   constructor(title) {
     this._title = title;
     this._isCheckedOut = false;
     this._ratings = [];
/*Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_). */
   }
   get title() {
     return this._title;
   }
   get isCheckedOut() {
     return this._isCheckedOut;
   }
   get ratings() {
     return this._ratings;
   }
   
   /*Create getters for the title, isCheckedOut, and ratings properties. Each getter should return the value saved to the matching property.*/
   set isCheckedOut(value) {
     this._isCheckedOut = !this.isCheckedOut;
   }
   /*Create a setter for the isCheckedOut property. */
toggleCheckedOutStatus () {
  this._isCheckedOut = !this._isCheckedOut;
  /*Under your getters, create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property.

If the value is true, then change it to false. If the value is false, then change it to true. */
}
getAverageRating() {
  let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
  return ratingsSum / this.ratings.length;

/* Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array. */
 } 

 addRating(value) {
   this.ratings.push(value);
 }
 /*Let’s add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array. */
}

class Book extends Media {

  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  /*Next, we’ll build a Book class that extends Media. 
  
Inside the Book class, create a constructor that accepts three arguments. These arguments are used to set properties that do not have default values.

Call super on the first line of the Books‘s constructor method. Pass it any arguments that the parent constructor uses.
*/

   get author() {
     return this._author;
   }
   get pages () {
     return this._pages;
   }
}
   /*Use the remaining arguments to set the author and pages properties in Book.
   
Since our Book class inherits Media‘s properties and getters, we only need to create two new getters in the Book class. */



class Movie extends Media {

 constructor(director, title, runTime) {
  super(title);
  this._director = director;
  this._runTime = runTime;
 }

get director() {
  return this._director;
}
get runTime() {
  return this._runTime;
 }
 /*create an entire Movie class using only the property, getter, and method specifications */
}

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
/*Create a Book instance with the following properties:

Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
Save the instance to a constant variable named historyOfEverything. */
historyOfEverything.toggleCheckedOutStatus();
/*
Call .toggleCheckOutStatus() on the historyOfEverything instance. */
console.log(historyOfEverything.isCheckedOut);
/*
Log the value saved to the isCheckedOut property in the historyOfEverything instance. */
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
/*Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.*/

console.log(historyOfEverything.getAverageRating());
//Call .getAverageRating() on historyOfEverything. Log the result to the console.

const speed = new Movie('Jan de Bont','Speed',116);
/*Create a Movie instance with the following properties:

Director: 'Jan de Bont'
Title: 'Speed'
Runtime: 116
Save the instance to a constant variable named speed.*/

speed.toggleCheckedOutStatus();
//Call .toggleCheckOutStatus() on the speed instance.

console.log(speed.isCheckedOut);
//Log the value saved to the isCheckedOut property in the speed instance.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//Call .addRating() three times on speed with inputs of 1, 1, and 5.
console.log(speed.getAverageRating());
//Call .getAverageRating() on speed. Log the result to the console.
