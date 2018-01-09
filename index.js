const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  return [kittens, ...name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(name){
  newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten(name){
  newKittens = kittens.slice()
  return newKittens.slice(1)
}
