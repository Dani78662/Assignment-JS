// Write a JS program to construct the following pattern,
// using a nested loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function constructPattern(rows){
for(let i = 1; i<=rows;i++){
    let pattern ="";
    for(let j=1 ;j<=i;j++){
        pattern += "* ";
    }
    console.log(pattern);
}
}
constructPattern(5);
