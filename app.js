


// function changeColor1(){
//     document.getElementById("one").style.display="none"

//     document.getElementById("onel").style.display="block"
// }
// function changeColor2(){
//     document.getElementById("two").style.display="none"

//     document.getElementById("twol").style.display="block"
// }
// function changeColor3(){
//     document.getElementById("three").style.display="none"

//     document.getElementById("threel").style.display="block"
// }
// function changeColor4(){
//     document.getElementById("four").style.display="none"

//     document.getElementById("fourl").style.display="block"
// }
// function changeColor5(){
//     document.getElementById("five").style.display="none"

//     document.getElementById("fivel").style.display="block"
// }
    

    for(var i=0;i<11;i++){
        document.querySelectorAll("i")[i].addEventListener("click",function(event){
           let clicked_id = (event.target.id);
           console.log(clicked_id);
           if(clicked_id == "one"){
            document.getElementById("one").style.display="none"
            document.getElementById("onel").style.display="block"

            // document.getElementById("twol").style.display="none"
            // document.getElementById("two").style.display="block"
            // document.getElementById("threel").style.display="none"
            // document.getElementById("three").style.display="block"
            // document.getElementById("fourl").style.display="none"
            // document.getElementById("four").style.display="block"
            // document.getElementById("fivel").style.display="none"
            // document.getElementById("five").style.display="block"
           }
           if (clicked_id == "two"){
            document.getElementById("one").style.display="none"
            document.getElementById("onel").style.display="block"
            document.getElementById("two").style.display="none"
            document.getElementById("twol").style.display="block"

            // document.getElementById("threel").style.display="none"
            // document.getElementById("three").style.display="block"
            // document.getElementById("fourl").style.display="none"
            // document.getElementById("four").style.display="block"
            // document.getElementById("fivel").style.display="none"
            // document.getElementById("five").style.display="block"
           }
           if(clicked_id == "three"){
            document.getElementById("one").style.display="none"
            document.getElementById("onel").style.display="block"
            document.getElementById("two").style.display="none"
            document.getElementById("twol").style.display="block"
            document.getElementById("three").style.display="none"
            document.getElementById("threel").style.display="block"
    
            // document.getElementById("fourl").style.display="none"
            // document.getElementById("four").style.display="block"
            // document.getElementById("fivel").style.display="none"
            // document.getElementById("five").style.display="block"
           }
           if(clicked_id == "four"){
            document.getElementById("one").style.display="none"
            document.getElementById("onel").style.display="block"
            document.getElementById("two").style.display="none"
            document.getElementById("twol").style.display="block"
            document.getElementById("three").style.display="none"
            document.getElementById("threel").style.display="block"
            document.getElementById("four").style.display="none"
            document.getElementById("fourl").style.display="block"

            // document.getElementById("fivel").style.display="none"
            // document.getElementById("five").style.display="block"

           }
           if(clicked_id == "five"){
            document.getElementById("one").style.display="none"
            document.getElementById("onel").style.display="block"
            document.getElementById("two").style.display="none"
            document.getElementById("twol").style.display="block"
            document.getElementById("three").style.display="none"
            document.getElementById("threel").style.display="block"
            document.getElementById("four").style.display="none"
            document.getElementById("fourl").style.display="block"
            document.getElementById("five").style.display="none"
            document.getElementById("fivel").style.display="block"
           }
           if(clicked_id == "onel"){
            document.getElementById("twol").style.display="none"
            document.getElementById("two").style.display="block"
            document.getElementById("threel").style.display="none"
            document.getElementById("three").style.display="block"
            document.getElementById("fourl").style.display="none"
            document.getElementById("four").style.display="block"
            document.getElementById("fivel").style.display="none"
            document.getElementById("five").style.display="block"
           }
           if(clicked_id == "twol"){
            document.getElementById("threel").style.display="none"
            document.getElementById("three").style.display="block"
            document.getElementById("fourl").style.display="none"
            document.getElementById("four").style.display="block"
            document.getElementById("fivel").style.display="none"
            document.getElementById("five").style.display="block"
           }
           if(clicked_id == "threel"){
            document.getElementById("fourl").style.display="none"
            document.getElementById("four").style.display="block"
            document.getElementById("fivel").style.display="none"
            document.getElementById("five").style.display="block"
           }
           if(clicked_id == "fourl"){
            document.getElementById("fivel").style.display="none"
            document.getElementById("five").style.display="block"
           }
        //    if(clicked_id == "fivel"){
            
        //    }
        })
    }
    




