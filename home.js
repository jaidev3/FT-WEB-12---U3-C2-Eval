///// API Key- 7e39b53970604d239ae04d5943ea6a0a
////////////API Link--https://newsapi.org/v2/everything?q=bitcoin&apiKey=7e39b53970604d239ae04d5943ea6a0a  //for search

/////////  https://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=7e39b53970604d239ae04d5943ea6a0a //random
/////  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY  //////////////


async function Topnews(){

    let res =  await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7e39b53970604d239ae04d5943ea6a0a ")

    let data=await res.json();

    console.log("res:",data.articles)
   appendnews(data.articles)


}
//Searchnews()
var body=document.getElementById("body")

function appendnews(news){
    news.forEach((res)=>{
        var div=document.createElement("div");
let image=document.createElement("img")
let head=document.createElement("h2")
let des=document.createElement("p")
image.src=res.urlToImage;
image.style.height="50%"
image.style.width="100%"
div.style.backgroundColor="white"
div.style.margin="10px"
div.style.overflow="hidden"


head.innerText=res.title
des.innerText=res.description
div.append(image,head,des)
body.append(div)

});


}
 //div.addEventListener("click",news)
Topnews()