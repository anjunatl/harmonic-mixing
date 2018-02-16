const _ = require('underscore');
const CamelotMixer = require('./camelot.mixer');
const Types = CamelotMixer.Types;

describe('mixer', () => {
    test('rejects bad input 13A', () => {
        let testMix = CamelotMixer.getMixesFor("13A");
        expect(testMix).toBeNull();
    });

    test('rejects bad input A1', () => {
        let testMix = CamelotMixer.getMixesFor("A1");
        expect(testMix).toBeNull();
    });

    test('figures out the starting position from its input', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        expect(testMix.startingSignature).toBe("12A");
        expect(testMix.startingNumber).toBe(12);
        expect(testMix.startingLetter).toBe("A");
    });

    test('gets the correct relative mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.relative });
        expect(mix.newMix.number).toBe(12);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct dominant mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.dominant });
        expect(mix.newMix.number).toBe(1);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct subdominant mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.subdominant });
        expect(mix.newMix.number).toBe(11);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct parallel mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.parallel });
        expect(mix.newMix.number).toBe(9);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct diagonal mix for an A track', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.diagonal });
        expect(mix.newMix.number).toBe(11);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct diagonal mix for a B track', () => {
        let testMix = CamelotMixer.getMixesFor("12B");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.diagonal });
        expect(mix.newMix.number).toBe(1);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct gentle boost mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.gentleBoost });
        expect(mix.newMix.number).toBe(7);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct rapid boost mix', () => {
        let testMix = CamelotMixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.rapidBoost });
        expect(mix.newMix.number).toBe(2);
        expect(mix.newMix.letter).toBe("A");
    });

    test('goes backwards around the circle', () => {
        let testMix = CamelotMixer.getMixesFor("1A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.subdominant });
        expect(mix.newMix.number).toBe(12);
        expect(mix.newMix.letter).toBe("A");
    });
});
