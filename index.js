//to retrive a data and consume it we use .then method
//iske andr ek function call krna hota hai w a parameter ,so pura api ka data api data mai ajayega
//if promise gets rejected so catch mai jayega wo
fetch("https://api.covid19api.com/summary")
  .then((apidata) => {
    // console.log(apidata);
    return apidata.json();
  })
  .then((actualdata) => {
    const mydata = actualdata.Countries[76];
    document.getElementById("Total-cases").innerHTML = mydata.TotalConfirmed;
    document.getElementById("Total-new-cases").innerHTML = mydata.NewConfirmed;
    document.getElementById("Total-death").innerHTML = mydata.TotalDeaths;
    document.getElementById("Total-new-death").innerHTML = mydata.NewDeaths;
    document.getElementById("Total-recovered").innerHTML =
      mydata.TotalRecovered;
    document.getElementById("Total-new-recovered").innerHTML =
      mydata.NewRecovered;
    document.getElementById("dates").innerHTML = mydata.Date;
  })
  .catch((error) => {
    console.log(`The Error is : ${error}`);
  });

//we get data in json format, we need to convert to javascript object for using it
//return apidata.json ne use javascript object mai krdia change
