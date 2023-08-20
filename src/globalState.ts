import { atom } from "jotai";

export enum DishType {
  Main,
  Soup,
  Side1,
  Side2,
  Side3,
  Side4,
}

import { MenuNames } from "./pages/makepage/MenuComposer";
import { Dish } from "./pages/makepage/tray";

export const selectedMenuAtom = atom<MenuNames | null>(null);
export const selectedDishAtom = atom<DishType>(DishType.Main);

export const mainDishAtom = atom<Dish | null>(null);
export const soupAtom = atom<Dish | null>(null);
export const sideDish1Atom = atom<Dish | null>(null);
export const sideDish2Atom = atom<Dish | null>(null);
export const sideDish3Atom = atom<Dish | null>(null);
export const sideDish4Atom = atom<Dish | null>(null);
