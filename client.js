// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// This function will calculate total compensation of the employee with a reviewRating of 3.

function calculateIndividualEmployeeBonus(object){
  
  for (emp of employees){
    
    if (emp.reviewRating == 3 && emp.employeeNumber.length == 4){
      totalComp = emp.annualSalary * 1.09;
      if (totalComp > 65000) {
      totalComp = totalComp - totalComp * .01;
      }
      console.log(totalComp);
    } else if (emp.reviewRating == 3) {
      totalComp = emp.annualSalary * 1.04;
      console.log(totalComp);
    }
      
    
    if (emp.reviewRating == 4 && emp.employeeNumber.length == 4){
      totalComp = emp.annualSalary * 1.11;
      if (totalComp > 65000) {
      totalComp = totalComp - totalComp * .01;
      }
      
      console.log(totalComp);
    } else if (emp.reviewRating == 4) {
      totalComp = emp.annualSalary * 1.06;
      if (totalComp > 65000) {
      totalComp = totalComp - totalComp * .01;
      }
      
      console.log(totalComp);
    }

    if (emp.reviewRating == 5 && emp.employeeNumber.length == 4){
      totalComp = emp.annualSalary * 1.15;
      if (totalComp > 65000) {
        totalComp = totalComp - totalComp * .01;
      }
      
      console.log(totalComp);
    } else if (emp.reviewRating == 5) {
      totalComp = emp.annualSalary * 1.10;
      if (totalComp > 65000) {
      totalComp = totalComp*0.99;
      console.log(totalComp);
    }
  }
}
}
calculateIndividualEmployeeBonus(employees);


// Loop over the `employees` array and do the following:

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
//     - The `log` should be in the loop, not the function??????????????????

// ## The Bonus Calculation Function

// Write a declared function that takes in one **Employee** object
//  (as an argument to the function), and `return` a new **object** 
// with the following properties. _Note these properties are different
//  than the ones you start with!_



// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus 
// percentage the employee is to receive. See section below 
// for calculation instructions.
// * The `totalCompensation` property should be the adjusted
//  annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded
//  to the nearest dollar.

// ### Individual Bonus Rules

// - Those who have a rating of a 2 or below should not receive a bonus.

// - Those who have a rating of a 3 should receive a base bonus of 
//   4% of their base annual income.

// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.

// - Those who have a rating of a 5 should receive a base 
// bonus of 10% of their base annual income.

// - If their employee number is 4 digits long, this means they have been with 
// the company for longer than 15 years, and should receive an additional 5%.

// - However, if their annual income is greater than $65,000, they should have 
// their bonus adjusted down 1%.

// - No bonus can be above 13% or below 0% total