const Intern = require("../lib/Intern");

test("can set school using constructor", () => {
  const e = new Intern("Todd", 69, "todd@gmail.com", "WashU");
  expect(e.school).toBe("WashU");
});

test("title returns Intern", () => {
  const e = new Intern("Todd", 69, "todd@gmail.com", "WashU");
  expect(e.title).toBe("Intern");
});

test("Can get school from function", () => {
  const e = new Intern("Todd", 69, "todd@gmail.com", "WashU");
  expect(e.school).toBe("WashU");
});
