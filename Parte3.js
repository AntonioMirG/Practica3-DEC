const icon = document.getElementById("Parte3-Imagen");

let inicio = { x: 0, y: 0 };

let final = { x: 0, y: 0 };

icon.style.position = 'absolute';

icon.style.left = inicio.x + 'px';

icon.style.top = inicio.y + 'px';

document.addEventListener("click", (event) => {

    if (inicio.x === 0 && inicio.y === 0) {

        inicio = { x: event.clientX, y: event.clientY };

    } else {

        final = { x: event.clientX, y: event.clientY };
    }
});

icon.addEventListener("click", () => {

    moverIcono();
    
});

function moverIcono() {

    let i = 0;

    const pasos = 50;

    const deltaX = final.x - inicio.x;

    const deltaY = final.y - inicio.y;

    function moverPaso() {

        if (i <= pasos) {

            let x = inicio.x + (deltaX * (i / pasos));

            let y = inicio.y + (deltaY * (i / pasos));

            icon.style.left = x + 'px';

            icon.style.top = y + 'px';

            i++;

            if (i <= pasos) {

                setTimeout(moverPaso, 20);
            }
        }
    }

    moverPaso();
}
