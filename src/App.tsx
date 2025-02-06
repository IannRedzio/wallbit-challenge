import { Footer } from "./components/Footer/Footer";
import { Nabvar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0E0E3B]">
      <header className="bg-[#0E0E3B] shadow-md">
        <Nabvar />
      </header>

      <main className="flex-1 container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center text-white">
          Wallbit Challenge
        </h1>
        <p className="text-lg text-white mt-4 text-center">
          searchbar
        </p>
      </main>

      <Footer />
    </div>
  );
};
