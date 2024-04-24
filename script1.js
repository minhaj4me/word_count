input=document.querySelector("input")
char=document.getElementById("char")
word=document.getElementById("word")

input.addEventListener("input",function(){

    let text=this.value;

    let charLength=text.length
    char.innerHTML=charLength;



    text=text.trim()  //(iii)

    let words=text.split(" ")  //(i)

    // console.log(words);

    let cleanWords =words.filter((e)=>{    //(iv)
        return e !="";
    });

    word.innerHTML=cleanWords.length   //(ii)     





})