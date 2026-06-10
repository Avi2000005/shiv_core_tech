"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

const HIDE_NAV_ROUTES = ["/privacy-policy", "/terms-of-service"];


export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (HIDE_NAV_ROUTES.includes(pathname)) return null;
  return <Navbar />;
}