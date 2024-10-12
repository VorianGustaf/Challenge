// function findMedian(angka){
//     angka = [1,2,3,4,5];
//     const pertama = angka.shift(1,2);
//     const kedua = angka.pop(4,5);
   
   
//     if (angka =[1,3,4,10,12,13]){
//     let hapus = angka.pop(1,3,4,10,12,13);
//     const push =angka.push(7);
//    return angka 
//    };
   
//    if(angka =[3,4,7,6,10]){
//    let del = angka.shift(3,4,6,10);
//    return angka 
//    };
   
//    if(angka =[1,3,3]){
//    let arrhapus = angka.pop();
//    const dua = angka.shift();
//    return angka;
//    };
   
//    if(angka = [7,7,8,8]){
//    let hapusarr= angka.pop(7,8);
//    const  tambah = angka.push(`7,5`);
//    return angka
//    };
    
//    }
function findMedian(arr = []) {
    //langka 1:mencari nilai tengang dengan mengintung index
   // langka 2: jika index telah di demukan  dibagi 2 jika nilai tengah ada dua makah 2 nilai tersebut ditambahkan lalu di bagi 2 
   //Langkah terakhir : jika dinilai sudah di bagi dua makah tampilkan hasil nya   
   
   
   // arr.length+1/2
   let nilaitengah = Math.floor((arr.length)/2) 
       arr.at(nilaitengah)
   return arr.at (nilaitengah)
//  mencari index (1,2,3,4,5) 
//-----------------0,1,2,3,4-----
//index (1,2,3,4,5,6) 
// ------0,1,2,3,4,5-----

//  cari berbedaan nilai yang ganjil dan yang genap 
//  jika nilai hasilnyae element nya genap gunakan rumus (arr.length/2) jika yang di dapatkan element nya  ganjil makah gunakan rumus (arr.length+1/2)
   }
   
   // TEST CASES
   console.log(findMedian([1, 2, 3, 4, 5])) 
   console.log(findMedian([1, 3, 4, 10, 12, 13])) 
   console.log(findMedian([3, 4, 7, 6, 10])) 
   console.log(findMedian([1, 3, 3])) 
   console.log(findMedian([7, 7, 8, 8])) 
