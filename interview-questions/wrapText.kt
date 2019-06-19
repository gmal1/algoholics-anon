// Text Wrap Problem

// Write a program that takes an input string and prints it as multiple lines
// of text such that no line of text is greater than 13 characters
// and words are kept whole.

// For example, the first line of the Gettysburg address:
// Four score and seven years ago our fathers brought forth upon this
// continent a new nation, conceived in liberty and dedicated to
// the proposition that all men are created equal

// Becomes:

// Four score
// and seven
// years ago our
// fathers
// brought
// forth upon
// this
// continent a
// new nation,
// conceived in
// liberty and
// dedicated to
// the
// proposition
// that all men
// are created
// equal

val string: String = "Four score and seven years ago our fathers brought forth upon this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal"

fun textWrap(str: String): String {
    val arrOfStrs: Array<String> = str.split(" ").toTypedArray()
    var currentLength: Int = 0
    var result: String = ""
    
    for (word in arrOfStrs) {
        if (currentLength + word.length + 1 < 13) {
            result = "$result $word"
        } else {
            result = "$result\n$word"
            currentLength = 0
        }
        currentLength += word.length
    }
    return result.subSequence(1, result.length).toString()
    
}

fun main(args: Array<String>){
    print(textWrap(string))
}

