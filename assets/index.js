


$(".show-contact").click(function(){
    const myData = $(".myData");

        if (myData.hasClass("visible")) {
          myData.slideUp();
          myData.removeClass("visible");
        } else {
          myData.slideDown();
          myData.addClass("visible");
        }
      });

const navLink= $(".navbar-link");
const content = $(".content")

navLink.each(function () {
    $(this).click(function () {
        if ($(this).attr("data-nav") === "1") {
            $(".aboutMyContent").addClass("active");
            $(".resumeContent").removeClass("active");
        }if ($(this).attr("data-nav") === "2") {
            $(".resumeContent").addClass("active");
            $(".aboutMyContent").removeClass("active");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Menambahkan class 'fade-in' setelah halaman dimuat
  const fadeInElement = document.querySelector('.fade-in-content');
  fadeInElement.classList.add('fade-in');
});
