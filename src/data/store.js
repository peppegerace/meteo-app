import { reactive } from "vue";

export const store = reactive({

  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast?',
  apiParams: {
    appid: '6b8149d201df021f2967a0762bb819bb',
  },
})