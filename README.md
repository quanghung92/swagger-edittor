#1: cài đặt thư viện swagger editor để show swagger editor trong source code
https://www.npmjs.com/package/swagger-editor


#2: cài đặt thư viện "js-yaml" để convert yaml to json
npm install js-yaml -g

vd:
var yaml = require('js-yaml'),
obj = yaml.load(yaml_object);
var result = JSON.stringify(obj, null, 2)

#3: cài đặt thư viện "yaml" để convert từ json to yaml
npm install yaml

vd:
YAML.stringify(json_object)

