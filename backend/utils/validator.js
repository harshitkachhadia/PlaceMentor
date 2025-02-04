import validator from "validator";

const userValidator =  (req,res) => {
  try {
    const {name,email,password} = req.body;
    if(!name){
      return res.json({
        success: false,
        message: "Please provide name",
      });
    }
    //validating email formate & storng password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }
  } catch (error) {
    console.log("ERROR : ", error.message);
  }
};


export default userValidator;