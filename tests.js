// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise #1 Take your first "Test Drive" by writing your first test!
// Our next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a
// sayHello() function that takes in a name as an argument and returns a string that says hello to that name.
//
// Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to
// assert that sayHello is a defined function. Use your tests for helloWorld as a guide.
// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// Step 5: Given that this is our first (tiny) test and our first implementation, there is not yet the opportunity to refactor.
// Step 6: The last TDD step is to "repeat" the process of adding another test. What we're going to do is add our
// work to git and then move to Exercise #2, which is to add the second test.

describe('helloWorld', function sayHello() {
    it('should be a defined function', function sayHello() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function sayHello() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function sayHello() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function sayHello() {
        expect(sayHello()).not.toBe(undefined);
    });
});

// Exercise #2 Ensure our function returns the right data type.
// New tests will each have their own expect, it, the describe
// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives
// us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.".
// The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
// Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".
// Step 4: Now, run all the tests to ensure that the previously red test is now turned green by our impelementation.
// Step 5: There's nothing to refactor.
// Step 6: Repeat (Repeat the process by moving to build the next, small test)







// Exercise #3 - Add a test to confirm actual vs. expected output.
// Step 1: How that the function exists and returns the right data type, let's add our first realistic assertion.
// In tests.js, assert that sayHello("Jane") returns "Hello, Jane!". Our first test should be super simple and super small.
// Step 2: Run all tests and make sure that this newly added test is red.
// Step 3: If the test wants us to return "Hello, Jane!" then literally write return "Hello, Jane!";
// because that's the simplest way to green a test looking for "Hello, Jane!".
// Step 4: Run all tests. They should all be green at this point.
// Step 5: It's too soon to refactor.
// Step 6: Repeat step means to add another test, so let's move to the next exercise.
