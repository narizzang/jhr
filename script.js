const projectsData = {
    "hye": ["hye-1.jpg", "hye-2.jpg", "hye-3.jpg", "hye-4.jpg", "hye-5.jpg", "hye-6.jpg", "hye-7.jpg"],
    "eternal": ["eternal.jpg"],
    "moonlight": ["moonlight-1.jpg", "moonlight-2.jpg", "moonlight-3.jpg"],
    "postcard": ["postcard-1.jpg", "postcard-2.jpg"],
    "visang": ["visang-1.jpg", "visang-2.jpg", "visang-3.jpg"],
    "yjg": ["yjg-1.jpg", "yjg-2.jpg", "yjg-3.jpg", "yjg-4.jpg", "yjg-5.jpg", "yjg-6.jpg", "yjg-7.jpg", "yjg-8.jpg"]
};


document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content .content-inner");

    document.querySelectorAll(".work").forEach(work => {
      work.addEventListener("click", function () {
        const projectId = this.id;
        if (projectsData[projectId]) {
            content.innerHTML = "";

            projectsData[projectId].forEach(imgSrc => {
                const project = document.createElement("div");
                project.classList.add("project");
                const img = document.createElement("img");
                img.src = `project/${projectId}/${imgSrc}`;
                project.appendChild(img);
                content.appendChild(project);
            });

            content.style.display = "block";
            content.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
});