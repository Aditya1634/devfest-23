import React from "react";
import insta from "../assets/socials/instagram.svg"
import twitter from "../assets/socials/twitter.png"
import linkedin from "../assets/socials/linkedin.svg"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center w-full px-4 bg-black sm:px-16 py-8 border-t md:justify-between border-border text-neutral-300">
      <div className="flex flex-1 lg:flex-col md:flex-row mb-4 md:mb-0 lg:items-start md:items-center">
        <p className="mr-1">Reach out us at:</p>
        <a className="text-red-500" href="mailto:support@devfestnagpur.in">support@devfestnagpur.in</a>
      </div>
      <div className="flex flex-col md:flex-row items-center flex-1 justify-between">
        <div className="mb-4 md:mb-0">
          <a
            className="transition-colors duration-200 hover:text-white"
            href="https://developers.google.com/community-guidelines/"
          >
            Community Guidelines
          </a>
        </div>
        <div className="mb-4 md:mb-0">Follow us on</div>
        <div className="flex items-center justify-between gap-3">
          <a href="https://twitter.com/gdgnagpur/" className="rounded-full bg-neutral-700" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter"  className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com/gdgnagpur/" className="rounded-full bg-neutral-700" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/company/gdgnagpur/mycompany/" className="rounded-full bg-neutral-700" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
