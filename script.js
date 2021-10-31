let slova = "abcdefghijklmnopqrstuvwxyz1234567890 .,?"
let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..",/*brojevi*/".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", /*razmak*/ 
"/",/*Interpunkcija*/ ".-.-.-", "--..--", "..--.."]

function enter(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        
        convert()
    }
  }

function convert() {
    var i = 0, j = 0, n = 0
    var input = document.getElementById("input1").value
    var output = ""
    if (input.length > 0) {
        if (document.getElementById("convert_type").value === "input_morse") {
        //dekodiranje
            input = input.replace("_", "-")
            input = input.replace("*", ".")
            var letter = input.split(" ")
            for (; i < letter.length; i++) {
                for (; j < morse.length; j++) {
                    if (letter[i] == morse[j]) {
                        output += slova[j]
                        n++;
                        break
                    }
                    if (j == morse.length - 1 && n == 0) output += "?"
                    n = 0
                }
                j = 0
            }
            document.getElementById("output").innerHTML = output

        }
        else {
            //kodiranje
            for (; i < input.length; i++) {
                for (; j < slova.length; j++) {
                    if (input[i].toLowerCase() == slova[j]) {
                        output += morse[j] + " "
                        n++
                        break
                    }
                    if (j == slova.length - 1 && n == 0) output += "?"
                    n = 0
                }
                j = 0
            }
            document.getElementById("output").innerHTML = output
        }
    }
}

function new_row(type, text1, text2) {
    var red = document.createElement("tr")
    var cell = document.createElement(type)
    cell.innerHTML = text1
    red.appendChild(cell)
    cell = document.createElement(type)
    cell.innerHTML = text2
    red.appendChild(cell)
    return red
}

function show_all() {
    var div = document.getElementById("show_all")
    if (div.childElementCount == 0) {
        var table = document.createElement("table")
        table.appendChild(new_row("th", "Znak", "Morseov kod"))
        for (var i = 0; i < slova.length; i++) {
            table.appendChild(new_row("td", slova[i], morse[i]))
        }
        div.appendChild(table)
    }
    else div.removeChild(div.firstChild)
}