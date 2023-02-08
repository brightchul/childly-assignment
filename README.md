# childly-assignment

## 1번 문제
binance.com 의 현물거래 하루 매출은 어느 정도일까요?

### 답변

Spot Trading Volume(24h) 기준으로 보았을 때 $21,642,874,547.84 정도가 현물 거래로 거래되고 있습니다.
여기서 수수료 0.1%를 적용하면 $21.64M 이며 원화로는 약 27억 정도로 추정됩니다. 

## 2번 문제
차트를 그리려고 합니다. 자바스크립트 차트라이브러리는 Canvas 기반과 SVG 기반이
있습니다. 각각 어떤 방식이고 어떤 장단점이 있나요? 실제 개발을 할 예정이라면 어떤
정보들을 취합하실 것인가요?

### 답변

#### 캔버스 기반 차트
- 캔버스 영역을 만든 다음에 해당 영역에 픽셀을 찍어서 그래프를 나타냅니다. 
- 차트를 나타낼 화면크기, 캔버스 영역이 크면 클수록 해당 영역을 다 채워야 하기 때문에 느려질 수 있습니다.
- 화면 크기 영역이 크지 않다면 복잡한 도형, 많은 데이터를 시각화하는 작업에서도 빠른 속도를 보여줍니다. 
 

#### SVG 기반 차트
- SVG 기반 차트는 벡터를 사용하기 때문에 이미지 확대시에도 품질 저하가 되지 않는 특징을 가집니다. 
- 화면크기가 커진다고 해도 벡터 기반으로 그려지기 때문에 캔버스와 비교했을 때 성능 감소가 상대적으로 적습니다. 
- SVG DOM을 생성하기 때문에 사용자 이벤트, 움직임을 이벤트 핸들링 하기 상대적으로 편합니다. 
- 많은 픽셀이 필요한 복잡한 도형, 시각화의 경우에는 개별 dom 객체가 많이 생성되어서 느려지는 단점을 가집니다. 

### 실제 개발시 취합할 정보

- 시각화 해야 하는 화면 크기, 영역 사이즈
- 시각화 해야 하는 개별 항목, 객체 최대 숫자, 애니메이션 정도, 사용자 인터렉티브 정도
- 데이터 특성이 실시간으로 업뎃 되는지 정적인지, 필요한 차트들의 종류 
- 추후 어떠한 차트, 시각화가 추가 될 것인지 확장성을 어느정도 고려해야 하는지 여부


## 3번 알고리즘 문제

알고리즘 문제입니다. C/C++, 혹은 javascript 등 자신있는 언어로 풀어서 소스코드를 작성해보세요. [[제출 답안]](./p3/README.md)

<details>
<summary>3번 문제설명</summary>

```
어떤 프로그램이 있다. 이 프로그램은 두 개의 쓰레드가 내부적으로 돌고 있다. A쓰레드는 Stack에 1~N까지의 숫자를 순서대로 Stack에 계속 쌓고, 다른 B쓰레드는 이 Stack에서 숫자를 꺼내서 출력하게 된다. 두 쓰레드가 숫자를 넣고 꺼내는 시간 간격은 아주 랜덤하다.

예를 들어 N이 5일 때,
A가 1, 2, 3을 넣는다.
B가 3, 2를 꺼내어 출력한다.
A가 4, 5을 넣는다
B는 5, 4, 1를 꺼내어 출력한다
인 경우라면 출력은 3 2 5 4 1 이다

여기서 특정 N에 대해서 출력 가능한 형태를 모두 출력하는 프로그램을 작성한다.

다음은 N의 값이 3일 때의 출력 결과 이다.

N 이 3 일 경우 출력 할 수 있는 결과는
A(1) -> B(1) -> A(2) -> B(2) -> A (3) -> B(3) => 1 2 3
A(1) -> B(1) -> A (2, 3) -> B(3, 2) => 1 3 2
A(1, 2) -> B(2, 1) -> A (3) -> B(3) => 2 1 3
A(1, 2) -> B(2) -> A(3) -> B(3, 1) => 2 3 1
A(1, 2, 3) -> B(3, 2, 1) => 3 2 1
이렇게 5가지 경우가 출력되게 된다.
```

### 입력
입력은 여러 케이스로 구성되어 있다. 각 케이스별 N(1~ 16) 의 값이 나오게 되고, 만약 0이 입력되면
프로그램을 종료한다.

### 출력
출력은 가능한 모든 케이스를 작은 수부터 출력한다. 각 케이스는 빈 라인으로 구분한다.

### 입/출력 예제
```
실행 -> C:\p1.exe
1
2
3
0

1

12
21

123
132
213
231
321
```

