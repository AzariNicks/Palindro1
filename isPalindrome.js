// Write your code below
/* In this code challenge you will determine
 if a provided word is a palindrome or not.
  A palindrome is a word that is spelt the same 
  backwards as it is forwards. 
  */
const word1 = 'Oreo'
const word2 = 'heeeeeeh'
const word3 = 'reviver'
const word4 = 'HobooooboH'
const NumChecker = (PlacementWord) => {
    let OriginalArray = PlacementWord
     newArray = []
    for(x = PlacementWord.length - 1; x > -1;x--){
    
    newArray.push(PlacementWord[x])

    
}
        
       if(OriginalArray == newArray.join('')){console.log(`This Word Is The Same Backwards`)}
       else{console.log(`They Arent The Same Bruh`)}
}
NumChecker(word4)
NumChecker(word2)
NumChecker(word3)
NumChecker(word1)



