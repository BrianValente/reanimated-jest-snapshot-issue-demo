import { render } from '@testing-library/react-native';

import ComponentTwo from "./ComponentTwo";

describe("ComponentTwo", () => {
    it("should pass", () => {
        const rendered = render(<ComponentTwo />).toJSON();
        expect(rendered).toMatchSnapshot();
    });
})
