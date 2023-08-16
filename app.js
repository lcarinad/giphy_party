async function getGif(search) {
  try {
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=NXddwAskkCcwbHSVXaI1QJdl0WTbkIER&tag=${search}&rating=pg-13`;
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=NXddwAskkCcwbHSVXaI1QJdl0WTbkIER&tag=${search}&rating=pg-13`
    );
    const img = document.querySelector("img");
    const imgUrl = res.data.data.url;
    img.src = imgUrl;
    // const imgDiv = document.querySelector("#meme-container");
    // let memeImg = document.createElement("img");
    // memeImg.src = res.data.data.looping.mp4;
    // imgDiv.append(memeImg);
    console.log(res.data.data.url);
  } catch (error) {
    console.log(error);
    alert("Try another search term!");
  }
}

const input = document.querySelector("#searchBar");
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  getGif(input.value);
});
