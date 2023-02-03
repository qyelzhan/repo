//task1
function greeting(parameterVariable) {
    console.log('Hello, World!');
}

//task2
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    let a = Number(firstInteger)+Number(secondInteger);
    console.log(a);
    const firstDecimal = 4.0;
    let b = Number(firstDecimal)+Number(secondDecimal);
    console.log(b); 

    const firstString = 'HackerRank ';
    let s = firstString+""+ secondString;
    console.log(s);    
}
//task3
function getArea(length, width) {
    let area;
    // Write your code here
    
    return area;
}
//task4
function factorial(n){
    let count =1;
    for(let i = 1; i<=n;i++){
        count=count*i;
    }
    return count;
}
//task5
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r =readLine();
    const PI = Math.PI;
    
    // Print the area of the circle:
    console.log(PI*r*r);
    
    // Print the perimeter of the circle:
    console.log(2*PI*r);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
//task6
function getGrade(score) {
    let grade;
    // Write your code here
    if(score<=30 && score>25) return 'A';
    if(score<=25 && score>20) return 'B';
    if(score<=20 && score>15) return 'C';
    if(score<=15 && score>10) return 'D';
    if(score<=10 && score>5) return 'E';
    if(score<=5 && score>=0) return 'F';
    
    
    //return grade;
}
//task7
function getLetter(s) {
    let letter;
    // Write your code here
   
    switch(s[0]) {
  case 'a'||'e'||'i'||'o'||'u':  
      return('A');
    break;

  case 'b'||'c'||'d'||'f'||'g':  
          return('B');
    break;
    
  case 'h'||'j'||'k'||'l'||'m':
          return('C');
    break; 
    
//   case 'n'||'p'||'q'||'r'||'t'||'v'||'w'||'x'||'y'||'z': 
//           return('D');
//     break;   

  default:
  return 'D';
  
    break;
}
    
    // return letter;
}
//task8
function vowelsAndConsonants(s) {
    const vow = "aeoui";
    for(let i = 0; i<s.length;i++){
        if(vow.includes(s[i])){console.log(s[i])};
    }
    for(let i = 0; i<s.length; i++){
        if(vow.includes(s[i])==false) {console.log(s[i])};
    }
   
    
}
//task9
function getSecondLargest(nums) {
    // Complete the function
    let max =0;
    let max2 =0;
    for(let i =0; i<nums.length;i++){
        if(max<nums[i]){ 
            max = nums[i];
            }
    }
    for(let i =0; i<nums.length;i++){
        if(max==nums[i]){nums[i]=0;}
    }
    for(let i =0; i<nums.length;i++){
        if(max2<nums[i]){ 
           max2 = nums[i];
            }
    }
    return max2;


}