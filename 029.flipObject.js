const people = {
    bob: "JS Developer",
    alice: "AI Engineer",
    jon: "JS Developer",
    nick: "UX Designer",
  };
  
  function flipObject(people) {
      const result = {};
      
      for (const [name, job] of Object.entries(people)) {
          if (!result[job]) {
              result[job] = [];
          }
          result[job].push(name);
      }
      return result
  }
  
  export { flipObject };