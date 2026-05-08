import "./globals.css";

export const metadata = {
  title: "Audi Premium Service | Luxury Car Care",
  description:
    "Premium Audi service and maintenance by certified technicians. Genuine parts, fast turnaround, lifetime warranty support.",
  keywords: ["Audi", "car service", "luxury", "maintenance", "repair"],
  openGraph: {
    title: "Audi Premium Service",
    description: "Precision. Performance. Perfection.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}