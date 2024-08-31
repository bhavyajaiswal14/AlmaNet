import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

// Ensure this import is correct based on where EdgeStoreProvider is coming from

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AlmaNet",
  description: "Alumni Association platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <ClerkProvider
          appearance={{
            baseTheme: [dark, neobrutalism], // Set the base themes
            variables: { colorPrimary: 'red' }, // Primary color for base themes
            signIn: {
              baseTheme: [shadesOfPurple], // Set the theme for sign-in page
              variables: { colorPrimary: 'blue' }, // Primary color for sign-in theme
            },
          }}
        >
          <EdgeStoreProvider>
            {children}
          </EdgeStoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
