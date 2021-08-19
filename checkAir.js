const checkAir = function (samples, threshold) {
    let dirty = 0;
    //check if samples array and threshold exist and whether they have correct inputs
    if(samples && samples.length > 0 && threshold && threshold >= 0 && threshold <= 1) {
      for( let sample of samples ) {
        if (sample === "dirty") {
          dirty++;
        }
      }
    }
    return dirty / samples.length < threshold ? "Clean" : "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))