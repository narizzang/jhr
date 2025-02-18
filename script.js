const projectsData = {
    "hye": ["hye-1.jpg", "hye-2.jpg", "hye-3.jpg", "hye-4.jpg", "hye-5.jpg", "hye-6.jpg", "hye-7.jpg"],
    "eternal": ["eternal.jpg"],
    "moonlight": ["moonlight-1.jpg", "moonlight-2.jpg", "moonlight-3.jpg"],
    "postcard": ["postcard-1.jpg", "postcard-2.jpg"],
    "visang": ["visang-1.jpg", "visang-2.jpg", "visang-3.jpg"],
    "yjg": ["yjg-1.jpg", "yjg-2.jpg", "yjg-3.jpg", "yjg-4.jpg", "yjg-5.jpg", "yjg-6.jpg", "yjg-7.jpg", "yjg-8.jpg"]
};
const detailData = {
    "hye": ["프로젝트1 제목", "프로젝트1 내용을 입력하세요. 프로젝트1 내용을 입력하세요. 프로젝트 1내용을 입력하세요."],
    "eternal": [],
    "moonlight": [],
    "postcard": [],
    "visang": [],
    "yjg": []
};


document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    const header = document.querySelector("header");
    const content = document.querySelector(".content");
    const contentTitle = document.querySelector(".content .content-inner .content-title");
    const contentDetail = document.querySelector(".content .content-inner .content-detail");

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    document.querySelectorAll(".work").forEach(work => {
      work.addEventListener("click", function () {
        const projectId = this.id;
        if (projectsData[projectId]) {
            contentTitle.innerHTML = "";
            contentDetail.innerHTML = "";
            
            var tmp = 0;
            detailData[projectId].forEach(des => {
                const projectDescription = document.createElement("div");
                projectDescription.classList.add("project-description")
                const projectTitle = document.createElement("div");
                projectTitle.classList.add("project");
                if (tmp == 0) {
                    projectTitle.classList.add("left");
                } else {
                    projectTitle.classList.add("right");
                }
                projectTitle.innerHTML = `${des}`;
                projectDescription.appendChild(projectTitle);
                contentTitle.appendChild(projectDescription);
                tmp++;
            });

            projectsData[projectId].forEach(imgSrc => {
                const project = document.createElement("div");
                project.classList.add("project");
                const img = document.createElement("img");
                img.src = `project/${projectId}/${imgSrc}`;
                project.appendChild(img);
                contentDetail.appendChild(project);
            });

            content.style.display = "block";
            setTimeout(() => {
                content.scrollIntoView({ behavior: "smooth", block: "start"});
            }, 100);
        }
      });
    });
});