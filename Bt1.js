var id=0;
function sell()
{
    id++;
    var pname = document.getElementById("pname").value;
    var qty = document.getElementById("pqty").value;
    var price = document.getElementById("price").value;
    var discount = document.getElementById("p_discount").value;
    var sub = qty * price * (1 - discount / 100);

    var row = "<tr>";
        row+="<td>"+id +"</td>";
        row+="<td>"+pname+"</td>";
        row+="<td>"+qty+"</td>";
        row+="<td>"+price+"</td>";
        row+="<td>"+discount+"</td>";
        row+="<td>"+sub +"</td>";
    row+="</tr>";
        document.getElementById("table").innerHTML+=row;
}

function cancel(){
    document.getElementById('pname').value = ""; 
    document.getElementById('pqty').value = ""; 
    document.getElementById('price').value = ""; 
    document.getElementById('p_discount').value = ""; 


}