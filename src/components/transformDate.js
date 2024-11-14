export default function transformDate(date) {

    if(date === 1) {
        return "Segunda-Feira"
    } else if (date === 2) {
        return "Terça-Feira"
    } else if( date === 3) {
        return "Quarta-Feira"
    } else if(date === 4) {
        return "Quinta-Feira"
    } else if(date === 5) {
        return "Sexta-Feira"
    } else if(date === 6) {
        return "Sábado"
    } else {
        return "Domingo"
    }
    
}