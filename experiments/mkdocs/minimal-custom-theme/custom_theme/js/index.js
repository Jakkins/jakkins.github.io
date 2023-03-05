(function () {
  // ready ?
  console.log("ready");
})();

function handleCollapseToggle() {
  
}

window.addEventListener("load", function (event) {
  // after images and css
  // let lis_el = document.querySelectorAll("li.section"); 
  let lis_el = this.document.getElementsByClassName("section"); // NodeList
  for (var i = 0, len = lis_el.length; i < len; i++) {
    lis_el[i].addEventListener(
      "click",
      function (event) {
        console.log(event);
        // lis_el[i].classList.toggle("hidden-phone");
        event.target.classList.toggle("collapsed");
      },
      false
    );
  }
});
