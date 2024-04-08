const verificar= require('./verificador.js');

async function gerarCartoes(bin) {
    const cartoes = [];
  
    try {
      const promessas = [];
      for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
        const cvv = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
        const mes = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        const ano = Math.floor(Math.random() * (33 - 25 + 1)) + 25;
        const cartaoVerificado = await verificar(`${bin}${numeroAleatorio}`);
        promessas.push(`${cartaoVerificado}|${mes.toString().padStart(2, '0')}/${ano}|${cvv.toString().padStart(3, '0')}`); 
      }
  
      const cartoesVerificados = await Promise.all(promessas); 
      cartoes.push(...cartoesVerificados); 
    } catch (error) {
      console.error('Erro durante a geração do cartão:', error);
    }
  
    return cartoes;
  }
  
  module.exports = gerarCartoes;