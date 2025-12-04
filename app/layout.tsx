import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tara-Fusion | Next-Generation Automotive TARA',
  description: 'Streamline your TARA process with an intelligent, automotive-focused platform designed for precision, compliance, and collaborative security.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-gray-200 font-sans antialiased relative overflow-x-hidden custom-scrollbar">
        {/* Background Gradient Animation */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 animate-aurora bg-[radial-gradient(125%_125%_at_50%_10%,#0a0a1a_40%,#63e_100%)] bg-[size:200%_200%]"></div>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
