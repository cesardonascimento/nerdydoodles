import type { ProductSettings } from "../../types/products";

type HeaderProps = {
  productSettings: ProductSettings;
};

const Header = ({ productSettings }: HeaderProps) => {
  const name = productSettings?.name;
  const logoSrc = productSettings?.logo;
  const logoAlt = `${name} logo`;

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-slate-900"
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-8 w-8 rounded-md object-contain"
            />
          ) : null}
          <span>{name}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
