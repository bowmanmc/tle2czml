import { satellite } from 'satellite.js';


export default function propagateTle(tle, timeSinceTleEpochMinutes) {
    let satrec = satellite.twoline2satrec(tle[0], tle[1]);
    let posVel = satellite.sgp4(satrec, timeSinceTleEpochMinutes);

    return {
        satrec,
        posVel
    }
};
