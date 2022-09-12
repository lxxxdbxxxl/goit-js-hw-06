const elementList = document.querySelector("#categories").children;
console.log("Number of categories:", elementList.length);

[...elementList].forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const innerList = element.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", innerList);
});
