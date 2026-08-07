
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const selectCategoria = document.getElementById('categoria');

const previewNome = document.getElementById('previewNome');
const previewEmail = document.getElementById('previewEmail');
const previewCategoria = document.getElementById('previewCategoria');

inputNome.addEventListener('input', (e) => {
    const valor = e.target.value;
    previewNome.textContent = valor.trim () !== "" ? valor :  
    "---";
});


// EventListener - "Estou ouvindo o tempo todo, cada comando realizado no campo"
inputEmail.addEventListener('input', () => {
    const email = inputEmail.value;
    if(email.includes('@') && email.includes('.')){
        previewEmail.textContent = 'Válido';  // se o email é valido, aparecerá uma borda verde e a palavra "válido"  no card 
        previewEmail.className = "text-sucess fw-bold"; // em negrito 
        inputEmail.style.borderColor = "green"; //borda em verde 

    }
    else {
        previewEmail.textContent = "Inválido";
        previewEmail.className = "text-danger"; //texto em vermelho, preview onde eu quero mostrar
        inputEmail.style.borderColor = "red"; //borda vermelha
    }
});

//esse usamos select ao invés de input , pq? 
selectCategoria.addEventListener('change', (e) => {
    const cat = e.target.value;
    previewCategoria.textContent = cat || "Não Definida ";

    if (cat === "VIP"){
        previewCategoria.className = "badge bg-warning text-dark";
    }

    else if (cat === "Standart") {
        previewCategoria.className = "badge bg-info text-dark"; 
    }   

    else {
        previewCategoria.className = "badge bg-secondary";
    }

})

//Movimentação utilizando JS , utilizado em jogos por exemplo
const player = document.getElementById ('player');
