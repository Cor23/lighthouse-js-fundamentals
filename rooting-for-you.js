const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

let judgeVegetable = function(vegetables, metric){

  let best = vegetables[0];
  let bestMetric = best[metric];
  
  for(i = 0; i < vegetables.length; i++){
    const current = vegetables[i];
    const currentMetric = current[metric];

    if(bestMetric < currentMetric){
      best = current;
      bestMetric = currentMetric;
    }
  }
  console.log(best.submitter);
  return best.submitter;
}

judgeVegetable(vegetables, metric)