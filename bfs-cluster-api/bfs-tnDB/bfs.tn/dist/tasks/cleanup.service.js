const a43_0x1df3=['hourJsonRegex','getOwnPropertyDescriptor','resolve','mysql','DayDumpRepository','../repositories/hourDump.repository','format','ensureDirSync','__esModule','cleanOldDumps','dayDumpRepository','../repositories/rnode.repository','createLogger','../mysql/mysql.module','length','cleanup','design:paramtypes','maxDate','@nestjs/schedule','@nestjs/common','0\x20*\x20*\x20*\x20*','where','test','design:returntype','hourDumpRepository','date-fns','onTick','readdirSync','design:type','CleanupService','max','decorate','Injectable','Cron','RnodeRepository','dateFormat','../lib/log','metadata','getAll','removeSync','path','fs-extra','defineProperty','info','object','date','HourDumpRepository','prototype','del','subDays','../repositories/dayDump.repository'];(function(_0x1dd656,_0x1df33e){const _0x1086d=function(_0x5da5e4){while(--_0x5da5e4){_0x1dd656['push'](_0x1dd656['shift']());}};_0x1086d(++_0x1df33e);}(a43_0x1df3,0xe1));const a43_0x1086=function(_0x1dd656,_0x1df33e){_0x1dd656=_0x1dd656-0x0;let _0x1086d=a43_0x1df3[_0x1dd656];return _0x1086d;};'use strict';var __decorate=this&&this['__decorate']||function(_0xe1dfb4,_0x3f5726,_0xcf5bee,_0x33d26d){var _0x382e67=arguments[a43_0x1086('0x2c')],_0x2a263b=_0x382e67<0x3?_0x3f5726:_0x33d26d===null?_0x33d26d=Object[a43_0x1086('0x1f')](_0x3f5726,_0xcf5bee):_0x33d26d,_0x5ddd76;if(typeof Reflect===a43_0x1086('0x17')&&typeof Reflect['decorate']==='function')_0x2a263b=Reflect[a43_0x1086('0xa')](_0xe1dfb4,_0x3f5726,_0xcf5bee,_0x33d26d);else for(var _0xc6eaaa=_0xe1dfb4['length']-0x1;_0xc6eaaa>=0x0;_0xc6eaaa--)if(_0x5ddd76=_0xe1dfb4[_0xc6eaaa])_0x2a263b=(_0x382e67<0x3?_0x5ddd76(_0x2a263b):_0x382e67>0x3?_0x5ddd76(_0x3f5726,_0xcf5bee,_0x2a263b):_0x5ddd76(_0x3f5726,_0xcf5bee))||_0x2a263b;return _0x382e67>0x3&&_0x2a263b&&Object['defineProperty'](_0x3f5726,_0xcf5bee,_0x2a263b),_0x2a263b;};var __metadata=this&&this['__metadata']||function(_0xff395b,_0x54fb92){if(typeof Reflect===a43_0x1086('0x17')&&typeof Reflect[a43_0x1086('0x10')]==='function')return Reflect[a43_0x1086('0x10')](_0xff395b,_0x54fb92);};Object[a43_0x1086('0x15')](exports,a43_0x1086('0x26'),{'value':!![]});const common_1=require(a43_0x1086('0x31'));const schedule_1=require(a43_0x1086('0x30'));const date_fns_1=require(a43_0x1086('0x4'));const fs=require(a43_0x1086('0x14'));const path=require(a43_0x1086('0x13'));const config_1=require('../config');const log_1=require(a43_0x1086('0xf'));const mysql_module_1=require(a43_0x1086('0x2b'));const dayDump_repository_1=require(a43_0x1086('0x1d'));const hourDump_repository_1=require(a43_0x1086('0x23'));const rnode_repository_1=require(a43_0x1086('0x29'));const logger=log_1[a43_0x1086('0x2a')](__filename);let CleanupService=class CleanupService{constructor(_0x5ef97e,_0x4d4f4a,_0x48ed3d){this['dayDumpRepository']=_0x5ef97e;this[a43_0x1086('0x3')]=_0x4d4f4a;this['rnodeRepository']=_0x48ed3d;}async[a43_0x1086('0x27')](){const _0x4ded0f=date_fns_1[a43_0x1086('0x24')](new Date(),config_1[a43_0x1086('0xe')]);await this[a43_0x1086('0x3')]['tb'](mysql_module_1[a43_0x1086('0x21')])[a43_0x1086('0x1b')]()[a43_0x1086('0x0')]('date','<',_0x4ded0f);const _0x2b0ab2=date_fns_1[a43_0x1086('0x24')](date_fns_1[a43_0x1086('0x1c')](new Date(),config_1['days4DayDump']),config_1[a43_0x1086('0xe')]);await this['dayDumpRepository']['tb'](mysql_module_1[a43_0x1086('0x21')])[a43_0x1086('0x1b')]()['where'](a43_0x1086('0x18'),'<',_0x2b0ab2);const [{maxDate}]=await this[a43_0x1086('0x28')]['tb'](mysql_module_1['mysql'])[a43_0x1086('0x9')](a43_0x1086('0x18'),{'as':a43_0x1086('0x2f')});if(!maxDate){return;}const _0x31f468=path[a43_0x1086('0x20')](config_1['cacheDir'],'tn');fs[a43_0x1086('0x25')](_0x31f468);const _0x284be2=fs[a43_0x1086('0x6')](_0x31f468);for(const _0x2867c2 of _0x284be2){if(config_1['dateJsonRegex'][a43_0x1086('0x1')](_0x2867c2)&&_0x2867c2<maxDate){const _0x6366be=path[a43_0x1086('0x20')](_0x31f468,_0x2867c2);fs[a43_0x1086('0x12')](_0x6366be);}else if(config_1[a43_0x1086('0x1e')][a43_0x1086('0x1')](_0x2867c2)){const _0x3f21f9=path[a43_0x1086('0x20')](_0x31f468,_0x2867c2);const {mtime}=fs['statSync'](_0x3f21f9);if(date_fns_1[a43_0x1086('0x24')](mtime,config_1[a43_0x1086('0xe')])<_0x4ded0f){fs['removeSync'](_0x3f21f9);}}}}async['cleanOldTexts'](){const _0xdbf405=date_fns_1['format'](date_fns_1['subDays'](new Date(),0x1),config_1[a43_0x1086('0xe')]);const _0x591d69=await this['rnodeRepository'][a43_0x1086('0x11')]();for(const {rnid}of _0x591d69){const _0x282ca5=path[a43_0x1086('0x20')](config_1['cacheDir'],rnid);fs[a43_0x1086('0x25')](_0x282ca5);const _0x2975f7=fs[a43_0x1086('0x6')](_0x282ca5);for(const _0x3423d2 of _0x2975f7){if(_0x3423d2>=_0xdbf405){continue;}const _0x58bf10=path[a43_0x1086('0x20')](_0x282ca5,_0x3423d2);fs[a43_0x1086('0x12')](_0x58bf10);}}}async[a43_0x1086('0x5')](){logger[a43_0x1086('0x16')](a43_0x1086('0x2d'));await this['cleanOldTexts']();await this[a43_0x1086('0x27')]();}};__decorate([schedule_1[a43_0x1086('0xc')](a43_0x1086('0x32')),__metadata(a43_0x1086('0x7'),Function),__metadata(a43_0x1086('0x2e'),[]),__metadata(a43_0x1086('0x2'),Promise)],CleanupService[a43_0x1086('0x1a')],a43_0x1086('0x5'),null);CleanupService=__decorate([common_1[a43_0x1086('0xb')](),__metadata(a43_0x1086('0x2e'),[dayDump_repository_1[a43_0x1086('0x22')],hourDump_repository_1[a43_0x1086('0x19')],rnode_repository_1[a43_0x1086('0xd')]])],CleanupService);exports[a43_0x1086('0x8')]=CleanupService;