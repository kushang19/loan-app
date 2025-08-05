const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm py-4 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Loan App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
