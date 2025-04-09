// Representa la miniatura d'un còmic
class Thumbnail {
  constructor(path, extension) {
    this.path = path; // Ruta de la imatge
    this.extension = extension; // Extensió de la imatge
    }
    getThumbnailURL() {
      // Retorna la URL completa de la miniatura
      return `${this.path}.${this.extension}`;
    }
  }
  
  // Representa un còmic de Marvel
  class Comic {
    constructor(id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
      this.id = id; // Identificador
      this.title = title; // Títol
      this.issueNumber = issueNumber; // Número de l'edició
      this.description = description; // Descripció
      this.pageCount = pageCount; // Nombre de pàgines
      this.thumbnail = thumbnail; // Imatge (objecte de la classe Thumbnail)
      this.price = price; // Preu
      this.creators = creators; // Informació dels creadors
      this.characters = characters; // Llista de personatges
    }
  
    getThumbnailURL() {
      // Retorna la URL de la miniatura del còmic
      return this.thumbnail.getThumbnailURL();
    }
  }
  
  // Representa un heroi de Marvel
  class Hero {
    constructor(id, name, description, modified, thumbnail, resourceURI, comics) {
      this.id = id; // Identificador
      this.name = name; // Nom
      this.description = description; // Descripció
      this.modified = modified; //Data de la darrera modificació de dades
      this.thumbnail = thumbnail; // Imatge de l'heroi de la classe miniatura
      this.resourceURI = resourceURI; // l'URI de l'heroi
      this.comics = comics; // Array que conté la llista de còmics en que l'heroi apareix
    }
  
    getThumbnailURL() {
      // Retorna la URL de la miniatura de l'heroi
      return this.thumbnail.getThumbnailURL();
    }
  }
  
  //Representa la llista de còmics favorits
  class Favorites {
    constructor() {
      this.favoriteComics = []; // Array per guardar els còmics favorits
    }
  
    addFavorite(comic) {
      this.favoriteComics.push(comic); // Afegeix un còmic a la llista de favorits
    }
  
    removeFavorite(comicId) {
      //Elimina un còmic de la llista de favorits pel seu ID
      this.favoriteComics = this.favoriteComics.filter(comic => comic.id !== comicId);
    }
  
    showFavorites() {
      // Mostra tots els còmics a la llista de favorits
      if (this.favoriteComics.length === 0) {
        console.log("No hi ha còmics a la llista de favorits");
      } else {
        this.favoriteComics.forEach(comic => console.log(comic));
      }
    }
  }

  // Afegeix múltiples còmics a un array utilitzant l'operador rest
  function addMultipleFavorites(targetArray, ...comicsToAdd) {
    targetArray.push(...comicsToAdd);
  }

  // Realitza una còpia d'un array utilitzant l'operador spread
  function copyFavorites(sourceArray) {
    return [...sourceArray];
  }

  //Funció recursiva per a cercar un còmic per ID
  function findComicByID(id, index = 0, favorites) {
    if (index >= favorites.length) {
      return null; //còmic no trobat
    }
    if (favorites[index].id === id) {
      return favorites[index];
    }
    return findComicByID(id, index + 1, favorites);
  }

  // Calcula el preu mitjà dels còmics favorits
  function calculateAveragePrice(comics) {
    if (comics.length === 0) {
      return 0;
    }
    const sum = comics.reduce((total, comic) => total + comic.price, 0);
    return sum / comics.length;
  }

  function getAffordableComicTitles(comics, maxPrice) {
    //filtra els còmics pel preu màxim i despres extreu els títols.
    const affordableTitles = comics
    .filter(comic => comic.price <= maxPrice)
    .map(comic => comic.title);
    return affordableTitles;
  }
  
  // Crea dades d'exemple de Comic
  const sampleComic1 = new Comic(123, "Amazing Fantasy #15", 15, "The first appearance of Spider-Man!", 32, new Thumbnail("http://example.com/path/to/image1", "jpg"), 3.99, ["Stan Lee", "Steve Ditko"], ["Spider-Man", "Aunt May"]);
  const sampleComic2 = new Comic(456, "The Incredible Hulk #1", 1, "The first appearance of the Hulk!", 36, new Thumbnail("http://example.com/path/to/image2", "jpg"), 2.99, ["Stan Lee", "Jack Kirby"], ["Hulk", "Rick Jones"]);
  const sampleComic3 = new Comic(789, "Fantastic Four #1", 1, "The first appearance of the Fantastic Four!", 40, new Thumbnail("http://example.com/path/to/image3", "jpg"), 4.50, ["Stan Lee", "Jack Kirby"], ["Fantastic Four"]);
  
  // Crea una instància de la classe Favorites
  const myFavorites = new Favorites();
  
  // Afegeix còmics a la llista de favorits
  myFavorites.addFavorite(sampleComic1);
  addMultipleFavorites(myFavorites.favoriteComics, sampleComic2, sampleComic3);
  
  // Mostra els còmics favorits
  console.log("Llista de còmics favorits:");
  myFavorites.showFavorites();
  
  // Elimina un còmic de la llista de favorits
  myFavorites.removeFavorite(456);
  
  // Mostra la llista actualitzada
  console.log("Llista de còmics favorits després d'eliminar-ne un:");
  myFavorites.showFavorites();
  
  // Copia la llista de favorits
  const copiedFavorites = copyFavorites(myFavorites.favoriteComics);
  console.log("Còpia de la llista de favorits:", copiedFavorites);

  console.log("Comic Title 1:", sampleComic1.title);
  console.log("Thumbnail URL 1:", sampleComic1.getThumbnailURL());
  
  console.log("Comic Title 2:", sampleComic2.title);
  console.log("Thumbnail URL 2:", sampleComic2.getThumbnailURL());
  
  console.log("Comic Title 3:", sampleComic3.title);
  console.log("Thumbnail URL 3:", sampleComic3.getThumbnailURL());
  
  // Crea dades d'exemple de Hero
  const sampleHero = new Hero(1009610, "Spider-Man", "Bitten by a radioactive spider...", "2014-09-18T16:45:56-0400", new Thumbnail("http://example.com/path/to/image", "jpg"), "http://gateway.marvel.com/v1/public/characters/1009610", ["Amazing Fantasy #15"]);
  
  console.log("Hero Name:", sampleHero.name);
  console.log("Thumbnail URL:", sampleHero.getThumbnailURL());

  // Provant la funció calculateAveragePrice
  const foundComic = findComicByID(789, 0, myFavorites.favoriteComics);
  console.log("Còmic trobat per ID 789:", foundComic);

  //Provant la funció calculateAveragePrice
  const averagePrice = calculateAveragePrice(myFavorites.favoriteComics);
  console.log("Preu mitjà dels còmics:", averagePrice);

  //Provant la funció getAffordableComicTitles
  const affordableComics = getAffordableComicTitles(myFavorites.favoriteComics, 4.00);
  console.log("Còmics per sota de 4.00€:", affordableComics);