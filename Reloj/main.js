function reloj() {
    let clock = document.getElementById("clock");
    let hms = new Date();

    let hr = hms.getHours();
    let mi = hms.getMinutes();
    let se = hms.getSeconds();

    hr = (hr <= 9) ? ("0"+hr): hr;
    mi = (mi <= 9) ? ("0"+mi): mi;
    se = (se <= 9) ? ("0"+se): se;
    
    clock.innerHTML = "<font size = '5' face = 'arial' ><b>"+hr+" : "+mi+" : "+se+"</b></font>";
    
    setTimeout("reloj()",1000);
}