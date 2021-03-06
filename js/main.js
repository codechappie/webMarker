document.addEventListener('DOMContentLoaded', function () {

  const btnSearchResponsive = document.getElementById("btn-search-responsive");
  const btnCloseSerchRes = document.getElementById("btn-close-search-responsive");
  const btn_love = document.querySelectorAll(".love img");
  const searchInput = document.getElementById("searchInput");
  const formSearch = document.getElementById("formSearch");
  const addButton = document.getElementById("btn-add-new");
  const closeModal = document.getElementById("closeModal");
  const cancelModal = document.getElementById("cancelModal");
  const modal = document.getElementById("modal-add-new-marker");

  addButton.addEventListener("click", () => {
    modal.style.visibility = "visible";
  });
  closeModal.addEventListener("click", () => {
    modal.style.visibility = "hidden";
  });
  cancelModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.visibility = "hidden";
  });
  closeModal.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
  });
  btnSearchResponsive.addEventListener("click", (e) => {
    e.preventDefault();
    formSearch.classList.add("show-searcher");
    searchInput.focus();
  });

  btnCloseSerchRes.addEventListener("click", (e) => {
    e.preventDefault();
    formSearch.classList.remove("show-searcher");
    searchInput.value = '';
  });

  for (const love of btn_love) {
    love.addEventListener("click", (e) => {
      e.preventDefault();
      let active = love.getAttribute("src").split("/").reverse();
      active = active[0];
      if (active == 'love.png') {
        love.setAttribute("src", "images/love-active.png");
        love.setAttribute("alt", "true");
        love.classList.add("loveTransition");
      } else {
        love.setAttribute("alt", "false");
        love.setAttribute("src", "images/love.png");
        love.classList.remove("loveTransition");
      }

    });
  }
});
