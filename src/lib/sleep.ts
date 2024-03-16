// eslint-disable-next-line @typescript-eslint/promise-function-async -- allow for making tests work
function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default sleep;
