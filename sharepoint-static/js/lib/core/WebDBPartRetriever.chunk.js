/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[15],{441:function(Aa,ua,r){r.r(ua);var pa=r(1),ka=r(0);r.n(ka);Aa=r(94);r=r(372);Aa=function(ma){function ha(da,aa,x){aa=ma.call(this,da,aa,x)||this;aa.db=da;return aa}Object(pa.c)(ha,ma);ha.prototype.request=function(da){var aa=this;Object(ka.each)(da,function(x){aa.db.get(x,function(y,h,e){return y?aa.trigger("partReady",{Ya:x,error:y}):aa.trigger("partReady",{Ya:x,data:h,zi:!1,Tf:!1,error:null,$c:e})})})};ha.prototype.et=function(da){da()};
return ha}(Aa.a);Object(r.a)(Aa);Object(r.b)(Aa);ua["default"]=Aa}}]);}).call(this || window)