const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { schemaValidationError } = require("../helpers/schemaValidationError.js");
const { User } = require("../schemas/user_schema.js");

const { SECRET_KEY } = process.env;

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw schemaValidationError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const registerUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    status: "Created",
    code: 201,
    message: "user registered",
    data: {
      registerUser: {
        email: registerUser.email,
      },
    },
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw schemaValidationError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw schemaValidationError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  // console.log(token);
  user.token = token;
  await user.save();
  // console.log(token);

  res.status(200).json({
    status: "OK",
    code: 200,
    message: "user logined",
    data: {
      token,
      user: {
        email: user.email,
      },
    },
  });
};

exports.logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({ message: "No Content" });
};

exports.getCurrentUser = async (req, res) => {
  // console.log(req);
  // console.log(res);
  res.status(200).json({
    status: "OK",
    code: 200,
    message: "user logined",
    data: { email: req.user.email },
  });
};
