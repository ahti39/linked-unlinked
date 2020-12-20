const unCommonArray = (first, second) => {
  const res = [];
  for(let i = 0; i < first.length; i++){
     if(second.indexOf(first[i].id) === -1){
        res.push(first[i]);
     }
  };
  for(let j = 0; j < second.length; j++){
     if(first.indexOf(second[j].id) === -1){
        res.push(second[j]);
     };
  };
  return res;
};
