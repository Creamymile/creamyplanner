import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.jpeg"
            alt="logo"
            width={40}
            height={20}
            className="rounded-full"
          />
        </Link>
        <p> 2023 Creamy Planner. All Rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
