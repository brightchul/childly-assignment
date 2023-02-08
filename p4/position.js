export class StateManager {
  constructor({ target, handle }) {
    this.target = target;
    this.handle = handle;
  }

  /**
   * handle, target의 위치 좌표를 생성합니다.
   */
  generatePosition() {
    this.handle.generatePosition();
    const handleTargetDistance = (this.handle.width + this.target.width) / 2;
    do {
      this.target.generatePosition();
    } while (this.checkCollision(handleTargetDistance));
  }

  /**
   * handle의 좌표를 리셋합니다.
   */
  resetHandle() {
    this.handle.reset();
  }

  /**
   * distance 보다 더 가까이 붙어서 충돌하는지를 확인합니다.
   * @param {number} distance
   * @returns {boolean}
   */
  checkCollision(distance) {
    const { left: handleLeft, top: handleTop } = this.handle.center;
    const { left: targetLeft, top: targetTop } = this.target.center;

    const result = Math.sqrt(
      (handleLeft - targetLeft) ** 2 + (handleTop - targetTop) ** 2
    );
    return result <= distance;
  }

  /**
   * handle 좌표를 설정합니다.
   * @param {number} left
   * @param {number} top
   */
  setHandlePosition(left, top) {
    this.handle.left = left;
    this.handle.top = top;
  }

  /**
   * target의 left, top 좌표를 반환합니다.
   * @returns {{left: number, top:number}}
   */
  getTargetPosition() {
    return { left: this.target.left, top: this.target.top };
  }

  /**
   * handle의 left, top 좌표를 반환합니다.
   * @returns {{left: number, top:number}}
   */
  getHandlePosition() {
    return { left: this.handle.left, top: this.handle.top };
  }
}

// Target, Handle은 중복되는 속성들이 존재해서 해당 부분들을 Point 클래스로 생성했습니다.
class Point {
  constructor({ left, top, width, frameWidth, frameHeight }) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
  }

  /**
   * 중심 좌표를 반환합니다.
   */
  get center() {
    return {
      left: this.left + this.width / 2,
      top: this.top + this.width / 2,
    };
  }
}

export class Target extends Point {
  constructor(args) {
    super(args);
  }

  /**
   * 영역 내에서 무작위 위치 좌표를 생성합니다.
   */
  generatePosition() {
    const frameWidth = this.frameWidth;

    let left = (Math.random() * frameWidth) | 0;
    let top = (Math.random() * frameWidth) | 0;

    while (this.checkOutOfArea(left, top, frameWidth)) {
      left = (Math.random() * frameWidth) | 0;
      top = (Math.random() * frameWidth) | 0;
    }

    this.left = left;
    this.top = top;
  }

  /**
   * 무작위 생성시 경계면을 벗어나지 않도록 합니다.
   * @param {number} left
   * @param {number} top
   * @returns {boolean}
   */
  checkOutOfArea(left, top) {
    const minLeft = 0;
    const maxLeft = this.frameWidth - this.width;
    const minTop = 0;
    const maxTop = this.frameWidth - this.width;

    return left < minLeft || maxLeft < left || top < minTop || maxTop < top;
  }
}

export class Handle extends Point {
  constructor({ resetLeft, resetTop, ...args }) {
    super(args);
    this.resetLeft = resetLeft;
    this.resetTop = resetTop;
  }

  /**
   * 영역 내 좌상,좌하,우상,우하 4영역 중 하나의 영역을 무작위로 선택합니다.
   */
  generatePosition() {
    const [minLeft, maxLeft] = [0, this.frameWidth - this.width];
    const [minTop, maxTop] = [0, this.frameHeight - this.width];

    const [randomLeft, randomTop] = [
      [minLeft, minTop],
      [maxLeft, minTop],
      [maxLeft, maxTop],
      [minLeft, maxTop],
    ][(Math.random() * 4) | 0];

    this.resetLeft = this.left = randomLeft;
    this.resetTop = this.top = randomTop;
  }

  /**
   * 현재 handle위치를 처음 위치로 리셋합니다.
   */
  reset() {
    this.left = this.resetLeft;
    this.top = this.resetTop;
  }
}
