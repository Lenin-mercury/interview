export const getModifiedArray = (planMax) => {

  const newArr = [];

  const coverages = ['Dental', 'Orthodontic'];
  const networkName = ['Out-Network','In-Network' ]

  for (let j of coverages) {
    for (let k of networkName) {
      let newObj = {};
      for (let i of planMax) {
        if (i['plan_maximum_for_benefit'] == j) {
          if (i['network_name'] === k) {
            newObj[i.time_qualifier] = i.amount;
            if (k !== networkName[0] ? newObj['coverage'] ="" : !newObj['coverage']) newObj['coverage'] = j;
            if (!newObj['network']) newObj['network'] = k;
          }
        }
      }
      if(newObj) newArr.push(newObj)
    }
  }
  console.log(newArr)
  // return planMaximums
  return newArr;
}

