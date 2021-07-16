const inputElement = document.getElementById("phrase")
const buttonElement = document.getElementById("translate")
const outputElement = document.getElementById("translation")

buttonElement.addEventListener("click", e => {    
    const phrase = inputElement.value
    const yorubaTranslated = translator(phrase)

    outputElement.textContent = yorubaTranslated
})


const englishToYoruba = {
    "house": "ile",
    "goat": "ewure",
    "this": "eleyi",
    "is": "ni",
    "my": "temi",
    "big": "tobi",
    "head": "ori",
    "i": "emi",
    "go": "lo",
    "school": "ilewe",
    "to": "si",
    "a": ""
}

const englishToHausa = {
    "house": "ile",
    "goat": "ewure",
    "this": "ile",
    "is": "ile",
    "my": "ile"
}


function translator(phrase) {
    let sentence = phrase.toLowerCase() // "my head is big"
    const words = sentence.split(" ") // ["my", "head", "is", "big"]

    let translatedPhrase = " "
    for (let i = 0; i < words.length; i++) {
        if (englishToYoruba[words[i]]) {
            translatedPhrase += englishToYoruba[words[i]] + " "
        }
    }

    return translatedPhrase

}

