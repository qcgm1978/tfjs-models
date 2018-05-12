import { bindPage } from '../coco.js'
import { expectArraysClose } from '@tensorflow/tfjs-core/dist/test_util';
// import { assertValidOutputStride, assertValidScaleFactor, MobileNet, MobileNetMultiplier, OutputStride } from '../../src/mobilenet';
// import * as posenet from '../../src';

it(`The async function declaration defines an asynchronous function, which returns an AsyncFunction object.`, (done) => {
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    var result = await resolveAfter2Seconds();
    return (result);
  }

  asyncCall().then(data => {
    expect(data).toBe('resolved')
    done()
  });
});
it(`mark a member public explicitly`, () => {
  class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
      expect(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  const animal = new Animal('cat')
  expect(animal.name).toBe('cat')
});
it(`When a member is marked private, it cannot be accessed from outside of its containing class`, () => {
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  // expect(() => {
  //   try {
  //     new Animal("Cat").name
  //   } catch (e) {
  //     throw (e)
  //   }
  // }).toThrow(); // Error: 'name' is private;
  const animal = new Animal("Cat")
  // expect(() => animal.name).toThrow('Cat')
});
it(`The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.`, () => {
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
  }

  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  expect(howard.getElevatorPitch()).toBe(`Hello, my name is Howard and I work in Sales.`);
  // expect(() => howard.name).toThrow('Howard'); // error
});
it(`Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:`, () => {
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  expect(x).toEqual(["hello", 10])
  // Initialize it incorrectly
  // expect(() => x = [10, "hello"]).toThrow(); // Error

});
