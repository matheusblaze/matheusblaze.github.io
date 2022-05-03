var emailIn = "";
var senhaIn = "";
var listaCadastros = [
    {
        email: "teste@teste.com",
        password: "123"
    },
    {
        email: ""
    }
];

function validation() {
    emailIn = document.getElementById("email").value;
    senhaIn = document.getElementById("senha").value;
    let bateu = false;
    
    for(i = 0; i < listaCadastros.length; i++){
        if (listaCadastros[i].email == emailIn && listaCadastros[i].password == senhaIn){
            window.open('home.html','_self');
            return;
        }
    }

    alert("Senha ou e-mail incorretos!")
}
