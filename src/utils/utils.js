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

  export { downloadsConverter };
