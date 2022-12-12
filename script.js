 
function hitung() {  
  var harga= parseFloat(document.hitungdiskon.harga.value);  
  if (isNaN(harga)) {harga=0.0;}  

  var diskon=parseFloat(document.hitungdiskon.diskon.value);  
  if (isNaN(diskon)){diskon=0.0;}var hargadiskon= harga * diskon / 100 ;

  const harga1= parseFloat(document.hitungdiskon.diskon.value);
  const polaregex= /^[0-9]{1,2}$/  
  if (polaregex.test(harga1)){} 
    else{
      alert("harga dan diskon tidak boleh kosong ,  100% atau melebihi 100%.");
      input.harga1=0;
  }

  
  var hasil = harga - hargadiskon;  document.hitungdiskon.hasildiskon.value= hasil;  document.hitungdiskon.hrgdiskon.value= hargadiskon; 
}