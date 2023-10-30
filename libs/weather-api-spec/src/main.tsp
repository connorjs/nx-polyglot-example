import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;

/** Example Weather Service API. */
@service({
	title: "Weather",
	version: "2023-10-29",
})
namespace Connorjs.Example.Weather;

/** An example “Hello, world!” operation. */
@route("/hello")
@OpenAPI.operationId("Hello")
op hello(@query name?: string): HelloOutput;

/** Output for `Hello` operation. */
model HelloOutput {
	/** The hello message. */
	message: string;
}
