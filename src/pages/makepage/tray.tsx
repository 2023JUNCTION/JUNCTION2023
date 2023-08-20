import { useAtom } from "jotai";
import { useState } from "react";
import Flex from "src/atoms/containers/Flex";
import Spacer from "src/atoms/spacer/Spacer";
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
import styled, { css } from "styled-components";

const DefaultTray = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorSet.gray05};
  cursor: pointer;

  ${({ isSelected }) => {
    return (
      isSelected &&
      css`
        outline: 3px solid ${colorSet.primary};
      `
    );
  }}
`;

const DefaultTrayInner = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    isSelected ? "#DCFFE6" : colorSet.gray10};
`;

const SideTray = styled(DefaultTray)`
  width: 160px;
  height: 190px;
  border-radius: 40px;
`;

const SideTrayInner = styled(DefaultTrayInner)`
  width: 120px;
  height: 145px;
  border-radius: 30px;
`;

const MainTray = styled(DefaultTray)`
  width: 350px;
  height: 300px;
  border-radius: 40px;
`;

const MainTrayInner = styled(DefaultTrayInner)`
  width: 300px;
  height: 250px;
  border-radius: 30px;
`;

const SoupTray = styled(DefaultTray)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const SoupTrayInner = styled(DefaultTrayInner)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export interface Dish {
  name: string;
  imageUrl: string;
  sodium: number;
  sugar: number;
  amount: number;
}

const Tray = () => {
  const [sideDish1, setSideDish1] = useAtom(sideDish1Atom);
  const [sideDish2, setSideDish2] = useAtom(sideDish2Atom);
  const [sideDish3, setSideDish3] = useAtom(sideDish3Atom);
  const [sideDish4, setSideDish4] = useAtom(sideDish4Atom);

  const [mainDish, setMainDish] = useAtom(mainDishAtom);
  const [soup, setSoup] = useAtom(soupAtom);

  const [selectedMenu, setSelectedMenu] = useAtom(selectedMenuAtom); // 어떤 메뉴를 선택했는지

  const [selectedDish, setSelectedDish] = useAtom(selectedDishAtom); // 어떤 접시를 선택했는지

  return (
    <div
      style={{
        borderRadius: "70px",
        padding: "20px",
        backgroundColor: colorSet.gray20,
      }}
    >
      <Flex
        gap="15px"
        justifyContent="center"
        style={{
          margin: "10px",
        }}
      >
        <SideTray
          isSelected={selectedDish === DishType.Side1}
          onClick={() => {
            setSelectedDish(DishType.Side1);
          }}
        >
          <SideTrayInner isSelected={selectedDish === DishType.Side1}>
            {sideDish1 && (
              <img
                src={sideDish1.imageUrl}
                width="120px"
                height="145px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
              ></img>
            )}
          </SideTrayInner>
        </SideTray>

        <SideTray
          isSelected={selectedDish === DishType.Side2}
          onClick={() => {
            setSelectedDish(DishType.Side2);
          }}
        >
          <SideTrayInner isSelected={selectedDish === DishType.Side2}>
            {sideDish2 && (
              <img
                src={sideDish2.imageUrl}
                width="120px"
                height="145px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
              ></img>
            )}
          </SideTrayInner>
        </SideTray>

        <SideTray
          isSelected={selectedDish === DishType.Side3}
          onClick={() => {
            setSelectedDish(DishType.Side3);
          }}
        >
          <SideTrayInner isSelected={selectedDish === DishType.Side3}>
            {sideDish3 && (
              <img
                src={sideDish3.imageUrl}
                width="120px"
                height="145px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
              ></img>
            )}
          </SideTrayInner>
        </SideTray>

        <SideTray
          isSelected={selectedDish === DishType.Side4}
          onClick={() => {
            setSelectedDish(DishType.Side4);
          }}
        >
          <SideTrayInner isSelected={selectedDish === DishType.Side4}>
            {sideDish4 && (
              <img
                src={sideDish4.imageUrl}
                width="120px"
                height="145px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
              ></img>
            )}
          </SideTrayInner>
        </SideTray>
      </Flex>

      <Spacer height="10px" />

      <Flex gap="35px" justifyContent="center">
        <MainTray
          isSelected={selectedDish === DishType.Main}
          onClick={() => {
            setSelectedDish(DishType.Main);
          }}
        >
          <MainTrayInner isSelected={selectedDish === DishType.Main}>
            {mainDish && (
              <img
                src={mainDish.imageUrl}
                width="300px"
                height="250px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
              ></img>
            )}
          </MainTrayInner>
        </MainTray>

        <SoupTray
          isSelected={selectedDish === DishType.Soup}
          onClick={() => {
            setSelectedDish(DishType.Soup);
          }}
        >
          <SoupTrayInner isSelected={selectedDish === DishType.Soup}>
            {soup && (
              <img
                src={soup.imageUrl}
                width="250px"
                height="250px"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              ></img>
            )}
          </SoupTrayInner>
        </SoupTray>
      </Flex>
    </div>
  );
};

export default Tray;
