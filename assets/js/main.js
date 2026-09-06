document.getElementById("year").textContent = new Date().getFullYear();

if (window.tsParticles) {
  tsParticles.load("particles", {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 70, density: { enable: true, area: 800 } },
      color: { value: ["#0085f6", "#29aae1", "#66b7ff", "#ffffff"] },
      shape: { type: "circle" },
      opacity: { value: { min: 0.1, max: 0.55 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      links: {
        enable: true,
        distance: 140,
        color: "#66b7ff",
        opacity: 0.25,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: false }
      },
      modes: {
        grab: { distance: 170, links: { opacity: 0.45 } }
      }
    }
  });
}
