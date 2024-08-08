import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-red-500 to-pink-500 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="font-bold text-xl">Acme Inc</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 easter-egg">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex-grow flex">
        <aside className="w-64 bg-white shadow-md p-4">
          <nav>
            <ul className="space-y-2">
              <li><a href="/" className="block hover:bg-pink-100 p-2 rounded">Home</a></li>
              <li><a href="#" className="block hover:bg-pink-100 p-2 rounded easter-egg">Dashboard</a></li>
              <li><a href="#" className="block hover:bg-pink-100 p-2 rounded">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
      <footer className="bg-white shadow-md p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
