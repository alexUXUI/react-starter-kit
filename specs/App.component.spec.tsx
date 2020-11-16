import * as React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import { App } from "../src/App/App";

describe("<App />", () => {
    test("it should load", () => {
        const { container, getByTestId } = render(<App />);

        let app = getByTestId('app')

        expect(app).toBeInTheDocument();
    });
});