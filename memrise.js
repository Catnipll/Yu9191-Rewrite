var body = $response.body;


body = body.replace(/"is_pro":\s*false/g, '"is_pro":true');

body = body.replace(/"is_premium":\s*false/g, '"is_premium":true');

body = body.replace(/"is_locked":\s*false/g, '"is_locked":true');

$done({ body });