var images = ["creamy-penne-pasta-3.jpg", "Creamy-Spinach-Tomato-Pasta-bowl-500x500.webp","One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg"];
var i = 0;

function imgChanger()


{
 i++;
    var number_0f_pastas = images.length-1;
    if(i > number_0f_pastas)
      {
          i = 0;
      }
    
  
    var updatedImage = images[i];
  
 console.log(updatedImage);
    document.getElementById("pasta_image").src = updatedImage;

}