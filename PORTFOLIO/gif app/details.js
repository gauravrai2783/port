let cont = document.getElementById("details");

let API_KEY = "2b34OiwfwWrYcZzLymbXayZAag1yCFU8";

const details = async () => {
    let id = JSON.parse(localStorage.getItem("details"));
    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        let data = await res.json();
        console.log('data:', data)
        append(data)
    } catch (error) {
        console.log('error:', error)
    }

};
details();

const append=(data)=>{
    let img=document.createElement("img");
    let title=document.createElement("h3");
    title.innerText=`title: ${data.data.title}`;
    img.src=data.data.images.original.url;
    cont.append(img,title)
}