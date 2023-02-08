# 4번 문제

## How to use

```shell
cd p4
npm install
npm start
```

## Description
```
index.html : 기본적인 html 파일입니다. 
index.js : dom과 dom event에 대한 이벤트 핸들러, 리스너 함수들이 존재합니다.
position : StateManager, Handle, Target 클래스가 정리되어 있습니다.
```

이렇게 분리한 이유는 이벤트 및 렌더링 하는 로직과 상태 & 상태 변경 로직에 대한 의존성을 약하게 하고, 상태와 관련된 코드들은 응집성 높게 관리하고 싶었습니다.     

index.js에 있는 이벤트 함수들은 stateManager 인스턴스에만 의존성이 있습니다. 
handle, target 인스턴스를 개별적으로 의존하지 않습니다.     

만약 각 개별 이벤트 함수 및 렌더링 로직이 handle, target, stateManager 인스턴스에 제각각 의존하고 있게 된다면 추후 변경이 있을 때 3개의 인스턴스 전체를 수정해야 합니다.     

이렇게 되면 변경 지점들이 많이 생겨나고 그로 인한 변경의 여파를 다루기가 어렵게 됩니다. 그래서 최대한 stateManager에만 의존성을 가지게끔 해서 변경의 여파를 줄일 수 있도록 의도했습니다.      

마찬가지로 handle, target 또한 수정을 했을 때 getTargetPosition, getHandlePosition 함수들의 반환 타입만 신경을 쓰면 되기 때문에 수정에 대한 변경 여파를 조절할 수가 있습니다.      

handle과 target은 각각 자신의 상태 변경에 대해서만 집중을 합니다. 그 외의 상태 변경 및 확인은 stateManager가 담당합니다. stateManager은 handle 과 target에 대해서 알고 관리할 책임이 있기 때문입니다. 그래서 checkCollision 은 stateManager가 가지고 둘 사이의 관계를 확인하도록 했습니다. 


