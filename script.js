function checarSigno(){
    let dia_form = document.getElementById('user_day').value
    let mes_form = document.getElementById('user_month').value
    let res = document.getElementById('result_sign')


    if(dia_form === '' && mes_form === ''){
        window.alert('Insira valores válidos!')
    }

    if((dia_form >= 21 && mes_form == 3) || (dia_form <= 20 && mes_form == 4)){
        result_sign.src = 'assets/Aries.png'  //ARIES
    }
    if((dia_form >= 21 && mes_form == 4) || (dia_form <= 20 && mes_form == 5)){
        result_sign.src = 'assets/Touro.png'
        //TOURO
    }
    if((dia_form >= 21 && mes_form == 5) || (dia_form <= 20 && mes_form == 6)){
        result_sign.src = 'assets/Gêmeos.png'
        //GEMEOS
    } 
    if((dia_form >= 21 && mes_form == 6) || (dia_form <= 22 && mes_form == 7)){
        result_sign.src = 'assets/Câncer.png'
        //CANCER 
    }   
    if((dia_form >= 23 && mes_form == 7) || (dia_form <= 22 && mes_form == 8)){
        result_sign.src = 'assets/Leão.png'
        //LEAO
    }                                                                                              
          
    if((dia_form >= 23 && mes_form == 8) || (dia_form <= 22 && mes_form == 9)){
        result_sign.src = 'assets/Virgem.png'
        //VIRGEM
    }
    if((dia_form >= 23 && mes_form == 9) || (dia_form <= 22 && mes_form == 10)){
        result_sign.src = 'assets/Libra.png'
        //LIBRA
    }
    if((dia_form >= 23 && mes_form == 10) || (dia_form <= 21 && mes_form == 11)){
        result_sign.src = 'assets/Escorpiao.png'
        //ESCORPIAO
    }
    if((dia_form >= 22 && mes_form == 11) || (dia_form <= 21 && mes_form == 12)){
        result_sign.src = 'assets/Sagitário.png'
        //SAGITARIO
    }
    if((dia_form >= 22 && mes_form == 12) || (dia_form <= 21 && mes_form == 1)){
        result_sign.src = 'assets/Capricornio.png'
        //CAPRICORNIO
    }
    if((dia_form >= 21 && mes_form == 1) || (dia_form <= 18 && mes_form == 2)){
        result_sign.src = 'assets/Aquário.png'
        //AQUARIO
    }
    if((dia_form >= 19 && mes_form == 2) || (dia_form <= 20 && mes_form == 3)){
        result_sign.src = 'assets/Peixes.png'
        //PEIXES
    }
}