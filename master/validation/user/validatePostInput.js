const _ = require("lodash");
const validator = require("validator");
const { User } = require("../../model/User");
/**
 * validate email:
 * empty email
 * not valid email
 * exist email
 */

const validatePostInput = async data => {
  let errors = {};
  // data.email = data.email ? data.email : "";
  data.email = _.get(data, "email", "");
  data.password = _.get(data, "password", "");
  data.password2 = _.get(data, "password2", "");
  data.DOB = _.get(data, "DOB", "");

  if (validator.isEmpty(data.email)) errors.email = "Email is required";
  else if (!validator.isEmail(data.email)) errors.email = "Email is invalid";
  else {
    const user = await User.findOne({ email: data.email });
    if (user) errors.email = "Email exists";
  }

  if (validator.isEmpty(data.password))
    errors.password = "Password is required";
  else if (!validator.isLength(data.password, { min: 8 })) {
    errors.password = "Password has at least 8 characters";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password is required";
  } else if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Confirm password must match";
  }

  if(validator.isEmpty(data.DOB)){
errors.DOB = "Date is required";
  }

//   if(validator.isEmpty(data.userType)){
//       errors.userType = "User type is required";
//   }else if(!validator.equals(userType,"admin")){
// errors.userType = "user Type is invalid"
//   }

  return {
    isValid: _.isEmpty(errors),
    errors
  };
};

module.exports = { validatePostInput };
