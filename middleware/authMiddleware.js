const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(403).send({ message: "Unauthorized!" });
    const decodedToken = jwt.verify(token, JWT_SECRET);
    console.log(decodedToken);
    next();
  } catch (error) {
    return res
      .status(500)
      .send({ message: "error in authenticating token", error: error.message });
  }
};

export default isAuthenticated;
