import z from "zod";

export const WorkshopStudentValidation = z.object({
  name: z.string().trim().optional(),
  email: z.string().email(),
  whatsApp: z.string().min(5).max(20), // you can tweak length if you want stricter phone validation
  gender: z.enum(["male", "female", ""]),
  department: z.enum([
    "Computer Technology",
    "Civil Technology",
    "Electrical Technology",
    "Mechanical Technology",
    "Electronics Technology",
    "Power Technology",
    "Automobile Technology",
    "RAC Technology",
    "Other Technology",
  ]),
  session: z.enum([
    "19-20",
    "20-21",
    "21-22",
    "22-23",
    "23-24",
    "24-25",
    "25-26",
  ]),
  polytechnic: z.string().min(2),
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
