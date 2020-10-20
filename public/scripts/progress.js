document.addEventListener("readystatechange", event => {
  let i = 0;
  const counter = setInterval(() => {
    document.querySelector("#domLoader > span").innerText = i;
    i += 2;
    if (i > 100) return clearInterval(counter);
  }, 100);
  // alert("hola!")
});
