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