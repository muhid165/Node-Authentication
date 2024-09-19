const bcrypt = require("bcrypt");

const saltrounds = 10;

export const generateHash = (val) => {
  bcrypt.genSalt(saltrounds, function (err, salt) {
    bcrypt.hash(val, salt, function (err, hash) {
      if (err) throw err;
      console.log(hash);
      return hash;
    });
  });
};

export const compareAndCheckHash = (val, hash) => {
  bcrypt.compare(val, hash, function (err, result) {
    if (err) throw err;
    if (result === true) {
      console.log("matched!");
      return true;
    } else {
      console.log("not matched!");
      return false;
    }
  });
};
