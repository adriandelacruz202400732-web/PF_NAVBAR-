const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const mobileLinks = document.querySelectorAll(".nav-links-mobile li a");
const notification = document.getElementById("notification"); 

hamburger.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

let activeLinkMobile = null;

mobileLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        if (activeLinkMobile) {
            activeLinkMobile.classList.remove("active");
        }

        link.classList.add("active");
        activeLinkMobile = link;

        sidebar.classList.remove("open");

      
        notification.textContent = "Loading page...";
        notification.style.display = "block";

       
        setTimeout(() => {
            notification.textContent = "Page Loaded!";
        }, 2000);
    });
});