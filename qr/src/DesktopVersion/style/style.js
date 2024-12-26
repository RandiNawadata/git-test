const containerJSON = {
  containerBoxStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "hsl(212, 45%, 89%)", // Optional background color
    padding: 0,
  },
  imageContainerBoxStyle: {
    width: 320,
    height: 499,
    backgroundColor: "hsl(0, 0%, 100%)", // Optional background color
    textAlign: "center",
    borderRadius: "16px",
  },
};
const imageJSON = {
  imageDiv: {
    width: "288px",
    height: "288px",
    borderRadius: "8px",
    padding: "16px 16px 16px 16px",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backgroundColor: "blue",
  },
};
const textJSON = {
  textDiv: {
    width: "288px",
    height: "131px",
    padding: "0px 16px 40px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  textStyles: {
    padding: "0px 16px 0px 16px",
  },
  text1Style: {
    fontFamily: "Outfit, sans-serif",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "120%",
    color: "hsl(218, 44%, 22%)",
  },
  text2Style: {
    fontFamily: "Outfit, sans-serif",
    fontWeight: "regular",
    fontSize: "15px",
    lineHeight: "140%",
    color: "hsl(216, 15%, 48%)",
  },
};

export { containerJSON, textJSON, imageJSON };
