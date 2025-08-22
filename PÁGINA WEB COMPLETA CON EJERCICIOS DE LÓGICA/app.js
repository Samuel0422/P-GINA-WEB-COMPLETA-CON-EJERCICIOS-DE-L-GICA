// --- Lógica de Números Primos ---
function ejecutarPrimos() {
    const desde = parseInt(document.getElementById('primoDesde').value);
    const hasta = parseInt(document.getElementById('primoHasta').value);
    const resultadoDiv = document.getElementById('resultadoPrimos');
    
    if (isNaN(desde) || isNaN(hasta) || desde > hasta || desde < 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor, ingresa un rango válido (números positivos y "desde" menor o igual que "hasta").</p>';
        return;
    }

    let primos = [];
    for (let i = desde; i <= hasta; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    
    if (primos.length > 0) {
        resultadoDiv.innerHTML = `<p class="text-success">Se encontraron ${primos.length} números primos:</p><strong>${primos.join(', ')}</strong>`;
    } else {
        resultadoDiv.innerHTML = '<p class="text-info">No se encontraron números primos en el rango especificado.</p>';
    }
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// --- Lógica de Serie Fibonacci ---
function ejecutarFibonacci() {
    const limite = parseInt(document.getElementById('fibonacciLimite').value);
    const resultadoDiv = document.getElementById('resultadoFibonacci');

    if (isNaN(limite) || limite < 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor, ingresa un número límite válido y positivo.</p>';
        return;
    }

    let a = 0, b = 1, resultado = [];
    if (limite >= 0) resultado.push(a);

    while (b <= limite) {
        resultado.push(b);
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    resultadoDiv.innerHTML = `<p class="text-success">Serie de Fibonacci hasta ${limite}:</p><strong>${resultado.join(', ')}</strong>`;
}

// --- Lógica de Cálculo de IMC ---
function ejecutarIMC() {
    const pesoLibras = parseFloat(document.getElementById('imcPeso').value);
    const alturaMetros = parseFloat(document.getElementById('imcAltura').value);
    const resultadoDiv = document.getElementById('resultadoIMC');

    if (isNaN(pesoLibras) || isNaN(alturaMetros) || pesoLibras <= 0 || alturaMetros <= 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor, ingresa valores válidos para peso y altura.</p>';
        return;
    }

    const pesoKg = pesoLibras * 0.453592;
    const imc = pesoKg / (alturaMetros * alturaMetros);
    let categoria = '';

    if (imc < 18.5) categoria = 'Bajo peso';
    else if (imc < 24.9) categoria = 'Peso normal';
    else if (imc < 29.9) categoria = 'Sobrepeso';
    else categoria = 'Obesidad';
    
    resultadoDiv.innerHTML = `<p class="text-success">Tu IMC es <strong>${imc.toFixed(2)}</strong>. Clasificación: <strong>${categoria}</strong>.</p>`;
}

// --- Lógica de Palabra Palíndroma ---
function ejecutarPalindromo() {
    const palabra = document.getElementById('palindromoPalabra').value;
    const resultadoDiv = document.getElementById('resultadoPalindromo');

    if (!palabra || palabra.trim().length === 0) {
        resultadoDiv.innerHTML = '<p class="text-danger">Por favor, ingresa una palabra.</p>';
        return;
    }

    const palabraLimpia = palabra.toLowerCase().replace(/\s/g, '');
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    if (palabraLimpia === palabraInvertida) {
        resultadoDiv.innerHTML = `<p class="text-success">¡Correcto! <strong>"${palabra}"</strong> es un palíndromo.</p>`;
    } else {
        resultadoDiv.innerHTML = `<p class="text-info"><strong>"${palabra}"</strong> no es un palíndromo. (Se lee como "${palabraInvertida}" al revés)</p>`;
    }
}