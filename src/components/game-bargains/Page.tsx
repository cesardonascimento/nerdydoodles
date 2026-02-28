import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { productSettingsList } from "../../types/products";

const GameBargainsPage = () => {
  const productSettings = productSettingsList["game-bargains"];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header productSettings={productSettings} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-10"></div>
      </main>
      <Footer />
    </div>
  );
};

export default GameBargainsPage;
