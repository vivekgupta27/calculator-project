const display=document.getElementById("display");
const btn=document.getElementsByClassName("button");
   

for(let i=0;i<btn.length;i++)
{
    var text="";
    btn[i].addEventListener("click",()=>
    {
        var value=btn[i].textContent
        if(value=="=")
        {
            text=eval(text);
            display.textContent=text;
        }
        else if(value=="AC")
        {
            display.textContent="0";
            text="";
        }
        else if(value=="+/-")
        {
            text=text*(-1);
            display.textContent=text;
        }
        else{
        text+=value;
        display.textContent=text;}
        
    })
}