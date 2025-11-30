const movies = [
  {
    title: "Lionel Messi.",
    rating: 7.9,
    year: 1987,
    years: "38 years",
    category: "Fudbal",
    img: "https://avatars.mds.yandex.net/i?id=8a421d83850ee002695b9008d1d17df0_l-4715150-images-thumbs&n=13",
  },
  {
    title: "Cristiano Ronaldo. ",
    rating: 8.0,
    year: 1985,
    years: "40 years",
    category: "Fudbal",
    img: "https://cdn.nur.kz/images/1120x630/6a4408ec0e1ea24e.jpeg?version=1",
  },
  {
    title: "Neymar Jr.",
    rating: 7.8,
    year: 1992,
    years: "33 years",
    category: "Fudbal",
    img: "https://static.liveresult.ru/files/content/19/258467/1__1_.jpg",
  },
  {
    title: "Lamine Yamal.",
    rating: 7.6,
    year: 2007,
    years: "18 years",
    category: "Fudbal",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_664cdc7b879a17390ff41719_664cdc82879a17390ff4189d/scale_1200",
  },

  {
    title: "Kylian Mbappé.",
    rating: 7.7,
    year: 1998,
    years: "26 years",
    category: "Fudbal",
    img: "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202511/692860b4baf8d-kylian-mbappe-273111387-16x9.jpg",
  },

  {
    title: "Karim Benzema.",
    rating: 7.8,
    year: 1987,
    years: "37 years",
    category: "Fudbal",
    img: "https://i.ytimg.com/vi/jtRJ1vWWZH0/maxresdefault.jpg",
  },

  {
    title: "Sergio Ramos.",
    rating: 7.7,
    year: 1986,
    years: "39 years",
    category: "Fudbal",
    img: "https://s.yimg.com/ny/api/res/1.2/K49hYtlwIUJ.nLmfddhXUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/football_espana_articles_993/cfd907733579fe13ac641857fcaf362d",
  },

  {
    title: "Robert Lewandowski.",
    rating: 7.8,
    year: 1988,
    years: "37 years",
    category: "Fudbal",
    img: "https://www.thesun.co.uk/wp-content/uploads/2023/11/robert-lewandowski-fc-barcelona-reacts-859130783.jpg?strip=all&w=960",
  },

  {
    title: "Vinícius Júnior.",
    rating: 7.7,
    year: 2000,
    years: "25 years",
    category: "Fudbal",
    img: "https://avatars.mds.yandex.net/i?id=4b4d193063404e1bfb80630e3c03b638_l-10877381-images-thumbs&n=13",
  },

  {
    title: "Pedri.",
    rating: 7.7,
    year: 2002,
    years: "22 years",
    category: "Fudbal",
    img: "https://ss-i.thgim.com/public/incoming/cwco62/article69160715.ece/alternates/LANDSCAPE_1200/2190981063.jpg",
  },

  {
    title: "Valverde Dipetta.",
    rating: 7.7,
    year: 1998,
    years: "27 years",
    category: "Fudbal",
    img: "https://assets.goal.com/images/v3/blt8ba92f83cdc7813f/crop/MM5DINBZGY5DENJSHE5G433XMU5DIORXGI======/GettyImages-2201037656.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  },

  {
    title: "João Félix.",
    rating: 7.8,
    year: 1999,
    years: "26 years",
    category: "Fudbal",
    img: "https://cdn.images.express.co.uk/img/dynamic/67/1200x712/4718269.jpg",
  },

  {
    title: "Zlatan Ibrahimović.",
    rating: 7.9,
    year: 1981,
    years: "44 years",
    category: "Fudbal",
    img: "https://io.sb.by/storage01/iblock/204/bxa2hg3m2p3t16f7007utimjmq8ego13.jpg",
  },

  {
    title: "Toni Kroos.",
    rating: 7.8,
    year: 1990,
    years: "35 years",
    category: "Fudbal",
    img: "https://photobooth.cdn.sports.ru/preset/wysiwyg/9/c7/5a66e11ad4122a1cb263c8e7165bb.png?f=webp&s=2x&w=730",
  },

  {
    title: "Luka Modrić.",
    rating: 7.8,
    year: 1985,
    years: "40 years",
    category: "Fudbal",
    img: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/85/4f/a2bea05045f63f732175d59b93859c766697b53778b9c224101734.jpg",
  },

  {
    title: "Nuno Mendes.",
    rating: 7.7,
    year: 2002,
    years: "23 years",
    category: "Fudbal",
    img: "https://pictures.ua.tribuna.com/image/53f43d13-d841-4f29-bfe9-a0943c3c8720",
  },

  {
    title: " Marc-André ter Stegen.",
    rating: 7.8,
    year: 1992,
    years: "33 years",
    category: "Fudbal",
    img: "https://avatars.mds.yandex.net/i?id=b45797581ab63f00f462a2d82b562eca_l-5234649-images-thumbs&n=13",
  },

  {
    title: "Wojciech Szczęsny.",
    rating: 7.7,
    year: 1990,
    years: "35 years",
    category: "Fudbal",
    img: "https://avatars.mds.yandex.net/i?id=ca08d936611a58ffe83a12f9aa974acd_l-16855010-images-thumbs&n=13",
  },
  {
    title: "Marc Courtois.",
    rating: 7.7,
    year: 1992,
    years: "33 years",
    category: "Fudbal",
    img: "https://cdn.sovsport.prod.plat.agency/tibo_kurtua_getti_2d3f4df539.webp",
  },

  {
    title: "Gianluigi Donnarumma",
    rating: 7.7,
    year: 1999,
    years: "26 years",
    category: "Fudbal",
    img: "https://avatars.mds.yandex.net/i?id=d226940e2f5cfaaed68e233ccd36b89d_l-10464870-images-thumbs&n=13",
  },
];

const container = document.getElementById("movieContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
function showMovies(list) {
  container.innerHTML = "";
  list.forEach((movie) => {
    container.innerHTML += `
      <div class="movie-card">
          <img src="${movie.img}" alt="">
          <h3>${movie.title}</h3>
          <p class="info">⭐️ ${movie.rating} • ${movie.year} • ${movie.years}</p>
          <p class="info">${movie.category}</p>
            <button   class="more-btn">More info</button>
          
         
          
      </div>
      `;
  });
}

searchBtn.onclick = () => {
  let text = searchInput.value.toLowerCase();
  let category = categorySelect.value;
  let sort = sortSelect.value;

  let list = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(text) &&
      (category === "all" ? true : m.category === category)
  );

  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sort === "years") list.sort((a, b) => b.years - a.years);

  showMovies(list);
};

showMovies(movies);
