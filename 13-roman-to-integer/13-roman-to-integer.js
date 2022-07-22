/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //create a Map to store the symbol values
    const romanSymbolValMap = new Map()
    romanSymbolValMap.set("I", 1)
    romanSymbolValMap.set("V", 5)
    romanSymbolValMap.set("X", 10)
    romanSymbolValMap.set("L", 50)
    romanSymbolValMap.set("C", 100)
    romanSymbolValMap.set("D", 500)
    romanSymbolValMap.set("M", 1000)
    //now traverse the given roman string and sum up the values to get the number
    //when an I is encountered, subtract its value if it is followed by a V or X
    //when an X is encountered, subtract its value if it is followed by a L or C
    //when an C is encountered, subtract its value if it is followed by a D or M
    let intVal = 0
    for (let i=0; i<s.length; i++){
        let currentRomanChar = s[i]
        let currentCharValue = romanSymbolValMap.get(currentRomanChar) || 0
        if (i<(s.length-1)){ /* if current char is not the last char */
            if (currentRomanChar==="I" && (s[i+1]==="V" || s[i+1]==="X")){
                currentCharValue = -currentCharValue
            }
            if (currentRomanChar==="X" && (s[i+1]==="L" || s[i+1]==="C")){
                currentCharValue = -currentCharValue
            }
            if (currentRomanChar==="C" && (s[i+1]==="D" || s[i+1]==="M")){
                currentCharValue = -currentCharValue
            }
        }

        intVal += currentCharValue
    }
    return intVal 
};