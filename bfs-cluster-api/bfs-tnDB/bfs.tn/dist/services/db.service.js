const a36_0x5bd4=['defaultTo','../repositories/md5.repository','createMongodb','\x0a\x20\x20\x20\x20DEFAULT\x20CHARACTER\x20SET\x20utf8\x0a\x20\x20\x20\x20','agfs','createClusterSchema','md5Repository','mysql','DbService','schema','afidRepository','sha1Repository','unique','cluster','specificType','TINYINT','field2IdType','lite','CURRENT_TIMESTAMP\x20ON\x20UPDATE\x20CURRENT_TIMESTAMP','defineProperty','rnodeRepository','createLogger','url','../config','decorate','__esModule','@nestjs/common','createTable','design:paramtypes','arfs','info','withSchema','generateRnodes','getTb','prepareAll','../mongo/mongo.module','agfidRepository','rnodes','updateTime','../repositories/agfid.repository','afs','tnodes','sha1','CHAR(2)','createIndex','transfer\x20cluster.txt\x20to\x20rnodes','BINARY(64)','Md5Repository','hour','mongoClient','dump_daily','md5','upsert','afid','\x0a\x20\x20\x20\x20CREATE\x20DATABASE\x20IF\x20NOT\x20EXISTS\x20','create\x20mongodb','dump_hourly','../repositories/sha1.repository','finished','length','alterTable','date','hasColumn','create\x20','dateTime','AgfidRepository','import_hourly','CHAR(4)','string','__decorate','collection','__metadata','tnDb','raw','metadata','../repositories/rnode.repository','unsigned','rnid','mini','object','AfidRepository','pnodes','RnodeRepository','CHAR(8)','../lib/log','primary','padStart','notNullable','function','hasTable','create\x20cluster\x20schema\x20','toString'];(function(_0x3dd2b5,_0x5bd41c){const _0x3541ff=function(_0x31daca){while(--_0x31daca){_0x3dd2b5['push'](_0x3dd2b5['shift']());}};_0x3541ff(++_0x5bd41c);}(a36_0x5bd4,0x167));const a36_0x3541=function(_0x3dd2b5,_0x5bd41c){_0x3dd2b5=_0x3dd2b5-0x0;let _0x3541ff=a36_0x5bd4[_0x3dd2b5];return _0x3541ff;};'use strict';var __decorate=this&&this[a36_0x3541('0x4e')]||function(_0x58ef83,_0x510a41,_0x510361,_0xbfb74b){var _0x1ffc82=arguments['length'],_0x13a3cd=_0x1ffc82<0x3?_0x510a41:_0xbfb74b===null?_0xbfb74b=Object['getOwnPropertyDescriptor'](_0x510a41,_0x510361):_0xbfb74b,_0x5246c4;if(typeof Reflect===a36_0x3541('0x58')&&typeof Reflect[a36_0x3541('0x21')]===a36_0x3541('0x5'))_0x13a3cd=Reflect[a36_0x3541('0x21')](_0x58ef83,_0x510a41,_0x510361,_0xbfb74b);else for(var _0x4df98e=_0x58ef83[a36_0x3541('0x44')]-0x1;_0x4df98e>=0x0;_0x4df98e--)if(_0x5246c4=_0x58ef83[_0x4df98e])_0x13a3cd=(_0x1ffc82<0x3?_0x5246c4(_0x13a3cd):_0x1ffc82>0x3?_0x5246c4(_0x510a41,_0x510361,_0x13a3cd):_0x5246c4(_0x510a41,_0x510361))||_0x13a3cd;return _0x1ffc82>0x3&&_0x13a3cd&&Object['defineProperty'](_0x510a41,_0x510361,_0x13a3cd),_0x13a3cd;};var __metadata=this&&this[a36_0x3541('0x50')]||function(_0x5abffd,_0x1ffa9d){if(typeof Reflect===a36_0x3541('0x58')&&typeof Reflect[a36_0x3541('0x53')]==='function')return Reflect[a36_0x3541('0x53')](_0x5abffd,_0x1ffa9d);};Object[a36_0x3541('0x1c')](exports,a36_0x3541('0x22'),{'value':!![]});const common_1=require(a36_0x3541('0x23'));const config_1=require(a36_0x3541('0x20'));const log_1=require(a36_0x3541('0x1'));const mongo_module_1=require(a36_0x3541('0x2c'));const mysql_module_1=require('../mysql/mysql.module');const afid_repository_1=require('../repositories/afid.repository');const agfid_repository_1=require(a36_0x3541('0x30'));const md5_repository_1=require(a36_0x3541('0xa'));const rnode_repository_1=require(a36_0x3541('0x54'));const sha1_repository_1=require(a36_0x3541('0x42'));const logger=log_1[a36_0x3541('0x1e')](__filename);let DbService=class DbService{constructor(_0x29c447,_0x443a0c,_0xec3575,_0x533c36,_0x2cf671){this[a36_0x3541('0x1d')]=_0x29c447;this[a36_0x3541('0x13')]=_0x443a0c;this[a36_0x3541('0x2d')]=_0xec3575;this[a36_0x3541('0xf')]=_0x533c36;this[a36_0x3541('0x14')]=_0x2cf671;}async['createMongodb'](){logger['info'](a36_0x3541('0x40'));for(let _0x328e15=0x0;_0x328e15<=0xff;_0x328e15+=0x1){const _0x43387f=_0x328e15[a36_0x3541('0x8')](0x10)[a36_0x3541('0x3')](0x2,'0');for(const _0x4ff3d3 of config_1['fields']){const _0x542093=mongo_module_1[a36_0x3541('0x3a')]['db'](_0x4ff3d3);const _0x5c4a44={};_0x5c4a44[config_1[a36_0x3541('0x19')][_0x4ff3d3]]=0x1;await _0x542093[a36_0x3541('0x4f')](_0x43387f)[a36_0x3541('0x35')](_0x5c4a44,{'unique':!![]});}}}async['createTnode'](){logger[a36_0x3541('0x27')](a36_0x3541('0x48')+config_1['tnDb']);const _0x3f963f=a36_0x3541('0x3f')+config_1[a36_0x3541('0x51')]+a36_0x3541('0xc');await mysql_module_1[a36_0x3541('0x10')]['raw'](_0x3f963f);if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x6')]('dump_hourly')){await mysql_module_1[a36_0x3541('0x10')]['schema'][a36_0x3541('0x28')](config_1['tnDb'])[a36_0x3541('0x24')](a36_0x3541('0x41'),_0x50df9b=>{_0x50df9b[a36_0x3541('0x17')](a36_0x3541('0x46'),a36_0x3541('0x0'))[a36_0x3541('0x4')]();_0x50df9b[a36_0x3541('0x17')]('hour',a36_0x3541('0x34'))[a36_0x3541('0x4')]();_0x50df9b[a36_0x3541('0x17')]('afid',a36_0x3541('0x37'))[a36_0x3541('0x4')]();_0x50df9b['primary']([a36_0x3541('0x46'),'hour']);});}if(!await mysql_module_1[a36_0x3541('0x10')]['schema'][a36_0x3541('0x28')](config_1['tnDb'])[a36_0x3541('0x6')](a36_0x3541('0x3b'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x24')](a36_0x3541('0x3b'),_0x2fca20=>{_0x2fca20['specificType'](a36_0x3541('0x46'),a36_0x3541('0x0'))[a36_0x3541('0x2')]();_0x2fca20[a36_0x3541('0x17')]('afid',a36_0x3541('0x37'))[a36_0x3541('0x4')]();});}if(!await mysql_module_1['mysql'][a36_0x3541('0x12')]['withSchema'](config_1['tnDb'])[a36_0x3541('0x6')](a36_0x3541('0x4b'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x24')](a36_0x3541('0x4b'),_0x439c71=>{_0x439c71['specificType'](a36_0x3541('0x16'),'CHAR(4)')[a36_0x3541('0x4')]();_0x439c71[a36_0x3541('0x17')]('date',a36_0x3541('0x0'))['notNullable']();_0x439c71[a36_0x3541('0x17')](a36_0x3541('0x39'),'CHAR(2)')[a36_0x3541('0x4')]();_0x439c71['specificType'](a36_0x3541('0x3e'),a36_0x3541('0x37'))[a36_0x3541('0x4')]();_0x439c71[a36_0x3541('0x17')](a36_0x3541('0x43'),a36_0x3541('0x18'))[a36_0x3541('0x55')]()[a36_0x3541('0x4')]()[a36_0x3541('0x9')](0x0);_0x439c71['primary']([a36_0x3541('0x16'),a36_0x3541('0x46'),a36_0x3541('0x39')]);});}if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x6')]('import_daily')){await mysql_module_1['mysql']['schema']['withSchema'](config_1[a36_0x3541('0x51')])[a36_0x3541('0x24')]('import_daily',_0x5b1830=>{_0x5b1830[a36_0x3541('0x17')](a36_0x3541('0x16'),a36_0x3541('0x4c'))['notNullable']();_0x5b1830['specificType'](a36_0x3541('0x46'),'CHAR(8)')[a36_0x3541('0x4')]();_0x5b1830[a36_0x3541('0x17')](a36_0x3541('0x3e'),'BINARY(64)')['notNullable']();_0x5b1830[a36_0x3541('0x17')](a36_0x3541('0x43'),'TINYINT')['unsigned']()['notNullable']()[a36_0x3541('0x9')](0x0);_0x5b1830[a36_0x3541('0x2')]([a36_0x3541('0x16'),'date']);});}if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x6')](a36_0x3541('0x32'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])['createTable'](a36_0x3541('0x32'),_0xfaeed4=>{_0xfaeed4[a36_0x3541('0x17')]('cluster',a36_0x3541('0x4c'))[a36_0x3541('0x4')]()[a36_0x3541('0x2')]();_0xfaeed4['string'](a36_0x3541('0x1f'))[a36_0x3541('0x4')]()[a36_0x3541('0x9')]('');});}if(!await mysql_module_1['mysql'][a36_0x3541('0x12')]['withSchema'](config_1[a36_0x3541('0x51')])['hasTable'](a36_0x3541('0x5a'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1['tnDb'])['createTable'](a36_0x3541('0x5a'),_0x4f6c68=>{_0x4f6c68[a36_0x3541('0x4d')](a36_0x3541('0x1f'))[a36_0x3541('0x4')]();});}if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x6')](a36_0x3541('0x2e'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](config_1[a36_0x3541('0x51')])[a36_0x3541('0x24')](a36_0x3541('0x2e'),_0x5535ed=>{_0x5535ed[a36_0x3541('0x17')](a36_0x3541('0x56'),a36_0x3541('0x4c'))['primary']();_0x5535ed[a36_0x3541('0x4d')]('url')[a36_0x3541('0x4')]();});}}async[a36_0x3541('0xe')](_0x9aac69){logger[a36_0x3541('0x27')](a36_0x3541('0x7')+_0x9aac69);const _0x37b39e=a36_0x3541('0x3f')+_0x9aac69+a36_0x3541('0xc');await mysql_module_1['mysql']['raw'](_0x37b39e);for(let _0x7169b0=0x0;_0x7169b0<=0xff;_0x7169b0+=0x1){const _0xd25501=_0x7169b0[a36_0x3541('0x8')](0x10)[a36_0x3541('0x3')](0x2,'0');const _0x2677a3=this['afidRepository'][a36_0x3541('0x2a')](_0xd25501);if(!await mysql_module_1['mysql'][a36_0x3541('0x12')][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x6')](_0x2677a3)){await mysql_module_1['mysql'][a36_0x3541('0x12')][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x24')](_0x2677a3,_0x36bf24=>{_0x36bf24[a36_0x3541('0x17')]('afid','BINARY(64)')[a36_0x3541('0x2')]();_0x36bf24[a36_0x3541('0x17')](a36_0x3541('0x31'),'TINYINT')[a36_0x3541('0x55')]()[a36_0x3541('0x4')]()[a36_0x3541('0x9')](0x0);_0x36bf24[a36_0x3541('0x17')](a36_0x3541('0x26'),a36_0x3541('0x18'))['unsigned']()[a36_0x3541('0x4')]()[a36_0x3541('0x9')](0x0);_0x36bf24[a36_0x3541('0x49')](a36_0x3541('0x2f'))[a36_0x3541('0x4')]()[a36_0x3541('0x9')](mysql_module_1[a36_0x3541('0x10')]['raw'](a36_0x3541('0x1b')));});}const _0xaee0e5=_0x9aac69+'.'+_0x2677a3;if(!await mysql_module_1[a36_0x3541('0x10')]['schema'][a36_0x3541('0x47')](_0xaee0e5,a36_0x3541('0x57'))){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x45')](_0x2677a3,_0x438dcc=>{_0x438dcc[a36_0x3541('0x17')]('mini','BINARY(12)')[a36_0x3541('0x15')]();});}if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x47')](_0xaee0e5,'lite')){await mysql_module_1[a36_0x3541('0x10')]['schema']['withSchema'](_0x9aac69)[a36_0x3541('0x45')](_0x2677a3,_0x1109ac=>{_0x1109ac[a36_0x3541('0x17')](a36_0x3541('0x1a'),'BINARY(28)')['unique']();});}const _0x3509cc=this['agfidRepository'][a36_0x3541('0x2a')](_0xd25501);if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')]['withSchema'](_0x9aac69)[a36_0x3541('0x6')](_0x3509cc)){await mysql_module_1['mysql']['schema'][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x24')](_0x3509cc,_0x1d6818=>{_0x1d6818[a36_0x3541('0x17')]('agfid','BINARY(16)')['primary']();_0x1d6818[a36_0x3541('0x17')](a36_0x3541('0xd'),a36_0x3541('0x18'))[a36_0x3541('0x55')]()[a36_0x3541('0x4')]()['defaultTo'](0x0);_0x1d6818[a36_0x3541('0x49')]('updateTime')[a36_0x3541('0x4')]()[a36_0x3541('0x9')](mysql_module_1[a36_0x3541('0x10')]['raw'](a36_0x3541('0x1b')));});}const _0x5794d4=this[a36_0x3541('0xf')][a36_0x3541('0x2a')](_0xd25501);if(!await mysql_module_1['mysql']['schema'][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x6')](_0x5794d4)){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](_0x9aac69)[a36_0x3541('0x24')](_0x5794d4,_0x12db23=>{_0x12db23[a36_0x3541('0x17')](a36_0x3541('0x3c'),'BINARY(16)')['primary']();_0x12db23[a36_0x3541('0x17')](a36_0x3541('0x3e'),a36_0x3541('0x37'))[a36_0x3541('0x4')]();_0x12db23['dateTime'](a36_0x3541('0x2f'))[a36_0x3541('0x4')]()[a36_0x3541('0x9')](mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x52')]('CURRENT_TIMESTAMP\x20ON\x20UPDATE\x20CURRENT_TIMESTAMP'));});}const _0x16095d=this[a36_0x3541('0x14')][a36_0x3541('0x2a')](_0xd25501);if(!await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')]['withSchema'](_0x9aac69)['hasTable'](_0x16095d)){await mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x12')][a36_0x3541('0x28')](_0x9aac69)['createTable'](_0x16095d,_0x7f609=>{_0x7f609[a36_0x3541('0x17')](a36_0x3541('0x33'),'BINARY(20)')[a36_0x3541('0x2')]();_0x7f609[a36_0x3541('0x17')]('afid',a36_0x3541('0x37'))[a36_0x3541('0x4')]();_0x7f609[a36_0x3541('0x49')](a36_0x3541('0x2f'))['notNullable']()[a36_0x3541('0x9')](mysql_module_1[a36_0x3541('0x10')][a36_0x3541('0x52')](a36_0x3541('0x1b')));});}}}async[a36_0x3541('0x2b')](_0x28eb9b){await this[a36_0x3541('0xe')](_0x28eb9b);await this['createTnode']();await this[a36_0x3541('0xb')]();}async[a36_0x3541('0x29')](_0x2527cf){logger['info'](a36_0x3541('0x36'));for(const _0x396d04 of _0x2527cf){if(!_0x396d04){continue;}const _0x2966cc=_0x396d04['match'](config_1['rsRegex']);if(!_0x2966cc){logger['error'](_0x396d04);continue;}const [,_0x20870,_0x4bff95]=_0x2966cc;const _0xf71f7b=_0x20870+':'+config_1['rnPort'];await this[a36_0x3541('0x1d')][a36_0x3541('0x3d')]({'rnid':_0x4bff95,'url':_0xf71f7b});}}};DbService=__decorate([common_1['Injectable'](),__metadata(a36_0x3541('0x25'),[rnode_repository_1[a36_0x3541('0x5b')],afid_repository_1[a36_0x3541('0x59')],agfid_repository_1[a36_0x3541('0x4a')],md5_repository_1[a36_0x3541('0x38')],sha1_repository_1['Sha1Repository']])],DbService);exports[a36_0x3541('0x11')]=DbService;