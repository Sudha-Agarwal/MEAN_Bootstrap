let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

    let userRoles = new Map();

    userRoles.set(john, 'admin');

    userRoles.set(lily, 'editor')
          .set(peter, 'subscriber');

//or
let userRoles1 = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

userRoles.get(john);

userRoles.has(foo); // false
userRoles.has(lily); // true

console.log(userRoles.size); // 3

for (const user of userRoles.keys()) {
  console.log(user.name);
}

for (let role of userRoles.values()) {
  console.log(role);
}
for (const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`);
}


const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);

//userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`);