// giphy api

let API_KEY = "2b34OiwfwWrYcZzLymbXayZAag1yCFU8";

// `https://api.giphy.com/v1/gifs/trending?api_key=2b34OiwfwWrYcZzLymbXayZAag1yCFU8&limit=25&rating=g`;

let container = document.getElementById("container");

const ApiData = async () => {
    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`);

        let data = await res.json();
        console.log('data:', data)
        let actual_data = data.data;

        append(actual_data)
    } catch (error) {
        console.log('error:', error)
    }
};
ApiData();

const append = async (data) => {
    data.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.images.downsized.url;
        img.addEventListener("click", () => {
            detail_gif(element.id)
        })


        div.append(img);
        container.append(div)
    });
}

const detail_gif = (id) => {
    localStorage.setItem("details", JSON.stringify(id));
    window.location.href = "details.html"
}

const random = async () => {
    container.innerHTML = null
    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
        let data = await res.json();
        console.log('data:', data);
        let img = document.createElement("img");
        img.addEventListener("click", () => {
            detail_gif(data.data.id)
        })
        img.src = data.data.images.downsized.url;
        container.append(img)
    } catch (error) {
        console.log('error:', error)
    }
}

let sorting=document.getElementById("sorting")

const categories = async () => {
    container.innerHTML=null
    sorting.innerHTML=null
    try {
        // api.giphy.com/v1/gifs/categories
        let res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`);
        let data = await res.json();
        console.log('data:', data);

        let sorting_Z_A=document.createElement("button");
        sorting_Z_A.innerText="Z-A"
        let sorting_A_Z=document.createElement("button");
        sorting_A_Z.innerText="A-Z"

        sorting.append(sorting_Z_A,sorting_A_Z);
        
let dum
        sorting_Z_A.onclick=()=>{
            sorting_cat(dum=false)
        }

        sorting_A_Z.onclick=()=>{
            sorting_cat(dum=true)
        }

        localStorage.setItem("categories",JSON.stringify(data.data));
        data.data.forEach(element => {
            let name = document.createElement("p");
            name.innerText=element.name;
            let img=document.createElement("img");
            img.addEventListener("click",()=>{
                detail_gif(element.gif.id)
            })
            img.src=element.gif.images.downsized.url
            container.append(img,name)
        });
        // detail_gif(data.data.id)

        // package.innerText=data.data.name

    } catch (error) {
        console.log('error:', error)
    }
}

const sorting_cat=(dum)=>{
let data=JSON.parse(localStorage.getItem("categories"));

if(dum==false){
    data=data.reverse();
}

container.innerHTML=null;
 data.forEach(element => {
            let name = document.createElement("p");
            name.innerText=element.name;
            let img=document.createElement("img");
            img.addEventListener("click",()=>{
                detail_gif(element.gif.id)
            })
            img.src=element.gif.images.downsized.url
            container.append(img,name)
        });
}

const gif=async()=>{
    container.innerHTML=null
   
    try {
            let query=document.getElementById("search").value;
            if(query==""){
                alert("please provide your input")
            }
            else{
            let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
            let data=await res.json();
            console.log('data:', data)
            // append(data)

            data.data.forEach(element => {
                let div = document.createElement("div");

                let img = document.createElement("img");
                let title=document.createElement("p");
                title.innerText=element.title
                img.src = element.images.downsized.url;
                img.addEventListener("click", () => {
                    detail_gif(element.id)
                })
        
        
                div.append(img,title);
                container.append(div)
            });

        }
        } catch (error) {
            console.log('error:', error)
        }
      
    
}