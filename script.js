$("button").click(function() {
    var age =$(".Age").val();
    var animals =$(".animals").val();
    var character;

   if (age < 18 && animals === "dog") {
     //   character = "Spongebob";
        $(".answer").append("<div>" + "Spongebob"  + "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7D3xd9w73OOeEZlEbmjUxjj8rIRv6sBUZdRD3c30Llq8UBzK'>" + "</div>");
        } else if (age > 18 && animals === "Gary") {
   //     character = "Patrick";
        $(".answer").append("<div>" + "Patrick" + "<img src= 'https://steamuserimages-a.akamaihd.net/ugc/943965591843230634/B22D77F665CACCD0776F6508F2F7F5C8DB35F133/'>" + "</div>"
            );
    } else if (age > 18 && animals === "dog") {
 //       character = "Sandy";
        $(".answer").append("<div>" + "Sandy" + "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn1v0G-F0zbVOeEXol0sSJbG_Yco98L-bSX78fV8ysahvO6jB7A'>" + "</div>");
        
    } else if (age < 18 && animals === "Gary") {
//        character = "Squidward";
        $(".answer").append("<div>" + "Squidward" + "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMy0-QPkcR1DsCrOPJ13C6FF0Ktd9a4yHN_aPaX3kInOGzWEX'>" + "</div>" );
    }
});