import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  registrationNumber:z.string().min(5,"Must enter a registration your registration number")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
