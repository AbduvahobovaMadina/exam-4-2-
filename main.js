{
    // 1 masala
    function strLength(string){
        return `${string} - ${string.length} ta harf bor `
    }
    // console.log(strLength("hello"));
    // console.log(strLength("hi"));
    // console.log(strLength("Madina"));
}

{
    // 2 masala
    function greeting(hello){
        return `Hello ${hello.name}`
    }
    // console.log( greeting({name:"John"}));
    // console.log( greeting({name:"Selena"}));
    // console.log( greeting({name:"Madina"}));
}

{
    // 3 masala
         function findQuestionmark(str) {
           return str.indexOf("?")
        }
        
    // console.log(findQuestionmark("sal?om"));
}

{
    // 4 masala
    function repeatNumber(a, n) {
        let number = ""
        for (let i = 0;n > i;i++) {
            number+=a
        }
        return number
    }
    // console.log(repeatNumber(5, 3));    
}



{
    // 5 masala
    function married(a){
        if(a.isMarried === true){
            return `${a.name} oilali`
        }else{
            return `${a.name} yolg'iz`
        }
    }

    // console.log(married ({name:"Anvar", isMarried:true}));
    // console.log(married ({name:"Shavkat", isMarried:false}));
    // console.log(married ({name:"Sarvar", isMarried:true}));
}

{
    // 6 masala


}

{
    // 7 masala 
    function numbers(day) {
    let result = [];
    day.forEach((day) => (day > 0 ? result.push(day) : console.log("")));
    console.log(result);
  }
//   console.log(numbers([3, -5, 4, -5]));
//   console.log(numbers([-3, 5, -4, 5]));
}


{
    // 8 masala
    function dollor(price){
        return `${price * 12700}`
        
    }
    // console.log( dollor(150) );
}

{
    // 9 masala 
    {
      function onlyFalse(only){
        let result = [];
        only.forEach((only) => (only !== true ? result.push(only) : console.log("")));
        console.log(result);
        // return ""
      }
    }
    // console.log(onlyFalse([true, false, false, true]));
    // console.log(onlyFalse([true, false, false, false]));
}

{
    // 10  masala
    function weekDays(i) {
        switch (i) {
            case 1:
                return `Dushanba`
            case 2:
                return `Seshanba`
            case 3:
                return `Chorshanba`
            case 4:
                return `Payshanba`
            case 5:
                return `Juma`
            case 6:
                return `Shanba`
            case 7:
                return `Yakshanba`
            default:
               return `bunday kun mavjud emas`
        }
    }
    // console.log( weekDays(2) );
    // console.log( weekDays(4) );
    // console.log( weekDays(6) );
    // console.log( weekDays(8) );
}