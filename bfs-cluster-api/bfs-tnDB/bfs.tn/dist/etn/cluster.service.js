const a9_0xcbc4=['getOwnPropertyDescriptor','design:paramtypes','length','defineProperty','decorate','tnodeRepository','@nestjs/common','../repositories/tnode.repository','getAll','function','__esModule','Injectable','TnodeRepository','__decorate','object','ClusterService'];(function(_0x2f8125,_0xcbc4f){const _0x3fc8f8=function(_0x41e50e){while(--_0x41e50e){_0x2f8125['push'](_0x2f8125['shift']());}};_0x3fc8f8(++_0xcbc4f);}(a9_0xcbc4,0x12b));const a9_0x3fc8=function(_0x2f8125,_0xcbc4f){_0x2f8125=_0x2f8125-0x0;let _0x3fc8f8=a9_0xcbc4[_0x2f8125];return _0x3fc8f8;};'use strict';var __decorate=this&&this[a9_0x3fc8('0x2')]||function(_0xdf1c9f,_0x6d2d21,_0x13c102,_0x31b495){var _0x4b14a7=arguments['length'],_0x1a6f1f=_0x4b14a7<0x3?_0x6d2d21:_0x31b495===null?_0x31b495=Object[a9_0x3fc8('0x5')](_0x6d2d21,_0x13c102):_0x31b495,_0x31ef9b;if(typeof Reflect===a9_0x3fc8('0x3')&&typeof Reflect[a9_0x3fc8('0x9')]===a9_0x3fc8('0xe'))_0x1a6f1f=Reflect['decorate'](_0xdf1c9f,_0x6d2d21,_0x13c102,_0x31b495);else for(var _0x1d5eb0=_0xdf1c9f[a9_0x3fc8('0x7')]-0x1;_0x1d5eb0>=0x0;_0x1d5eb0--)if(_0x31ef9b=_0xdf1c9f[_0x1d5eb0])_0x1a6f1f=(_0x4b14a7<0x3?_0x31ef9b(_0x1a6f1f):_0x4b14a7>0x3?_0x31ef9b(_0x6d2d21,_0x13c102,_0x1a6f1f):_0x31ef9b(_0x6d2d21,_0x13c102))||_0x1a6f1f;return _0x4b14a7>0x3&&_0x1a6f1f&&Object[a9_0x3fc8('0x8')](_0x6d2d21,_0x13c102,_0x1a6f1f),_0x1a6f1f;};var __metadata=this&&this['__metadata']||function(_0x4d563d,_0x5bd497){if(typeof Reflect===a9_0x3fc8('0x3')&&typeof Reflect['metadata']===a9_0x3fc8('0xe'))return Reflect['metadata'](_0x4d563d,_0x5bd497);};Object[a9_0x3fc8('0x8')](exports,a9_0x3fc8('0xf'),{'value':!![]});const common_1=require(a9_0x3fc8('0xb'));const tnode_repository_1=require(a9_0x3fc8('0xc'));let ClusterService=class ClusterService{constructor(_0x4e2366){this[a9_0x3fc8('0xa')]=_0x4e2366;}async[a9_0x3fc8('0xd')](){const _0x156d21=await this['tnodeRepository'][a9_0x3fc8('0xd')]();const _0x1dd640={};for(const {cluster,url}of _0x156d21){_0x1dd640[cluster]=url;}return _0x1dd640;}};ClusterService=__decorate([common_1[a9_0x3fc8('0x0')](),__metadata(a9_0x3fc8('0x6'),[tnode_repository_1[a9_0x3fc8('0x1')]])],ClusterService);exports[a9_0x3fc8('0x4')]=ClusterService;