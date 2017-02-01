# ng-uuid

---

Angular.js service and directive to generate uuid.

Usage
-----

- Require module

```
angular.module('app', ['uuid'])

.controller('mainCtrl', ['uuid', function (uuid) {

	console.info('new uuid', uuid.new());

}]);
```

- In view

```
<div uuid>Hello world</div>
```

It'll output as below.

```
<div data-uuid="1de6e2f2-5c16-5572-06ac-abc754d994d2">Hello world</div>
```



