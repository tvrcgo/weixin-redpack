# weixin-redpack
微信发企业红包 for node.js

### Installation
```
npm install weixin-redpack
```

### Usage

先创建一个红包实例 Redpack，再调用 send() 发送红包，减少每次发红包的参数。
```js
var Redpack = require('weixin-redpack').Redpack;

var redpack = Redpack({
	mch_id: 'xxx',
	partner_key: 'xxxxxx',
	pfx: fs.readFileSync('./wxpay_cert.p12'),
	wxappid: 'wxxxxxxx'
});

redpack.send({
	mch_billno: '123426900220150325'+Math.random().toString().substr(2,10),
	send_name: '红包来自',
	wishing: '收好不谢！',
	re_openid: '红包接收人openid',
	total_amount: 100,
	total_num: 1,
	client_ip: '14.23.102.146',
	nick_name: 'XXXX',
	act_name: '发测试红包',
	remark: 'remark'
}, function(err, result){
	console.log(result);
})
```

直接调用 sendRedpack() 输入所有参数。
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
