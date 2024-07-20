const {z}= require("zod");

constbsignupSchema= z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters long"})
    .max(255,{message:"Name must not be more than 255 characters"}),


  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Invalid email address" }),

phoneNumber: z
  .string({ required_error: "Phone number is required" })
  .trim()
  .regex(/^[0-9]{10}$/, { message: "Invalid phone number" }),

  password: z
  .string({ required_error: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});

moodule.exports= signupSchema;