var date = new Date()
var yr = date.getFullYear()
 var hr = date.getHours()

console.log(date);
console.log(yr);
 console.log(hr);

var a = -1
var b = -3
var c = -4

if (a > 0 && b > 0 && c > 0) {
    console.log("-");
}
// else if(){

// }

var num = 12
var num1 = 6
var num2 = 24

// function average() {
    
// }
let arr = []
let array = []
let total = 0
let total1 = 0
let len = 0
for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if (i % 2 == 0) {   
        arr.push(i)
     total += i
     len++
    }
    else{
        array.push(i)
        total1 += i

    }
}

var average = total / len
console.log(arr);
console.log(array);
console.log(total);
console.log(average);
console.log(`the average of even 1-10 is = ${average}`);

var student = ["Wale", "Boldlinks", "Tunde", "Tope", "Warith"]
for (let i = 0; i < student.length; i++) {
    if (student[i] == "Boldlinks" || student[i] == "Tunde") {
     console.log(student[i]);
        
    }
    else{
        console.log(false);
    }
}

// # Iterate through the contents of myarr and assign the third element of 
// sublist to a new list called third.

var myarr = [
    ['purple', 'mauve', 'blue'], 
    ['red', 'maroon', 'blood orange', 'crimson'], 
    ['sea green', 'cornflower', 'lavender', 'indigo'], 
    ['yellow', 'amarillo', 'mac n cheese', 'golden rod']
]

let three = []

for (let i = 0; i < myarr.length; i++) {
    // console.log(myarr[i]);
    // three.push(myarr[i])
    var element = myarr[i][2]
    console.log(element);
    three.push(element)
}
console.log(three);


// assignment
// change the words into pass-tense
pass_tense = []

var words = ["adopt", "lake", "confide", "grill", "plant", "time", "wave", "wish"]

for (let i = 0; i < words.length; i++) {
    pass_tense.push(words[i]+"ed")
}
console.log(pass_tense);


function getPastTense(verb) {
	if (exceptions[verb]) {
		return exceptions[verb];
	}
	if ((/e$/i).test(verb)) {
		return verb + 'd';
	}
	if ((/[aeiou]c/i).test(verb)) {
		return verb + 'ked';
	}
	// for american english only
	if ((/el$/i).test(verb)) {
		return verb + 'ed';
	}
	if ((/[aeio][aeiou][dlmnprst]$/).test(verb)) {
		return verb + 'ed';
	}
	if ((/[aeiou][bdglmnprst]$/i).test(verb)) {
		return verb.replace(/(.+[aeiou])([bdglmnprst])/, '$1$2$2ed');
	}
	return verb + 'ed';
}

var tests = {
	"bake": "baked",
	"smile": "smiled",
	"free": "freed",
	"dye": "dyed",
	"tiptoe": "tiptoed",
	"travel": "traveled",
	"model": "modeled",
	"distil": "distilled",
	"equal": "equalled",
	"admit": "admitted",
	"commit": "committed",
	"refer": "referred",
}