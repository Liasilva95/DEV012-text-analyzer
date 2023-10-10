export default {
  splitText: (text) => {
    const words = text.split(" ");
    return words;
  },

  trimText: (text) => {
    return text.trim();
  },

  getWordCount: (text) => {
    const wordsArray = text.split(/\s+/);

    // Inicializa una variable para contar las palabras.
    let wordCount = 0;

    // Recorre el array de palabras y cuenta las palabras no vacías.
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].trim() !== "") {
        wordCount++;
      }
    }
    return Number(wordCount);
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    // eslint-disable-next-line
    const characterNoSpaces = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    return Number(characterNoSpaces.length);
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    const numberMatches = text.match(/\b\d+\.\d+\b|\b\d+\b/g);
    if (numberMatches) {
      return numberMatches.length;
    } else {
      return 0;
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    const numberMatches = text.match(/\b\d+\.\d+\b|\b\d+\b/g);
    let suma = 0;
    if (numberMatches) {
      numberMatches.forEach((match) => {
        const numero = parseFloat(match);
        if (!isNaN(numero)) {
          suma += numero;
        }
      });
    }
    return suma;
    //TODO: esta función debe retornar la suma de numeros que se encuentran en el parámetro `text` de tipo `string'
  },

  getAverageWordLength: (text) => {
    if (!text.includes(" ")) {
      return text.length;
    }
    const { length: textLen } = text;
    const { length: numWords } = text.split(" ");
    const average = (textLen - numWords + 1) / numWords;
    return Number(average.toFixed(2));
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string'
};
