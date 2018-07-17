function printContent(el) {
    var restorepage = document.body.innerHTML ;
    var printcontent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent ;
    window.print();
    console.log('Hello Ihave printed.')
 //Restore orignal HTML
document.body.innerHTML = restorepage;

}




