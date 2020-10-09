const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/all", (req, res) => {
  db.Task.findAll()
    .then((tasks) => {
      res.status(200).send(JSON.stringify(tasks));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

router.get("/:id", (req, res) => {
  db.Task.findByPk(req.params.id)
    .then((task) => {
      res.status(200).send(JSON.stringify(task));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

router.put("/", (req, res) => {
  db.Task.create({
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
  })
    .then((task) => {
      res.status(200).send(JSON.stringify(task));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

router.delete("/:id", (req, res) => {
  db.Task.destroy({
    where: {
      id: req.body.params,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

module.exports = router;
