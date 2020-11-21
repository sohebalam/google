import Router from "express"
import passport from "passport"

const authRoutes = Router()

// auth login
authRoutes.get("/login", (req, res) => {
  res.render("login", { user: req.user })
})

// auth logout
authRoutes.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

// auth with google+
authRoutes.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
)

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
authRoutes.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    // res.send(req.user);
    res.redirect("/profile")
  }
)

export default authRoutes
