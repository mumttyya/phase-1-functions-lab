function distanceFromHqInBlocks(streetNumber) {
  const hqStreet = 42; // Assuming HQ is at 42nd street
  return Math.abs(streetNumber - hqStreet);
}
function distanceFromHqInFeet(streetNumber) {
  const hqStreet = 42; // Assuming HQ is at 42nd street
  const blocks = Math.abs(streetNumber - hqStreet);
  const feetPerBlock = 264; // Inferred from the test cases
  return blocks * feetPerBlock;
}
function distanceTravelledInFeet(startStreet, endStreet) {
  const blocksTravelled = Math.abs(startStreet - endStreet);
  const feetPerBlock = 264; // Consistent with previous tests
  return blocksTravelled * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const totalFeet = Math.abs(start - destination) * feetPerBlock;

  if (totalFeet > 2500) {
    return 'cannot travel that far';
  } else if (totalFeet <= 400) {
    return 0; // Free sample
  } else if (totalFeet > 400 && totalFeet <= 2000) {
    const chargeableFeet = totalFeet - 400;
    return chargeableFeet * 0.02; // 2 cents per foot
  } else { // totalFeet > 2000 && totalFeet <= 2500
    return 25; // Flat fare for long distances
  }
}
