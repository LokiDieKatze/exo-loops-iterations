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