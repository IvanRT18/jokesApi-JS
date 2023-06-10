const button = document.querySelector(".btn");
const paragraph = document.querySelector(".result");
const url = "https://icanhazdadjoke.com/";

button.addEventListener("click", async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Learning app",
      },
    });
    const data = await response.json();
    paragraph.textContent = data.joke;
  } catch (error) {
    console.log(error);
  }
});
