var nameInput = "";
var phoneInput = "";
var reg = [
    {
        name: "Matheus A Chipanski",
        phone: "(41) 99582-6962"
    }
];
let regList = document.querySelector('#lista_cadastro');
let botaoAdd = document.querySelector('#add');
let botaoRemove = document.querySelector('#exclude_button');

function refreshList() {
    for (let i = regList.childNodes.length - 1; i >= 0; i--) {
        regList.removeChild(regList.childNodes[i]);
    }

    for(let i = 0; i < reg.length; i++)
    {
        let newLi = document.createElement('li');
        newLi.classList.add("item_cadastro");
        let innerString = `<div class="dados_item_cadastro">\
                                <h3>${reg[i].name}</h3>\
                                <p>${reg[i].phone}</p>\
                           </div>\
                           <div class="envolta_botao">\
                                <button class="exclude_button">\
                                    <img src="../media/trashbin.png" alt="Excluir">\
                                </button>\
                           </div>`;
        newLi.innerHTML = innerString;
        thisButton = newLi.querySelector('.exclude_button');
        thisButton.onclick = function (){removeRegister(reg[i].name);}
        regList.appendChild(newLi);
    }
}

function register() {
    nameInput = document.querySelector('#name').value;
    document.querySelector('#name').value = '';
    phoneInput = document.querySelector('#phone').value;
    document.querySelector('#phone').value = '';

    if (nameInput && phoneInput){
        for(i = 0; i < reg.length; i++){
            if (reg[i].name == nameInput){
                alert('Mesmo nome!!!');
                return
            }
            if(reg[i].phone == phoneInput){
                alert('mesmo telefone....');
                return
            }
        }
    
        let new_reg = {name:"", phone:""};
        new_reg.name = nameInput;
        new_reg.phone = phoneInput;
        reg.push(new_reg);
        console.log(reg);
        refreshList();
        return
    }
    alert("Nenhum dos campos pode estar vazio. Por favor reveja seus dados");

}

function removeRegister(regName) {
    for(i = 0; i < reg.length; i++){
        if (reg[i].name == regName){
            reg.splice(i,1);
        }
    }
    refreshList();
}

botaoAdd.onclick = function () {
    register();
}

refreshList();