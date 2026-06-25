import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shiv Core Tech",
    short_name: "ShivCoreTech",
    description: "Premium enterprise IT solutions, custom software engineering, cloud architecture, and cybersecurity services.",
    start_url: "/",
    display: "standalone",
    background_color: "#080d16",
    theme_color: "#080d16",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
