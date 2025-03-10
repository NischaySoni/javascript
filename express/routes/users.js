const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("users/new")
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
      users.push({ firstName: req.body.firstName })
      res.redirect(`/users/${users.length - 1}`)
    } else {
      console.log("Error")
      res.render("users/new", { firstName: req.body.firstName })
    }
  })

// router
//     .route("/:id")
//     .get("/:id", (req, res) => {
//         res.send(`Get user with ID ${req.params.id}`)
//     })
//     .put("/:id", (req, res) => {
//         res.send(`Update user with ID ${req.params.id}`)
//     })
//     .delete("/:id", (req, res) => {
//         res.send(`Delete user with ID ${req.params.id}`)
//     })
// same as below

router.get("/:id", (req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
})

router.put("/:id", (req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})

const users = [{name:"Kyle"}, {name: "Sally"}]
router.param("id", (req, res, next, id) => {
    console.log(id)
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }

module.exports = router