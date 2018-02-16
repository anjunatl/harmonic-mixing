const _ = require('underscore');
const Mixer = require('./mixer');
const Types = Mixer.Types;

describe('mixer', () => {
    test('rejects bad input 13A', () => {
        let testMix = Mixer.getMixesFor("13A");
        expect(testMix).toBeNull();
    });

    test('rejects bad input A1', () => {
        let testMix = Mixer.getMixesFor("A1");
        expect(testMix).toBeNull();
    });

    test('figures out the starting position from its input', () => {
        let testMix = Mixer.getMixesFor("12A");
        expect(testMix.startingSignature).toBe("12A");
        expect(testMix.startingNumber).toBe(12);
        expect(testMix.startingLetter).toBe("A");
    });

    test('gets the correct relative mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.relative });
        expect(mix.newMix.number).toBe(12);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct dominant mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.dominant });
        expect(mix.newMix.number).toBe(1);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct subdominant mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.subdominant });
        expect(mix.newMix.number).toBe(11);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct parallel mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.parallel });
        expect(mix.newMix.number).toBe(9);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct diagonal mix for an A track', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.diagonal });
        expect(mix.newMix.number).toBe(11);
        expect(mix.newMix.letter).toBe("B");
    });

    test('gets the correct diagonal mix for a B track', () => {
        let testMix = Mixer.getMixesFor("12B");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.diagonal });
        expect(mix.newMix.number).toBe(1);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct gentle boost mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.gentleBoost });
        expect(mix.newMix.number).toBe(7);
        expect(mix.newMix.letter).toBe("A");
    });

    test('gets the correct rapid boost mix', () => {
        let testMix = Mixer.getMixesFor("12A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.rapidBoost });
        expect(mix.newMix.number).toBe(2);
        expect(mix.newMix.letter).toBe("A");
    });

    test('goes backwards around the circle', () => {
        let testMix = Mixer.getMixesFor("1A");
        let mix = _.findWhere(testMix.possibleMixes, { type: Types.subdominant });
        expect(mix.newMix.number).toBe(12);
        expect(mix.newMix.letter).toBe("A");
    });
});
