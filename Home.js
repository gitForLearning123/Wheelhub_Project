$(document).ready(function(){

 
    let currIndex = 0;
    const images = $(".img-carousel")
    const totalImages = images.length

    $(".next-button").click(function(){
      images.eq(currIndex).removeClass("active")
      currIndex = (currIndex + 1) % totalImages
      images.eq(currIndex).addClass("active")
    })

    $(".prev-button").click(function(){
      images.eq(currIndex).removeClass("active")
      currIndex = (currIndex - 1 + totalImages) % totalImages
      images.eq(currIndex).addClass("active")
    })



    

})

// let image = document.getElementsByClassName("img-carousel")
// let curridx = 0


// console.log(image);

// document.getElementById("next").addEventListener("click", function(){


//     if(curridx == image.length-1){

//         curridx = 0

//     }else{

//        curridx++

//     }

//     SlideShow()



// })

// document.getElementById("prev").addEventListener("click", function(){

//  if(curridx == 0){

//     curridx = image.length-1

//  }else{

//     curridx--

//  }

//  SlideShow()

// })

// function SlideShow(){

//    for(let i=0; i < image.length; i++){

//       image[i].style.display = "none"

//    }

//    image[curridx].style.display = "block"

// }

// SlideShow()