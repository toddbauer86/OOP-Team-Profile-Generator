const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

test("can get office number from constructor", () => {
  const e = new Manager("Todd", 69, "todd@gmail.com", 3148087777);
  expect(e.officeNumber).toBe(3148087777);
});

test("title should return manager", () => {
  const e = new Manager("Todd", 69, "todd@gmail.com", 3148087777);
  expect(e.title).toBe("Manager");
});

test("getOfficeNumber() returns office number", () => {
  const e = new Manager("Todd", 69, "todd@gmail.com", 3148087777);
  expect(e.officeNumber).toBe(3148087777);
});
