import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import beanSprout from "src/assets/foodImages/bean_sprouts.jpg";
import bellFlower from "src/assets/foodImages/bellflower_root_salad.jpg";
import brownRice from "src/assets/foodImages/brown_rice.jpg";
import friedTofu from "src/assets/foodImages/fried_tofu.jpg";
import jangjorim from "src/assets/foodImages/jangjorim.jpg";
import seaweedSoup from "src/assets/foodImages/seaweed_soup.jpg";
import soybeanPasteSoup from "src/assets/foodImages/soybean_paste_soup.jpg";
import stirFriedAnchovies from "src/assets/foodImages/stir_fried_anchovies.jpg";
import whiteKimchi from "src/assets/foodImages/white_kimchi.jpg";
import whiteRice from "src/assets/foodImages/white_rice.jpg";
import { Menu, None } from "src/assets/Icons";
import Flex from "src/atoms/containers/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import {
  DishType,
  mainDishAtom,
  selectedDishAtom,
  selectedMenuAtom,
  sideDish1Atom,
  sideDish2Atom,
  sideDish3Atom,
  sideDish4Atom,
  soupAtom,
} from "src/globalState";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import styled from "styled-components";

import { Dish } from "./tray";

interface Menu {
  name: string;
  src: string;
}

export enum MenuNames {
  BeanSprouts = "Bean Sprouts",
  BellflowerRootSalad = "Bellflower Root Salad",
  BrownRice = "Brown Rice",
  FriedTofu = "Fried Tofu",
  Jangjorim = "Jangjorim",
  SeaweedSoup = "Seaweed Soup",
  SoybeanPasteSoup = "Soybean Paste Soup",
  StirFriedAnchovies = "Stir Fried Anchovies",
  WhiteKimchi = "White Kimchi",
  WhiteRice = "White Rice",
}

const Menus = [
  {
    name: MenuNames.BeanSprouts,
    src: beanSprout,
  },
  {
    name: MenuNames.BellflowerRootSalad,
    src: bellFlower,
  },
  {
    name: MenuNames.BrownRice,
    src: brownRice,
  },
  {
    name: MenuNames.FriedTofu,
    src: friedTofu,
  },
  {
    name: MenuNames.Jangjorim,
    src: jangjorim,
  },
  {
    name: MenuNames.SeaweedSoup,
    src: seaweedSoup,
  },
  {
    name: MenuNames.SoybeanPasteSoup,
    src: soybeanPasteSoup,
  },
  {
    name: MenuNames.StirFriedAnchovies,
    src: stirFriedAnchovies,
  },
  {
    name: MenuNames.WhiteKimchi,
    src: whiteKimchi,
  },
  {
    name: MenuNames.WhiteRice,
    src: whiteRice,
  },
];

const FoodImage = styled.img<{ isSelected: boolean }>`
  width: 120px;
  height: 145px;
  border-radius: 30px;
  object-fit: cover;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
`;

interface FoodSelectorProps {
  menu: Menu;
  isSelected: boolean;
  onClick?: () => void;
}

const SaveBtn = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${colorSet.primary};
  margin-right: auto;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :active {
    transform: scale(0.85);
  }
`;

const FoodSelector = ({ menu, isSelected, onClick }: FoodSelectorProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      gap="5px"
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      <FoodImage src={menu.src} isSelected={isSelected} />
      <Text
        font={Font.Medium}
        size="14px"
        color={isSelected ? colorSet.gray50 : colorSet.gray30}
        textAlign="center"
        style={{
          maxWidth: "120px",
        }}
      >
        {menu.name}
      </Text>
    </Flex>
  );
};

const NutritionInput = styled.input`
  background-color: ${colorSet.gray10};
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 0;
  height: 40px;
  font-size: 20px;
  text-align: right;

  font-family: NotoSansKR-Medium, sans-serif;
