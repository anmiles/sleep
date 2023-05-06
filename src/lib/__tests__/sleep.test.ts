import sleep from '../sleep';

jest.useFakeTimers();
const timeout     = 1234;
const delayedFunc = jest.fn();

describe('src/lib/sleep', () => {
	it('should wait specified delay', async () => {
		sleep(timeout).then(delayedFunc);
		expect(delayedFunc).not.toHaveBeenCalled();
		jest.advanceTimersByTime(timeout - 1);
		await Promise.resolve();
		expect(delayedFunc).not.toHaveBeenCalled();
	});

	it('should continue after specified delay', async () => {
		sleep(timeout).then(delayedFunc);
		expect(delayedFunc).not.toHaveBeenCalled();
		jest.advanceTimersByTime(timeout);
		await Promise.resolve();
		expect(delayedFunc).toHaveBeenCalled();
	});
});
