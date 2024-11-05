// WHILE Masalalari

// 1-Masala
{
    let a = 8, b = 3
    while (a >= b) {
        a -= b
    }
    console.log(a);
}

// 2-Masala
{
    let a = 20, b = 5, son = 0
    let res = a

    while (res >= b) {
        son++
        res -= b
    }
    console.log(`${son} ta joylashtirish mumkin`);
}

// 3-Masala
{
    let n = 17, k = 3,
        qoldiq = n, butun = 0

    while (qoldiq >= k) {
        qoldiq -= k
        butun++
    }
    console.log(`Butun qism: ${butun} Qoldiq: ${qoldiq}`);
}


// 4-Masala
{
    let n = 27

    while (n % 3 === 0 && n !== 0) {
        n = n / 3;
    }

    if (n === 1) {
        console.log("3 ning darajasi");
    } else {
        console.log("3 ning darajasi emas");
    }

}

// 5-Masala
{
    let n = 32, k = 0
    while (n >= 2) {
        n /= 2
        k++
    }
    console.log(k);
}

// 6-Masala
{
    let n = 6, b = 1
    while (n > 0) {
        b *= n
        n -= 2
    }
    console.log(b);
}

// 7-Masala
{
    let n = 20, k = 1
    while (k * k <= n) {
        k++
    }
    console.log(`Kvadrati ${n} dan katta bo'ladigan eng kichik butun son: ${k}`);
}

// 8-Masala
{
    let n = 20, k = 1
    while (k * k <= n) {
        k++
    }
    k--;
    console.log(`Kvadrati ${n} dan katta bo'lmagan eng katta butun son: ${k}`);
}

// 9-Masala
{
    let n = 20, k = 0
    while (Math.pow(3, k) <= n) {
        k++
    }
    console.log(`k: ${k}`);
}

// 10-Masala
{
    let n = 20, k = 0
    while (Math.pow(3, k + 1) <= n) {
        k++
    }
    console.log(`k: ${k}`);
}