function afterpara(){
    document.getElementById('afterclickpara').style.display='block';
    document.getElementById('readmore').style.display='none';
    document.getElementById('readless').style.display='block';
    document.getElementById('col-box').style.marginTop='200px';
}

function lesspara(){
    document.getElementById('readmore').style.display='block';
    document.getElementById('afterclickpara').style.display='none';
    document.getElementById('readless').style.display='none';
    document.getElementById('col-box').style.marginTop='0px';

    
}
