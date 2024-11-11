document.getElementById("user-input").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[^0-9,]/g, "");
});

function obtenerArregloUsuario() {
    const input = document.getElementById("user-input").value;
    return input.split(",").map(Number);
}

function crearArregloVisual(arr) {
    const unsortedContainer = document.getElementById("unsorted-container");
    unsortedContainer.innerHTML = ''; 
    arr.forEach(num => {
        const element = document.createElement("div");
        element.classList.add("array-element", "unsorted-element");
        element.textContent = num;
        unsortedContainer.appendChild(element);
    });
}

function actualizarArregloVisual(arr) {
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = '';
    arr.forEach(num => {
        const element = document.createElement("div");
        element.classList.add("array-element");
        element.textContent = num;
        arrayContainer.appendChild(element);
    });
}

async function iniciarOrdenamiento() {
    const arr = obtenerArregloUsuario();
    if (arr.some(isNaN)) {
        alert("Por favor, ingresa solo números separados por comas.");
        return;
    }
    
    document.getElementById("user-input").value = '';
    crearArregloVisual(arr);
    await meterarreglado(arr);
}

async function meterarreglado(arr) {
    const l = arr.length;
    let j, temporal;
    let pasos = 0;
    let explicaciones = [];
    
    actualizarArregloVisual([]);  // Limpiar contenedor de acomodados inicialmente
    
    for (let i = 1; i < l; i++) {
        j = i;
        temporal = arr[i];
        let mensaje = `Paso ${pasos + 1}: Se selecciona el elemento ${temporal}. `;
        
        while (j > 0 && arr[j - 1] > temporal) {
            arr[j] = arr[j - 1];
            mensaje += `Se mueve ${arr[j - 1]} a la derecha. `;
            j--;
            pasos++;
        }
        
        arr[j] = temporal;
        mensaje += `Se inserta ${temporal} en la posición ${j}.`;
        
        explicaciones.push(mensaje);
        actualizarArregloVisual(arr.slice(0, i + 1));  // Mostrar acomodados
        mostrarExplicaciones(explicaciones); 
        
        document.getElementById("pasos").textContent = `Número de pasos: ${pasos}`;
        
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

function mostrarExplicaciones(explicaciones) {
    const lista = document.getElementById("explicaciones-lista");
    lista.innerHTML = ''; 

    explicaciones.forEach(explicacion => {
        const item = document.createElement("li");
        item.textContent = explicacion;
        lista.appendChild(item);
    });
}

function crearNuevo() {
    document.getElementById("user-input").value = '';
    document.getElementById("unsorted-container").innerHTML = '';
    document.getElementById("array-container").innerHTML = '';
    document.getElementById("explicaciones-lista").innerHTML = '';
    document.getElementById("pasos").textContent = 'Número de pasos: 0';
}
