/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //the length of the original string must be the length of the anagram
    //hashmap to store charCount which stores key:value pairs where key is the char and value is the count of the particular character
    //create one such hashmap using the pattern word
    //one other such hashmap will be made for every substring of length === p.length
    //To find if substring is anagram:
    //   first compare if patternCharCount === substringCharCount
    // if yes, then check if all keys of the patternCharCount map gives the same value from substringCharCount map
    //if the above test also passes, we have an anagram
    //store the index in an array of anagram start indeces
    let anagramStartIndeces = []
    let len_p = p.length
    if (len_p > s.length) return []
    let patternCharCount = new Map()
    let substringCharCount = new Map()
    const increaseCharCount=(charCountMap, char)=>{
        if (charCountMap.has(char)) charCountMap.set(char, charCountMap.get(char)+1)
        else charCountMap.set(char, 1)
    }
    const decreaseCharCount=(charCountMap, char)=>{
        let currentCharCount = charCountMap.get(char)
        if (currentCharCount === 1) charCountMap.delete(char)
        else charCountMap.set(char, currentCharCount-1)
    }
    const isAnagram=(patternCharCount, substringCharCount)=>{
        if (patternCharCount.size !== substringCharCount.size) return false
        for (const char of patternCharCount.keys()){
            if (substringCharCount.has(char)){
                if (patternCharCount.get(char) !== substringCharCount.get(char)){
                    return false
                }
            }else return false
        }
        return true
    }
    //now define patternCharCount
    for (let i=0; i<len_p; i++){
        increaseCharCount(patternCharCount, p[i])
    }
    //now define the first substringCharCount
    for (let i=0; i<len_p; i++){
        increaseCharCount(substringCharCount, s[i])
    }
    if (isAnagram(patternCharCount, substringCharCount)) anagramStartIndeces.push(0)
    for (let i=1; i<=(s.length-len_p); i++){
        //modify substring from previous substring, by removing i-1th char and adding i+len_p-1 th char
        decreaseCharCount(substringCharCount, s[i-1])
        increaseCharCount(substringCharCount, s[i+len_p -1])
        if (isAnagram(patternCharCount, substringCharCount)) anagramStartIndeces.push(i)
    }
    return anagramStartIndeces
    
};