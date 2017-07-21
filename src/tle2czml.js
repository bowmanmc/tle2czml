import { satellite } from 'satellite.js';


const DEG2RAD = 0.0174533;


function tle2czml(tle) {

}

/**
 * tle = [tle line 1, tle line 2]
 */
function tle2czml2(tle) {
    let satrec = satellite.twoline2satrec(tle[0], tle[1]);
    let now = new Date();
    let positionAndVelocity = satellite.propagate(
        satrec,
        now.getUTCFullYear(),
        now.getUTCMonth() + 1, // shift to 1-12 (instead of 0-11)
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
    );

    let positionEci = positionAndVelocity.position;
    let velocityEci = positionAndVelocity.velocity;

    let observerGd = {
        longitude: -122.0308 * DEG2RAD,
        latitude: 36.961342 * DEG2RAD,
        height: 0.370
    };

    let gmst = satellite.gstimeFromDate(
        now.getUTCFullYear(),
        now.getUTCMonth() + 1, // shift to 1-12 (instead of 0-11)
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
    );

    let positionEcf = satellite.eciToEcf(positionEci, gmst);
    let observerEcf = satellite.geodeticToEcf(observerGd);
    let positionGd = satellite.eciToGeodetic(positionEci, gmst);
    let lookAngles = satellite.ecfToLookAngles(observerGd, positionEcf);

    let satelliteX = lookAngles.azimuth;
    let satelliteY = lookAngles.elevation;
    let satelliteZ = lookAngles.rangeSat;

    let longitude = positionGd.longitude;
    let latitude = positionGd.latitude;
    let height = positionGd.height;

    let longitudeStr = satellite.degreesLong(longitude);
    let latitudeStr = satellite.degreesLat(latitude);

    let rotAngle = 0;
    let minstep = 0;
    let hrstep = 0;
    let datestep = 0;
}

export default tle2czml;
