const image =[
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg"
]
let imgIndex = 0;
const img = document.getElementById("img-tag");
setInterval(()=>{
    if(image.length <= imgIndex){
        imgIndex =0;
    }
    const imgUrl =image[imgIndex];
    img.setAttribute("src", imgUrl);
    imgIndex++
},3000)