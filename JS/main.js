let calculate = document.getElementById("calculate");
let inputDate = document.getElementById('inputDate');
let output = document.getElementById('output');

calculate.onclick = () => {
   let d2,m2,y2,d1,m1,y1 ,d,m,y ;
   if (inputDate.value == '') {
      inputDate.focus()
   }else {
      let currentDate = new Date();
      let myDate = new Date(inputDate.value)
      d2=currentDate.getDate();
      m2=currentDate.getMonth()
      y2=currentDate.getFullYear()

      d1=myDate.getDate()
      m1=myDate.getMonth()
      y1=myDate.getFullYear()

      y = y2-y1 ;

      if(m2 >= m1){
         m = m2 - m1 ;
      }else {
         y--;
         m = m2-m1+12 ;
      }

      if (d2>=d1) {
         d = d2-d1 ;
      }else {
         if (m==0) {
            y--;
            m=11;
            d = d2-d1+30 ;
         }else {
            m--;
            d = d2-d1+30 ;
         }
      }

   }
   output.innerHTML = `
      You are <span>${y}</span> years , <span>${m}</span> months , <span>${d}</span> days OLD .
   `
}
