const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "password",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);

// Defines the columns in the Task table and their types and what they allow
const Task = sequelize.define("Task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = {
  sequelize: sequelize,
  Task: Task,
};
