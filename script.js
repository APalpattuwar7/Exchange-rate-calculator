function Calculate() {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

Calculate();
