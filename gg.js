let btns=document.querySelectorAll("button");
let result=document.querySelector("#result");
let ex="";


btns.forEach((btn)=>{
    
btn.addEventListener("click", ()=>{
    if(btn.value==="ans"){
        try {
            console.log(eval(ex)); 
            result.value=eval(ex);
            ex=(eval(ex));
        } catch (e) {
            if (e instanceof SyntaxError) {
                // alert(e.message);
                result.value="ERROR";
                ex="";
            }
        }
        

        
    }
    else if(btn.value==="C"){
        ex="";
        result.value="";
    }
    else if(btn.value==="b"){
        ex=ex.slice(0,-1);
        result.value=ex;
    }    
    else {
    ex+=btn.value;
    result.value=ex;
    }
});
})