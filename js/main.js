document.addEventListener('DOMContentLoaded', function() {

  const btnSearchResponsive = document.getElementById("btn-search-responsive");
  const btnCloseSerchRes = document.getElementById("btn-close-search-responsive");
  const searchInput = document.getElementById("searchInput");
  
  const formSearch = document.getElementById("formSearch");
  
  btnSearchResponsive.addEventListener("click", (e)=>{
    e.preventDefault();
    formSearch.classList.add("show-searcher");
    searchInput.focus();
  });
  btnCloseSerchRes.addEventListener("click", (e)=>{
    e.preventDefault();
    formSearch.classList.remove("show-searcher");
    searchInput.value='';
  });
  
});
