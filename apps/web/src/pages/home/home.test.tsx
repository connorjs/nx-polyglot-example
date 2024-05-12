import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Home } from "~/pages/home/home.tsx";

describe(`home`, () => {
	it(`should render hello`, () => {
		render(<Home />);
		expect(screen.getByText(/hello/i)).toBeInTheDocument();
	});
});
