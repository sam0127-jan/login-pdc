res.status(200).json({

  message: "Login Success",

  role: user.role,

  name: user.name,

  email: user.email,

  branch: user.branch,

  year: user.year,

  college: user.college,

  user,

})