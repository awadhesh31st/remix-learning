export const getMeta = (path: string[]) => {
  const title =
    path[1] === '' ? 'Home' : path[1].charAt(0).toUpperCase() + path[1].slice(1)
  return [{ title: title }]
}
