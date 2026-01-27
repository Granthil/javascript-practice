// this keyword (basic)

const user = {
    name: "harsh",
    greet() {
        console.log(this.name);
    }
};

user.greet();
