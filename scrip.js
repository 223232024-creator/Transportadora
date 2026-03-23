function rastrear(){

let codigo = document.getElementById("codigo").value;
let resultado = document.getElementById("resultado");

if(codigo == "123"){
resultado.innerHTML = "🚚 Em transporte";
}
else if(codigo == "456"){
resultado.innerHTML = "✅ Entregue";
}
else{
resultado.innerHTML = "❌ Código não encontrado";
}

}


function enviarColeta(event){

event.preventDefault();

alert("📦 Solicitação enviada com sucesso!");

}