import { medianFinder } from '../../Heap/median';

describe('Task Schedueler', () => {
  test('Testcase 1', () => {
    const median = new medianFinder();
    median.addNum(1);
    median.addNum(2);
    median.addNum(3);
    median.addNum(4);
    const result = median.findMedian();
    expect(result).toBe(2.5);
  })
});

