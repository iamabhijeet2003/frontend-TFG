<!-- /src/components/utils/LanguageSwitcher.vue -->
<template>
    <select class="App-language form-select" v-model="locale">
      <option
        v-for="optionLocale in supportLocales"
        :key="`locale-${optionLocale}`"
        :value="optionLocale">{{ optionLocale }}
      </option>
    </select>
  </template>
<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
  setI18nLanguage(val);
});
</script>
