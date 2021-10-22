function sortVersion(versions) {
  return versions.sort((versionA, versionB) => {
    let [majorA, minorA, ...patchA] = versionA.split(".");
    patchA = patchA.join("");

    let [majorB, minorB, ...patchB] = versionB.split(".");
    patchB = patchB.join("");

    if (majorA !== majorB) {
      return majorA < majorB ? 1 : -1;
    } else if (minorA !== minorB) {
      return minorA < minorB ? 1 : -1;
    }

    return patchA < patchB ? 1 : -1;
  });
}

console.log(
  sortVersion(["0.1.1", "2.3.3", "0.302.1", "4.2", "4.35.1", "4.3.4.5"])
);
