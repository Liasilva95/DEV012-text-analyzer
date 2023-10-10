import analyzer from "./analyzer.js";

// TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
const conteoDePalabras = document.querySelector('[data-testid="word-count"]');
const conteoDeCaracteres = document.querySelector(
  '[data-testid="character-count"]'
);
const conteoDeCaracteresSinEspacios = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const conteoDeNumeros = document.querySelector('[data-testid="number-count"]');
const sumaDeNumeros = document.querySelector('[data-testid="number-sum"]');
const longitudPromedioDePalabras = document.querySelector(
  '[data-testid="word-length-average"]'
);

boton.addEventListener("click", function () {
  if (textarea.value === "") {
    alert("No hay elementos");
  } else {
    textarea.value = ""; // Boton limpiar texto
  }
  conteoDePalabras.textContent = "Word-Count: 0";
  conteoDeCaracteres.textContent = "Character-Count: 0";
  conteoDeCaracteresSinEspacios.textContent = "Character-No-Spaces-Count: 0";
  conteoDeNumeros.textContent = "Number-Count: 0";
  sumaDeNumeros.textContent = "Sum-Number: 0";
  longitudPromedioDePalabras.textContent = "Word-length-average: 0";

  // Actualiza el conteo de numeros a "0" cuando se borra el contenido de textarea
});

textarea.addEventListener("input", function () {
  const text = textarea.value;
  
  // Actualizacion del conteo de palabras en textarea
  const words = analyzer.getWordCount(text);
  conteoDePalabras.textContent = "Word-Count: " + words;

  // Actualizacion del conteo de carateres en textarea
  const characters = analyzer.getCharacterCount(text);
  conteoDeCaracteres.textContent = "Character-Count: " + characters;

  // Actualizacion del conteo de caracteres excluyendo espacios
  const characterNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  conteoDeCaracteresSinEspacios.textContent =
    "Character-No-Spaces-Count: " + characterNoSpaces;

  // Actualizacion del conteo de numeros en textarea
  const numbers = analyzer.getNumberCount(text);
  conteoDeNumeros.textContent = "Number-Count: " + numbers;

  // Actualizacion del suma de numeros en textarea
  const numbersSum = analyzer.getNumberSum(text);
  sumaDeNumeros.textContent = "Number-Sum: " + numbersSum;

  // Actualizacion de la longitud promedio de palabras
  const wordLengthAverage = analyzer.getAverageWordLength(text);
  longitudPromedioDePalabras.textContent =
    "Word-Length-Average: " + wordLengthAverage;
});