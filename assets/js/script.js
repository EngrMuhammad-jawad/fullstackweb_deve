

// arthmetic operations
let a = 10;
let b = 5;
let c = a + b;
console.log(c); 
c = a - b;
console.log(c); 
c = a * b;      
console.log(c);
c = a / b;
console.log(c);
c = a % b;
console.log(c); 

// assignment operators
let x = 10;
x += 5;
console.log('x = '.concat(x));


// Shortcuts
let count = 0;
count++;  // 1
count--;  // 0
count += 5; // 5
count *= 2; // 10
console.log('count = '.concat(count));



let firstName = "ali";
let lastName = "khan";

// Concatenation
let fullName = firstName + " " + lastName;
// "ali khan    "

// Template literal
let greeting = `Hello, ${firstName} ${lastName}!`;
// "Hello, ali  !"

// String length
console.log(fullName.length); // 11

// Methods
console.log(greeting.toUpperCase());



// "HELLO, ALICE!"


// loop
for (let i = 0; i < 10; i++) {
  console.log('i = '.concat(i));
}

let count1 = 0;

while (count1 < 10) {
  console.log('while-loop = '.concat(count1));
  count1++;
}   



const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


// changethe color of p tag 
const p = document.querySelector('p');
p.style.color = 'red';



document.getElementById('btn').addEventListener('click', function() {
    
    alert('Button clicked!');
});


