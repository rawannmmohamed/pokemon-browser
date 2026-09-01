export function getPokemonId(url: string) {
  return url.split('/').filter(Boolean).pop() ?? 'unknown'
}

export function formatPokemonId(id: string) {
  return id === 'unknown' ? '---' : `#${id.padStart(3, '0')}`
}

export function getPokemonSpriteUrl(id: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
