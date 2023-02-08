import { Handle, Target, StateManager } from "./position.js";

const domFrame = document.getElementById("frame");
const domReset = document.getElementById("reset");
const domMessage = document.getElementById("message");
const domTarget = document.getElementById("target");
const domHandle = document.getElementById("handle");

const frameWidth = domFrame.clientWidth;
const frameHeight = domFrame.clientHeight;
const frameOffsetLeft = domFrame.offsetLeft;
const frameOffsetTop = domFrame.offsetTop;

const handleWidth = domHandle.clientWidth;
const handleRadius = handleWidth / 2;
const targetWidth = domTarget.clientWidth;

const maxLeft = frameWidth - handleWidth;
const maxTop = frameHeight - handleWidth;

const COLLISION_DiSTANCE = 19;

const stateManager = new StateManager({
  handle: new Handle({ width: handleWidth, frameWidth, frameHeight }),
  target: new Target({ width: targetWidth, frameWidth, frameHeight }),
});

function changeStylePosition(dom, { left, top }) {
  dom.style = `left: ${left}px; top: ${top}px`;
}

function gameGeneratePosition() {
  domMessage.className = "";

  stateManager.generatePosition();
  changeStylePosition(domHandle, stateManager.getHandlePosition());
  changeStylePosition(domTarget, stateManager.getTargetPosition());
}

// 초기화
document.body.onload = gameGeneratePosition;
domReset.addEventListener("mousedown", gameGeneratePosition);

// 핸들 이동 시작
domHandle.addEventListener("mousedown", () => {
  domHandle.className = "move";
});

// 핸들 이동
domFrame.addEventListener("mousemove", (e) => {
  if (domHandle.className != "move") {
    return;
  }

  const left = Math.min(
    Math.max(e.clientX - handleRadius - frameOffsetLeft, 0),
    maxLeft
  );

  const top = Math.min(
    Math.max(e.clientY - handleRadius - frameOffsetTop, 0),
    maxTop
  );

  stateManager.setHandlePosition(left, top);
  changeStylePosition(domHandle, stateManager.getHandlePosition());
});

// 핸들 이동 종료, 테스트 판정
document.addEventListener("mouseup", () => {
  if (domHandle.className != "move") {
    return;
  }

  domHandle.className = "";
  // 성공 판정
  if (stateManager.checkCollision(COLLISION_DiSTANCE)) {
    domMessage.className = "success";
    return;
  }

  // 실패 판정
  domMessage.className = "failed";
  stateManager.resetHandle();
  changeStylePosition(domHandle, stateManager.getHandlePosition());
});
