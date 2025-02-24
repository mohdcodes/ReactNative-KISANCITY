import SuperTokens from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import redirectToAuth  from "supertokens-auth-react/recipe/passwordless";

const apiBasePath = "https://your-supertokens-api.example.com/auth"; // Replace with your SuperTokens backend URL

SuperTokens.init({
  appInfo: {
    appName: "Kisan City",
    apiDomain: apiBasePath,
    websiteDomain: "http://localhost:8081",
  },
  recipeList: [
    Passwordless.init({
      contactMethod: "PHONE",
    }),
    Session.init(),
  ],
});

export { redirectToAuth, getSuperTokensRoutesForReactRouterDom };
