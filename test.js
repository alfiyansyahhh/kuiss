// const kata = ["bat","code","cat","act","cab","crazy","tac","tab"]

// const output = {}

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
// }   

// anagrams('monk','konm')

// var input = "monk, konm, bbc, cbb, dell, ledl";
// var input = "bat, code, cat, act, cab, crazy, tac, tab";
// const input = ["bat","code","cat","act","cab","crazy","tac","tab"]

// var words = input.split(", ");

// for (var i = 0; i < words.length; i++) {

//   var word = words[i];
//   var alphabetical = word.split("").sort().join("");

//   for (var j = 0; j < words.length; j++) {

//     if (i === j) {
//       continue;
//     }

//     var other = words[j];
//     if (alphabetical === other.split("").sort().join("")) {
//       console.log(word + " - " + other );
//     }
//   }
// }


const input = ["bat","code","cat","act","cab","crazy","tac","tab"]

const anagram = (data) => {
    const data2= data.map((e,i) => {
        var word =e[i];
       return word
    })
    var alphabetical = data.sort();
    console.log(alphabetical)
  
    console.log(data2)
}

anagram(input)

