// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere
// in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor
// of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.



// Initialize a set (wordsPresent) and add all the words in the list to the set. This set will be used to check if a word is present in the list.

// Initialize a map (memo) having key type as String and value type as Integer. This map will store the length of the longest possible word sequence where the key is the last word in the sequence.

// Iterate over the list. For each word in the list perform a depth-first search.

// In the DFS, consider the current word (currentWord) as the last word in the word sequence.

// If currentWord was encountered previously we just return its corresponding value in the map memo.

// Initialize maxLength to 1.

// Iterate over the entire length of the currentWord.

// Create all possible words (newWord) by taking out one character at a time.
// If newWord is present in the set perform a DFS with this word and store the intermediate result in a variable currentLength.
// Update the maxLength so that it contains the length of the longest sequence possible where the currentWord is the end word.
// Set the maxLength as the value for currentWord (key) in the map.

// Return maxLength.

// time: O(n * wordLength ^ 2)
// space: O(n) ? n * wordLength?
const longestStrChain = (words) => {
  let longestChain = 0;
  const memo = {};
  const wordsMap = words.reduce((allWords, word) => {
    allWords[word] = true;
    return allWords;
  }, {});

  const dfs = (word, wordsMap, memo) => {
    if (memo[word]) return memo[word];

    let maxLength = 1;

    for (let index = 0; index < word.length; index++) {
      let nextWord = word.slice(0, index) + word.slice(index + 1);

      if (nextWord in wordsMap) {
        maxLength = Math.max(maxLength, 1 + dfs(nextWord, wordsMap, memo));
      }
    }

    memo[word] = maxLength;
    return memo[word];
  };

  for (let word of words) {
    longestChain = Math.max(longestChain, dfs(word, wordsMap, memo));
  }

  return longestChain;
};
