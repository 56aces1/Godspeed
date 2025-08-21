export const metadata = {
  title: "GodSpeed Recruiting",
  description: "GodSpeed Recruiting App MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
