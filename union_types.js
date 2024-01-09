function kgToPounds(weight) {
    //narrowing
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToPounds(10);
kgToPounds('10kg');
