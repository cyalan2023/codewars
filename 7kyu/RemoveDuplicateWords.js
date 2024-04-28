// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'

function removeDuplicateWords (s) {
    const words = s.split(' ');

    // create a Set to store unique words
    const uniqueWords = new Set();

    // iterate over the words array and add each word to the Set
    for (const word of words) {
        uniqueWords.add(word);
    }

    // convert the Set back to an array and join the words with a space
    return Array.from(uniqueWords).join(' ');
}
