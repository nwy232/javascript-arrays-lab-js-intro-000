const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}

const appendKitten(name)
{
  const new=kittens
  new.push(name)
  return new
}
