import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// generate token

const createToken = async (id)=>{ // generate token using user id
    return jwt.sign({id},process.env.JWT_SECRET)

}


// route for user login
const loginUser = async (req, res) => {};

// route for user registration

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body; // will get name , email , password from frontend

    // check if userAlready exists
    const exists = await userModel.findOne({ email });
    // if existed send massage and terminate the function
    if (exists) {
      return res.json({ success: false, message: "User already exists" }); // if existed, terminate function
    }

    // validating email format and strong password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a  strong password",
      });
    }
    // Hash passowrd using bcrypt 

    let hashedPassword = await bcrypt.hash(password,10);



    //create new user
    const newUser = new userModel({ name, email, password: hashedPassword });
   const user = await newUser.save();

   // after registeration we will provide a token to a user so by using that user can login
    const token = await createToken(user._id);
    res.json({success:true, token})




  } catch (error) {
 console.log(error)
 res.json({success:false, message: error.message});


  }
};

// route for admin login

const adminLogin = async () => {};

export { loginUser, registerUser, adminLogin };
