import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import HelloWorldI18n from '../src/components/hello-world-i18n.vue';
import { i18n } from '../src/i18n';

describe('HelloWorldI18n', () => {
    let wrapper: RenderResult;

    afterEach(() => {
        wrapper.unmount();
    });

    beforeEach(() => {
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
