class Person {
  constructor(name='Anon', age=0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` their major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.homeLocation) {
      description += ` Im visiting ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Traveller('blah', 123);
console.log(me.getGreeting());

const other = new Student();
console.log(other.getDescription());

const traveller = new Traveller('burt', 101, 'new york');
console.log(traveller.getGreeting());

