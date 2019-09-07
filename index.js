const { sortBy, map } = require('lodash')

module.exports.getPrincipleWeights = cells => {
  let weights = {}
  for(const cell of cells)
    for(let i = 0; i !== cell.principles.length; ++i) {
      const ip = cell.principles[i]
      const weight = [2, 1.5, 1, 0.75][i]
      if(ip in weights)
        weights[ip] += weight
      else weights[ip] = weight
    }
  return sortBy(
    map(weights, (weight, ip) => ({
      principle: parseInt(ip, 10),
      weight
    })),
    ({ weight }) => -weight
  )
}
