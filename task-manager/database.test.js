const db = require("./database");

beforeAll(async () => {
  await db.sequelize.sync();
});

it("creates a task", async () => {
  expect.assertions(1);
  const task = await db.Task.create({
    id: 1,
    description: "#1 A task to do",
    status: "complete",
    priority: "high",
  });
  expect(task.id).toEqual(1);
});

it("gets a task", async () => {
  expect.assertions(2);
  const task = await db.Task.findByPK(1);
  expect(task.description).toEqual("#1 A task to do");
  expect(task.priority).toEqual("high");
});

it("gets all tasks", async () => {
  expect.assertions(1);
  const tasks = await db.Task.findAll();
  console.log(tasks);
  expect(tasks).toEqual({
    id: 1,
    description: "#1 A task to do",
    status: "complete",
    priority: "high",
  });
});

it("deletes a task", async () => {
  expect.assertions(1);
  await db.Task.destroy({
    where: {
      id: 1,
    },
  });
  const task = await db.Task.findByPK(1);
  expect(task).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});
