import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="font-bold text-xl">Acme Inc</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-pink-500">Home</a></li>
              <li><a href="/about" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-white shadow-md">
          <nav className="p-4">
            <ul className="space-y-2">
              <li><a href="/" className="block hover:bg-pink-100 p-2 rounded">Home</a></li>
              <li><a href="/about" className="block hover:bg-pink-100 p-2 rounded">About</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 p-8">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <footer className="bg-red-600 text-white shadow-md p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
