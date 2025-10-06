import z from "zod";
const emptyToUndef = (v) => (v === "" ? undefined : v);
export const WorkshopStudentValidation = z.object({
  name: z.preprocess(
    emptyToUndef,
    z
      .string({ required_error: "Full name is required" })
      .trim()
      .min(2, { message: "Full name must be at least 2 characters" })
  ),
  email: z.preprocess(
    emptyToUndef,
    z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email address" })
  ),
  whatsApp: z.preprocess(
    emptyToUndef,
    z
      .string({ required_error: "WhatsApp number is required" })
      .min(11, { message: "WhatsApp number must be at least 11 digits" })
      .max(20, { message: "WhatsApp number cannot exceed 20 digits" })
  ),
  gender: z.preprocess(
    emptyToUndef,
    z.enum(["male", "female"], {
      required_error: "Please select a gender",
      invalid_type_error: "Please select a valid gender",
    })
  ),
  department: z.preprocess(
    emptyToUndef,
    z.enum(
      [
        "Computer Technology",
        "Civil Technology",
        "Electrical Technology",
        "Mechanical Technology",
        "Electronics Technology",
        "Power Technology",
        "Automobile Technology",
        "RAC Technology",
        "Other Technology",
      ],
      {
        required_error: "Please select a department",
        invalid_type_error: "Please select a valid department",
      }
    )
  ),
  session: z.preprocess(
    emptyToUndef,
    z.enum(
      [
        "17-18",
        "18-19",
        "19-20",
        "20-21",
        "21-22",
        "22-23",
        "23-24",
        "24-25",
        "25-26",
      ],
      {
        required_error: "Please select a session",
        invalid_type_error: "Please select a valid session",
      }
    )
  ),

  polytechnic: z.preprocess(
    emptyToUndef,
    z
      .string({ required_error: "Polytechnic name is required" })
      .min(2, { message: "Polytechnic name must be at least 2 characters" })
  ),
});
export const WorkshopDefaultValues = {
  name: "",
  email: "",
  whatsApp: "",
  gender: "",
  department: "",
  session: "",
  polytechnic: "",
};

export const departmentList = [
  "Computer Technology",
  "Civil Technology",
  "Electrical Technology",
  "Mechanical Technology",
  "Electronics Technology",
  "Power Technology",
  "Automobile Technology",
  "RAC Technology",
  "Other Technology",
];

export const gender = ["male", "female"];

export const sessionList = [
  "17-18",
  "18-19",
  "19-20",
  "20-21",
  "21-22",
  "22-23",
  "23-24",
  "24-25",
  "25-26",
];
