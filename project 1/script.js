const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (val) => {
  cursor.style.left = val.x + "px";
  cursor.style.top = val.y + "px";
  cursorBlur.style.left = val.x - 100 + "px";
  cursorBlur.style.top = val.y - 100 + "px";
});

gsap.to("#nav", {
  duration: 0.5,
  height: "4.5rem",
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10px",
    end: "top -11px",
    scrub: 1.5,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
