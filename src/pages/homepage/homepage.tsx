import { Search } from "src/assets/Icons";
import Area from "src/atoms/containers/Area";
import Flex from "src/atoms/containers/Flex";
import Text from "src/atoms/text/Text";
import PatientInfoTable from "src/molecule/table/PatientInfoTable";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import styled from "styled-components";

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 200px;
  height: 43px;
  font-family: NotoSansKR-Medium, sans-serif;
  background-color: ${colorSet.gray10};
  border-radius: 0 5px 5px 0;
  padding-right: 30px;
`;

const Homepage = () => {
  return (
    <Area>
      <Flex width="100%" justifyContent="space-between">
        <Text color={colorSet.black} font={Font.Bold} size="32px">
          Group Health Information
        </Text>
        <Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            width="50px"
            height="45px"
            style={{
              backgroundColor: colorSet.gray10,
              borderRadius: "5px 0 0 5px",
            }}
          >
            <Search color={colorSet.gray40} size="24px" />
          </Flex>
          <SearchInput placeholder="search" />
        </Flex>
      </Flex>

      <div
        style={{
          height: "30px",
          flexShrink: 0,
        }}
      ></div>

      <PatientInfoTable />
    </Area>
  );
};

export default Homepage;
