
const arguments = process.argv.slice(2);

const circleArea = (r) => console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI*(r^2)}`);

circleArea(arguments[0]*1);