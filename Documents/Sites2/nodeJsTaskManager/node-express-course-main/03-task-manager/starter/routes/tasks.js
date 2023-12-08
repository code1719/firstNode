const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
// const {getAllTasks} = require('../')

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.route('/').get(getAllTasks)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
// router.route('/').get((req, res) => {
//     res.send('all items')
// })

module.exports = router;
