  "use strict";

  var beerAndFries = function(n) {
  var funcData = n;

  var allBeers = [];
  var allFries = [];
  var firstSum = 0;
  var secondSum = 0;

  for (var i = 0; i < funcData.length; i++) {
      if(funcData[i].type === "beer") {
         allBeers[i] = funcData[i].score;
      } else if (funcData[i].type === "fries") {
       allFries[i] = funcData[i].score;
    }
  }

  var convArray = function(data) {
  data.filter(function(i){return true;});
  data.sort(function(a, b){return b-a});
  return data;

  }

  convArray(allBeers);
  convArray(allFries);

  if (allBeers.length === 1) {
      firstSum = allBeers[0]*allFries[0];
      return firstSum;
  }  else if (allBeers.length < 1) {
      firstSum = 0;
      return firstSum;
  }  else if (allBeers.length > 1) {
      for (var i=0; i < allBeers.length; i++) {
          secondSum += (allBeers[i] * allFries[i]);
      }
      return secondSum;
  }

  };


  exports.beerAndFries = beerAndFries;
