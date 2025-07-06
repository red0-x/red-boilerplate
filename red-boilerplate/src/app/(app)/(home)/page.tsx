//Global Imports
import Image from "next/image";

//Local Imports
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>

      <div className="flex-1">{/* Main content goes here */}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