### 채점 기준
1. 작성한 프로그램은 각각의 테스트케이스에 대해서 올바른 결과를 출력하여야 한다.
2. 입력 후 결과 출력까지 걸리는 시간이 빠르면 빠를수록 좋다.
3. 프로그램에서 사용한 자료구조 및 알고리즘이 적절하여야 한다.
4. 그 외 일반적인 코드 구조, 스타일, 에러/예외 처리 등이 적절할수록 좋다.

### 제출 시 주의사항
1. 프로그램의 입출력은 표준 입력과 표준 출력을 이용하여야 합니다.
입력과 출력 시 아래와 같이 리다이렉트를 이용하면 파일을 이용해서도 입출력 값을 저장할 수 있습니다.
예) c:\test\>P1.exe < testcases.txt > result.txt

2. 문제의 입/출력 예제는 말 그대로 문제의 조건과 입출력 방식(양식)을 이해하는데 도움을 주는 예제입니다.
입/출력 예제에 있는 입력 값에 대하여 프로그램이 잘 동작한다고 하여 프로그램이 적절하게 구현되었다고는
볼 수는 없습니다. 프로그램 작성 후에는 문제의 조건을 만족하는 다양한 테스트 케이스를 만들어보고
프로그램을 테스트해 보는 것이 바람직합니다.

</details>

<br/>

## 4번 문제

간단한 드래그 테스트를 수행하는 코드가 있습니다. 다음 코드에서 요구사항에 맞춰서 코드를 수정해주세요. 필요하다면 다른 JS 모듈을 사용하거나 기존 코드를 얼마든지 변경해도 좋습니다. 모듈을 사용한다면 모듈이 필요한 이유를 같이 적어주세요. [[제출답안]](./p4/README.md)

<details>
<summary>4번 문제설명</summary>

```html
<html>
  <head>
    <style>
      #frame {
        position: relative;
        border: 1px solid black;
        width: 200px;
        height: 30px;
      }
      #handle {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: black;
        cursor: pointer;
        transition: left 0.15s ease-out;
      }
      #handle.move {
        transition-duration: 0s;
        -webkit-transition-duration: 0s;
      }
      #target {
        position: absolute;
        z-index: -1;
        border-radius: 10px;
        width: 20px;
        height: 20px;
        background: radial-gradient(red 25%, white 25% 100%);
        border: 1px solid red;
        box-sizing: border-box;
        pointer-events: none;
      }
      #message.success {
        color: forestgreen;
      }
      #message.success::after {
        content: "성공";
      }
      #message.failed {
        color: red;
      }
      #message.failed::after {
        content: "실패";
      }
    </style>
  </head>
  <body>
    <p>
      <button id="reset">초기화</button>
    </p>
    <div id="frame">
      <div id="handle"></div>
      <div id="target" style="right: 5px; top: 5px"></div>
    </div>
    <p id="message"></p>
    <script>
      var left = 0;
      // 초기화
      document.getElementById("reset").addEventListener("mousedown", () => {
        left = 0;
        document.getElementById("message").className = "";
        document.getElementById("handle").style = `left: ${left}px`;
      });

      // 핸들 이동 시작
      document.getElementById("handle").addEventListener("mousedown", () => {
        document.getElementById("handle").className = "move";
      });

      // 핸들 이동
      document.getElementById("frame").addEventListener("mousemove", (e) => {
        if (document.getElementById("handle").className != "move") {
          return;
        }
        const frameX = document.getElementById("frame").offsetLeft;
        const frameWidth = 200;
        const x = Math.min(
          Math.max(e.clientX - 15 - frameX, 0),
          frameWidth - 30
        );
        left = x;
        document.getElementById("handle").style = `left: ${left}px`;
      });

      // 핸들 이동 종료, 테스트 판정
      document.addEventListener("mouseup", () => {
        if (document.getElementById("handle").className != "move") {
          return;
        }
        document.getElementById("handle").className = "";
        // 성공 판정
        if (left > 165) {
          document.getElementById("message").className = "success";
        }
        // 실패 판정
        else {
          document.getElementById("message").className = "failed";
          left = 0;
          document.getElementById("handle").style = `left: ${left}px`;
        }
      });
    </script>
  </body>
</html>
```

### 변경 요구사항
- #frame 크기를 300x300 크기로 변경합니다.
- #target은 페이지 구동 직후와 초기화 버튼을 누를 때마다 #frame 내에 랜덤으로 위치하게 합니다.
  - 초기화 후 #target과 #handle의 위치가 겹치면 안 됩니다.
- #handle은 페이지 구동 직후와 초기화 버튼을 누를 때마다 #frame 내 왼쪽 위, 왼쪽 아래, 오른쪽 위, 오른쪽 아래 중 랜덤하게 위치하게 합니다.
- 사용자가 #handle을 드래그하여 #target에 가까이 가져가서 놓으면 성공합니다. 얼마나 가까이 놓아야 하는지 정한 후 직접 설정해주세요.
- 그 외 코드에서 변경하고 싶은 부분이 있다면 변경 후 변경 이유를 설명해주세요.

</details>