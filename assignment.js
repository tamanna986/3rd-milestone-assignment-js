//Ans to problem no.1

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return 'Distance can not be a negative value';
    }
    else{
        var meter=kilometer/0.001;  //as 1km=1000 meter.
        return meter;
    }   
}

var result=kilometerToMeter(47);
console.log (result);


//Ans to problem no.2

function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0)
    {
        return "component value can not be a negative number"
    }
    else{
        var totalComponentCost ;
        var totalWatchCost = watch*50;
        var totalPhoneCost = phone*100;
        var totalLaptopCost = laptop*300;
        totalComponentCost = totalWatchCost + totalPhoneCost +  totalLaptopCost;
    }
    return totalComponentCost ;
}

var finalCost = budgetCalculator(3,3,4);
console.log(finalCost);


//Ans to problem no.3

function hotelCost(stayingDay){
    var totalCost = 0;
    if(stayingDay<0)
    {
        return 'stayingDay cannot be a negative value';
    }
    else if(stayingDay <= 10){
        totalCost = stayingDay*100;
        return totalCost;
    }
    else if(stayingDay <= 20){
        var firstTenDayCost = 10*100;
        var remainingDay = stayingDay-10;
        var secondTenDayCost = remainingDay*80;
        totalCost= firstTenDayCost+secondTenDayCost;
        return totalCost;
    }
    else{
        var firstTenDayCost = 10*100;
        var secondTenDayCost = 10*80;
        var remainingDay = stayingDay-20;
        var nextAllDayCost = remainingDay*50;
        totalCost= firstTenDayCost+secondTenDayCost+nextAllDayCost;
        return totalCost;

    }
}

var finalCostResult =hotelCost(-21);
console.log(finalCostResult);


//Ans to problem no.4

  function megaFriend(friendNames){
       if(friendNames.length<1){
           return  'this array is empty';
       }

       else{

        var maxLength = 0;
        var finalMaxLength;
    
        for (var i = 0; i < friendNames.length; i++) {
           if (friendNames[i].length > maxLength) {
           var maxLength = friendNames[i].length;
           finalMaxLength = friendNames[i];
           }
        }
    }
    
    return finalMaxLength;

       }

  var friendNames = ['Tamanna','jahan','mim' ];
  var finalResult = megaFriend(friendNames);
  console.log(finalResult);