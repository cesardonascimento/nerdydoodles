import productSettingsList from "../config/products.json";

export type ProductSettings = {
  name: string;
  logo: string;
};

export type ProductKey = keyof typeof productSettingsList;

export type ProductSettingsList = {
  [key in ProductKey]: ProductSettings;
};

export { productSettingsList };