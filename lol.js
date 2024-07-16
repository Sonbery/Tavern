document.addEventListener('DOMContentLoaded', (event) => {
   		const inseridoinput = document.getElementById('oi');
 		const botao = document.getElementById('bott');

		
inseridoinput.addEventListener('keypress', function(event){

	if (event.key === 'Enter') {
	    event.preventDefault();
	    botao.click();

}


	
});


		
document.getElementById("opi").onclick = function() {
                window.location.href = "aba2.html";
            };


		
});


	
function m() {

	const resposta = document.getElementById('oi').value;
		
		document.getElementById('babo').innerText = resposta;

}
