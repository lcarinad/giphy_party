async function getGif(search) {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=NXddwAskkCcwbHSVXaI1QJdl0WTbkIER&tag=${search}&rating=pg`;
    const res = await axios.get(url);
    const imgUrl = res.data.data.images.original.url;
    appendGifs(imgUrl);
  } catch {
    alert("try another search term");
  }
}
async function appendGifs(imgUrl) {
  const $memeContainer = $(".meme-container");
  const $img = $("<img>").attr("src", imgUrl);
  $memeContainer.append($img);
}

const $input = $("#searchBar");

$("#searchForm").on("submit", async function (e) {
  e.preventDefault();
  await getGif($input.val());
});
$("#remove-btn").on("click", function (e) {
  e.preventDefault();
  console.log("delete");
});
