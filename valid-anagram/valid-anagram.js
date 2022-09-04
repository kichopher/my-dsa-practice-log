/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //////this is to handle empty inputs for s or t 
    //edge-test-2 and edge-test-3
    if (s === undefined || t === undefined) {
        if (s===t){
            return true
        }
        if (s === '' || t===''){
            return true
        }
        return false
    }
    //////this is unnecessary for python

    if (s.length !== t.length) {
        return false
    }
    //An anagram is a word or phrase formed by rearranging the letters of a different word
    //traverse the string s to create a char : count object

    let str1_charCountMap = {}
    let str2_charCountMap = {}

    //since both s and t are of same length, we can traverse both strings together

    for (let i = 0; i < s.length; i++) {
        if (str1_charCountMap.hasOwnProperty(s[i])) {
            str1_charCountMap[s[i]] += 1
        }
        else {
            str1_charCountMap[s[i]] = 1
        }

        if (str2_charCountMap.hasOwnProperty(t[i])) {
            str2_charCountMap[t[i]] += 1
        }
        else {
            str2_charCountMap[t[i]] = 1
        }
    }

    for (const char of Object.keys(str1_charCountMap)) {
        if (!str2_charCountMap.hasOwnProperty(char)) {
            return false
        }
        if (str1_charCountMap[char] !== str2_charCountMap[char]) {
            return false
        }
    }
    return true;
    
};