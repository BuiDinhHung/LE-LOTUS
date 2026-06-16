import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imgSrc(filename: string): string {
  return `/images/${filename.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29")}`;
}
