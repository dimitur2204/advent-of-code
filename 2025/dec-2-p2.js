const input =
  "5959566378-5959623425,946263-1041590,7777713106-7777870316,35289387-35394603,400-605,9398763-9592164,74280544-74442206,85684682-85865536,90493-179243,202820-342465,872920-935940,76905692-76973065,822774704-822842541,642605-677786,3759067960-3759239836,1284-3164,755464-833196,52-128,3-14,30481-55388,844722790-844967944,83826709-83860070,9595933151-9595993435,4216-9667,529939-579900,1077949-1151438,394508-486310,794-1154,10159-17642,5471119-5683923,16-36,17797-29079,187-382";

const ranges = input.split(",");

let sum = 0;

function checkInvalidNum(i) {
  let partSize = 1;
  let count = 0;
  while (partSize <= i.toString().length / 2) {
    let part = i
      .toString()
      .slice(count * partSize, partSize * count + partSize);
    count++;
    let nextPart = i
      .toString()
      .slice(count * partSize, partSize * count + partSize);
    let isRepeatedToEnd = count * partSize === i.toString().length;
    if (isRepeatedToEnd) {
      return true;
    }
    if (part !== nextPart) {
      partSize++;
      count = 0;
    }
  }
  return false;
}

ranges.forEach((r) => {
  const low = parseInt(r.split("-")[0]);
  const high = parseInt(r.split("-")[1]);
  for (let i = low; i <= high; i++) {
    if (checkInvalidNum(i)) {
      // console.log(i);
      sum += i;
    }
  }
});

// console.log(checkInvalidNum(20022002));
console.log(sum);
