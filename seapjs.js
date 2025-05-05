// Funzione che simula il recupero di un token, restituendo una Promise che risolve con un ID del token
function getTokenId() {
  return new Promise((resolve, reject) => {
    // Simulazione di un'operazione asincrona (ad esempio, chiamata a un'API)
    setTimeout(() => {
      const tokenId = Math.floor(Math.random() * Date.now()); // Il "Token" che verrebbe recuperato
      resolve(tokenId);
    }, 1000); // Simuliamo un ritardo di 1 secondo
  });
}

// Funzione che imposta l'ID dell'utente, restituendo una Promise che risolve con true/false
function setUserId(userId) {
  return new Promise((resolve, reject) => {
    // Simulazione di un'operazione asincrona (ad esempio, salvataggio in un database)
    setTimeout(() => {
      if (userId) {
        resolve(true); // Se l'ID è valido, restituiamo true
      } else {
        reject(false); // Se non c'è un ID, restituiamo false
      }
    }, 500); // Simuliamo un ritardo di 0.5 secondi
  });
}

// Funzione che imposta se l'utente è autenticato, restituendo una Promise che risolve con true/false
function setUserAuthenticated(authenticated) {
  return new Promise((resolve, reject) => {
    // Simulazione di un'operazione asincrona (ad esempio, impostazione dello stato dell'autenticazione)
    setTimeout(() => {
      resolve(authenticated); // Risolve con true o false in base allo stato dell'autenticazione
    }, 500); // Simuliamo un ritardo di 0.5 secondi
  });
}
