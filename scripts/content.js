chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.theme === "dark") {
    document.body.classList.add("my-dark");
    // const allElements = document.querySelectorAll("*");

    // allElements.forEach((el) => {
    //   const hasLogoClass = Array.from(el.classList || []).some((c) =>
    //     c.toLowerCase().includes("logo")
    //   );

    //   if (hasLogoClass) {
    //     el.style.filter = "invert(1) brightness(0.9)";
    //   }
    // });
  } else {
    document.body.classList.remove("my-dark");
  }
});
