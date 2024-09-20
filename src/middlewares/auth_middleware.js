const jwt = require("jsonwebtoken");

const { User } = require("../schemas/user_schema");
const { schemaValidationError } = require("../helpers/schemaValidationError.js");

const { SECRET_KEY } = process.env;

exports.authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(schemaValidationError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    // console.log("!!!!!!!!!!!!user", user);
    // console.log(token === String(user.token));
    if (!user || !user.token || token !== String(user.token)) {
      next(schemaValidationError(401, "Not authorized1"));
    }

    req.user = user;

    next();
  } catch {
    next(schemaValidationError(401, "Not authorized2"));
  }
};

// exports = authenticate;
