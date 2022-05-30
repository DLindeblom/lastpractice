const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  if (trash ==='recycling') {
    bins.recycling += 1;
    } 
  if (trash === 'waste') {
    bins.waste += 1;
    } 
  if (trash === 'compost') {
    bins.compost += 1;
  } 
  return bins
}

console.log(smartGarbage('recycling', {waste: 1, recycling: 1, compost: 1}))
