export function menu() { //export라고 쓰면 내보낼 수 있음
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if (headerToggle) {
        headerToggle.addEventListener("click", () => { 
        headerNav.classList.toggle("show"); // headerNav를 클릭하면, show를 보여준다.
        headerToggle.getAttribute("aria-expanded") === "true" // headerToggle의 속성값 aria-expanded 값이 true이면,
        ? headerToggle.setAttribute("aria-expanded", "false") // true인 경우에는 aria-expanded의 값을 false로 
        : headerToggle.setAttribute("aria-expanded", "true"); // false인 경우에는 aria-expanded의 값을 true로 변경해준다.  
        });
    }
}