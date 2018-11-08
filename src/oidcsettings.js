var OidcSettings = {    
    authority: 'http://162.22.0.64:8080/auth/realms/blog_demo/.well-known/openid-configuration',
    client_id: 'blog-post-demo-client-001',
    redirect_uri: 'http://localhost:3000/callback ',    
    response_type: 'id_token token',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'https://localhost:9090/'      
};