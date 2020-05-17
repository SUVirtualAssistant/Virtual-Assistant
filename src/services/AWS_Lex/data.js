// TODO: make this more robust
export const parseData = data => {
  return data && Object.values(data)
                       .map(elem => JSON.parse(elem))
}
