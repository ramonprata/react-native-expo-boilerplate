import { ImageHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <>
      <ImageHeader
        resizeMode="cover"
        source={require("../../../assets/images/cosmos.jpg")}
      />
    </>
  );
};

export default Header;
