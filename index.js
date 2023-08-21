class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getGender() {
    console.log(`${this.name} is a ${this.gender}`);
  }
  getAge() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const aPerson = new Person("Win Lwin", 23, "Male");
aPerson.getGender();
aPerson.getAge();
