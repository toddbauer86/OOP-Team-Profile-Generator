const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

test("Contructor is working with github data", () => {
  const testGithub = "Github";
  const e = new Engineer("Todd", 69, "todd@gmail.com", testGithub);
  expect(e.github).toBe(testGithub);
});

test("title is returning Engineer", () => {
  const e = new Engineer("Todd", 69, "todd@gmail.com", "Github");
  expect(e.title).toBe("Engineer");
});

test("getGithub method working", () => {
  const testGithub = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testGithub);
  expect(e.getGithub()).toBe(testGithub);
});
