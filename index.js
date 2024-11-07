const burbuja = arr => {                                        //A la constante burbuja le asignamos una funcion anonima.
    const longitud = arr.length;                                //Almacenamos la longitud del arreglo.
    let ordenado = false;                                       //Declaramos la variable ordenado como falsa.
    for (let i = 0; i < longitud; i++) {                        //Comenzamos a recorrer el arreglo.
        ordenado=true;                                          //A la variable ordenado le asignamos valor de true
        for (let j = 0; j < longitud - 1 - i; j++) {            //Comenzamos un segundo siclo para realizar las comparaciones.
            if (arr[j] > arr[j + 1]) {                          //Si el elemento es mayor al de la derecha entonces.
                ordenado=false;                                 //Si hay cambios en el orden se asigna false a ordenado
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];    //intercambian posiciones en ele arreglo.
            }
        }
        console.log(`Pasada ${i}`);
        console.log(`${arr}`);    
        if(ordenado){                       //si ordenado es verdadero nos indica que no se realizaron cambios al arreglo
            return arr;                     //por lo tanto esta ordenado y filaliza el proceso retornando arr
        }                                  
    }
    
    return arr;                                                 //Retornamos arr
};
//const arr = [1,2,3,4,5,6]
//const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
//const arr = [2,1,3,4,5,6,7,8,9,10];
const arr = ["zacarias","rodriguez","Martinez","Rodriguez","Zacarias","albarez"]
const result = burbuja(arr);