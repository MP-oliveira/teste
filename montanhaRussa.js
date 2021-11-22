const idade = 20;
const temPatologia = false;
const altura = 180;
const estudante = false
const entrada = 2000

if(altura > 150 && (idade > 12 && idade < 65) && !temPatologia){
    if(!estudante || idade > 18){
        console.log(`Ponde entrar Pague R$ ${(entrada / 100).toFixed(2)}`);
    }else {
        console.log(`Pode entrar Pague R$ ${((entrada / 100) / 2).toFixed(2)}`);
    }
}else {
  console.log('ACESSON NEGADO')
}



