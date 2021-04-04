
const ul = document.querySelector("ul")
const recipe = document.getElementById("recipe")
const form1 = document.querySelector("form")

ul.addEventListener("click",e=>{
    console.log(e.target)
      if(e.target.tagName === "BUTTON"){
   const id =  e.target.parentElement.getAttribute("data-id")
   db.collection("recipies").doc(id).delete()
   .then(()=>{ console.log("deleted")})
      }
} )
db.collection("recipies").get()
.then(snapshot=>{ 
    snapshot.docs.forEach(elt=>{
        ul.innerHTML += `<li data-id="${elt.id}"  > 
        <div>
        ${elt.data().title}
        </div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
       
        `
        

    } )
    console.log(snapshot.docs[3].data())})

    // db.collection.add().then(()=>{
    //     console.log("reciepe added")
    // } ).catch((err)=>{
    //     console.log(err)
    // } )

form1.addEventListener("submit",e=>{
     e.preventDefault()

    const rec = {
        title: recipe.value
    }
    db.collection("recipies").add(rec).then(()=>{
        console.log("reciepe added")
    } ).catch((err)=>{
        console.log(err)
    } )
    
})

