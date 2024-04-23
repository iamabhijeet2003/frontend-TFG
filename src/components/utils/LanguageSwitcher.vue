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
<style scoped>
select {
	padding: 0.2em  0.5em 0.2em 1.5em;
	background-image: url( https://static-00.iconduck.com/assets.00/globe-icon-2048x2048-5ralwwgx.png );
	background-repeat: no-repeat;
	background-size: 0.8em auto;
	background-position: 0.4em center;
	font-size: 1.5em;
  color: black;
 }
 </style>