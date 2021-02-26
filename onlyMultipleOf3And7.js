/* En vous inspirant de l'un des exemple du cours d'aujourd'hui sur les boucles,
écrire un programme qui n'affiche que les multiples de 3 et 7 entre 1 et 1000.
L'opérateur % peut vous aider à trouver si un nombre est multiple d'un autre.*/


for (let nb = 0; nb <= 1000; nb++) {
  if (nb % 3 === 0 || nb % 7 === 0) {
    console.log(nb)
  }
}

// OU:

for (nb = 0; nb <= 1000; nb++) {
  if ((!(nb % 3 === 0)) && (!(nb % 7 === 0))) {
    continue
  } else {
    console.log(nb)
  }
}