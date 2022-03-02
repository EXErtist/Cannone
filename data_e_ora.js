//Funzione per stampare data e ora
function displayDate()
{
    document.getElementById("demo").innerHTML="<p>Current date and time"+ Date()+ "</p>";
}
        
        var d=new Date();
        var time = d.getHours();
        if (time<10)
        {
            document.write("<b>Good morning</b>");
        }
        else if (time>=10 && time<16)
        {
            document.write("<b>Good day</b>");
        }
        else
        {
            document.write("<b>Hello world!</b>");
        }

        /*var semaforo = "rosso";
        var azione= (semaforo == "rosso") ? "stop" : "avanti";
        document.write(azione);
        */

        var d = new Date();
        var theDay=d.getDay();
        switch (theDay)
        {
            case 5:
            document.write("<b>Finally Friday</b>");
            break;
            case 6:
            document.write("<b>Super Saturday</b>");
            break;
            case 0:
            document.write("<b>Sleepy Sunday</b>");
            break;
            default:
            document.write("<b>I'm really looking forward...</b>");
            
        }
    
        /* for (i=0; i<=5; i++)
        {
            document.write("Il numero è" + i);
            document.write("<br /");
        }*/

        i=0;
        while (i<=5)
        {
            document.write("Il numero è" + i);
            document.write("<br /");
            i++;
        }
        


/*
Commento
su più
righe 
*/