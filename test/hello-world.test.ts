import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import HelloWorld from '../src/components/hello-world.vue';

describe('HelloWorld', () => {
    let wrapper: RenderResult;

    afterEach(() => {
        wrapper.unmount();
    });

    beforeEach(() => {
        wrapper = render(HelloWorld);
    });

    it('should render', () => {
        const { html, getByText } = wrapper;
        getByText('HelloWorld');
        expect(html()).toMatchSnapshot();
    });
});
