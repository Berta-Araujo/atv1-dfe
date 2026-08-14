
// const inputNome = document.getElementById('nome');
// const inputEmail = document.getElementById('email');
// const selectCategoria = document.getElementById('categoria');

// const previewNome = document.getElementById('previewNome');
// const previewEmail = document.getElementById('previewEmail');
// const previewCategoria = document.getElementById('previewCategoria');

// // inputNome.addEventListener('input', (e) => {
// //     const valor = e.target.value;
// //     previewNome.textContent = valor.trim() !== "" ? valor :
// //         "---";
// // });

// /*modificando o botão o que faltou ?

// btnModificar.addEventListener('click'. () => {

//     if (flag === 0) {
//         card1.classList.add ('bg-pink');
//         card2.classList.add ('bg-blue');
//         card3.classList.add ('bg-gray');
//         flag = 1;
//     }
//     else {
//         card1.classList.remove ('bg-pink');
//         card2.classList.remove ('bg-blue');
//         card3.classList.remove ('bg-gray');
//         flag = 0;

//     }

// });*/


// // EventListener - "Estou ouvindo o tempo todo, cada comando realizado no campo"

// inputEmail.addEventListener('input', () => {
//     const email = inputEmail.value;
//     if (email.includes('@') && email.includes('.')) {
//         previewEmail.textContent = 'Válido';  // se o email é valido, aparecerá uma borda verde e a palavra "válido"  no card 
//         previewEmail.className = "text-sucess fw-bold"; // em negrito 
//         inputEmail.style.borderColor = "green"; //borda em verde 

//     }
//     else {
//         previewEmail.textContent = "Inválido";
//         previewEmail.className = "text-danger"; //texto em vermelho, preview onde eu quero mostrar
//         inputEmail.style.borderColor = "red"; //borda vermelha
//     }
// });

// //esse usamos select ao invés de input , pq? 
// selectCategoria.addEventListener('change', (e) => {
//     const cat = e.target.value;
//     previewCategoria.textContent = cat || "Não Definida ";

//     if (cat === "VIP") {
//         previewCategoria.className = "badge bg-warning text-dark";
//     }

//     else if (cat === "Standart") {
//         previewCategoria.className = "badge bg-info text-dark";
//     }

//     else {
//         previewCategoria.className = "badge bg-secondary";
//     }

// });



//Movimentação utilizando JS , utilizado em jogos por exemplo

const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const gameArea = document.getElementById('gameArea');
const statusColisao = document.getElementById('statusColisao');

const counstep = document.getElementById ('counstep');

let posX = 120;
let posY = 50;
const velocidade = 10;

window.addEventListener('keydown', (e) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) { e.preventDefault(); }

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const playerWidth = player.offsetWidth;
    const playerHeight = player.offsetHeight;


    switch (e.key) {

        case 'ArrowUp':  // Apertou a tecla pra cima "onde está o objeto?"
            if (posY - velocidade >= 0) posY -= velocidade;
            break;

        case 'ArrowDown':
            if (posY + playerHeight + velocidade <= areaHeight) // aqui eu calculo o objeto + a velocidade + a altura, enquanto for > que a area, faça
                posY += velocidade;
            break;

        case 'ArrowLeft':
            if (posX - velocidade >= 0) posX -= velocidade;
            break;

        case 'ArrowRight':
            if (posX + playerWidth + velocidade <= areaWidth)
                posX += velocidade;
            break;

    }

    //converto em numero a minha string +1 , chamo meu objeto step
    counstep.textContent = Number (counstep.textContent) + 1;

    player.style.left = `${posX}px`;
    player.style.top = `${posY}px`;
    checarColisao();
    
});


function checarColisao() {

    const r1 = player.getBoundingClientRect();
    const r2 = obstacle.getBoundingClientRect();

    const colidiu = !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);

    if (colidiu) {
        statusColisao.textContent = "Status: COLISÃO DETECTADA!";

        statusColisao.className = "alert alert-danger mt-3 text-center fw-bold";

        player.style.backgroundColor = "#ffc107";

        alert("Morreu");
    }
    // location.reload();
    // window.location.reload();

    else {

        statusColisao.textContent = "Status: Fora de Colisão";
        statusColisao.className = "alert alert-secondary mt-3 text-center fw-bold";
        player.style.backgroundColor = "#0d6efd";

    }
}
