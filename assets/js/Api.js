let API = 'https://pokeapi.co/api/v2/pokemon?limit=50';
let urlAux = 'https://pokeapi.co/api/v2/pokemon/';
let characters = document.getElementById("characters");
let next = document.getElementById('btn-next');
let previus = document.getElementById('btn-previus');
let actual = document.getElementById('actual-pagination');
//let data2 = [];

const getAPI = (url) =>{
    return fetch(url)
            .then((response)=> response.json())
            .then((result)=>{
                getAPIV2(result.results);
            })
            .catch((error)=>{
                console.log(error);
            })
}

const getAPIV2 =(data)=>{
    data.forEach(obj => {
        const {name,url} = obj;
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
                pushData(result);
        })
        
    });
    
}

let data2 = [];

let pushData=(obj)=>{
    let objeto={
            name:obj.name,
            height:obj.height,
            weight:obj.weight,
            url:obj.sprites.other.dream_world.front_default
        }
        data2.push(objeto);
        if(data2.length>=49)
            fillData(data2);
}


let fillData = (array2) =>{
     let item = " ";
     array2.forEach(obj =>{
         const {name,url,height,weight}=obj;
         console.log(name);
         console.log(url);
         console.log(height);
         
          item += '<div class="card bg-secondary text-white mb-3" style="width:18rem;">';
          item += `<div class="card-header text-center"><h5>${name}</h5></div>`;
          item +=`<img class=image  src=${url} alt="..." >`;
          item +='<div class="description ">'
          item +=`<p class="card-text "><strong>Height:</strong> ${height}</p>`;
          item +=`<p class="card-text "><strong>Weight:</strong> ${weight}}</p>`;
          item +='</div>';
          item +='</div>';
          
     })   
     characters.innerHTML=item;
     
}

const init = () =>{
    getAPI(API);
}


init();
