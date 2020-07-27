import { IDENTITY_CONFIG, METADATA_OIDC } from "../constant/authConst";
import { UserManager, WebStorageStateStore, Log, WebStorageStateStoreSettings} from "oidc-client";

const oidcUserManager = new UserManager({
    ...IDENTITY_CONFIG,
    userStore: new WebStorageStateStore({ store: window.localStorage}),
    metadata: {
        ...METADATA_OIDC
    }});

oidcUserManager.navigateToScreen = (path) => {
        window.location.replace(path);
    };
oidcUserManager.events.addUserLoaded((user) => {
    if (window.location.href.indexOf("signin-oidc") !== -1) {
        oidcUserManager.navigateToScreen(user.state ?? "/");
    }
});
oidcUserManager.events.addSilentRenewError((e) => {
    console.log("silent renew error", e.message);
});

oidcUserManager.events.addAccessTokenExpired(() => {
    console.log("token expired");
    oidcUserManager.logout();
});

oidcUserManager.isAuthenticated = () => {

    const oidcStorage = JSON.parse(localStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))

    return (!!oidcStorage && !!oidcStorage.access_token)
};

oidcUserManager.logout =  (path = "/") => {
    oidcUserManager.signoutRedirect({
        id_token_hint: localStorage.getItem("id_token")
    });
    oidcUserManager.clearStaleState();
    oidcUserManager.login();
}
oidcUserManager.login = async (path = "/") => {
    return oidcUserManager.signinRedirect({
      data: path
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  async function removeUserAndSignIn() {
    await oidcUserManager.removeUser();
    oidcUserManager.login();
  }

export default oidcUserManager;