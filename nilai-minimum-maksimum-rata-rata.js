const hasilUjianJohn = [75, 80, 79, 90]
const hasilUjianEd = [66, 77, 88, 99]

const gabunganHasilUjian = [...hasilUjianJohn, ...hasilUjianEd]

// cari nilai terendah, tertinggi, dan rata-rata menggunakan perulangan dan buatkan flowchartnya.
let nilaiMinimum = gabunganHasilUjian[0]
let nilaiMaksimum = gabunganHasilUjian[0]
let nilaiRataRata = 0

for (i=0; i<gabunganHasilUjian.length; i++) {
    nilai = gabunganHasilUjian[i]

    nilaiRataRata = (nilaiRataRata + nilai) / gabunganHasilUjian.length

    if (nilai > nilaiMaksimum) {
        nilaiMaksimum = nilai
    } else if (nilai < nilaiMinimum) {
        nilaiMinimum = nilai
    }   
}



console.log(nilaiMaksimum)
console.log(nilaiMinimum)
console.log(nilaiRataRata)
