let fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function perguntar(){
	readline.question('Coloque o Caminho do Arquivo. E ao final do caminho digite o nome do arquivo que deseja criar(com o ".txt")', nameOfFIle => {
		console.log(` ${nameOfFIle}!`);
		readline.question('Coloque o Conteúdo do Arquivo', contents => {
			console.log(` ${contents}!`);
			//readline.close();
			criandoArquivo(nameOfFIle, contents, false);
		})
		
		
	  });
	};
function pergunta2(){
readline.question('Coloque o Caminho do Arquivo que Você quer pesquisar(com o ".txt" no fim)', nameOfFIlee => {
	console.log(` ${nameOfFIlee}!`);
	
	readline.question('coloque o conteúdo do arquivo', conteudoAlterado => {
		readline.close();
		leitura(nameOfFIlee, conteudoAlterado); 
		});	
	});	
	 
};

function perguntarModificar(){
	readline.question('Quer Modificar algum arquivo? sim = 1 não = 2', respUSer => {
		if(respUSer == '1' ){
			pergunta2()
		}
		
		});	  
}
	  

let path = perguntar();


function criandoArquivo(path, contents, alterar){
	
if(alterar==false){
	fs.writeFile(`${path}`,`${contents}`, function(err){
		if(err){
			  return console.log('erro')
		  }
		  console.log('Arquivo Criado');
		  perguntarModificar();
	  });
}else{
	fs.writeFile(`${path}`,`${contents}`, function(err){
		if(err){
			  return console.log('erro')
		  }
		  console.log('Arquivo Modificado');
		  
	  });
} 
}
function leitura(path, conteudoAlterado){
	fs.readFile(`${path}`, 'utf8', function(err,data){
		
		criandoArquivo(path, conteudoAlterado, true);
	});
}



