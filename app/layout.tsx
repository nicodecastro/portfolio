import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Nico De Castro | Software & Data",
  description:
    "Software engineering, databases, and analytical projects by Nico De Castro. Exploring the systems that make data useful.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <a href="#main-content" className="skip-link">Skip to content</a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
