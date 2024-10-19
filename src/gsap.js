gsap.from("#navBarTool a", {
  y: "-100px",
  duration: 1,
  delay: 0.5,
});

gsap.from("#Logo", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
});

gsap.from("#slideBTn", {
  y: "50px",
  duration: 1,
  delay: 0.3,
});

gsap.from("#aboutContent #slideCont", {
  y: "100px",
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutContent",
    scroll: "body",
    start: "top 60%",
    end: "top 10%",
  },
});

gsap.from("#nav", {
  scale: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#aboutContent",
    scroll: "body",
    start: "top 60%",
    end: "top 10%",
  },
});

gsap.from("#aboutBtn", {
  y: "50px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#aboutBtn",
    scroll: "body",
    start: "top 60%",
    end: "top 10%",
  },
});

gsap.from(".slider div", {
  scale: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".slider",
    scroll: "body",
    start: "top 50%",
    end: "top 10%",
  },
});

gsap.from("#photo button", {
  y: "50px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#photo",
    scroll: "body",
    start: "top 30%",
    end: "top 0%",
  },
});

gsap.from("#recentBlog", {
  scale: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#recentBlog",
    scroll: "body",
    start: "top 80%",
    end: "top 10%",
  },
});

gsap.from("footer", {
  scale: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer",
    scroll: "body",
    start: "top 80%",
    end: "top 10%",
  },
});
