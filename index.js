// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1%27
const mainDiv = document.querySelector(".main");

const generateDataApi = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1%27"
  );
  //   console.log(await res.json());
  const actualData = await res.json();
  //   console.log(actualData.results);
  newFunc(actualData.results);
};
generateDataApi();

function newFunc(newArr) {
  mainDiv.innerHTML = ``;
  newArr.map((val) => {
    const { title, poster_path, vote_average } = val;
    const url = " https://image.tmdb.org/t/p/w500" + poster_path;
    const container = document.createElement("div");
    container.classList.add("movie");
    container.innerHTML = `
    <div class="box-container">
    <figure>
     <img src=${url} alt="IMAGE">
     <figcaption>
        <p>${title}</p>
        <p>${vote_average}</p>
     </figcaption>
     </figrure>
     </div>
        `;

    mainDiv.appendChild(container);
  });
}
