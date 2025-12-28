const icons = {
  light: `<svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31,50.5c0-1.104-0.896-2-2-2h-9c-1.104,0-2,0.896-2,2s0.896,2,2,2h9C30.104,52.5,31,51.604,31,50.5z"></path> <path d="M81,48.5h-8c-1.104,0-2,0.896-2,2s0.896,2,2,2h8c1.104,0,2-0.896,2-2S82.104,48.5,81,48.5z"></path> <path d="M52.5,81.881v-9c0-1.104-0.896-2-2-2s-2,0.896-2,2v9c0,1.104,0.896,2,2,2S52.5,82.985,52.5,81.881z"></path> <path d="M48.5,19.881v9c0,1.104,0.896,2,2,2s2-0.896,2-2v-9c0-1.104-0.896-2-2-2S48.5,18.776,48.5,19.881z"></path> <path d="M37.092,67.799c0.781-0.781,0.781-2.047,0-2.828s-2.047-0.781-2.828,0l-5.844,5.844c-0.781,0.781-0.781,2.047,0,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586L37.092,67.799z"></path> <path d="M74.752,30.139c0.781-0.781,0.781-2.047,0-2.828s-2.047-0.781-2.828,0l-5.844,5.844c-0.781,0.781-0.781,2.047,0,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586L74.752,30.139z"></path> <path d="M68.26,64.971c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.78-0.781,2.047,0,2.828l5.842,5.844 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.78,0.781-2.047,0-2.828L68.26,64.971z"></path> <path d="M36.443,33.154L30.6,27.311c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l5.844,5.844 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586C37.225,35.201,37.225,33.936,36.443,33.154z"></path> <path d="M51.299,33.184c-9.478,0-17.188,7.711-17.188,17.189s7.711,17.189,17.188,17.189c9.479,0,17.189-7.711,17.189-17.189 S60.777,33.184,51.299,33.184z M51.299,63.562c-7.272,0-13.188-5.917-13.188-13.189s5.916-13.189,13.188-13.189 s13.189,5.917,13.189,13.189S58.571,63.562,51.299,63.562z"></path> </g> </g></svg>
</svg>`,
  dark: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`,
};

const toggleBtn = document.querySelector(".theme");

toggleBtn.innerHTML = icons.dark; 
toggleBtn.classList.add("dark");

toggleBtn.addEventListener("click", async () => {
  const isDark = toggleBtn.classList.contains("dark");

  toggleBtn.innerHTML = isDark ? icons.light : icons.dark;
  toggleBtn.classList.toggle("dark");
  document.body.style.backgroundColor = isDark ? "#363030ff" : "#ffffff";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { theme: isDark ? "dark" : "light" } );
});