`;

const MenuComposer = () => {
  const [sideDish1, setSideDish1] = useAtom(sideDish1Atom);
  const [sideDish2, setSideDish2] = useAtom(sideDish2Atom);
  const [sideDish3, setSideDish3] = useAtom(sideDish3Atom);
  const [sideDish4, setSideDish4] = useAtom(sideDish4Atom);

  const [mainDish, setMainDish] = useAtom(mainDishAtom);
  const [soup, setSoup] = useAtom(soupAtom);

  const [selectedMenu, setSelectedMenu] = useAtom(selectedMenuAtom); // 어떤 메뉴를 선택했는지

  const [selectedDish, setSelectedDish] = useAtom(selectedDishAtom); // 어떤 접시를 선택했는지

  const [sodium, setSodium] = useState<number>(0);
  const [sugar, setSugar] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const handleSodiumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSodium(value ? parseInt(value, 10) : 0);
  };

  const handleSugarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSugar(value ? parseInt(value, 10) : 0);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value ? parseInt(value, 10) : 0);
  };

  useEffect(() => {
    switch (selectedDish) {
      case DishType.Main:
        console.log("this is main dish");
        setSodium(mainDish?.sodium ?? 0);
        setSugar(mainDish?.sugar ?? 0);
        setAmount(mainDish?.amount ?? 0);
        break;
      case DishType.Side1:
        console.log("this is main side1");
        setSodium(sideDish1?.sodium ?? 0);
        setSugar(sideDish1?.sugar ?? 0);
        setAmount(sideDish1?.amount ?? 0);
        break;
      case DishType.Side2:
        console.log("this is main side2");
        setSodium(sideDish2?.sodium ?? 0);
        setSugar(sideDish2?.sugar ?? 0);
        setAmount(sideDish2?.amount ?? 0);
        break;
      case DishType.Side3:
        console.log("this is main side3");
        setSodium(sideDish3?.sodium ?? 0);
        setSugar(sideDish3?.sugar ?? 0);
        setAmount(sideDish3?.amount ?? 0);
        break;
      case DishType.Side4:
        console.log("this is main side4");
        setSodium(sideDish4?.sodium ?? 0);
        setSugar(sideDish4?.sugar ?? 0);
        setAmount(sideDish4?.amount ?? 0);
        break;
      case DishType.Soup:
        console.log("this is main soup");
        setSodium(soup?.sodium ?? 0);
        setSugar(soup?.sugar ?? 0);
        setAmount(soup?.amount ?? 0);
        break;
    }
  }, [
    selectedDish,
    mainDish,
    sideDish1,
    sideDish2,
    sideDish3,
    sideDish4,
    soup,
  ]);

  const selectMenuHandler = (menu: Menu) => {
    const newMenu: Dish = {
      name: menu.name,
      imageUrl: menu.src,
      sodium: 0,
      sugar: 0,
      amount: 0,
    };

    switch (selectedDish) {
      case DishType.Main:
        setMainDish(newMenu);
        break;
      case DishType.Side1:
        setSideDish1(newMenu);
        break;
      case DishType.Side2:
        setSideDish2(newMenu);
        break;
      case DishType.Side3:
        setSideDish3(newMenu);
        break;
      case DishType.Side4:
        setSideDish4(newMenu);
        break;
      case DishType.Soup:
        setSoup(newMenu);
        break;
    }
  };

  const removeMenuHandler = () => {
    switch (selectedDish) {
      case DishType.Main:
        setMainDish(null);
        break;
      case DishType.Side1:
        setSideDish1(null);
        break;
      case DishType.Side2:
        setSideDish2(null);
        break;
      case DishType.Side3:
        setSideDish3(null);
        break;
      case DishType.Side4:
        setSideDish4(null);
        break;
      case DishType.Soup:
        setSoup(null);
        break;
    }
  };

  const setNutrition = () => {
    try {
      if (
        typeof sodium !== "number" ||
        typeof sugar !== "number" ||
        typeof amount !== "number"
      ) {
        alert("Please fill in the blanks");
        throw new Error("Please fill in the blanks");
      }

      switch (selectedDish) {
        case DishType.Main:
          setMainDish({ ...mainDish!, sodium, sugar, amount });
          break;
        case DishType.Side1:
          setSideDish1({ ...sideDish1!, sodium, sugar, amount });
          break;
        case DishType.Side2:
          setSideDish2({ ...sideDish2!, sodium, sugar, amount });
          break;
        case DishType.Side3:
          setSideDish3({ ...sideDish3!, sodium, sugar, amount });
          break;
        case DishType.Side4:
          setSideDish4({ ...sideDish4!, sodium, sugar, amount });
          break;
        case DishType.Soup:
          setSoup({ ...soup!, sodium, sugar, amount });
          break;
      }

      console.log(
        `* main dish info\n` +
          `dish name: ${mainDish?.name}\n` +
          `sodium: ${mainDish?.sodium}\n` +
          `sugar: ${mainDish?.sugar}\n` +
          `amount: ${mainDish?.amount}\n`,
      );
      console.log(
        `* side dish 1 info\n` +
          `dish name: ${sideDish1?.name}\n` +
          `sodium: ${sideDish1?.sodium}\n` +
          `sugar: ${sideDish1?.sugar}\n` +
          `amount: ${sideDish1?.amount}\n`,
      );
      console.log(
        `* side dish 2 info\n` +
          `dish name: ${sideDish2?.name}\n` +
          `sodium: ${sideDish2?.sodium}\n` +
          `sugar: ${sideDish2?.sugar}\n` +
          `amount: ${sideDish2?.amount}\n`,
      );
      console.log(
        `* side dish 3 info\n` +
          `dish name: ${sideDish3?.name}\n` +
          `sodium: ${sideDish3?.sodium}\n` +
          `sugar: ${sideDish3?.sugar}\n` +
          `amount: ${sideDish3?.amount}\n`,
      );
      console.log(
        `* side dish 4 info\n` +
          `dish name: ${sideDish4?.name}\n` +
          `sodium: ${sideDish4?.sodium}\n` +
          `sugar: ${sideDish4?.sugar}\n` +
          `amount: ${sideDish4?.amount}\n`,
      );
      console.log(
        `* soup info\n` +
          `dish name: ${soup?.name}\n` +
          `sodium: ${soup?.sodium}\n` +
          `sugar: ${soup?.sugar}\n` +
          `amount: ${soup?.amount}\n`,
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      style={{
        backgroundColor: colorSet.gray05,
        overflowY: "scroll",
      }}
      width="500px"
      height="100vh"
    >
      <Flex
        width="500px"
        style={{
          boxSizing: "border-box",
          paddingTop: "60px",
          paddingLeft: "30px",
        }}
        flexDirection="column"
      >
        <Text font={Font.Medium} size="20px">
          Select Menu : {selectedMenu}
        </Text>

        <Spacer height="20px" />
        <Flex wrap="wrap" gap="20px">
          {Menus.map((menu) => (
            <FoodSelector
              key={menu.name}
              menu={menu}
              isSelected={selectedMenu === menu.name}
              onClick={() => {
                setSelectedMenu(menu.name);
                selectMenuHandler(menu);
              }}
            />
          ))}

          <Flex
            flexDirection="column"
            justifyContent="center"
            gap="5px"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedMenu(null);
              removeMenuHandler();
            }}
          >
            <Flex
              style={{
                width: "120px",
                height: "145px",
                borderRadius: "30px",
                backgroundColor: selectedMenu
                  ? colorSet.gray20
                  : colorSet.gray30,
              }}
              justifyContent="center"
              alignItems="center"
            >
              <None size="25px" />
            </Flex>
            <Text
              font={Font.Medium}
              size="14px"
              color={selectedMenu ? colorSet.gray30 : colorSet.gray50}
              textAlign="center"
              style={{
                maxWidth: "120px",
              }}
            >
              unselect
            </Text>
          </Flex>
        </Flex>

        <Spacer height="50px" />

        <Text font={Font.Medium} size="20px">
          Nutrient of Caution
        </Text>
        <Spacer height="30px" />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          style={{
            backgroundColor: colorSet.gray10,
            boxSizing: "border-box",
            padding: "0px 20px",
          }}
        >
          <Text font={Font.Regular} size="18px">
            Sodium
          </Text>
          <>
            <NutritionInput
              type="number"
              onChange={handleSodiumChange}
              value={sodium}
            />
            <Text font={Font.Regular} size="18px">
              mg
            </Text>
          </>
        </Flex>

        <Spacer height="20px" />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          style={{
            backgroundColor: colorSet.gray10,
            boxSizing: "border-box",
            padding: "0px 20px",
          }}
        >
          <Text font={Font.Regular} size="18px">
            Sugars
          </Text>
          <>
            <NutritionInput
              type="number"
              onChange={handleSugarChange}
              value={sugar}
            />
            <Text font={Font.Regular} size="18px">
              mg
            </Text>
          </>
        </Flex>

        <Spacer height="20px" />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          style={{
            backgroundColor: colorSet.gray10,
            boxSizing: "border-box",
            padding: "0px 20px",
          }}
        >
          <Text font={Font.Regular} size="18px">
            Amount
          </Text>
          <>
            <NutritionInput
              type="number"
              onChange={handleAmountChange}
              value={amount}
            />
            <Text font={Font.Regular} size="18px">
              mg
            </Text>
          </>
        </Flex>

        <Spacer height="30px" />

        <SaveBtn
          onClick={() => {
            setNutrition();
          }}
        >
          <Text font={Font.Regular} color={colorSet.white}>
            Save
          </Text>
        </SaveBtn>
        <Spacer height="500px" />
      </Flex>
    </Flex>
  );
};

export default MenuComposer;
