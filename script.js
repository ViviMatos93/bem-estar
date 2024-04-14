document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault(); 
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + mensagem);
    

    var toast = new bootstrap.Toast(document.getElementById('toast'), { 
        delay: 3000 
    });
    toast.show();
});
