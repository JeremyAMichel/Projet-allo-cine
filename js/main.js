let movies;

// Récupère le contenu du fichier JSON
fetch("data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    // Ici, tu peux manipuler les données du fichier JSON, comme par exemple les stocker dans une variable
    movies = data;
    // console.log(movies); // Affiche les données dans la console par exemple
    afficherFilms(movies);
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors du chargement du fichier JSON :",
      error
    );
  });

// Sélection de la section dans laquelle seront affiché tous les films
const films = document.querySelector("#films");

function afficherFilms(movies) {
  if (movies) {
    // Pour chaque films...
    movies.forEach((movie) => {
      // Création d'éléments html à ajouter dynamiquement
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const img = document.createElement("img");
      const article = document.createElement("article");
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const h3 = document.createElement("h3");

      // On crée une balise article dans la section prévu pour l'affichage des films
      films.appendChild(article);
      let film = films.lastChild; // On sélectionne la balise article nouvellement crée qui sera en fait l'affichage d'UN film
      film.classList.add("row"); // On ajoute la classe 'row' de bootstrap a la balise article
      film.classList.add("p-4"); // On ajoute la classe 'p-4' de bootstrap a la balise article, celà permet d'ajouter du padding de 1.5rem de partout
      film.classList.add("mb-5"); // On ajoute la classe 'p-4' de bootstrap a la balise article, celà permet d'ajouter du padding de 1.5rem de partout

      // On crée une premiere balise div dans la balise article, qui contiendra l'image (la partie gauche de la wireframe)
      film.appendChild(div1);
      film.firstChild.classList.add("col")
      film.firstChild.classList.add("col-lg-4"); // On ajoute la classe 'col-lg-4' de bootstrap qui va prendre 4 colonne sur 12 de la 'row' crée juste avant lorsque l'écran fera plus de 992px

      // On crée une balise img dans la div
      film.firstChild.appendChild(img);
      let imgFilm = film.firstChild.firstChild; // On sélectionne la balise img qui sera en fait l'affichage de l'image d'un film
      imgFilm.src = movie.Images[0]; // On remplit la partie src de l'image
      imgFilm.alt = "Image " + movie.Title; // On remplit la partie alt de l'image
      imgFilm.classList.add("img-fluid"); // On ajoute la classe 'img-fluid' de bootstrap qui permet de gérer le responsive d'une image

      // On crée une deuxieme balise div dans la balise article, qui contiendra le titre, la description et les notes (la partie droite de la wireframe)
      film.appendChild(div2);
      film.lastChild.classList.add("col")
      film.lastChild.classList.add("col-lg-8"); // On ajoute la classe 'col-lg-8' de bootstrap qui va prendre 8 colonne sur 12 de la 'row' crée juste avant lorsque l'écran fera plus de 992px

      // On ajoute dans cette div...
      // - Le titre du film
      film.lastChild.appendChild(h2);
      film.lastChild.lastChild.innerHTML = movie.Title;

      // - Le résumé du film
      film.lastChild.appendChild(p1);
      film.lastChild.lastChild.innerHTML = movie.Plot

      // - La note imdb qui sera une div dans laquelle à gauche il y aura écrit "notation" et à droite la note imdb
      film.lastChild.appendChild(div3); 
      let notation = film.lastChild.lastChild; // On sélectionne la div qui permettra d'afficher la notation du film
      notation.classList.add('row');
      notation.classList.add('justify-content-between');
      notation.classList.add('flex-row');

      // "Note : "
      notation.appendChild(h3);
      notation.lastChild.classList.add('col');
      notation.lastChild.innerHTML = "Note : ";

      // La note imdb
      notation.appendChild(p2);
      notation.lastChild.classList.add('col');
      notation.lastChild.innerHTML = movie.imdbRating+'/10';
      
    });
  }
}
