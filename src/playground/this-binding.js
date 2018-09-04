const obj = {
  name: 'vikram',
  getName() {
    return this.name;
  }
}

function func() {
  //functions don't have this context defined.
  console.log(this);
}
func(); // undefined


// this wont work. context wont transfer over
// => you lose what 'this' refers to
// const getName = obj.getName;

// this WILL work
const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name: 're'}); // can even do this
console.log(getName());
