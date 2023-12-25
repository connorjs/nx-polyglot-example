import { hello } from ":hello-js/hello.ts";

export function Home() {
	return <h1>{hello()}</h1>;
}
