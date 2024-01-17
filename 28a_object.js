let mobil1 = {
    merk: 'toyota',
    model:'avanza',
    tipe:'G',
    kondisi:'70'
}

console.log('merk   :'+mobil1.merk);
console.log('model  :'+mobil1.model);
console.log('tipe   :'+mobil1.tipe);
 
if(mobil1.kondisi<=70){
    console.log('maaf,kondisi mobil anda tidak bisa kami terima');
}else if(mobil1.kondisi>70){
    console.log('selamat,kondisi mobil anda bisa kami terima');
}
