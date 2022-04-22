const MAX_TRIES = 6;
const previousGuesses: string[] = [];

let globalResults = '';

function askWord() {
  const response = prompt('The Pokemon is ...');
  if (response === null) {
    return { error: ' You must provide a possible pokemon name' };
  } else if (response.length !== pokemon.length) {
    return {
      error: `The pokemon name must be ${pokemon.length} characters long`,
    };
  } else if (previousGuesses.includes(response)) {
    return { error: 'You already guessed this pokemon name' };
  } else if (!/^[a-zA-Z]+$/.test(response)) {
    return { error: 'The pokemon name must contain only letters' };
  }

  return { response };
}

// this pokemon should be fetched randomly from the API
const pokemon = 'pikachu';
let guess = '';
let tries = 0;

while (guess === '') {
  const { error, response } = askWord();
  if (error) {
    console.error(error);
    continue;
  }

  if (response) guess = response;
}

askWord();
