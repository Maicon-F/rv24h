// src/constants/appConstants.ts

// Example of a string constant
export const API_BASE_URL = "";
export const PHONE_WHATSAPP = "5522997022160"; 
export const PHONE_NUMBER = "(22) 99702-2160"; 



export const MAX_RETRY_ATTEMPTS = 3;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}



