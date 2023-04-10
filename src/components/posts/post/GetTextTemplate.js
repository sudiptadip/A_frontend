export const GetTextTemplate = (template, setBackground) => {
  switch (template) {
    case "one":
      return setBackground({
        tc: "#fbfd69",
        cc: "white",
        url: "https://static.vecteezy.com/system/resources/thumbnails/006/852/804/small/abstract-blue-background-simple-design-for-your-website-free-vector.jpg",
      });

    case "two":
      return setBackground({
        tc: "#2D2727",
        cc: "#00235B",
        url: "https://img.freepik.com/free-vector/geometric-background_91008-301.jpg",
      });

    case "three":
      return setBackground({
        tc: "black",
        cc: "#C9EEFF",
        url: "https://static.vecteezy.com/system/resources/previews/006/040/755/original/post-social-media-background-simple-purple-colour-free-vector.jpg",
      });

    case "four":
      return setBackground({
        tc: "#060047",
        cc: "#D14D72",
        url: "https://png.pngtree.com/thumb_back/fh260/background/20211112/pngtree-aesthetic-background-instagram-feed-post-image_915816.png",
      });

    default:
      break;
  }
};
