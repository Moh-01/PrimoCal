function findTotal(){
    var cpr = parseInt(document.getElementById('cpr').value);
    var cpt = parseInt(document.getElementById('cpt').value);
    var ndb = parseInt(document.getElementById('ndb').value);
    var wlkm = parseInt(document.getElementById('wlkm').value);
    var abs9 = parseInt(document.getElementById('abs9').value);
    var abs10 = parseInt(document.getElementById('abs10').value);
    var abs11 = parseInt(document.getElementById('abs11').value);
    var abs12 = parseInt(document.getElementById('abs12').value);



    if (isNaN(cpr) || (cpr === " ") || isNaN(cpt) || (cpt === " ") || isNaN(ndb) || (ndb === " ") || isNaN(wlkm) || (wlkm === " ") || isNaN(abs9) || (abs9 === " ") || isNaN(abs10) || (abs10 === " ")  
    || isNaN(abs11) || (abs12 === " ") || isNaN(abs9) || (abs9 === " ")) 
    {

        document.getElementById('Total').innerHTML = "x0";
    }
    else
    {
        abyss_total = 0;
        result = cpr + (ndb*60) + (wlkm*90);

        if(abs9 == 3)
        {
            abyss_total +=50;
        }
        else if(abs9 == 6)
        {
            abyss_total +=100;
        } 
        else if(abs9 == 9)
        {
            abyss_total +=150;
        }

        if(abs10 == 3)
        {
            abyss_total +=50;
        }
        else if(abs10 == 6)
        {
            abyss_total +=100;
        } 
        else if(abs10 == 9)
        {
            abyss_total +=150;
        }

        if(abs11 == 3)
        {
            abyss_total +=50;
        }
        else if(abs11 == 6)
        {
            abyss_total +=100;
        } 
        else if(abs11 == 9)
        {
            abyss_total +=150;
        }    

        if(abs12 == 3)
        {
            abyss_total +=50;
        }
        else if(abs12 == 6)
        {
            abyss_total +=100;
        } 
        else if(abs12 == 9)
        {
            abyss_total +=150;
        }    

        total = result  + abyss_total;

        if(document.getElementById('bp').checked)
        {
            total += 1320;
        }

        if(document.getElementById('nb').checked)
        {
            total += 1200;
        }

        document.getElementById('Total_pr').innerHTML = "x" + Math.floor(total);
        document.getElementById('Total_wish').innerHTML = "x" + (Math.floor(total/160) + cpt );
    }
}
