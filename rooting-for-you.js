const judgeVegetable = function(vegetables, metric){
  
  let bestVegetable = {
    submitter: '',
    metricValue: 0
  };

  for(let vegetable of vegetables){
    if(vegetable[metric] > bestVegetable.metricValue){
      bestVegetable.submitter = vegetable.submitter;
      bestVegetable.metricValue = vegetable[metric];
    }
  }
  return bestVegetable.submitter;
};