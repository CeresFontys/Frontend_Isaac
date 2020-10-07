 
 var OidcSettings = {    
    authority: 'https://server.kurza.nl/identity',
    client_id: 'myclientid',
    redirect_uri: 'https://localhost:9090/',    
    response_type: 'id_token token',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'https://localhost:9090/'      
};
export default {OidcSettings}