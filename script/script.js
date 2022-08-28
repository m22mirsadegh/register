




// function myFunction(){
//     const x,text;
//     const x=document.getElementById("name").value;

//     if (x == null || x ==""){
//         text="input not valid";
//     }


//    else if ( x == /^[A-Za-z\s]+$/.test(x)){
//         text="input ok"}

//     else {  text="input No"
// }

// document.getElementById( "demo1").innerHTML=text;
// };

// _________________________________________________________2_______________________

function myFunction(){
    var x ,  text;
    x=document.getElementById("name").value;
    if( x== a-z|| x == A-Z){
        text="input ok"
    }
    else {
       
        text="input Not valid"
    }
    document.getElementById("demo1").innerHTML=text;
}


// ______________________________________________________________________________________mobail


 function myFunction(){
     var xPhone ; textPhone
    var xPhone= document.getElementById("phone").value;
     if (xPhone== new RegExp("^(\\+98|0)?9\\d{9}$")){
        textPhone= "input ok"
     }
    else{
        textPhone="input NOt valid"
    }

    document.getElementById(" demo2").innerHTML= textPhone;
};






// export const check_phone = (number) => {
//     var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
//     var result = regex.test(number);
//     return result;
//   };


//   __________________________________________________________________________________________code


function myFunction() {
    var xv = document.getElementById('Your-id').value;
    if (isNaN(xv)) {
        alert("please enter a number !");
    } else if (xv == "") {
        alert("please write a code !")
    } else if (xv.length < 10) {
        alert("your entered code is less than 10!")
    } else {
        var yy = 0;
        var yv = parseInt(yv);
        for (let i = 0; i < xv.length; i++) {
            yv = xv[i] * (xv.length - i);
            yy += yv;
        }
        var x = yy % 11;
        if (x === 0) {
            alert("your code is valid !");
        } else {
            alert("your code is invalid !");
        }
        yy = 0;
    }
}