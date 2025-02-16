const projectsData = {
    "project-1": ["hye-1.jpg", "hye-2.jpg", "hye-3.jpg", "hye-4.jpg", "hye-5.jpg", "hye-6.jpg", "hye-7.jpg"],
    "project-2": ["eternal.jpg"],
    "project-3": ["moonlight-1.jpg", "moonlight-2.jpg", "moonlight-3.jpg"]
};

document.addEventListener("DOMContentLoaded", function () {
    const project1 = this.querySelector("#project1");
    const content = this.querySelector(".content");

    document.querySelectorAll(".work").forEach(work => {
      work.addEventListener("click", function () {
        content.style.display = "block";
      });
    });
  });