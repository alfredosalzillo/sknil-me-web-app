import Link from "next/link";

import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <nav className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-5">
          <li>
            <Link
              className="hover:text-emerald-500 transition-colors"
              href="/sign-in"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
