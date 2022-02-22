	// AddEventListener - Escuta os eventos por componentens selecionados


	var AllPacientes = document.querySelectorAll(".paciente")
	var AllPacientesEspecifico = document.querySelectorAll("#tabela-paciente")

	//console.log(AllPacientes)

	for(var i = 0; i < AllPacientes.length; i++){

		var AllPaciente = AllPacientes[i]
		var nomePac = AllPaciente.querySelector(".info-nome")
		var formPeso = AllPaciente.querySelector(".info-peso")
		var formAltura = AllPaciente.querySelector(".info-altura")
		var showIMC = AllPaciente.querySelector(".info-imc")

		var pesoInvalido=true
		var altraInvalida = true

		resultado = formPeso.textContent / formAltura.textContent * formAltura.textContent
		console.log(resultado)


		if(formPeso.textContent < 0 || formPeso.textContent >= 1000){
			console.log('Peso invalido')
			pesoInvalido = false
			formPeso.textContent = 'Peso invalido'
			AllPaciente.style.backgroundColor = 'red'
		}
			
			if(altraInvalida && pesoInvalido){
				var imc = formPeso.textContent / (formAltura.textContent * formAltura.textContent)
				showIMC.textContent = imc
				console.log(showIMC)
				
			}else{
				showIMC.textContent = 'Erro ao calcular	'
			}
	}


// Adicionando e Listando dentro de uma tabela

var buscarBotao = document.querySelector("#adicionar-paciente")
buscarBotao.addEventListener("click",function(event){
	event.preventDefault() //Remove evento da pagina
	
	// Recuperar o id do form
	// value recupera o valor
	// CreateElement cria um elemento

	var form = document.querySelector("#form-adiciona")

	//Recuperar valor do html

	var nomez = form.nome.value
	console.log(nomez)
	var gorduraz = form.gordura.value
	console.log(gorduraz)
	var alturaz = form.altura.value
	console.log(alturaz)
	var pesoz = form.peso.value
	console.log(pesoz)
	// Variavel que recebera a lista que sera a linha

	var pacienteTr = document.createElement("tr")
	console.log(pacienteTr)
	
	// Crirar elementos no qual sera inserido

	var nomeTd = document.createElement("td")
	var pesoTd = document.createElement("td")
	var alturaTd = document.createElement("td")
	var gorduraTd = document.createElement("td")

	// Colocando os dados dentro de uma TD

	nomeTd.textContent = nomez;
	pesoTd.textContent = pesoz;
	alturaTd.textContent = alturaz;
	gorduraTd.textContent = gorduraz;


	// appendChild() insere um elemento filho

	pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)

	// console.log(nomeTd)
	// console.log(form.altura.value)

	// Add os valores dentro da tabela paciente

	var tabela = document.querySelector('#tabela-pacientes')
	// Adicionar as linhas dentro da tabela
	tabela.appendChild(pacienteTr)

})