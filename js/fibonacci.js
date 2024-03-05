const FRMFIBONACCI = document.querySelector("#formfibu");

FRMFIBONACCI.addEventListener("submit", calfibunacci);

function calfibunacci(evt) {
    evt.preventDefault();

    let x = parseInt(document.querySelector("#xnumero").value);

    if (isNaN(x) || x <= 0) {
        alert("Por favor, ingrese un número válido y mayor que cero.");
        return false;
    }

    function fibonacci(f, a = 0, b = 1) {
        if (f <= 0) {
            return [];
        } else if (f === 1) {
            return [a];
        } else {
            return [a].concat(fibonacci(f - 1, b, a + b));
        }
    }

    const resultado = fibonacci(x);

    let imprimir = document.getElementById("Resultado");
    imprimir.textContent =  resultado;

    botonCancelar.addEventListener("click", function() {
        console.log("Botón Cancelar clicado"); 
        imprimir.textContent = "";
    });
}

