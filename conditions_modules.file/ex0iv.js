// Ex 4": 
 /* Verificar qual a nota atribuida: 
 Escreve um codigo que atribua notas aos estudantes com base nas suas pontuacoes de 0 a 100: 

 90-100 -> A 
 70-89 -> B 
 60 - 69 -> c 
 50-59 -> D 
 0 - 49 -> F */

 let score = 6651; 

 let grade; 

 if (score >= 90 && score <= 100) { 
    grade = "A";
 } else if (score >= 70 && score <= 89) {
    grade = "B";
 } else if (score >= 60 && score <= 69) {
    grade = "C";
 } else if (score >= 50 && score <= 59) {
    grade = "D";
 } else if (score >= 0 && score <= 49) {
    grade = "F";
 } else {
    grade = "Invalid score, contact your teacher";
 }

 console.log(`Your Score ${grade}`);