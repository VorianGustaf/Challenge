function findMedian(arr = []) {
    let nilaitengah = Math.floor((arr.length)/2) 

    if (arr.length % 2 === 0) {
        return (arr[nilaitengah - 1] + arr[nilaitengah]) / 2;
    } else {
        return arr[nilaitengah];
    }
  
 // dari function di atas, coba ubah berdasarkan langkah-langkah berikut
 // langkah 1 -- buat kondisi untuk memeriksa apakah index tengahnya itu ganjil atau tidak
 // langkah 2 -- jika genap, kembalikan nilai balikan tersebut
 // langkah 3 -- jika ganjil, maka cari angka sebelumnya untuk dibagi nilai rata-ratanya
 }
    
    // TEST CASES
    console.log(findMedian([1, 2, 3, 4, 5])) 
    console.log(findMedian([1, 3, 4, 10, 12, 13])) 
    console.log(findMedian([3, 4, 7, 6, 10])) 
    console.log(findMedian([1, 3, 3])) 
    console.log(findMedian([7, 7, 8, 8])) 