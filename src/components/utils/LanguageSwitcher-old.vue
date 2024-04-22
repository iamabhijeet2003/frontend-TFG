<template>
    <select v-model="locale" @change="savelocale">
      <option v-for="sLocale in availableLocales" :key="sLocale" :value="sLocale" :selected="locale === sLocale">
        {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
  </template>
  
  <script>
  import { watch } from "vue";
  import { useI18n } from "vue-i18n";
  
  export default {
    name: "LanguageSwitcher",
    setup() {
      const { t, locale, availableLocales } = useI18n();
  
      if (document.documentElement.lang == '') {
        document.documentElement.lang = 'en';
      }
  
      const savelocale = (event) => {
        const selectedLocale = event.target.value;
        localStorage.setItem("user-locale", selectedLocale);
        locale.value = selectedLocale;
      };
  
      // Initialize locale from localStorage if available
      const savedLocale = localStorage.getItem("user-locale");
      if (savedLocale && availableLocales.includes(savedLocale)) {
        locale.value = document.documentElement.lang = savedLocale;
      }
  
      // Watch for changes in locale and update document language
      watch(locale, (newLocale) => {
        document.documentElement.lang = newLocale;
      });
  
      return { t, locale, availableLocales, savelocale };
    }
  }
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  