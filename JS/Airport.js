const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

     getPassengerPlanes() {
        var passengerPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) {
                passengerPlanes.push(plane);
            }
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 1; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].passengersCapacity > planeWithMaxCapacity.passengersCapacity) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].militaryType == MilitaryType.TYPE_TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].militaryType == MilitaryType.TYPE_BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof experimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.maxFlightDistance > b.maxFlightDistance) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.maxSpeed > b.maxSpeed) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.maxLoadCapacity > b.maxLoadCapacity) ? 1 : -1);
        return this;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;