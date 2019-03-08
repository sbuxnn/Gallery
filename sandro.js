var slider = document.querySelector(".container");
const carousel = $(".carousel");
const carousel1 = document.querySelector(".carousel");

var pictures = document.querySelector(".pic");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const firstPic = document.querySelector(".first");
const secondPic = document.querySelector(".second");
const thirdPic = document.querySelector(".third");
const fourthPic = document.querySelector(".fourth");
const fifthPic = document.querySelector(".fifth");
const sixthPic = document.querySelector(".sixth");

let appearingBlock = document.querySelectorAll(".appearingBlock");
let row = document.querySelectorAll(".row");
var heart = document.querySelectorAll(".heart");
var share = document.querySelectorAll(".fa-share-square");

let isDown = false;
let startX;
let scrollLeft;
var currdeg = 0;
let click = 0;

slider.addEventListener("mousedown", (e) =>{
isDown= true;
slider.classList.add("active");
startX = e.pageX - slider.offsetLeft;
});
slider.addEventListener("mouseleave", () =>{
isDown= false;
slider.classList.remove("active");
});
slider.addEventListener("mouseup", () =>{
slider.classList.remove("active");
isDown = false;
});
slider.addEventListener("mousemove", (e) =>{
  e.preventDefault();
  if(!isDown) return;
  const x = e.pageX-slider.offsetLeft;
  const walk = x-startX;
  if(walk < -15){
    currdeg = currdeg - 60;
  }else if(walk > 15){
    currdeg = currdeg + 60;
  }
changeCarousel();

});
leftArrow.addEventListener("click", function(){
  currdeg= currdeg + 60;
  console.log(currdeg);
  changeCarousel();
  removeBlock();
  removeBlockPictures();
});
rightArrow.addEventListener("click", function(){
  currdeg= currdeg - 60;
  changeCarousel();
  removeBlock();
  removeBlockPictures();
});

function changeCarousel(){
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
  firstPic.addEventListener("click", function(e){
      if(e.target == firstPic){
        addBlock(0);
        blockOtherPictures(firstPic);
}
  if(e.target.parentElement == appearingBlock[0] || e.target ==document.querySelector(".table")){
          removeBlock();
          removeBlockPictures();
      }
  });

  secondPic.addEventListener("click", function(e){
      if(e.target == secondPic){
        addBlock(1);
        blockOtherPictures(secondPic);
}
  if(e.target.parentElement == appearingBlock[1] || e.target ==document.querySelector(".table")){
          removeBlockPictures();
          removeBlock();

      }
  });


  thirdPic.addEventListener("click", function(e){
      if(e.target == thirdPic){
        addBlock(2);
        blockOtherPictures(thirdPic);
}
  if(e.target.parentElement == appearingBlock[2] || e.target ==document.querySelector(".table")){
          removeBlock();
          removeBlockPictures();
      }
  });

  fourthPic.addEventListener("click", function(e){
      if(e.target == fourthPic){
        addBlock(3);
        blockOtherPictures(fourthPic);
}
  if(e.target.parentElement == appearingBlock[3] || e.target ==document.querySelector(".table")){
          removeBlock();
          removeBlockPictures();
      }
  });
  fifthPic.addEventListener("click", function(e){
      if(e.target == fifthPic){
        addBlock(4);
        blockOtherPictures(fifthPic);
}
  if(e.target.parentElement == appearingBlock[4] || e.target ==document.querySelector(".table")){
          removeBlock();
          removeBlockPictures();
      }
  });

  sixthPic.addEventListener("click", function(e){
      if(e.target == sixthPic){
        addBlock(5);
        blockOtherPictures(sixthPic);
}
  if(e.target.parentElement == appearingBlock[5] || e.target ==document.querySelector(".table")){
          removeBlock();
          removeBlockPictures();
      }
  });


function addBlock(i){
  click++;
  appearingBlock[i].style.display = "block";

}


function removeBlock(){
  console.log("remove");
    click = 0;
  for (var i=0; i< appearingBlock.length; i++)
  {
      appearingBlock[i].style.display = "none";
  }

}

heart.forEach(function(item){
  item.addEventListener("click", function(){
    item.classList.toggle("active");
  });
});
share.forEach(function(item){
  item.addEventListener("click", function(){
    item.classList.toggle("active");
  });
});



  function blockOtherPictures(name){
    $(".pic").not(name).addClass("active");
  }


  function removeBlockPictures(){
      $(".pic").removeClass("active");
  }
