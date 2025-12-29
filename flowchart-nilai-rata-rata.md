# Flowchart mencari nilai maksimum dan minimum

```mermaid
flowchart TD
start@{shape: circle, label: "start"}
input@{shape: lean-r, label: "gabunganHasilUjian = []"}
initLoop@{shape: lean-r, label: "i = 0, nilaiRataRata = 0"}
conditionLoop@{shape: diamond, label: "i <= gabunganHasilUjian.length"}
pengubah@{shape: rect, label: i++}
rataRata@{shape: lean-r, label: "nilaiRataRata += gabunganHasilUjian[i+1]"}
stop@{shape: dbl-circ, label: "stop"}

start-->input
input-->initLoop
initLoop-->conditionLoop
conditionLoop--True-->rataRata
rataRata-->pengubah
pengubah-->conditionLoop
conditionLoop--False-->stop
```