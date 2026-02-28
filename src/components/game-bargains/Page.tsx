import { productSettingsList } from "../../types/products";
import Layout from "../shared/Layout";

const GameBargainsPage = () => {
  const productSettings = productSettingsList["game-bargains"];

  return <Layout productSettings={productSettings}>Hello World!</Layout>;
};

export default GameBargainsPage;
