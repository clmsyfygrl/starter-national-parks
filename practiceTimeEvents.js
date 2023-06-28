function printName(name){
    console.log("Hello " + name);
  }
  
  setTimeout(printName, 3000, "Thundercat");
  setTimeout(printName, 2000, "Adele");
  setTimeout(printName, 1000, "Sade");