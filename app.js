const button = document.querySelector(".btn");
const paragraph = document.querySelector(".result");
const url = "https://icanhazdadjoke.com/";

button.addEventListener("click", async () => {
  fetchJoke();
});

const fetchJoke = async () => {
  paragraph.textContent = "Loading..";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Learning app",
      },
    });
    console.log(response);
    if (response.ok == false || response.status === 404) {
      console.log("lol");
      throw new Error("The url was not correct I guess");
    }
    const data = await response.json();
    console.log(data);
    paragraph.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    paragraph.textContent = "There was an error";
  }
};

fetchJoke();
