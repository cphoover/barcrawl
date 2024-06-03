import { v4 as uuidv4 } from "uuid";

export const getUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem("userId", userId);
  }
  return userId;
};

export const getMapMarker = (category) => {
  // switch (category) {
  //   case "Bar":
  //     return "/images/vector-markers/bar.svg";
  //   case "Restaurant":
  //     return "/images/vector-markers/food.svg";
  //   case "Brewery":
  //     return "/images/vector-markers/bar.svg";
  //   case "Marketplace":
  //     return "/images/vector-markers/market.svg";
  //   case "Pizza":
  //     return "/images/vector-markers/pizza.svg";
  //   default:
  //     return "/images/markers/default.svg";
  // }

  switch (category) {
    case "Bar":
      return "images/vector-markers/bar-rounded.svg";
    case "Restaurant":
      return "images/vector-markers/food-rounded.svg";
    case "Brewery":
      return "images/vector-markers/beer-rounded.svg";
    case "Marketplace":
      return "images/vector-markers/market-rounded.svg";
    case "Pizza":
      return "images/vector-markers/pizza-rounded.svg";
    case "Coffee Shop":
      return "images/vector-markers/coffee-rounded.svg";
    default:
      return "images/markers/default.svg";
  }
};

// export const getMapMarker = (category) => {

//   switch (category) {
//     case 'Bar':
//       return '/images/vector-markers/bar.svg';
//     case 'Restaurant':
//       return '/images/vector-markers/food.svg';
//     case 'Brewery':
//       return '/images/vector-markers/bar.svg';
//     case 'Marketplace':
//       return '/images/vector-markers/market.svg';
//     case 'Pizza':
//       return '/images/vector-markers/pizza.svg';
//     default:
//       return '/images/markers/default.svg';
//   }
// }
