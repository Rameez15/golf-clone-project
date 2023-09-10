const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
const navtrig = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", (val) => {
  cursor.style.left = val.x + 18 + "px";
  cursor.style.top = val.y + "px";
  cursorBlur.style.left = val.x - 100 + "px";
  cursorBlur.style.top = val.y - 100 + "px";
});

navtrig.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    cursor.style.scale = "3";
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  val.addEventListener("mouseleave", () => {
    cursor.style.scale = "1";
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
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

gsap.from("#info img,#info-detail ", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#info",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.5,
  // opacity: 1,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  x: -60,
  y: -60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  x: 60,
  y: 60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#alert h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#alert h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// Thanks itna aage tak aane ke liye lekin pura code utha ke copy paste karne ki jagah khud ek baar banane ka try karna, kuch naya seekhne ko milega!
