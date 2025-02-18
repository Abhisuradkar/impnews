let key = "49e17e9a88ac4b0185d4f41f28f66590";
let carddata = document.querySelector(".carddata");
let searchbtn = document.getElementById("searchbtn");
let inputdata = document.getElementById("inputdata");

const getdata = async(input) => {
    let res = await fetch (`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsondata = await res.json();
    console.log(jsondata.articles); 

    carddata.innerHTML="";
    jsondata.articles.forEach(function(article){
        console.log(article);

        let divs = document.createElement("div");
        divs.classList.add("card");
        carddata.appendChild(divs);
    
        divs.innerHTML=`
         <img src="${article.urlToImage}" alt="">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
    
    
        `
        divs.addEventListener("click",function(){
            window.open(article.url);
        })
    })

   

}


searchbtn.addEventListener("click", function(){
    let inputtext = inputdata.value;
    getdata(inputtext);
})
function navClick(navName){
    getdata(navName)
}