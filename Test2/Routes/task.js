const express = require("express");

const router = express.Router();

const Task = require("../models/Task");
const BulkTask = require("../models/BulkAddTask");

let number = 1;

router.post("/v1/tasks", async (req, res) => {
  try {
    const posts = await Task.create({
      title: req.body.title,
      id: number,
      is_completed: req.body.is_completed,
    });
    number++;
    res.status(201).json({
      id: posts.id,
    });
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: e.message,
    });
  }
});

// router.post("/v1/tasks", async (req, res) => {
//     try {
//         console.log(req.body.tasks.length);
//         let task = []
//         const posts = await Task.create(req.body.task);
//         for(let i =0; i<req.body.tasks.length; i++){
//             number++;
//             task.push({id : number})
//         }
//         res.status(201).json({
//             task
//         });

//     } catch (e) {
//       res.status(401).json({
//         status: "failed",
//         message: e.message,
//       });
//     }
//   });

router.get("/v1/tasks", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({
      data: task,
    });
  } catch (e) {
    res.status(401).json({
      message: e.message,
    });
  }
});

router.get("/v1/tasks/:id", async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.find({ id: req.params.id });
    if (task.length > 0) {
      res.status(200).json({
        status: "Sucess",
        data: task,
      });
    } else {
      res.status(404).json({
        error: "There is no task at that id",
      });
    }
  } catch (e) {
    res.status(401).json({
      message: e.message,
    });
  }
});

router.put("/v1/tasks/:id", async (req, res) => {
  try {
    // console.log(req.params);
    let users = await Task.find({ id: req.params.id });
    console.log(users);
    if (users.length > 0) {
      Task.updateOne({ id: req.params.id }, req.body);
      res.status(204).json({
        message: "user is updated",
      });
    } else {
      res.status(404).json({
        error: "There is no task at that id",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.delete("/v1/tasks/:id", async (req, res) => {
  try {
    console.log(req.params);
    const users = await Task.deleteOne({ id: req.params.id });
    res.status(204).json({
      message: `id is deleted`,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

// router.delete("/v1/tasks/", async (req, res) => {
//     try {
//       // Code to update the document
//       console.log(req.body.tasks.id);
//       const users = await Task.deleteMany({id : req.body.tasks.id});
//       res.status(204).json({
//         message: `id is deleted`,
//       });
//     } catch (e) {
//       res.status(500).json({
//         status: "failed",
//         message: e.message,
//       });
//     }
//   });

module.exports = router;
