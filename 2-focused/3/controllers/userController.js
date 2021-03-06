import { videos } from "../db";

export const profile = (req, res) =>
  res.render("userDetail", { pageTitle: "Profile" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.send("Change Password");

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do : Register User
    // To Do : Log user In
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  res.render("login", { pageTitle: "Login" });
};

export const logout = (req, res) => {
  // To Do : Process Log Outs
  res.redirect(routes.home);
};
