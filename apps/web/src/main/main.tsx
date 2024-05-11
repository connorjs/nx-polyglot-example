/* c8 ignore start -- Skip coverage for entry-point */
import "./global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Home } from "~/pages/home/home.tsx";

/* globals document -- Web browser */
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- See index.html
createRoot(document.querySelector(`#root`)!).render(
	<StrictMode>
		<Home />
	</StrictMode>,
);
/* c8 ignore stop -- END */
