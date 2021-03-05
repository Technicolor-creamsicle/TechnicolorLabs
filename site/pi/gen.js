// import BigNumber from "../lib/bignumber.js/bignumber.mjs";
import BigNumber from 'bignumber.js';
BigNumber.config({ ALPHABET: '0123456789', ROUNDING_MODE: 1 });
function* generateDigitsOfPi() {
    // let q: BigNumber = new BigNumber(1, 10);
    // let r: BigNumber = new BigNumber(180, 10);
    // let t: BigNumber = new BigNumber(60, 10);
    // let iterations: BigNumber = new BigNumber(2, 10);
    // while (true) {
    //     let digit: string = ((iterations.multipliedBy(27).minus(12)).times(q).plus(r).times(5))
    //         .dividedBy((
    //             t.times(5))).toFixed(0);
    //     yield digit + ' ';
    //     let u: BigNumber = iterations.times(3);
    //     u = ((u.plus(1)).times(3)).times(u.plus(2));
    //     r = u.times(10).times((q.times((iterations.times(5).minus(2))).plus(r.minus(t.times(digit)))));
    //     q = q.times(iterations.times(10).times(iterations.times(2).minus(1)))
    //     iterations = iterations.plus(1)
    //     t = t.times(u);
    // }
}
// Generates a digits of pi everytime its called with iter.next()
let iter = generateDigitsOfPi();
// let output: HTMLDivElement = document.querySelector("p.pi");
(function displayTenNextDigits() {
    let digits = "";
    for (let i = 0; i < 10; i++)
        digits += iter.next().value;
    console.info(digits);
    displayTenNextDigits();
    // output.insertAdjacentHTML("beforeend", digits);
    // scrollTo(0, document.body.scrollHeight);
    // requestAnimationFrame(displayTenNextDigits);
})();
//# sourceMappingURL=gen.js.map