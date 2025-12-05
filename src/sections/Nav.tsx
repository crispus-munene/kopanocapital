import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kopano from "../assets/logos/kopano_logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    "text-[#2b5182] hover:text-[#46b4f2] active:text-gray-400 px-3 py-2 rounded-md";

  const navLinks = [
    { href: "#services", children: "Services" },
    { href: "#whyus", children: "Why Us" },
    { href: "#partnering", children: "Partnering With Us" },
  ];

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
            <div className="flex items-center">
              <ButtonLink href="#">
                <img src={Kopano} alt="Kopano Capital logo" />
              </ButtonLink>
              <div className="ml-4 hidden sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    className={textLinkClasses}
                  >
                    {link.children}
                  </ButtonLink>
                ))}
              </div>
            </div>

            <ButtonLink
              href="#"
              target="_blank"
              className="hidden sm:flex rounded-xl bg-[#2b5182] px-5 py-3 text-white hover:bg-[#46b4f2] active:bg-gray-600"
            >
              Apply Now
            </ButtonLink>

            <Disclosure.Button className="sm:hidden rounded-md p-2 text-[#2b5182] hover:bg-[#46b4f2] hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel
              className={`sm:hidden flex flex-col items-center gap-3 px-4 pb-4 overflow-hidden transition-all duration-700 ease-in-out ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {navLinks.map((link, index) => (
                <Disclosure.Button
                  as="a"
                  href={link.href}
                  key={index}
                  className={textLinkClasses}
                >
                  {link.children}
                </Disclosure.Button>
              ))}
              <ButtonLink
                href="#"
                target="_blank"
                className="rounded-xl bg-[#2b5182] px-5 py-3 text-white hover:bg-[#46b4f2] active:bg-gray-600 mt-2"
              >
                Apply Now
              </ButtonLink>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
}

export default Nav;
