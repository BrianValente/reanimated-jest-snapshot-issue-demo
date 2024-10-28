import { render } from '@testing-library/react-native';

import ComponentOne from './ComponentOne';

describe("ComponentOne", () => {
    it("should pass", () => {
        const rendered = render(<ComponentOne />).toJSON();
        expect(rendered).toMatchSnapshot();
    });
})
