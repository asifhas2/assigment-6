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

lodeFunction()