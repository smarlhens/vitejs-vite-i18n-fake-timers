import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import HelloWorldI18n from '../src/components/hello-world-i18n.vue';
import { i18n } from '../src/i18n';

describe('HelloWorldI18n w/ fake timers', () => {
    let wrapper: RenderResult;

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers();
        wrapper.unmount();
    });

    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers();

        const mountOptions = {
            global: {
                plugins: [i18n],
            }
        }

        wrapper = render(HelloWorldI18n, mountOptions);
    });

    it('should render', () => {
        const { html, getByText } = wrapper;
        getByText('HelloWorld');
        expect(html()).toMatchSnapshot();
    });
});
