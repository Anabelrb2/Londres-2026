// =========================================
// LONDRES PASO A PASO
// app.js v2.0
// =========================================

// -----------------------------
// Cambio de pantallas
// -----------------------------

function mostrarSeccion(id){

    document.querySelectorAll(".pantalla").forEach(seccion=>{

        seccion.classList.add("oculto");

    });

    document.getElementById(id).classList.remove("oculto");

}

// -----------------------------
// Abrir / cerrar un día
// -----------------------------

function abrirDia(id, boton){

    const bloque = document.getElementById(id);

    if(!bloque) return;

    if(bloque.style.display==="block"){

        bloque.style.display="none";

        boton.innerHTML = boton.innerHTML.replace("▲","▼");

    }else{

        bloque.style.display="block";

        boton.innerHTML = boton.innerHTML.replace("▼","▲");

    }

}

// -----------------------------
// Buscar
// -----------------------------

function buscarContenido(){

    const texto = document
        .getElementById("buscador")
        .value
        .toLowerCase();

    // Buscar en lugares del itinerario
    document.querySelectorAll(".lugar").forEach(lugar=>{

        const visible = lugar.innerText
            .toLowerCase()
            .includes(texto);

        lugar.style.display = visible ? "block" : "none";

    });

    // Buscar en restaurantes
document.querySelectorAll(".zona-restaurante li").forEach(item=>{

    const visible = item.innerText
        .toLowerCase()
        .includes(texto);

    item.style.display = visible ? "flex" : "none";

});

}

// -----------------------------
// Marcar visitado
// -----------------------------

function marcarVisitado(check){

    const tarjeta = check.closest(".lugar");

    if(!tarjeta) return;

    const nombre = tarjeta.dataset.lugar;

    if(check.checked){

        localStorage.setItem("visitado_" + nombre, "true");

        tarjeta.style.opacity = ".45";

    }else{

        localStorage.removeItem("visitado_" + nombre);

        tarjeta.style.opacity = "1";

    }

}

// -----------------------------
// Crear un lugar
// -----------------------------
function crearLugar(lugar){

    let html = `

<div class="lugar" data-lugar="${lugar.nombre}">

<h3>${lugar.icono} ${lugar.nombre}</h3>

<p>🕒 <strong>${lugar.hora}</strong></p>

<p>⏱ ${lugar.duracion}</p>

`;

    if(lugar.metro){

        html += `<p>🚇 ${lugar.metro}</p>`;

    }

    if(lugar.precio){

        html += `<p>💷 ${lugar.precio}</p>`;

    }

    html += `

<p>${lugar.descripcion}</p>

`;

    if(lugar.foto){

        html += `

<p><strong>📸 Mejor foto:</strong><br>${lugar.foto}</p>

`;

    }

    if(lugar.consejo){

        html += `

<p><strong>💡 Consejo:</strong><br>${lugar.consejo}</p>

`;

    }

    if(lugar.restaurantes && lugar.restaurantes.length){

        html += `<p><strong>🍴 Comer cerca:</strong></p><ul>`;

        lugar.restaurantes.forEach(restaurante=>{

            html += `<li>${restaurante}</li>`;

        });

        html += `</ul>`;

    }

    html += `

<a
class="mapa"
target="_blank"
href="${lugar.maps}">

📍 Abrir Google Maps

</a>

<label class="check">

<input
type="checkbox"
onchange="marcarVisitado(this)"
${localStorage.getItem("visitado_" + lugar.nombre) === "true" ? "checked" : ""}>

Visitado

</label>

</div>

`;

    return html;

}


// -----------------------------
// Crear un día
// -----------------------------

function crearDia(dia){

    let lugares = "";

    dia.lugares.forEach(lugar=>{

        lugares += crearLugar(lugar);

    });

    return `

<div class="dia">

<button
class="dia-boton"
onclick="abrirDia('dia${dia.id}', this)">

<div style="font-size:18px;font-weight:bold;">
${dia.fecha}
</div>

<div style="margin-top:5px;">
${dia.titulo}

${dia.nota ? `<div class="nota-dia">${dia.nota}</div>` : ""}
</div>

<div style="margin-top:12px;font-size:14px;opacity:.9;">

📍 ${dia.visitas} visitas<br>
🚶 ${dia.distancia}<br>
🕒 ${dia.horario}

</div>

</button>

<div
class="dia-contenido"
id="dia${dia.id}">

${lugares}

</div>

</div>

`;

}

// -----------------------------
// Pintar itinerario
// -----------------------------

function cargarItinerario(){

    const contenedor=document.getElementById("listaDias");

    if(!contenedor) return;

    contenedor.innerHTML="";

    viaje.dias.forEach(dia=>{

        contenedor.innerHTML+=crearDia(dia);

    });

}


// ===============================
// Crear un día de restaurantes
// ===============================

function cargarRestaurantes(){

    let html="";

    restaurantes.forEach(zona=>{

        html+=`

        <div class="zona-restaurante">

            <h3>${zona.zona}</h3>

            <ul>

        `;

        zona.lugares.forEach(restaurante=>{

    html+=`

        <li>

            <span>🍴 ${restaurante.nombre}</span>

            <a
                href="${restaurante.maps}"
                target="_blank"
                class="maps-restaurante">

                📍 Maps

            </a>

        </li>

    `;

});

        html+=`

            </ul>

        </div>

        `;

    });

    document.getElementById("listaRestaurantes").innerHTML=html;

}


// ===============================
// Pintar restaurantes
// ===============================


document.addEventListener("DOMContentLoaded",()=>{

    mostrarSeccion("inicio");

    cargarItinerario();

    cargarRestaurantes();

});