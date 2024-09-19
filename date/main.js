function numEsquerda(mau){
    return mau >= 10 ? mau : `0${mau}`
}

function formataData(data){
    const segundos = numEsquerda(data.getSeconds());
    const mes = numEsquerda(data.getMonth()+1);
    return `${segundos}/${mes}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil) 