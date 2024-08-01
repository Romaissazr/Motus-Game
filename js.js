var c='';
var score=0;
var juste=0;

window.onload=motus();
function fermer()
{
    window.diag1.style.display="none";
}
function continu()
{
    effacermotus();
    motus();
    window.diag1.style.display="none";
}

function motus()
{
    var r=0;
    r=Math.floor(Math.random()*100)+1;
    if (r==1) {c='Sroad'} else
    if (r==2) {c='Cheap'} else
    if (r==3) {c='Coach'} else
    if (r==4) {c='Daily'} else
    if (r==5) {c='Broke'} else
    if (r==6) {c='Check'} else
    if (r==6) {c='Coast'} else
    if (r==7) {c='Dance'} else
    if (r==8) {c='Brown'} else
    if (r==9) {c='Chest'} else
    if (r==10) {c='Could'} else
    if (r==11) {c='Build'} else
    if (r==12) {c='Chief'} else
    if (r==13) {c='Entry'} else
    if (r==14) {c='Forth'} else
    if (r==15) {c='Group'} else
    if (r==16) {c='Delay'} else
    if (r==17) {c='Equal'} else
    if (r==18) {c='Forty'} else
    if (r==19) {c='Grown'} else
    if (r==20) {c='Depth'} else
    if (r==21) {c='Error'} else
    if (r==22) {c='Forum'} else
    if (r==23) {c='Dozen'} else
    if (r==24) {c='Exact'} else
    if (r==25) {c='Frank'} else
    if (r==26) {c='Guide'} else
    if (r==27) {c='Draft'} else
    if (r==28) {c='Exist'} else
    if (r==29) {c='Fraud'} else
    if (r==30) {c='Happy'} else
    if (r==31) {c='Drama'} else
    if (r==32) {c='Extra'} else
    if (r==33) {c='Fresh'} else
    if (r==34) {c='Which'} else
    if (r==35) {c='Young'} else
    if (r==36) {c='Video'} else
    if (r==37) {c='Worse'} else
    if (r==38) {c='While'} else
    if (r==39) {c='Youth'} else
    if (r==40) {c='Virus'} else
    if (r==41) {c='Worst'} else
    if (r==42) {c='White'} else
    if (r==43) {c='Worth'} else 
    if (r==44) {c='Visit'} else 
    if (r==45) {c='Would'} else 
    if (r==46) {c='Fresh'} else
    if (r==47) {c='Drawn'} else
    if (r==48) {c='Faith'} else
    if (r==49) {c='Front'} else
    if (r==50) {c='Heart'} else
    if (r==51) {c='Dream'} else
    if (r==52) {c='False'} else
    if (r==53) {c='Fruit'} else
    if (r==54) {c='Heavy'} else 
    if (r==55) {c='Dress'} else
    if (r==56) {c='Fault'} else
    if (r==57) {c='fully'} else
    if (r==58) {c='Night'} else   
    if (r==59) {c='Drink'} else  
    if (r==60) {c='Field'} else
    if (r==61) {c='Giant'} else
    if (r==62) {c='Horse'} else
    if (r==63) {c='Drive'} else
    if (r==64) {c='Fifth'} else
    if (r==65) {c='Given'} else
    if (r==66) {c='Hotel'} else
    if (r==67) {c='Drove'} else
    if (r==68) {c='Glass'} else
    if (r==69) {c='House'} else
    if (r==70) {c='Usual'} else
    if (r==71) {c='Train'} else
    if (r==72) {c='Wheel'} else
    if (r==73) {c='Wrote'} else
    if (r==74) {c='Valid'} else
    if (r==75) {c='World'} else
    if (r==76) {c='Where'} else
    if (r==77) {c='Yield'} else
    if (r==78) {c='Value'} else
    if (r==79) {c='Worry'} else
    if (r==80) {c='Which'} else
    if (r==81) {c='Young'} else
    if (r==82) {c='Admit'} else
    if (r==83) {c='Along'} else
    if (r==84) {c='Audio'} else
    if (r==85) {c='Below'} else
    if (r==86) {c='Adopt'} else    
    if (r==87) {c='Alter'} else    
    if (r==88) {c='Audit'} else    
    if (r==89) {c='Bench'} else    
    if (r==90) {c='Adult'} else    
    if (r==91) {c='Among'} else    
    if (r==92) {c='Alive'} else    
    if (r==93) {c='Array'} else    
    if (r==94) {c='Begin'} else    
    if (r==95) {c='Actor'} else    
    if (r==96) {c='Allow'} else    
    if (r==97) {c='Aside'} else    
    if (r==98) {c='Begun'} else    
    if (r==99) {c='Acute'} else    
    if (r==100) {c='Alone'} ;
    
    c=c.toUpperCase();
   
    window.l11.value=c[0];window.l11.style.backgroundColor="lime";
    window.l12.focus();
}
function eval (j)
{
    if (juste < 5)
{
        window.diag1.style.display="block";
        document.getElementById("lab2").innerHTML="GAME OVER .<br> Sorry, you lost the part. <br> The word hidden is : "+c+" , Do you want to continue the part?";
}
else 
{ 
      if (j==1){score=score+10}else
      if (j==2){score=score+8}else
      if (j==3){score=score+6}else
      if (j==4){score=score+4}else
      if (j==5){score=score+2}else
      if (j==6){score=score+1};
    
    window.scr.value='Score:'+score.toString();
    document.getElementById("lab2").innerHTML=
    "Congrats ! you have won . <br> Do you want to play another part ?";
    window.diag1.style.display="block";}
}
function saut (val)
{
    if(val==11){window.l11.value="" ; window.l11.focus();} else
    if(val==12){window.l12.value="" ; window.l12.focus();} else
    if(val==13){window.l13.value="" ; window.l13.focus();} else
    if(val==14){window.l14.value="" ; window.l14.focus();} else
    if(val==15){window.l15.value="" ; window.l15.focus();} else
    if(val==21){window.l21.value="" ; window.l21.focus();} else
    if(val==22){window.l22.value="" ; window.l22.focus();} else
    if(val==23){window.l23.value="" ; window.l23.focus();} else
    if(val==24){window.l24.value="" ; window.l24.focus();} else
    if(val==25){window.l25.value="" ; window.l25.focus();} else
    if(val==31){window.l31.value="" ; window.l31.focus();} else
    if(val==32){window.l32.value="" ; window.l32.focus();} else
    if(val==33){window.l33.value="" ; window.l33.focus();} else
    if(val==34){window.l34.value="" ; window.l34.focus();} else
    if(val==35){window.l35.value="" ; window.l35.focus();} else
    if(val==41){window.l41.value="" ; window.l41.focus();} else
    if(val==42){window.l42.value="" ; window.l42.focus();} else
    if(val==43){window.l43.value="" ; window.l43.focus();} else
    if(val==44){window.l44.value="" ; window.l44.focus();} else
    if(val==45){window.l45.value="" ; window.l45.focus();} else
    if(val==51){window.l51.value="" ; window.l51.focus();} else
    if(val==52){window.l52.value="" ; window.l52.focus();} else
    if(val==53){window.l53.value="" ; window.l53.focus();} else
    if(val==54){window.l54.value="" ; window.l54.focus();} else
    if(val==55){window.l55.value="" ; window.l55.focus();} else
    if(val==61){window.l61.value="" ; window.l61.focus();} else
    if(val==62){window.l62.value="" ; window.l62.focus();} else
    if(val==63){window.l63.value="" ; window.l63.focus();} else
    if(val==64){window.l64.value="" ; window.l64.focus();} else
    if(val==65){window.l65.value="" ; window.l65.focus();} ;
}
function verif (j)
{
    var p='';
    juste=0;
    if(j==1){p=window.l11.value+window.l12.value+window.l13.value+window.l14.value+window.l15.value} else
    if(j==2){p=window.l21.value+window.l22.value+window.l23.value+window.l24.value+window.l25.value} else
    if(j==3){p=window.l31.value+window.l32.value+window.l33.value+window.l34.value+window.l35.value} else
    if(j==4){p=window.l41.value+window.l42.value+window.l43.value+window.l44.value+window.l45.value} else
    if(j==5){p=window.l51.value+window.l52.value+window.l53.value+window.l54.value+window.l55.value} else
    if(j==6){p=window.l61.value+window.l62.value+window.l63.value+window.l64.value+window.l65.value} ;
    p=p.toUpperCase();
    for (var i1 = 0; i1 <= 4; i1++ )
    {
    for (i2= 0; i2 <= 4; i2++ ) 
    {    
    if(p[i1]===c[i2] && i1!=i2)
    {
        if(i1==0 && j==1) {window.l11.style.backgroundColor="orange";} else
        if(i1==1 && j==1) {window.l12.style.backgroundColor="orange";} else     
        if(i1==2 && j==1) {window.l13.style.backgroundColor="orange";} else    
        if(i1==3 && j==1) {window.l14.style.backgroundColor="orange";} else     
        if(i1==4 && j==1) {window.l15.style.backgroundColor="orange";} else

        if(i1==0 && j==2) {window.l21.style.backgroundColor="orange";} else
        if(i1==1 && j==2) {window.l22.style.backgroundColor="orange";} else     
        if(i1==2 && j==2) {window.l23.style.backgroundColor="orange";} else    
        if(i1==3 && j==2) {window.l24.style.backgroundColor="orange";} else     
        if(i1==4 && j==2) {window.l25.style.backgroundColor="orange";} else

        if(i1==0 && j==3) {window.l31.style.backgroundColor="orange";} else
        if(i1==1 && j==3) {window.l32.style.backgroundColor="orange";} else     
        if(i1==2 && j==3) {window.l33.style.backgroundColor="orange";} else    
        if(i1==3 && j==3) {window.l34.style.backgroundColor="orange";} else     
        if(i1==4 && j==3) {window.l35.style.backgroundColor="orange";} else

        if(i1==0 && j==4) {window.l41.style.backgroundColor="orange";} else
        if(i1==1 && j==4) {window.l42.style.backgroundColor="orange";} else     
        if(i1==2 && j==4) {window.l43.style.backgroundColor="orange";} else    
        if(i1==3 && j==4) {window.l44.style.backgroundColor="orange";} else     
        if(i1==4 && j==4) {window.l45.style.backgroundColor="orange";} else

        if(i1==0 && j==5) {window.l51.style.backgroundColor="orange";} else
        if(i1==1 && j==5) {window.l52.style.backgroundColor="orange";} else     
        if(i1==2 && j==5) {window.l53.style.backgroundColor="orange";} else    
        if(i1==3 && j==5) {window.l54.style.backgroundColor="orange";} else     
        if(i1==4 && j==5) {window.l55.style.backgroundColor="orange";} else

        if(i1==0 && j==6) {window.l61.style.backgroundColor="orange";} else
        if(i1==1 && j==6) {window.l62.style.backgroundColor="orange";} else     
        if(i1==2 && j==6) {window.l63.style.backgroundColor="orange";} else    
        if(i1==3 && j==6) {window.l64.style.backgroundColor="orange";} else     
        if(i1==4 && j==6) {window.l65.style.backgroundColor="orange";};

    }    
    }    
    };
    for (i1= 0; i1 <= 4; i1++ ) 
    {
    if(p[i1]===c[i1] )
    {
        juste++;
        if(i1==0 && j==1) {window.l11.style.backgroundColor="lime";} else
        if(i1==1 && j==1) {window.l12.style.backgroundColor="lime";} else     
        if(i1==2 && j==1) {window.l13.style.backgroundColor="lime";} else    
        if(i1==3 && j==1) {window.l14.style.backgroundColor="lime";} else     
        if(i1==4 && j==1) {window.l15.style.backgroundColor="lime";} else

        if(i1==0 && j==2) {window.l21.style.backgroundColor="lime";} else
        if(i1==1 && j==2) {window.l22.style.backgroundColor="lime";} else     
        if(i1==2 && j==2) {window.l23.style.backgroundColor="lime";} else    
        if(i1==3 && j==2) {window.l24.style.backgroundColor="lime";} else     
        if(i1==4 && j==2) {window.l25.style.backgroundColor="lime";} else

        if(i1==0 && j==3) {window.l31.style.backgroundColor="lime";} else
        if(i1==1 && j==3) {window.l32.style.backgroundColor="lime";} else     
        if(i1==2 && j==3) {window.l33.style.backgroundColor="lime";} else    
        if(i1==3 && j==3) {window.l34.style.backgroundColor="lime";} else     
        if(i1==4 && j==3) {window.l35.style.backgroundColor="lime";} else

       if(i1==0 && j==4) {window.l41.style.backgroundColor="lime";} else
       if(i1==1 && j==4) {window.l42.style.backgroundColor="lime";} else     
       if(i1==2 && j==4) {window.l43.style.backgroundColor="lime";} else    
       if(i1==3 && j==4) {window.l44.style.backgroundColor="lime";} else     
       if(i1==4 && j==4) {window.l45.style.backgroundColor="lime";} else

       if(i1==0 && j==5) {window.l51.style.backgroundColor="lime";} else
       if(i1==1 && j==5) {window.l52.style.backgroundColor="lime";} else     
       if(i1==2 && j==5) {window.l53.style.backgroundColor="lime";} else    
       if(i1==3 && j==5) {window.l54.style.backgroundColor="lime";} else     
       if(i1==4 && j==5) {window.l55.style.backgroundColor="lime";} else

       if(i1==0 && j==6) {window.l61.style.backgroundColor="lime";} else
       if(i1==1 && j==6) {window.l62.style.backgroundColor="lime";} else     
       if(i1==2 && j==6) {window.l63.style.backgroundColor="lime";} else    
       if(i1==3 && j==6) {window.l64.style.backgroundColor="lime";} else     
       if(i1==4 && j==6) {window.l65.style.backgroundColor="lime";};    
    }
    }  
    if(juste<5)
    {
        if (j==1){window.l21.value="";window.l21.focus();}else  
        if (j==2){window.l31.value="";window.l31.focus();}else  
        if (j==3){window.l41.value="";window.l41.focus();}else  
        if (j==4){window.l51.value="";window.l51.focus();}else  
        if (j==5){window.l61.value="";window.l61.focus();}else  
        if (j==6){window.l11.value="";window.l11.focus(); eval(j)};                                                       
    }  
    else eval(j);  
}
function effacermotus()
{
    window.l11.value="";window.l11.style.backgroundColor="violet";
    window.l12.value="";window.l12.style.backgroundColor="violet";
    window.l13.value="";window.l13.style.backgroundColor="violet";
    window.l14.value="";window.l14.style.backgroundColor="violet";
    window.l15.value="";window.l15.style.backgroundColor="violet";
    
    window.l21.value="";window.l21.style.backgroundColor="violet";
    window.l22.value="";window.l22.style.backgroundColor="violet";
    window.l23.value="";window.l23.style.backgroundColor="violet";
    window.l24.value="";window.l24.style.backgroundColor="violet";
    window.l25.value="";window.l25.style.backgroundColor="violet";

    window.l31.value="";window.l31.style.backgroundColor="violet";
    window.l32.value="";window.l32.style.backgroundColor="violet";
    window.l33.value="";window.l33.style.backgroundColor="violet";
    window.l34.value="";window.l34.style.backgroundColor="violet";
    window.l35.value="";window.l35.style.backgroundColor="violet";

    window.l41.value="";window.l41.style.backgroundColor="violet";
    window.l42.value="";window.l42.style.backgroundColor="violet";
    window.l43.value="";window.l43.style.backgroundColor="violet";
    window.l44.value="";window.l44.style.backgroundColor="violet";
    window.l45.value="";window.l45.style.backgroundColor="violet";

    window.l51.value="";window.l51.style.backgroundColor="violet";
    window.l52.value="";window.l52.style.backgroundColor="violet";
    window.l53.value="";window.l53.style.backgroundColor="violet";
    window.l54.value="";window.l54.style.backgroundColor="violet";
    window.l55.value="";window.l55.style.backgroundColor="violet";

    window.l61.value="";window.l61.style.backgroundColor="violet";
    window.l62.value="";window.l62.style.backgroundColor="violet";
    window.l63.value="";window.l63.style.backgroundColor="violet";
    window.l64.value="";window.l64.style.backgroundColor="violet";
    window.l65.value="";window.l65.style.backgroundColor="violet";
 }
