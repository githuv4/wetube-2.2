import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("400");
  } else {
    res.redirect(routes.home);
  }
  // To Do : Register User
  // To Do : Log User In
  res.redirect(routes.home);
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do : Process Log out
  res.redirect(routes.home);
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "Profile" });
