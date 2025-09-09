const allPlantSection = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
     .then( (res) => res.json() )
     .then((json) => displayAllPlant(json.plants))
    
}

const displayAllPlant =(allPlant) =>{
const cardContenar = document.getElementById("card-section")
cardContenar.innerHTML="";

for(let cardName of allPlant){
const cardBtn = document.createElement("div")
cardBtn.innerHTML=`
 <div class="card-section space-y-3 p-5 bg-white h-[550px]">
                    <div id="card-imd ">
                        <img src="${cardName.image}" alt=""class="h-50 w-full object-cover">
                    </div>
                    <div class="space-y-3">
                        <h3 id="card-title" class="font-semibold text-[20px]">${cardName.name}</h3>
                        <p id="card-p" class="text-[#4e5661] h-40">${cardName.description}</p>
                          <div class="flex justify-between">
                        <div>
                            <button id="card-catagori" class="bg-[#DCFCE7] text-[#15803D] font-semibold px-4 py-1 rounded-3xl">${cardName.category}</button>
                        </div>
                        <div>
                            <p id="card-price" class="text-[20px] font-bold">$ <span>${cardName.price}</span> </p>
                        </div>
                    </div>
                    </div>
                  
                    <div class="">
                        <button id="add-to-cart-btn" class="text-[20px] font-medium text-white bg-[#15803D] w-full py-2 rounded-3xl  ">Add to Cart</button>
                    </div>

                </div>

`;
cardContenar.append(cardBtn)
}
}




const catagorySection = () => {
   fetch("https://openapi.programming-hero.com/api/categories")
   .then( (res) => res.json() )
   .then((json) => displaycaragires(json.categories))
}

const displaycaragires = (catagores) =>{
const catagoryContenar = document.getElementById("all-Categories")
catagoryContenar.innerHTML="";

for(let catagoresName of catagores){

    const btn = document.createElement("div")
    btn.innerHTML=`
          <button class="catagorie-p font-medium text[20px]">${catagoresName.category_name}</button>
    
    `;
    catagoryContenar.append(btn)
}

}

catagorySection()
allPlantSection()