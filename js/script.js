/*mobile menu*/
const burgerBtn = document.querySelector(".burger__btn");
const mobliMenu = document.querySelector(".mobile-menu__list");

burgerBtn.addEventListener("click", function () {
  mobliMenu.classList.toggle("mobile-menu__list-show");
});
/*end mobile menu*/

/*menu btn*/
function addColorMenuItem(menu, item) {
  const menuBtn = document.querySelectorAll(item);

  document.querySelector(menu).addEventListener("click", function (event) {
    const target = event.target;

    menuBtn.forEach((item) => {
      item.classList.remove("menu__item-active");
      target.classList.add("menu__item-active");
    });
  });
}

addColorMenuItem(".menu", ".menu__item");
addColorMenuItem(".mobile-menu__list", ".menu__item");
/*end menu btn*/

/*status*/
const userStatus = document.querySelectorAll(".customers__table-status");

userStatus.forEach((item) => {
  if (item.dataset.status === "inactive") {
    item.classList.add("inactive");
    item.innerText = "Inactive";
  }
  console.log(item);
});
