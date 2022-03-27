const filter = (id, setCart) => {
  const getCart = JSON.parse(localStorage.getItem("cart"));

  let idArray = getCart.map((x) => {
    return x.id;
  });
  let idIndex = idArray.indexOf(id);
  let check = idArray.includes(id);

  if (check) {
    getCart[idIndex].qty += 1;
    setCart(getCart);
    return localStorage.setItem("cart", JSON.stringify(getCart));
  } else {
    getCart.push({ id, qty: 1 });
    setCart(getCart);
    return localStorage.setItem("cart", JSON.stringify(getCart));
  }
};

export const AddToCart = (id, setCart) => {
  const getCart = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.id === null) {
    return (document.querySelector(".popup-container").style.display = "block");
  } else {
    if (getCart === null)
      return localStorage.setItem("cart", JSON.stringify([{ id, qty: 1 }]));
    document.querySelector(".popup-container").style.display = "block";
    filter(id, setCart);
  }
};
