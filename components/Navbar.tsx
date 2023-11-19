import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  //z-10 allow us to show on top of the other contents.
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            className="object-contain"
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue xl:bg-white xl:text-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
