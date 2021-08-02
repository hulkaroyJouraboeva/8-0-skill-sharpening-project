/**
 * applyDiscount()
 * ---------------------
 * A local movie theater has a few different ticket discounts. 
 * If the attendee is 10 years old or younger, or 65 years old or older, they receive a 10% discount. 
 * If the attendee is viewing the movie with a member, they receive a 20% discount. If both situations apply, 
 * they receive a 30% discount.
 *
 * Write an algorithm that will determine the price of a ticket based on the `priceInCents` 
 * of the ticket, the `age` of the attendee, and the membership status (i.e. `hasMembership`).
 * @param {number} priceInCents - The price of the ticket, in cents.
 * @param {number} age - The age of the attendee.
 * @param {boolean} hasMembership - Whether or not the person has access to a membership.
 * @returns {number} The total amount, after all discounts have been applied.
 *
 * EXAMPLE:
 *  applyDiscount(1000, 23, false);
 *  //> 1000
 *
 *  applyDiscount(1000, 66, false);
 *  //> 900
 *
 *  applyDiscount(1000, 9, true);
 *  //> 700
 */

// Input: priceInCents (number), age (number), hasMembership (boolean)
// Output: Total price, after discounts

// Approach: Accumulator Patter. Nested conditionals? Apply discounts: 
// multiplication. Account for only hasMembership being true (line 45)

function applyDiscount(priceInCents, age, hasMembership) {
  // default value: discountedPrice, a number
  let discountedPrice = priceInCents;

  // IF AGE is 10 or younger, OR AGE is 65 or older
  if (age <= 10 || age >= 65) {
    // re-assign discountedPrice by applying 10% discount to priceInCents
    discountedPrice = 0.90 * priceInCents;
    // IF hasMembership is truthy
    if (hasMembership) {
      // re-assign discountedPrice by applying 30% discount to priceInCents 
      discountedPrice = 0.70 * priceInCents;
    } // ELSE IF only hadMembership is true
  } else if (hasMembership) {
    // re-assign discountedPrice by applying 20% discount to priceInCents 
    discountedPrice = 0.80 * priceInCents;
  }
  //RETURN modified discountedPrice
  return discountedPrice;
}

/**
 * getCartTotal()
 * ---------------------
 * An online store allows for customers to add products to their cart. 
 * Customers can add multiples of each product to the cart.
 * 
 * Write an algorithm that will determine the total amount of all items in the cart. 
 * Make sure to multiply the `priceInCents` times the `quantity` to get the full cost of each product.
 * @param {Object[]} products - An array of products.
 * @param {number} products[].priceInCents - The price of the product, in cents.
 * @param {number} products[].quantity - The number of products being bought.
 * @returns {string} A formatted representation of the total, rounded to two decimal places.
 * 
 * EXAMPLE:
 *  const cart = [
      { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
      { name: "Socks", priceInCents: 900, quantity: 2 },
    ];
    getCartTotal(cart);
 *  //> "$30.00"
 */

// Input: [PRODUCTS] - an array of PRODUCT {objects}, priceInCents - 
// price of each {product}, quantity - count of each {product}

// Output: String - total price (based on quantity), rounded to 2 decimal places

// Approach: Accumulator pattern

function getCartTotal(products) {
  // declare TOTAl and assign it 0    the value of quantity * 
  let productTotal = 0;
  let total = 0;

  // iterate through PRODUCTS
  for (const product of products) {
    // productTotal is (priceInCents * quantity) / 100
    productTotal = (product.priceInCents * product.quantity) / 100;
    // total gets productTotal, saves it
    total += productTotal;
  }

  // RETURN modified TOTAL
  return `$${total.toFixed(2)}`;
}

