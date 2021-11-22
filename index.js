const temIngresso = true;
const taComOsPais = false;
const censura = 16;
const idade = 18;

if(temIngresso && idade >= censura || temIngresso && taComOsPais){
   console.log("PODE ENTRAR")
  }else {
    console.log("barrado")  
} 

const saldo = 230

console.log(saldo === 1 ? `Ele tem ${saldo} real` : `Ele tem ${saldo} reais`)

const ehAVista = false;
const preco = 10000;
const desconto = ehAVista ? preco * 0.1 : preco;
const parcelado = preco / 6;


if(ehAVista){
    console.log(`O valor do produto é R$ ${(preco - desconto)/ 100}`)
}else if(parcelado){
    console.log(`O valor da parecela é  de R$ ${(parcelado / 100).toFixed(2)} reais `)
}


