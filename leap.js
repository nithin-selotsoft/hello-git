//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
//
// YOUR CODE GOES HERE
//  
this.inputYear = input;


Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
//
if(this.inputYear%4==0 && this.inputYear%100!=0 || this.inputYear%400==0){
    return true;
};
return false;
};

};

module.exports = Year;
