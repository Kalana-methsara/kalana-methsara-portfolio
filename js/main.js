var typed = new Typed(".text", {
    strings: ["Web Designer", "Full-Stack Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

 document.addEventListener('DOMContentLoaded', function() {
            const radialBars = document.querySelectorAll('.radial-bars .bar');
            
            radialBars.forEach(bar => {
                const percentage = parseInt(bar.querySelector('.percentage').textContent);
                // Calculate stroke-dashoffset: 502 is the circumference (2 * π * 80)
                // We subtract the percentage of the circumference to show progress
                const targetValue = 502 - (502 * percentage / 100);
                bar.querySelector('.path').style.setProperty('--target', targetValue);
            });
        });

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    backToTop.classList.add("scrolled");
  } else {
    backToTop.classList.remove("scrolled");
  }
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});