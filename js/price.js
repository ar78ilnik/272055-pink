var price_table = document.querySelector(".price__table");
    price_pagination_1 = document.querySelector(".price__pagination i:nth-child(1)");
    price_pagination_2 = document.querySelector(".price__pagination i:nth-child(2)");
    price_pagination_3 = document.querySelector(".price__pagination i:nth-child(3)");
price_pagination_1.addEventListener("click", function(a) {
    a.preventDefault();
    price_pagination_2.classList.remove("price__pagination-active");
    price_pagination_3.classList.remove("price__pagination-active");
    price_pagination_1.classList.add("price__pagination-active");
    price_table.style.marginLeft = "0px";
}),
price_pagination_2.addEventListener("click", function(a) {
    a.preventDefault();
    price_pagination_1.classList.remove("price__pagination-active");
    price_pagination_3.classList.remove("price__pagination-active");
    price_pagination_2.classList.add("price__pagination-active");
    price_table.style.marginLeft = "-100%";
});
price_pagination_3.addEventListener("click", function(a) {
    a.preventDefault();
    price_pagination_1.classList.remove("price__pagination-active");
    price_pagination_2.classList.remove("price__pagination-active");
    price_pagination_3.classList.add("price__pagination-active");
    price_table.style.marginLeft = "-200%";
});