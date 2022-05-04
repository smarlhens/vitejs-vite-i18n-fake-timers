import { createI18n } from 'vue-i18n';

import common from '../locales/common.json';

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'en',
    locale: 'en',
    messages: common,
});
