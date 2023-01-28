import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
      href="/"
    >
      sknil | me
    </Link>
  );
};
export default Logo;
