// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example drivers array
  const drivers = [
    { name: "Sally", hometown: "New York" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "San Francisco" }
  ];
  
  // Test the functions and display the results
  console.log(findMatching(["Sally", "Annette", "Bobby"], "sally")); 
  // Output: ["Sally"]
  
  console.log(fuzzyMatch(["Sally", "Annette", "Bobby"], "Sa")); 
  // Output: ["Sally"]
  
  console.log(matchName(drivers, "Bobby")); 
  // Output: [{ name: "Bobby", hometown: "San Francisco" }]
  
