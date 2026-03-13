
  

function getArea() {
    // declaration

const ADMINSERVICE = 50.00;
  const TICKETPRICE = 250.00;


   let amount = document.getElementById("base").value;
    let adminfee = document.getElementById("adminfee").value;
    let total = Number(amount) * TICKETPRICE + Number(adminfee) ; 


// display results
    document.getElementById("total").value=total;
     document.getElementById("sub").value=TICKETPRICE;
}



