import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gully Game. All rights reserved.
          </p>
          <div className="mt-2">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white mx-2" 
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white mx-2"
            >
              Terms of Service
            </Link>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
