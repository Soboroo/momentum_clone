function sayHello(name = "World") {
  console.log("Hello " + name);
}

sayHello();
sayHello("John");
sayHello("Hamburger");

const player = {
  name: "John",
  age: 30,
  score: 4.5,
  status: "single",
  sayHello: function (name = "World": string) {
    console.log(this.name + ": Hello " + name);
  },
};

player.sayHello("Hamburger");