/**
 * compareLocations()
 * ---------------------
 * A shipping company is looking to make its deliveries more efficient by comparing
 * the destinations of multiple deliveries. If the locations are similar, the packages
 * may be able to be bundled together.
 * 
 * Write an algorithm that takes in two objects of similar shape, each object representing 
 * an address. Then, return a string that describes the relationship between those two addresses.
 * 
 * - If the street, city, state, and zip for both addresses are the same, return the string "Same building."
 * - If the city, state, and zip are the same, return the string "Same city."
 * - If just the state is the same, return the string "Same state."
 * - If none of those matches occur, return the string "Addresses are not near each other."
 * 
 * Keep in mind that an address could have the same street address or the same city but 
 * be in a different state. 
 * 
 * @param {Object} address1 - An address object.
 * @param {string} address1.street
 * @param {string} address1.city
 * @param {string} address1.state
 * @param {string} address1.zip
 * @param {Object} address2 - An address object. In the same shape as `address1`, above.
 * @returns {string} A string that describes the relationship between the two addresses.
 * 
 * EXAMPLE:
 *  const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "2 Lees Creek Ave.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    compareLocations(address1, address2);
    //> "Same city."
 */

// Input: {ADRESS1} {ADRESS2} - address objects: street, city, state, zip
// Output: String - describes the relationship between two {adress} objects

function compareLocations(address1, address2) {
  // default value: string - "Addresses are not near each other." message
  let relationship = "Addresses are not near each other.";

  // IF address1 and address2 STATE match
  if (address1.state === address2.state) {
    // re-assign default value
    relationship = "Same state.";
    // IF address1 and address2 CITY and ZIP 
    if (address1.city === address2.city && address1.zip === address1.zip) {
      // re-assign default value
      relationship = "Same city.";
      // IF STREET matches
      if (address1.street === address2.street) {
        // re-assign defualt value
        relationship = "Same building."
      }
    }
  }
  // return modified deault value
  return relationship;
}

/**
 * gradeAssignments()
 * ---------------------
 * An online learning management system needs a way to quickly add the current status to a list of assignments. 
 * Depending on the `kind` of assignment, different statuses should be applied.
 *
 * Write an algorithm that adds a key of `status` to each object in an array of objects. 
 * Each object represents a single assignment submitted by a student.
 *
 * - If the assignment has a `kind` of `"PASS-FAIL"`, set the `status` value to `"PASSED"` 
 * if the `score.received` equals the `score.max`. Otherwise, set that `status` to be `"FAILED"`.
 * 
 * - If the assignment has a `kind` of `"PERCENTAGE"`, set the `status` value to be `"PASSED: <percentage>"` 
 * if the student scored at least 80.0%. The `<percentage>` should be set to one decimal place. 
 * If the student scored less than 80.0%, set the status to `"FAILED: <percentage>"`.
 * 
 * - If the assignment has any other `kind` than the two above, set the `status` value to equal 
 * `"SCORE: <received>/<max>"`, where `<received>` is the `score.received` value and `<max>` is the `score.max` value.
 *
 * Then, return the overall array with all modified assignments.
 *
 * @param {Object[]} assignments - An array of assignment objects.
 * @param {string} assignments[].kind - The type of assignment. Could be "PASS-FAIL", "PERCENTAGE", or another value.
 * @param {Object} assignments[].score - An object that contains the scores of the assignment.
 * @param {number} assignments[].score.received - The score received on the assignment.
 * @param {number} assignments[].score.max - The maximum score that could be received on the assignment.
 * @returns {Object[]} The original array of assignment objects, with a new key of `status` added to each object.
 * 
 * EXAMPLE:
 *  const assignments = [
      { kind: "PASS-FAIL", score: { received: 4, max: 4 } },
      { kind: "PERCENTAGE", score: { received: 8, max: 10 } },
      { kind: "ESSAY", score: { received: 4, max: 5 } },
    ];
    gradeAssignments(assignments);
    //> [
    //>   { 
    //>     kind: "PASS-FAIL",
    //>     score: { received: 4, max: 4 },
    //>     status: "PASSED",
    //>   },
    //>   { 
    //>     kind: "PERCENTAGE",
    //>     score: { received: 7, max: 9 },
    //>     status: "FAILED: 77.8%",
    //>   },
    //>   { 
    //>     kind: "ESSAY",
    //>     score: { received: 4, max: 5 },
    //>     status: "SCORE: 4/5",
    //>   },
    //> ];
 */
