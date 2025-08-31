import { Image, View } from "react-native";

const Logo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        overflow: "hidden",
        borderRadius: "50%",
        marginHorizontal: 16,
      }}
    >
      <Image
        source={require("../../../assets/images/cosmos-favicon.png")}
        style={{
          width: 56,
          height: 56,
          objectFit: "contain",
        }}
      />
    </View>
  );
};

export default Logo;
