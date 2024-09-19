const jwt = require("jsonwebtoken");

export const login = (req, res) => {
  const { email, password } = req.body;
  // check if user exists in database using email

  // check if password matches

  try {
    const { email, password } = req.body;

    const token = jwt.sign(
      {
        data: { email, password },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).send({
      email: req.body.email,
      message: "Login Successfull!!",
      token,
    });
  } catch (error) {
    console.log("error logging In:- ", error);
  }
};


export const signup = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Create user in database
      const token = jwt.sign(
        {
          data: {
            email,
            // userId: userId
          },
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      // creating the user data in the database
      let data = { email, password };
      await userModel.create(data);
  
      return res.status(200).send({
        email: req.body.email,
        password: req.body.password,
        message: "Signup successfull",
        token,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ message: "Something went wrong!", error: error.message });
    }
  }


