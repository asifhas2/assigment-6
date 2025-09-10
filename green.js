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
                        <button onclick="my_modal_5.showModal();lodeFunction(${catagoresName.id})"" id="card-title" class="font-semibold text-[20px] cursor-pointer">${cardName.name} </button>
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
          <button onclick="lodeCurdSection(${catagoresName.id})" class=" font-medium text[20px] btn btn-neutral btn-outline w-full hover:bg-[#15803D] ">${catagoresName.category_name}</button>
    
    `;
    catagoryContenar.append(btn)
}

}

const lodeCurdSection=(id)=>{
   const url = `https://openapi.programming-hero.com/api/category/${id}`
   fetch(url)
   .then((res)=> res.json())
   .then((lode)=>displayPlantsByCatagores(lode.plants))
}

const displayPlantsByCatagores = (plants)=>{
    const cardContenar = document.getElementById("card-section")
cardContenar.innerHTML="";

    for(let plant of plants){
       const catagoryBtn = document.createElement("div")
       catagoryBtn.innerHTML=`
        <div class="card-section space-y-3 p-5 bg-white h-[550px]">
                    <div id="card-imd ">
                        <img src="${plant.image}" alt=""class="h-50 w-full object-cover">
                    </div>
                    <div class="space-y-3">
                         <button onclick="my_modal_5.showModal();lodeFunction(${plant.id})  "" id="card-title" class="font-semibold text-[20px] cursor-pointer">${plant.name} </button>
                        <p id="card-p" class="text-[#4e5661] h-40">${plant.description}</p>
                          <div class="flex justify-between">
                        <div>
                            <button id="card-catagori" class="bg-[#DCFCE7] text-[#15803D] font-semibold px-4 py-1 rounded-3xl">${plant.category}</button>
                        </div>
                        <div>
                            <p id="card-price" class="text-[20px] font-bold">$ <span>${plant.price}</span> </p>
                        </div>
                    </div>
                    </div>
                  
                    <div class="">
                        <button id="add-to-cart-btn" class="text-[20px] font-medium text-white bg-[#15803D] w-full py-2 rounded-3xl  ">Add to Cart</button>
                    </div>

                </div>
       
       `;
       cardContenar.append(catagoryBtn)
    }
}

const lodeFunction=(id)=>{
   const url = `https://openapi.programming-hero.com/api/plant/${id}`
   fetch(url)
   .then((res)=> res.json())
   .then((lode)=>displayLodeFunction(lode.plants))
}

const displayLodeFunction=(detales)=>{
const curdContenar = document.getElementById("modal-btn")
curdContenar.innerHTML="";
const curtdbtn = document.createElement("div")
curtdbtn.innerHTML=`
            <div class="card-section space-y-3 p-2 bg-white w-full">
                <h3 class="text-2xl font-semibold">${detales.name}</h3>
                <div>
                    <img src="${detales.image}" alt="" class=" w-full h-[300px] object-cover" >
                </div>
                <div>
                    <h2 class="text-[20px] font-semibold w-full">Category: <span class="text-[#4e5661] text-[16px]">${detales.category}</span></h2>
                    <h3 class="text-[20px] font-semibold">Price: <span class="text-[#4e5661] text-[16px]" >${detales.price}</span></h3>
                    <h2 class="text-[20px] font-semibold"> Description: <span class="text-[#4e5661] text-[16px]">${detales.description}</span></h2>
                </div>

            </div>
             <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
        </div>

`
curdContenar.append(curtdbtn)


}



catagorySection()
allPlantSection()
lodeCurdSection()
lodeFunction()