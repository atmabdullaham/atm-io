
   const downloadsConverter = (downloads) => {
    let countK = 0;
    let countM = 0;
    let countB = 0;
    if (downloads >= 1000 && downloads < 1000000) {
      countK = downloads / 1000;
      countK = countK + "K";
      return countK;
    } else if (downloads >= 1000000 && downloads < 1000000000) {
      countM = downloads / 1000000;
      countM = countM + "M";
      return countM;
    } else if (downloads >= 1000000000) {
      countB = downloads / 1000000000;
      countB = countB + "B";
      return countB;
    }
  };

  const getStoreApps = ()=>{
    const storedAppsStr = localStorage.getItem("installed");
    if(storedAppsStr){
      const  storedAppsData = JSON.parse(storedAppsStr);
        return storedAppsData
    }else{
        return []
    }

  }
  const addToStoreDB = (id)=>{
    const previousApp = getStoreApps()
    if(previousApp.includes(id)){
        alert("This id already exists")
    }else {
        previousApp.push(id);
        const strData = JSON.stringify(previousApp);
        localStorage.setItem("installed", strData)
    }
  }

  const removeFromStoreDB = (id)=>{
    const previousApp = getStoreApps()
    const newApps = previousApp.filter(item => parseInt(item) !== parseInt(id));
    const strData = JSON.stringify(newApps);
    localStorage.setItem("installed", strData)
    console.log(strData);

  }
  export { addToStoreDB, downloadsConverter, getStoreApps, removeFromStoreDB };

