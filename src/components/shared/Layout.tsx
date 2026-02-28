import type { ReactNode } from "react";
import type { ProductSettings } from "../../types/products";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/global.css";

type LayoutProps = {
  children: ReactNode;
  productSettings: ProductSettings;
};

const Layout = ({ children, productSettings }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header productSettings={productSettings} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
