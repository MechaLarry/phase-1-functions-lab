// Code your solution in this file!

const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

// Calculates the distance from headquarters in blocks
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - HQ_BLOCK);
}

// Calculates the distance from headquarters in feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * FEET_PER_BLOCK;
}

// Calculates the distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * FEET_PER_BLOCK;
}

// Calculates the fare price given a start and destination
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}