import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "BOOM-AUTO",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-background flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
