function getPreferTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) return currentTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  document.firstElementChild.setAttribute("data-theme", themeValue);
  if (themeValue === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

setPreference();

window.onload = () => {
  function setThemeFeature() {
    setPreference();
    document.querySelector("#theme-btn")?.addEventListener("click", (event) => {
      const isSupport =
        document.startViewTransition &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!isSupport) {
        toggleDark();
        return;
      }
      toggleViewTransition(event);
    });
  }
  setThemeFeature();
  document.addEventListener("astro:after-swap", setThemeFeature);
};

function toggleDark() {
  themeValue = themeValue === "light" ? "dark" : "light";
  setPreference();
}

function toggleViewTransition(event) {
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${endRadius}px at ${x}px ${y}px)`,
  ];
  const transition = document.startViewTransition(() => {
    toggleDark();
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: themeValue === "light" ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 500,
        easing: "ease-in",
        pseudoElement:
          themeValue === "light"
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
      }
    );
  });
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
