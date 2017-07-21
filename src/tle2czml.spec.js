import tle2czml from './tle2czml';

describe('tle2czml()', () => {
    it('converts single tle', () => {
        const tle = [
            '1 25544U 98067A   13149.87225694  .00009369  00000-0  16828-3 0  9031',
            '2 25544 051.6485 199.1576 0010128 012.7275 352.5669 15.50581403831869'
        ];
        let result = tle2czml(tle);
    });
});
