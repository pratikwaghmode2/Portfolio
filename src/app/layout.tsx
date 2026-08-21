import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pratik Waghmode | Data Engineer & Autonomous Systems Student",
  description:
    "Data Engineer & M.Sc. Student in Intelligent and Autonomous Systems. Specializing in cloud data engineering (GCP, BigQuery, Snowflake), machine learning, and autonomous robotics (ROS, LiDAR, Swarm Robotics).",
  keywords: [
    "Data Engineer",
    "Autonomous Systems",
    "Robotics",
    "GCP",
    "BigQuery",
    "Machine Learning",
    "TH Nürnberg",
    "Nuremberg",
    "Pratik Waghmode",
    "ROS",
    "PySpark",
    "Python",
  ],
  authors: [{ name: "Pratik Waghmode" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-[#07090e] min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
