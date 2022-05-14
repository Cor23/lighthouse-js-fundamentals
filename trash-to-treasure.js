const smartGarbage = function (trash, bins = { waste: 0, recycling: 0, compost: 0 }) {

  if(trash === 'waste'){
    bins.waste++;
  } else if(trash === 'recycling'){
    bins.recycling++;
  } else if(trash === 'compost'){
    bins.compost++;
  }
  return bins;
};

smartGarbage('waste');