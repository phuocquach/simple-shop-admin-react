import axios from "axios";
import React from "react";
import oidcUserManager from "../../service/authService";
//import app from "@/main";
//import { UserState } from '@/constants/enums';

const axiosInterceptor = {
  setup() {
    axios.defaults.baseURL = process.env.REACT_APP_URL;
    axios.interceptors.request.use(
      async config => {
        let access_token = await this.loadAccessToken();

        if (access_token) {
          config.headers.common["Authorization"] = `Bearer ${access_token}`;
        }

        //config.headers.common["ui-culture"] = Vue.i18n.locale();
        
        config.headers["Pragma"] = "no-cache";
        //bus.$emit('loadingState', true);

        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        //bus.$emit('loadingState', false);
        return Promise.resolve(response);
      },
      (error) => {
        if (error.response.status === 401) {
          //bus.$emit('unsubscribeEvent', true);
          return oidcUserManager.logout("/");
        }

        // let noDetails = error.response.data.details == null || (error.response.data.details.length === 0);
        // if (error.response.status === 400 && noDetails) {
        //   app.$toast.error(
        //     app.$t(`errorMessage.errorType.badRequest.${error.response.data.errorCode}`),
        //     app.$t('errorMessage.title')
        //   );
        // }

        // if (error.response.status === 500) {
        //   app.$toast.error(
        //     app.$t(`errorMessage.errorType.internal.message`),
        //     app.$t('errorMessage.title')
        //   );
        // }

        //bus.$emit('loadingState', false);

        return Promise.reject(error);
      }
    );
  },
  async loadAccessToken() {
    let user = await oidcUserManager.getUser();
    if (user) {
      return user.access_token;
    }
  }
};

export default axiosInterceptor;
