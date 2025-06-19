import Footer from '@/components/navabr/Footer';
import Navbar from '@/components/navabr/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className="min-h-screen flex-1">{children}</main>
      <Footer />
    </div>
  );
}
