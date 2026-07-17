import { outfit } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <h2
        className={`${outfit.className} whitespace-nowrap text-xl sm:text-2xl lg:text-3xl font-bold text-primary`}
      >
        Chayon <span className="text-secondary">Sarker</span>
      </h2>
 
    </Link>
  );
};

export default Logo;