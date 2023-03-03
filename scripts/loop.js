let i = 0;

while (i < 5) {
    alert(i);
    i += 1;
}

for (let j = 1; j <= 5; j++) {
    for (i = 1; i <= 5; i++) {
        alert(`${j} X ${i} = ${j * i}`);
    }
}

do {
    j = prompt("exit 입력하면 종료.", '');
} while (j != "exit");

// 소수 출력하기

let n = Number(prompt("숫자를 입력하시면 0~숫자 사이의 소수를 모두 출력합니다. (종료하려면 exit 입력)", ''));
let sosu = "";
A: for (let N = 2; N <= n; N++) {
    B: for (let i = 2; i < N; i++) {
        if (N % i == 0) continue A;
    }
    sosu = sosu + " " + N;
    alert(`i : ${i}\nN : ${N}\nsosu : ${sosu}`);
}

