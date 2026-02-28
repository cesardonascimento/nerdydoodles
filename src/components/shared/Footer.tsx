const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 sm:flex-row">
        <span>{`© ${new Date().getFullYear()} Nerdy Doodles. All rights reserved.`}</span>
      </div>
    </footer>
  );
};

export default Footer;
