// @ts-ignore
import BigNumber from "/lib/bignumber.js/bignumber.mjs";
function* generateDigitsOfPi() {
    let q = new BigNumber(1, 10);
    let r = new BigNumber(180, 10);
    let t = new BigNumber(60, 10);
    let i = new BigNumber(2, 10);
    while (true) {
        let digit = ((i.multipliedBy(27).minus(12)).multipliedBy(q).plus(r).multipliedBy(5)).dividedBy(t.multipliedBy(5));
        yield digit.toString();
        let u = i.multipliedBy(3);
        u = ((u.plus(1)).multipliedBy(3)).multipliedBy(u.plus(2));
        r = u.multipliedBy(10).multipliedBy((q.multipliedBy((i.multipliedBy(5).minus(2))).plus(r.minus(t.multipliedBy(digit)))));
        q = q.multipliedBy(i.multipliedBy(10).multipliedBy(i.plus(1).multipliedBy(2).minus(1)));
        t = t.multipliedBy(u);
    }
}
// Generates a digits of pi everytime its called with iter.next()
let iter = generateDigitsOfPi();
let output = document.querySelector("p.pi");
(function displayTenNextDigits() {
    let digits = "";
    for (let i = 0; i < 10; i++)
        digits += iter.next().value;
    // console.info(digits)
    // displayTenNextDigits()
    output.insertAdjacentHTML("beforeend", digits);
    // scrollTo(0, document.body.scrollHeight);
    requestAnimationFrame(displayTenNextDigits);
})();
//# sourceMappingURL=gen.js.map