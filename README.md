# weixin-redpack
微信发企业红包 for node.js

### Installation
```
npm install weixin-redpack
```

### Usage
```js
var wxredpack = require('weixin-redpack');

wxredpack.sendRedpack({
  mch_id: 'xxx',
  partner_key: 'xxxxxxx',
  pfx: fs.readFileSync('./application_cert.p12'),
  wxappid: 'wxxxxxx',
  mch_billno: '1234567890201503251234567890',
  nick_name: 'nickname',
  send_name: 'sendname',
  re_openid: '红包接收人openid'
  total_amount: 100,
  max_value: 100,
  min_value: 100,
  total_num: 1,
  wishing: 'thanks',
  client_ip: '192.168.1.10',
  act_name: '发红包啦',
  remark: '收好不谢！'
}, function(err, result){
  console.log(result);
});
```
