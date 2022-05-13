const smartGarbage = function (trash, bins) {
  bins = {
    waste: 0,
    recycling: 0,
    compost: 0
  }

  if(trash === 'waste'){
    bins.waste = +1;
  } else if(trash === 'recycling'){
    bins.recycling = +1;
  } else if(trash === 'compost'){
    bins.compost = +1;
  }
  console.log(bins);
};

smartGarbage('waste');