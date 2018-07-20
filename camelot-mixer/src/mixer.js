import { CamelotMixer } from "./camelot.mixer.js";

window.getMixes = function () {
    console.clear();
    const input = document.forms['mixer-input'].elements['camelotSignature'].value;
    const output = CamelotMixer.getMixesFor(input);
    if (output) {
        console.log("Computed for: " + input);
        const basicOutput = output.possibleMixes.map(function (mix) {
            const output = {
                name: mix.name,
                newMix: mix.newMix.signature
            };
            console.log(output);
        });
    }
    return false; 
}
