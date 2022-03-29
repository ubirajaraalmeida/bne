/* Função Validar */
function validar() {
    var nome = document.getElementById("name");
    var email = document.getElementById("email");
	var feel = document.getElementById("feel");
	var work = document.getElementById("work");
	
	var well = document.getElementById("well").checked;
	var confused = document.getElementById("confused").checked;
	var tired_out = document.getElementById("tired_out").checked;
	var excited = document.getElementById("excited").checked;
	var elate = document.getElementById("elate").checked;
	
	var experience = document.getElementById("experience");


    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return false;
    }
	
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return false;
    }else if(!IsEmail(email.value)){
	    alert("E-mail informado inválido!");
        email.focus();
        return false;
	}
	
	 if (feel.value == "") {
		alert("Como você se sente não foi informado");
        feel.focus();
        return false;
    }else if(feel.value > 10 || feel.value < 1){
		alert("Valor informado inválido! Por favor informe um valor de 1 a 10");
        feel.focus();
        return false;
	}
	
	 if (work.value == "") {
		alert("Você trabalha em qual cômodo não foi informado");
        work.focus();
        return false;
    }
	
	if(well == false && confused == false && tired_out == false && excited == false && elate == false){
		alert("É necessário informar ao menos uma opção de como você está se sentindo");
        well.focus();
        return false;
	}
	
    if (experience.value == "") {
		alert("Descrição da experiência não foi informada");
        experience.focus();
        return false;
    }
	
    alert("Obrigado "+nome.value+", agradecemos sua resposta, uma cópia das respostas foi enviada para o "+email.value+".");
}

function IsEmail(email){
   var re = /\S+@\S+\.\S+/;
  return re.test(email);
}