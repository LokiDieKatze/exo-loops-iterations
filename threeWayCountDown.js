let counter = 101

while (counter >= 1) {
  console.log(counter)
  counter -= 2
}

do {
  console.log(counter)
  counter -= 2
} while (counter >= 1)

for (counter = 101; counter >= 1; counter -= 2) {
  console.log(counter)
}
// on peut mettre for en premier et remplacer 101 et 1 par des const MAX et MIN et -2 par const STEP