function gradeAssignments(assignments) {
  // shorted object.status by storing it in a variable
  // * let status = assignments.status; *
  
  // iterate through {eachAssignment} in [assignments]
  for (const assignment of assignments) {
    
    // add STATUS key to {assignments}[] value: empty string
    assignment.status = "";
    
    // IF {}.KIND equals "PASS-FAIL"
    if (assignment.kind === "PASS-FAIL") {
      // IF `score.received` equals the `score.max`
      if (assignment.score.received === assignment.score.max) {
        // STATUS gets "PASSED"
        assignment.status = "PASSED";
      } else {
      // ELSE 
        // STATUS gets "FAILED"
        assignment.status = "FAILED";
      }
    }
    // ELSE IF {}.KIND equals "PERCENTAGE"
    else if (assignment.kind === "PERCENTAGE") {
      // find out the percentage for the SCOREs
      let perc = (assignment.score.received / assignment.score.max) * 100;
      // IF percentage is >= 80%
      if (perc >= 80) {
        // STATUS gets "PASSED: <percentage>"
        percentage = perc.toFixed(1);
        assignment.status = `PASSED: ${percentage}%`
      } else {
      // ELSE
        // "FAILED: <percentage>"
        percentage = perc.toFixed(1);
        assignment.status = `FAILED: ${percentage}%`
      }
    }
    
    // ELSE IF {}.KIND is not "PASS-FAIL" AND "PERCENTAGE"
    else if (assignment.kind !== "PASS-FAIL" && "PERCENTAGE") {
      // STATUS gets "SCORE: <received>/<max>"
      assignment.status = `SCORE: ${assignment.score.received}/${assignment.score.max}`;
    }
  }
  // RETURN modifed ASSIGNMENTS with STATUS added to it
  return assignments;
}

/**
 * createLineOrder()
 * ---------------------
 * An airline wants to build an application that improves the boarding process for its customers. 
 * They want to have customers sign up in order of arrival, but prioritize those customers who have a membership.
 * 
 * Build an algorithm that takes in an array of objects, where each object represents a person. The order of 
 * the array is important; the person at index `0` arrived first while the person at index `1` arrived afterwards.
 * 
 * Return an array that includes only the names of each person, but reordered to account for whether or not each person 
 * has a membership. Everyone who has a membership should be at the front of the line in the same order they arrived.
 * Everyone without a membership should be in the same order they arrived but after those with a membership.
 * 
 * @param {Object[]} people - An array of people objects.
 * @param {string} people[].name - The name of the person.
 * @param {boolean} people[].hasMembership - Whether or not the person has a membership.
 * @returns {string[]} An array of names, in order depending on the person's order in 
 * the original array and the person's priority.
 * 
 * EXAMPLE:
 *  const people = [
      { name: "Wade Carson", hasMembership: false },
      { name: "Ray Anderson", hasMembership: true },
      { name: "America Marsh", hasMembership: true },
      { name: "Patience Patel", hasMembership: false },
    ];
    createLineOrder(people);
    //> [ "Ray Anderson", "America Marsh", "Wade Carson", "Patience Patel" ]
 */
function createLineOrder(people) {
  // declare 'hasMembership' and assign an empty array
  const withMembership = [];
  // declare 'without' and assign an empty array
  const without = [];

  // iterate through each 'person' in 'people'
  for (const person of people) {
    // if 'person.hasMembership' is true
    if (person.hasMembership) {
      // push 'person.name' into 'withMembership'
      withMembership.push(person.name);
      // else if 'person.hasMembership' is false
    } else if (!person.hasMembership) {
        // push 'person.name' into 'without'
      without.push(person.name);
    }
  }

  // declare 'lineOrder' and assign the evaluated result of concatenating 'withMembership' and 'withthout'
  const lineOrder = withMembership.concat(without);

  // return 'lineOrder'
  return lineOrder;
}

module.exports = {
  applyDiscount,
  getCartTotal,
  compareLocations,
  gradeAssignments,
  createLineOrder,
};
