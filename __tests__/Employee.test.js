const Employee = require("../lib/Employee");

test("Can create an employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Name is set with constructor argument", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.name).toBe('Todd');
})

test("ID is set with constructor argument", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.id).toBe(69);
})

test("Email is set with constructor argument", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.email).toBe('todd@gmail.com');
})

test("getName method is working", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.getName()).toBe('Todd'); 
})

test("getID method is working", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.getId()).toBe(69);
})

test("getEmail method is working", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.getEmail()).toBe('todd@gmail.com');
})

test("getRole method is working", () =>{
  const e = new Employee('Todd', 69, 'todd@gmail.com');
  expect(e.getRole()).toBe("Employee");
})