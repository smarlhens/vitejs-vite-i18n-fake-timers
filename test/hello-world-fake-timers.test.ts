import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import HelloWorld from '../src/components/hello-world.vue';

describe('HelloWorld w/ fake timers', () => {
    let wrapper: RenderResult;

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers();
        wrapper.unmount();
    });

    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers();
        wrapper = render(HelloWorld);
    });

    it('should render', () => {
        const { html, getByText } = wrapper;
        getByText('HelloWorld');
        expect(html()).toMatchSnapshot();
    });
});
