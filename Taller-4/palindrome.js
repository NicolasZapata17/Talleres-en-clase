var palindrome = "sebasabes";

function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");

    return strReversed === str ? "es palindrome" : "no es palindromo";
}
    console.log(palindromeChecker(palindrome)); 
