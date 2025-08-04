// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";

// export const signup = async (req, res) => {
//     try {
//         const { mobile, password } = req.body;
//         const existingUser = await User.findOne({ mobile });

//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         const hashedPassword = await bcryptjs.hash(password, 10);
//         req.body.password = hashedPassword;

//         const newUser = new User(req.body);
//         await newUser.save();

//         res.status(201).json({ message: "User registered successfully", user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error" });
//     }
// };


// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";

// // Signup function
// export const signup = async (req, res) => {
//   try {
//     const { mobile, password } = req.body;
//     const existingUser = await User.findOne({ mobile });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcryptjs.hash(password, 10);
//     req.body.password = hashedPassword;

//     const newUser = new User(req.body);
//     await newUser.save();

//     res
//       .status(201)
//       .json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Login function
// export const login = async (req, res) => {
//   try {
//     const { email, mobile, password } = req.body;
//     let user;

//     // Try to find user by email if provided, otherwise by mobile
//     if (email) {
//       user = await User.findOne({ email });
//     } else if (mobile) {
//       user = await User.findOne({ mobile });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Please provide email or mobile for login." });
//     }

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Compare provided password with stored hashed password
//     const isValid = await bcryptjs.compare(password, user.password);
//     if (!isValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";

// // Signup function
// export const signup = async (req, res) => {
//   try {
//     const { mobile, password } = req.body;
//     // Check if user exists by mobile number
//     const existingUser = await User.findOne({ mobile });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the provided password
//     const hashedPassword = await bcryptjs.hash(password, 10);
//     req.body.password = hashedPassword;

//     // Create new user document with the request body
//     const newUser = new User(req.body);
//     await newUser.save();

//     res
//       .status(201)
//       .json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Login function
// export const login = async (req, res) => {
//   try {
//     const { email, mobile, password } = req.body;
//     let user;

//     // Try to find the user by email if provided; otherwise, by mobile
//     if (email) {
//       user = await User.findOne({ email });
//     } else if (mobile) {
//       user = await User.findOne({ mobile });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Please provide email or mobile for login." });
//     }

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Compare the provided password with the stored hashed password
//     const isValid = await bcryptjs.compare(password, user.password);
//     if (!isValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Signup function
// export const signup = async (req, res) => {
//   try {
//     const { mobile, password } = req.body;
//     // Check if user exists by mobile number
//     const existingUser = await User.findOne({ mobile });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the provided password
//     const hashedPassword = await bcryptjs.hash(password, 10);
//     req.body.password = hashedPassword;

//     // Create new user document with the request body
//     const newUser = new User(req.body);
//     await newUser.save();

//     res
//       .status(201)
//       .json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Login function with JWT token generation
// export const login = async (req, res) => {
//   try {
//     const { email, mobile, password } = req.body;
//     let user;

//     // Try to find the user by email if provided; otherwise, by mobile
//     if (email) {
//       user = await User.findOne({ email });
//     } else if (mobile) {
//       user = await User.findOne({ mobile });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Please provide email or mobile for login." });
//     }

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Compare the provided password with the stored hashed password
//     const isValid = await bcryptjs.compare(password, user.password);
//     if (!isValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token (ensure JWT_SECRET is defined in your .env file)
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ message: "Login successful", token, user });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup function
export const signup = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    // Check if user exists by mobile number
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the provided password
    const hashedPassword = await bcryptjs.hash(password, 10);
    req.body.password = hashedPassword;

    // Create new user document with the request body
    const newUser = new User(req.body);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login function with JWT token generation
export const login = async (req, res) => {
  try {
    const { email, mobile, password } = req.body;
    let user;

    // Try to find the user by email if provided; otherwise, by mobile
    if (email) {
      user = await User.findOne({ email });
    } else if (mobile) {
      user = await User.findOne({ mobile });
    } else {
      return res
        .status(400)
        .json({ message: "Please provide email or mobile for login." });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isValid = await bcryptjs.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token (ensure JWT_SECRET is defined in your .env file)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
