// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// let apiKey= "5d96e48d"

let movies_div = document.getElementById("movies")
let id;

let search = document.getElementById("search").addEventListener("input", main)

async function main() {
    try {
        let query = document.getElementById("search").value;
        let res =await fetch(`https://www.omdbapi.com/?apikey=5d96e48d&s=${search}`)
        let data = await res.json();

        let aData=data.Search;
        console.log('aData:', aData)


        // console.log('data:', data)
        if (aData != undefined) {
            appendMovies(aData)
        }

    }
    catch (err) {
        console.log('err:', err)
    }
}

function appendMovies(data) {
    data.forEach(function (el) {
movies_div.innerHTML=null
        let movie_tab=document.createElement("div")
        let img = document.createElement("img");
        img.src = el.Poster;

        let p = document.createElement("p");
        p.innerText = el.Title

        let button=document.createElement("button")
        button.innerText="Book Now"
        button.className="book_now"
        
        button.addEventListener("click",my)

        movie_tab.append(img, p,button);
        movies_div.append(movie_tab);
    });
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    setTimeout(function(){
        func();
    },2000)
}


function my(index){
    window.location.href="checkout.html"
    console.log(index)
localStorage.setItem("movie",JSON.stringify(index))
}
