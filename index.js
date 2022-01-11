// Code your solution in this file!

//HQ on 42nd

function distanceFromHqInBlocks(destination) {
    const hq = 42;
    return Math.abs(hq - destination)
}

function distanceFromHqInFeet(destination) {
    const blockInFeet = 264; 
    const blocks = distanceFromHqInBlocks(destination);
    return blockInFeet * blocks;
}

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    return blockInFeet * blocks;
}

const cents = 0.02
function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 399) {
        return 0;
    } else if (feet <= 2000) {
        return cents * (feet - 400);
    } else if (feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
