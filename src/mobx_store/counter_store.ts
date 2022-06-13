import { decorate, observable, action } from 'mobx';

class CounterStore {
  counter = [{ counterNum: 0 }];

  // Add counter
  handleAddCounter = () => {
    this.counter.push({ counterNum: 0 });
  };

  // Remove counter
  handleRemoveCounter = () => {
    this.counter.pop();
  };

  // Increment counterNum
  handleIncrement = ({ index }: any) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  // Decrement counterNum
  handleDecrement = ({ index }: any) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}

// MobX는 CounterStore 클래스 외부에 decorate 함수를 이용하여 적용하게 됩니다.
// 첫번째 파라미터는 적용한 컴포넌트를 넣어주고 두번째 파라미터는 Object 방식으로
// Key에는 MobX를 적용할 변수명 혹은 함수명을 적고 Value에는 사용할 MobX 개념을 적습니다.

decorate(CounterStore, {
  counter: observable,
  handleAddCounter: action,
  handleRemoveCounter: action,
  handleIncrement: action,
  handleDecrement: action,
});

export default new CounterStore();
