import sleep from '../sleep';

jest.useFakeTimers();
const timeout     = 1234;
const delayedFunc = jest.fn();

/* eslint-disable promise/prefer-await-to-then -- allow to test promise in pending state */
describe('src/lib/sleep', () => {
	it('should wait specified delay', async () => {
		void sleep(timeout).then(delayedFunc);
		expect(delayedFunc).not.toHaveBeenCalled();
		jest.advanceTimersByTime(timeout - 1);
		await Promise.resolve();
		expect(delayedFunc).not.toHaveBeenCalled();
	});

	it('should continue after specified delay', async () => {
		void sleep(timeout).then(delayedFunc);
		expect(delayedFunc).not.toHaveBeenCalled();
		jest.advanceTimersByTime(timeout);
		await Promise.resolve();
		expect(delayedFunc).toHaveBeenCalled();
	});
});
