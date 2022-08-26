const input = document.getElementById("colorInput");
const apply = document.getElementById("apply");

apply.addEventListener("click", () => {
  const newBg = {
    inputVal: input.value,
  };
  console.log(newBg.inputVal);
  document.querySelector("body").style.backgroundColor = newBg.inputVal;
});
