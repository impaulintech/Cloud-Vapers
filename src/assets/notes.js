let x = (id) => {
  function getData(key) {
    if (localStorage.getItem(key) === null) {
      return localStorage.setItem(key, JSON.stringify([{ id, qty: 1 }]));
    } else {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  function addData(key, value) {
    if (localStorage.getItem(key) === null) {
      return getData(key);
    } else {
      let newLocal = getData(key);
      newLocal.push(value);

      localStorage.setItem(key, JSON.stringify(newLocal));
    }
  }
  addData("cart", { id, qty: 1 });
};
