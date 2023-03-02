let value = true;
alert(typeof value); // boolean 으로 나온다.

value = String(value);
alert(typeof value); // string 으로 나온다.

alert(`어랏${"6" / "2"}`);


num = "1234";
alert(`number에 1234를 문자열로 저장함 type:${typeof num}`);
num = Number(num)
alert(`Number 함수로 바꿔봄! ${typeof num}`);