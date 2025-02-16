document.addEventListener("DOMContentLoaded", function () {
    // 모든 .work 요소에 클릭 이벤트 추가
    document.querySelectorAll(".work").forEach(work => {
      work.addEventListener("click", function () {
        const img = this.querySelector("img");
  
        // 애니메이션 효과 적용하여 width 100%로 확대
        img.style.transition = "width 0.5s ease-in-out";
        img.style.width = "100%";
  
        // 새 section이 이미 추가된 경우 중복 추가 방지
        if (document.getElementById("extra-section")) {
          return;
        }
  
        // 새로운 section 추가
        fetch("detail.html")  // extra.html에서 데이터 가져오기
          .then(response => response.text())
          .then(data => {
            const newSection = document.createElement("section");
            newSection.id = "extra-section";
            newSection.innerHTML = data;
            document.body.appendChild(newSection);  // body 맨 끝에 추가
          })
          .catch(error => console.error("Error loading extra.html:", error));
      });
    });
  });