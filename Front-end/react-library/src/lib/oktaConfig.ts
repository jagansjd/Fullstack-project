export const oktaConfig = {
  clientId: "0oaebciktxlsNYEIf5d7",
  issuer: "https://dev-02140585.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
