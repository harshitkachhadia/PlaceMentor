import jwt from "jsonwebtoken";

const auth = async (req,res,next) => {
  
  try {
    const { token } = req.headers 
    // const {token} = req.cookies;
    // console.log(token);
    if (!token) {
      return res.json({
        success: false,
        message: "not authories login again",
      });
    }

    const verifyToken = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = verifyToken.id;
    next();

  } catch (err) {
    return res.json({
      success: false,
      message: "ERROR",
    });
  }
};


export default auth;