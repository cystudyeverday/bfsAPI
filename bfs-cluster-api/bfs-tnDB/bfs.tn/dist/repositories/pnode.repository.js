var a31_0x1362=['decorate','@nestjs/common','__decorate','function','pnodes','withSchema','getFromConfig','Injectable','tnDb','../mysql/mysql.module','getOwnPropertyDescriptor','insert','__esModule','defineProperty','select','mysql','length'];(function(_0x576479,_0x1362d2){var _0x16cd60=function(_0x2cca2b){while(--_0x2cca2b){_0x576479['push'](_0x576479['shift']());}};_0x16cd60(++_0x1362d2);}(a31_0x1362,0x1d3));var a31_0x16cd=function(_0x576479,_0x1362d2){_0x576479=_0x576479-0x0;var _0x16cd60=a31_0x1362[_0x576479];return _0x16cd60;};'use strict';var __decorate=this&&this[a31_0x16cd('0xb')]||function(_0x5e3a15,_0x555a59,_0x594d55,_0x30d34d){var _0x3e75f2=arguments['length'],_0x47fec1=_0x3e75f2<0x3?_0x555a59:_0x30d34d===null?_0x30d34d=Object[a31_0x16cd('0x2')](_0x555a59,_0x594d55):_0x30d34d,_0x4b662a;if(typeof Reflect==='object'&&typeof Reflect[a31_0x16cd('0x9')]===a31_0x16cd('0xc'))_0x47fec1=Reflect['decorate'](_0x5e3a15,_0x555a59,_0x594d55,_0x30d34d);else for(var _0x51d718=_0x5e3a15[a31_0x16cd('0x8')]-0x1;_0x51d718>=0x0;_0x51d718--)if(_0x4b662a=_0x5e3a15[_0x51d718])_0x47fec1=(_0x3e75f2<0x3?_0x4b662a(_0x47fec1):_0x3e75f2>0x3?_0x4b662a(_0x555a59,_0x594d55,_0x47fec1):_0x4b662a(_0x555a59,_0x594d55))||_0x47fec1;return _0x3e75f2>0x3&&_0x47fec1&&Object[a31_0x16cd('0x5')](_0x555a59,_0x594d55,_0x47fec1),_0x47fec1;};Object[a31_0x16cd('0x5')](exports,a31_0x16cd('0x4'),{'value':!![]});const common_1=require(a31_0x16cd('0xa'));const config_1=require('../config');const mysql_module_1=require(a31_0x16cd('0x1'));let PnodeRepository=class PnodeRepository{async['getAll'](){return mysql_module_1[a31_0x16cd('0x7')]('pnodes')[a31_0x16cd('0xe')](config_1[a31_0x16cd('0x0')])[a31_0x16cd('0x6')]();}[a31_0x16cd('0xf')](){return config_1[a31_0x16cd('0xd')];}async['createOne'](_0x3ee93d){await mysql_module_1[a31_0x16cd('0x7')]('pnodes')[a31_0x16cd('0xe')](config_1[a31_0x16cd('0x0')])[a31_0x16cd('0x3')](_0x3ee93d);}};PnodeRepository=__decorate([common_1[a31_0x16cd('0x10')]()],PnodeRepository);exports['PnodeRepository']=PnodeRepository;