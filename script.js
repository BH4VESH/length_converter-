var input1=document.getElementById("amount");
var from=document.getElementById("from");
var to=document.getElementById("to");


function calculate()
{
    var a=from.value; 
    var b=to.value;
    
    var input = input1.value;
    
    let result ;
    // if(input==null)
    // {
    //     alert("Please Enter Length Which You Can Convert");
    // }
     if(a == b)
    {
        document.getElementById("out").value = input;   
    }
    
    else if(a === "centimeter" && b === "meter")
    {
        result=input*(1/100);   
        outputarea(result);
    } 
    else if(a === "centimeter" && b === "kilometer")
    {
        result=input*(1/100000);
        outputarea(result);
    } 
    else if(a === "centimeter" && b === "millimeter")
    {
        result=input*10;
        outputarea(result);
    } 
    else if(a === "centimeter" && b === "foot")
    {
        result=input*(1/30.48);
        outputarea(result);
    } 
    else if(a === "centimeter" && b === "inch")
    {
        result=input*(1/2.54);
        outputarea(result);
    } 



    else if(a === "meter" && b === "centimeter")
    {
        result=input*100;
        outputarea(result);    
    } 
    else if(a === "meter" && b === "kilometer")
    {
        result=input*(1/1000);
        outputarea(result);
    } 
    else if(a === "meter" && b === "millimeter")
    {
        result=input*100;
        outputarea(result);
    } 
    else if(a === "meter" && b === "foot")
    {
        result=input*3.281;
        outputarea(result);
    } 
    else if(a === "meter" && b === "inch")
    {
        result=input*39.3701;
        outputarea(result);
    } 



    else if(a === "kilometer" && b === "centimeter")
    {
        result=input*100000;
        outputarea(result);        
    } 
    else if(a === "kilometer" && b === "meter")
    {
        result=input*1000;
        outputarea(result);
    } 
    else if(a === "kilometer" && b === "millimeter")
    {
        result=input*1000000;
        outputarea(result);
    } 
    else if(a === "kilometer" && b === "foot")
    {
        result=input*3281;
        outputarea(result);
    } 
    else if(a === "kilometer" && b === "inch")
    {
        result=input*39370;
        outputarea(result);
    } 


    else if(a === "millimeter" && b === "centimeter")
    {
        result=input*(1/10);
        outputarea(result);
    } 
    else if(a === "millimeter" && b === "kilometer")
    {
        result=input*(1/1000000);
        outputarea(result);
    } 
    else if(a === "millimeter" && b === "meter")
    {
        result=input*(1/1000);
        outputarea(result);  
    } 
    else if(a === "millimeter" && b === "foot")
    {
        result=input*(1/304.8);
        outputarea(result);
    } 
    else if(a === "millimeter" && b === "inch")
    {
        result=input*(1/25.4);
        outputarea(result);
    } 



    else if(a === "foot" && b === "kilometer")
    {
        result=input*(1/3281);
        outputarea(result);
    } 
    else if(a === "foot" && b === "meter")
    {
        result=input*(1/3.281);
        outputarea(result);  
    } 
    else if(a === "foot" && b === "centimeter")
    {
        result=input*30.48;
        outputarea(result);
    } 
    else if(a === "foot" && b === "millimeter")
    {
        result=input*304.8;
        outputarea(result);
    } 
    else if(a === "foot" && b === "inch")
    {
        result=input*12;
        outputarea(result);
    } 


    else if(a === "inch" && b === "kilometer")
    {
        result=input*2.54e-5;
        outputarea(result);
    } 
    else if(a === "inch" && b === "meter")
    {
        result=input*39.37;
        outputarea(result);  
    } 
    else if(a === "inch" && b === "centimeter")
    {
        result=input*2.54;
        outputarea(result);
    } 
    else if(a === "inch" && b === "millimeter")
    {
        result=input*25.4;
        outputarea(result);
    } 
    else if(a === "inch" && b === "foot")
    {
        result=input*(1/12);
        outputarea(result);
    } 

}

function outputarea(result)
{
    document.getElementById("out").value = result;

}



// function res()
// {
//      document.getElementsById("myform").reset().value
// }