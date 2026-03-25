
const url = "http://10.2.137.47:5000";


async function guardar() {
 let titulo = document.getElementById("titulo").value;
 let autor = document.getElementById("autor").value;
 let img = document.getElementById("img").value;
 let cat = document.getElementById("categoria").value;

 let datos={
    titulo : titulo,
    autor : autor,
    imagen: img,
    categoria : cat
 };
 let request= await fetch(url + "/libros",{
    method :  "post", 
    headers : {
        "content-type" : "application/json"
    },
    body : JSON.stringify(datos)

 } );
alert("agregado correctamente");
    window.location.reload();
 

 document.getElementById("modalLibro").style.display = "none";
 
}

function cerrarModal (){
    document.getElementById("modalLibro").style.display = "none";
}
function abrir_libro() {
document.getElementById("modalLibro").style.display = "flex";
    
}

async function eliminar(id) {
    let request = await fetch(url + "/libros/" + id,{
        method : "delete"
    })

    alert("eliminado correctamente");
    window.location.reload();
    
}



async function getlibros() {
    let valor = document.getElementById("selec").value;
    document.getElementById("libros").innerHTML = " "

    if (valor == 0 || valor == 4) {


        let request = await fetch(url + "/libros");
        let response = await request.json();

        response.forEach((x) => {
            document.getElementById("libros").innerHTML += `
        <div class="card">
            <div>
                <h3>${x.titulo}</h3>
                <p >${x.autor}</p>
                <img src="${x.imagen}" class="imagen"  alt="">
                <p>${x.categoria}</p>
                <button type="submit" onclick="eliminar(${x.id})">Eliminar</button>
            </div>
        </div>
    `;
        });
    } else if (valor == 1) {
        let autor = document.getElementById("libros_buscar").value;
        document.getElementById("libros").innerHTML = " "

        let request = await fetch(url + "/libros/autor/" + autor);
        let response = await request.json();

        response.forEach((x) => {
            document.getElementById("libros").innerHTML += `
        <div class="card">
            <div>
                <h3>${x.titulo}</h3>
                <p >${x.autor}</p>
                <img src="${x.imagen}" width="50%" alt="">
                <p>${x.categoria}</p>
                 <button type="submit" onclick="eliminar(${x.id})">Eliminar</button>
            </div>
        </div>
    `;
        });
    } else if (valor == 2) {
        let cat = document.getElementById("libros_buscar").value;

        document.getElementById("libros").innerHTML = " "

        let request = await fetch(url + "/buscar?categoria=" + cat);
        let response = await request.json();
        response.forEach((x) => {
            document.getElementById("libros").innerHTML += `
        <div class="card">
            <div>
                <h3>${x.titulo}</h3>
                <p >${x.autor}</p>
                <img src="${x.imagen}" width="50%" alt="">

                <p>${x.categoria}</p>
            </div>
        </div>
    `;
        });
    } else if (valor == 3) {
        let id = document.getElementById("libros_buscar").value;
        document.getElementById("libros").innerHTML = " "

        let request = await fetch(url + "/libros/" + id);
        let response = await request.json();

        document.getElementById("libros").innerHTML = `
        <div class="card">
            <div>
                <h3>${response.titulo}</h3>
                <p >${response.autor}</p>
                <img src="${response.imagen}" width="50%" alt="">

                <p>${response.categoria}</p>
            </div>
        </div>
    `;






    }
};
getlibros();