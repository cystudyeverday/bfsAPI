var a25_0x1990=['call','getOwnPropertySymbols','getPostfix','propertyIsEnumerable','AgfidRepository','decorate','../lib/utils','defineProperty','function','upsertFactory','getOwnPropertyDescriptor','getTb','@nestjs/common','indexOf','where','agfid','Injectable','length','prototype','../mysql/mysql.module','upsert','withSchema','__decorate','__rest','__esModule'];(function(_0x469f93,_0x1990cc){var _0x2eeeda=function(_0x183b0b){while(--_0x183b0b){_0x469f93['push'](_0x469f93['shift']());}};_0x2eeeda(++_0x1990cc);}(a25_0x1990,0x18c));var a25_0x2eee=function(_0x469f93,_0x1990cc){_0x469f93=_0x469f93-0x0;var _0x2eeeda=a25_0x1990[_0x469f93];return _0x2eeeda;};'use strict';var __decorate=this&&this[a25_0x2eee('0x1')]||function(_0x42bfd9,_0x474f43,_0x53f0b2,_0x380551){var _0x2d7094=arguments[a25_0x2eee('0x15')],_0x4ec430=_0x2d7094<0x3?_0x474f43:_0x380551===null?_0x380551=Object[a25_0x2eee('0xe')](_0x474f43,_0x53f0b2):_0x380551,_0x39a17c;if(typeof Reflect==='object'&&typeof Reflect['decorate']===a25_0x2eee('0xc'))_0x4ec430=Reflect[a25_0x2eee('0x9')](_0x42bfd9,_0x474f43,_0x53f0b2,_0x380551);else for(var _0x591366=_0x42bfd9[a25_0x2eee('0x15')]-0x1;_0x591366>=0x0;_0x591366--)if(_0x39a17c=_0x42bfd9[_0x591366])_0x4ec430=(_0x2d7094<0x3?_0x39a17c(_0x4ec430):_0x2d7094>0x3?_0x39a17c(_0x474f43,_0x53f0b2,_0x4ec430):_0x39a17c(_0x474f43,_0x53f0b2))||_0x4ec430;return _0x2d7094>0x3&&_0x4ec430&&Object[a25_0x2eee('0xb')](_0x474f43,_0x53f0b2,_0x4ec430),_0x4ec430;};var __rest=this&&this[a25_0x2eee('0x2')]||function(_0x44d385,_0x29598b){var _0x169d29={};for(var _0x56ec56 in _0x44d385)if(Object[a25_0x2eee('0x16')]['hasOwnProperty'][a25_0x2eee('0x4')](_0x44d385,_0x56ec56)&&_0x29598b[a25_0x2eee('0x11')](_0x56ec56)<0x0)_0x169d29[_0x56ec56]=_0x44d385[_0x56ec56];if(_0x44d385!=null&&typeof Object[a25_0x2eee('0x5')]===a25_0x2eee('0xc'))for(var _0x2e7787=0x0,_0x56ec56=Object[a25_0x2eee('0x5')](_0x44d385);_0x2e7787<_0x56ec56[a25_0x2eee('0x15')];_0x2e7787++){if(_0x29598b[a25_0x2eee('0x11')](_0x56ec56[_0x2e7787])<0x0&&Object['prototype'][a25_0x2eee('0x7')][a25_0x2eee('0x4')](_0x44d385,_0x56ec56[_0x2e7787]))_0x169d29[_0x56ec56[_0x2e7787]]=_0x44d385[_0x56ec56[_0x2e7787]];}return _0x169d29;};Object[a25_0x2eee('0xb')](exports,a25_0x2eee('0x3'),{'value':!![]});const common_1=require(a25_0x2eee('0x10'));const utils_1=require(a25_0x2eee('0xa'));const mysql_module_1=require(a25_0x2eee('0x17'));let AgfidRepository=class AgfidRepository{[a25_0x2eee('0xf')](_0x38c16c){return'agfid_'+_0x38c16c;}async['getOne'](_0x56d659,_0x122e9e,_0x549ac4){return mysql_module_1['mysql'](this[a25_0x2eee('0xf')](_0x122e9e))[a25_0x2eee('0x0')](_0x56d659)['first']()[a25_0x2eee('0x12')](_0x549ac4);}async[a25_0x2eee('0x18')](_0x2c8621,_0x4f5e81,_0x2c624b){const {agfid}=_0x2c624b,_0x2f45d8=__rest(_0x2c624b,[a25_0x2eee('0x13')]);const _0x37bcba=utils_1[a25_0x2eee('0x6')](utils_1['buffer2Hex'](agfid));return utils_1[a25_0x2eee('0xd')](_0x2c8621,_0x4f5e81,this[a25_0x2eee('0xf')](_0x37bcba),_0x2c624b,_0x2f45d8,{'agfid':agfid});}};AgfidRepository=__decorate([common_1[a25_0x2eee('0x14')]()],AgfidRepository);exports[a25_0x2eee('0x8')]=AgfidRepository;