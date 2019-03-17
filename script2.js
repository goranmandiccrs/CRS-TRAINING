window.onload = function () {
  var urlString = window.location.search;
  if (!urlString) {
    return;
  }
  console.log((urlString));
  var items = urlString.substring(1).split('&');
  console.log(items);

  var first = '';
  var last = '';
  var email = '';
  var city = '';
  var state = '';

  for (var i = 0; i < items.length; i++) {
    var values = items[i].split('=');
    if (values[0] == 'name') {
      first = values[1];
    }
    if (values[0] == 'last') {
      last = values[1];
    }
    if (values[0] == 'email') {
      email = values[1];
    }
    if (values[0] == 'city') {
      city = values[1];
    }
    if (values[0] == 'state') {
      state = values[1];
    }
  }

  var table = document.getElementById("myTable");

  table.innerHTML +=
    `<table>
    <thead>
      <tr>
        <td>Ime</td>
        <td>Prezime</td>
        <td>E-mail</td>
        <td>City</td>
        <td>State</td>
      </tr>  
    </thead>
    <tbody>
      <tr><td> ${first} </td> <td> ${last} </td> <td> ${email} </td> <td> ${city} </td> <td> ${state} </td> </tr>
    <tbody>
  </table>`;
}

