const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);

    console.log(activeAnchor);

    if (entry.isIntersecting) {
      activeAnchor.style.color = "#0A8AE6";
    } else {
      activeAnchor.style.color = "black";
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

//Responsive navbar

const responsivepNav = () => {
  const navBtn = document.querySelector(".menu-bar");
  const nav = document.querySelector(".nav-links");

  navBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    navBtn.classList.toggle("menu-cross");
  });
};

responsivepNav();

//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));

    if (targetSection) {
      const headerHeight = 60; // Adjust this value based on your header height
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
//Show more projects

// get button and bind click event handler
document
  .querySelector(".show-more__projects")
  .addEventListener("click", function () {
    // Get rp-detail elements with toggle class
    const rpDetails = document.querySelectorAll(
      ".project-details.project-toggle"
    );

    // Toggle the 'hidden' class for each element
    rpDetails.forEach((ele) => ele.classList.toggle("porject-hidden"));

    // Get the button element
    const showMoreButton = document.querySelector(".show-more__projects");

    // Update the button text based on the current state
    if (showMoreButton.textContent === "See All Projects") {
      showMoreButton.textContent = "See Less Projects";
    } else {
      showMoreButton.textContent = "See All Projects";
      const projectSection = document.getElementById("projects-link");
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  });

//send mail

function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serviceId = "service_vz8lfrk";
  const templateId = "template_8uukx96";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      email: document.getElementById("email").value = "";
      alert("Message send successfully");

      const customAlert = document.getElementById("custom-alert");
      customAlert.classList.add("custom-alert__show");

      setTimeout(function () {
        customAlert.classList.remove("custom-alert__show");
      }, 3000);
    })
    .catch((err) => console.log(err));
}

//Section animation

AOS.init();
