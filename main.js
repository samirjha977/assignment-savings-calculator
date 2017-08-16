function calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var year = parseFloat(document.getElementById("year").value);
    var rate = parseFloat(document.getElementById("percent").value);
    var resultsTable = document.getElementById("results_table");
    var innerHTML = "";
    innerHTML = "<table> <tr><th>Month</th><th> Interest</th> <th>Balance</th></tr>";
    for (i = 1; i <= (year * 12); i++) {
        var interest = (amount) * ((rate / 10) / 12);
        var balance = amount + interest;
        amount = balance;
        innerHTML += "<tr><td>" + i + "</td><td>" + interest.toFixed(2) + "</td><td>" + balance.toFixed(2) + "</td></tr>";
        resultsTable.innerHTML = innerHTML;
    }
}

function reset() {
    var resultsTable = document.getElementById("results_table");
    resultsTable.innerHTML = "";
    document.getElementById("amount").value = "";
    document.getElementById("year").value = "";
    document.getElementById("percent").value = "";


}