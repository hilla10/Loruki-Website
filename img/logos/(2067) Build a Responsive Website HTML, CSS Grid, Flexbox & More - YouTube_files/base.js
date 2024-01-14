var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
/*


 The MIT License (MIT)

 Copyright (c) 2015-present Dan Abramov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
'use strict';var aa,baa,caa,na,daa,oa,eaa,ta,wa,ya,Aa,gaa,haa,Ia,Ja,iaa,jaa,Ma,kaa,Pa,Ra,Sa,Ya,Za,maa,naa,ob,oaa,rb,sb,tb,zb,Ab,paa,qaa,Db,saa,taa,Qb,uaa,Yb,vaa,waa,Vb,xaa,yaa,zaa,Aaa,Caa,Baa,Daa,hc,Eaa,jc,lc,nc,uc,vc,wc,Ac,Bc,Cc,Maa,Ec,Gc,Fc,Naa,Oaa,Paa,Qaa,Hc,Raa,Ic,Jc,Kc,Saa,Lc,Mc,Uaa,Vaa,Xaa,Sc,Tc,$aa,Uc,Xc,aba,bba,fd,jd,cba,td,vd,fba,gba,wd,lba,Cd,iba,kba,zd,yd,Hd,Id,mba,Jd,nba,Ld,Md,oba,Rd,Zd,rba,tba,wba,be,Bba,he,Iba,Gba,Hba,Jba,Lba,Mba,Oba,Rba,qe,Tba,te,Be,Fe,Ie,Se,Uba,Vba,Wba,Xba,Ve,We,mf,
$ba,bca,aca,of,uf,cca,tf,Ue,Hf,eca,Jf,If,Te,Lf,fca,Xf,Yf,Zf,gca,ica,kca,eg,fg,gg,oca,qca,ig,rca,hg,vca,cg,mca,xca,uca,sca,tca,yca,wca,mg,pca,pg,Aca,Bca,Cca,Dca,Eca,Fca,Gca,Hca,Ica,rg,Jca,Mca,Nca,Oca,Tca,vg,Sca,Pca,Vca,Xca,Zca,xg,yg,bda,Ag,Bg,dda,Qg,Pg,eda,Rg,fda,gda,Sg,ida,jda,hda,Vg,Xg,Wg,Yg,Zg,$g,ah,kda,mda,ph,nda,oda,qh,rh,uh,qda,rda,tda,uda,wda,vh,xda,wh,yda,xh,zda,yh,zh,Ada,Ah,Bh,Ch,Bda,Fh,Cda,Dda,Hh,Ih,Jh,Kh,Lh,Eda,Fda,Nh,Oh,Ph,Gda,Hda,Ida,Jda,di,ei,Lda,Mda,fi,gi,hi,Nda,ki,ji,li,ii,Oda,Pda,
Qda,mi,ni,oi,pi,Rda,si,ui,M,Tda,Vda,Uda,Wda,Xda,Oi,Yda,Zda,Qi,Ri,Ti,Si,Vi,Ui,Wi,Zi,aj,aea,bea,bj,cj,dj,fj,ej,cea,dea,hj,sj,tj,gj,eea,$da,fea,gea,N,vj,wj,$i,xj,yj,hea,zj,iea,jea,Aj,kea,Bj,Cj,lea,Dj,mea,Fj,nea,Gj,Hj,Ij,Jj,Kj,Lj,P,Mj,Nj,R,Oj,S,oea,Pj,ok,qk,sea,rea,tea,uea,vea,qea,sk,yea,zea,Aea,vk,Bea,Cea,pk,Dea,xea,wk,xk,yk,zk,Ak,Bk,Fea,Gea,Ck,Hea,Dk,Ek,Fk,Gk,Hk,Ik,Jk,Jea,Kea,Mea,Lea,Nea,Mk,Nk,Ok,Pea,Qea,Rea,ll,ml,nl,ol,rl,sl,Tea,wl,Uea,xl,yl,zl,Vea,Wea,Cl,Xea,Dl,El,$ea,Fl,Gl,Hl,Il,lm,mm,nm,om,pm,afa,
sm,bfa,cfa,dfa,ffa,efa,qm,rm,gfa,hfa,um,jfa,tm,vm,kfa,xm,lfa,ofa,ym,zm,pfa,rfa,sfa,ufa,tfa,vfa,Bm,wfa,Em,zfa,Im,Jm,Km,Afa,Lm,Mm,Nm,Bfa,Cfa,Dfa,Om,Ffa,Pm,Gfa,Qm,Hfa,Ifa,Sm,Jfa,Kfa,Lfa,Ofa,Mfa,Tm,Pfa,qn,Qfa,Rfa,rn,tn,Sfa,un,vn,Ufa,Vfa,Wfa,wn,xn,Yfa,Zfa,$fa,An,Bn,En,aga,dga,cga,ega,fga,iga,Fn,Gn,Hn,In,Jn,Kn,Ln,Mn,jga,Nn,On,Pn,Qn,Rn,nga,kga,Un,mga,Vn,lga,Tn,Sn,Xn,pga,Zn,Yn,qga,rga,fo,go,io,uga,ho,lo,vga,mo,sga,yga,zga,Aga,po,qo,ro,Bga,so,to,bp,cp,Cga,dp,ep,fp,Dga,Ega,gp,Fga,hp,Iga,Jga,Kga,Lga,Gga,ip,
jp,kp,lp,Nga,Oga,Mga,mp,Pga,Qga,Rga,qp,Sga,rp,sp,Uga,Vga,tp,up,vp,wp,xp,yp,zp,Ap,Wga,Bp,Cp,Xga,Zga,Yga,Dp,$ga,aha,bha,Ep,Fp,Gp,Hp,Ip,Jp,Kp,cha,Lp,Mp,Np,dha,fha,gha,Pp,Rp,Qp,Tp,Up,Vp,iha,jha,Wp,Xp,Yp,lha,mha,pha,nha,qha,uha,Zp,tha,rha,$p,aq,vha,bq,wha,cq,yha,xha,zha,Aha,gq,hq,Bha,Cha,Dha,iq,jq,Eha,nr,Fha,Gha,Iha,Mha,or,Nha,Oha,Pha,Qha,Rha,rr,Sha,Tha,Uha,yr,xr,wr,Vha,Wha,Xha,zr,Ar,Br,Zha,Gr,Hr,Ir,Jr,Kr,Lr,aia,bia,cia,Mr,Or,Pr,Tr,Ur,Xr,eia,gia,fia,hia,iia,cs,jia,kia,ds,lia,mia,nia,oia,hs,fs,is,js,ks,
pia,qia,ria,ls,ms,ns,sia,tia,uia,os,via,ps,qs,wia,xia,yia,zia,Aia,Bia,rs,ts,us,ws,Eia,xs,ys,Fia,Dia,vs,Gia,zs,As,Bs,Ds,Cs,Hia,Iia,Jia,Es,Lia,Fs,Nia,Oia,Pia,Qia,Ria,Sia,Tia,Uia,Is,Js,Ks,Wia,Via,Xia,Yia,Ss,Zia,Ts,$ia,aja,Us,Vs,Ws,bja,Xs,Ys,cja,Zs,$s,at,bt,ct,dt,et,ft,dja,eja,fja,gja,gt,hja,jja,ija,jt,kt,lja,kja,qja,pja,lt,rja,sja,tja,vja,uja,wja,mt,xja,yja,ot,zja,Aja,Bja,Cja,pt,Dja,qt,Eja,rt,tt,Gja,ut,Hja,vt,wt,Ija,Jja,xt,At,Lja,Bt,Kja,Mja,Nja,Oja,Qja,Ct,Rja,Ft,Gt,Tja,Uja,Xja,Yja,Ht,It,Jt,Kt,Lt,Mt,
Nt,Ot,Pt,Qt,Rt,St,Tt,bka,aka,cka,eka,dka,gka,$ja,fka,Zja,Ut,Vt,ika,jka,kka,Zt,$t,au,Wt,mka,bu,hka,oka,pka,nka,cu,du,eu,fu,qka,lka,rka,gu,ska,tka,uka,vka,wka,zka,Aka,Bka,Cka,Dka,Gka,ju,Ika,iu,lu,Jka,mu,ou,pu,Kka,Lka,xu,Mka,Nka,yu,Oka,Ju,Gu,Hu,Iu,Pka,Mu,Lu,Qka,Ou,Rka,Tka,Pu,Uka,Vka,$ka,Wka,Tu,Uu,fla,Vu,Wu,Xu,hla,$u,ila,jla,av,lla,cv,dv,ev,mla,gv,hv,iv,jv,lv,mv,ola,pla,pv,qv,rv,tv,uv,vv,qla,rla,sla,tla,ula,vla,wv,wla,Dv,xla,yla,zla,Ev,Gv,Hv,Iv,Lv,Mv,Nv,Bla,Qv,Rv,Sv,Cla,Dla,Tv,Ela,Fla,Vv,Nla,Ola,Pla,
Wv,Qla,Rla,Ula,Vla,Zv,Wla,aw,bw,cw,dw,ew,fw,gw,hw,iw,jw,kw,lw,mw,nw,ow,pw,qw,rw,tw,uw,vw,ww,xw,yw,zw,Aw,Bw,Cw,Dw,Ew,Fw,Gw,Hw,Iw,Jw,Kw,Lw,Mw,Nw,Ow,Pw,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,Zw,$w,ax,bx,cx,dx,ex,fx,gx,hx,ix,jx,nx,ox,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,Xla,zx,Ax,Bx,Cx,Dx,Ex,Fx,Gx,Hx,Ix,Kx,Lx,Mx,Nx,Ox,Px,Qx,Rx,Sx,Tx,Ux,Vx,Wx,Xx,Yx,Zx,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,Ty,Uy,Vy,Wy,Xy,Yy,Zy,$y,az,bz,cz,dz,
ez,fz,gz,hz,iz,jz,kz,lz,mz,nz,qz,rz,sz,tz,uz,vz,wz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Fz,Gz,Hz,Iz,Jz,Kz,Lz,Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,Yz,Zz,$z,aA,bA,cA,dA,eA,fA,gA,hA,iA,jA,kA,lA,mA,nA,oA,pA,qA,rA,sA,tA,yA,zA,AA,BA,CA,DA,EA,FA,GA,HA,IA,JA,KA,LA,MA,NA,OA,Yla,Zla,PA,$la,QA,RA,ama,bma,SA,cma,dma,ema,fma,gma,hma,ima,jma,TA,kma,lma,mma,UA,nma,oma,VA,WA,pma,XA,YA,qma,ZA,$A,rma,aB,bB,sma,tma,cB,uma,vma,dB,wma,xma,yma,zma,Ama,Bma,Cma,Dma,Ema,Fma,eB,Gma,Hma,fB,Ima,gB,hB,Jma,Kma,iB,Lma,Mma,jB,Nma,kB,Oma,lB,mB,
nB,oB,Pma,pB,qB,rB,sB,Qma,tB,uB,Rma,Sma,vB,wB,xB,Tma,yB,Uma,Vma,Wma,zB,Xma,Yma,Zma,AB,$ma,ana,BB,CB,bna,DB,EB,cna,FB,dna,GB,ena,fna,gna,IB,KB,ina,hna,jna,kna,QB,RB,SB,TB,ona,VB,WB,pna,XB,YB,qna,lna,ZB,tna,wna,$B,yna,Ana,fC,Bna,Cna,Mna,Qna,Ona,Pna,Rna,Dna,iC,hC,Sna,kC,lC,mC,Una,Vna,Wna,Xna,Yna,Zna,sC,$na,uC,aoa,boa,vC,doa,eoa,yC,AC,foa,goa,BC,CC,DC,EC,ioa,FC,koa,joa,moa,HC,noa,roa,poa,qoa,soa,toa,xoa,yoa,uoa,Boa,JC,Coa,MC,Doa,Eoa,LC,NC,Goa,Hoa,Koa,RC,Loa,Moa,SC,TC,UC,WC,Ooa,Qoa,bD,Roa,Soa,Toa,Uoa,
Voa,Yoa,Zoa,$oa,Xoa,apa,cpa,epa,iD,fpa,lD,jD,oD,pD,hpa,kpa,uD,vD,wD,xD,opa,zD,qpa,rpa,spa,CD,upa,vpa,tpa,wpa,xpa,ypa,zpa,FD,Apa,ID,Dpa,Epa,Bpa,Fpa,Gpa,Jpa,Ipa,MD,Cpa,Lpa,Mpa,PD,Npa,Opa,RD,SD,Ppa,Rpa,UD,Spa,Tpa,Vpa,Xpa,XD,Ypa,Zpa,$pa,aqa,bqa,cqa,dqa,eqa,ZD,fqa,aE,hqa,iqa,jqa,kqa,lqa,mqa,fE,pqa,sqa,gE,tqa,vqa,oqa,wqa,xqa,yqa,qqa,rqa,bE,nqa,eE,uqa,dE,cE,zqa,Aqa,Bqa,Cqa,Dqa,Eqa,Kqa,Fqa,jE,kE,lE,Nqa,Pqa,Oqa,Lqa,Qqa,Sqa,oE,Uqa,Xqa,rE,Wqa,gra,Yqa,fra,vE,hra,kra,wE,uE,ira,jra,lra,yE,nra,ora,pra,qra,rra,sra,
tra,mra,vra,wra,xra,yra,zra,AE,BE,CE,Dra,DE,Era,Fra,FE,GE,Ira,Hra,Jra,Lra,Nra,Mra,Qra,Ura,Sra,RE,Vra,Xra,QE,Wra,SE,TE,Yra,Zra,$ra,VE,bsa,YE,XE,ZE,$E,aF,dsa,esa,cF,fsa,dF,hsa,isa,jsa,lsa,msa,ksa,gF,osa,nsa,psa,hF,rsa,iF,tsa,jF,vsa,kF,usa,lF,mF,ysa,Esa,Gsa,Dsa,Csa,Fsa,pF,Hsa,Psa,Lsa,Msa,Nsa,xsa,Ysa,$sa,Xsa,cta,Wsa,oF,bta,Ksa,Osa,Zsa,Isa,Asa,zsa,Bsa,tF,Vsa,AF,mta,lta,qta,tta,sta,vta,CF,DF,xta,yta,zta,Ata,Bta,Cta,Dta,FF,Fta,Gta,Hta,Ita,Jta,Kta,Lta,Nta,Ota,JF,Qta,Sta,Rta,Tta,Vta,Wta,$ta,Yta,bua,aua,dua,
cua,KF,jpa,lua,iua,nua,oua,pua,qua,wua,Aua,Bua,Dua,Cua,Eua,UF,Gua,TF,zua,yua,QF,Kua,Iua,cG,bG,fG,gG,iG,Mua,jG,Nua,mG,nG,Oua,Pua,Rua,Sua,Tua,Uua,Vua,Wua,Xua,Yua,Zua,tG,ava,bva,dva,eva,fva,gva,hva,iva,lva,mva,vG,wG,nva,xG,ova,zG,qva,pva,BG,CG,DG,EG,rva,FG,sva,tva,uva,GG,vva,zva,wva,yva,xva,Ava,HG,Bva,Cva,Dva,Eva,IG,Gva,Jva,Iva,JG,Kva,KG,LG,MG,OG,PG,Lva,Mva,Nva,QG,Ova,Pva,RG,UG,WG,Rva,Qva,XG,Sva,Tva,YG,ZG,$G,aH,dH,Vva,eH,Wva,fH,gH,hH,Xva,Yva,kH,Zva,lH,bwa,dwa,fwa,hwa,jwa,lwa,nH,mwa,oH,nwa,qwa,rwa,qH,
twa,sH,tH,uH,vH,wH,xH,yH,vwa,zH,uwa,wwa,AH,ywa,xwa,BH,Ewa,Fwa,CH,DH,FH,Gwa,Hwa,HH,IH,KH,Iwa,LH,WH,Kwa,JH,Nwa,Owa,Rwa,Swa,Twa,Vwa,Qwa,Wwa,Xwa,Ywa,XH,Mwa,axa,Pwa,YH,cxa,exa,aI,fxa,gxa,bI,hxa,ZH,ixa,cI,jxa,dxa,dI,lxa,eI,qxa,oxa,nxa,mxa,sxa,gI,hI,iI,jI,kI,lI,mI,xxa,oI,yxa,Axa,zxa,Bxa,Cxa,Dxa,Fxa,Exa,Gxa,Jxa,Kxa,qI,rI,Lxa,sI,tI,uI,xI,Nxa,Oxa,vI,wI,Mxa,Rxa,Sxa,yI,Vxa,Txa,zI,AI,BI,Wxa,CI,DI,Xxa,Yxa,Zxa,$xa,aya,EI,FI,GI,HI,II,JI,KI,LI,MI,NI,OI,bya,PI,cya,dya,eya,fya,QI,RI,SI,gya,TI,UI,VI,hya,WI,XI,YI,ZI,
$I,aJ,bJ,cJ,dJ,iya,eJ,fJ,gJ,jya,hJ,iJ,jJ,kJ,kya,lJ,mJ,lya,nJ,mya,oJ,nya,qJ,rJ,oya,sJ,tJ,uJ,pJ,vJ,wJ,xJ,qya,sya,tya,yJ,uya,zJ,vya,BJ,wya,xya,yya,Bya,Cya,Dya,Eya,Fya,Gya,zya,MJ,Jya,Kya,Lya,Mya,Aya,Oya,DJ,Pya,Qya,OJ,Rya,PJ,FJ,Sya,EJ,Nya,QJ,Vya,Uya,HJ,IJ,SJ,RJ,Wya,TJ,Xya,UJ,Zya,Yya,VJ,WJ,XJ,YJ,$ya,aza,cza,dza,$J,aK,hza,bK,lza,nza,pza,qza,dK,sza,tza,vza,wza,xza,yza,zza,Aza,iK,jK,Bza,Dza,Cza,Eza,Fza,Gza,nK,pK,qK,rK,Hza,sK,Iza,tK,uK,oK,wK,xK,Kza,Lza,Jza,Oza,Pza,Qza,Rza,Sza,Tza,Uza,Vza,Wza,Xza,Yza,Zza,$za,
aAa,bAa,cAa,yK,zK,dAa,AK,BK,eAa,fAa,gAa,hAa,iAa,CK,jAa,kAa,lAa,mAa,DK,nAa,oAa,EK,pAa,qAa,FK,rAa,GK,sAa,tAa,uAa,HK,vAa,yAa,IK,zAa,BAa,wAa,xAa,JK,AAa,DAa,EAa,LK,MK,NK,OK,PK,HAa,RK,TK,IAa,WK,XK,KAa,LAa,YK,ZK,$K,MAa,bL,cL,dL,NAa,eL,OAa,fL,JAa,gL,PAa,hL,iL,kL,RAa,SAa,TAa,lL,mL,nL,oL,UAa,pL,qL,rL,sL,tL,uL,vL,wL,xL,WAa,XAa,ZAa,$Aa,CL,zL,DL,aBa,bBa,cBa,EL,FL,dBa,eBa,fBa,AL,gBa,hBa,GL,iBa,kBa,lBa,IL,JL,KL,LL,ML,oBa,PL,RL,QL,SL,qBa,TL,rBa,sBa,uBa,tBa,WL,vBa,wBa,zBa,xBa,yBa,XL,BBa,CBa,DBa,FBa,EBa,GBa,HBa,JBa,
IBa,KBa,LBa,MBa,NBa,OBa,PBa,QBa,RBa,SBa,TBa,UBa,VBa,WBa,XBa,YBa,ZBa,$Ba,$L,aCa,aM,bM,cCa,dCa,cM,eCa,dM,fCa,eM,gCa,fM,hCa,iCa,jCa,kCa,gM,lCa,mCa,nCa,hM,iM,jM,kM,lM,oCa,mM,nM,oM,pCa,pM,qCa,rCa,sCa,qM,rM,tCa,uCa,vCa,sM,tM,bza,wCa,xCa,uM,yCa,vM,wM,xM,yM,zM,AM,BM,CM,zCa,DM,EM,ACa,BCa,CCa,FM,$M,ECa,JCa,LCa,KCa,NCa,OCa,MCa,QCa,RCa,SCa,iN,WCa,YCa,aDa,bDa,cDa,jN,eDa,iDa,kN,jDa,fDa,kDa,lN,lDa,oDa,nDa,sDa,pDa,mN,nN,yDa,DDa,zDa,ADa,BDa,GDa,FDa,IDa,CDa,EDa,JDa,KDa,LDa,ODa,RDa,PDa,UDa,bEa,aEa,VDa,cEa,XDa,YDa,WDa,
gEa,iEa,kEa,oEa,rEa,sEa,uEa,wEa,yEa,xEa,GEa,AEa,zEa,HEa,KEa,LEa,MEa,NEa,uN,XCa,QEa,OEa,wN,REa,SEa,zN,VEa,WEa,UEa,AN,XEa,BN,CN,kK,DN,VCa,EN,YEa,Mza,ZEa,FN,$Ea,aFa,bFa,GN,HN,cFa,IN,JN,KN,LN,MN,dFa,eFa,NN,fFa,gFa,ON,hFa,PN,KK,QN,RN,iFa,SN,jFa,kFa,ZCa,TEa,TN,lK,ZJ,pN,lFa,mFa,UN,xDa,oN,nFa,vN,nEa,mEa,NDa,qN,pEa,tEa,vEa,tDa,IEa,oFa,dEa,ZDa,VN,$Ca,qFa,pFa,MDa,qEa,rFa,JEa,rN,uDa,wDa,mDa,lEa,jEa,TDa,QDa,hDa,gDa,dDa,fEa,$Da,BEa,qDa,rDa,EEa,FEa,CEa,DEa,hEa,uFa,sFa,WN,tFa,XN,NJ,GJ,Hya,CJ,vFa,YN,ZN,$N,fO,xFa,
hO,zFa,AFa,BFa,CFa,EFa,DFa,FFa,GFa,kO,nO,HFa,IFa,KFa,JFa,LFa,MFa,NFa,OFa,PFa,QFa,pO,qO,TFa,rO,sO,UFa,VFa,WFa,XFa,tO,YFa,uO,ZFa,$Fa,vO,xO,BO,aGa,CO,DO,EO,FO,GO,HO,IO,JO,KO,LO,MO,bGa,NO,OO,PO,QO,RO,SO,cGa,dGa,TO,eGa,XO,hGa,iGa,YO,kGa,jGa,lGa,$O,aP,bP,Z,nGa,cP,sGa,wGa,xGa,yGa,GGa,JGa,OGa,PGa,mHa,nHa,oHa,QGa,SGa,YGa,tHa,bHa,xHa,vHa,zHa,AHa,wHa,BHa,AIa,IHa,BIa,JHa,KHa,kP,DIa,FIa,HIa,GIa,EIa,PHa,cIa,dIa,LIa,NIa,fIa,gIa,iIa,jIa,kIa,UIa,mIa,pIa,wIa,bJa,YIa,ZIa,dJa,gJa,fJa,hJa,iJa,qJa,jJa,nP,nJa,wJa,xJa,yJa,
zJa,AJa,DJa,IJa,lKa,kKa,rP,sP,tP,uP,vP,wP,sKa,yP,xP,uKa,qKa,rKa,vKa,tKa,zP,wKa,ipa,yKa,xKa,AKa,CKa,EKa,FKa,GKa,DKa,HKa,MKa,LKa,OKa,CP,PKa,QKa,RKa,SKa,EP,DP,TKa,UKa,VKa,XKa,GP,IP,KP,YKa,LP,ZKa,cLa,eLa,dLa,gLa,nLa,oLa,NP,fLa,bLa,aLa,$Ka,RP,OP,QP,WP,XP,rLa,sLa,YP,VP,wLa,tLa,uLa,xLa,ZP,$P,zLa,ALa,bQ,cQ,dQ,eQ,fQ,BLa,CLa,DLa,gQ,hQ,jQ,FLa,GLa,iQ,HLa,KLa,LLa,kQ,MLa,nQ,NLa,oQ,qQ,PLa,pQ,rQ,QLa,SLa,TLa,ULa,tQ,uQ,zQ,XLa,wQ,AQ,CQ,YLa,DQ,yQ,BQ,ZLa,EQ,$La,FQ,aMa,vQ,xQ,VLa,WLa,GQ,bMa,cMa,dMa,HQ,IQ,JQ,eMa,KQ,LQ,fMa,
MQ,gMa,NQ,OQ,PQ,hMa,iMa,jMa,kMa,lMa,QQ,mMa,nMa,oMa,pMa,qMa,rMa,RQ,SQ,sMa,TQ,wMa,xMa,yMa,zMa,AMa,VQ,WQ,UQ,tMa,BMa,CMa,DMa,EMa,XQ,YQ,FMa,ZQ,$Q,GMa,HMa,aR,IMa,JMa,NMa,OMa,KMa,LMa,MMa,PMa,bR,cR,dR,QMa,RMa,eR,fR,SMa,gR,TMa,VMa,UMa,hR,WMa,XMa,YMa,ZMa,$Ma,bNa,cNa,iR,dNa,fNa,hNa,gNa,lR,lLa,PP,lNa,mNa,nNa,oNa,pNa,qNa,MP,kR,rNa,mR,wNa,xNa,yNa,zNa,nR,DNa,ANa,BNa,FNa,GNa,HNa,ENa,INa,oR,pR,qR,JNa,KNa,rR,LNa,MNa,NNa,ONa,uNa,QNa,mLa,hLa,SNa,tR,vR,wR,xR,yR,zR,uR,TNa,VNa,CR,YNa,WNa,$Na,aOa,ZNa,XNa,bOa,cOa,dOa,HR,
eOa,fOa,hOa,iOa,qLa,IR,jOa,mOa,SP,nOa,oOa,pOa,jLa,kLa,JR,KR,LR,MR,qOa,rOa,NR,sOa,OR,PR,tOa,QR,uOa,RR,vOa,SR,TR,UR,VR,xOa,yOa,WR,zOa,wOa,YR,AOa,COa,EOa,DOa,BOa,ROa,OOa,UOa,pS,qS,FOa,POa,KJ,mS,tS,VOa,xS,XOa,dS,yS,cS,YOa,NOa,BS,CS,$Oa,aPa,bPa,cPa,dPa,ePa,fPa,DS,gPa,lPa,kPa,hPa,jPa,iPa,ES,mPa,FS,nPa,oPa,qPa,rPa,sPa,xPa,KS,LS,APa,MS,NS,BPa,EPa,FPa,GPa,HPa,OS,JPa,NPa,OPa,VPa,ZPa,SPa,TPa,aQa,XS,bQa,dQa,cQa,eQa,ZS,bT,fQa,YS,gQa,cT,hQa,lQa,iQa,kQa,DQa,MQa,vT,NQa,PQa,AQa,jT,OQa,oT,wT,yQa,RQa,QQa,xT,gT,BQa,
XQa,TQa,UQa,VQa,WQa,YQa,yT,ZQa,aRa,bRa,AT,cRa,fT,lT,$Qa,EQa,jQa,IQa,FT,mT,SQa,MT,NT,OT,pRa,qRa,uT,QT,rRa,RT,sRa,nT,tRa,zQa,uRa,hRa,kT,rQa,vRa,pQa,oQa,mQa,UT,ERa,GRa,HRa,IRa,WT,JRa,LRa,XT,MRa,$T,aU,ZT,ORa,NRa,PRa,QRa,SRa,fU,URa,gU,VRa,WRa,XRa,YRa,iU,ZRa,$Ra,cSa,fSa,gSa,tU,iSa,uU,jSa,lSa,wU,mSa,AU,BU,CU,DU,EU,nSa,pSa,oSa,qSa,rSa,sSa,HU,IU,tSa,vSa,wSa,xSa,NU,DSa,CSa,OU,FSa,QU,GSa,HSa,ISa,JSa,KSa,RU,MSa,LSa,NSa,OSa,SU,TU,PSa,RSa,SSa,UU,VU,TSa,WU,XSa,VSa,WSa,XU,YSa,ZSa,$Sa,aTa,bTa,cTa,dTa,eTa,$U,YU,fTa,
aV,hTa,gTa,cV,dV,jTa,bV,lTa,eV,gV,mTa,hV,iV,jV,nTa,qTa,pTa,lV,mV,nV,tTa,rTa,sTa,oV,uTa,yTa,wTa,vTa,xTa,pV,ATa,BTa,qV,DTa,ETa,FTa,CTa,HTa,GTa,KTa,ITa,JTa,NTa,OTa,PTa,QTa,MTa,STa,TTa,RTa,LTa,UTa,VTa,WTa,XTa,YTa,ZTa,rV,dUa,bUa,cUa,sV,eUa,aUa,fUa,gUa,tV,hUa,iUa,jUa,uV,kUa,lUa,mUa,nUa,oUa,pUa,sUa,qUa,tUa,uUa,vUa,wUa,yUa,EV,FV,GV,zUa,DV,DUa,CUa,EUa,FUa,GUa,HUa,IUa,JUa,KUa,QUa,KV,TUa,WUa,VUa,UUa,OUa,PUa,LUa,MUa,RUa,LV,MV,XUa,mU,RRa,OV,YUa,$Ua,ZUa,SUa,bVa,cVa,dVa,QV,eVa,XV,gVa,hVa,YV,ZV,iVa,jVa,kVa,lVa,mVa,
oVa,nVa,pVa,$V,aW,qVa,tVa,uVa,cW,sVa,vVa,wVa,rVa,dW,xVa,gW,yVa,zVa,fW,BVa,AVa,CVa,DVa,EVa,FVa,IVa,JVa,HVa,MVa,KVa,kW,lW,OVa,nW,oW,PVa,RVa,qW,QVa,SVa,TVa,UVa,WVa,VVa,XVa,YVa,ZVa,aWa,bWa,vW,wW,dWa,cWa,zW,xW,yW,eWa,fWa,AW,gWa,hWa,jWa,lWa,kWa,BW,mWa,nWa,iWa,sWa,tWa,uWa,xWa,wWa,vWa,yWa,zWa,CW,DW,AWa,BWa,CWa,DWa,EW,HW,EWa,FWa,GWa,HWa,IWa,JWa,JW,KWa,LWa,OWa,KW,PWa,NWa,LW,MW,QWa,RWa,UWa,SWa,TWa,PW,VWa,XWa,YWa,$Wa,aXa,QW,RW,bXa,WWa,dXa,cXa,SW,TW,UW,XW,YW,eXa,fXa,gXa,hXa,aX,iXa,bX,jXa,cX,mXa,nXa,oXa,qXa,rXa,
sXa,pXa,uXa,tXa,vXa,yXa,gX,AXa,zXa,wXa,xXa,BXa,CXa,hX,iX,DXa,EXa,FXa,GXa,HXa,IXa,KXa,LXa,rYa,mYa,nYa,MXa,uYa,nX,vYa,zYa,qX,AYa,wYa,mX,tX,sX,oX,uX,DYa,EYa,vX,pX,sYa,CYa,rX,xYa,BYa,FYa,jX,xX,GYa,HYa,yYa,yX,zX,JYa,AX,KYa,DX,EX,LYa,MYa,OYa,PYa,NYa,FX,GX,QYa,RYa,SYa,TYa,UYa,WYa,YYa,XYa,VYa,$Ya,ZYa,HX,IX,aZa,cZa,dZa,JX,bZa,eZa,fZa,gZa,LX,OX,NX,iZa,hZa,jZa,PX,kZa,lZa,nZa,mZa,oZa,pZa,qZa,SX,rZa,GVa,vZa,$Va,sZa,wZa,uZa,GU,tZa,xZa,zZa,AZa,BZa,yZa,CZa,DZa,EZa,FZa,GZa,XX,IZa,YX,KZa,ZX,JZa,MZa,NZa,LZa,$X,OZa,
QZa,RZa,PZa,bY,cY,dY,TZa,eY,WZa,XZa,YZa,fY,ZZa,$Za,a_a,b_a,d_a,UZa,gY,e_a,f_a,g_a,iY,h_a,i_a,j_a,o_a,s_a,q_a,l_a,lY,k_a,r_a,nY,u_a,t_a,oY,w_a,x_a,y_a,A_a,B_a,z_a,C_a,kTa,sY,D_a,tY,uY,E_a,L_a,zY,M_a,N_a,BY,O_a,P_a,CY,Q_a,F_a,DY,S_a,T_a,V_a,EY,W_a,FY,Y_a,X_a,GY,J_a,xY,Z_a,$_a,a0a,b0a,c0a,G_a,I_a,yY,vY,f0a,g0a,HY,JY,KY,h0a,i0a,j0a,IY,d0a,k0a,l0a,e0a,p0a,t0a,OY,u0a,v0a,r0a,QY,w0a,x0a,o0a,y0a,s0a,z0a,RY,PY,A0a,C0a,B0a,NY,E0a,UY,F0a,SY,VY,TY,WY,G0a,XY,H0a,K0a,J0a,M0a,N0a,L0a,$Y,ZY,P0a,Q0a,R0a,S0a,T0a,V0a,
U0a,bZ,cZ,W0a,dZ,X0a,Z0a,c1a,$0a,a1a,b1a,d1a,kZ,e1a,f1a,g1a,lZ,h1a,i1a,j1a,mZ,nZ,oZ,pZ,qZ,rZ,sZ,k1a,tZ,l1a,q1a,s1a,t1a,yZ,zZ,p1a,u1a,vZ,m1a,v1a,uZ,wZ,n1a,o1a,xZ,w1a,x1a,r1a,y1a,z1a,D1a,A1a,F1a,E1a,G1a,B1a,C1a,H1a,I1a,RPa,YPa,K1a,J1a,BZ,P1a,N1a,O1a,L1a,Q1a,CZ,M1a,DZ,EZ,R1a,S1a,T1a,FZ,V1a,W1a,GZ,X1a,HZ,Y1a,Z1a,$1a,a2a,c2a,d2a,JZ,k2a,g2a,b2a,m2a,h2a,i2a,f2a,j2a,KZ,e2a,l2a,s2a,q2a,p2a,o2a,n2a,MZ,t2a,OZ,v2a,PZ,w2a,x2a,y2a,QZ,RZ,SZ,A2a,B2a,z2a,E2a,F2a,G2a,TZ,UZ,H2a,I2a,J2a,L2a,K2a,M2a,N2a,VZ,O2a,P2a,XZ,
Q2a,WZ,R2a,S2a,U2a,V2a,T2a,YZ,W2a,X2a,Z2a,Y2a,a3a,$2a,b3a,c3a,d3a,e3a,fZ,f3a,g3a,h3a,i3a,eZ,j3a,$Z,a_,k3a,l3a,m3a,b_,n3a,jZ,o3a,p3a,hZ,iZ,t3a,d_,f_,u3a,h_,e_,c_,i_,r3a,q3a,s3a,j_,w3a,v3a,gZ,g_,x3a,y3a,z3a,A3a,B3a,C2a,D2a,C3a,D3a,k_,G3a,E3a,H3a,J3a,l_,K3a,L3a,n_,q_,N3a,R3a,P3a,O3a,Q3a,M3a,S3a,T3a,r_,U3a,s_,X3a,Z3a,a4a,e4a,m4a,o4a,p4a,n4a,q4a,r4a,s4a,u_,t4a,x4a,z4a,A4a,v_,B4a,w_,C4a,D4a,E4a,F4a,y_,M4a,L4a,D_,N4a,K4a,Q4a,R4a,S4a,T4a,U4a,V4a,W4a,X4a,Y4a,$4a,a5a,b5a,Z4a,F_,x_,d5a,e5a,E_,g5a,c5a,h5a,j5a,
m5a,k5a,l5a,o5a,n5a,p5a,q5a,i5a,r5a,s5a,G_,t5a,u5a,v5a,y5a,x5a,w5a,H_,z5a,J_,B5a,C5a,L_,M_,D5a,N_,E5a,F5a,G5a,I5a,O_,J5a,N5a,M5a,O5a,Q5a,r2a,K5a,L5a,P5a,IZ,m_,R5a,S5a,T5a,U5a,A5a,P_,o_,V5a,I3a,R_,S_,W5a,T_,X5a,Y5a,Z5a,$5a,a6a,b6a,d6a,c6a,f6a,g6a,k6a,h6a,j6a,l6a,V_,p6a,n6a,o6a,s6a,t6a,u6a,v6a,w6a,U_,x6a,r6a,m6a,W_,y6a,i6a,z6a,X_,B6a,C6a,D6a,A6a,Y_,G6a,F6a,J6a,I6a,H6a,K6a,L6a,Z_,M6a,N6a,S6a,P6a,Q6a,R6a,T6a,U6a,V6a,X6a,W6a,Y6a,Z6a,$6a,b7a,d7a,c7a,e7a,a7a,f7a,i7a,g7a,j7a,k7a,m7a,l7a,n7a,h7a,a0,o7a,p7a,
q7a,s7a,u7a,v7a,x7a,y7a,z7a,A7a,D7a,E7a,C7a,F7a,G7a,H7a,J7a,I7a,M7a,e0,LY,K7a,L7a,N7a,h0,P7a,O7a,Q7a,S7a,T7a,W7a,U7a,Z7a,i0,V7a,$7a,j0,b8a,l0,n0,c8a,k0,d8a,o0,g8a,f8a,a8a,h8a,i8a,m0,j8a,p0,k8a,e8a,B7a,g0,MY,m0a,m8a,n0a,n8a,o8a,p8a,q8a,r0,r8a,t8a,u8a,v8a,s8a,w8a,x8a,s0,y8a,z8a,t0,mBa,A8a,B8a,C8a,v0,F8a,G8a,x0,H8a,I8a,E8a,w0,u0,D8a,A0,z0,B0,y0,M8a,O8a,Q8a,S8a,K8a,P8a,T8a,L8a,U8a,V8a,X8a,C0,Y8a,Z8a,W8a,D0,a9a,$8a,b9a,N8a,c9a,R8a,J8a,E0,i9a,f9a,j9a,g9a,e9a,k9a,d9a,n9a,F0,o9a,q9a,BL,s9a,u9a,v9a,w9a,L0,
x9a,H_a,z9a,M0,O6a,A9a,C9a,y9a,qY,J0,D9a,E9a,p_,R0,f5a,t9a,Q0,G0,H9a,I9a,K9a,J9a,B9a,O0,L9a,S0,M9a,p_a,N9a,H5a,$_,v_a,O9a,R_a,oTa,N0,P9a,R9a,Q9a,n_a,S9a,U9a,G9a,r9a,W9a,V9a,P0,H0,X9a,U0,mY,Z9a,$9a,AY,a$a,b$a,c$a,m_a,T0,K_,d$a,o$a,j$a,i$a,q$a,h$a,W0,rY,t$a,r$a,v$a,Z0,$0,w$a,x$a,b1,n$a,g1,z$a,f1,a1,B$a,C$a,k$a,j1,D$a,m$a,d1,y$a,c1,J$a,Y0,K$a,L$a,l1,A$a,m1,n1,M$a,e1,u$a,F$a,E$a,N$a,O$a,P$a,Q$a,hU,R$a,h1,S$a,U$a,X0,o1,s$a,V$a,W$a,l$a,k1,i1,X$a,Y$a,p1,q1,I0a,Z$a,$$a,aab,bab,r1,dab,hab,kab,gab,cab,s1,t1,
u1,uab,tab,v1,w1,wab,xab,yab,CAa,vab,pBa,zab,x1,Bab,Aab,Cab,y1,z1,A1,sN,Dab,xN,PEa,Eab,vDa,UL,VL,Fab,Gab,Hab,B1,Jab,Kab,C1,Lab,Mab,Pab,Qab,E1,Rab,Nab,Oab,Sab,Uab,F1,Vab,G1,Wab,YL,Xab,Yab,Nza,vK,Zab,$ab,abb,H1,dbb,cbb,I1,J1,ebb,fbb,D1,gbb,hbb,ibb,K1,L1,jbb,M1,N1,kbb,Q1,R1,lbb,S1,T1,mbb,nbb,ABa,U1,obb,qbb,pbb,V1,W1,X1,rbb,sbb,tbb,ubb,vbb,wbb,xbb,zbb,Z1,ybb,$1,Abb,Bbb,Cbb,Dbb,Ebb,Ibb,Fbb,Gbb,Hbb,Kbb,Mbb,Nbb,Obb,Lbb,a2,Pbb,Qbb,Rbb,Sbb,Tbb,c2,Ubb,d2,e2,f2,Vbb,Wbb,Ybb,Zbb,$bb,acb,ccb,bcb,dcb,g2,h2,gcb,
ecb,fcb,i2,icb,jcb,j2,k2,kcb,l2,mcb,m2,ncb,ocb,pcb,n2,o2,p2,qcb,rcb,scb,vcb,ucb,q2,wcb,xcb,ycb,UCa,tcb,zcb,Ccb,Dcb,Fcb,aaa,ka;aa=function(a){return function(){return aaa[a].apply(this,arguments)}};
g.ca=function(a,b){return aaa[a]=b};
baa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
caa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
na=function(a,b){if(b)a:{var c=g.ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ka(c,a,{configurable:!0,writable:!0,value:b})}};
daa=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
oa=function(a){return a.raw=a};
g.u=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:baa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");};
eaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.pa=function(a){return a instanceof Array?a:eaa(g.u(a))};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.w=function(a,b){a.prototype=faa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Pf=b.prototype};
wa=function(){this.N=!1;this.D=null;this.B=void 0;this.j=1;this.G=this.K=0;this.Y=this.C=null};
ya=function(a){if(a.N)throw new TypeError("Generator is already running");a.N=!0};
Aa=function(a,b){a.C={BV:b,fX:!0};a.j=a.K||a.G};
g.z=function(a,b,c){a.j=c;return{value:b}};
g.Ba=function(a){a.j=0};
g.Ca=function(a,b,c){a.K=b;void 0!=c&&(a.G=c)};
g.Da=function(a,b){a.j=b;a.K=0};
g.Fa=function(a){a.K=0;var b=a.C.BV;a.C=null;return b};
g.Ga=function(a){a.Y=[a.C];a.K=0;a.G=0};
g.Ha=function(a,b){var c=a.Y.splice(0)[0];(c=a.C=a.C||c)?c.fX?a.j=a.K||a.G:void 0!=c.La&&a.G<c.La?(a.j=c.La,a.C=null):a.j=a.G:a.j=b};
gaa=function(a){this.j=new wa;this.B=a};
haa=function(a,b){ya(a.j);var c=a.j.D;if(c)return Ia(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.j.return);
a.j.return(b);return Ja(a)};
Ia=function(a,b,c,d){try{var e=b.call(a.j.D,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.j.N=!1,e;var f=e.value}catch(h){return a.j.D=null,Aa(a.j,h),Ja(a)}a.j.D=null;d.call(a.j,f);return Ja(a)};
Ja=function(a){for(;a.j.j;)try{var b=a.B(a.j);if(b)return a.j.N=!1,{value:b.value,done:!1}}catch(c){a.j.B=void 0,Aa(a.j,c)}a.j.N=!1;if(a.j.C){b=a.j.C;a.j.C=null;if(b.fX)throw b.BV;return{value:b.return,done:!0}}return{value:void 0,done:!0}};
iaa=function(a){this.next=function(b){ya(a.j);a.j.D?b=Ia(a,a.j.D.next,b,a.j.Z):(a.j.Z(b),b=Ja(a));return b};
this.throw=function(b){ya(a.j);a.j.D?b=Ia(a,a.j.D["throw"],b,a.j.Z):(Aa(a.j,b),b=Ja(a));return b};
this.return=function(b){return haa(a,b)};
this[Symbol.iterator]=function(){return this}};
jaa=function(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(f,e)}
f(a.next())})};
g.I=function(a){return jaa(new iaa(new gaa(a)))};
g.Ka=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};
Ma=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e};
kaa=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,P_:f}}return{i:-1,P_:void 0}};
Pa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ra=function(a){return a?a:Array.prototype.fill};
Sa=function(a){return a?a:Array.prototype.copyWithin};
g.Va=function(a,b,c){a=a.split(".");c=c||g.Ua;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
Ya=function(a,b){var c=g.Wa("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b};
g.Wa=function(a,b){a=a.split(".");b=b||g.Ua;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};
Za=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.$a=function(a){var b=Za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ab=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.gb=function(a){return Object.prototype.hasOwnProperty.call(a,bb)&&a[bb]||(a[bb]=++laa)};
maa=function(a,b,c){return a.call.apply(a.bind,arguments)};
naa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.ib=function(a,b,c){g.ib=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?maa:naa;return g.ib.apply(null,arguments)};
g.jb=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.lb=function(){return Date.now()};
g.nb=function(a,b){function c(){}
c.prototype=b.prototype;a.Pf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
ob=function(a){return a};
oaa=function(a){this.j=a};
rb=function(a,b,c){this.B=a;this.D=b;this.j=c||[];this.Gy=new Map};
sb=function(a,b){rb.call(this,a,3,b)};
tb=function(a,b){rb.call(this,a,2,b)};
g.ub=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.vb=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.$a(d)?g.vb.apply(null,d):g.ub(d)}};
g.J=function(){this.Ap=this.Ap;this.Qm=this.Qm};
g.L=function(a,b){g.wb(a,g.jb(g.ub,b))};
g.wb=function(a,b){a.Ap?b():(a.Qm||(a.Qm=[]),a.Qm.push(b))};
zb=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,zb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)};
Ab=function(a,b){var c=zb.call;a=a.split("%s");for(var d="",e=a.length-1,f=0;f<e;f++)d+=a[f]+(f<b.length?b[f]:"%s");c.call(zb,this,d+a[e])};
paa=function(){};
g.Bb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.B=!1};
g.Cb=function(a){return a[a.length-1]};
qaa=function(a,b){var c=a.length,d="string"===typeof a?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)};
g.Eb=function(a,b,c){b=Db(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
Db=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Fb=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.Gb=function(a,b){return 0<=raa(a,b)};
saa=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.Ib=function(a,b){b=raa(a,b);var c;(c=0<=b)&&g.Hb(a,b);return c};
g.Hb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Jb=function(a,b){b=Db(a,b);0<=b&&g.Hb(a,b)};
taa=function(a,b){var c=0;qaa(a,function(d,e){b.call(void 0,d,e,a)&&g.Hb(a,e)&&c++})};
g.Lb=function(a){return Array.prototype.concat.apply([],arguments)};
g.Mb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Pb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.$a(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.Rb=function(a,b,c,d){Array.prototype.splice.apply(a,Qb(arguments,1))};
Qb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
uaa=function(a){for(var b=0,c=0,d={};c<a.length;){var e=a[c++],f=g.ab(e)?"o"+g.gb(e):(typeof e).charAt(0)+e;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,a[b++]=e)}a.length=b};
g.Wb=function(a,b,c){return vaa(a,c||Vb,!1,b)};
Yb=function(a,b){return vaa(a,b,!0)};
vaa=function(a,b,c,d){for(var e=0,f=a.length,h;e<f;){var l=e+(f-e>>>1),m=void 0;c?m=b.call(void 0,a[l],l,a):m=b(d,a[l]);0<m?e=l+1:(f=l,h=!m)}return h?e:-e-1};
g.Zb=function(a,b){a.sort(b||Vb)};
waa=function(a,b){var c=Vb;g.Zb(a,function(d,e){return c(b(d),b(e))})};
g.$b=function(a,b){if(!g.$a(a)||!g.$a(b)||a.length!=b.length)return!1;for(var c=a.length,d=xaa,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
Vb=function(a,b){return a>b?1:a<b?-1:0};
xaa=function(a,b){return a===b};
g.bc=function(a,b,c){c=g.Wb(a,b,c);0>c&&g.Rb(a,-(c+1),0,b)};
g.ec=function(a,b,c){var d={};(0,g.dc)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
yaa=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
zaa=function(a,b){b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,0,0,b[0])};
Aaa=function(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};
Caa=function(a){var b=g.Wa("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.Ua.$googDebugFname||b}catch(h){e="Not available",c=!0}b=Baa(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,fc[c])c=fc[c];else{c=String(c);if(!fc[c]){var f=/function\s+([^\(]+)/m.exec(c);fc[c]=f?f[1]:"[Anonymous]"}c=fc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}};
Baa=function(a,b){b||(b={});b[Daa(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Daa(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Baa(a,b));return c};
Daa=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
hc=function(a,b){return 0==a.lastIndexOf(b,0)};
Eaa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.ic=function(a){return/^[\s\xa0]*$/.test(a)};
jc=function(a){if(!Faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Laa,"&#0;"));return a};
g.kc=function(a,b){return-1!=a.indexOf(b)};
lc=function(a,b){return g.kc(a.toLowerCase(),b.toLowerCase())};
g.oc=function(a,b){var c=0;a=mc(String(a)).split(".");b=mc(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=nc(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||nc(0==f[2].length,0==h[2].length)||nc(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c};
nc=function(a,b){return a<b?-1:a>b?1:0};
g.pc=function(){var a=g.Ua.navigator;return a&&(a=a.userAgent)?a:""};
uc=function(a){return qc||rc?sc?sc.brands.some(function(b){return(b=b.brand)&&g.kc(b,a)}):!1:!1};
vc=function(a){return g.kc(g.pc(),a)};
wc=function(){return qc||rc?!!sc&&0<sc.brands.length:!1};
Ac=function(){return wc()?!1:vc("Opera")};
Bc=function(){return wc()?!1:vc("Trident")||vc("MSIE")};
Cc=function(){return wc()?!1:vc("Edge")};
Maa=function(){return wc()?uc("Microsoft Edge"):vc("Edg/")};
Ec=function(){return vc("Firefox")||vc("FxiOS")};
Gc=function(){return vc("Safari")&&!(Fc()||(wc()?0:vc("Coast"))||Ac()||Cc()||Maa()||(wc()?uc("Opera"):vc("OPR"))||Ec()||vc("Silk")||vc("Android"))};
Fc=function(){return wc()?uc("Chromium"):(vc("Chrome")||vc("CriOS"))&&!Cc()||vc("Silk")};
Naa=function(){return vc("Android")&&!(Fc()||Ec()||Ac()||vc("Silk"))};
Oaa=function(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}};
Paa=function(a){var b=g.pc();if("Internet Explorer"===a){if(Bc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);
b=Oaa(c);switch(a){case "Opera":if(Ac())return b(["Version","Opera"]);if(wc()?uc("Opera"):vc("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(Cc())return b(["Edge"]);if(Maa())return b(["Edg"]);break;case "Chromium":if(Fc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Ec()||"Safari"===a&&Gc()||"Android Browser"===a&&Naa()||"Silk"===a&&vc("Silk")?(b=c[2])&&b[1]||"":""};
Qaa=function(a){if(wc()&&"Silk"!==a){var b=sc.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=Paa(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])};
Hc=function(){return qc||rc?!!sc&&!!sc.platform:!1};
Raa=function(){return Hc()?"Android"===sc.platform:vc("Android")};
Ic=function(){return vc("iPhone")&&!vc("iPod")&&!vc("iPad")};
Jc=function(){return Ic()||vc("iPad")||vc("iPod")};
Kc=function(){return Hc()?"macOS"===sc.platform:vc("Macintosh")};
Saa=function(){return Hc()?"Windows"===sc.platform:vc("Windows")};
Lc=function(a){Lc[" "](a);return a};
Mc=function(a,b){try{return Lc(a[b]),!0}catch(c){}return!1};
Uaa=function(a,b){var c=Taa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Vaa=function(){var a=g.Ua.document;return a?a.documentMode:void 0};
g.Pc=function(a){return Uaa(a,function(){return 0<=g.oc(Nc,a)})};
g.Qc=function(a){return Number(Waa)>=a};
Xaa=function(a){return g.Rc?"webkit"+a:a.toLowerCase()};
Sc=function(a,b){g.Bb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)};
Tc=function(a){return!(!a||!a[Yaa])};
$aa=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Gd=e;this.key=++Zaa;this.removed=this.EG=!1};
Uc=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.Gd=null};
g.Vc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Wc=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Xc=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.bd=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
aba=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
g.cd=function(a){for(var b in a)return b};
bba=function(a){for(var b in a)return a[b]};
fd=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.gd=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.hd=function(a,b){return null!==a&&b in a};
g.id=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
jd=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};
cba=function(a,b){return(b=jd(a,b))&&a[b]};
g.kd=function(a){for(var b in a)return!1;return!0};
g.dba=function(a){for(var b in a)delete a[b]};
g.nd=function(a,b){b in a&&delete a[b]};
g.od=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.pd=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.qd=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.rd=function(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=g.rd(a[c]);return b};
g.sd=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eba.length;f++)c=eba[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
td=function(a){this.src=a;this.listeners={};this.j=0};
g.ud=function(a,b){var c=b.type;c in a.listeners&&g.Ib(a.listeners[c],b)&&(Uc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.j--))};
vd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.Gd==d)return e}return-1};
g.xd=function(a,b,c,d,e){if(d&&d.once)return wd(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.xd(a,b[f],c,d,e);return null}c=yd(c);return Tc(a)?a.Sa(b,c,g.ab(d)?!!d.capture:!!d,e):fba(a,b,c,!1,d,e)};
fba=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.ab(e)?!!e.capture:!!e,l=zd(a);l||(a[Bd]=l=new td(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gba();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)hba||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(iba(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jba++;return c};
gba=function(){function a(c){return b.call(a.src,a.listener,c)}
var b=kba;return a};
wd=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)wd(a,b[f],c,d,e);return null}c=yd(c);return Tc(a)?a.AI(b,c,g.ab(d)?!!d.capture:!!d,e):fba(a,b,c,!0,d,e)};
lba=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lba(a,b[f],c,d,e);else d=g.ab(d)?!!d.capture:!!d,c=yd(c),Tc(a)?a.Pc(b,c,d,e):a&&(a=zd(a))&&(b=a.cD(b,c,d,e))&&Cd(b)};
Cd=function(a){if("number"!==typeof a&&a&&!a.removed){var b=a.src;if(Tc(b))g.ud(b.Yl,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(iba(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jba--;(c=zd(b))?(g.ud(c,a),0==c.j&&(c.src=null,b[Bd]=null)):Uc(a)}}};
iba=function(a){return a in Dd?Dd[a]:Dd[a]="on"+a};
kba=function(a,b){if(a.removed)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.Gd||a.src;a.EG&&Cd(a);a=c.call(d,b)}return a};
zd=function(a){a=a[Bd];return a instanceof td?a:null};
yd=function(a){if("function"===typeof a)return a;a[Ed]||(a[Ed]=function(b){return a.handleEvent(b)});
return a[Ed]};
g.Fd=function(){g.J.call(this);this.Yl=new td(this);this.G3=this;this.hQ=null};
Hd=function(a,b,c,d){b=a.Yl.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.removed&&h.capture==c){var l=h.listener,m=h.Gd||h.src;h.EG&&g.ud(a.Yl,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
Id=function(a,b){this.C=a;this.D=b;this.B=0;this.j=null};
mba=function(a,b){a.D(b);100>a.B&&(a.B++,b.next=a.j,a.j=b)};
Jd=function(a){return function(){return a}};
g.Kd=function(){};
nba=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
Ld=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
Md=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};
oba=function(a,b){var c=0;return function(d){g.Ua.clearTimeout(c);var e=arguments;c=g.Ua.setTimeout(function(){a.apply(b,e)},50)}};
Rd=function(){if(void 0===Qd){var a=null,b=g.Ua.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ob,createScript:ob,createScriptURL:ob})}catch(c){g.Ua.console&&g.Ua.console.error(c.message)}Qd=a}else Qd=a}return Qd};
g.Sd=function(a,b){this.ZZ=a===pba&&b||"";this.u3=qba};
g.Td=function(a){return a instanceof g.Sd&&a.constructor===g.Sd&&a.u3===qba?a.ZZ:"type_error:Const"};
g.Yd=function(a){return new g.Sd(pba,a)};
Zd=function(a){this.uQ=a;this.xn=!0};
rba=function(a){return a instanceof Zd&&a.constructor===Zd?a.uQ:"type_error:SafeScript"};
tba=function(a){var b=Rd();a=b?b.createScript(a):a;return new Zd(a,sba)};
g.$d=function(a){this.xQ=a};
g.ae=function(a){return a instanceof g.$d&&a.constructor===g.$d?a.xQ:"type_error:TrustedResourceUrl"};
wba=function(a,b){var c=g.Td(a);if(!uba.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(vba,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof g.Sd?g.Td(d):encodeURIComponent(String(d))});
return be(a)};
be=function(a){var b=Rd();a=b?b.createScriptURL(a):a;return new g.$d(a,xba)};
g.ce=function(a){this.wQ=a};
g.de=function(a){return a instanceof g.ce&&a.constructor===g.ce?a.wQ:"type_error:SafeUrl"};
g.fe=function(a){if(a instanceof g.ce)return a;a="object"==typeof a&&a.xn?a.Nk():String(a);yba.test(a)?a=new g.ce(a,ee):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(zba)?new g.ce(a,ee):null);return a};
Bba=function(a){if(a instanceof g.ce)return a;a="object"==typeof a&&a.xn?a.Nk():String(a);a:{var b=a;if(Aba){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new g.ce(a,ee)};
g.ge=function(a){this.vQ=a;this.xn=!0};
he=function(a){return a instanceof g.ge&&a.constructor===g.ge?a.vQ:"type_error:SafeStyle"};
Iba=function(a){if(a instanceof g.ce)return'url("'+g.de(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof g.Sd)a=g.Td(a);else{a=String(a);var b=a.replace(Cba,"$1").replace(Cba,"$1").replace(Dba,"url");if(Eba.test(b)){if(b=!Fba.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Gba(a)}a=b?Hba(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Ab("Value does not allow [{;}], got: %s.",[a]);return a};
Gba=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
Hba=function(a){return a.replace(Dba,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=(g.fe(d)||g.le).Nk();return c+f+b+f+e})};
g.me=function(a){this.tQ=a;this.xn=!0};
g.ne=function(a){return a instanceof g.me&&a.constructor===g.me?a.tQ:"type_error:SafeHtml"};
Jba=function(a){return a instanceof g.me?a:g.oe(jc("object"==typeof a&&a.xn?a.Nk():String(a)))};
Lba=function(a){function b(e){Array.isArray(e)?e.forEach(b):(e=Jba(e),d.push(g.ne(e).toString()))}
var c=Jba(Kba),d=[];a.forEach(b);return g.oe(d.join(g.ne(c).toString()))};
Mba=function(a){return Lba(Array.prototype.slice.call(arguments))};
g.oe=function(a){var b=Rd();a=b?b.createHTML(a):a;return new g.me(a,Nba)};
Oba=function(a,b){return new g.ge(b,pe)};
g.Qba=function(a,b){if(Pba())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=g.ne(b)};
Rba=function(a,b,c,d){a=a instanceof g.ce?a:Bba(a);b=b||g.Ua;c=c instanceof g.Sd?g.Td(c):c||"";return void 0!==d?b.open(g.de(a),c,d):b.open(g.de(a),c)};
qe=function(){a:{var a=g.Ua.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Sba.test(a))break a;a=""}return a};
Tba=function(a,b){return a+Math.random()*(b-a)};
g.re=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.se=function(a,b){a%=b;return 0>a*b?a+b:a};
te=function(a,b,c){return a+c*(b-a)};
g.ue=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
Be=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Ce=function(a,b){this.width=a;this.height=b};
g.De=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.Ee=function(a){return encodeURIComponent(String(a))};
Fe=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.Ge=function(a){return a=jc(a)};
g.He=function(a){return null==a?"":String(a)};
Ie=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
Se=function(a){var b=Number(a);return 0==b&&g.ic(a)?NaN:b};
Uba=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
Vba=function(){return"googleAvInapp".replace(/([A-Z])/g,"-$1").toLowerCase()};
Wba=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};
Xba=function(a){var b=1;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c};
Ve=function(a){return a?new Te(Ue(a)):Yba||(Yba=new Te)};
We=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Xe=function(a,b){return(b||document).getElementsByTagName(String(a))};
g.kf=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.jf(document,"*",a,b)};
g.lf=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.jf(c,"*",a,b)[0]||null}return a||null};
g.jf=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.Gb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
mf=function(a,b){g.Vc(b,function(c,d){c&&"object"==typeof c&&c.xn&&(c=c.Nk());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Zba.hasOwnProperty(d)?a.setAttribute(Zba[d],c):hc(d,"aria-")||hc(d,"data-")?a.setAttribute(d,c):a[d]=c})};
$ba=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new g.Ce(a.clientWidth,a.clientHeight)};
bca=function(a){var b=aca(a);a=a.parentWindow||a.defaultView;return g.nf&&a.pageYOffset!=b.scrollTop?new g.ue(b.scrollLeft,b.scrollTop):new g.ue(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
aca=function(a){return a.scrollingElement?a.scrollingElement:g.Rc||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement};
of=function(a){return a?a.parentWindow||a.defaultView:window};
uf=function(a,b,c){var d=arguments,e=document,f=d[1],h=tf(e,String(d[0]));f&&("string"===typeof f?h.className=f:Array.isArray(f)?h.className=f.join(" "):mf(h,f));2<d.length&&cca(e,h,d,2);return h};
cca=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.$a(f)||g.ab(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.ab(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){h="function"==typeof f.item;break a}}h=!1}g.dc(h?g.Mb(f):f,e)}}};
g.vf=function(a){return tf(document,a)};
tf=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.wf=function(a){return document.createTextNode(String(a))};
g.xf=function(a,b){a.appendChild(b)};
g.yf=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.zf=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Af=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Ef=function(a){var b;if(dca&&(b=a.parentElement))return b;b=a.parentNode;return g.ab(b)&&1==b.nodeType?b:null};
g.Ff=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
Ue=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Gf=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else g.yf(a),a.appendChild(Ue(a).createTextNode(String(b)))};
Hf=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!a.hasAttribute("tabindex")||eca(a)):a.hasAttribute("tabindex")&&eca(a))&&g.nf){var c;"function"!==typeof a.getBoundingClientRect||g.nf&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
eca=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
Jf=function(a,b,c){if(!b&&!c)return null;var d=b?String(b).toUpperCase():null;return If(a,function(e){return(!d||e.nodeName==d)&&(!c||"string"===typeof e.className&&g.Gb(e.className.split(/\s+/),c))},!0)};
If=function(a,b,c){a&&!c&&(a=a.parentNode);for(c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};
Te=function(a){this.j=a||g.Ua.document||document};
Lf=function(a){"function"!==typeof g.Ua.setImmediate||g.Ua.Window&&g.Ua.Window.prototype&&!Cc()&&g.Ua.Window.prototype.setImmediate==g.Ua.setImmediate?(Kf||(Kf=fca()),Kf(a)):g.Ua.setImmediate(a)};
fca=function(){var a=g.Ua.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!vc("Presto")&&(a=function(){var e=g.vf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.ib)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!Bc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.VU;c.VU=null;e()}};
return function(e){d.next={VU:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.Ua.setTimeout(e,0)}};
Xf=function(a){g.Ua.setTimeout(function(){throw a;},0)};
Yf=function(){this.B=this.j=null};
Zf=function(){this.next=this.scope=this.OC=null};
g.bg=function(a,b){$f||gca();ag||($f(),ag=!0);hca.add(a,b)};
gca=function(){if(g.Ua.Promise&&g.Ua.Promise.resolve){var a=g.Ua.Promise.resolve(void 0);$f=function(){a.then(ica)}}else $f=function(){Lf(ica)}};
ica=function(){for(var a;a=hca.remove();){try{a.OC.call(a.scope)}catch(b){Xf(b)}mba(jca,a)}ag=!1};
g.dg=function(a){this.j=0;this.N=void 0;this.D=this.B=this.C=null;this.G=this.K=!1;if(a!=g.Kd)try{var b=this;a.call(void 0,function(c){cg(b,2,c)},function(c){cg(b,3,c)})}catch(c){cg(this,3,c)}};
kca=function(){this.next=this.context=this.B=this.C=this.j=null;this.D=!1};
eg=function(a,b,c){var d=lca.get();d.C=a;d.B=b;d.context=c;return d};
fg=function(a){if(a instanceof g.dg)return a;var b=new g.dg(g.Kd);cg(b,2,a);return b};
gg=function(a){return new g.dg(function(b,c){c(a)})};
g.nca=function(a,b,c){mca(a,b,c,null)||g.bg(g.jb(b,a))};
oca=function(a){return new g.dg(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],g.nca(e,b,c)})};
qca=function(){var a,b,c=new g.dg(function(d,e){a=d;b=e});
return new pca(c,a,b)};
ig=function(a,b){b=eg(b,b);b.D=!0;hg(a,b);return a};
rca=function(a,b){if(0==a.j)if(a.C){var c=a.C;if(c.B){for(var d=0,e=null,f=null,h=c.B;h&&(h.D||(d++,h.j==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.j&&1==d?rca(c,b):(f?(d=f,d.next==c.D&&(c.D=d),d.next=d.next.next):sca(c),tca(c,e,3,b)))}a.C=null}else cg(a,3,b)};
hg=function(a,b){a.B||2!=a.j&&3!=a.j||uca(a);a.D?a.D.next=b:a.B=b;a.D=b};
vca=function(a,b,c,d){var e=eg(null,null,null);e.j=new g.dg(function(f,h){e.C=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.B=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof mg?h(l):f(m)}catch(n){h(n)}}:h});
e.j.C=a;hg(a,e);return e.j};
cg=function(a,b,c){0==a.j&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.j=1,mca(c,a.Raa,a.Saa,a)||(a.N=c,a.j=b,a.C=null,uca(a),3!=b||c instanceof mg||wca(a,c)))};
mca=function(a,b,c,d){if(a instanceof g.dg)return hg(a,eg(b||g.Kd,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(h){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(g.ab(a))try{var f=a.then;if("function"===typeof f)return xca(a,f,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
xca=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
uca=function(a){a.K||(a.K=!0,g.bg(a.U4,a))};
sca=function(a){var b=null;a.B&&(b=a.B,a.B=b.next,b.next=null);a.B||(a.D=null);return b};
tca=function(a,b,c,d){if(3==c&&b.B&&!b.D)for(;a&&a.G;a=a.C)a.G=!1;if(b.j)b.j.C=null,yca(b,c,d);else try{b.D?b.C.call(b.context):yca(b,c,d)}catch(e){zca.call(null,e)}mba(lca,b)};
yca=function(a,b,c){2==b?a.C.call(a.context,c):a.B&&a.B.call(a.context,c)};
wca=function(a,b){a.G=!0;g.bg(function(){a.G&&zca.call(null,b)})};
mg=function(a){zb.call(this,a)};
pca=function(a,b,c){this.promise=a;this.resolve=b;this.reject=c};
g.ng=function(a,b){g.Fd.call(this);this.Ri=a||1;this.GF=b||g.Ua;this.PU=(0,g.ib)(this.Eaa,this);this.qX=g.lb()};
g.og=function(a,b,c){if("function"===typeof a)c&&(a=(0,g.ib)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.ib)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.Ua.setTimeout(a,b||0)};
pg=function(a,b){var c=null;return(new g.dg(function(d,e){c=g.og(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))})).zk(function(d){g.Ua.clearTimeout(c);
throw d;})};
g.qg=function(a){g.J.call(this);this.N=a;this.B=new Map;this.K=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.j=new g.ng(this.flushInterval);this.j.Sa("tick",this.Jx,!1,this);g.L(this,this.j);this.G=!1};
Aca=function(a){a.j.enabled||a.j.start();a.C++;a.C>=a.D&&a.Jx()};
Bca=function(a,b){return a.K.has(b)?void 0:a.B.get(b)};
Cca=function(a){for(var b=0;b<a.length;b++)a[b].clear()};
Dca=function(a){this.j=a;this.j.tG("/client_streamz/po/w/rl",{Jf:3,If:"mn"},{Jf:2,If:"ac"},{Jf:2,If:"sc"},{Jf:3,If:"rk"})};
Eca=function(a){this.j=a;this.j.tG("/client_streamz/po/w/el",{Jf:3,If:"en"},{Jf:3,If:"rk"})};
Fca=function(a){this.j=a;this.j.Sl("/client_streamz/po/w/cec",{Jf:2,If:"ec"},{Jf:3,If:"rk"})};
Gca=function(a){this.j=a;this.j.Sl("/client_streamz/po/w/csc",{Jf:2,If:"cs"},{Jf:3,If:"rk"})};
Hca=function(a){this.j=a;this.j.Sl("/client_streamz/po/w/ctav",{Jf:3,If:"av"},{Jf:3,If:"rk"})};
Ica=function(a){this.j=a;this.j.Sl("/client_streamz/po/w/cwsc",{Jf:3,If:"su"},{Jf:3,If:"rk"})};
rg=function(){throw Error("Invalid UTF8");};
Jca=function(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b};
Mca=function(a){var b=!1;b=void 0===b?!1:b;if(Kca){if(b&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))throw Error("Found an unpaired surrogate");a=(Lca||(Lca=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(128>f)d[c++]=f;else{if(2048>f)d[c++]=f>>6|192;else{if(55296<=f&&57343>=f){if(56319>=f&&e<a.length){var h=a.charCodeAt(++e);if(56320<=h&&57343>=h){f=1024*(f-55296)+h-56320+65536;d[c++]=f>>
18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a};
Nca=function(a){return Array.prototype.map.call(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};
Oca=function(a){for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
g.sg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
g.tg=function(a,b){void 0===b&&(b=0);Pca();b=Qca[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var h=a[e],l=a[e+1],m=a[e+2],n=b[h>>2];h=b[(h&3)<<4|l>>4];l=b[(l&15)<<2|m>>6];m=b[m&63];c[f++]=""+n+h+l+m}n=0;m=d;switch(a.length-e){case 2:n=a[e+1],m=b[(n&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|n>>4]+m+d}return c.join("")};
g.ug=function(a,b){if(Rca&&!b)a=g.Ua.btoa(a);else{for(var c=[],d=0,e=0;e<a.length;e++){var f=a.charCodeAt(e);255<f&&(c[d++]=f&255,f>>=8);c[d++]=f}a=g.tg(c,b)}return a};
Tca=function(a){var b=[];Sca(a,function(c){b.push(c)});
return b};
vg=function(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):g.kc("=.",a[b-1])&&(c=g.kc("=.",a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Sca(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d};
Sca=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),p=wg[n];if(null!=p)return p;if(!g.ic(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
Pca();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
Pca=function(){if(!wg){wg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Qca[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===wg[f]&&(wg[f]=e)}}}};
Vca=function(a){if(!Uca)return g.tg(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)};
Xca=function(a){return Wca[a]||""};
Zca=function(a){if(!Uca)return vg(a);Yca.test(a)&&(a=a.replace(Yca,Xca));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
xg=function(a){return $ca&&null!=a&&a instanceof Uint8Array};
yg=function(){return ada||(ada=new Uint8Array(0))};
bda=function(a){if(a!==zg)throw Error("illegal external caller");};
Ag=function(a,b){bda(b);this.Yd=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};
Bg=function(){return cda||(cda=new Ag(null,zg))};
dda=function(a){var b=a.Yd;return null==b?"":"string"===typeof b?b:a.Yd=Vca(b)};
Qg=function(a){return(a=Pg(a))?new Uint8Array(a):yg()};
Pg=function(a){bda(zg);var b=a.Yd;b=null==b||xg(b)?b:"string"===typeof b?Zca(b):null;return null==b?b:a.Yd=b};
eda=function(a,b){return Error("Invalid wire type: "+a+" (at position "+b+")")};
Rg=function(){return Error("Failed to read varint, encoding is invalid.")};
fda=function(a,b){return Error("Tried to read past the end of the data "+b+" > "+a)};
gda=function(a){return 0==a.length?Bg():new Ag(a,zg)};
Sg=function(a){if("string"===typeof a)return{buffer:Zca(a),Nv:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),Nv:!1};if(a.constructor===Uint8Array)return{buffer:a,Nv:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),Nv:!1};if(a.constructor===Ag)return{buffer:Pg(a)||yg(),Nv:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),Nv:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
ida=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=g.u(hda(c,a)),b=c.next().value,a=c.next().value,c=b);Tg=c>>>0;Ug=a>>>0};
jda=function(a){if(16>a.length)ida(Number(a));else if("function"===typeof BigInt)a=BigInt(a),Tg=Number(a&BigInt(4294967295))>>>0,Ug=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+("-"===a[0]);Ug=Tg=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Ug*=1E6,Tg=1E6*Tg+d,4294967296<=Tg&&(Ug+=Math.trunc(Tg/4294967296),Ug>>>=0,Tg>>>=0);b&&(b=g.u(hda(Tg,Ug)),a=b.next().value,b=b.next().value,Tg=a,Ug=b)}};
hda=function(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};
Vg=function(a,b){this.B=null;this.G=!1;this.j=this.C=this.D=0;this.init(a,void 0,void 0,b)};
Xg=function(a){var b=0,c=0,d=0,e=a.B,f=a.j;do{var h=e[f++];b|=(h&127)<<d;d+=7}while(32>d&&h&128);32<d&&(c|=(h&127)>>4);for(d=3;32>d&&h&128;d+=7)h=e[f++],c|=(h&127)<<d;Wg(a,f);if(128>h){a=b>>>0;h=c>>>0;if(c=h&2147483648)a=~a+1>>>0,h=~h>>>0,0==a&&(h=h+1>>>0);a=4294967296*h+(a>>>0);return c?-a:a}throw Rg();};
Wg=function(a,b){a.j=b;if(b>a.C)throw fda(a.C,b);};
Yg=function(a){var b=a.B,c=a.j,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Rg();Wg(a,c);return e};
Zg=function(a){var b=a.B,c=a.j,d=b[c+0],e=b[c+1],f=b[c+2];b=b[c+3];a.advance(4);return(d<<0|e<<8|f<<16|b<<24)>>>0};
$g=function(a){var b=Zg(a),c=Zg(a);a=2*(c>>31)+1;var d=c>>>20&2047;b=4294967296*(c&1048575)+b;return 2047==d?b?NaN:Infinity*a:0==d?a*Math.pow(2,-1074)*b:a*Math.pow(2,d-1075)*(b+4503599627370496)};
ah=function(a){for(var b=0,c=a.j,d=c+10,e=a.B;c<d;){var f=e[c++];b|=f;if(0===(f&128))return Wg(a,c),!!(b&127)}throw Rg();};
kda=function(a,b){if(0>b)throw Error("Tried to read a negative byte length: "+b);var c=a.j,d=c+b;if(d>a.C)throw fda(b,a.C-c);a.j=d;return c};
mda=function(a,b){if(0==b)return Bg();var c=kda(a,b);a.uG&&a.G?c=a.B.subarray(c,c+b):(a=a.B,b=c+b,c=c===b?yg():lda?a.slice(c,b):new Uint8Array(a.subarray(c,b)));return gda(c)};
ph=function(a,b){if(bh.length){var c=bh.pop();c.init(a,void 0,void 0,b);a=c}else a=new Vg(a,b);this.j=a;this.C=this.j.j;this.B=this.D=-1;nda(this,b)};
nda=function(a,b){b=void 0===b?{}:b;a.VM=void 0===b.VM?!1:b.VM};
oda=function(a){var b=a.j;if(b.j==b.C)return!1;a.C=a.j.j;var c=Yg(a.j)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw eda(c,a.C);if(1>b)throw Error("Invalid field number: "+b+" (at position "+a.C+")");a.D=b;a.B=c;return!0};
qh=function(a){switch(a.B){case 0:0!=a.B?qh(a):ah(a.j);break;case 1:a.j.advance(8);break;case 2:if(2!=a.B)qh(a);else{var b=Yg(a.j)>>>0;a.j.advance(b)}break;case 5:a.j.advance(4);break;case 3:b=a.D;do{if(!oda(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.B){if(a.D!=b)throw Error("Unmatched end-group tag");break}qh(a)}while(1);break;default:throw eda(a.B,a.C);}};
rh=function(a,b,c){var d=a.j.C,e=Yg(a.j)>>>0,f=a.j.j+e,h=f-d;0>=h&&(a.j.C=f,c(b,a,void 0,void 0,void 0),h=f-a.j.j);if(h)throw Error("Message parsing ended unexpectedly. Expected to read "+(e+" bytes, instead read "+(e-h)+" bytes, either the data ended unexpectedly or the message misreported its own length"));a.j.j=f;a.j.C=d};
uh=function(a){var b=Yg(a.j)>>>0;a=a.j;var c=kda(a,b);a=a.B;if(pda){var d=a,e;(e=sh)||(e=sh=new TextDecoder("utf-8",{fatal:!0}));a=c+b;d=0===c&&a===d.length?d:d.subarray(c,a);try{var f=e.decode(d)}catch(n){if(void 0===th){try{e.decode(new Uint8Array([128]))}catch(p){}try{e.decode(new Uint8Array([97])),th=!0}catch(p){th=!1}}!th&&(sh=void 0);throw n;}}else{f=c;b=f+b;c=[];for(var h=null,l,m;f<b;)l=a[f++],128>l?c.push(l):224>l?f>=b?rg():(m=a[f++],194>l||128!==(m&192)?(f--,rg()):c.push((l&31)<<6|m&63)):
240>l?f>=b-1?rg():(m=a[f++],128!==(m&192)||224===l&&160>m||237===l&&160<=m||128!==((d=a[f++])&192)?(f--,rg()):c.push((l&15)<<12|(m&63)<<6|d&63)):244>=l?f>=b-2?rg():(m=a[f++],128!==(m&192)||0!==(l<<28)+(m-144)>>30||128!==((d=a[f++])&192)||128!==((e=a[f++])&192)?(f--,rg()):(l=(l&7)<<18|(m&63)<<12|(d&63)<<6|e&63,l-=65536,c.push((l>>10&1023)+55296,(l&1023)+56320))):rg(),8192<=c.length&&(h=Jca(h,c),c.length=0);f=Jca(h,c)}return f};
qda=function(a){var b=Yg(a.j)>>>0;return mda(a.j,b)};
rda=function(a,b){this.B=a>>>0;this.j=b>>>0};
tda=function(a){if(!a)return sda||(sda=new rda(0,0));if(!/^\d+$/.test(a))return null;jda(a);return new rda(Tg,Ug)};
uda=function(a,b){this.B=a>>>0;this.j=b>>>0};
wda=function(a){if(!a)return vda||(vda=new uda(0,0));if(!/^-?\d+$/.test(a))return null;jda(a);return new uda(Tg,Ug)};
vh=function(){this.j=[]};
xda=function(a,b,c){for(;0<c||127<b;)a.j.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.j.push(b)};
wh=function(a,b){for(;127<b;)a.j.push(b&127|128),b>>>=7;a.j.push(b)};
yda=function(a,b){if(0<=b)wh(a,b);else{for(var c=0;9>c;c++)a.j.push(b&127|128),b>>=7;a.j.push(1)}};
xh=function(a,b){a.j.push(b>>>0&255);a.j.push(b>>>8&255);a.j.push(b>>>16&255);a.j.push(b>>>24&255)};
zda=function(){this.C=[];this.B=0;this.j=new vh};
yh=function(a,b){0!==b.length&&(a.C.push(b),a.B+=b.length)};
zh=function(a,b,c){wh(a.j,8*b+c)};
Ada=function(a,b,c){null!=c&&("string"===typeof c&&tda(c),zh(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Tg=b,Ug=c,xh(a,Tg),xh(a,Ug)):(c=tda(c),a=a.j,b=c.j,xh(a,c.B),xh(a,b)))};
Ah=function(a,b,c){zh(a,b,2);wh(a.j,c.length);yh(a,a.j.end());yh(a,c)};
Bh=function(a,b,c){this.j=a;this.B=b;this.C=c};
Ch=function(a){return Array.prototype.slice.call(a)};
Bda=function(a){var b=Dh(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ch(a)),Eh(a,b|1))};
Fh=function(a,b,c){return c?a|b:a&~b};
Cda=function(){var a=[];Gh(a,1);return a};
Dda=function(a,b){Eh(b,(a|0)&-2303)};
Hh=function(a,b){Eh(b,(a|34)&-2269)};
Ih=function(a){a=a>>12&1023;return 0===a?536870912:a};
Jh=function(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object};
Kh=function(a,b,c,d){if(null==a){if(!c)throw Error();}else if("string"===typeof a)a=a?new Ag(a,zg):Bg();else if(a.constructor!==Ag)if(xg(a))a=d?gda(a):a.length?new Ag(new Uint8Array(a),zg):Bg();else{if(!b)throw Error();a=void 0}return a};
Lh=function(a){if(a&2)throw Error();};
Eda=function(a,b){if("number"!==typeof b||0>b||b>=a.length)throw Error();};
Fda=function(a,b){(b=Mh?b[Mh]:void 0)&&(a[Mh]=Ch(b))};
Nh=function(){var a=Error();Aaa(a,"incident");Xf(a)};
Oh=function(a){a=Error(a);Aaa(a,"warning");return a};
Ph=function(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number, found "+typeof a+": "+a);return a};
Gda=function(a){if(null==a)return a;if("number"===typeof a||"NaN"===a||"Infinity"===a||"-Infinity"===a)return Number(a)};
Hda=function(a){return a.displayName||a.name||"unknown type name"};
Ida=function(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Za(a)+": "+a);return!!a};
Jda=function(a){if(null==a)return a;if("boolean"===typeof a||"number"===typeof a)return!!a};
di=function(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Kda.test(a)};
ei=function(a){Number.isFinite(a)||Nh();return a};
Lda=function(a){return a};
Mda=function(a){if("number"!==typeof a)throw Oh("int32");Number.isFinite(a)||Nh();return a};
fi=function(a){return null==a?a:Mda(a)};
gi=function(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a};
hi=function(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a};
Nda=function(a){if(!di(a))throw Oh("int64");return"string"===typeof a?ii(a):ji(a)};
ki=function(a){return null==a?a:Nda(a)};
ji=function(a){di(a);return a};
li=function(a){di(a);return a};
ii=function(a){di(a);return a};
Oda=function(a){if(!di(a))throw Oh("uint64");"string"===typeof a?di(a):a=li(a);return a};
Pda=function(a){if(null==a)return a;if(di(a)){if("string"===typeof a)return a;if("number"===typeof a)return li(a)}};
Qda=function(a){if(null==a||"string"===typeof a||xg(a)||a instanceof Ag)return a};
mi=function(a){if("string"!==typeof a)throw Error();return a};
ni=function(a){if(null!=a&&"string"!==typeof a)throw Error();return a};
oi=function(a){return null==a||"string"===typeof a?a:void 0};
pi=function(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Hda(b)+" but got "+(a&&Hda(a.constructor)));return a};
Rda=function(a,b,c){if(null!=a&&"object"===typeof a&&a.OI===qi)return a;if(Array.isArray(a)){var d=Dh(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Eh(a,e);return new b(a)}};
si=function(a,b){ri=b;a=new a(b);ri=void 0;return a};
ui=function(a){switch(typeof a){case "boolean":return ti||(ti=[0,void 0,!0]);case "number":return 0<a?void 0:0===a?Sda||(Sda=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}};
M=function(a,b,c){null==a&&(a=ri);ri=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-4190209|(b&1023)<<12)}else{if(!Array.isArray(a))throw Error();d=Dh(a);if(d&64)return Ni&&delete a[Ni],a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,h=c[f];if(Jh(h)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Tda(c,b,h),e=1023);d=d&-4190209|(e&1023)<<12;break a}}b&&(h=+!!(d&512)-1,b=Math.max(b,e-h),1024<b&&(Tda(c,h,{}),d|=256,b=1023),d=d&-4190209|(b&1023)<<12)}}Eh(a,d);return a};
Tda=function(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var h=a[f];null!=h&&h!==c&&(c[f-b]=h)}a.length=d+1;a[d]=c};
Vda=function(a,b){return Uda(b)};
Uda=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(xg(a))return Vca(a);if(a instanceof Ag)return dda(a)}}return a};
Wda=function(a,b,c){var d=Ch(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var h in f)b[h]=c(f[h])}Fda(d,a);return d};
Xda=function(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Dh(a)&1?void 0:f&&Dh(a)&2?a:Oi(a,b,c,void 0!==d,e,f);else if(Jh(a)){var h={},l;for(l in a)h[l]=Xda(a[l],b,c,d,e,f);a=h}else a=b(a,d);return a}};
Oi=function(a,b,c,d,e,f){var h=d||c?Dh(a):0;d=d?!!(h&32):void 0;for(var l=Ch(a),m=0;m<l.length;m++)l[m]=Xda(l[m],b,c,d,e,f);c&&(Fda(l,a),c(h,l));return l};
Yda=function(a){return a.OI===qi?a.toJSON():Uda(a)};
Zda=function(a,b,c){c=void 0===c?Hh:c;if(null!=a){if($ca&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Dh(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Eh(a,(d|34)&-5),a):Oi(a,Zda,d&4?Hh:c,!0,!1,!0)}a.OI===qi&&(c=a.ea,d=Pi(c),a=d&2?a:si(a.constructor,Qi(c,d,!0)));return a}};
Qi=function(a,b,c){var d=c||b&2?Hh:Dda,e=!!(b&32);a=Wda(a,b,function(f){return Zda(f,e,d)});
Gh(a,32|(c?2:0));return a};
Ri=function(a){var b=a.ea,c=Pi(b);return c&2?si(a.constructor,Qi(b,c,!1)):a};
Ti=function(a,b){a=a.ea;return Si(a,Pi(a),b)};
Si=function(a,b,c,d){if(-1===c)return null;if(c>=Ih(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}};
Vi=function(a,b,c){var d=a.ea,e=Pi(d);Lh(e);Ui(d,e,b,c);return a};
Ui=function(a,b,c,d,e){var f=Ih(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Eh(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b};
Wi=function(a,b,c){return void 0!==$da(a,b,c,!1)};
Zi=function(a,b,c,d,e){var f=b&2,h=Si(a,b,c,e);Array.isArray(h)||(h=Xi);var l=!(d&2);d=!(d&1);var m=!!(b&32),n=Dh(h);0!==n||!m||f||l?n&1||(n|=1,Eh(h,n)):(n|=33,Eh(h,n));f?(a=!1,n&2||(Gh(h,34),a=!!(4&n)),(d||a)&&Object.freeze(h)):(f=!!(2&n)||!!(2048&n),d&&f?(h=Ch(h),d=1,m&&!l&&(d|=32),Eh(h,d),Ui(a,b,c,h,e)):l&&n&32&&!f&&Yi(h,32));return h};
aj=function(a,b,c,d,e,f){e=void 0===e?2:e;a=a.ea;var h=Pi(a);2&h&&(e=1);f=!!f;var l=Zi(a,h,b,1|(f?2:0),d);h=Pi(a);var m=Dh(l),n=m,p=!!(2&m),q=!!(4&m),r=p&&q;if(!q){Object.isFrozen(l)&&(l=Ch(l),n=0,m=$i(m,h,f),p=!!(2&m),h=Ui(a,h,b,l,d));for(var t=q=0;q<l.length;q++){var v=c(l[q]);null!=v&&(l[t++]=v)}t<q&&(l.length=t);m=Fh(m,20,!0)}r||((c=1===e)&&(m=Fh(m,2,!0)),m!==n&&Eh(l,m),(c||p)&&Object.freeze(l));2===e&&p&&(l=Ch(l),m=$i(m,h,f),Eh(l,m),Ui(a,h,b,l,d));return l};
aea=function(a){return Kh(a,!0,!0,!0)};
bea=function(a){return Kh(a,!0,!0,!1)};
bj=function(a,b){a=a.ea;var c=Pi(a),d=Si(a,c,b),e=Kh(d,!0,!0,!!(c&34));null!=e&&e!==d&&Ui(a,c,b,e);return null==e?Bg():e};
cj=function(a,b,c,d){var e=a.ea,f=Pi(e);Lh(f);if(null==c)return Ui(e,f,b),a;var h=Dh(c),l=h,m=!!(2&h)||Object.isFrozen(c),n=!m&&!1;if(!(4&h))for(h=21,m&&(c=Ch(c),l=0,h=$i(h,f,!0)),m=0;m<c.length;m++)c[m]=d(c[m]);n&&(h=Fh(h,2,!0));h!==l&&Eh(c,h);n&&Object.freeze(c);Ui(e,f,b,c);return a};
dj=function(a,b,c,d){var e=a.ea,f=Pi(e);Lh(f);Ui(e,f,b,("0"===d?0===Number(c):c===d)?void 0:c);return a};
fj=function(a,b,c,d,e){ej(a.ea,b,c,d,e);return a};
ej=function(a,b,c,d,e){var f=Pi(a);Lh(f);a=Zi(a,f,b,2);d=c(d);void 0!=e?a.splice(e,0,d):a.push(d)};
cea=function(a){return a};
dea=function(a,b,c,d,e,f){Lh(Pi(a.ea));b=f(a,b,void 0,2,!0);if("number"!==typeof d||0>d||d>b.length)throw Error();b[d]=c(e);return a};
hj=function(a,b,c,d){var e=a.ea,f=Pi(e);Lh(f);(c=gj(e,f,c))&&c!==b&&null!=d&&(f=Ui(e,f,c));Ui(e,f,b,d);return a};
sj=function(a,b,c,d){var e=Pi(a);Lh(e);(c=gj(a,e,c))&&c!==b&&(e=Ui(a,e,c));Ui(a,e,b,d)};
tj=function(a,b,c){a=a.ea;return gj(a,Pi(a),b)===c?c:-1};
gj=function(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Si(a,b,f)&&(0!==d&&(b=Ui(a,b,d)),d=f)}return d};
eea=function(a,b,c){var d=Pi(a);Lh(d);var e=Si(a,d,c),f;if(null!=e&&e.OI===qi)return b=Ri(e),b!==e&&Ui(a,d,c,b),b.ea;if(Array.isArray(e)){var h=Dh(e);h&2?f=Qi(e,h,!1):f=e;f=M(f,b[0],b[1])}else f=M(void 0,b[0],b[1]);f!==e&&Ui(a,d,c,f);return f};
$da=function(a,b,c,d){a=a.ea;var e=Pi(a),f=Si(a,e,c,d);b=Rda(f,b,e);b!==f&&null!=b&&Ui(a,e,c,b,d);return b};
g.uj=function(a,b,c,d){d=void 0===d?!1:d;b=$da(a,b,c,d);if(null==b)return b;a=a.ea;var e=Pi(a);if(!(e&2)){var f=Ri(b);f!==b&&(b=f,Ui(a,e,c,b,d))}return b};
fea=function(a,b,c,d,e,f,h){var l=1===e;e=2===e;f=!!f;var m=!!(2&b)&&e,n=Zi(a,b,d,3);b=Pi(a);var p=Dh(n),q=!!(2&p),r=!!(4&p),t=!!(32&p),v=q&&r||!!(2048&p);if(!r){var x=n,C=b,F;(F=!!(2&p))&&(C=Fh(C,2,!0));for(var G=!F,H=!0,O=0,Q=0;O<x.length;O++){var X=Rda(x[O],c,C);if(X instanceof c){if(!F){var ia=!!(Dh(X.ea)&2);G&&(G=!ia);H&&(H=ia)}x[Q++]=X}}Q<O&&(x.length=Q);p=Fh(p,4,!0);p=Fh(p,16,H);p=Fh(p,8,G);Eh(x,p);q&&!m&&(Object.freeze(n),v=!0)}c=p;m=!!(8&p)||l&&!n.length;if(h&&!m){v&&(n=Ch(n),v=!1,c=0,p=
$i(p,b,f),b=Ui(a,b,d,n));h=n;m=p;for(q=0;q<h.length;q++)x=h[q],p=Ri(x),x!==p&&(h[q]=p);m=Fh(m,8,!0);p=m=Fh(m,16,!h.length)}v||(l?p=Fh(p,!n.length||16&p&&(!r||t)?2:2048,!0):f||(p=Fh(p,32,!1)),p!==c&&Eh(n,p),l&&(Object.freeze(n),v=!0));e&&v&&(n=Ch(n),p=$i(p,b,f),Eh(n,p),Ui(a,b,d,n));return n};
gea=function(a,b){a=a.ea;var c=Pi(a),d=!!(2&c);return fea(a,c,b,3,d?1:2,!1,!d)};
N=function(a,b,c,d){null!=d?pi(d,b):d=void 0;return Vi(a,c,d)};
vj=function(a,b,c,d,e){null!=e?pi(e,b):e=void 0;return hj(a,c,d,e)};
wj=function(a,b,c,d){var e=a.ea,f=Pi(e);Lh(f);if(null==d)return Ui(e,f,c),a;for(var h=Dh(d),l=h,m=!!(2&h)||!!(2048&h),n=m||Object.isFrozen(d),p=!n&&!1,q=!0,r=!0,t=0;t<d.length;t++){var v=d[t];pi(v,b);m||(v=!!(Dh(v.ea)&2),q&&(q=!v),r&&(r=v))}m||(h=Fh(h,5,!0),h=Fh(h,8,q),h=Fh(h,16,r),p&&(h=Fh(h,r?2:2048,!0)),h!==l&&(n&&(d=Ch(d),h=$i(h,f,!0)),Eh(d,h)),p&&Object.freeze(d));Ui(e,f,c,d);return a};
$i=function(a,b,c){a=Fh(a,2,!!(2&b));a=Fh(a,32,!!(32&b)&&c);return a=Fh(a,2048,!1)};
xj=function(a,b,c,d,e){var f=a.ea,h=Pi(f);Lh(h);b=fea(f,h,c,b,2);c=null!=d?pi(d,c):new c;void 0!=e?b.splice(e,void 0,c):b.push(c);Dh(c.ea)&2?Yi(b,8):Yi(b,16);return a};
yj=function(a,b){a=Ti(a,b);a=null==a?a:di(a)?"number"===typeof a?ji(a):ii(a):void 0;return a};
hea=function(a){a=Ti(a,1);a=null==a?a:di(a)?"string"===typeof a?ii(a):ji(a):void 0;return a};
zj=function(a,b){return oi(Ti(a,b))};
iea=function(a,b,c,d,e){return aj(a,b,oi,c,d,e)};
jea=function(a,b,c,d,e){return aj(a,b,Lda,c,d,e)};
Aj=function(a,b){return null!=a?a:b};
kea=function(a){return Kh(a,!1,!1,!1)};
Bj=function(a,b,c){c=void 0===c?0:c;return Aj(gi(Ti(a,b)),c)};
Cj=function(a,b){var c=void 0===c?0:c;return Aj(hi(Ti(a,b)),c)};
lea=function(a,b){var c=void 0===c?0:c;return Aj(yj(a,b),c)};
Dj=function(a,b){var c=void 0===c?0:c;a=Ti(a,b);null!=a&&(di(a)?"number"===typeof a?a=li(a):di(a):a=void 0);return Aj(a,c)};
mea=function(a,b){var c=void 0===c?0:c;a=a.ea;var d=Pi(a),e=Si(a,d,b),f=Gda(e);null!=f&&f!==e&&Ui(a,d,b,f);return Aj(f,c)};
g.Ej=function(a,b){return Aj(zj(a,b),"")};
Fj=function(a,b){return Aj(Ti(a,b),0)};
nea=function(a,b,c){a=jea(a,b,void 0,3,!0);Eda(a,c);return a[c]};
Gj=function(a,b,c){return Vi(a,b,null==c?c:Ida(c))};
Hj=function(a,b,c){return Vi(a,b,fi(c))};
Ij=function(a,b,c){if(null!=c){if("number"!==typeof c)throw Oh("uint32");Number.isFinite(c)||Nh()}Vi(a,b,c)};
Jj=function(a,b,c){return Vi(a,b,ki(c))};
Kj=function(a,b,c){Vi(a,b,null==c?c:Oda(c))};
Lj=function(a,b,c){return Vi(a,b,Ph(c))};
P=function(a,b,c){return Vi(a,b,ni(c))};
Mj=function(a,b,c){return dj(a,b,ni(c),"")};
Nj=function(a,b,c){Vi(a,b,Kh(c,!1,!0,!1))};
R=function(a,b,c){return Vi(a,b,null==c?c:ei(c))};
Oj=function(a,b,c,d){hj(a,b,c,null==d?d:ei(d))};
S=function(a,b,c){this.ea=M(a,b,c)};
oea=function(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Gh(b,32);return si(a,b)};
Pj=function(a,b,c){var d=a.constructor.Cb,e=Ih(Pi(c?a.ea:b)),f=!1;if(d){if(!c){b=Ch(b);var h;if(b.length&&Jh(h=b[b.length-1]))for(f=0;f<d.length;f++)if(d[f]>=e){Object.assign(b[b.length-1]={},h);break}f=!0}e=b;c=!c;h=Pi(a.ea);a=Ih(h);h=+!!(h&512)-1;for(var l,m,n=0;n<d.length;n++)if(m=d[n],m<a){m+=h;var p=e[m];null==p?e[m]=c?Xi:Cda():c&&p!==Xi&&Bda(p)}else l||(p=void 0,e.length&&Jh(p=e[e.length-1])?l=p:e.push(l={})),p=l[m],null==l[m]?l[m]=c?Xi:Cda():c&&p!==Xi&&Bda(p)}d=b.length;if(!d)return b;var q;
if(Jh(l=b[d-1])){a:{var r=l;e={};c=!1;for(var t in r)a=r[t],Array.isArray(a)&&a!=a&&(c=!0),null!=a?e[t]=a:c=!0;if(c){for(var v in e){r=e;break a}r=null}}r!=l&&(q=!0);d--}for(;0<d;d--){l=b[d-1];if(null!=l)break;var x=!0}if(!q&&!x)return b;var C;f?C=b:C=Array.prototype.slice.call(b,0,d);b=C;f&&(b.length=d);r&&b.push(r);return b};
ok=function(a,b,c){if(Array.isArray(b)){var d=Dh(b);if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var h=a(b[e]);null!=h&&(b[f++]=h)}f<e&&(b.length=f);c&&(Eh(b,d|5),d&2&&Object.freeze(b));return b}};
qk=function(a){var b=a[pea];if(!b){var c=qea(a),d=pk(a),e=d.j;b=e?function(f,h){return e(f,h,d)}:function(f,h){for(;oda(h)&&4!=h.B;){var l=h.D,m=d[l];
if(!m){var n=d.extensions;n&&(n=n[l])&&(m=d[l]=rea(n))}m&&m(h,f,l)||(m=h,l=m.C,qh(m),m.VM?m=void 0:(n=m.j.j-l,m.j.j=l,m=mda(m.j,n)),l=f,m&&(Mh||(Mh=Symbol()),(n=l[Mh])?n.push(m):l[Mh]=[m]))}for(var p in c){f[Ni||(Ni=Symbol())]=c;break}};
a[pea]=b}return b};
sea=function(a){if(a=a.NU)return qk(a)};
rea=function(a){var b=sea(a),c=a.t$.j;if(b){var d=pk(a.NU).VD;return function(e,f,h){return c(e,f,h,d,b)}}return function(e,f,h){return c(e,f,h)}};
tea=function(a,b,c,d){if(d){var e=d[rk];var f=e?e.VD:ui(d[0]);c[a]=null!=e?e:d}f&&f===ti?(b=c.M6,b||(c.M6=b=[]),b.push(a)):b.C&&(b=c.E$,b||(c.E$=b=[]),b.push(a))};
uea=function(a,b,c,d){tea(a,b,d)};
vea=function(a,b,c,d,e){tea(a,b,e,c)};
qea=function(a){var b=a[rk];if(b)return b;b=a[rk]={};return b=sk(a,b,uea,vea,b)};
sk=function(a,b,c,d,e){b.VD=ui(a[0]);var f=1;if(a.length>f&&!(a[f]instanceof Bh)){var h=a[f++];if(Array.isArray(h))return b.j=h[0],b.extensions=h[1],b;b.extensions=h}for(h=0;f<a.length;){var l=a[f++],m=a[f];"number"===typeof m?(f++,h+=m):h++;for(m=f;m<a.length&&!(a[m]instanceof Bh);)m++;if(m-=f){var n=a,p=f,q=n[p];"function"==typeof q&&(q=q(),n[p]=q);if((n=Array.isArray(q))&&!(n=tk in q||uk in q)&&(n=0<q.length)){n=q;p=n[0];var r=ui(p);null!=r&&r!==p&&(n[0]=r);n=null!=r}(q=n?q:void 0)?(f++,1===m?
(l=d(h,l,q,void 0,e),void 0!==l&&(b[h]=l)):(l=d(h,l,q,a[f++],e),void 0!==l&&(b[h]=l))):(l=c(h,l,a[f++],e),void 0!==l&&(b[h]=l))}else l=c(h,l,void 0,e),void 0!==l&&(b[h]=l)}return b};
yea=function(a){var b=a[wea];if(!b){var c=vk(a);b=function(d,e){return xea(d,e,c)};
a[wea]=b}return b};
zea=function(a,b){return b.B};
Aea=function(a,b,c){var d,e,f=b.B;return function(h,l,m){return f(h,l,m,e||(e=vk(c).VD),d||(d=yea(c)))}};
vk=function(a){var b=a[uk];if(b)return b;b=sk(a,a[uk]={},zea,Aea);tk in a&&uk in a&&(a.length=0);return b};
Bea=function(a,b,c){var d=b.j;return c?function(e,f,h){return d(e,f,h,c)}:d};
Cea=function(a,b,c,d){var e=b.j,f,h;return function(l,m,n){return e(l,m,n,h||(h=pk(c).VD),f||(f=qk(c)),d)}};
pk=function(a){var b=a[tk];if(b)return b;qea(a);b=sk(a,a[tk]={},Bea,Cea);tk in a&&uk in a&&(a.length=0);return b};
Dea=function(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){var d=c.NU,e=c.t$.B;if(d){var f=yea(d),h=vk(d).VD;c=function(l,m,n){return e(l,m,n,h,f)}}else c=e;
return a[b]=c}};
xea=function(a,b,c){for(var d=Pi(a),e=+!!(d&512)-1,f=a.length,h=f+(d&256?-1:0),l=d&512?1:0;l<h;l++){var m=a[l];if(null!=m){var n=l-e,p=Dea(c,n);p&&p(b,m,n)}}if(d&256){d=a[f-1];for(var q in d)e=+q,Number.isNaN(e)||(f=d[q],null!=f&&(h=Dea(c,e))&&h(b,f,e))}if(a=Mh?a[Mh]:void 0)for(yh(b,b.j.end()),c=0;c<a.length;c++)yh(b,Pg(a[c])||yg())};
wk=function(a,b){return new Bh(a,b,!1)};
xk=function(a,b){return new Bh(a,b,!0)};
yk=function(a,b,c){Ui(a,Pi(a),b,c)};
zk=function(a,b,c){b=Gda(b);null!=b&&(zh(a,c,1),a=a.j,c=Eea||(Eea=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Tg=c.getUint32(0,!0),Ug=c.getUint32(4,!0),xh(a,Tg),xh(a,Ug))};
Ak=function(a,b,c){a:if(null!=b){if(di(b)){if("string"===typeof b)break a;if("number"===typeof b){b=ji(b);break a}}b=void 0}null!=b&&("string"===typeof b&&wda(b),null!=b&&(zh(a,c,0),"number"===typeof b?(a=a.j,ida(b),xda(a,Tg,Ug)):(c=wda(b),xda(a.j,c.B,c.j))))};
Bk=function(a,b,c){b=gi(b);null!=b&&null!=b&&(zh(a,c,0),yda(a.j,b))};
Fea=function(a,b,c){b=Jda(b);null!=b&&(zh(a,c,0),a.j.j.push(b?1:0))};
Gea=function(a,b,c){b=oi(b);null!=b&&Ah(a,c,Mca(b))};
Ck=function(a,b,c,d,e){b=b instanceof S?b.ea:Array.isArray(b)?M(b,d[0],d[1]):void 0;if(null!=b){zh(a,c,2);c=a.j.end();yh(a,c);c.push(a.B);e(b,a);e=c.pop();for(e=a.B+a.j.length()-e;127<e;)c.push(e&127|128),e>>>=7,a.B++;c.push(e);a.B++}};
Hea=function(a){return function(){var b=new zda;xea(this.ea,b,vk(a));yh(b,b.j.end());for(var c=new Uint8Array(b.B),d=b.C,e=d.length,f=0,h=0;h<e;h++){var l=d[h];c.set(l,f);f+=l.length}b.C=[c];return c}};
Dk=function(a){return function(b){return oea(a,b)}};
Ek=function(a){this.ea=M(a)};
Fk=function(a){this.ea=M(a)};
Gk=function(a){this.ea=M(a)};
Hk=function(a){this.ea=M(a)};
Ik=function(a){this.ea=M(a)};
Jk=function(a){this.ea=M(a)};
g.Iea=function(a){var b=new Ik;b=P(b,1,a.B);for(var c=[],d=0;d<a.j.length;d++)c.push(a.j[d].If);b=cj(b,3,c,mi);c=[];d=[];for(var e=g.u(a.Gy.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var h=a.D,l=a.pN(f)||[],m=[],n=0;n<l.length;n++){var p=l[n],q=p&&p.j;p=new Gk;switch(h){case 3:q=Number(q);Number.isFinite(q)&&hj(p,1,Kk,ki(q));break;case 2:hj(p,2,Kk,Ph(Number(q)))}m.push(p)}h=m;for(l=0;l<h.length;l++){m=h[l];n=new Hk;m=N(n,Gk,2,m);n=[];p=a;q=
[];for(var r=0;r<p.j.length;r++)q.push(p.j[r].Jf);p=q;for(q=0;q<p.length;q++){var t=p[q],v=f[q];r=new Fk;switch(t){case 3:hj(r,1,Lk,ni(String(v)));break;case 2:t=Number(v);Number.isFinite(t)&&hj(r,2,Lk,fi(t));break;case 1:t="true"===v,t=null==t?t:Ida(t),hj(r,3,Lk,t)}n.push(r)}wj(m,Fk,1,n);c.push(m)}}wj(b,Hk,4,c);return b};
Jea=function(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
Kea=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(q){for(var r=h,t=0;64>t;t+=4)r[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(q<<1|q>>>31)&4294967295;q=e[0];var v=e[1],x=e[2],C=e[3],F=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=C^v&(x^C);var H=1518500249}else G=v^x^C,H=1859775393;else 60>t?(G=v&x|C&(v|x),H=2400959708):(G=v^x^C,H=3395469782);G=((q<<5|q>>>27)&4294967295)+G+F+H+r[t]&4294967295;F=C;C=x;x=(v<<30|v>>>2)&4294967295;v=q;q=G}e[0]=e[0]+q&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+F&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],v=0,x=q.length;v<x;++v)t.push(q.charCodeAt(v));q=t}r||(r=q.length);t=0;if(0==n)for(;t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64;for(;t<r;)if(f[n++]=q[t++],p++,64==n)for(n=0,b(f);t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64}
function d(){var q=[],r=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var v=24;0<=v;v-=8)q[r++]=e[t]>>v&255;return q}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,E4:function(){for(var q=d(),r="",t=0;t<q.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return r}}};
Mea=function(a,b,c){var d=String(g.Ua.location.href);return d&&a&&b?[b,Lea(Jea(d),a,c||null)].join(" "):null};
Lea=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],g.dc(d,function(l){e.push(l)}),Nea(e.join(" "));
var f=[],h=[];g.dc(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];g.dc(d,function(l){e.push(l)});
a=Nea(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")};
Nea=function(a){var b=Kea();b.update(a);return b.E4().toLowerCase()};
Mk=function(a){this.j=a||{cookie:""}};
Nk=function(a){a=(a.j.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=mc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
Ok=function(a){return!!Oea.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};
Pea=function(a){a=void 0===a?!1:a;var b=g.Ua.__SAPISID||g.Ua.__APISID||g.Ua.__3PSAPISID||g.Ua.__OVERRIDE_SID;Ok(a)&&(b=b||g.Ua.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Mk(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ok(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b};
Qea=function(a,b,c,d){(a=g.Ua[a])||"undefined"===typeof document||(a=(new Mk(document)).get(b));return a?Mea(a,c,d):null};
Rea=function(a,b){b=void 0===b?!1:b;var c=Jea(String(g.Ua.location.href)),d=[];if(Pea(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?g.Ua.__SAPISID:g.Ua.__APISID;e||"undefined"===typeof document||(e=new Mk(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Mea(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ok(b)&&((b=Qea("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Qea("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")};
ll=function(a){this.ea=M(a)};
ml=function(a){g.Fd.call(this);this.intervalMs=a;this.enabled=!1;this.j=function(){return g.lb()};
this.B=this.j()};
nl=function(a){this.ea=M(a)};
ol=function(a){this.ea=M(a)};
g.pl=function(a,b,c,d){this.D=a;this.G=b;this.j=this.C=a;this.K=c||0;this.N=d||2};
g.ql=function(a){a.j=Math.min(a.G,a.j*a.N);a.C=Math.min(a.G,a.j+(a.K?Math.round(a.K*(Math.random()-.5)*2*a.j):0));a.B++};
rl=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
sl=function(a){return a?decodeURI(a):a};
g.ul=function(a,b){return b.match(tl)[a]||null};
g.vl=function(a){return sl(g.ul(3,a))};
g.Sea=function(a){a=a.match(tl);return rl(a[1],a[2],a[3],a[4])};
Tea=function(a){a=a.match(tl);return rl(a[1],null,a[3],a[4])};
wl=function(a){a=a.match(tl);return rl(null,null,null,null,a[5],a[6],a[7])};
Uea=function(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)};
xl=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?Fe(e):"")}}};
yl=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
zl=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zl(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ee(b)))};
Vea=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)zl(a[b],a[b+1],c);return c.join("&")};
g.Al=function(a){var b=[],c;for(c in a)zl(c,a[c],b);return b.join("&")};
Wea=function(a,b){var c=2==arguments.length?Vea(arguments[1],0):Vea(arguments,1);return yl(a,c)};
g.Bl=function(a,b){b=g.Al(b);return yl(a,b)};
Cl=function(a,b,c){c=null!=c?"="+g.Ee(c):"";return yl(a,b+c)};
Xea=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Dl=function(a,b){var c=a.search(Yea),d=Xea(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Fe(a.slice(d,-1!==e?e:0))};
El=function(a,b){for(var c=a.search(Yea),d=0,e,f=[];0<=(e=Xea(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Zea,"$1")};
$ea=function(a,b,c){return Cl(El(a,b),b,c)};
Fl=function(a){this.ea=M(a)};
Gl=function(a){this.ea=M(a)};
Hl=function(a){this.ea=M(a)};
Il=function(a){this.ea=M(a)};
lm=function(a){this.ea=M(a)};
mm=function(a){this.ea=M(a)};
nm=function(a){this.ea=M(a,34)};
om=function(a){this.ea=M(a,19)};
pm=function(a){this.ea=M(a,6)};
afa=function(a){this.ea=M(a)};
sm=function(a){g.J.call(this);var b=this;this.componentId="";this.B=[];this.Ka="";this.Na=this.Ea=-1;this.Da=!1;this.N=this.experimentIds=null;this.qa=this.Aa=this.K=this.D=0;this.Ra=1;this.timeoutMillis=0;this.Z=!1;this.logSource=a.logSource;this.cz=a.cz||function(){};
this.C=new qm(a.logSource,a.Iz);this.network=a.network;this.HA=a.HA||null;this.Va=g.jb(Tba,0,1);this.ma=a.bba||null;this.sessionIndex=a.sessionIndex||null;this.AC=a.AC||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.rV;this.Iz=a.Iz||!1;var c=R(new Il,1,1);rm(this.C,c);this.G=new g.pl(1E4,3E5,.1);this.j=new ml(this.G.getValue());a=bfa(this,a.KU);g.xd(this.j,"tick",a,!1,this);this.Y=new ml(6E5);g.xd(this.Y,"tick",a,!1,this);this.AC||this.Y.start();this.Iz||(g.xd(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.gN()}),g.xd(document,"pagehide",this.gN,!1,this))};
bfa=function(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}};
cfa=function(a){a.ma||(a.ma=.01>a.Va()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ma};
dfa=function(a,b){a.G=new g.pl(1>b?1:b,3E5,.1);a.j.setInterval(a.G.getValue())};
ffa=function(a){efa(a,function(b,c){b=Cl(b,"format","json");var d=!1;try{d=of().navigator.sendBeacon(b,c.Cj())}catch(e){}a.Z&&!d&&(a.Z=!1);return d})};
efa=function(a,b){if(0!==a.B.length){var c=El(cfa(a),"format");c=Wea(c,"auth",a.cz(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.B.length;++d){var e=a.B.slice(0,32),f=a.C.build(e,a.D,a.K,a.HA,a.Aa,a.qa);if(!b(c,f)){++a.K;break}a.D=0;a.K=0;a.Aa=0;a.qa=0;a.B=a.B.slice(e.length)}a.j.enabled&&a.j.stop()}};
qm=function(a,b){this.Iz=b=void 0===b?!1:b;this.B=this.locale=null;this.j=new om;Number.isInteger(a)&&this.j.qF(a);b||(this.locale=document.documentElement.getAttribute("lang"));rm(this,new Il)};
rm=function(a,b){N(a.j,Il,1,b);Ti(b,1)||R(b,1,1);a.Iz||(b=tm(a),zj(b,5)||P(b,5,a.locale));a.B&&(b=tm(a),g.uj(b,Gl,9)||N(b,Gl,9,a.B))};
gfa=function(a,b){Wi(um(a),Hl,11)&&(a=vm(a),R(a,1,b))};
hfa=function(a,b){Wi(um(a),Hl,11)&&(a=vm(a),Gj(a,2,b))};
um=function(a){return g.uj(a.j,Il,1)};
jfa=function(a,b){var c=void 0===c?ifa:c;b(of(),c).then(function(d){a.B=d;d=tm(a);N(d,Gl,9,a.B);return!0}).catch(function(){return!1})};
tm=function(a){a=um(a);var b=g.uj(a,Hl,11);b||(b=new Hl,N(a,Hl,11,b));return b};
vm=function(a){a=tm(a);var b=g.uj(a,Fl,10);b||(b=new Fl,Gj(b,2,!1),N(a,Fl,10,b));return b};
g.wm=function(a){return(new kfa).Cj(a)};
kfa=function(){};
xm=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xm(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),lfa(d,c),c.push(":"),xm(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":lfa(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
lfa=function(a,b){b.push('"',a.replace(mfa,function(c){var d=nfa[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),nfa[c]=d);return d}),'"')};
ofa=function(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};
ym=function(){};
zm=function(){};
pfa=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.B};
g.Am=function(a){g.Fd.call(this);this.headers=new Map;this.Z=a||null;this.C=!1;this.Aa=this.j=null;this.ma="";this.B=0;this.D="";this.G=this.Da=this.Y=this.Ea=!1;this.N=0;this.qa=null;this.Ka="";this.Na=this.K=!1};
rfa=function(a,b,c,d,e,f,h){var l=new g.Am;qfa.push(l);b&&l.Sa("complete",b);l.AI("ready",l.g4);f&&(l.N=Math.max(0,f));h&&(l.K=h);l.send(a,c,d,e)};
sfa=function(a){return g.nf&&"number"===typeof a.timeout&&void 0!==a.ontimeout};
ufa=function(a,b){a.C=!1;a.j&&(a.G=!0,a.j.abort(),a.G=!1);a.D=b;a.B=5;tfa(a);Bm(a)};
tfa=function(a){a.Ea||(a.Ea=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
vfa=function(a){if(a.C&&"undefined"!=typeof Cm)if(a.Aa[1]&&4==g.Dm(a)&&2==a.getStatus())a.getStatus();else if(a.Y&&4==g.Dm(a))g.og(a.AY,0,a);else if(a.dispatchEvent("readystatechange"),a.isComplete()){a.getStatus();a.C=!1;try{if(Em(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.B=6;try{var b=2<g.Dm(a)?a.j.statusText:""}catch(c){b=""}a.D=b+" ["+a.getStatus()+"]";tfa(a)}}finally{Bm(a)}}};
Bm=function(a,b){if(a.j){wfa(a);var c=a.j,d=a.Aa[0]?function(){}:null;
a.j=null;a.Aa=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}};
wfa=function(a){a.j&&a.Na&&(a.j.ontimeout=null);a.qa&&(g.Ua.clearTimeout(a.qa),a.qa=null)};
Em=function(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=g.ul(1,String(a.ma)),!a&&g.Ua.self&&g.Ua.self.location&&(a=g.Ua.self.location.protocol.slice(0,-1)),b=!xfa.test(a?a.toLowerCase():"");c=b}return c};
g.Dm=function(a){return a.j?a.j.readyState:0};
g.Fm=function(a){try{return a.j?a.j.responseText:""}catch(b){return""}};
g.Gm=function(a){try{if(!a.j)return null;if("response"in a.j)return a.j.response;switch(a.Ka){case "":case "text":return a.j.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.j)return a.j.mozResponseArrayBuffer}return null}catch(b){return null}};
g.yfa=function(a){var b={};a=(a.j&&2<=g.Dm(a)?a.j.getAllResponseHeaders()||"":"").split("\r\n");for(var c=0;c<a.length;c++)if(!g.ic(a[c])){var d=Xba(a[c]),e=d[0];d=d[1];if("string"===typeof d){d=d.trim();var f=b[e]||[];b[e]=f;f.push(d)}}return Xc(b,function(h){return h.join(", ")})};
g.Hm=function(a,b){return a.j?a.j.getResponseHeader(b):null};
zfa=function(){};
Im=function(a,b){g.J.call(this);this.logSource=a;this.sessionIndex=b;this.B="https://play.google.com/log?format=json&hasfast=true";this.C=!1;this.componentId="";this.network=new zfa};
Jm=function(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;g.J.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Im(a,"0"),a.componentId=b,g.L(this,a),""!==c&&(a.B=c),d&&(a.C=!0),e&&(a.j=e),b=a.build());this.j=b};
Km=function(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}};
Afa=function(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}};
Lm=function(a,b,c){c=void 0===c?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c};
Mm=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
Nm=function(a,b){this.logger=a;this.j=b;this.startMillis=Mm()};
Bfa=function(){};
Cfa=function(a,b){this.Zi=a;a=new Im(1654,"0");a.j="17";if(b){var c=new Ek;b=cj(c,3,b,Mda);a.sC=b}b=new Jm(1654,"","",!1,"",a.build());b=new g.qg(b);this.clientError=new Fca(b);this.D=new Eca(b);this.G=new Dca(b);this.C=new Gca(b);this.B=new Hca(b);this.j=new Ica(b)};
Dfa=function(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}};
Om=function(a,b,c,d){b=void 0===b?0:b;c=void 0===c?a.length:c;var e=0;for(d&&(e=Om(d));b<c;b++)d="string"===typeof a?a.charCodeAt(b):a[b],e=Efa(31,e)+d|0;return e};
Ffa=function(a,b){return[Om(a,0,a.length>>1,b),Om(a,a.length>>1)]};
Pm=function(a,b,c){c=void 0===c?[]:c;this.maxItems=a;this.j=void 0===b?0:b;this.B=c};
Gfa=function(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new Pm(a);var c=b.split(",");if(2>c.length)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Pm(a);b=c.slice(1);1===b.length&&""===b[0]&&(b=[]);c=Number(c[0]);return isNaN(c)||0>c||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Pm(a)):new Pm(a,c,b)};
Qm=function(a,b){this.logger=b;this.index=Gfa(a)};
Hfa=function(a){var b=g.u(Ffa(a,Rm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)};
Ifa=function(a){this.j=a;this.j.Sl("/client_streamz/bg/fiec",{Jf:3,If:"rk"},{Jf:2,If:"ec"},{Jf:3,If:"em"})};
Sm=function(a,b,c,d){a.j.Km("/client_streamz/bg/fiec",b,c,d)};
Jfa=function(a){this.j=a;this.j.tG("/client_streamz/bg/fil",{Jf:3,If:"rk"},{Jf:3,If:"ke"})};
Kfa=function(a){this.j=a;this.j.Sl("/client_streamz/bg/fsc",{Jf:3,If:"rk"})};
Lfa=function(a){this.j=a;this.j.tG("/client_streamz/bg/fsl",{Jf:3,If:"rk"})};
Ofa=function(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Mfa(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,h=f,l=0;12<=h;h-=12,l+=12)c+=Tm(a,l),d+=Tm(a,l+4),e+=Tm(a,l+8),b();e+=f;switch(h){case 11:e+=a[l+10]<<24;case 10:e+=a[l+9]<<16;case 9:e+=a[l+8]<<8;case 8:d+=a[l+7]<<24;case 7:d+=a[l+6]<<16;case 6:d+=a[l+5]<<8;case 5:d+=a[l+4];case 4:c+=a[l+3]<<24;case 3:c+=a[l+2]<<16;case 2:c+=a[l+1]<<8;case 1:c+=a[l+0]}b();return Nfa.toString(e)};
Mfa=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};
Tm=function(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)};
Pfa=function(a,b){this.Z=b;this.D=void 0;this.N=new Jm(1828);this.B=new g.qg(this.N);this.Y=new Jfa(this.B);this.G=new Kfa(this.B);this.K=new Lfa(this.B);this.C=new Ifa(this.B);this.j=Ofa(a)};
qn=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
Qfa=function(a){this.ea=M(a)};
Rfa=function(a){this.ea=M(a)};
rn=function(a){this.ea=M(a,0,"bfkj")};
g.sn=function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};
tn=function(a){function b(C,F){Promise.resolve().then(function(){var G;null!=(G=c.Kj)&&void 0!==G.D&&G.Y.Bi(qn()-G.D,G.j,G.Z);l.resolve({V3:C,jaa:F})})}
var c=this;this.j=!1;if(a.challenge instanceof rn){var d=g.Ej(a.challenge,4);var e=g.Ej(a.challenge,5)}else d=a.program,e=a.globalName;if(!1!==a.u$){var f,h;this.Kj=null!=(h=a.Kj)?h:new Pfa(e,null!=(f=a.Zgb)?f:"_")}var l=new g.sn;this.B=l.promise;if(!g.Ua[e]){var m;null!=(m=this.Kj)&&Sm(m.C,m.j,1,"");var n;null!=(n=this.Kj)&&n.B.Jx()}else if(!g.Ua[e].a){var p;null!=(p=this.Kj)&&Sm(p.C,p.j,2,"");var q;null!=(q=this.Kj)&&q.B.Jx()}try{var r=g.Ua[e].a,t;null!=(t=this.Kj)&&(t.D=qn());this.C=g.u(r(d,b,
!0,a.aib)).next().value;this.iaa=l.promise.then(function(){})}catch(C){var v;
null!=(v=this.Kj)&&Sm(v.C,v.j,4,C.message);var x;null!=(x=this.Kj)&&x.B.Jx();throw C;}};
Sfa=function(){};
un=function(a){this.j=a};
vn=function(a){if(a instanceof g.ce)a=g.de(a);else{b:if(Tfa){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a};
Ufa=function(a){return he(a)};
Vfa=function(a){var b=g.Ka.apply(1,arguments);if(0===b.length)return be(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return be(c)};
Wfa=function(a){for(var b=g.Ka.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("Forbidden characters in style string: "+c);return new g.ge(c,pe)};
wn=function(a){this.Ie=a};
xn=function(a){return new wn(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})};
Yfa=function(a,b){b=void 0===b?Xfa:b;if(a instanceof g.ce)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof wn&&d.Ie(a))return new g.ce(a,ee)}};
g.yn=function(a,b){b=void 0===b?Xfa:b;return Yfa(a,b)||g.le};
Zfa=function(a){if(!a)return null;a=zj(a,4);return null===a||void 0===a?null:be(a)};
g.zn=function(a,b){b=vn(b);void 0!==b&&(a.href=b)};
$fa=function(a,b,c,d){if(0===a.length)throw Error("");a=a.map(function(f){if(f instanceof un)f=f.j;else throw Error("");return f});
var e=c.toLowerCase();if(a.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+c+'" does not match any of the allowed prefixes.');
b.setAttribute(c,d)};
An=function(a,b){throw Error(void 0===b?"unexpected value "+a+"!":b);};
Bn=function(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};
g.Cn=function(a,b){a.src=g.ae(b);Bn(a)};
g.Dn=function(a,b,c){var d=window;a=vn(a);return void 0!==a?d.open(a,b,c):null};
En=function(){this.j={};this.B=null};
aga=function(){En.instance||(En.instance=new En);return En.instance};
dga=function(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return cga(b,c);var e;(e=a.j)[d]||(e[d]=new Promise(function(f,h){cga(b,c).then(function(){a.B=d;f()},function(l){delete a.j[d];
h(l)})}));
return a.j[d]};
cga=function(a,b){return b?ega(b):a?fga(a):Promise.resolve()};
ega=function(a){return new Promise(function(b,c){var d=g.vf("SCRIPT"),e=Zfa(a)||Vfa(gga);g.Cn(d,e);d.onload=function(){g.Af(d);b()};
d.onerror=function(){g.Af(d);c(Error("EWLS"))};
(g.Xe("HEAD")[0]||document.documentElement).appendChild(d)})};
fga=function(a){return new Promise(function(b){var c=g.vf("SCRIPT");if(a){var d=zj(a,6);d=null===d||void 0===d?null:tba(d)}else d=null;c.textContent=rba(d);Bn(c);(g.Xe("HEAD")[0]||document.documentElement).appendChild(c);g.Af(c);b()})};
iga=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a[c]+97;if(g.Ua.TextDecoder)b=(new TextDecoder).decode(b);else if(8192>=b.length)b=String.fromCharCode.apply(null,b);else{a="";for(c=0;c<b.length;c+=8192)a+=String.fromCharCode.apply(null,Array.prototype.slice.call(b,c,c+8192));b=a}return hga(b)};
Fn=function(a){this.ea=M(a)};
Gn=function(a){this.ea=M(a)};
Hn=function(a){this.ea=M(a)};
In=function(a,b,c){this.client=a;this.Zi=b;this.j=c};
Jn=function(a){this.ea=M(a)};
Kn=function(a,b,c){this.j=a;this.C=b;this.B=c};
Ln=function(a,b,c){c=void 0===c?{}:c;this.K$=a;this.j=c;this.B=b};
Mn=function(a,b,c,d,e){this.name=a;this.methodType="unary";this.requestType=b;this.responseType=c;this.j=d;this.B=e};
jga=function(a,b,c){c=void 0===c?{}:c;return new Kn(b,a,c)};
Nn=function(a){this.ea=M(a)};
On=function(a){this.ea=M(a)};
Pn=function(a){this.ea=M(a)};
Qn=function(a){this.ea=M(a)};
Rn=function(a,b){this.N=a.j7;this.Z=b;this.j=a.xhr;this.C=[];this.G=[];this.K=[];this.D=[];this.B=[];this.N&&kga(this)};
nga=function(a,b){g.xd(a.j,"complete",function(){if(Em(a.j)){var c=g.Fm(a.j);if(b&&"text/plain"===a.j.getResponseHeader("Content-Type")){if(!atob)throw Error("Cannot decode Base64 response");c=atob(c)}try{var d=a.Z(c)}catch(h){Sn(a,new Lm(13,"Error when deserializing response data; error: "+h+(", response: "+c)));return}c=Km(a.j.getStatus());Tn(a,Un(a));0==c?lga(a,d):Sn(a,new Lm(c,"Xhr succeeded but the status code is not 200"))}else{c=g.Fm(a.j);d=Un(a);if(c){var e=mga(a,c);c=e.code;var f=e.details;
e=e.metadata}else c=2,f="Rpc failed due to xhr error. error code: "+a.j.B+", error: "+a.j.getLastError(),e=d;Tn(a,d);Sn(a,new Lm(c,f,e))}})};
kga=function(a){a.N.on("data",function(b){if("1"in b){var c=b["1"];try{var d=a.Z(c)}catch(e){Sn(a,new Lm(13,"Error when deserializing response data; error: "+e+(", response: "+c)))}d&&lga(a,d)}if("2"in b)for(b=mga(a,b["2"]),c=0;c<a.K.length;c++)a.K[c](b)});
a.N.on("end",function(){Tn(a,Un(a));for(var b=0;b<a.D.length;b++)a.D[b]()});
a.N.on("error",function(){if(0!=a.B.length){var b=a.j.B;0!==b||Em(a.j)||(b=6);var c=-1;switch(b){case 0:var d=2;break;case 7:d=10;break;case 8:d=4;break;case 6:c=a.j.getStatus();d=Km(c);break;default:d=14}Tn(a,Un(a));b=ofa(b)+", error: "+a.j.getLastError();-1!=c&&(b+=", http status code: "+c);Sn(a,new Lm(d,b))}})};
Un=function(a){var b={},c=g.yfa(a.j);Object.keys(c).forEach(function(d){b[d]=c[d]});
return b};
mga=function(a,b){var c=2,d={};try{var e=oga(b);c=Bj(e,1);var f=e.getMessage();gea(e,Pn).length&&(d["grpc-web-status-details-bin"]=b)}catch(h){a.j&&404===a.j.getStatus()?(c=5,f="Not Found: "+String(a.j.ma)):(c=14,f="Unable to parse RpcStatus: "+h)}return{code:c,details:f,metadata:d}};
Vn=function(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)};
lga=function(a,b){for(var c=0;c<a.C.length;c++)a.C[c](b)};
Tn=function(a,b){for(var c=0;c<a.G.length;c++)a.G[c](b)};
Sn=function(a,b){for(var c=0;c<a.B.length;c++)a.B[c](b)};
g.Wn=function(a){this.K=a.nba||null;this.G=a.YZ||!1;this.B=void 0};
Xn=function(a,b){g.Fd.call(this);this.qa=a;this.K=b;this.G=void 0;this.status=this.readyState=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=this.responseXML=null;this.Z=new Headers;this.B=null;this.ma="GET";this.Y="";this.j=!1;this.N=this.C=this.D=null};
pga=function(a){a.C.read().then(a.F5.bind(a)).catch(a.ZH.bind(a))};
Zn=function(a){a.readyState=4;a.D=null;a.C=null;a.N=null;Yn(a)};
Yn=function(a){a.onreadystatechange&&a.onreadystatechange.call(a)};
qga=function(a){if(a.im&&"function"==typeof a.im)return a.im();if("undefined"!==typeof Map&&a instanceof Map||"undefined"!==typeof Set&&a instanceof Set)return Array.from(a.values());if("string"===typeof a)return a.split("");if(g.$a(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return fd(a)};
rga=function(a){if(a.hp&&"function"==typeof a.hp)return a.hp();if(!a.im||"function"!=typeof a.im){if("undefined"!==typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!==typeof Set&&a instanceof Set)){if(g.$a(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return g.gd(a)}}};
g.$n=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(g.$a(a)||"string"===typeof a)Array.prototype.forEach.call(a,b,c);else for(var d=rga(a),e=qga(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)};
g.ao=function(a){this.j=this.Z=this.G="";this.D=null;this.K=this.C="";this.N=!1;var b;a instanceof g.ao?(this.N=a.N,g.bo(this,a.G),this.Z=a.Z,g.co(this,a.j),g.eo(this,a.D),this.C=a.C,fo(this,a.B.clone()),this.K=a.K):a&&(b=String(a).match(tl))?(this.N=!1,g.bo(this,b[1]||"",!0),this.Z=go(b[2]||""),g.co(this,b[3]||"",!0),g.eo(this,b[4]),this.C=go(b[5]||"",!0),fo(this,b[6]||"",!0),this.K=go(b[7]||"")):(this.N=!1,this.B=new ho(null,this.N))};
g.bo=function(a,b,c){a.G=c?go(b,!0):b;a.G&&(a.G=a.G.replace(/:$/,""))};
g.co=function(a,b,c){a.j=c?go(b,!0):b};
g.eo=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.D=b}else a.D=null};
fo=function(a,b,c){b instanceof ho?(a.B=b,sga(a.B,a.N)):(c||(b=io(b,tga)),a.B=new ho(b,a.N))};
g.jo=function(a,b,c){a.B.set(b,c)};
g.ko=function(a){return a instanceof g.ao?a.clone():new g.ao(a)};
go=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
io=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,uga),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
uga=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
ho=function(a,b){this.B=this.j=null;this.C=a||null;this.D=!!b};
lo=function(a){a.j||(a.j=new Map,a.B=0,a.C&&xl(a.C,function(b,c){a.add(Fe(b),c)}))};
vga=function(a,b){lo(a);b=mo(a,b);return a.j.has(b)};
g.wga=function(a,b,c){a.remove(b);0<c.length&&(a.C=null,a.j.set(mo(a,b),g.Mb(c)),a.B=a.B+c.length)};
mo=function(a,b){b=String(b);a.D&&(b=b.toLowerCase());return b};
sga=function(a,b){b&&!a.D&&(lo(a),a.C=null,a.j.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),g.wga(this,e,c))},a));
a.D=b};
g.xga=function(a){var b="";g.Vc(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n"});
return b};
g.no=function(a,b,c){if(g.kd(c))return a;c=g.xga(c);if("string"===typeof a)return Cl(a,g.Ee(b),c);g.jo(a,b,c);return a};
g.oo=function(a){g.J.call(this);this.B=a;this.j={}};
yga=function(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)yga(a,b,c[h],d,e,f);else{b=wd(b,c,d||a.handleEvent,e,f||a.B||a);if(!b)return a;a.j[b.key]=b}return a};
zga=function(){this.C=!0;this.B=0;this.j=""};
Aga=function(a,b,c){a.C=!1;throw Error("The stream is broken @"+a.B+". Error: "+c+". With input:\n"+b);};
po=function(){this.K=null;this.N=[];this.D=this.B=this.C=this.j=this.Y=0;this.G=null;this.Z=0};
qo=function(a,b,c,d){a.j=3;a.K="The stream is broken @"+a.Y+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.K);};
ro=function(){this.j=null;this.B=0;this.C=new zga;this.D=new po};
Bga=function(a,b,c){a.j="The stream is broken @"+a.B+". Error: "+c+". With input:\n"+b;throw Error(a.j);};
so=function(a){return"\r"==a||"\n"==a||" "==a||"\t"==a};
to=function(a){this.Y=null;this.K=[];this.D="";this.qa=[];this.C=this.B=0;this.N=!1;this.Z=0;this.Aa=/[\\"]/g;this.j=this.G=0;this.ma=!(!a||!a.A4)};
bp=function(a,b,c){a.G=3;a.Y="The stream is broken @"+a.C+"/"+c+". With input:\n"+b;throw Error(a.Y);};
cp=function(){this.G=this.C=null;this.B=this.j=0;this.D=[];this.K=!1};
Cga=function(a){var b=g.Hm(a,"Content-Type");if(!b)return null;b=b.toLowerCase();return b.startsWith("application/json")?b.startsWith("application/json+protobuf")?new cp:new to:b.startsWith("application/x-protobuf")?(a=g.Hm(a,"Content-Transfer-Encoding"))?"base64"==a.toLowerCase()?new ro:null:new po:null};
dp=function(a){this.j=a;this.B=null;this.D=this.C=0;this.Y=!1;this.G=this.N=this.K=null;this.Z=new g.oo(this);this.Z.Sa(this.j,"readystatechange",this.ma)};
ep=function(a,b){a.D!=b&&(a.D=b,a.N&&a.N())};
fp=function(a){a.Z.Nf();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}};
Dga=function(a){this.C=a;a=(0,g.ib)(this.P7,this);this.C.G=a;a=(0,g.ib)(this.z9,this);this.C.N=a;this.B={};this.j={}};
Ega=function(a,b){for(var c={},d=0;d<a.length;c={ZO:c.ZO},d++)c.ZO=a[d],b.forEach(function(e){return function(f){try{f(e.ZO)}catch(h){}}}(c))};
gp=function(a,b){var c=a.B[b];c&&c.forEach(function(d){try{d()}catch(e){}});
(c=a.j[b])&&c.forEach(function(d){d()});
a.j[b]=[]};
Fga=function(){var a={format:"jspb"};a=void 0===a?{}:a;this.G=a.Shb||g.Wa("suppressCorsPreflight",a)||!1;this.B=a.withCredentials||g.Wa("withCredentials",a)||!1;this.D=a.Rhb||[];this.K=a.Xhb||[];this.j=a.bib;this.C=a.Yhb||!1};
hp=function(a,b,c,d,e){var f=b.substr(0,b.length-e.name.length);return Gga(function(h){return new Hga(function(l,m){var n={},p=Iga(a,h,f);p.on("error",function(q){return m(q)});
p.on("metadata",function(q){n=q});
p.on("data",function(q){var r=n;r=void 0===r?{}:r;l(new Ln(q,h.JH(),r))})})},a.K).call(a,jga(e,c,d)).then(function(h){return h.K$})};
Iga=function(a,b,c){var d=b.JH(),e=b.getMetadata(),f=Jga(a,!0);a=Kga(a,e,f,c+d.getName());c=Lga(f,d.B,!1);nga(c,"base64"==e["X-Goog-Encode-Response-If-Executable"]);b=d.j(b.j);f.send(a,"POST",b);return c};
Jga=function(a,b){b=a.C&&!b;return a.j||b?new g.Am(new g.Wn({nba:a.j,YZ:b})):new g.Am};
Kga=function(a,b,c,d){b["Content-Type"]="application/json+protobuf";b["X-User-Agent"]="grpc-web-javascript/0.1";var e="Authorization"in b?(e=b.Authorization)?!!{SAPISIDHASH:!0,APISIDHASH:!0}[e.split(" ")[0]]:!1:!1;if(e||a.B)c.K=!0;if(a.G)d=g.no(d,"$httpHeaders",b);else for(var f in b)c.headers.set(f,b[f]);return d};
Lga=function(a,b,c){if(c)if(a.isActive(),!g.nf||g.Qc(10)){c=new dp(a);var d=new Dga(c)}else d=null;return new Rn({xhr:a,j7:d},b)};
Gga=function(a,b){var c=a;b.forEach(function(d){var e=c;c=function(f){return d.intercept(f,e)}});
return c};
ip=function(){this.j=new Fga;this.B="https://jnn-pa.googleapis.com".replace(/\/+$/,"")};
jp=function(a){g.J.call(this);this.owner=a;this.signals=new Set;a&&g.L(a,this)};
kp=function(a,b,c){var d=Mga;a.signals.has(b);d({signal:b,data:c})};
lp=function(a){g.J.call(this);this.RU=a;this.slots=new Map;this.OA=new Set;this.FW=!1};
Nga=function(a,b){a.isDisposed()||a.slots.set(b,{slotId:b,slot:void 0,pV:function(){return a.slots.delete(b)}})};
Oga=function(a,b){return new Promise(function(c){mp(function(){a.RU&&(a.oX=b,a.FW=!0);for(var d=g.u(a.slots.values()),e=d.next();!e.done;e=d.next()){var f=e.value;e=f.slotId;f=f.slot;try{f(b,{signal:a,slotId:e})}catch(h){Xf(h)}}d=g.u(a.OA);for(e=d.next();!e.done;e=d.next())e.value.resolve(b);a.OA.clear();c()})})};
Mga=function(){var a=g.Ka.apply(0,arguments);0===a.length?Promise.resolve():1===a.length?(a=a[0],Oga(a.signal,a.data)):Promise.all(a.map(function(b){return Oga(b.signal,b.data)})).then()};
mp=function(a){np.push(a);Pga()};
Pga=function(){var a,b;g.I(function(c){switch(c.j){case 1:if(op){c.La(0);break}g.Ca(c,3,4);op=!0;a=Qga(0);case 6:if(!(a<np.length)){c.La(4);break}return g.z(c,Promise.resolve(),9);case 9:a=Qga(a);c.La(6);break;case 4:g.Ga(c);np.length=0;op=!1;g.Ha(c,0);break;case 3:b=g.Fa(c),Xf(b),c.La(4)}})};
Qga=function(a){for(var b=a+100;a<b&&a<np.length;)try{np[a++]()}catch(c){Xf(c)}return a};
Rga=function(a,b){if(a.isDisposed())b();else{var c=pp.get(a);if(c)c.push(b);else{var d=[b];pp.set(a,d);g.wb(a,function(){for(var e=g.u([].concat(g.pa(d))),f=e.next();!f.done;f=e.next())f=f.value,f();pp.delete(a)})}}};
qp=function(a,b,c){g.J.call(this);this.N=a;this.milliseconds=b;this.Rb=c;this.state=this.D=0};
Sga=function(a,b){if(b)if("function"===typeof b)var c=b;else{c=b.nJ;var d=b.uP}else c=function(){};
return new qp(!1,a,{nJ:c,uP:d})};
rp=function(a){zb.call(this,a);this.name="TimerCancelledError"};
sp=function(a){zb.call(this,a);this.name="TimerDisposedError"};
Uga=function(a){return Tga?Array.from(Tga.encode(a)):g.sg(a)};
Vga=function(a){var b=new ip,c={"X-Goog-Api-Key":"AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw"};return new In(b,a,function(){return c})};
tp=function(a,b){if(a.xV)return a.xV;if(void 0===a.Vu)return[];b=new Nm(b,"c");var c=Uga(a.Vu);b.done();return a.xV=c};
up=function(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.code=a;if(b instanceof Error){this.message=b.message;var d;this.stack=null!=(d=b.stack)?d:""}else this.message=String(b),this.stack="";Object.setPrototypeOf(this,up.prototype)};
vp=function(a){g.J.call(this);var b=this;this.logger=a;this.D=new g.sn;g.wb(this,function(){return b.D.reject()})};
wp=function(a,b){b=Sga(b,function(){a.D.resolve()});
g.L(a,b);b.start()};
xp=function(a,b,c,d,e,f){vp.call(this,a);this.Z=c;this.ma=d;this.N=f;this.C="m";this.B="x";this.Y=0;g.L(this,b);wp(this,e);this.K=Math.floor((Date.now()+e)/1E3)};
yp=function(a,b,c){vp.call(this,a);this.K=b;this.C="f";this.B="z";wp(this,c)};
zp=function(a,b,c){vp.call(this,a);this.K=b;this.C="w";this.B="z";wp(this,c)};
Ap=function(a,b){vp.call(this,a);this.error=b;this.C="e";this.B="y"};
Wga=function(a,b){b=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);var c=b.length+1;return new Uint8Array([42,c&127|128,c>>7,a.error.code].concat(Uga(b)))};
Bp=function(a,b,c){vp.call(this,a);this.K=b;this.clientState=c;this.C="S";this.B="q"};
Cp=function(a){g.J.call(this);var b=this;this.j=void 0;this.D=new g.sn;this.state=1;this.C=0;this.cache=this.B=void 0;this.Zy=a.Zy;this.mY=a.mY;this.onError=a.onError;this.logger=a.uhb?new Bfa:new Cfa(a.Zi,a.sC);g.wb(this,function(){b.j&&(b.j.dispose(),b.j=void 0)})};
Xga=function(a,b,c,d){if(!d)throw new up(4,Error("PMD:Undefined"));d=d(Qg(bj(b,1)));if(!(d instanceof Function))throw new up(16,Error("APF:Failed"));return new xp(a.logger,c,d,Cj(b,3),1E3*Cj(b,2),function(){return a.cache})};
Zga=function(a){var b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G,H,O;return g.I(function(Q){switch(Q.j){case 1:b=void 0,c=a.isReady()?6E4:1E3,d=new g.pl(c,6E5,.25,2),e=1;case 2:if(!(2>=e)){Q.La(4);break}g.Ca(Q,5);a.state=3;a.C=e-1;return g.z(Q,a.B&&1===e?a.B:a.MC(e),7);case 7:f=Q.B;a.B=void 0;a.state=4;h=new Nm(a.logger,"b");var X=aga();X=dga(X,g.uj(f,Qfa,1),g.uj(f,Rfa,2),g.Ej(f,3));return g.z(Q,X,8);case 8:return a.state=5,l=new tn({challenge:f}),m=[],g.z(Q,Dp(a,l.snapshot({V_:m}),new up(15,"MDA:Timeout")),
9);case 9:return n=Q.B,p=g.u(m),r=q=p.next().value,h.done(),a.state=6,g.z(Q,Dp(a,a.logger.RO("g",e,a.Zy.FV(n)),new up(10,"BWB:Timeout")),10);case 10:return t=Q.B,a.state=7,v=new Nm(a.logger,"i"),g.Ej(t,4)?(l.dispose(),X=new zp(a.logger,g.Ej(t,4),1E3*Cj(t,2))):Cj(t,3)?X=Xga(a,t,l,r):(l.dispose(),X=new yp(a.logger,Qg(bj(t,1)),1E3*Cj(t,2))),x=X,v.done(),F=C=void 0,null==(F=(C=a).mY)||F.call(C,Qg(bj(t,1))),a.state=8,Q.return(x);case 5:G=g.Fa(Q);b=G instanceof up?G:G instanceof sp?new up(20,G):G instanceof
Lm?new up(11,G):new up(12,G);a.logger.QD(b.code);O=H=void 0;null==(O=(H=a).onError)||O.call(H,b);a:{if(G instanceof Lm)switch(G.code){case 2:case 13:case 14:case 4:X=!0;break a;default:X=!1;break a}X=G instanceof up?20!==G.code:!0}if(!X)throw b;return g.z(Q,Yga(a,d.getValue()),11);case 11:g.ql(d);case 3:e++;Q.La(2);break;case 4:throw b;}})};
Yga=function(a,b){b=Sga(b);g.L(a,b);b.start();return b.Z};
Dp=function(a,b,c){return Promise.race([b,Yga(a,12E4).then(function(){return Promise.reject(c)})])};
$ga=function(a){var b,c,d;g.I(function(e){switch(e.j){case 1:return b=void 0,g.Ca(e,5),g.z(e,Zga(a),7);case 7:b=e.B;g.Da(e,6);break;case 5:c=g.Fa(e);if(a.j){a.logger.QD(13);e.La(0);break}a.logger.QD(14);b=new Ap(a.logger,c instanceof up?c:new up(14,c instanceof Error?c:Error(String(c))));case 6:return d=void 0,null==(d=a.j)||d.dispose(),a.j=b,a.D.resolve(),g.Ca(e,8),g.z(e,a.j.D.promise,10);case 10:g.Da(e,1);break;case 8:g.Fa(e),e.La(0)}})};
aha=function(a,b){b=Object.assign({},b);b.Fy&&!a.cache&&(a.cache=new Qm(Math.min(b.Fy.O6,150),a.logger));var c;if(!a.isReady()&&(null==(c=b.Fy)?0:c.W3)&&(c=a.cache.read(tp(b,a.logger),b.Fy.QU)))return c;var d;c=null!=(d=a.j)?d:new Bp(a.logger,a.C,a.state);d=new Nm(a.logger,c.C);try{if(a.isDisposed())throw new up(21,"BNT:disposed");return c.G(b)}catch(h){d=new Nm(a.logger,"e");var e=h instanceof up?h:new up(5,h);a.logger.QD(e.code);var f;null==(f=a.onError)||f.call(a,e);c=new Ap(a.logger,e);return c.G(b)}finally{d.done()}};
bha=function(a){var b={};g.dc(a,function(c){var d=c.event,e=b[d];b.hasOwnProperty(d)?null!==e&&(c.equals(e)||(b[d]=null)):b[d]=c});
taa(a,function(c){return null===b[c.event]})};
Ep=function(){this.Ge=0;this.j=!1;this.B=-1;this.Ov=!1;this.rk=0};
Fp=function(){this.Yd=null;this.j=!1};
Gp=function(a){Fp.call(this);this.C=a};
Hp=function(){Fp.call(this)};
Ip=function(){Fp.call(this)};
Jp=function(){this.j={};this.B=!0;this.C={}};
Kp=function(a,b,c){a.j[b]||(a.j[b]=new Gp(c));return a.j[b]};
cha=function(a){a.j.queryid||(a.j.queryid=new Ip)};
Lp=function(a,b,c){(a=a.j[b])&&a.B(c)};
Mp=function(a,b){if(g.hd(a.C,b))return a.C[b];if(a=a.j[b])return a.getValue()};
Np=function(a){var b={},c=g.Wc(a.j,function(d){return d.j});
g.Vc(c,function(d,e){d=void 0!==a.C[e]?String(a.C[e]):d.j&&null!==d.Yd?String(d.Yd):"";0<d.length&&(b[e]=d)},a);
return b};
dha=function(a){a=Np(a);var b=[];g.Vc(a,function(c,d){d in Object.prototype||"undefined"!=typeof c&&b.push([d,":",c].join(""))});
return b};
fha=function(a){Kp(a,"od",eha);Kp(a,"opac",Op).j=!0;Kp(a,"sbeos",Op).j=!0;Kp(a,"prf",Op).j=!0;Kp(a,"mwt",Op).j=!0;Kp(a,"iogeo",Op)};
gha=function(){this.j=this.Dt=null};
Pp=function(){};
Rp=function(){if(!Qp())throw Error();};
Qp=function(){return!(!Sp||!Sp.performance)};
Tp=function(a){return a?a.passive&&hha()?a:a.capture||!1:!1};
Up=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,Tp(d)),!0):!1};
Vp=function(a){return a.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
iha=function(){};
jha=function(){return(qc||rc)&&sc?sc.mobile:!Wp()&&(vc("iPod")||vc("iPhone")||vc("Android")||vc("IEMobile"))};
Wp=function(){return(qc||rc)&&sc?!sc.mobile&&(vc("iPad")||vc("Android")||vc("Silk")):vc("iPad")||vc("Android")&&!vc("Mobile")||vc("Silk")};
Xp=function(a){try{return!!a&&null!=a.location.href&&Mc(a,"foo")}catch(b){return!1}};
Yp=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};
lha=function(){var a=[];Yp(kha,function(b){a.push(b)});
return a};
mha=function(a){var b,c;return null!=(c=null==(b=/https?:\/\/[^\/]+/.exec(a))?void 0:b[0])?c:""};
pha=function(){var a=nha("IFRAME"),b={};g.dc(oha(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
nha=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};
qha=function(a){for(var b=a;a&&a!=a.parent;)a=a.parent,Xp(a)&&(b=a);return b};
uha=function(a){a=a||Zp();for(var b=new rha(g.Ua.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&sha.test(f.url)&&(c=f);if(f.url&&!f.wO){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new tha(b,e,c)};
Zp=function(){var a=g.Ua,b=[],c=null;do{var d=a;if(Xp(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new rha(e||""));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=g.Ua;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.wO=!0);return b};
tha=function(a,b,c){this.j=a;this.B=b;this.C=c};
rha=function(a,b){this.url=a;this.wO=!!b;this.depth=null};
$p=function(){this.C="&";this.B={};this.D=0;this.j=[]};
aq=function(a,b){var c={};c[a]=b;return[c]};
vha=function(a,b,c,d,e){var f=[];Yp(a,function(h,l){(h=bq(h,b,c,d,e))&&f.push(l+"="+h)});
return f.join(b)};
bq=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(bq(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(vha(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
wha=function(a){var b=1,c;for(c in a.B)b=c.length>b?c.length:b;return 3997-b-a.C.length-1};
cq=function(a,b){this.j=a;this.depth=b};
yha=function(){function a(l,m){return null==l?m:l}
var b=Zp(),c=Math.max(b.length-1,0),d=uha(b);b=d.j;var e=d.B,f=d.C,h=[];f&&h.push(new cq([f.url,f.wO?2:0],a(f.depth,1)));e&&e!=f&&h.push(new cq([e.url,2],0));b.url&&b!=f&&h.push(new cq([b.url,0],a(b.depth,c)));d=g.dq(h,function(l,m){return h.slice(0,h.length-m)});
!b.url||(f||e)&&b!=f||(e=mha(b.url))&&d.push([new cq([e,1],a(b.depth,c))]);d.push([]);return g.dq(d,function(l){return xha(c,l)})};
xha=function(a,b){g.eq(b,function(e){return 0<=e.depth});
var c=fq(b,function(e,f){return Math.max(e,f.depth)},-1),d=yaa(c+2);
d[0]=a;g.dc(b,function(e){return d[e.depth+1]=e.j});
return d};
zha=function(){var a=void 0===a?yha():a;return a.map(function(b){return bq(b)})};
Aha=function(a){var b=!1;b=void 0===b?!1:b;Sp.google_image_requests||(Sp.google_image_requests=[]);var c=nha("IMG",Sp.document);b&&(c.attributionSrc="");c.src=a;Sp.google_image_requests.push(c)};
gq=function(a){var b="gh";if(a.gh&&a.hasOwnProperty(b))return a.gh;var c=new a;a.gh=c;a.hasOwnProperty(b);return c};
hq=function(){this.B=new iha;this.j=Qp()?new Rp:new Pp};
Bha=function(){iq();var a=Sp.document;return!!(a&&a.body&&a.body.getBoundingClientRect&&"function"===typeof Sp.setInterval&&"function"===typeof Sp.clearInterval&&"function"===typeof Sp.setTimeout&&"function"===typeof Sp.clearTimeout)};
Cha=function(){iq();return zha()};
Dha=function(){};
iq=function(){var a=gq(Dha);if(!a.j){if(!Sp)throw Error("Context has not been set and window is undefined.");a.j=gq(hq)}return a.j};
jq=function(a){this.ea=M(a)};
Eha=function(a){this.C=a;this.j=-1;this.B=this.D=0};
nr=function(a,b){return function(){var c=g.Ka.apply(0,arguments);if(-1<a.j)return b.apply(null,g.pa(c));try{return a.j=a.C.j.now(),b.apply(null,g.pa(c))}finally{a.D+=a.C.j.now()-a.j,a.j=-1,a.B+=1}}};
Fha=function(a,b){this.B=a;this.C=b;this.j=new Eha(a)};
Gha=function(){this.j={}};
Iha=function(){var a=or().flags,b=Hha;a=a.j[b.key];if("proto"===b.valueType){try{var c=JSON.parse(a);if(Array.isArray(c))return c}catch(d){}return b.defaultValue}return typeof a===typeof b.defaultValue?a:b.defaultValue};
Mha=function(){this.C=void 0;this.B=this.K=0;this.G=-1;this.Lc=new Jp;Kp(this.Lc,"mv",Jha).j=!0;Kp(this.Lc,"omid",Op);Kp(this.Lc,"epoh",Op).j=!0;Kp(this.Lc,"epph",Op).j=!0;Kp(this.Lc,"umt",Op).j=!0;Kp(this.Lc,"phel",Op).j=!0;Kp(this.Lc,"phell",Op).j=!0;Kp(this.Lc,"oseid",Kha).j=!0;var a=this.Lc;a.j.sloi||(a.j.sloi=new Hp);a.j.sloi.j=!0;Kp(this.Lc,"mm",pr);Kp(this.Lc,"ovms",Lha).j=!0;Kp(this.Lc,"xdi",Op).j=!0;Kp(this.Lc,"amp",Op).j=!0;Kp(this.Lc,"prf",Op).j=!0;Kp(this.Lc,"gtx",Op).j=!0;Kp(this.Lc,
"mvp_lv",Op).j=!0;Kp(this.Lc,"ssmol",Op).j=!0;Kp(this.Lc,"fmd",Op).j=!0;this.j=new Fha(iq(),this.Lc);this.D=!1;this.flags=new Gha};
or=function(){return gq(Mha)};
Nha=function(a,b,c,d){if(Math.random()<(d||a.j))try{if(c instanceof $p)var e=c;else e=new $p,Yp(c,function(h,l){var m=e,n=m.D++;h=aq(l,h);m.j.push(n);m.B[n]=h});
var f=e.cf(a.B,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");f&&(iq(),Aha(f))}catch(h){}};
Oha=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};
Pha=function(){var a=void 0===a?g.Ua:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):g.lb()};
Qha=function(){var a=void 0===a?g.Ua:a;return(a=a.performance)&&a.now?a.now():null};
Rha=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()};
rr=function(){var a=window;this.events=[];this.B=a||g.Ua;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.j=qr()||(null!=b?b:1>Math.random())};
Sha=function(a){a&&sr&&qr()&&(sr.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),sr.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};
Tha=function(){var a=tr;this.j=ur;this.AV="jserror";this.vR=!0;this.cM=null;this.B=this.UO;this.od=void 0===a?null:a};
Uha=function(a,b,c){var d=vr;return nr(or().j.j,function(){try{if(d.od&&d.od.j){var e=d.od.start(a.toString(),3);var f=b();d.od.end(e)}else f=b()}catch(l){var h=d.vR;try{Sha(e),h=d.B(a,new wr(xr(l)),void 0,c)}catch(m){d.UO(217,m)}if(!h)throw l;}return f})()};
yr=function(a,b,c,d){return nr(or().j.j,function(){var e=g.Ka.apply(0,arguments);return Uha(a,function(){return b.apply(c,e)},d)})};
xr=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
wr=function(a){Oha.call(this,Error(a),{message:a})};
Vha=function(){Sp&&"undefined"!=typeof Sp.google_measure_js_timing&&(Sp.google_measure_js_timing||tr.disable())};
Wha=function(a){vr.cM=function(b){g.dc(a,function(c){c(b)})}};
Xha=function(a,b){return Uha(a,b)};
zr=function(a,b){return yr(a,b)};
Ar=function(a,b,c,d){vr.UO(a,b,c,d)};
Br=function(){return Date.now()-Yha};
Zha=function(){var a=or().C,b=0<=Cr?Br()-Cr:-1,c=Dr?Br()-Er:-1,d=0<=Fr?Br()-Fr:-1;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];Ar(637,Error(),.001);var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var h=e[b];break}void 0===h&&(h=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:h};
Gr=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Hr=function(a){return a.right-a.left};
Ir=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
Jr=function(a,b,c){b instanceof g.ue?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,"number"===typeof c&&(a.top+=c,a.bottom+=c));return a};
Kr=function(a,b,c){var d=new Gr(0,0,0,0);this.time=a;this.volume=null;this.C=b;this.j=d;this.B=c};
Lr=function(a,b,c,d,e,f,h,l){this.D=a;this.N=b;this.C=c;this.K=d;this.j=e;this.G=f;this.B=h;this.Z=l};
aia=function(a){var b=a!==a.top,c=a.top===qha(a),d=-1,e=0;if(b&&c&&a.top.mraid){d=3;var f=a.top.mraid}else d=(f=a.mraid)?b?c?2:1:0:-1;f&&(f.IS_GMA_SDK||(e=2),aba($ha,function(h){return"function"===typeof f[h]})||(e=1));
return{Kn:f,compatibility:e,paa:d}};
bia=function(){var a=window.document;return a&&"function"===typeof a.elementFromPoint};
cia=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.Ce(b.innerWidth,b.innerHeight)).round():$ba(b||window).round()}catch(d){return new g.Ce(-12245933,-12245933)}};
Mr=function(a,b,c){try{a&&(b=b.top);var d=cia(a,b,c),e=d.height,f=d.width;if(-12245933===f)return new Gr(f,f,f,f);var h=bca(Ve(b.document).j),l=h.x,m=h.y;return new Gr(m,l+f,m+e,l)}catch(n){return new Gr(-12245933,-12245933,-12245933,-12245933)}};
g.Nr=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
Or=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.Qr=function(a,b,c){if("string"===typeof b)(b=Pr(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Pr(c,d);f&&(c.style[f]=e)}};
Pr=function(a,b){var c=dia[b];if(!c){var d=Uba(b);c=d;void 0===a.style[d]&&(d=(g.Rc?"Webkit":Rr?"Moz":g.nf?"ms":null)+Wba(d),void 0!==a.style[d]&&(c=d));dia[b]=c}return c};
g.Sr=function(a,b){var c=a.style[Uba(b)];return"undefined"!==typeof c?c:a.style[Pr(a,b)]||""};
Tr=function(a,b){var c=Ue(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};
Ur=function(a,b){return Tr(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.Wr=function(a,b,c){if(b instanceof g.ue){var d=b.x;b=b.y}else d=b,b=c;a.style.left=g.Vr(d,!1);a.style.top=g.Vr(b,!1)};
Xr=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
eia=function(a){if(g.nf&&!g.Qc(8))return a.offsetParent;var b=Ue(a),c=Ur(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ur(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.Yr=function(a){var b=Ue(a),c=new g.ue(0,0);var d=b?Ue(b):document;d=!g.nf||g.Qc(9)||"CSS1Compat"==Ve(d).j.compatMode?d.documentElement:d.body;if(a==d)return c;a=Xr(a);b=bca(Ve(b).j);c.x=a.left+b.x;c.y=a.top+b.y;return c};
gia=function(a,b){var c=new g.ue(0,0),d=of(Ue(a));if(!Mc(d,"parent"))return c;do{var e=d==b?g.Yr(a):fia(a);c.x+=e.x;c.y+=e.y}while(d&&d!=b&&d!=d.parent&&(a=d.frameElement)&&(d=d.parent));return c};
g.Zr=function(a,b){a=hia(a);b=hia(b);return new g.ue(a.x-b.x,a.y-b.y)};
fia=function(a){a=Xr(a);return new g.ue(a.left,a.top)};
hia=function(a){if(1==a.nodeType)return fia(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.ue(a.clientX,a.clientY)};
g.$r=function(a,b,c){if(b instanceof g.Ce)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=g.Vr(b,!0);a.style.height=g.Vr(c,!0)};
g.Vr=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.as=function(a){var b=iia;if("none"!=Ur(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
iia=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Rc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Xr(a),new g.Ce(a.right-a.left,a.bottom-a.top)):new g.Ce(b,c)};
g.bs=function(a,b){a.style.display=b?"":"none"};
cs=function(a,b){b=Math.pow(10,b);return Math.floor(a*b)/b};
jia=function(a){return new Gr(a.top,a.right,a.bottom,a.left)};
kia=function(a){var b=a.top||0,c=a.left||0;return new Gr(b,c+(a.width||0),b+(a.height||0),c)};
ds=function(a){return null!=a&&0<=a&&1>=a};
lia=function(){var a=g.pc();return a?es("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"),function(b){return lc(a,b)})||lc(a,"OMI/")&&!lc(a,"XiaoMi/")?!0:lc(a,"Presto")&&lc(a,"Linux")&&!lc(a,"X11")&&!lc(a,"Android")&&!lc(a,"Mobi"):!1};
mia=function(){this.C=!Xp(Sp.top);this.isMobileDevice=Wp()||jha();var a=Zp();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.vl(a[a.length-1].url)||"":"";this.j=new Gr(0,0,0,0);this.D=new g.Ce(0,0);this.G=new g.Ce(0,0);this.N=new Gr(0,0,0,0);this.K=0;this.Z=!1;this.B=!(!Sp||!aia(Sp).Kn);this.update(Sp)};
nia=function(a,b){b&&b.screen&&(a.D=new g.Ce(b.screen.width,b.screen.height))};
oia=function(a,b){var c=a.j?new g.Ce(Hr(a.j),a.j.getHeight()):new g.Ce(0,0);b=void 0===b?Sp:b;null!==b&&b!=b.top&&(b=b.top);var d=0,e=0;try{var f=b.document,h=f.body,l=f.documentElement;if("CSS1Compat"==f.compatMode&&l.scrollHeight)d=l.scrollHeight!=c.height?l.scrollHeight:l.offsetHeight,e=l.scrollWidth!=c.width?l.scrollWidth:l.offsetWidth;else{var m=l.scrollHeight,n=l.scrollWidth,p=l.offsetHeight,q=l.offsetWidth;l.clientHeight!=p&&(m=h.scrollHeight,n=h.scrollWidth,p=h.offsetHeight,q=h.offsetWidth);
m>c.height?m>p?(d=m,e=n):(d=p,e=q):m<p?(d=m,e=n):(d=p,e=q)}var r=new g.Ce(e,d)}catch(t){r=new g.Ce(-12245933,-12245933)}a.G=r};
hs=function(){var a=fs();if(0<a.K||a.Z)return!0;a=iq().B.isVisible();var b=0===Vp(gs);return a||b};
fs=function(){return gq(mia)};
is=function(a){this.C=a;this.B=0;this.j=null};
js=function(a,b,c){this.C=a;this.Ra=void 0===c?"na":c;this.G=[];this.isInitialized=!1;this.D=new Kr(-1,!0,this);this.j=this;this.Z=b;this.ma=this.Y=!1;this.Da="uk";this.Ea=!1;this.K=!0};
ks=function(a,b){g.Gb(a.G,b)||(a.G.push(b),b.qz(a.j),b.gt(a.D),b.Pp()&&(a.Y=!0))};
pia=function(a){a=a.j;a.fT();a.eT();var b=fs();b.N=Mr(!1,a.C,b.isMobileDevice);oia(fs(),a.C);a.D.j=a.iW()};
qia=function(a){a.Y=a.G.length?es(a.G,function(b){return b.Pp()}):!1};
ria=function(a){var b=g.Mb(a.G);g.dc(b,function(c){c.gt(a.D)})};
ls=function(a){var b=g.Mb(a.G);g.dc(b,function(c){c.qz(a.j)});
a.j!=a||ria(a)};
ms=function(a,b,c,d){this.element=a;this.j=new Gr(0,0,0,0);this.D=new Gr(0,0,0,0);this.B=b;this.Lc=c;this.qa=d;this.ma=!1;this.timestamp=-1;this.N=new Lr(b.D,this.element,this.j,new Gr(0,0,0,0),0,0,Br(),0)};
ns=function(a){this.G=!1;this.j=a;this.D=function(){}};
sia=function(a,b,c){this.B=void 0===c?0:c;this.j=a;this.Yd=null==b?"":b};
tia=function(a){switch(Math.trunc(a.B)){case -16:return-16;case -8:return-8;case 0:return 0;case 8:return 8;case 16:return 16;default:return 16}};
uia=function(a,b){return a.B<b.B?!0:a.B>b.B?!1:a.j<b.j?!0:a.j>b.j?!1:typeof a.Yd<typeof b.Yd?!0:typeof a.Yd>typeof b.Yd?!1:a.Yd<b.Yd};
os=function(){this.C=0;this.j=[];this.B=!1};
via=function(a,b){(0,g.dc)(b.j,function(c){a.add(c.j,c.Yd,tia(c))})};
ps=function(a,b){var c=void 0===c?0:c;var d=void 0===d?!0:d;Yp(b,function(e,f){d&&void 0===e||a.add(f,e,c)});
return a};
qs=function(a){var b=wia;a.B&&(g.Zb(a.j,function(c,d){return uia(d,c)?1:uia(c,d)?-1:0}),a.B=!1);
return fq(a.j,function(c,d){d=b(d);return""+c+(""!=c&&""!=d?"&":"")+d},"")};
wia=function(a){var b=a.j;a=a.Yd;return""===a?b:"boolean"===typeof a?a?b:"":Array.isArray(a)?0===a.length?b:b+"="+a.join():b+"="+(g.Gb(["mtos","tos","p"],b)?a:encodeURIComponent(a))};
xia=function(a){var b=void 0===b?!0:b;this.j=new os;void 0!==a&&via(this.j,a);b&&this.j.add("v","unreleased",-16)};
yia=function(a){var b=[],c=[];g.Vc(a,function(d,e){if(!(e in Object.prototype)&&"undefined"!=typeof d)switch(Array.isArray(d)&&(d=d.join(",")),d=[e,"=",d].join(""),e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}});
return b.concat(c)};
zia=function(a){a=a.toString();a=a.substring(0,4E3);iq();Aha(a)};
Aia=function(){this.j=0};
Bia=function(a,b,c){(0,g.dc)(a.C,function(d){var e=a.j;if(!d.j&&(d.C(b,c),d.D())){d.j=!0;var f=d.B(),h=new os;h.add("id","av-js");h.add("type","verif");h.add("vtype",d.G);d=gq(Aia);h.add("i",d.j++);h.add("adk",e);ps(h,f);e=new xia(h);zia(e)}})};
rs=function(){this.B=this.C=this.D=this.j=0};
ts=function(a){this.B=a=void 0===a?Cia:a;this.j=g.dq(this.B,function(){return new rs})};
us=function(a,b){return Dia(a,function(c){return c.j},void 0===b?!0:b)};
ws=function(a,b){return vs(a,b,function(c){return c.j})};
Eia=function(a,b){return Dia(a,function(c){return c.C},void 0===b?!0:b)};
xs=function(a,b){return vs(a,b,function(c){return c.C})};
ys=function(a,b){return vs(a,b,function(c){return c.B})};
Fia=function(a){g.dc(a.j,function(b){b.B=0})};
Dia=function(a,b,c){a=g.dq(a.j,function(d){return b(d)});
return c?a:Gia(a)};
vs=function(a,b,c){var d=g.Fb(a.B,function(e){return b<=e});
return-1==d?0:c(a.j[d])};
Gia=function(a){return g.dq(a,function(b,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
zs=function(){this.B=new ts;this.Ra=new rs;this.qa=this.N=-1;this.fb=1E3;this.ib=new ts([1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0]);this.Da=this.Aa=-1};
As=function(a,b){return Eia(a.B,void 0===b?!0:b)};
Bs=function(a,b,c,d){var e=void 0===e?!1:e;c=yr(d,c);Up(a,b,c,{capture:e})};
Ds=function(a,b){b=Cs(b);return 0===b?0:Cs(a)/b};
Cs=function(a){return Math.max(a.bottom-a.top,0)*Math.max(a.right-a.left,0)};
Hia=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Ef(a)||a){var d=Ue(a),e=d&&of(d),f=e&&e.frameElement;f&&(a=f)}}catch(h){break}}return!1};
Iia=function(a,b,c){if(!a||!b)return!1;b=Jr(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;Xp(window.top)&&window.top&&window.top.document&&(window=window.top);if(!bia())return!1;a=window.document.elementFromPoint(a,b);if(!a)return!1;b=(b=(b=Ue(c))&&b.defaultView&&b.defaultView.frameElement)&&Hia(b,a);var d=a===c;a=!d&&a&&If(a,function(e){return e===c});
return!(b||d||a)};
Jia=function(a,b,c,d){return fs().C?!1:0>=Hr(a)||0>=a.getHeight()?!0:c&&d?Xha(208,function(){return Iia(a,b,c)}):!1};
Es=function(a,b,c){g.J.call(this);this.position=Kia.clone();this.KI=this.MH();this.QO=-2;this.Faa=Date.now();this.n_=-1;this.Dp=b;this.zI=null;this.EC=!1;this.ZI=null;this.opacity=-1;this.requestSource=c;this.Maa=!1;this.WO=function(){};
this.A_=function(){};
this.Mj=new gha;this.Mj.Dt=a;this.Mj.j=a;this.qt=!1;this.Xu={iP:null,hP:null};this.OZ=!0;this.zF=null;this.Bz=this.y6=!1;or().K++;this.Oh=this.GN();this.i_=-1;this.ag=null;this.hasCompleted=this.u6=!1;this.Lc=new Jp;fha(this.Lc);Lia(this);1==this.requestSource?Lp(this.Lc,"od",1):Lp(this.Lc,"od",0)};
Lia=function(a){a=a.Mj.Dt;var b;if(b=a&&a.getAttribute)b=/-[a-z]/.test("googleAvInapp")?!1:Mia&&a.dataset?"googleAvInapp"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+Vba()):!!a.getAttribute("data-"+Vba());b&&(fs().B=!0)};
Fs=function(a,b){b!=a.Bz&&(a.Bz=b,a=fs(),b?a.K++:0<a.K&&a.K--)};
Nia=function(a,b){if(a.ag){if(b.getName()===a.ag.getName())return;a.ag.dispose();a.ag=null}b=b.create(a.Mj.j,a.Lc,a.Pp());if(b=null!=b&&b.lL()?b:null)a.ag=b};
Oia=function(a,b,c){if(!a.zI||-1==a.Dp||-1===b.B||-1===a.zI.B)return 0;a=b.B-a.zI.B;return a>c?0:a};
Pia=function(a,b,c){if(a.ag){a.ag.ys();var d=a.ag.N,e=d.D,f=e.j;if(null!=d.K){var h=d.C;a.ZI=new g.ue(h.left-f.left,h.top-f.top)}f=a.mK()?Math.max(d.j,d.G):d.j;h={};null!==e.volume&&(h.volume=e.volume);e=a.ZV(d);a.zI=d;a.Ta(f,b,c,!1,h,e,d.Z)}};
Qia=function(a){if(a.EC&&a.zF){var b=1==Mp(a.Lc,"od"),c=fs().j,d=a.zF,e=a.ag?a.ag.getName():"ns",f=new g.Ce(Hr(c),c.getHeight());c=a.mK();a={vaa:e,ZI:a.ZI,lba:f,mK:c,Ge:a.Oh.Ge,dba:b};if(b=d.B){b.ys();e=b.N;f=e.D.j;var h=null,l=null;null!=e.K&&f&&(h=e.C,h=new g.ue(h.left-f.left,h.top-f.top),l=new g.Ce(f.right-f.left,f.bottom-f.top));e=c?Math.max(e.j,e.G):e.j;c={vaa:b.getName(),ZI:h,lba:l,mK:c,dba:!1,Ge:e}}else c=null;c&&Bia(d,a,c)}};
Ria=function(a,b,c){b&&(a.WO=b);c&&(a.A_=c)};
g.Gs=function(){};
g.Hs=function(a){return{value:a,done:!1}};
Sia=function(){this.D=this.j=this.C=this.B=this.G=0};
Tia=function(a){var b={};var c=g.lb()-a.G;b=(b.ptlt=c,b);(c=a.B)&&(b.pnk=c);(c=a.C)&&(b.pnc=c);(c=a.D)&&(b.pnmm=c);(a=a.j)&&(b.pns=a);return b};
Uia=function(){Ep.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.mediaTime=-1};
Is=function(a){return ds(a.volume)&&0<a.volume};
Js=function(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?function(){return!0}:d;
return function(e){var f=e[a];if(Array.isArray(f)&&d(e))return Via(f,b,c)}};
Ks=function(a,b){return function(c){return b(c)?c[a]:void 0}};
Wia=function(a){return function(b){for(var c=0;c<a.length;c++)if(a[c]===b.e||void 0===a[c]&&!b.hasOwnProperty("e"))return!0;return!1}};
Via=function(a,b,c){return void 0===c||c?g.Rs(a,function(d,e){return g.Gb(b,e)}):g.dq(b,function(d,e,f){return a.slice(0<e?f[e-1]+1:0,d+1).reduce(function(h,l){return h+l},0)})};
Xia=function(){this.B=this.j=""};
Yia=function(){};
Ss=function(a,b){var c={};if(void 0!==a)if(null!=b)for(var d in b){var e=b[d];d in Object.prototype||null!=e&&(c[d]="function"===typeof e?e(a):a[e])}else g.sd(c,a);return qs(ps(new os,c))};
Zia=function(){var a={};this.B=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.avs=[64,0],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a.mut=[33554432,33554432],a.umutb=[67108864,67108864],a.tvoff=[134217728,134217728],a);this.j={};for(var b in this.B)0<this.B[b][1]&&(this.j[b]=0);this.C=0};
Ts=function(a,b){var c=a.B[b],d=c[1];a.C+=c[0];0<d&&0==a.j[b]&&(a.j[b]=1)};
$ia=function(a){var b=g.gd(a.B),c=0,d;for(d in a.j)g.Gb(b,d)&&1==a.j[d]&&(c+=a.B[d][1],a.j[d]=2);return c};
aja=function(a){var b=0,c;for(c in a.j){var d=a.j[c];if(1==d||2==d)b+=a.B[c][1]}return b};
Us=function(){this.j=this.B=0};
Vs=function(){zs.call(this);this.C=new rs;this.Na=this.Y=this.Ea=0;this.Z=-1;this.jb=new rs;this.G=new rs;this.j=new ts;this.K=this.D=-1;this.ma=new rs;this.fb=2E3;this.Ka=new Us;this.Za=new Us;this.Va=new Us};
Ws=function(a,b,c){var d=a.Na;Dr||c||-1==a.Z||(d+=b-a.Z);return d};
bja=function(){this.C=!1};
Xs=function(a,b){this.C=!1;this.D=a;this.Y=b;this.G=0};
Ys=function(a,b){Xs.call(this,a,b);this.N=[]};
cja=function(){};
Zs=function(){};
$s=function(a,b,c,d){ms.call(this,a,b,c,d)};
at=function(a,b,c){ms.call(this,null,a,b,c);this.K=a.isActive();this.G=0};
bt=function(a){return[a.top,a.left,a.bottom,a.right]};
ct=function(a,b,c,d,e,f){f=void 0===f?new Zs:f;Es.call(this,b,c,d);this.kQ=e;this.SM=0;this.Rh={};this.Rg=new Zia;this.S_={};this.Yi="";this.Za=null;this.Nb=!1;this.j=[];this.er=f.B();this.K=f.C();this.D=null;this.C=-1;this.Na=this.Y=void 0;this.qa=this.ma=0;this.Da=-1;this.ib=this.fb=!1;this.Ea=this.Z=this.B=this.oB=this.yb=0;new ts;this.Ka=this.Ra=0;this.Va=-1;this.ek=0;this.N=g.Kd;this.Aa=[this.MH()];this.Hb=2;this.lx={};this.lx.pause="p";this.lx.resume="r";this.lx.skip="s";this.lx.mute="m";this.lx.unmute=
"um";this.lx.exitfullscreen="ef";this.G=null;this.jb=this.wb=!1};
dt=function(a){a.hasCompleted=!0;0!=a.ek&&(a.ek=3)};
et=function(a){return void 0===a?a:Number(a)?cs(a,3):0};
ft=function(a,b){return a.Aa[null!=b&&b<a.Aa.length?b:a.Aa.length-1]};
dja=function(a){var b=!!Mp(or().Lc,"umt");return a.Y||!b&&!a.Na?0:1};
eja=function(a,b){a.Gn()?b=0:-1==a.Dp?b=0:(b-=a.Dp,b=b>Math.max(1E4,a.C/3)?0:b);var c=a.N(a)||{};c=void 0!==c.currentTime?c.currentTime:a.ma;var d=c-a.ma,e=0;0<=d?(a.qa+=b,a.Ka+=Math.max(b-d,0),e=Math.min(d,a.qa)):a.Ra+=Math.abs(d);0!=d&&(a.qa=0);-1==a.Va&&0<d&&(a.Va=0<=Fr?Br()-Fr:-1);a.ma=c;return e};
fja=function(a,b){es(a.K,function(c){return c.D==b.D})||a.K.push(b)};
gja=function(a){var b=ws(a.nj().j,1);return gt(a,b)};
gt=function(a,b,c){return 15E3<=b?!0:a.fb?(void 0===c?0:c)?!0:0<a.C?b>=a.C/2:0<a.Da?b>=a.Da:!1:!1};
hja=function(a){var b=cs(a.Oh.Ge,2),c=a.Rg.C,d=a.Oh,e=ft(a),f=et(e.D),h=et(e.K),l=et(d.volume),m=cs(e.N,2),n=cs(e.qa,2),p=cs(d.Ge,2),q=cs(e.Aa,2),r=cs(e.Da,2);d=cs(d.rk,2);a=a.Vs().clone();a.round();e=As(e,!1);return{kba:b,xD:c,QI:f,FI:h,iC:l,RI:m,GI:n,Ge:p,TI:q,HI:r,rk:d,position:a,VI:e}};
jja=function(a,b){ija(a.j,b,function(){return{kba:0,xD:void 0,QI:-1,FI:-1,iC:-1,RI:-1,GI:-1,Ge:-1,TI:-1,HI:-1,rk:-1,position:void 0,VI:[]}});
a.j[b]=hja(a)};
ija=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
jt=function(a,b,c){var d=a.S_[b];if(null!=d)return d;d=kja(a,b);var e=jd(ht,function(f){return f==b});
a=lja(a,d,d,c,mja[ht[e]]);"fully_viewable_audible_half_duration_impression"==b&&(a.std="csm");return a};
kt=function(a,b,c){var d=[b];if(a!=b||c!=b)d.unshift(a),d.push(c);return d};
lja=function(a,b,c,d,e){if(a.qt)return{"if":0,vs:0};var f=a.Vs().clone();f.round();var h=fs(),l=or(),m=a.nj(),n=a.ag?a.ag.getName():"ns",p={};p["if"]=h.C?1:void 0;p.sdk=a.D?a.D:void 0;p.t=a.Faa;p.p=[f.top,f.left,f.bottom,f.right];p.tos=us(m.B,!1);p.mtos=As(m);p.mcvt=m.Ra.C;p.ps=void 0;f=Ws(m,Br(),a.Gn());p.vht=f;p.mut=m.jb.C;p.a=et(a.Oh.volume);p.mv=et(m.K);p.fs=a.Bz?1:0;p.ft=m.ma.j;p.at=m.G.j;p.as=0<m.D?1:0;p.atos=us(m.j);p.ssb=us(m.ib,!1);p.amtos=Eia(m.j,!1);p.uac=a.yb;p.vpt=m.C.j;"nio"==n&&(p.nio=
1,p.avms="nio");p.gmm="4";p.gdr=gt(a,m.C.j,!0)?1:0;p.efpf=a.Hb;if("gsv"==n||"nis"==n)n=a.ag,0<n.G&&(p.nnut=n.G);p.tcm=dja(a);p.nmt=a.Ra;p.bt=a.Ka;p.pst=a.Va;p.vpaid=a.Y;p.dur=a.C;p.vmtime=a.ma;p.is=a.Rg.C;1<=a.j.length&&(p.i0=a.j[0].xD,p.a0=[a.j[0].iC],p.c0=[a.j[0].Ge],p.ss0=[a.j[0].rk],n=a.j[0].position,p.p0=n?bt(n):void 0);2<=a.j.length&&(p.i1=a.j[1].xD,p.a1=kt(a.j[1].QI,a.j[1].iC,a.j[1].FI),p.c1=kt(a.j[1].RI,a.j[1].Ge,a.j[1].GI),p.ss1=kt(a.j[1].TI,a.j[1].rk,a.j[1].HI),n=a.j[1].position,p.p1=n?
bt(n):void 0,p.mtos1=a.j[1].VI);3<=a.j.length&&(p.i2=a.j[2].xD,p.a2=kt(a.j[2].QI,a.j[2].iC,a.j[2].FI),p.c2=kt(a.j[2].RI,a.j[2].Ge,a.j[2].GI),p.ss2=kt(a.j[2].TI,a.j[2].rk,a.j[2].HI),n=a.j[2].position,p.p2=n?bt(n):void 0,p.mtos2=a.j[2].VI);4<=a.j.length&&(p.i3=a.j[3].xD,p.a3=kt(a.j[3].QI,a.j[3].iC,a.j[3].FI),p.c3=kt(a.j[3].RI,a.j[3].Ge,a.j[3].GI),p.ss3=kt(a.j[3].TI,a.j[3].rk,a.j[3].HI),n=a.j[3].position,p.p3=n?bt(n):void 0,p.mtos3=a.j[3].VI);p.cs=aja(a.Rg);b&&(p.ic=$ia(a.Rg),p.dvpt=m.C.B,p.dvs=ys(m.B,
.5),p.dfvs=ys(m.B,1),p.davs=ys(m.j,.5),p.dafvs=ys(m.j,1),c&&(m.C.B=0,Fia(m.B),Fia(m.j)),a.Tq()&&(p.dtos=m.Ea,p.dav=m.Y,p.dtoss=a.SM+1,c&&(m.Ea=0,m.Y=0,a.SM++)),p.dat=m.G.B,p.dft=m.ma.B,c&&(m.G.B=0,m.ma.B=0));p.ps=[h.G.width,h.G.height];p.bs=[Hr(h.j),h.j.getHeight()];p.scs=[h.D.width,h.D.height];p.dom=h.domain;a.oB&&(p.vds=a.oB);if(0<a.K.length||a.er)b=g.Mb(a.K),a.er&&b.push(a.er),p.pings=g.dq(b,function(q){return q.toString()});
b=g.dq(g.Rs(a.K,function(q){return q.K()}),function(q){return q.getId()});
uaa(b);p.ces=b;a.B&&(p.vmer=a.B);a.Z&&(p.vmmk=a.Z);a.Ea&&(p.vmiec=a.Ea);p.avms=a.ag?a.ag.getName():"ns";a.ag&&g.sd(p,a.ag.Ss());d?(p.c=cs(a.Oh.Ge,2),p.ss=cs(a.Oh.rk,2)):p.tth=Br()-nja;p.mc=cs(m.qa,2);p.nc=cs(m.N,2);p.mv=et(m.K);p.nv=et(m.D);p.lte=cs(a.QO,2);d=ft(a,e);As(m);p.qmtos=As(d);p.qnc=cs(d.N,2);p.qmv=et(d.K);p.qnv=et(d.D);p.qas=0<d.D?1:0;p.qi=a.Yi;p.avms||(p.avms="geo");p.psm=m.Ka.j;p.psv=m.Ka.getValue();p.psfv=m.Za.getValue();p.psa=m.Va.getValue();l=dha(l.Lc);l.length&&(p.veid=l);a.G&&g.sd(p,
Tia(a.G));p.avas=a.xH();p.vs=a.kW();return p};
kja=function(a,b){if(g.Gb(oja,b))return!0;var c=a.Rh[b];return void 0!==c?(a.Rh[b]=!0,!c):!1};
qja=function(){this.j={};var a=of();lt(this,a,document);var b=pja();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)lt(this,c,c.document);lt(this,a.top,a.top.document)}}catch(d){}};
pja=function(){var a=document.documentElement;try{if(!Xp(of().top))return"2";var b=[],c=of(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
lt=function(a,b,c){Bs(c,"mousedown",function(){return rja(a)},301);
Bs(b,"scroll",function(){return sja(a)},302);
Bs(c,"touchmove",function(){return tja(a)},303);
Bs(c,"mousemove",function(){return uja(a)},304);
Bs(c,"keydown",function(){return vja(a)},305)};
rja=function(a){g.Vc(a.j,function(b){1E5<b.C||++b.C})};
sja=function(a){g.Vc(a.j,function(b){1E5<b.j||++b.j})};
tja=function(a){g.Vc(a.j,function(b){1E5<b.j||++b.j})};
vja=function(a){g.Vc(a.j,function(b){1E5<b.B||++b.B})};
uja=function(a){g.Vc(a.j,function(b){1E5<b.D||++b.D})};
wja=function(){this.j=[];this.B=[]};
mt=function(a,b){return g.Eb(a.j,function(c){return c.Yi==b})};
xja=function(a,b){return b?g.Eb(a.j,function(c){return c.Mj.Dt==b}):null};
yja=function(a,b){return g.Eb(a.B,function(c){return 2==c.ip()&&c.Yi==b})};
ot=function(){var a=nt;return 0==a.j.length?a.B:0==a.B.length?a.j:g.Lb(a.B,a.j)};
zja=function(a,b){a=1==b.ip()?a.j:a.B;var c=Db(a,function(d){return d==b});
return-1!=c?(a.splice(c,1),b.ag&&b.ag.hG(),b.dispose(),!0):!1};
Aja=function(a){var b=nt;if(zja(b,a)){switch(a.ip()){case 0:var c=function(){return null};
case 2:c=function(){return yja(b,a.Yi)};
break;case 1:c=function(){return mt(b,a.Yi)}}for(var d=c();d;d=c())zja(b,d)}};
Bja=function(a){var b=nt;a=g.Rs(a,function(c){return!xja(b,c.Mj.Dt)});
b.j.push.apply(b.j,g.pa(a))};
Cja=function(a){var b=[];g.dc(a,function(c){es(nt.j,function(d){return d.Mj.Dt===c.Mj.Dt&&d.Yi===c.Yi})||(nt.j.push(c),b.push(c))})};
pt=function(){this.j=this.B=null};
Dja=function(a,b){function c(d,e){b(d,e)}
if(null==a.B)return!1;a.j=g.Eb(a.B,function(d){return null!=d&&d.gT()});
a.j&&(a.j.init(c)?pia(a.j.j):b(a.j.j.gz(),a.j));return null!=a.j};
qt=function(a){a=Eja(a);ns.call(this,a.length?a[a.length-1]:new js(Sp,0));this.C=a;this.B=null};
Eja=function(a){if(!a.length)return[];a=(0,g.Rs)(a,function(c){return null!=c&&c.MB()});
for(var b=1;b<a.length;b++)ks(a[b-1],a[b]);return a};
rt=function(a,b,c,d){ms.call(this,a,b,c,d);this.Y=this.Z=this.G=this.K=this.C=null};
tt=function(a){return a.C&&a.C.takeRecords?a.C.takeRecords():[]};
Gja=function(a){if(!a.element)return!1;var b=a.element,c=a.B.j.C,d=or().j.j;a.C=new c.IntersectionObserver(nr(d,function(e){return ut(a,e)}),Fja);
d=nr(d,function(){a.C.unobserve(b);a.C.observe(b);ut(a,tt(a))});
c.ResizeObserver?(a.K=new c.ResizeObserver(d),a.K.observe(b)):c.MutationObserver&&(a.G=new g.Ua.MutationObserver(d),a.G.observe(b,{attributes:!0,childList:!0,characterData:!0,subtree:!0}));a.C.observe(b);ut(a,tt(a));return!0};
ut=function(a,b){try{if(b.length){a.Z||(a.Z=Br());var c=Hja(b),d=gia(a.element,a.B.j.C),e=d.x,f=d.y;a.j=new Gr(Math.round(f),Math.round(e)+c.boundingClientRect.width,Math.round(f)+c.boundingClientRect.height,Math.round(e));var h=jia(c.intersectionRect);a.D=Jr(h,a.j.left-h.left,a.j.top-h.top)}}catch(l){a.hG(),Ar(299,l)}};
Hja=function(a){return fq(a,function(b,c){return b.time>c.time?b:c},a[0])};
vt=function(a){a=void 0===a?Sp:a;ns.call(this,new js(a,2))};
wt=function(){var a=Ija();js.call(this,Sp.top,a,"geo")};
Ija=function(){or();var a=fs();return a.C||a.B?0:2};
Jja=function(){};
xt=function(){this.done=!1;this.j={H3:0,zU:0,xhb:0,uV:0,jO:-1,s4:0,r4:0,t4:0,taa:0};this.G=null;this.K=!1;this.C=null;this.N=0;this.B=new is(this)};
At=function(){var a=zt;a.K||(a.K=!0,Kja(a,function(){return a.D.apply(a,g.pa(g.Ka.apply(0,arguments)))}),a.D())};
Lja=function(){gq(Jja);var a=gq(pt);null!=a.j&&a.j.j?pia(a.j.j):fs().update(Sp)};
Bt=function(a,b,c){if(!a.done&&(a.B.cancel(),0!=b.length)){a.C=null;try{Lja();var d=Br();or().G=d;if(null!=gq(pt).j)for(var e=0;e<b.length;e++)Pia(b[e],d,c);for(d=0;d<b.length;d++)Qia(b[d]);++a.j.uV}finally{c?g.dc(b,function(f){f.Oh.Ge=0}):a.B.schedule()}}};
Kja=function(a,b){if(!a.G){b=yr(142,b);iq();var c;gs.visibilityState?c="visibilitychange":gs.mozVisibilityState?c="mozvisibilitychange":gs.webkitVisibilityState&&(c="webkitvisibilitychange");c&&Up(gs,c,b,{capture:!1})&&(a.G=b)}};
Mja=function(){var a=gq(pt);if(null!=a.j){var b=a.j;g.dc(ot(),function(c){return Nia(c,b)})}};
Nja=function(a,b){a=a.N;Dr&&(a+=b-Er);return a};
Oja=function(a){a=void 0===a?function(){return{}}:a;
vr.AV="av-js";ur.j=.01;Wha([function(b){var c=or(),d={};d=(d.bin=c.B,d.type="error",d);c=Np(c.Lc);if(!zt.C){var e=zt,f=Sp.document,h=0<=Cr?Br()-Cr:-1,l=Br();-1==e.j.jO&&(h=l);var m=fs(),n=or(),p=Np(n.Lc),q=ot();try{if(0<q.length){var r=m.j;r&&(p.bs=[Hr(r),r.getHeight()]);var t=m.G;t&&(p.ps=[t.width,t.height]);Sp.screen&&(p.scs=[Sp.screen.width,Sp.screen.height])}else p.url=encodeURIComponent(Sp.location.href.substring(0,512)),f.referrer&&(p.referrer=encodeURIComponent(f.referrer.substring(0,512)));
p.tt=h;p.pt=Cr;p.bin=n.B;void 0!==Sp.google_osd_load_pub_page_exp&&(p.olpp=Sp.google_osd_load_pub_page_exp);p.deb=[1,e.j.H3,e.j.zU,e.j.uV,e.j.jO,0,e.B.B,e.j.s4,e.j.r4,e.j.t4,e.j.taa,-1].join(";");p.tvt=Nja(e,l);m.B&&(p.inapp=1);if(null!==Sp&&Sp!=Sp.top){0<q.length&&(p.iframe_loc=encodeURIComponent(Sp.location.href.substring(0,512)));var v=m.N;p.is=[Hr(v),v.getHeight()]}}catch(x){p.error=1}zt.C=p}r=g.qd(zt.C);t=or().j;1==Mp(t.C,"prf")?(v=new jq,e=t.j,f=0,-1<e.j&&(f=e.C.j.now()-e.j),v=dj(v,1,Ph(e.D+
f),0),e=t.j,v=dj(v,5,fi(-1<e.j?e.B+1:e.B),0),v=dj(v,2,ki(t.B.j.C()),"0"),v=dj(v,3,ki(t.B.j.B()),"0"),t=dj(v,4,ki(t.B.j.j()),"0"),v={},t=(v.pf=g.tg(t.j()),v)):t={};g.sd(r,t);g.sd(b,d,c,r,a())}])};
Qja=function(){var a=Pja||Sp;if(!a)return"";var b=[];if(!a.location||!a.location.href)return"";b.push("url="+encodeURIComponent(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+encodeURIComponent(a.document.referrer.substring(0,512)));return b.join("&")};
Ct=function(){var a="youtube.player.web_20231024_01_RC02".match(/_(\d{8})_RC\d+$/)||"youtube.player.web_20231024_01_RC02".match(/_(\d{8})_\d+_\d+$/)||"youtube.player.web_20231024_01_RC02".match(/_(\d{8})_\d+\.\d+$/)||"youtube.player.web_20231024_01_RC02".match(/_(\d{8})_\d+_RC\d+$/),b;if(2==(null==(b=a)?void 0:b.length))return a[1];a="youtube.player.web_20231024_01_RC02".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);var c;return 3==(null==(c=a)?void 0:c.length)?"20"+a[1]+a[2]:null};
Rja=function(){return"av.default_js".includes("ima_html5_sdk")?{Vo:"ima",Yo:null}:"av.default_js".includes("ima_native_sdk")?{Vo:"nima",Yo:null}:"av.default_js".includes("admob-native-video-javascript")?{Vo:"an",Yo:null}:"youtube.player.web_20231024_01_RC02".includes("cast_js_sdk")?{Vo:"cast",Yo:Ct()}:"youtube.player.web_20231024_01_RC02".includes("youtube.player.web")?{Vo:"yw",Yo:Ct()}:"youtube.player.web_20231024_01_RC02".includes("outstream_web_client")?{Vo:"out",Yo:Ct()}:"youtube.player.web_20231024_01_RC02".includes("drx_rewarded_web")?
{Vo:"r",Yo:Ct()}:"youtube.player.web_20231024_01_RC02".includes("gam_native_web_video")?{Vo:"n",Yo:Ct()}:"youtube.player.web_20231024_01_RC02".includes("admob_interstitial_video")?{Vo:"int",Yo:Ct()}:{Vo:"j",Yo:null}};
Ft=function(a,b){var c={sv:"958"};null!==Dt&&(c.v=Dt);c.cb=Sja;c.nas=nt.j.length;c.msg=a;void 0!==b&&(a=Tja(b))&&(c.e=Et[a]);return c};
Gt=function(a){return hc(a,"custom_metric_viewable")};
Tja=function(a){var b=Gt(a)?"custom_metric_viewable":a.toLowerCase();return jd(ht,function(c){return c==b})};
Uja=function(){this.j=void 0;this.B=!1;this.C=0;this.D=-1;this.G="tos"};
Xja=function(a){try{var b=a.split(",");return b.length>g.gd(Vja).length?null:fq(b,function(c,d){d=d.toLowerCase().split("=");if(2!=d.length||void 0===Wja[d[0]]||!Wja[d[0]](d[1]))throw Error("Entry ("+d[0]+", "+d[1]+") is invalid.");c[d[0]]=d[1];return c},{})}catch(c){return null}};
Yja=function(a,b){if(void 0==a.j)return 0;switch(a.G){case "mtos":return a.B?xs(b.j,a.j):xs(b.B,a.j);case "tos":return a.B?ws(b.j,a.j):ws(b.B,a.j)}return 0};
Ht=function(a,b,c,d){Xs.call(this,b,d);this.N=a;this.Z=c};
It=function(){};
Jt=function(a){Xs.call(this,"fully_viewable_audible_half_duration_impression",a)};
Kt=function(a){this.j=a};
Lt=function(a,b){Xs.call(this,a,b)};
Mt=function(a){Ys.call(this,"measurable_impression",a)};
Nt=function(){Kt.apply(this,arguments)};
Ot=function(a,b,c){at.call(this,a,b,c)};
Pt=function(a){a=void 0===a?Sp:a;ns.call(this,new js(a,2))};
Qt=function(a,b,c){at.call(this,a,b,c)};
Rt=function(a){a=void 0===a?Sp:a;ns.call(this,new js(a,2))};
St=function(){js.call(this,Sp,2,"mraid");this.Ka=0;this.qa=this.Aa=!1;this.N=null;this.B=aia(this.C);this.D.j=new Gr(0,0,0,0);this.Na=!1};
Tt=function(a,b,c){a.St("addEventListener",b,c)};
bka=function(a){or().D=!!a.St("isViewable");Tt(a,"viewableChange",Zja);"loading"===a.St("getState")?Tt(a,"ready",$ja):aka(a)};
aka=function(a){"string"===typeof a.B.Kn.AFMA_LIDAR?(a.Aa=!0,cka(a)):(a.B.compatibility=3,a.N="nc",a.fail("w"))};
cka=function(a){a.qa=!1;var b=1==Mp(or().Lc,"rmmt"),c=!!a.St("isViewable");(b?!c:1)&&iq().setTimeout(zr(524,function(){a.qa||(dka(a),Ar(540,Error()),a.N="mt",a.fail("w"))}),500);
eka(a);Tt(a,a.B.Kn.AFMA_LIDAR,fka)};
eka=function(a){var b=1==Mp(or().Lc,"sneio"),c=void 0!==a.B.Kn.AFMA_LIDAR_EXP_1,d=void 0!==a.B.Kn.AFMA_LIDAR_EXP_2;(b=b&&d)&&(a.B.Kn.AFMA_LIDAR_EXP_2=!0);c&&(a.B.Kn.AFMA_LIDAR_EXP_1=!b)};
dka=function(a){a.St("removeEventListener",a.B.Kn.AFMA_LIDAR,fka);a.Aa=!1};
gka=function(a,b){if("loading"===a.St("getState"))return new g.Ce(-1,-1);b=a.St(b);if(!b)return new g.Ce(-1,-1);a=parseInt(b.width,10);b=parseInt(b.height,10);return isNaN(a)||isNaN(b)?new g.Ce(-1,-1):new g.Ce(a,b)};
$ja=function(){try{var a=gq(St);a.St("removeEventListener","ready",$ja);aka(a)}catch(b){Ar(541,b)}};
fka=function(a,b){try{var c=gq(St);c.qa=!0;var d=a?new Gr(a.y,a.x+a.width,a.y+a.height,a.x):new Gr(0,0,0,0);var e=Br(),f=hs();var h=new Kr(e,f,c);h.j=d;h.volume=b;c.gt(h)}catch(l){Ar(542,l)}};
Zja=function(a){var b=or(),c=gq(St);a&&!b.D&&(b.D=!0,c.Na=!0,c.N&&c.fail("w",!0))};
Ut=function(){this.isInitialized=!1;this.j=this.B=null;var a={};this.K=(a.start=this.b6,a.firstquartile=this.W5,a.midpoint=this.Y5,a.thirdquartile=this.c6,a.complete=this.T5,a.error=this.U5,a.pause=this.jQ,a.resume=this.rZ,a.skip=this.a6,a.viewable_impression=this.jp,a.mute=this.kB,a.unmute=this.kB,a.fullscreen=this.X5,a.exitfullscreen=this.V5,a.fully_viewable_audible_half_duration_impression=this.jp,a.measurable_impression=this.jp,a.abandon=this.jQ,a.engagedview=this.jp,a.impression=this.jp,a.creativeview=
this.jp,a.progress=this.kB,a.custom_metric_viewable=this.jp,a.bufferstart=this.jQ,a.bufferfinish=this.rZ,a.audio_measurable=this.jp,a.audio_audible=this.jp,a);a={};this.N=(a.overlay_resize=this.Z5,a.abandon=this.YN,a.close=this.YN,a.collapse=this.YN,a.overlay_unmeasurable_impression=function(b){return jt(b,"overlay_unmeasurable_impression",hs())},a.overlay_viewable_immediate_impression=function(b){return jt(b,"overlay_viewable_immediate_impression",hs())},a.overlay_unviewable_impression=function(b){return jt(b,
"overlay_unviewable_impression",hs())},a.overlay_viewable_end_of_session_impression=function(b){return jt(b,"overlay_viewable_end_of_session_impression",hs())},a);
or().B=3;hka(this)};
Vt=function(a,b,c,d){a=a.UE(null,d,!0,b);a.D=c;Bja([a]);return a};
ika=function(a,b,c){bha(b);var d=a.j;g.dc(b,function(e){var f=g.dq(e.criteria,function(h){var l=Xja(h);if(null==l)h=null;else if(h=new Uja,null!=l.visible&&(h.j=l.visible/100),null!=l.audible&&(h.B=1==l.audible),null!=l.time){var m="mtos"==l.timetype?"mtos":"tos",n=Eaa(l.time,"%")?"%":"ms";l=parseInt(l.time,10);"%"==n&&(l/=100);h.setTime(l,n,m)}return h});
es(f,function(h){return null==h})||fja(c,new Ht(e.id,e.event,f,d))})};
jka=function(){var a=[],b=or();a.push(gq(wt));Mp(b.Lc,"mvp_lv")&&a.push(gq(St));b=[new Pt,new Rt];b.push(new qt(a));b.push(new vt(Sp));return b};
kka=function(a){if(!a.isInitialized){a.isInitialized=!0;try{var b=Br(),c=or(),d=fs();Cr=b;c.C=79463069;"o"!==a.B&&(Pja=qha(Sp));if(Bha()){zt.j.zU=0;zt.j.jO=Br()-b;var e=jka(),f=gq(pt);f.B=e;Dja(f,function(){Wt()})?zt.done||(Mja(),ks(f.j.j,a),At()):d.C?Wt():At()}else Xt=!0}catch(h){throw nt.reset(),h;
}}};
Zt=function(a){zt.B.cancel();Yt=a;zt.done=!0};
$t=function(a){if(a.B)return a.B;var b=gq(pt).j;if(b)switch(b.getName()){case "nis":a.B="n";break;case "gsv":a.B="m"}a.B||(a.B="h");return a.B};
au=function(a,b,c){if(null==a.j)return b.oB|=4,!1;a=lka(a.j,c,b);b.oB|=a;return 0==a};
Wt=function(){var a=[new vt(Sp)],b=gq(pt);b.B=a;Dja(b,function(){Zt("i")})?zt.done||(Mja(),At()):Zt("i")};
mka=function(a,b){if(!a.Nb){var c=jt(a,"start",hs());c=a.kQ.j(c).j;var d={id:"lidarv"};d.r=b;d.sv="958";null!==Dt&&(d.v=Dt);xl(c,function(e,f){return d[e]="mtos"==e||"tos"==e?f:encodeURIComponent(f)});
b=Qja();xl(b,function(e,f){return d[e]=encodeURIComponent(f)});
b="//pagead2.googlesyndication.com/pagead/gen_204?"+qs(ps(new os,d));zia(b);a.Nb=!0}};
bu=function(a,b,c){Bt(zt,[a],!hs());jja(a,c);4!=c&&ija(a.Aa,c,a.MH);return jt(a,b,hs())};
hka=function(a){Oja(function(){var b=nka();null!=a.B&&(b.sdk=a.B);var c=gq(pt);null!=c.j&&(b.avms=c.j.getName());return b})};
oka=function(a,b,c,d){var e=xja(nt,c);null!==e&&e.Yi!==b&&(a.bH(e),e=null);e||(b=a.UE(c,Br(),!1,b),0==nt.B.length&&(or().C=79463069),Cja([b]),e=b,e.D=$t(a),d&&(e.Za=d));return e};
pka=function(a,b){var c=a[b];void 0!==c&&0<c&&(a[b]=Math.floor(1E3*c))};
nka=function(){var a=fs(),b={},c={},d={};return Object.assign({},(b.sv="958",b),null!==Dt&&(c.v=Dt,c),(d["if"]=a.C?"1":"0",d.nas=String(nt.j.length),d))};
cu=function(a){Xs.call(this,"audio_audible",a)};
du=function(a){Ys.call(this,"audio_measurable",a)};
eu=function(){Kt.apply(this,arguments)};
fu=function(){};
qka=function(a){this.j=a};
lka=function(a,b,c){a=a.B();if("function"===typeof a){var d={};var e={};d=Object.assign({},null!==Dt&&(d.v=Dt,d),(e.sv="958",e.cb=Sja,e.e=rka(b),e));e=jt(c,b,hs());g.sd(d,e);c.S_[b]=e;d=2==c.ip()?yia(d).join("&"):c.kQ.j(d).j;try{return a(c.Yi,d,b),0}catch(f){return 2}}else return 1};
rka=function(a){var b=Gt(a)?"custom_metric_viewable":a;a=jd(ht,function(c){return c==b});
return Et[a]};
gu=function(){Ut.call(this);this.G=null;this.D=!1;this.C="ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"};
ska=function(a,b,c){c=c.opt_configurable_tracking_events;null!=a.j&&Array.isArray(c)&&ika(a,c,b)};
tka=function(a,b,c){var d=mt(nt,b);d||(d=c.opt_nativeTime||-1,d=Vt(a,b,$t(a),d),c.opt_osdId&&(d.Za=c.opt_osdId));return d};
uka=function(a,b,c){var d=mt(nt,b);d||(d=Vt(a,b,"n",c.opt_nativeTime||-1));return d};
vka=function(a,b){var c=mt(nt,b);c||(c=Vt(a,b,"h",-1));return c};
wka=function(a){or();switch($t(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
zka=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.sd(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);var f=a.SH(b,c);c=f?f.kQ:a.MM();if(e.opt_bounds)return c.j(Ft("ol",d));if(void 0!==d)if(void 0!==Tja(d))if(Xt)a=Ft("ue",d);else if(kka(a),"i"==Yt)a=Ft("i",d),a["if"]=0;else if(b=a.SH(b,e)){b:{"i"==Yt&&(b.qt=!0);f=e.opt_fullscreen;void 0!==f&&Fs(b,!!f);var h;if(f=!fs().B)(f=lc(g.pc(),"CrKey")||lc(g.pc(),"PlayStation")||lc(g.pc(),"Roku")||lia()||lc(g.pc(),"Xbox"))||(f=g.pc(),f=lc(f,"AppleTV")||lc(f,
"Apple TV")||lc(f,"CFNetwork")||lc(f,"tvOS")),f||(f=g.pc(),f=lc(f,"sdk_google_atv_x86")||lc(f,"Android TV")),f=!f;f&&(iq(),f=0===Vp(gs));if(h=f){switch(b.ip()){case 1:mka(b,"pv");break;case 2:a.NQ(b)}Zt("pv")}f=d.toLowerCase();if(h=!h)h=Mp(or().Lc,"ssmol")&&"loaded"===f?!1:g.Gb(xka,f);if(h&&0==b.ek){"i"!=Yt&&(zt.done=!1);h=void 0!==e?e.opt_nativeTime:void 0;Fr=h="number"===typeof h?h:Br();b.EC=!0;var l=hs();b.ek=1;b.Rh={};b.Rh.start=!1;b.Rh.firstquartile=!1;b.Rh.midpoint=!1;b.Rh.thirdquartile=!1;
b.Rh.complete=!1;b.Rh.resume=!1;b.Rh.pause=!1;b.Rh.skip=!1;b.Rh.mute=!1;b.Rh.unmute=!1;b.Rh.viewable_impression=!1;b.Rh.measurable_impression=!1;b.Rh.fully_viewable_audible_half_duration_impression=!1;b.Rh.fullscreen=!1;b.Rh.exitfullscreen=!1;b.SM=0;l||(b.nj().Z=h);Bt(zt,[b],!l)}(h=b.lx[f])&&Ts(b.Rg,h);Mp(or().Lc,"fmd")||g.Gb(yka,f)&&b.er&&b.er.B(b,null);switch(b.ip()){case 1:var m=Gt(f)?a.K.custom_metric_viewable:a.K[f];break;case 2:m=a.N[f]}if(m&&(d=m.call(a,b,e,d),Mp(or().Lc,"fmd")&&g.Gb(yka,f)&&
b.er&&b.er.B(b,null),void 0!==d)){e=Ft(void 0,f);g.sd(e,d);d=e;break b}d=void 0}3==b.ek&&a.bH(b);a=d}else a=Ft("nf",d);else a=void 0;else Xt?a=Ft("ue"):f?(a=Ft(),g.sd(a,lja(f,!0,!1,!1))):a=Ft("nf");return"string"===typeof a?c.j():c.j(a)};
Aka=function(a,b){b&&(a.C=b)};
Bka=function(a){var b={};return b.viewability=a.j,b.googleViewability=a.B,b};
Cka=function(a,b,c){c=void 0===c?{}:c;a=zka(gq(gu),b,c,a);return Bka(a)};
Dka=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.C=!b&&/[?&]ae=1(&|$)/.test(a);this.D=!b&&/[?&]ae=2(&|$)/.test(a);if((this.j=/[?&]adurl=([^&]*)/.exec(a))&&this.j[1]){try{var c=decodeURIComponent(this.j[1])}catch(d){c=null}this.B=c}};
Gka=function(a){if(g.ic(g.He(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.ao(a)}catch(c){return null!=g.Eb(Eka,function(d){return 0<a.search(d)})}return b.K.match(Fka)?!0:null!=g.Eb(Eka,function(c){return null!=a.match(c)})};
g.hu=function(a,b){return a.replace(Hka,function(c,d){try{var e=g.od(b,d);if(null==e||null==e.toString())return c;e=e.toString();if(""==e||!g.ic(g.He(e)))return encodeURIComponent(e).replace(/%2C/g,",")}catch(f){}return c})};
ju=function(a){g.Fd.call(this);var b=this;this.G=this.B=0;this.Hn=null!=a?a:{Ji:function(e,f){return setTimeout(e,f)},
Jj:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.C=function(){return g.I(function(e){return g.z(e,iu(b),0)})};
window.addEventListener("offline",this.C);window.addEventListener("online",this.C);this.G||this.Cf()};
Ika=function(){var a=g.ku;ju.instance||(ju.instance=new ju(a));return ju.instance};
iu=function(a,b){return a.D?a.D:a.D=new Promise(function(c){var d,e,f,h;return g.I(function(l){switch(l.j){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,h=!1,g.Ca(l,2,3),d&&(a.B=a.Hn.Ji(function(){d.abort()},b||2E4)),g.z(l,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:h=!0;case 3:g.Ga(l);a.D=void 0;a.B&&(a.Hn.Jj(a.B),a.B=0);h!==a.j&&(a.j=h,a.j?a.dispatchEvent("networkstatus-online"):a.dispatchEvent("networkstatus-offline"));c(h);g.Ha(l,0);break;case 2:g.Fa(l),h=!1,l.La(3)}})})};
lu=function(){this.data=[];this.j=-1};
Jka=function(a){-1===a.j&&(a.j=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.j};
mu=function(a){a.setAttribute("role","link")};
ou=function(a,b){Array.isArray(b)&&(b=b.join(" "));""===b||void 0==b?(nu||(b={},nu=(b.atomic=!1,b.autocomplete="none",b.dropeffect="none",b.haspopup=!1,b.live="off",b.multiline=!1,b.multiselectable=!1,b.orientation="vertical",b.readonly=!1,b.relevant="additions text",b.required=!1,b.sort="none",b.busy=!1,b.disabled=!1,b.hidden=!1,b.invalid="false",b)),b=nu,"label"in b?a.setAttribute("aria-label",b.label):a.removeAttribute("aria-label")):a.setAttribute("aria-label",b)};
pu=function(a){a=a.getAttribute("aria-label");return null==a||void 0==a?"":String(a)};
g.qu=function(a,b,c){g.J.call(this);this.j=null;this.D=!1;this.K=a;this.G=c;this.B=b||window;this.C=(0,g.ib)(this.Z1,this)};
g.ru=function(a){a.isActive()||a.start()};
Kka=function(a){a=a.B;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
Lka=function(a){a=a.B;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.tu=function(a,b,c){g.J.call(this);this.j=a;this.Ri=b||0;this.B=c;this.C=(0,g.ib)(this.iT,this)};
g.uu=function(a,b){a.isActive()||a.start(b)};
g.vu=function(a){a.stop();a.iT()};
g.wu=function(a){a.isActive()&&g.vu(a)};
xu=function(a,b){this.j=a[g.Ua.Symbol.iterator]();this.B=b};
Mka=function(a,b){return new xu(a,b)};
Nka=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
yu=function(a){return a.classList?a.classList:Nka(a).match(/\S+/g)||[]};
g.zu=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.Au=function(a,b){return a.classList?a.classList.contains(b):g.Gb(yu(a),b)};
g.Bu=function(a,b){if(a.classList)a.classList.add(b);else if(!g.Au(a,b)){var c=Nka(a);g.zu(a,c+(0<c.length?" "+b:b))}};
g.Cu=function(a,b){if(a.classList)Array.prototype.forEach.call(b,function(e){g.Bu(a,e)});
else{var c={};Array.prototype.forEach.call(yu(a),function(e){c[e]=!0});
Array.prototype.forEach.call(b,function(e){c[e]=!0});
b="";for(var d in c)b+=0<b.length?" "+d:d;g.zu(a,b)}};
g.Du=function(a,b){a.classList?a.classList.remove(b):g.Au(a,b)&&g.zu(a,Array.prototype.filter.call(yu(a),function(c){return c!=b}).join(" "))};
g.Eu=function(a,b){a.classList?Array.prototype.forEach.call(b,function(c){g.Du(a,c)}):g.zu(a,Array.prototype.filter.call(yu(a),function(c){return!g.Gb(b,c)}).join(" "))};
g.Fu=function(a,b,c){c?g.Bu(a,b):g.Du(a,b)};
Oka=function(a,b){var c=!g.Au(a,b);g.Fu(a,b,c)};
Ju=function(a){if(a instanceof Gu||a instanceof Hu||a instanceof Iu)return a;if("function"==typeof a.next)return new Gu(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gu(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Dk)return new Gu(function(){return a.Dk()});
throw Error("Not an iterator or iterable.");};
Gu=function(a){this.B=a};
Hu=function(a){this.B=a};
Iu=function(a){Gu.call(this,function(){return a});
this.C=a};
g.Ku=function(a,b){this.B={};this.j=[];this.pu=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.Ku)for(c=a.hp(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
Pka=function(a,b){return a===b};
Mu=function(a){if(a.size!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];Lu(a.B,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.size!=a.j.length){var e={};for(c=b=0;b<a.j.length;)d=a.j[b],Lu(e,d)||(a.j[c++]=d,e[d]=1),b++;a.j.length=c}};
Lu=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Nu=function(){g.Fd.call(this);this.j=0;this.endTime=this.startTime=null};
Qka=function(a,b){Array.isArray(b)||(b=[b]);b=b.map(function(c){return"string"===typeof c?c:c.property+" "+c.duration+"s "+c.timing+" "+c.delay+"s"});
g.Qr(a,"transition",b.join(","))};
Ou=function(a,b,c,d,e){g.Nu.call(this);this.B=a;this.G=b;this.K=c;this.D=d;this.N=Array.isArray(e)?e:[e]};
Rka=function(a,b,c,d){return new Ou(a,b,{opacity:c},{opacity:d},{property:"opacity",duration:b,timing:"ease-in",delay:0})};
Tka=function(a){a=mc(a);if(""==a)return null;var b=String(a.slice(0,4)).toLowerCase();if(0==("url("<b?-1:"url("==b?0:1))return!a.endsWith(")")||1<(a?a.split("(").length-1:0)||a&&a.split(")"),null;if(0<a.indexOf("(")){if(/"|'/.test(a))return null;b=/([\-\w]+)\(/g;for(var c;c=b.exec(a);)if(!(c[1].toLowerCase()in Ska))return null}return a};
Pu=function(a,b){a=g.Ua[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null};
Uka=function(a){var b=g.Ua.CSSStyleDeclaration;return b&&b.prototype&&b.prototype[a]||null};
Vka=function(a,b,c,d){if(a)return a.apply(b,d);if(g.nf&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)};
$ka=function(a){if(!a)return Qu;var b=document.createElement("div").style;Wka(a).forEach(function(c){var d=g.Rc&&c in Xka?c:c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");hc(d,"--")||hc(d,"var")||(c=Vka(Yka,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[c])||"",c=Tka(c),null!=c&&Vka(Zka,b,b.setProperty?"setProperty":"setAttribute",[d,c]))});
return Oba(g.Yd("Output of CSS sanitizer"),b.cssText||"")};
Wka=function(a){g.$a(a)?a=g.Mb(a):(a=g.gd(a),g.Ib(a,"cssText"));return a};
g.Su=function(a){var b,c=b=0,d=!1;a=a.split(ala);for(var e=0;e<a.length;e++){var f=a[e];g.Ru.test(f)?(b++,c++):bla.test(f)?d=!0:dla.test(f)?c++:ela.test(f)&&(d=!0)}b=0==c?d?1:0:.4<b/c?-1:1;return-1==(0==b?null:b)?"rtl":"ltr"};
Tu=function(a,b,c,d,e,f,h,l){this.j=a;this.C=b;this.x1=c;this.y1=d;this.x2=e;this.y2=f;this.B=h;this.D=l};
Uu=function(a,b){if(0==b)return a.j;if(1==b)return a.B;var c=te(a.j,a.x1,b),d=te(a.x1,a.x2,b);a=te(a.x2,a.B,b);c=te(c,d,b);d=te(d,a,b);return te(c,d,b)};
fla=function(a,b){var c=(b-a.j)/(a.B-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=Uu(a,c);var l=(Uu(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=Uu(a,c);return c};
Vu=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
Wu=function(a){return(a=a.exec(g.pc()))?a[1]:""};
Xu=function(a){return 0<=g.oc(gla,a)};
g.Yu=function(a){g.J.call(this);this.K=1;this.C=[];this.D=0;this.j=[];this.B={};this.N=!!a};
hla=function(a,b,c){g.bg(function(){a.apply(b,c)})};
g.Zu=function(a){this.j=a};
$u=function(a){this.j=a};
ila=function(a){this.data=a};
jla=function(a){return void 0===a||a instanceof ila?a:new ila(a)};
av=function(a){this.j=a};
g.kla=function(a){var b=a.creation;a=a.expiration;return!!a&&a<g.lb()||!!b&&b>g.lb()};
g.bv=function(a){this.j=a};
lla=function(){};
cv=function(){};
dv=function(a){this.j=a};
ev=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.j=a};
mla=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.j=a};
gv=function(a,b){this.B=a;this.j=null;if(g.nf&&!g.Qc(9)){fv||(fv=new g.Ku);this.j=fv.get(a);this.j||(b?this.j=document.getElementById(b):(this.j=document.createElement("userdata"),this.j.addBehavior("#default#userData"),document.body.appendChild(this.j)),fv.set(a,this.j));try{this.j.load(this.B)}catch(c){this.j=null}}};
hv=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return nla[b]})};
iv=function(a){try{a.j.save(a.B)}catch(b){throw"Storage mechanism: Quota exceeded";}};
jv=function(a,b){this.B=a;this.j=b+"::"};
g.kv=function(a){var b=new ev;return b.isAvailable()?a?new jv(b,a):b:null};
lv=function(a,b){this.j=a;this.Yd=b};
mv=function(a){this.j=[];if(a)a:{if(a instanceof mv){var b=a.hp();a=a.im();if(0>=this.j.length){for(var c=this.j,d=0;d<b.length;d++)c.push(new lv(b[d],a[d]));break a}}else b=g.gd(a),a=fd(a);for(c=0;c<b.length;c++)this.yh(b[c],a[c])}};
ola=function(){mv.apply(this,arguments)};
g.nv=function(){};
pla=function(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var h=a.charCodeAt(b+1);56320===(h&64512)&&(f=65536+(f-55296<<10)+(h-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var l=new ov.sx(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(h=a.charCodeAt(b+1),56320===(h&64512)&&(f=65536+(f-55296<<10)+(h-56320),b++)),128>f?l[c++]=f:(2048>f?l[c++]=192|f>>>6:(65536>f?l[c++]=224|f>>>12:(l[c++]=240|f>>>18,l[c++]=128|f>>>12&63),l[c++]=128|f>>>
6&63),l[c++]=128|f&63);return l};
pv=function(a){for(var b=a.length;0<=--b;)a[b]=0};
qv=function(a,b,c,d,e){this.XZ=a;this.Y4=b;this.X4=c;this.L4=d;this.S6=e;this.LW=a&&a.length};
rv=function(a,b){this.vV=a;this.aA=0;this.du=b};
tv=function(a,b){a.Bg[a.pending++]=b&255;a.Bg[a.pending++]=b>>>8&255};
uv=function(a,b,c){a.Xh>16-c?(a.ij|=b<<a.Xh&65535,tv(a,a.ij),a.ij=b>>16-a.Xh,a.Xh+=c-16):(a.ij|=b<<a.Xh&65535,a.Xh+=c)};
vv=function(a,b,c){uv(a,c[2*b],c[2*b+1])};
qla=function(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1};
rla=function(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=qla(d[e]++,e))};
sla=function(a){var b;for(b=0;286>b;b++)a.Pj[2*b]=0;for(b=0;30>b;b++)a.hv[2*b]=0;for(b=0;19>b;b++)a.Mi[2*b]=0;a.Pj[512]=1;a.rr=a.eB=0;a.pm=a.matches=0};
tla=function(a){8<a.Xh?tv(a,a.ij):0<a.Xh&&(a.Bg[a.pending++]=a.ij);a.ij=0;a.Xh=0};
ula=function(a,b,c){tla(a);tv(a,c);tv(a,~c);ov.By(a.Bg,a.window,b,c,a.pending);a.pending+=c};
vla=function(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]};
wv=function(a,b,c){for(var d=a.Jg[c],e=c<<1;e<=a.Kq;){e<a.Kq&&vla(b,a.Jg[e+1],a.Jg[e],a.depth)&&e++;if(vla(b,d,a.Jg[e],a.depth))break;a.Jg[c]=a.Jg[e];c=e;e<<=1}a.Jg[c]=d};
wla=function(a,b,c){var d=0;if(0!==a.pm){do{var e=a.Bg[a.wC+2*d]<<8|a.Bg[a.wC+2*d+1];var f=a.Bg[a.HO+d];d++;if(0===e)vv(a,f,b);else{var h=xv[f];vv(a,h+256+1,b);var l=yv[h];0!==l&&(f-=zv[h],uv(a,f,l));e--;h=256>e?Av[e]:Av[256+(e>>>7)];vv(a,h,c);l=Bv[h];0!==l&&(e-=Cv[h],uv(a,e,l))}}while(d<a.pm)}vv(a,256,b)};
Dv=function(a,b){var c=b.vV,d=b.du.XZ,e=b.du.LW,f=b.du.L4,h,l=-1;a.Kq=0;a.vz=573;for(h=0;h<f;h++)0!==c[2*h]?(a.Jg[++a.Kq]=l=h,a.depth[h]=0):c[2*h+1]=0;for(;2>a.Kq;){var m=a.Jg[++a.Kq]=2>l?++l:0;c[2*m]=1;a.depth[m]=0;a.rr--;e&&(a.eB-=d[2*m+1])}b.aA=l;for(h=a.Kq>>1;1<=h;h--)wv(a,c,h);m=f;do h=a.Jg[1],a.Jg[1]=a.Jg[a.Kq--],wv(a,c,1),d=a.Jg[1],a.Jg[--a.vz]=h,a.Jg[--a.vz]=d,c[2*m]=c[2*h]+c[2*d],a.depth[m]=(a.depth[h]>=a.depth[d]?a.depth[h]:a.depth[d])+1,c[2*h+1]=c[2*d+1]=m,a.Jg[1]=m++,wv(a,c,1);while(2<=
a.Kq);a.Jg[--a.vz]=a.Jg[1];h=b.vV;m=b.aA;d=b.du.XZ;e=b.du.LW;f=b.du.Y4;var n=b.du.X4,p=b.du.S6,q,r=0;for(q=0;15>=q;q++)a.jq[q]=0;h[2*a.Jg[a.vz]+1]=0;for(b=a.vz+1;573>b;b++){var t=a.Jg[b];q=h[2*h[2*t+1]+1]+1;q>p&&(q=p,r++);h[2*t+1]=q;if(!(t>m)){a.jq[q]++;var v=0;t>=n&&(v=f[t-n]);var x=h[2*t];a.rr+=x*(q+v);e&&(a.eB+=x*(d[2*t+1]+v))}}if(0!==r){do{for(q=p-1;0===a.jq[q];)q--;a.jq[q]--;a.jq[q+1]+=2;a.jq[p]--;r-=2}while(0<r);for(q=p;0!==q;q--)for(t=a.jq[q];0!==t;)d=a.Jg[--b],d>m||(h[2*d+1]!==q&&(a.rr+=(q-
h[2*d+1])*h[2*d],h[2*d+1]=q),t--)}rla(c,l,a.jq)};
xla=function(a,b,c){var d,e=-1,f=b[1],h=0,l=7,m=4;0===f&&(l=138,m=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var n=f;f=b[2*(d+1)+1];++h<l&&n===f||(h<m?a.Mi[2*n]+=h:0!==n?(n!==e&&a.Mi[2*n]++,a.Mi[32]++):10>=h?a.Mi[34]++:a.Mi[36]++,h=0,e=n,0===f?(l=138,m=3):n===f?(l=6,m=3):(l=7,m=4))}};
yla=function(a,b,c){var d,e=-1,f=b[1],h=0,l=7,m=4;0===f&&(l=138,m=3);for(d=0;d<=c;d++){var n=f;f=b[2*(d+1)+1];if(!(++h<l&&n===f)){if(h<m){do vv(a,n,a.Mi);while(0!==--h)}else 0!==n?(n!==e&&(vv(a,n,a.Mi),h--),vv(a,16,a.Mi),uv(a,h-3,2)):10>=h?(vv(a,17,a.Mi),uv(a,h-3,3)):(vv(a,18,a.Mi),uv(a,h-11,7));h=0;e=n;0===f?(l=138,m=3):n===f?(l=6,m=3):(l=7,m=4)}}};
zla=function(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Pj[2*c])return 0;if(0!==a.Pj[18]||0!==a.Pj[20]||0!==a.Pj[26])return 1;for(c=32;256>c;c++)if(0!==a.Pj[2*c])return 1;return 0};
Ev=function(a,b,c){a.Bg[a.wC+2*a.pm]=b>>>8&255;a.Bg[a.wC+2*a.pm+1]=b&255;a.Bg[a.HO+a.pm]=c&255;a.pm++;0===b?a.Pj[2*c]++:(a.matches++,b--,a.Pj[2*(xv[c]+256+1)]++,a.hv[2*(256>b?Av[b]:Av[256+(b>>>7)])]++);return a.pm===a.OD-1};
Gv=function(a,b){a.msg=Fv[b];return b};
Hv=function(a){for(var b=a.length;0<=--b;)a[b]=0};
Iv=function(a){var b=a.state,c=b.pending;c>a.Ne&&(c=a.Ne);0!==c&&(ov.By(a.output,b.Bg,b.DE,c,a.iA),a.iA+=c,b.DE+=c,a.MR+=c,a.Ne-=c,b.pending-=c,0===b.pending&&(b.DE=0))};
Lv=function(a,b){var c=0<=a.Ik?a.Ik:-1,d=a.Fb-a.Ik,e=0;if(0<a.level){2===a.Ae.QM&&(a.Ae.QM=zla(a));Dv(a,a.xI);Dv(a,a.aH);xla(a,a.Pj,a.xI.aA);xla(a,a.hv,a.aH.aA);Dv(a,a.OU);for(e=18;3<=e&&0===a.Mi[2*Ala[e]+1];e--);a.rr+=3*(e+1)+14;var f=a.rr+3+7>>>3;var h=a.eB+3+7>>>3;h<=f&&(f=h)}else f=h=d+5;if(d+4<=f&&-1!==c)uv(a,b?1:0,3),ula(a,c,d);else if(4===a.strategy||h===f)uv(a,2+(b?1:0),3),wla(a,Jv,Kv);else{uv(a,4+(b?1:0),3);c=a.xI.aA+1;d=a.aH.aA+1;e+=1;uv(a,c-257,5);uv(a,d-1,5);uv(a,e-4,4);for(f=0;f<e;f++)uv(a,
a.Mi[2*Ala[f]+1],3);yla(a,a.Pj,c-1);yla(a,a.hv,d-1);wla(a,a.Pj,a.hv)}sla(a);b&&tla(a);a.Ik=a.Fb;Iv(a.Ae)};
Mv=function(a,b){a.Bg[a.pending++]=b};
Nv=function(a,b){a.Bg[a.pending++]=b>>>8&255;a.Bg[a.pending++]=b&255};
Bla=function(a,b){var c=a.FX,d=a.Fb,e=a.fl,f=a.UX,h=a.Fb>a.dj-262?a.Fb-(a.dj-262):0,l=a.window,m=a.uu,n=a.Lp,p=a.Fb+258,q=l[d+e-1],r=l[d+e];a.fl>=a.mW&&(c>>=2);f>a.vc&&(f=a.vc);do{var t=b;if(l[t+e]===r&&l[t+e-1]===q&&l[t]===l[d]&&l[++t]===l[d+1]){d+=2;for(t++;l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&d<p;);t=258-(p-d);d=p-258;if(t>e){a.Yz=b;e=t;if(t>=f)break;q=l[d+e-1];r=l[d+e]}}}while((b=n[b&m])>h&&0!==
--c);return e<=a.vc?e:a.vc};
Qv=function(a){var b=a.dj,c;do{var d=a.Y_-a.vc-a.Fb;if(a.Fb>=b+(b-262)){ov.By(a.window,a.window,b,b,0);a.Yz-=b;a.Fb-=b;a.Ik-=b;var e=c=a.aI;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Lp[--e],a.Lp[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.Ae.hj)break;e=a.Ae;c=a.window;f=a.Fb+a.vc;var h=e.hj;h>d&&(h=d);0===h?c=0:(e.hj-=h,ov.By(c,e.input,e.nw,h,f),1===e.state.wrap?e.Vd=Ov(e.Vd,c,h,f):2===e.state.wrap&&(e.Vd=Pv(e.Vd,c,h,f)),e.nw+=h,e.ex+=h,c=h);a.vc+=c;if(3<=a.vc+a.yh)for(d=a.Fb-a.yh,
a.He=a.window[d],a.He=(a.He<<a.Iq^a.window[d+1])&a.Hq;a.yh&&!(a.He=(a.He<<a.Iq^a.window[d+3-1])&a.Hq,a.Lp[d&a.uu]=a.head[a.He],a.head[a.He]=d,d++,a.yh--,3>a.vc+a.yh););}while(262>a.vc&&0!==a.Ae.hj)};
Rv=function(a,b){for(var c;;){if(262>a.vc){Qv(a);if(262>a.vc&&0===b)return 1;if(0===a.vc)break}c=0;3<=a.vc&&(a.He=(a.He<<a.Iq^a.window[a.Fb+3-1])&a.Hq,c=a.Lp[a.Fb&a.uu]=a.head[a.He],a.head[a.He]=a.Fb);0!==c&&a.Fb-c<=a.dj-262&&(a.Xe=Bla(a,c));if(3<=a.Xe)if(c=Ev(a,a.Fb-a.Yz,a.Xe-3),a.vc-=a.Xe,a.Xe<=a.TO&&3<=a.vc){a.Xe--;do a.Fb++,a.He=(a.He<<a.Iq^a.window[a.Fb+3-1])&a.Hq,a.Lp[a.Fb&a.uu]=a.head[a.He],a.head[a.He]=a.Fb;while(0!==--a.Xe);a.Fb++}else a.Fb+=a.Xe,a.Xe=0,a.He=a.window[a.Fb],a.He=(a.He<<a.Iq^
a.window[a.Fb+1])&a.Hq;else c=Ev(a,0,a.window[a.Fb]),a.vc--,a.Fb++;if(c&&(Lv(a,!1),0===a.Ae.Ne))return 1}a.yh=2>a.Fb?a.Fb:2;return 4===b?(Lv(a,!0),0===a.Ae.Ne?3:4):a.pm&&(Lv(a,!1),0===a.Ae.Ne)?1:2};
Sv=function(a,b){for(var c,d;;){if(262>a.vc){Qv(a);if(262>a.vc&&0===b)return 1;if(0===a.vc)break}c=0;3<=a.vc&&(a.He=(a.He<<a.Iq^a.window[a.Fb+3-1])&a.Hq,c=a.Lp[a.Fb&a.uu]=a.head[a.He],a.head[a.He]=a.Fb);a.fl=a.Xe;a.cZ=a.Yz;a.Xe=2;0!==c&&a.fl<a.TO&&a.Fb-c<=a.dj-262&&(a.Xe=Bla(a,c),5>=a.Xe&&(1===a.strategy||3===a.Xe&&4096<a.Fb-a.Yz)&&(a.Xe=2));if(3<=a.fl&&a.Xe<=a.fl){d=a.Fb+a.vc-3;c=Ev(a,a.Fb-1-a.cZ,a.fl-3);a.vc-=a.fl-1;a.fl-=2;do++a.Fb<=d&&(a.He=(a.He<<a.Iq^a.window[a.Fb+3-1])&a.Hq,a.Lp[a.Fb&a.uu]=
a.head[a.He],a.head[a.He]=a.Fb);while(0!==--a.fl);a.dw=0;a.Xe=2;a.Fb++;if(c&&(Lv(a,!1),0===a.Ae.Ne))return 1}else if(a.dw){if((c=Ev(a,0,a.window[a.Fb-1]))&&Lv(a,!1),a.Fb++,a.vc--,0===a.Ae.Ne)return 1}else a.dw=1,a.Fb++,a.vc--}a.dw&&(Ev(a,0,a.window[a.Fb-1]),a.dw=0);a.yh=2>a.Fb?a.Fb:2;return 4===b?(Lv(a,!0),0===a.Ae.Ne?3:4):a.pm&&(Lv(a,!1),0===a.Ae.Ne)?1:2};
Cla=function(a,b){for(var c,d,e,f=a.window;;){if(258>=a.vc){Qv(a);if(258>=a.vc&&0===b)return 1;if(0===a.vc)break}a.Xe=0;if(3<=a.vc&&0<a.Fb&&(d=a.Fb-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.Fb+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.Xe=258-(e-d);a.Xe>a.vc&&(a.Xe=a.vc)}3<=a.Xe?(c=Ev(a,1,a.Xe-3),a.vc-=a.Xe,a.Fb+=a.Xe,a.Xe=0):(c=Ev(a,0,a.window[a.Fb]),a.vc--,a.Fb++);if(c&&(Lv(a,!1),0===a.Ae.Ne))return 1}a.yh=0;return 4===
b?(Lv(a,!0),0===a.Ae.Ne?3:4):a.pm&&(Lv(a,!1),0===a.Ae.Ne)?1:2};
Dla=function(a,b){for(var c;;){if(0===a.vc&&(Qv(a),0===a.vc)){if(0===b)return 1;break}a.Xe=0;c=Ev(a,0,a.window[a.Fb]);a.vc--;a.Fb++;if(c&&(Lv(a,!1),0===a.Ae.Ne))return 1}a.yh=0;return 4===b?(Lv(a,!0),0===a.Ae.Ne?3:4):a.pm&&(Lv(a,!1),0===a.Ae.Ne)?1:2};
Tv=function(a,b,c,d,e){this.y5=a;this.R6=b;this.h7=c;this.Q6=d;this.func=e};
Ela=function(){this.Ae=null;this.status=0;this.Bg=null;this.wrap=this.pending=this.DE=this.xm=0;this.Od=null;this.vn=0;this.method=8;this.Nz=-1;this.uu=this.dS=this.dj=0;this.window=null;this.Y_=0;this.head=this.Lp=null;this.UX=this.mW=this.strategy=this.level=this.TO=this.FX=this.fl=this.vc=this.Yz=this.Fb=this.dw=this.cZ=this.Xe=this.Ik=this.Iq=this.Hq=this.cO=this.aI=this.He=0;this.Pj=new ov.aq(1146);this.hv=new ov.aq(122);this.Mi=new ov.aq(78);Hv(this.Pj);Hv(this.hv);Hv(this.Mi);this.OU=this.aH=
this.xI=null;this.jq=new ov.aq(16);this.Jg=new ov.aq(573);Hv(this.Jg);this.vz=this.Kq=0;this.depth=new ov.aq(573);Hv(this.depth);this.Xh=this.ij=this.yh=this.matches=this.eB=this.rr=this.wC=this.pm=this.OD=this.HO=0};
Fla=function(a,b){if(!a||!a.state||5<b||0>b)return a?Gv(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.hj||666===c.status&&4!==b)return Gv(a,0===a.Ne?-5:-2);c.Ae=a;var d=c.Nz;c.Nz=b;if(42===c.status)if(2===c.wrap)a.Vd=0,Mv(c,31),Mv(c,139),Mv(c,8),c.Od?(Mv(c,(c.Od.text?1:0)+(c.Od.jt?2:0)+(c.Od.extra?4:0)+(c.Od.name?8:0)+(c.Od.comment?16:0)),Mv(c,c.Od.time&255),Mv(c,c.Od.time>>8&255),Mv(c,c.Od.time>>16&255),Mv(c,c.Od.time>>24&255),Mv(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Mv(c,c.Od.os&
255),c.Od.extra&&c.Od.extra.length&&(Mv(c,c.Od.extra.length&255),Mv(c,c.Od.extra.length>>8&255)),c.Od.jt&&(a.Vd=Pv(a.Vd,c.Bg,c.pending,0)),c.vn=0,c.status=69):(Mv(c,0),Mv(c,0),Mv(c,0),Mv(c,0),Mv(c,0),Mv(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Mv(c,3),c.status=113);else{var e=8+(c.dS-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.Fb&&(e|=32);c.status=113;Nv(c,e+(31-e%31));0!==c.Fb&&(Nv(c,a.Vd>>>16),Nv(c,a.Vd&65535));a.Vd=1}if(69===c.status)if(c.Od.extra){for(e=
c.pending;c.vn<(c.Od.extra.length&65535)&&(c.pending!==c.xm||(c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e)),Iv(a),e=c.pending,c.pending!==c.xm));)Mv(c,c.Od.extra[c.vn]&255),c.vn++;c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e));c.vn===c.Od.extra.length&&(c.vn=0,c.status=73)}else c.status=73;if(73===c.status)if(c.Od.name){e=c.pending;do{if(c.pending===c.xm&&(c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e)),Iv(a),e=c.pending,c.pending===c.xm)){var f=1;break}f=c.vn<c.Od.name.length?
c.Od.name.charCodeAt(c.vn++)&255:0;Mv(c,f)}while(0!==f);c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e));0===f&&(c.vn=0,c.status=91)}else c.status=91;if(91===c.status)if(c.Od.comment){e=c.pending;do{if(c.pending===c.xm&&(c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e)),Iv(a),e=c.pending,c.pending===c.xm)){f=1;break}f=c.vn<c.Od.comment.length?c.Od.comment.charCodeAt(c.vn++)&255:0;Mv(c,f)}while(0!==f);c.Od.jt&&c.pending>e&&(a.Vd=Pv(a.Vd,c.Bg,c.pending-e,e));0===f&&(c.status=103)}else c.status=
103;103===c.status&&(c.Od.jt?(c.pending+2>c.xm&&Iv(a),c.pending+2<=c.xm&&(Mv(c,a.Vd&255),Mv(c,a.Vd>>8&255),a.Vd=0,c.status=113)):c.status=113);if(0!==c.pending){if(Iv(a),0===a.Ne)return c.Nz=-1,0}else if(0===a.hj&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Gv(a,-5);if(666===c.status&&0!==a.hj)return Gv(a,-5);if(0!==a.hj||0!==c.vc||0!==b&&666!==c.status){d=2===c.strategy?Dla(c,b):3===c.strategy?Cla(c,b):Uv[c.level].func(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.Ne&&(c.Nz=
-1),0;if(2===d&&(1===b?(uv(c,2,3),vv(c,256,Jv),16===c.Xh?(tv(c,c.ij),c.ij=0,c.Xh=0):8<=c.Xh&&(c.Bg[c.pending++]=c.ij&255,c.ij>>=8,c.Xh-=8)):5!==b&&(uv(c,0,3),ula(c,0,0),3===b&&(Hv(c.head),0===c.vc&&(c.Fb=0,c.Ik=0,c.yh=0))),Iv(a),0===a.Ne))return c.Nz=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Mv(c,a.Vd&255),Mv(c,a.Vd>>8&255),Mv(c,a.Vd>>16&255),Mv(c,a.Vd>>24&255),Mv(c,a.ex&255),Mv(c,a.ex>>8&255),Mv(c,a.ex>>16&255),Mv(c,a.ex>>24&255)):(Nv(c,a.Vd>>>16),Nv(c,a.Vd&65535));Iv(a);0<c.wrap&&
(c.wrap=-c.wrap);return 0!==c.pending?0:1};
Vv=function(a){if(!(this instanceof Vv))return new Vv(a);a=this.options=ov.assign({level:-1,method:8,chunkSize:16384,vu:15,Y6:8,strategy:0,to:""},a||{});a.raw&&0<a.vu?a.vu=-a.vu:a.z5&&0<a.vu&&16>a.vu&&(a.vu+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.Ae=new Gla;this.Ae.Ne=0;var b=this.Ae;var c=a.level,d=a.method,e=a.vu,f=a.Y6,h=a.strategy;if(b){var l=1;-1===c&&(c=6);0>e?(l=0,e=-e):15<e&&(l=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>h||4<h)b=Gv(b,-2);else{8===e&&(e=9);var m=
new Ela;b.state=m;m.Ae=b;m.wrap=l;m.Od=null;m.dS=e;m.dj=1<<m.dS;m.uu=m.dj-1;m.cO=f+7;m.aI=1<<m.cO;m.Hq=m.aI-1;m.Iq=~~((m.cO+3-1)/3);m.window=new ov.sx(2*m.dj);m.head=new ov.aq(m.aI);m.Lp=new ov.aq(m.dj);m.OD=1<<f+6;m.xm=4*m.OD;m.Bg=new ov.sx(m.xm);m.wC=1*m.OD;m.HO=3*m.OD;m.level=c;m.strategy=h;m.method=d;if(b&&b.state){b.ex=b.MR=0;b.QM=2;c=b.state;c.pending=0;c.DE=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.Vd=2===c.wrap?0:1;c.Nz=0;if(!Hla){d=Array(16);for(f=h=0;28>f;f++)for(zv[f]=h,e=0;e<
1<<yv[f];e++)xv[h++]=f;xv[h-1]=f;for(f=h=0;16>f;f++)for(Cv[f]=h,e=0;e<1<<Bv[f];e++)Av[h++]=f;for(h>>=7;30>f;f++)for(Cv[f]=h<<7,e=0;e<1<<Bv[f]-7;e++)Av[256+h++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Jv[2*e+1]=8,e++,d[8]++;for(;255>=e;)Jv[2*e+1]=9,e++,d[9]++;for(;279>=e;)Jv[2*e+1]=7,e++,d[7]++;for(;287>=e;)Jv[2*e+1]=8,e++,d[8]++;rla(Jv,287,d);for(e=0;30>e;e++)Kv[2*e+1]=5,Kv[2*e]=qla(e,5);Ila=new qv(Jv,yv,257,286,15);Jla=new qv(Kv,Bv,0,30,15);Kla=new qv([],Lla,0,19,7);Hla=!0}c.xI=new rv(c.Pj,Ila);
c.aH=new rv(c.hv,Jla);c.OU=new rv(c.Mi,Kla);c.ij=0;c.Xh=0;sla(c);c=0}else c=Gv(b,-2);0===c&&(b=b.state,b.Y_=2*b.dj,Hv(b.head),b.TO=Uv[b.level].R6,b.mW=Uv[b.level].y5,b.UX=Uv[b.level].h7,b.FX=Uv[b.level].Q6,b.Fb=0,b.Ik=0,b.vc=0,b.yh=0,b.Xe=b.fl=2,b.dw=0,b.He=0);b=c}}else b=-2;if(0!==b)throw Error(Fv[b]);a.header&&(b=this.Ae)&&b.state&&2===b.state.wrap&&(b.state.Od=a.header);if(a.yC){var n;"string"===typeof a.yC?n=pla(a.yC):"[object ArrayBuffer]"===Mla.call(a.yC)?n=new Uint8Array(a.yC):n=a.yC;a=this.Ae;
f=n;h=f.length;if(a&&a.state)if(n=a.state,b=n.wrap,2===b||1===b&&42!==n.status||n.vc)b=-2;else{1===b&&(a.Vd=Ov(a.Vd,f,h,0));n.wrap=0;h>=n.dj&&(0===b&&(Hv(n.head),n.Fb=0,n.Ik=0,n.yh=0),c=new ov.sx(n.dj),ov.By(c,f,h-n.dj,n.dj,0),f=c,h=n.dj);c=a.hj;d=a.nw;e=a.input;a.hj=h;a.nw=0;a.input=f;for(Qv(n);3<=n.vc;){f=n.Fb;h=n.vc-2;do n.He=(n.He<<n.Iq^n.window[f+3-1])&n.Hq,n.Lp[f&n.uu]=n.head[n.He],n.head[n.He]=f,f++;while(--h);n.Fb=f;n.vc=2;Qv(n)}n.Fb+=n.vc;n.Ik=n.Fb;n.yh=n.vc;n.vc=0;n.Xe=n.fl=2;n.dw=0;a.nw=
d;a.input=e;a.hj=c;n.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Fv[b]);this.cfb=!0}};
Nla=function(a,b){b=b||{};b.z5=!0;b=new Vv(b);b.push(a,!0);if(b.err)throw b.msg||Fv[b.err];return b.result};
Ola=function(){var a=g.Ka.apply(0,arguments);return 0===a.length?function(b){return b}:1===a.length?a[0]:a.reduce(function(b,c){return function(){return b(c.apply(null,g.pa(g.Ka.apply(0,arguments))))}})};
Pla=function(){var a=g.Ka.apply(0,arguments);return function(b){return function(c,d){function e(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");}
c=b(c,d);var f={getState:c.getState,dispatch:function(h){return e.apply(null,[h].concat(g.pa(g.Ka.apply(1,arguments))))}};
d=a.map(function(h){return h(f)});
e=Ola.apply(null,g.pa(d))(c.dispatch);return Object.assign({},c,{dispatch:e})}}};
Wv=function(){return Math.random().toString(36).substring(7).split("").join(".")};
Qla=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("undefined"===typeof c(void 0,{type:Xv}))throw Error('The slice reducer for key "'+b+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof c(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION"+Wv()}))throw Error('The slice reducer for key "'+
b+"\" returned undefined when probed with a random type. Don't try to handle '"+(Xv+'\' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'));})};
Rla=function(a,b,c,d){function e(){if(q)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return m}
function f(t){if("function"!==typeof t)throw Error("Expected the listener to be a function. Instead, received: '"+typeof t+"'");if(q)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var v=!0;p===n&&(p=n.slice());p.push(t);return function(){if(v){if(q)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
v=!1;p===n&&(p=n.slice());p.splice(p.indexOf(t),1);n=null}}}
function h(t){if("object"!==typeof t||null===t)var v=!1;else{for(v=t;null!==Object.getPrototypeOf(v);)v=Object.getPrototypeOf(v);v=Object.getPrototypeOf(t)===v}if(!v)throw Error("Actions must be plain objects. Instead, the actual type was: '"+typeof t+"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
if("undefined"===typeof t.type)throw Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if(q)throw Error("Reducers may not dispatch actions.");try{q=!0,m=l(m,t)}finally{q=!1}v=n=p;for(var x=0;x<v.length;x++)(0,v[x])();return t}
if("function"===typeof b&&"function"===typeof c||"function"===typeof c&&"function"===typeof d)throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");"function"===typeof b&&"undefined"===typeof c&&(c=b,b=void 0);if("undefined"!==typeof c){if("function"!==typeof c)throw Error("Expected the enhancer to be a function. Instead, received: '"+
typeof c+"'");return c(Rla)(a,b)}if("function"!==typeof a)throw Error("Expected the root reducer to be a function. Instead, received: '"+typeof a+"'");var l=a,m=b,n=[],p=n,q=!1;h({type:Xv});a={};var r=(a.dispatch=h,a.subscribe=f,a.getState=e,a.replaceReducer=function(t){if("function"!==typeof t)throw Error("Expected the nextReducer to be a function. Instead, received: '"+typeof t);l=t;h({type:Sla});return r},a[Tla]=function(){var t={};
return t.subscribe=function(v){function x(){v.next&&v.next(e())}
if("object"!==typeof v||null===v)throw new TypeError("Expected the observer to be an object. Instead, received: '"+typeof v+"'");x();return{unsubscribe:f(x)}},t[Tla]=function(){return this},t},a);
return r};
Ula=function(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?be(a):null:null};
g.Yv=function(a){a=Vla(a);return be(a)};
Vla=function(a){return null===a?"null":void 0===a?"undefined":a};
Zv=function(a){this.ea=M(a)};
Wla=function(a){var b=a.split(""),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
-229737709,1721207532,-2094430184,null,-601399381,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
function(d,e,f,h,l){return e(f,h,l)},
-697381162,b,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-534676613,function(d,e){d.splice(d.length,0,e)},
-2050993528,function(d){d.reverse()},
-1307654349,1964571132,349579833,1509397208,null,-637557254,-556207136,-1283352215,-1763607681,b,414767992,349579833,619999346,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
-1962789438,function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1301061638,444403266,-448017754,79718872,1865770262,1904211062,-1134315390,1406784133,700268272,1296676493,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
479017974,-758577012,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
function(d,e,f){var h=f.length;e.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},d.split(""))},
-534676613,345889762,-455504455,1918375513,1580437489,-1358868173,1692305295,316449860,-1400761945,-1184304883,function(d,e){for(d=(d%e.length+e.length)%e.length;d--;)e.unshift(e.pop())},
-683422242,-1615610327,508950484,1986842182,'(,)(]""',-1358868173,-1408460125,b,"splice",null,-168508,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
-1812672295,369636123,function(d,e,f,h,l,m){return e(h,l,m)},
1227433971,100656333,-601399381,-1250318107];c[4]=c;c[19]=c;c[67]=c;try{try{1===c[34]&&((0,c[7])((0,c[7])((0,c[46])(c[Math.pow(8,3)+2+-448],c[24],(0,c[0])()),c[42],c[65]),c[45],c[65],c[26]),1)||((0,c[7])((0,c[57])(c[25],c[4]),c[3],c[72],c[27]),c[8])(c[69],c[60]),8!=c[68]&&(((0,c[18])(c[73],c[26]),c[45])((0,c[66])(c[new Date("1969-12-31T15:30:47.000-08:30")/1E3],c[51]),c[-110*Math.pow(6,2)+4026],c[57],c[71]),c[18])(c[58],c[42]),(0,c[58])(c[28],c[16],(0,c[12])()),(0,c[54])(c[31])}catch(d){2>=c[71]&&
(-4!==c[55]||(((0,c[19])((0,c[18])(c[0],c[55]),c[26],c[21]),c[69])(c[35],c[31]),""))&&(0,c[7])((0,c[18])(c[31],c[56]),c[56],(0,c[4])(c[69],c[11]),c[69],c[5]),(-4<c[51]||((0,c[10])((0,c[17])(c[70]),c[9],c[22],c[62]),0))&&(0,c[10])((0,c[167%Math.pow(1,new Date("1969-12-31T15:00:01.000-09:00")/1E3)+60])(c[67],c[12]),c[48],c[68],c[new Date("1970-01-01T10:30:56.000+10:30")/1E3]),(-3<c[8]||((0,c[new Date("1970-01-01T04:15:10.000+04:15")/1E3])(((0,c[45])(c[12]),(0,c[34])(c[7],c[44]),c[31])(c[68],c[53]),
c[45],c[12]),0))&&(0,c[60])(c[58],c[68])<=(0,c[49])(c[69],c[27],(0,c[13])())<=((0,c[49])(c[69],c[68],(0,c[72])())<=(0,c[49])(c[69],c[new Date("1969-12-31T16:31:08.000-07:30")/1E3],(0,c[32])())),-9!==c[73]&&(8>=c[58]||((((0,c[10])(((((0,c[31])(c[68],c[43]),c[48])(c[12],c[74]),c[48])(c[68],c[25]),c[45])(c[68]),c[9],c[22],c[57]),c[75])((0,c[31])(c[22],c[5]),c[34],(0,c[9])(c[68],c[14]),c[68],c[64]),c[34])(c[27],c[40]),0))&&((((0,c[9])(c[70],c[63]),(0,c[73])(c[35],c[35-Math.pow(3,5)+239]),c[25])(c[36],
c[33]),c[76])(c[69],c[48]),c[14])(c[34],c[54],(0,c[55])())^(((0,c[25])(c[198*Math.pow(7,1)+-1382],c[33]),c[73])(c[Math.pow(5,2)- -15246+-15238],c[46]),(0,c[76])(c[33],c[44]),c[25])(c[57],c[64])}finally{10!=c[64]&&(c[58]===new Date("1970-01-01T06:14:59.000+06:15")/1E3?(0,c[39])(c[30],c[16]):(0,c[25])(c[35]))}try{1>c[70]&&(-8>c[23]?((0,c[18])((0,c[Math.pow(1,2)-3728- -3769])(c[20],c[45]),c[57],c[0],c[35],(0,c[11])()),c[53])(c[35]):(((0,c[25])(c[35]),c[68])(c[7],c[20]),c[53])(c[15])),-3!=c[26]&&(3!=
c[44]||(((((0,c[new Date("1969-12-31T17:30:37.000-06:30")/1E3])(c[23-Math.pow(5,1)+38],c[9]),c[19])(c[76],c[41],(0,c[55])()),c[20])(c[41],c[17]),c[58])((0,c[20])(c[46],c[26]),c[20],c[0],c[72]),void 0))&&(0,c[70])((0,c[58])((0,c[51])(c[56])<<(0,c[23])(c[0]),c[20],c[0],c[49]),c[Math.pow(6,5)-5-7737],(0,c[34])(c[46],c[44]),c[new Date("1970-01-01T07:01:01.000+07:00")/1E3],c[3])}catch(d){(0,c[58])((0,c[19])(c[76],c[new Date("1969-12-31T15:00:54.000-09:00")/1E3],(0,c[36])()),c[59],c[46],c[14])}finally{2!=
c[42]&&(4!=c[35]&&(((0,c[0])(c[35],c[56]),(0,c[34])(c[61],c[47]),c[37])(c[new Date("1970-01-01T05:16:15.000+05:15")/1E3],c[50])%(0,c[34])(c[61],c[57])&(0,c[38])(c[0],c[53]),"undefined")||(0,c[19])(c[61],c[54],(0,c[65])())>(0,c[51])(c[46])>=(0,c[58])((0,c[58])((0,c[51])(c[46]),c[19],c[61],c[56],(0,c[65])()),c[23],c[75]))}}catch(d){return"enhanced_except_x5kBuOb-_w8_"+a}return b.join("")};
g.$v=function(a){this.name=a};
aw=function(a){this.ea=M(a)};
bw=function(a){this.ea=M(a)};
cw=function(a){this.ea=M(a)};
dw=function(a){this.ea=M(a)};
ew=function(a){this.ea=M(a)};
fw=function(a){this.ea=M(a)};
gw=function(a){this.ea=M(a)};
hw=function(a){this.ea=M(a)};
iw=function(a){this.ea=M(a)};
jw=function(a){this.ea=M(a)};
kw=function(a){this.ea=M(a)};
lw=function(a){this.ea=M(a)};
mw=function(a){this.ea=M(a)};
nw=function(a){this.ea=M(a)};
ow=function(a){this.ea=M(a)};
pw=function(a){this.ea=M(a)};
qw=function(a){this.ea=M(a)};
rw=function(a){this.ea=M(a)};
tw=function(a){this.ea=M(a)};
uw=function(a){this.ea=M(a)};
vw=function(a){this.ea=M(a)};
ww=function(a){this.ea=M(a)};
xw=function(a){this.ea=M(a)};
yw=function(a){this.ea=M(a)};
zw=function(a){this.ea=M(a)};
Aw=function(a){this.ea=M(a)};
Bw=function(a){this.ea=M(a)};
Cw=function(a){this.ea=M(a)};
Dw=function(a){this.ea=M(a)};
Ew=function(a){this.ea=M(a)};
Fw=function(a){this.ea=M(a)};
Gw=function(a){this.ea=M(a)};
Hw=function(a){this.ea=M(a)};
Iw=function(a){this.ea=M(a)};
Jw=function(a){this.ea=M(a)};
Kw=function(a){this.ea=M(a)};
Lw=function(a){this.ea=M(a)};
Mw=function(a){this.ea=M(a)};
Nw=function(a){this.ea=M(a)};
Ow=function(a){this.ea=M(a)};
Pw=function(a){this.ea=M(a)};
Qw=function(a){this.ea=M(a)};
Rw=function(a){this.ea=M(a)};
Sw=function(a){this.ea=M(a)};
Tw=function(a){this.ea=M(a)};
Uw=function(a){this.ea=M(a)};
Vw=function(a){this.ea=M(a)};
Ww=function(a){this.ea=M(a)};
Xw=function(a){this.ea=M(a)};
Yw=function(a){this.ea=M(a)};
Zw=function(a){this.ea=M(a)};
$w=function(a){this.ea=M(a)};
ax=function(a){this.ea=M(a)};
bx=function(a){this.ea=M(a)};
cx=function(a){this.ea=M(a)};
dx=function(a){this.ea=M(a)};
ex=function(a){this.ea=M(a)};
fx=function(a){this.ea=M(a)};
gx=function(a){this.ea=M(a)};
hx=function(a){this.ea=M(a)};
ix=function(a){this.ea=M(a)};
jx=function(a){this.ea=M(a)};
nx=function(a){this.ea=M(a)};
ox=function(a){this.ea=M(a)};
px=function(a){this.ea=M(a)};
qx=function(a){this.ea=M(a)};
rx=function(a){this.ea=M(a)};
sx=function(a){this.ea=M(a)};
tx=function(a){this.ea=M(a)};
ux=function(a){this.ea=M(a)};
vx=function(a){this.ea=M(a)};
wx=function(a){this.ea=M(a)};
xx=function(a){this.ea=M(a)};
yx=function(a){this.ea=M(a)};
Xla=function(a,b){return Hj(a,1,b)};
zx=function(a){this.ea=M(a)};
Ax=function(a){this.ea=M(a)};
Bx=function(a){this.ea=M(a)};
Cx=function(a){this.ea=M(a)};
Dx=function(a){this.ea=M(a)};
Ex=function(a){this.ea=M(a)};
Fx=function(a){this.ea=M(a)};
Gx=function(a){this.ea=M(a)};
Hx=function(a){this.ea=M(a)};
Ix=function(a){this.ea=M(a)};
g.Jx=function(a){this.ea=M(a)};
Kx=function(a){this.ea=M(a)};
Lx=function(a){this.ea=M(a)};
Mx=function(a){this.ea=M(a)};
Nx=function(a){this.ea=M(a)};
Ox=function(a){this.ea=M(a)};
Px=function(a){this.ea=M(a)};
Qx=function(a){this.ea=M(a)};
Rx=function(a){this.ea=M(a)};
Sx=function(a){this.ea=M(a)};
Tx=function(a){this.ea=M(a)};
Ux=function(a){this.ea=M(a)};
Vx=function(a){this.ea=M(a)};
Wx=function(a){this.ea=M(a)};
Xx=function(a){this.ea=M(a)};
Yx=function(a){this.ea=M(a)};
Zx=function(a){this.ea=M(a)};
$x=function(a){this.ea=M(a)};
ay=function(a){this.ea=M(a)};
by=function(a){this.ea=M(a)};
cy=function(a){this.ea=M(a)};
dy=function(a){this.ea=M(a)};
ey=function(a){this.ea=M(a)};
fy=function(a){this.ea=M(a)};
gy=function(a){this.ea=M(a)};
hy=function(a){this.ea=M(a)};
iy=function(a){this.ea=M(a)};
jy=function(a){this.ea=M(a)};
ky=function(a){this.ea=M(a)};
ly=function(a){this.ea=M(a)};
my=function(a){this.ea=M(a)};
ny=function(a){this.ea=M(a)};
oy=function(a){this.ea=M(a)};
py=function(a){this.ea=M(a)};
qy=function(a){this.ea=M(a)};
ry=function(a){this.ea=M(a)};
sy=function(a){this.ea=M(a)};
ty=function(a){this.ea=M(a)};
uy=function(a){this.ea=M(a)};
vy=function(a){this.ea=M(a)};
wy=function(a){this.ea=M(a)};
yy=function(a){this.ea=M(a)};
zy=function(a){this.ea=M(a)};
Ay=function(a){this.ea=M(a)};
By=function(a){this.ea=M(a)};
Cy=function(a){this.ea=M(a)};
Dy=function(a){this.ea=M(a)};
Ey=function(a){this.ea=M(a)};
Fy=function(a){this.ea=M(a)};
Gy=function(a){this.ea=M(a)};
Hy=function(a){this.ea=M(a)};
Iy=function(a){this.ea=M(a)};
Jy=function(a){this.ea=M(a)};
Ky=function(a){this.ea=M(a)};
Ly=function(a){this.ea=M(a)};
My=function(a){this.ea=M(a)};
Ny=function(a){this.ea=M(a)};
Oy=function(a){this.ea=M(a)};
Py=function(a){this.ea=M(a)};
Qy=function(a){this.ea=M(a)};
Ry=function(a){this.ea=M(a)};
Sy=function(a){this.ea=M(a)};
Ty=function(a){this.ea=M(a)};
Uy=function(a){this.ea=M(a)};
Vy=function(a){this.ea=M(a)};
Wy=function(a){this.ea=M(a)};
Xy=function(a){this.ea=M(a)};
Yy=function(a){this.ea=M(a)};
Zy=function(a){this.ea=M(a)};
$y=function(a){this.ea=M(a)};
az=function(a){this.ea=M(a)};
bz=function(a){this.ea=M(a)};
cz=function(a){this.ea=M(a)};
dz=function(a){this.ea=M(a)};
ez=function(a){this.ea=M(a)};
fz=function(a){this.ea=M(a)};
gz=function(a){this.ea=M(a)};
hz=function(a){this.ea=M(a)};
iz=function(a){this.ea=M(a)};
jz=function(a){this.ea=M(a)};
kz=function(a){this.ea=M(a)};
lz=function(a){this.ea=M(a)};
mz=function(a){this.ea=M(a)};
nz=function(a){this.ea=M(a)};
g.oz=function(a){this.ea=M(a)};
g.pz=function(a){this.ea=M(a)};
qz=function(a){this.ea=M(a)};
rz=function(a){this.ea=M(a)};
sz=function(a){this.ea=M(a)};
tz=function(a){this.ea=M(a)};
uz=function(a){this.ea=M(a)};
vz=function(a){this.ea=M(a)};
wz=function(a){this.ea=M(a)};
xz=function(a){this.ea=M(a)};
yz=function(a){this.ea=M(a)};
zz=function(a){this.ea=M(a)};
Az=function(a){this.ea=M(a)};
Bz=function(a){this.ea=M(a)};
Cz=function(a){this.ea=M(a)};
Dz=function(a){this.ea=M(a)};
Ez=function(a){this.ea=M(a)};
Fz=function(a){this.ea=M(a)};
Gz=function(a){this.ea=M(a)};
Hz=function(a){this.ea=M(a)};
Iz=function(a){this.ea=M(a)};
Jz=function(a){this.ea=M(a)};
Kz=function(a){this.ea=M(a)};
Lz=function(a){this.ea=M(a)};
Mz=function(a){this.ea=M(a)};
Nz=function(a){this.ea=M(a)};
Oz=function(a){this.ea=M(a)};
Pz=function(a){this.ea=M(a)};
Qz=function(a){this.ea=M(a)};
Rz=function(a){this.ea=M(a)};
Sz=function(a){this.ea=M(a)};
Tz=function(a){this.ea=M(a)};
Uz=function(a){this.ea=M(a)};
Vz=function(a){this.ea=M(a)};
Wz=function(a){this.ea=M(a)};
Xz=function(a){this.ea=M(a)};
Yz=function(a){this.ea=M(a)};
Zz=function(a){this.ea=M(a)};
$z=function(a){this.ea=M(a)};
aA=function(a){this.ea=M(a)};
bA=function(a){this.ea=M(a)};
cA=function(a){this.ea=M(a)};
dA=function(a){this.ea=M(a)};
eA=function(a){this.ea=M(a)};
fA=function(a){this.ea=M(a)};
gA=function(a){this.ea=M(a)};
hA=function(a){this.ea=M(a)};
iA=function(a){this.ea=M(a)};
jA=function(a){this.ea=M(a)};
kA=function(a){this.ea=M(a)};
lA=function(a){this.ea=M(a)};
mA=function(a){this.ea=M(a)};
nA=function(a){this.ea=M(a)};
oA=function(a){this.ea=M(a)};
pA=function(a){this.ea=M(a)};
qA=function(a){this.ea=M(a)};
rA=function(a){this.ea=M(a)};
sA=function(a){this.ea=M(a)};
tA=function(a){this.ea=M(a)};
yA=function(a){this.ea=M(a)};
zA=function(a){this.ea=M(a)};
AA=function(a){this.ea=M(a)};
BA=function(a){this.ea=M(a)};
CA=function(a){this.ea=M(a)};
DA=function(a){this.ea=M(a)};
EA=function(a){this.ea=M(a)};
FA=function(a){this.ea=M(a)};
GA=function(a){this.ea=M(a)};
HA=function(a){this.ea=M(a)};
IA=function(a){this.ea=M(a)};
JA=function(a){this.ea=M(a)};
KA=function(a){this.ea=M(a)};
LA=function(a){this.ea=M(a)};
MA=function(a){this.ea=M(a)};
NA=function(a){this.ea=M(a)};
OA=function(a){this.ea=M(a)};
Yla=function(a){this.ea=M(a)};
Zla=function(a){this.ea=M(a)};
PA=function(a){this.ea=M(a)};
$la=function(a){this.ea=M(a)};
QA=function(a){this.ea=M(a)};
RA=function(a){this.ea=M(a)};
ama=function(a){this.ea=M(a)};
bma=function(a){this.ea=M(a)};
SA=function(a){this.ea=M(a)};
cma=function(a){this.ea=M(a)};
dma=function(a){this.ea=M(a)};
ema=function(a){this.ea=M(a)};
fma=function(a){this.ea=M(a)};
gma=function(a){this.ea=M(a)};
hma=function(a){this.ea=M(a)};
ima=function(a){this.ea=M(a)};
jma=function(a){this.ea=M(a)};
TA=function(a){this.ea=M(a)};
kma=function(a){this.ea=M(a)};
lma=function(a){this.ea=M(a)};
mma=function(a){this.ea=M(a)};
UA=function(a){this.ea=M(a)};
nma=function(a){this.ea=M(a)};
oma=function(a){this.ea=M(a)};
VA=function(a){this.ea=M(a)};
WA=function(a){this.ea=M(a)};
pma=function(a){this.ea=M(a)};
XA=function(a){this.ea=M(a)};
YA=function(a){this.ea=M(a)};
qma=function(a){this.ea=M(a)};
ZA=function(a){this.ea=M(a)};
$A=function(a){this.ea=M(a)};
rma=function(a){this.ea=M(a)};
aB=function(a){this.ea=M(a)};
bB=function(a){this.ea=M(a)};
sma=function(a){this.ea=M(a)};
tma=function(a){this.ea=M(a)};
cB=function(a){this.ea=M(a)};
uma=function(a){this.ea=M(a)};
vma=function(a){this.ea=M(a)};
dB=function(a){this.ea=M(a)};
wma=function(a){this.ea=M(a)};
xma=function(a){this.ea=M(a)};
yma=function(a){this.ea=M(a)};
zma=function(a){this.ea=M(a)};
Ama=function(a){this.ea=M(a)};
Bma=function(a){this.ea=M(a)};
Cma=function(a){this.ea=M(a)};
Dma=function(a){this.ea=M(a)};
Ema=function(a){this.ea=M(a)};
Fma=function(a){this.ea=M(a)};
eB=function(a){this.ea=M(a)};
Gma=function(a){this.ea=M(a)};
Hma=function(a){this.ea=M(a)};
fB=function(a){this.ea=M(a)};
Ima=function(a){this.ea=M(a)};
gB=function(a){this.ea=M(a)};
hB=function(a){this.ea=M(a)};
Jma=function(a){this.ea=M(a)};
Kma=function(a){this.ea=M(a)};
iB=function(a){this.ea=M(a)};
Lma=function(a){this.ea=M(a)};
Mma=function(a,b){N(a,tA,1,b)};
jB=function(a){this.ea=M(a)};
Nma=function(a,b){return N(a,tA,1,b)};
kB=function(a){this.ea=M(a)};
Oma=function(a,b){return N(a,tA,2,b)};
lB=function(a){this.ea=M(a)};
mB=function(a){this.ea=M(a)};
nB=function(a){this.ea=M(a)};
oB=function(a){this.ea=M(a)};
Pma=function(a){this.ea=M(a)};
pB=function(a){this.ea=M(a)};
qB=function(a){var b=new pB;return P(b,1,a)};
rB=function(a,b){return P(a,2,b)};
sB=function(a){this.ea=M(a)};
Qma=function(a){this.ea=M(a)};
tB=function(a){this.ea=M(a)};
uB=function(a,b){xj(a,68,pB,b)};
Rma=function(a){this.ea=M(a)};
Sma=function(a){this.ea=M(a)};
vB=function(a){this.ea=M(a)};
wB=function(a){this.ea=M(a)};
xB=function(a){this.ea=M(a)};
Tma=function(a){this.ea=M(a)};
yB=function(a){this.ea=M(a)};
Uma=function(a){this.ea=M(a)};
Vma=function(a){this.ea=M(a)};
Wma=function(a){this.ea=M(a)};
zB=function(a){this.ea=M(a)};
Xma=function(a){this.ea=M(a)};
Yma=function(a){this.ea=M(a)};
Zma=function(a){this.ea=M(a)};
AB=function(a){this.ea=M(a)};
$ma=function(a){this.ea=M(a)};
ana=function(a){this.ea=M(a)};
BB=function(a){this.ea=M(a)};
CB=function(a){this.ea=M(a)};
bna=function(a){this.ea=M(a)};
DB=function(a){this.ea=M(a)};
EB=function(a){this.ea=M(a)};
cna=function(a){this.ea=M(a)};
FB=function(a){this.ea=M(a,487)};
dna=function(a){this.ea=M(a)};
GB=function(a){this.ea=M(a)};
ena=function(a){this.ea=M(a)};
fna=function(){return g.Wa("yt.ads.biscotti.lastId_")||""};
gna=function(a){g.Va("yt.ads.biscotti.lastId_",a)};
IB=function(){var a=arguments;1<a.length?HB[a[0]]=a[1]:1===a.length&&Object.assign(HB,a[0])};
g.JB=function(a,b){return a in HB?HB[a]:b};
KB=function(a){var b=HB.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.LB=function(a){a=hna(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.MB=function(a,b){a=hna(a);return void 0===a&&void 0!==b?b:Number(a||0)};
ina=function(){return g.JB("EXPERIMENTS_TOKEN","")};
hna=function(a){return g.JB("EXPERIMENT_FLAGS",{})[a]};
jna=function(){for(var a=[],b=g.JB("EXPERIMENTS_FORCED_FLAGS",{}),c=g.u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=g.JB("EXPERIMENT_FLAGS",{});var e=g.u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
kna=function(a){NB.forEach(function(b){return b(a)})};
g.PB=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.OB(b)}}:a};
g.OB=function(a){var b=g.Wa("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=g.JB("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),IB("ERRORS",b));kna(a)};
QB=function(a,b,c,d,e){var f=g.Wa("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=g.JB("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),IB("ERRORS",f))};
RB=function(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var h=lna(f[0]||""),l=lna(f[1]||"");h in c?Array.isArray(c[h])?g.Pb(c[h],l):c[h]=[c[h],l]:c[h]=l}catch(q){var m=q,n=f[0],p=String(RB);m.args=[{key:n,value:f[1],query:a,method:mna==p?"unchanged":p}];nna.hasOwnProperty(n)||QB(m)}}return c};
SB=function(a){var b=[];g.Vc(a,function(c,d){var e=g.Ee(d),f;Array.isArray(c)?f=c:f=[c];g.dc(f,function(h){""==h?b.push(e):b.push(e+"="+g.Ee(h))})});
return b.join("&")};
TB=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return RB(a,"&")};
ona=function(a){a=a.split(",");return a=a.map(function(b){return TB(b)})};
g.UB=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),TB(1<a.length?a[1]:a[0])):{}};
VB=function(a,b){return pna(a,b||{},!0)};
WB=function(a,b){return pna(a,b||{},!1)};
pna=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=TB(e[1]||"");for(var f in b)if(c||!g.hd(e,f))e[f]=b[f];return g.Bl(a,e)+d};
XB=function(a){if(!b)var b=window.location.href;var c=g.ul(1,a),d=g.vl(a);c&&d?(a=a.match(tl),b=b.match(tl),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.vl(b)==d&&(Number(g.ul(4,b))||null)==(Number(g.ul(4,a))||null):!0;return a};
YB=function(a){a||(a=document.location.href);a=g.ul(1,a);return null!==a&&"https"==a};
qna=function(a){a=g.vl(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
lna=function(a){return a&&a.match(rna)?a:Fe(a)};
ZB=function(a){var b=sna;a=void 0===a?fna():a;var c=Object,d=c.assign,e=tna(b);var f=b.j;try{var h=f.screenX;var l=f.screenY}catch(F){}try{var m=f.outerWidth;var n=f.outerHeight}catch(F){}try{var p=f.innerWidth;var q=f.innerHeight}catch(F){}try{var r=f.screenLeft;var t=f.screenTop}catch(F){}try{p=f.innerWidth,q=f.innerHeight}catch(F){}try{var v=f.screen.availWidth;var x=f.screen.availTop}catch(F){}f=[r,t,h,l,v,x,m,n,p,q];h=cia(!1,b.j.top);l={};var C=void 0===C?g.Ua:C;m=new lu;"SVGElement"in C&&"createElementNS"in
C.document&&m.set(0);n=pha();n["allow-top-navigation-by-user-activation"]&&m.set(1);n["allow-popups-to-escape-sandbox"]&&m.set(2);C.crypto&&C.crypto.subtle&&m.set(3);"TextDecoder"in C&&"TextEncoder"in C&&m.set(4);C=Jka(m);b=(l.bc=C,l.bih=h.height,l.biw=h.width,l.brdim=f.join(),l.vis=Vp(b.B),l.wgl=!!Sp.WebGLRenderingContext,l);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c};
tna=function(a){var b={};b.dt=una;b.flash="0";a:{try{var c=a.j.top.location.href}catch(p){a=2;break a}a=c?c===a.B.location.href?0:1:2}b=(b.frm=a,b);try{b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Sp:d;try{var e=d.history.length}catch(p){e=0}b.u_his=e;var f;b.u_h=null==(f=Sp.screen)?void 0:f.height;var h;b.u_w=null==(h=Sp.screen)?void 0:h.width;var l;b.u_ah=null==(l=Sp.screen)?void 0:l.availHeight;var m;b.u_aw=null==(m=Sp.screen)?void 0:m.availWidth;var n;b.u_cd=null==(n=Sp.screen)?void 0:
n.colorDepth}catch(p){}return b};
wna=function(){if(!vna)return null;var a=vna();return"open"in a?a:null};
g.aC=function(a){switch($B(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
$B=function(a){return a&&"status"in a?a.status:-1};
g.bC=function(a,b){"function"===typeof a&&(a=g.PB(a));return window.setTimeout(a,b)};
g.cC=function(a,b){"function"===typeof a&&(a=g.PB(a));return window.setInterval(a,b)};
g.dC=function(a){window.clearTimeout(a)};
g.eC=function(a){window.clearInterval(a)};
yna=function(a,b){b=void 0===b?{}:b;var c=XB(a),d=g.LB("web_ajax_ignore_global_headers_if_set"),e;for(e in xna){var f=g.JB(xna[e]),h="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=g.JB("VISITOR_DATA"));!f||!c&&!fC(a,e)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===g.JB("INNERTUBE_CLIENT_NAME")&&h||(b[e]=f)}c&&g.JB("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==g.JB("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&g.JB("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in
b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||fC(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||fC(a,"X-YouTube-Time-Zone")){try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(m){}l&&(b["X-YouTube-Time-Zone"]=l)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&!fC(a,"X-YouTube-Ad-Signals")||(b["X-YouTube-Ad-Signals"]=SB(ZB()));return b};
Ana=function(a,b){var c=g.vl(a);g.LB("debug_handle_relative_url_for_query_forward_killswitch")||!c&&XB(a)&&(c=document.location.hostname);var d=sl(g.ul(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=TB(b),f={};g.dc(zna,function(h){e[h]&&(f[h]=e[h])});
return WB(a,f)};
fC=function(a){return g.vl(a)?!1:!0};
g.gC=function(a,b){var c=b.format||"JSON";a=Bna(a,b);var d=Cna(a,b),e=!1,f=Dna(a,function(m){if(!e){e=!0;l&&g.dC(l);var n=g.aC(m),p=null,q=400<=m.status&&500>m.status,r=500<=m.status&&600>m.status;if(n||q||r)p=Mna(a,c,m,b.convertToSafeHtml);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(p&&p.return_code,10);break a;case "RAW":n=!0;break a}n=!!p}p=p||{};q=b.context||g.Ua;n?b.onSuccess&&b.onSuccess.call(q,m,p):b.onError&&b.onError.call(q,m,p);b.onFinish&&b.onFinish.call(q,m,
p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var h=b.onTimeout;var l=g.bC(function(){e||(e=!0,f.abort(),g.dC(l),h.call(b.context||g.Ua,f))},d)}return f};
Bna=function(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.JB("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=VB(a,b);return a};
Cna=function(a,b){var c=g.JB("XSRF_FIELD_NAME"),d=g.JB("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,h=g.JB("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.excludeXsrf||g.vl(a)&&!b.withCredentials&&g.vl(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.postParams&&b.postParams[h]||(f||(f={}),f[c]=d);(g.LB("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=TB(e),g.sd(e,f),e=b.postBodyFormat&&
"JSON"==b.postBodyFormat?JSON.stringify(e):g.Al(e));f=e||f&&!g.kd(f);!Nna&&f&&"POST"!=b.method&&(Nna=!0,g.OB(Error("AJAX request with postData should use POST")));return e};
Mna=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,QB(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ona(a):null)e={},g.dc(a.getElementsByTagName("*"),function(h){e[h.tagName]=Pna(h)})}d&&Qna(e);
return e};
Qna=function(a){if(g.ab(a))for(var b in a)"html_content"==b||Eaa(b,"_html")?a[b]=g.oe(a[b]):Qna(a[b])};
Ona=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Pna=function(a){var b="";g.dc(a.childNodes,function(c){b+=c.nodeValue});
return b};
Rna=function(a,b){b.method="POST";b.postParams||(b.postParams={});return g.gC(a,b)};
Dna=function(a,b,c,d,e,f,h,l){function m(){4==(n&&"readyState"in n?n.readyState:0)&&b&&g.PB(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;l=void 0===l?!1:l;var n=wna();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",m,!1):n.onreadystatechange=m;g.LB("debug_forward_web_query_parameters")&&(a=Ana(a,window.location.search));n.open(c,a,!0);f&&(n.responseType=f);h&&(n.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=yna(a,e))for(var p in e)n.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");l&&"setAttributionReporting"in XMLHttpRequest.prototype&&n.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});n.send(d);return n};
iC=function(a,b){var c=g.qd(b),d;return(new g.dg(function(e,f){c.onSuccess=function(h){g.aC(h)?e(new Sna(h)):f(new hC("Request failed, status="+$B(h),"net.badstatus",h))};
c.onError=function(h){f(new hC("Unknown request error","net.unknown",h))};
c.onTimeout=function(h){f(new hC("Request timed out","net.timeout",h))};
d=g.gC(a,c)})).zk(function(e){e instanceof mg&&d.abort();
return gg(e)})};
g.jC=function(a,b,c,d){function e(l,m,n){return l.zk(function(p){if(0>=m||403===$B(p.xhr))return gg(new hC("Request retried too many times","net.retryexhausted",p.xhr,p));p=Math.pow(2,c-m+1)*n;var q=0<h?Math.min(h,p):p;return f(n).then(function(){return e(iC(a,b),m-1,q)})})}
function f(l){return new g.dg(function(m){setTimeout(m,l)})}
var h=void 0===h?-1:h;return e(iC(a,b),c-1,d)};
hC=function(a,b,c){zb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
Sna=function(a){this.xhr=a};
kC=function(a){this.j=void 0===a?null:a;this.B=0;this.Yd=null};
lC=function(a){var b=new kC;a=void 0===a?null:a;b.B=2;b.Yd=void 0===a?null:a;return b};
mC=function(a){var b=new kC;a=void 0===a?null:a;b.B=1;b.Yd=void 0===a?null:a;return b};
g.pC=function(a,b,c,d,e){nC||oC.set(""+a,b,{DI:c,path:"/",domain:void 0===d?"youtube.com":d,T$:void 0===e?!1:e})};
g.qC=function(a,b){if(!nC)return oC.get(""+a,b)};
g.Tna=function(a,b,c){nC||oC.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
Una=function(){if(!oC.isEnabled())return!1;if(!oC.isEmpty())return!0;oC.set("TESTCOOKIESENABLED","1",{DI:60});if("1"!==oC.get("TESTCOOKIESENABLED"))return!1;oC.remove("TESTCOOKIESENABLED");return!0};
g.T=function(a,b){if(a)return a[b.name]};
Vna=function(a){var b=g.JB("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(wl(a)));return a};
Wna=function(a,b){var c={};g.JB("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==b?0:b.Authorization)||(c.key=g.JB("INNERTUBE_API_KEY"));g.LB("json_condensed_response")&&(c.prettyPrint="false");return a=WB(a,c)};
Xna=function(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:XB(a)?"same-origin":"cors",credentials:XB(a)?"same-origin":"include"};b={};for(var d=g.u(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a};
Yna=function(){var a=/Chrome\/(\d+)/.exec(g.pc());return a?parseFloat(a[1]):NaN};
Zna=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.pc());if(!a)return NaN;var b=[];a=g.u(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
sC=function(){return g.rC("android")&&g.rC("chrome")&&!(g.rC("trident/")||g.rC("edge/"))&&!g.rC("cobalt")};
$na=function(){return g.rC("armv7")||g.rC("aarch64")||g.rC("android")};
g.tC=function(){return g.rC("cobalt")};
uC=function(){return g.rC("cobalt")&&g.rC("appletv")};
aoa=function(){return g.rC("(ps3; leanback shell)")||g.rC("ps3")&&g.tC()};
boa=function(){return g.rC("(ps4; leanback shell)")||g.rC("ps4")&&g.tC()};
g.coa=function(){return g.tC()&&(g.rC("ps4 vr")||g.rC("ps4 pro vr"))};
vC=function(){var a=/WebKit\/([0-9]+)/.exec(g.pc());return!!(a&&600<=parseInt(a[1],10))};
doa=function(){var a=/WebKit\/([0-9]+)/.exec(g.pc());return!!(a&&602<=parseInt(a[1],10))};
eoa=function(){return g.rC("iemobile")||g.rC("windows phone")&&g.rC("edge")};
yC=function(){return(wC||xC)&&g.rC("applewebkit")&&!g.rC("version")&&(!g.rC("safari")||g.rC("gsa/"))};
AC=function(){return g.zC&&g.rC("version/")};
foa=function(){return g.rC("smart-tv")&&g.rC("samsung")};
g.rC=function(a){var b=g.pc();return b?0<=b.toLowerCase().indexOf(a):!1};
goa=function(){return Pea()||yC()||AC()?!0:g.JB("EOM_VISITOR_DATA")?!1:!0};
BC=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
CC=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
DC=function(a,b){return void 0===b||null===b?a:Number(b)};
EC=function(a,b){return void 0===b||null===b?a:b.toString()};
ioa=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}return a&&(b=a.match(hoa))&&(a=Number(b[2]),b=Number(b[1]),!isNaN(a)&&!isNaN(b)&&0<a)?b/a:NaN};
FC=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
koa=function(a){return"EMBEDDED_PLAYER_MODE_PFL"===joa(a,!1)};
g.GC=function(a){return"EMBEDDED_PLAYER_LITE_MODE_FIXED_PLAYBACK_LIMIT"===a||"EMBEDDED_PLAYER_LITE_MODE_DYNAMIC_PLAYBACK_LIMIT"===a?!0:!1};
joa=function(a,b){b=(void 0===b?0:b)?"EMBEDDED_PLAYER_MODE_DEFAULT":"EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(d){return b}return c?CC(b,c.embeddedPlayerMode,loa):b};
moa=function(a){zb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof HC;this.isTimeout=a instanceof hC&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof mg};
HC=function(){zb.call(this,"Biscotti ID is missing from server")};
noa=function(){if(g.LB("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!goa())return Error("User has not consented - not fetching biscotti id.");var a=g.JB("PLAYER_VARS",{});if("1"==g.od(a,"privembed",!1))return Error("Biscotti ID is not available in private embed mode");if(koa(a))return Error("Biscotti id fetching has been disabled for pfl.")};
roa=function(){var a=noa();if(void 0!==a)return gg(a);IC||(IC=iC("//googleads.g.doubleclick.net/pagead/id",ooa).then(poa).zk(function(b){return qoa(2,b)}));
return IC};
poa=function(a){a=a.xhr.responseText;if(!hc(a,")]}'"))throw new HC;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new HC;a=a.id;gna(a);IC=mC(a);soa(18E5,2);return a};
qoa=function(a,b){b=new moa(b);gna("");IC=lC(b);0<a&&soa(12E4,a-1);throw b;};
soa=function(a,b){g.bC(function(){iC("//googleads.g.doubleclick.net/pagead/id",ooa).then(poa,function(c){return qoa(b,c)}).zk(g.Kd)},a)};
toa=function(){try{var a=g.Wa("yt.ads.biscotti.getId_");return a?a():roa()}catch(b){return gg(b)}};
xoa=function(a,b,c){a&&(a.dataset?a.dataset[uoa(b)]=String(c):$fa([new un(voa[0].toLowerCase(),woa)],a,"data-"+b,c.toString()))};
yoa=function(a){return a?a.dataset?a.dataset[uoa("loaded")]:a.getAttribute("data-loaded"):null};
uoa=function(a){return zoa[a]||(zoa[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Boa=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Aoa+"VisibilityState";if(b in a)return a[b]};
JC=function(a,b){var c;es(a,function(d){c=b[d];return!!c});
return c};
Coa=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
MC=function(a){var b;g.KC()?LC()==a&&(b=document):b=a;return b&&(a=JC(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
Doa=function(a){return g.Eb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Eoa=function(){var a=document;return g.Eb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
g.KC=function(){return!!JC(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
LC=function(a){a=void 0===a?!1:a;var b=JC(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
NC=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Foa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.j=a.pageX;this.B=a.pageY}}catch(e){}};
Goa=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.j=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.B=a.clientY+b}};
Hoa=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jd(OC,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.ab(e[4])&&g.ab(d)&&g.pd(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.PC=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Hoa(a,b,c,d);if(e)return e;e=++Ioa.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new NC(l);if(!If(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new NC(l);
l.currentTarget=a;return c.call(a,l)};
h=g.PB(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Joa()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);OC[e]=[a,b,c,h,d];return e};
Koa=function(a,b){var c=document.body||document;return g.PC(c,"click",function(d){var e=If(d.target,function(f){return f===c||b(f)},!0);
e&&e!==c&&!e.disabled&&(d.currentTarget=e,a.call(e,d))})};
g.QC=function(a){a&&("string"==typeof a&&(a=[a]),g.dc(a,function(b){if(b in OC){var c=OC[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Joa()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete OC[b]}}))};
RC=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;b&&b.length?a=b[0]:(a=a||window.event,a=a.target||a.srcElement,3==a.nodeType&&(a=a.parentNode));return a};
Loa=function(a){return Koa(a,function(b){return g.Au(b,"ytp-ad-has-logging-urls")})};
Moa=function(a){for(var b in OC)OC[b][0]==a&&g.QC(b)};
SC=function(a){this.N=a;this.j=null;this.D=0;this.K=null;this.G=0;this.B=[];for(a=0;4>a;a++)this.B.push(0);this.C=0;this.qa=g.PC(window,"mousemove",(0,g.ib)(this.Y,this));this.Z=g.cC((0,g.ib)(this.ma,this),25)};
TC=function(a){g.J.call(this);this.N=[];this.ib=a||this};
UC=function(a,b,c,d){for(var e=0;e<c.length;e++)a.T(b,c[e],d)};
g.VC=function(a,b){for(;a.N.length;){var c=a.N.pop(),d=void 0;b&&Noa()&&(d={passive:!0});c.target.removeEventListener(c.name,c.callback,d)}};
WC=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.qd(b);this.assets=a.assets||{};this.attrs=a.attrs||g.qd(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
Ooa=function(a){a instanceof WC||(a=new WC(a));return a};
g.YC=function(a,b,c){var d=c&&0<c?c:0;c=d?Date.now()+1E3*d:0;if((d=d?(0,g.XC)():Poa())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.ZC=function(a){var b=Poa(),c=(0,g.XC)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
Qoa=function(){var a=(0,g.XC)();if(a&&(a=a.B("yt-player-quality")))return a.creation};
g.$C=function(a){try{var b=Poa(),c=(0,g.XC)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.aD=function(){return g.ZC("yt-remote-session-screen-id")};
bD=function(){this.d_=!0};
Roa=function(){bD.instance||(bD.instance=new bD);return bD.instance};
Soa=function(a){var b=this;this.B=void 0;this.j=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.B=c});
a.addEventListener("appinstalled",function(){b.j=!0},{once:!0})};
Toa=function(){if(!g.Ua.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return g.Ua.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":g.Ua.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":g.Ua.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":g.Ua.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}};
Uoa=function(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}};
Voa=function(){this.j=g.JB("ALT_PREF_COOKIE_NAME","PREF");this.B=g.JB("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=g.qC(this.j);a&&this.parse(a)};
g.cD=function(){Woa||(Woa=new Voa);return Woa};
g.dD=function(a,b){return!!((Xoa("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
Yoa=function(a,b){var c="f"+(Math.floor(a/31)+1);a=1<<a%31;var d=Xoa(c)||0;d=b?d|a:d&~a;0===d?delete eD[c]:(b=d.toString(16),eD[c]=b.toString())};
Zoa=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
$oa=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
Xoa=function(a){a=void 0!==eD[a]?eD[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
apa=function(){var a=g.Ua.navigator;return a?a.connection:void 0};
cpa=function(){var a=apa();if(a){var b=bpa[a.type||"unknown"]||"CONN_UNKNOWN";a=bpa[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}};
epa=function(){var a=apa();if(null!=a&&a.effectiveType)return dpa.hasOwnProperty(a.effectiveType)?dpa[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"};
g.fD=function(a){var b=g.Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(g.pa(b))};
g.hD=function(){try{return g.gD(),!0}catch(a){return!1}};
g.gD=function(a){if(void 0!==g.JB("DATASYNC_ID"))return g.JB("DATASYNC_ID");throw new g.fD("Datasync ID not set",void 0===a?"unknown":a);};
iD=function(){this.j=new WeakMap};
g.kD=function(a,b,c){return jD(b,0,c)};
fpa=function(a){var b=g.Wa("yt.scheduler.instance.addImmediateJob");b?b(a):a()};
lD=function(){iD.apply(this,arguments)};
g.mD=function(){lD.instance||(lD.instance=new lD);return lD.instance};
g.nD=function(){return!!g.Wa("yt.scheduler.instance")};
jD=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=g.Wa("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.bC(a,c||0)};
oD=function(a){var b=g.Wa("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
pD=function(a){var b;(b=g.kv(a))||(a=new gv(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.j=(a=b)?new av(a):null;this.B=document.domain||window.location.hostname};
hpa=function(){var a;return null==(a=gpa())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)};
kpa=function(){var a={};for(qD=new ipa(void 0===a.handleError?jpa:a.handleError,void 0===a.logEvent?g.rD:a.logEvent);0<sD.length;)switch(a=sD.shift(),a.type){case "ERROR":qD.RD(a.payload);break;case "EVENT":qD.logEvent(a.eventType,a.payload)}};
uD=function(a){tD||(qD?qD.RD(a):(sD.push({type:"ERROR",payload:a}),10<sD.length&&sD.shift()))};
vD=function(a,b){tD||(qD?qD.logEvent(a,b):(sD.push({type:"EVENT",eventType:a,payload:b}),10<sD.length&&sD.shift()))};
wD=function(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");};
xD=function(a){return a.substr(0,a.indexOf(":"))||a};
g.yD=function(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?lpa[a]:c;d=void 0===d?mpa[a]:d;e=void 0===e?npa[a]:e;g.fD.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.j=e;Object.setPrototypeOf(this,g.yD.prototype)};
opa=function(a,b){g.yD.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},lpa.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,opa.prototype)};
zD=function(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zD.prototype)};
qpa=function(a,b,c,d){b=xD(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof g.yD)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new g.yD("QUOTA_EXCEEDED",a);if(g.AD&&"UnknownError"===e.name)return new g.yD("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zD)return new g.yD("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&ppa.some(function(f){return e.message.includes(f)}))return new g.yD("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new g.yD("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",uJ:e.name})];e.level="WARNING";return e};
g.BD=function(a,b,c){var d=hpa();return new g.yD("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})};
rpa=function(a){if(!a)throw Error();throw a;};
spa=function(a){return a};
CD=function(a){this.j=a};
g.DD=function(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=g.u(d.B);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=g.u(d.j);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.j=[];this.B=[];a=a.j;try{a(c,b)}catch(e){b(e)}};
upa=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof g.DD?tpa(a,b,f,d,e):d(f)}catch(h){e(h)}};
vpa=function(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof g.DD?tpa(a,b,f,d,e):d(f)}catch(h){e(h)}};
tpa=function(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof g.DD?tpa(a,b,f,d,e):d(f)},function(f){e(f)})};
wpa=function(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(h){}}
a.addEventListener("success",e);a.addEventListener("error",d)};
xpa=function(a){return new Promise(function(b,c){wpa(a,b,c)})};
g.ED=function(a){return new g.DD(new CD(function(b,c){wpa(a,b,c)}))};
ypa=function(a,b){return new g.DD(new CD(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(h){a=h;e()},d):c()}
e()}))};
zpa=function(a,b){this.request=a;this.cursor=b};
FD=function(a){return g.ED(a).then(function(b){return b?new zpa(a,b):null})};
Apa=function(a,b){this.j=a;this.options=b;this.transactionCount=0;this.C=Math.round((0,g.GD)());this.B=!1};
g.HD=function(a,b,c){a=a.j.createObjectStore(b,c);return new Bpa(a)};
ID=function(a,b){a.j.objectStoreNames.contains(b)&&a.j.deleteObjectStore(b)};
g.LD=function(a,b,c){return g.JD(a,[b],{mode:"readwrite",hc:!0},function(d){return g.KD(d.objectStore(b),c)})};
g.JD=function(a,b,c,d){var e,f,h,l,m,n,p,q,r,t,v,x;return g.I(function(C){switch(C.j){case 1:var F={mode:"readonly",hc:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.hc?3:1;h=0;case 2:if(l){C.La(4);break}h++;m=Math.round((0,g.GD)());g.Ca(C,5);n=a.j.transaction(b,e.mode);F=new MD(n);F=Cpa(F,d);return g.z(C,F,7);case 7:return p=C.B,q=Math.round((0,g.GD)()),Dpa(a,m,q,h,void 0,b.join(),e),C.return(p);case 5:r=g.Fa(C);t=Math.round((0,g.GD)());
v=qpa(r,a.j.name,b.join(),a.j.version);if((x=v instanceof g.yD&&!v.j)||h>=f)Dpa(a,m,t,h,v,b.join(),e),l=v;C.La(2);break;case 4:return C.return(Promise.reject(l))}})};
Dpa=function(a,b,c,d,e,f,h){b=c-b;e?(e instanceof g.yD&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vD("QUOTA_EXCEEDED",{dbName:xD(a.j.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:h.mode}),e instanceof g.yD&&"UNKNOWN_ABORT"===e.type&&(c-=a.C,0>c&&c>=Math.pow(2,31)&&(c=0),vD("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.B=!0),Epa(a,!1,d,f,b,h.tag),uD(e)):Epa(a,!0,d,
f,b,h.tag)};
Epa=function(a,b,c,d,e,f){vD("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.B,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})};
Bpa=function(a){this.j=a};
g.ND=function(a,b,c){a.j.createIndex(b,c,{unique:!1})};
Fpa=function(a,b){return g.OD(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})};
g.Hpa=function(a,b){return"getAll"in IDBObjectStore.prototype?g.ED(a.j.getAll(b,void 0)):Gpa(a,b)};
Gpa=function(a,b){var c=[];return g.OD(a,{query:b},function(d){c.push(d.getValue());return d.continue()}).then(function(){return c})};
Jpa=function(a){return"getAllKeys"in IDBObjectStore.prototype?g.ED(a.j.getAllKeys(void 0,void 0)):Ipa(a)};
Ipa=function(a){var b=[];return g.Kpa(a,{query:void 0},function(c){b.push(c.OH());return c.continue()}).then(function(){return b})};
g.KD=function(a,b,c){return g.ED(a.j.put(b,c))};
g.OD=function(a,b,c){a=a.j.openCursor(b.query,b.direction);return PD(a).then(function(d){return ypa(d,c)})};
g.Kpa=function(a,b,c){var d=b.query;b=b.direction;a="openKeyCursor"in IDBObjectStore.prototype?a.j.openKeyCursor(d,b):a.j.openCursor(d,b);return FD(a).then(function(e){return ypa(e,c)})};
MD=function(a){var b=this;this.j=a;this.C=new Map;this.B=!1;this.done=new Promise(function(c,d){b.j.addEventListener("complete",function(){c()});
b.j.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.j.error)});
b.j.addEventListener("abort",function(){var e=b.j.error;if(e)d(e);else if(!b.B){e=g.yD;for(var f=b.j.objectStoreNames,h=[],l=0;l<f.length;l++){var m=f.item(l);if(null===m)throw Error("Invariant: item in DOMStringList is null");h.push(m)}e=new e("UNKNOWN_ABORT",{objectStoreNames:h.join(),dbName:b.j.db.name,mode:b.j.mode});d(e)}})})};
Cpa=function(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return g.u(d).next().value})};
Lpa=function(a){this.j=a};
g.QD=function(a,b,c){a=a.j.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return PD(a).then(function(d){return ypa(d,c)})};
Mpa=function(a,b){this.request=a;this.cursor=b};
PD=function(a){return g.ED(a).then(function(b){return b?new Mpa(a,b):null})};
Npa=function(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Apa(h.result,{closed:q}));return r}
var h=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var l=c.blocked,m=c.blocking,n=c.Baa,p=c.upgrade,q=c.closed,r;h.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===h.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&vD("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:xD(a)});var v=f(),x=new MD(h.transaction);
p&&p(v,function(C){return t.oldVersion<C&&t.newVersion>=C},x);
x.done.catch(function(C){e(C)})}catch(C){e(C)}});
h.addEventListener("success",function(){var t=h.result;m&&t.addEventListener("versionchange",function(){m(f())});
t.addEventListener("close",function(){vD("IDB_UNEXPECTEDLY_CLOSED",{dbName:xD(a),dbVersion:t.version});n&&n()});
d(f())});
h.addEventListener("error",function(){e(h.error)});
l&&h.addEventListener("blocked",function(){l()})})};
Opa=function(a,b,c){c=void 0===c?{}:c;return Npa(a,b,c)};
RD=function(a,b){b=void 0===b?{}:b;var c,d,e,f;return g.I(function(h){if(1==h.j)return g.Ca(h,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),g.z(h,xpa(c),4);
if(2!=h.j)return g.Da(h,0);f=g.Fa(h);throw qpa(f,a,"",-1);})};
SD=function(a,b){this.name=a;this.options=b;this.C=!0;this.G=this.D=0};
Ppa=function(a,b){return new g.yD("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})};
g.TD=function(a,b){if(!b)throw g.BD("openWithToken",xD(a.name));return a.open()};
Rpa=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.z(d,g.TD(Qpa,b),2);c=d.B;return d.return(g.JD(c,["databases"],{hc:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return g.KD(f,a).then(function(){})})}))})};
UD=function(a,b){var c;return g.I(function(d){if(1==d.j)return a?g.z(d,g.TD(Qpa,b),2):d.return();c=d.B;return d.return(c.delete("databases",a))})};
Spa=function(a,b){var c,d;return g.I(function(e){return 1==e.j?(c=[],g.z(e,g.TD(Qpa,b),2)):3!=e.j?(d=e.B,g.z(e,g.JD(d,["databases"],{hc:!0,mode:"readonly"},function(f){c.length=0;return g.OD(f.objectStore("databases"),{},function(h){a(h.getValue())&&c.push(h.getValue());return h.continue()})}),3)):e.return(c)})};
Tpa=function(a,b){return Spa(function(c){return c.publicName===a&&void 0!==c.userIdentifier},b)};
Vpa=function(){var a,b,c,d;return g.I(function(e){switch(e.j){case 1:a=hpa();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);if(VD&&vC()&&!doa()||g.WD)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(f){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);g.Ca(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};
return g.z(e,Rpa(d,Upa),4);case 4:return g.z(e,UD("yt-idb-test-do-not-use",Upa),5);case 5:return e.return(!0);case 2:return g.Fa(e),e.return(!1)}})};
Xpa=function(){if(void 0!==Wpa)return Wpa;tD=!0;return Wpa=Vpa().then(function(a){tD=!1;var b;if(null!=(b=gpa())&&b.j){var c;b={hasSucceededOnce:(null==(c=hpa())?void 0:c.hasSucceededOnce)||a};var d;null==(d=gpa())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})};
XD=function(){return g.Wa("ytglobal.idbToken_")||void 0};
g.YD=function(){var a=XD();return a?Promise.resolve(a):Xpa().then(function(b){(b=b?Upa:void 0)&&g.Va("ytglobal.idbToken_",b);return b})};
Ypa=function(a){if(!g.hD())throw a=new g.yD("AUTH_INVALID",{dbName:a}),uD(a),a;var b=g.gD();return{actualName:a+":"+b,publicName:a,userIdentifier:b}};
Zpa=function(a,b,c,d){var e,f,h,l,m,n;return g.I(function(p){switch(p.j){case 1:return f=null!=(e=Error().stack)?e:"",g.z(p,g.YD(),2);case 2:h=p.B;if(!h)throw l=g.BD("openDbImpl",a,b),g.LB("ytidb_async_stack_killswitch")||(l.stack=l.stack+"\n"+f.substring(f.indexOf("\n")+1)),uD(l),l;wD(a);m=c?{actualName:a,publicName:a,userIdentifier:void 0}:Ypa(a);g.Ca(p,3);return g.z(p,Rpa(m,h),5);case 5:return g.z(p,Opa(m.actualName,b,d),6);case 6:return p.return(p.B);case 3:return n=g.Fa(p),g.Ca(p,7),g.z(p,UD(m.actualName,
h),9);case 9:g.Da(p,8);break;case 7:g.Fa(p);case 8:throw n;}})};
$pa=function(a,b,c){c=void 0===c?{}:c;return Zpa(a,b,!1,c)};
aqa=function(a,b,c){c=void 0===c?{}:c;return Zpa(a,b,!0,c)};
bqa=function(a,b){b=void 0===b?{}:b;var c,d;return g.I(function(e){if(1==e.j)return g.z(e,g.YD(),2);if(3!=e.j){c=e.B;if(!c)return e.return();wD(a);d=Ypa(a);return g.z(e,RD(d.actualName,b),3)}return g.z(e,UD(d.actualName,c),0)})};
cqa=function(a,b,c){a=a.map(function(d){return g.I(function(e){return 1==e.j?g.z(e,RD(d.actualName,b),2):g.z(e,UD(d.actualName,c),0)})});
return Promise.all(a).then(function(){})};
dqa=function(a){var b=void 0===b?{}:b;var c,d;return g.I(function(e){if(1==e.j)return g.z(e,g.YD(),2);if(3!=e.j){c=e.B;if(!c)return e.return();wD(a);return g.z(e,Tpa(a,c),3)}d=e.B;return g.z(e,cqa(d,b,c),0)})};
eqa=function(a,b){b=void 0===b?{}:b;var c;return g.I(function(d){if(1==d.j)return g.z(d,g.YD(),2);if(3!=d.j){c=d.B;if(!c)return d.return();wD(a);return g.z(d,RD(a,b),3)}return g.z(d,UD(a,c),0)})};
ZD=function(a,b){SD.call(this,a,b);this.options=b;wD(a)};
fqa=function(a,b){var c;return function(){c||(c=new ZD(a,b));return c}};
g.$D=function(a,b){return fqa(a,b)};
aE=function(a){return g.TD(gqa(),a)};
hqa=function(a,b,c,d){var e,f,h;return g.I(function(l){switch(l.j){case 1:return e={config:a,hashData:b,timestamp:void 0!==d?d:(0,g.GD)()},g.z(l,aE(c),2);case 2:return f=l.B,g.z(l,f.clear("hotConfigStore"),3);case 3:return g.z(l,g.LD(f,"hotConfigStore",e),4);case 4:return h=l.B,l.return(h)}})};
iqa=function(a,b,c,d,e){var f,h,l;return g.I(function(m){switch(m.j){case 1:return f={config:a,hashData:b,configData:c,timestamp:void 0!==e?e:(0,g.GD)()},g.z(m,aE(d),2);case 2:return h=m.B,g.z(m,h.clear("coldConfigStore"),3);case 3:return g.z(m,g.LD(h,"coldConfigStore",f),4);case 4:return l=m.B,m.return(l)}})};
jqa=function(a){var b,c;return g.I(function(d){return 1==d.j?g.z(d,aE(a),2):3!=d.j?(b=d.B,c=void 0,g.z(d,g.JD(b,["coldConfigStore"],{mode:"readwrite",hc:!0},function(e){return g.QD(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
kqa=function(a){var b,c;return g.I(function(d){return 1==d.j?g.z(d,aE(a),2):3!=d.j?(b=d.B,c=void 0,g.z(d,g.JD(b,["hotConfigStore"],{mode:"readwrite",hc:!0},function(e){return g.QD(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
lqa=function(){return g.I(function(a){return g.z(a,dqa("ytGcfConfig"),0)})};
mqa=function(){g.J.call(this);this.B=[];this.j=[];var a=g.Wa("yt.gcf.config.hotUpdateCallbacks");a?(this.B=[].concat(g.pa(a)),this.j=a):(this.j=[],g.Va("yt.gcf.config.hotUpdateCallbacks",this.j))};
fE=function(){var a=this;this.G=!1;this.C=this.D=0;this.K=new mqa;this.Ud={Fgb:function(){a.G=!0},
Qfb:function(){return a.j},
Ghb:function(b){bE(a,b)},
Cr:function(b){a.Cr(b)},
Chb:function(b){nqa(a,b)},
m5:function(){return a.coldHashData},
p5:function(){return a.hotHashData},
egb:function(){return a.B},
Yfb:function(){return cE()},
agb:function(){return dE()},
Zfb:function(){return g.Wa("yt.gcf.config.coldHashData")},
bgb:function(){return g.Wa("yt.gcf.config.hotHashData")},
Vhb:function(){oqa(a)},
vhb:function(){a.Cr(void 0);eE(a);delete fE.instance},
Ehb:function(b){a.C=b},
Vfb:function(){return a.C}}};
pqa=function(){if(!fE.instance){var a=new fE;fE.instance=a}return fE.instance};
sqa=function(a){var b;g.I(function(c){if(1==c.j)return g.LB("start_client_gcf")||g.LB("delete_gcf_config_db")?g.LB("start_client_gcf")?g.z(c,g.YD(),3):c.La(2):c.return();2!=c.j&&((b=c.B)&&g.hD()&&!g.LB("delete_gcf_config_db")?(a.G=!0,oqa(a)):(qqa(a),rqa(a)));return g.LB("delete_gcf_config_db")?g.z(c,lqa(),0):c.La(0)})};
gE=function(){var a;return null!=(a=dE())?a:null};
tqa=function(a){var b,c,d,e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.B)return l.return(dE());if(!a.G)return b=g.BD("getHotConfig IDB not initialized"),QB(b),l.return(Promise.reject(b));c=XD();d=g.JB("TIME_CREATED_MS");if(!c){e=g.BD("getHotConfig token error");QB(e);l.La(2);break}return g.z(l,kqa(c),3);case 3:if((f=l.B)&&f.timestamp>d)return bE(a,f.config),a.Cr(f.hashData),l.return(dE());case 2:rqa(a);if(!(c&&a.B&&a.hotHashData)){l.La(4);break}return g.z(l,hqa(a.B,a.hotHashData,c,d),4);case 4:return a.B?
l.return(dE()):(h=new g.fD("Config not available in ytConfig"),QB(h),l.return(Promise.reject(h)))}})};
vqa=function(a){var b,c,d,e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.j)return l.return(cE());if(!a.G)return b=g.BD("getColdConfig IDB not initialized"),QB(b),l.return(Promise.reject(b));c=XD();d=g.JB("TIME_CREATED_MS");if(!c){e=g.BD("getColdConfig");QB(e);l.La(2);break}return g.z(l,jqa(c),3);case 3:if((f=l.B)&&f.timestamp>d)return nqa(a,f.config),uqa(a,f.configData),eE(a,f.hashData),l.return(cE());case 2:qqa(a);if(!(c&&a.j&&a.coldHashData&&a.configData)){l.La(4);break}return g.z(l,iqa(a.j,
a.coldHashData,a.configData,c,d),4);case 4:return a.j?l.return(cE()):(h=new g.fD("Config not available in ytConfig"),QB(h),l.return(Promise.reject(h)))}})};
oqa=function(a){if(!a.B||!a.j){if(!XD()){var b=g.BD("scheduleGetConfigs");QB(b)}a.D||(a.D=g.ku.Ji(function(){return g.I(function(c){switch(c.j){case 1:return g.Ca(c,2),g.z(c,tqa(a),4);case 4:g.Da(c,3);break;case 2:g.Fa(c);case 3:return g.Ca(c,5),g.z(c,vqa(a),7);case 7:g.Da(c,6);break;case 5:g.Fa(c);case 6:a.D&&(a.D=0),g.Ba(c)}})},100))}};
wqa=function(a,b,c){var d,e,f;return g.I(function(h){switch(h.j){case 1:if(!g.LB("start_client_gcf")){h.La(0);break}c&&bE(a,c);a.Cr(b);d=XD();if(!d){h.La(3);break}if(c){h.La(4);break}return g.z(h,kqa(d),5);case 5:e=h.B,c=null==(f=e)?void 0:f.config;case 4:return g.z(h,hqa(c,b,d),3);case 3:if(c)for(var l=c,m=g.u(a.K.j),n=m.next();!n.done;n=m.next())n=n.value,n(l);g.Ba(h)}})};
xqa=function(a,b,c){var d,e,f,h;return g.I(function(l){if(1==l.j){if(!g.LB("start_client_gcf"))return l.La(0);eE(a,b);return(d=XD())?c?l.La(4):g.z(l,jqa(d),5):l.La(0)}4!=l.j&&(e=l.B,c=null==(f=e)?void 0:f.config);if(!c)return l.La(0);h=c.configData;return g.z(l,iqa(c,b,h,d),0)})};
yqa=function(){var a=pqa(),b=(0,g.GD)()-a.C;if(!(0!==a.C&&b<g.MB("send_config_hash_timer"))){b=g.Wa("yt.gcf.config.coldConfigData");var c=g.Wa("yt.gcf.config.hotHashData"),d=g.Wa("yt.gcf.config.coldHashData");b&&c&&d&&(a.C=(0,g.GD)());return{coldConfigData:b,hotHashData:c,coldHashData:d}}};
qqa=function(a){nqa(a,g.JB("RAW_COLD_CONFIG_GROUP"));eE(a,g.JB("SERIALIZED_COLD_HASH_DATA"));var b;uqa(a,null==(b=a.j)?void 0:b.configData)};
rqa=function(a){bE(a,g.JB("RAW_HOT_CONFIG_GROUP"));a.Cr(g.JB("SERIALIZED_HOT_HASH_DATA"))};
bE=function(a,b){a.B=b;g.Va("yt.gcf.config.hotConfigGroup",a.B||null)};
nqa=function(a,b){a.j=b;g.Va("yt.gcf.config.coldConfigGroup",a.j||null)};
eE=function(a,b){a.coldHashData=b;g.Va("yt.gcf.config.coldHashData",a.coldHashData||null)};
uqa=function(a,b){a.configData=b;g.Va("yt.gcf.config.coldConfigData",a.configData||null)};
dE=function(){return g.Wa("yt.gcf.config.hotConfigGroup")};
cE=function(){return g.Wa("yt.gcf.config.coldConfigGroup")};
zqa=function(){return"INNERTUBE_API_KEY"in HB&&"INNERTUBE_API_VERSION"in HB};
g.hE=function(){return{innertubeApiKey:g.JB("INNERTUBE_API_KEY"),innertubeApiVersion:g.JB("INNERTUBE_API_VERSION"),lI:g.JB("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),lO:g.JB("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),VW:g.JB("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:g.JB("INNERTUBE_CONTEXT_CLIENT_VERSION"),nO:g.JB("INNERTUBE_CONTEXT_HL"),mO:g.JB("INNERTUBE_CONTEXT_GL"),WW:g.JB("INNERTUBE_HOST_OVERRIDE")||"",XW:!!g.JB("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oO:!!g.JB("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:g.JB("SERIALIZED_CLIENT_CONFIG_DATA")}};
g.Gqa=function(a){var b={client:{hl:a.nO,gl:a.mO,clientName:a.lO,clientVersion:a.innertubeContextClientVersion,configInfo:a.lI}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=g.Ua.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=ina();""!==c&&(b.client.experimentsToken=c);c=jna();0<c.length&&(b.request={internalExperimentFlags:c});Aqa(a,void 0,b);Bqa(void 0,b);Cqa(void 0,b);Dqa(a,void 0,b);Eqa(void 0,b);g.LB("start_client_gcf")&&Fqa(void 0,b);g.JB("DELEGATED_SESSION_ID")&&
!g.LB("pageid_as_header_web")&&(b.user={onBehalfOfUser:g.JB("DELEGATED_SESSION_ID")});!g.LB("fill_delegate_context_in_gel_killswitch")&&(a=g.JB("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=g.u(Object.entries(TB(g.JB("DEVICE","")))),h=f.next();!h.done;h=f.next()){var l=g.u(h.value);h=l.next().value;l=l.next().value;"cbrand"===h?e.deviceMake=l:"cmodel"===h?e.deviceModel=l:"cbr"===
h?e.browserName=l:"cbrver"===h?e.browserVersion=l:"cos"===h?e.osName=l:"cosver"===h?e.osVersion=l:"cplatform"===h&&(e.platform=l)}b.client=c.call(a,d,e);return b};
Aqa=function(a,b,c){a=a.lO;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=g.uj(b,Hx,96)||new Hx;var d=Toa();d=Object.keys(Hqa).indexOf(d);d=-1===d?null:d;null!==d&&R(c,3,d);N(b,Hx,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Toa())};
Bqa=function(a,b){var c=g.Wa("yt.embedded_player.embed_url");c&&(a?(b=g.uj(a,Mx,7)||new Mx,P(b,4,c),N(a,Mx,7,b)):b&&(b.thirdParty={embedUrl:c}))};
Cqa=function(a,b){var c;if(g.LB("web_log_memory_total_kbytes")&&(null==(c=g.Ua.navigator)?0:c.deviceMemory)){var d;c=null==(d=g.Ua.navigator)?void 0:d.deviceMemory;a?Vi(a,95,ki(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}};
Dqa=function(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=g.uj(b,Dx,62))?d:new Dx;P(c,6,a.appInstallData);N(b,Dx,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)};
Eqa=function(a,b){var c=cpa();c&&(a?R(a,61,Iqa[c]):b&&(b.client.connectionType=c));g.LB("web_log_effective_connection_type")&&(c=epa())&&(a?R(a,94,Jqa[c]):b&&(b.client.effectiveConnectionType=c))};
Kqa=function(a,b,c){c=void 0===c?{}:c;var d={};g.JB("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":g.JB("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||g.JB("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.FU||g.JB("AUTHORIZATION");b||(a?b="Bearer "+g.Wa("gapi.auth.getToken")().access_token:(a=Roa().SC(iE),g.LB("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d};
Fqa=function(a,b){var c=yqa();if(c){var d=c.coldConfigData,e=c.coldHashData;c=c.hotHashData;if(d&&e&&c)if(a){var f;b=null!=(f=g.uj(a,Dx,62))?f:new Dx;P(b,1,d);P(b,3,e);b.Cr(c);N(a,Dx,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=d,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=c)}};
jE=function(a,b){this.version=a;this.args=b};
kE=function(a,b){this.topic=a;this.j=b};
lE=function(a,b){var c=Lqa();c&&c.publish.call(c,a.toString(),a,b)};
Nqa=function(a,b){var c=Lqa();if(!c)return 0;var d=c.subscribe(a.toString(),function(e,f){var h=g.Wa("ytPubsub2Pubsub2SkipSubKey");h&&h==d||(h=function(){if(mE[d])try{if(f&&a instanceof kE&&a!=e)try{var l=a.j,m=f;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.pu){var n=new l;l.pu=n.version}var p=l.pu}catch(q){}if(!p||m.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(l,
g.Mb(m.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(window,f)}catch(q){g.OB(q)}},Mqa[a.toString()]?g.nD()?g.ku.Ji(h):g.bC(h,0):h())});
mE[d]=!0;nE[a.toString()]||(nE[a.toString()]=[]);nE[a.toString()].push(d);return d};
Pqa=function(a,b){var c=Nqa(a,function(d){b.apply(void 0,arguments);Oqa(c)});
return c};
Oqa=function(a){var b=Lqa();b&&("number"===typeof a&&(a=[a]),g.dc(a,function(c){b.unsubscribeByKey(c);delete mE[c]}))};
Lqa=function(){return g.Wa("ytPubsub2Pubsub2Instance")};
Qqa=function(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&lE("meta_logging_csi_event",{timerName:a,Thb:b})};
Sqa=function(){Rqa||(Rqa=Ula(g.JB("WORKER_SERIALIZATION_URL")));return Rqa||void 0};
oE=function(){var a=Sqa();Tqa||void 0===a||(Tqa=new Worker(g.ae(a),void 0));return Tqa};
Uqa=function(){return"function"===typeof Worker&&Sqa()?!0:!1};
Xqa=function(){if(Uqa()&&!Vqa){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=pE.get(c.key);d&&(Wqa(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),pE.delete(c.key))}},b=oE();
b&&(b.addEventListener("message",a),b.onerror=function(){pE.clear()},Vqa=!0)}};
rE=function(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:(0,g.GD)(),ticks:{},infos:{}};if(qE)try{var h=Yqa(b);if(null!=h&&(h>Zqa||h<$qa))d(a,c);else{if(g.LB("gzip_gel_with_worker")&&(g.LB("initial_gzip_use_main_thread")&&!ara||!g.LB("initial_gzip_use_main_thread"))){Vqa||Xqa();var l=oE();if(l&&!e){pE.set(bra,{latencyPayload:f,url:a,options:c,sendFn:d});l.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:bra});bra++;return}}var m=Nla(cra(b));Wqa(m,f,a,c,d)}}catch(n){QB(n),d(a,c)}else d(a,c)};
Wqa=function(a,b,c,d,e){ara=!1;var f=(0,g.GD)();b.ticks.gelc=f;sE++;g.LB("disable_compression_due_to_performance_degredation")&&f-b.startTime>=dra&&(tE++,g.LB("abandon_compression_after_N_slow_zips")?sE===g.MB("compression_disable_point")&&tE>era&&(qE=!1):qE=!1);fra(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)};
gra=function(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=(0,g.GD)(),e={startTime:d,ticks:{},infos:{}},f=b?g.Wa("yt.logging.gzipForFetch",!1):!0;if(qE&&f){if(!a.body)return a;try{var h=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=h;if(!c&&"string"===typeof h){var l=Yqa(h);if(null!=l&&(l>Zqa||l<$qa))return a;f=Nla(cra(h),b?{level:1}:void 0);var m=(0,g.GD)();e.ticks.gelc=m;if(b){sE++;if((g.LB("disable_compression_due_to_performance_degredation")||g.LB("disable_compression_due_to_performance_degradation_lr"))&&
m-d>=dra)if(tE++,g.LB("abandon_compression_after_N_slow_zips")||g.LB("abandon_compression_after_N_slow_zips_lr")){b=tE/sE;var n=era/g.MB("compression_disable_point");0<sE&&0===sE%g.MB("compression_disable_point")&&b>=n&&(qE=!1)}else qE=!1;fra(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(p){return QB(p),a}}else return a};
Yqa=function(a){try{return(new Blob(a.split(""))).size}catch(b){return QB(b),null}};
fra=function(a){g.LB("gel_compression_csi_killswitch")||!g.LB("log_gel_compression_latency")&&!g.LB("log_gel_compression_latency_lr")||Qqa("gel_compression",a,{sampleRate:.1})};
vE=function(a){var b=this;this.BG=this.pg=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.rz=function(){};
this.now=Date.now;this.CC=!1;this.Ud={Dhb:function(p){b.Hf=p},
Whb:function(){b.iB()},
a4:function(){b.uM()},
uD:function(p){return g.I(function(q){return g.z(q,b.uD(p),0)})},
WJ:function(p,q){return b.WJ(p,q)},
ZJ:function(){b.ZJ()}};
var c;this.h_=null!=(c=a.h_)?c:100;var d;this.uZ=null!=(d=a.uZ)?d:1;var e;this.nZ=null!=(e=a.nZ)?e:2592E6;var f;this.gZ=null!=(f=a.gZ)?f:12E4;var h;this.tZ=null!=(h=a.tZ)?h:5E3;var l;this.Hf=null!=(l=a.Hf)?l:void 0;this.hH=!!a.hH;var m;this.JG=null!=(m=a.JG)?m:.1;var n;this.GJ=null!=(n=a.GJ)?n:10;a.handleError&&(this.handleError=a.handleError);a.rz&&(this.rz=a.rz);a.CC&&(this.CC=a.CC);a.BG&&(this.BG=a.BG);this.ob=a.ob;this.Hn=a.Hn;this.Ah=a.Ah;this.jh=a.jh;this.sendFn=a.sendFn;this.ZP=a.ZP;this.oP=
a.oP;uE(this)&&(!this.ob||this.ob("networkless_logging"))&&hra(this)};
hra=function(a){uE(a)&&!a.CC&&(a.pg=!0,a.hH&&Math.random()<=a.JG&&a.Ah.f4(a.Hf),a.ZJ(),a.jh.Mh()&&a.iB(),a.jh.Sa(a.ZP,a.iB.bind(a)),a.jh.Sa(a.oP,a.uM.bind(a)))};
kra=function(a,b){if(!uE(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var h,l,m,n;return g.I(function(p){switch(p.j){case 1:h=ira(f);(l=jra(f))&&a.ob&&a.ob("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.ob&&a.ob("nwl_consider_error_code")&&h||a.ob&&!a.ob("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.GJ)){p.La(2);break}if(!a.jh.eK){p.La(3);break}return g.z(p,a.jh.eK(),3);case 3:if(a.jh.Mh()){p.La(2);break}c(e,f);if(!a.ob||!a.ob("nwl_consider_error_code")||void 0===(null==(m=
b)?void 0:m.id)){p.La(6);break}return g.z(p,a.Ah.VQ(b.id,a.Hf,!1),6);case 6:return p.return();case 2:if(a.ob&&a.ob("nwl_consider_error_code")&&!h&&a.potentialEsfErrorCounter>a.GJ)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(n=b)?void 0:n.id)){p.La(8);break}return b.sendCount<a.uZ?g.z(p,a.Ah.VQ(b.id,a.Hf,!0,l?!1:void 0),12):g.z(p,a.Ah.Uy(b.id,a.Hf),8);case 12:a.Hn.Ji(function(){a.jh.Mh()&&a.iB()},a.tZ);
case 8:c(e,f),g.Ba(p)}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var h;return g.I(function(l){if(1==l.j)return void 0===(null==(h=b)?void 0:h.id)?l.La(2):g.z(l,a.Ah.Uy(b.id,a.Hf),2);a.jh.lw&&a.ob&&a.ob("vss_network_hint")&&a.jh.lw(!0);d(e,f);g.Ba(l)})};
return b};
wE=function(a,b){a.Z_&&!a.jh.Mh()?a.Z_(b):a.handleError(b)};
uE=function(a){return!!a.Hf||a.BG};
ira=function(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0};
jra=function(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)};
lra=function(){if(xE)return xE();var a={};xE=g.$D("LogsDatabaseV2",{ir:(a.LogsRequestsStore={Tm:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&g.HD(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.j.indexNames.contains("newRequest")&&d.j.deleteIndex("newRequest"),g.ND(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&ID(b,"sapisid");c(9)&&ID(b,"SWHealthLog")},
version:9});return xE()};
yE=function(a){return g.TD(lra(),a)};
nra=function(a,b){var c,d,e,f;return g.I(function(h){if(1==h.j)return c={startTime:(0,g.GD)(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.z(h,yE(b),2);if(3!=h.j)return d=h.B,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:g.JB("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.z(h,g.LD(d,"LogsRequestsStore",e),3);f=h.B;c.ticks.tc=(0,g.GD)();mra(c);return h.return(f)})};
ora=function(a,b){var c,d,e,f,h,l,m;return g.I(function(n){if(1==n.j)return c={startTime:(0,g.GD)(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},g.z(n,yE(b),2);if(3!=n.j)return d=n.B,e=g.JB("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],h=[a,e,(0,g.GD)()],l=IDBKeyRange.bound(f,h),m=void 0,g.z(n,g.JD(d,["LogsRequestsStore"],{mode:"readwrite",hc:!0},function(p){return g.QD(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:l,direction:"prev"},function(q){q.getValue()&&
(m=q.getValue(),"NEW"===a&&(m.status="QUEUED",q.update(m)))})}),3);
c.ticks.tc=(0,g.GD)();mra(c);return n.return(m)})};
pra=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.z(d,yE(b),2);c=d.B;return d.return(g.JD(c,["LogsRequestsStore"],{mode:"readwrite",hc:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(h){if(h)return h.status="QUEUED",g.KD(f,h).then(function(){return h})})}))})};
qra=function(a,b,c,d){c=void 0===c?!0:c;var e;return g.I(function(f){if(1==f.j)return g.z(f,yE(b),2);e=f.B;return f.return(g.JD(e,["LogsRequestsStore"],{mode:"readwrite",hc:!0},function(h){var l=h.objectStore("LogsRequestsStore");return l.get(a).then(function(m){return m?(m.status="NEW",c&&(m.sendCount+=1),void 0!==d&&(m.options.compress=d),g.KD(l,m).then(function(){return m})):g.DD.resolve(void 0)})}))})};
rra=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.z(d,yE(b),2);c=d.B;return d.return(c.delete("LogsRequestsStore",a))})};
sra=function(a){var b,c;return g.I(function(d){if(1==d.j)return g.z(d,yE(a),2);b=d.B;c=(0,g.GD)()-2592E6;return g.z(d,g.JD(b,["LogsRequestsStore"],{mode:"readwrite",hc:!0},function(e){return g.OD(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})};
tra=function(){g.I(function(a){return g.z(a,dqa("LogsDatabaseV2"),0)})};
mra=function(a){g.LB("nwl_csi_killswitch")||Qqa("networkless_performance",a,{sampleRate:1})};
vra=function(a){return g.TD(ura(),a)};
wra=function(a){var b,c;g.I(function(d){if(1==d.j)return g.z(d,vra(a),2);b=d.B;c=(0,g.GD)()-2592E6;return g.z(d,g.JD(b,["SWHealthLog"],{mode:"readwrite",hc:!0},function(e){return g.OD(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})};
xra=function(a){var b;return g.I(function(c){if(1==c.j)return g.z(c,vra(a),2);b=c.B;return g.z(c,b.clear("SWHealthLog"),0)})};
g.zE=function(a,b,c,d,e,f,h){e=void 0===e?"":e;f=void 0===f?!1:f;h=void 0===h?!1:h;if(a)if(c&&!g.tC()){if(a){a=g.de(g.yn(a));if(a===g.le.toString()||a.startsWith("data"))a="";else{var l=void 0===l?{}:l;a instanceof g.me?l=a:(a=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.rhb&&(a=a.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.qhb&&(a=a.replace(/(\r\n|\n|\r)/g,"<br>")),l.shb&&(a=a.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),
l=g.oe(a));a=g.Ee(g.wm(g.ne(l).toString()))}g.ic(a)||(l=uf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Ue(l).body.appendChild(l))}}else if(e)Dna(a,b,"POST",e,d);else if(g.JB("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Dna(a,b,"GET","",d,void 0,f,h);else{b:{try{var m=new Dka({url:a});if(m.C&&m.B||m.D){var n=sl(g.ul(5,a));var p=!(!n||!n.endsWith("/aclk")||"1"!==Dl(a,"ri"));break b}}catch(q){}p=!1}p?yra(a)?(b&&b(),l=!0):l=!1:l=!1;l||zra(a,b)}};
yra=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
zra=function(a,b){var c=new Image,d=""+Ara++;Bra[d]=c;c.onload=c.onerror=function(){b&&Bra[d]&&b();delete Bra[d]};
c.src=a};
AE=function(){this.j=new Map;this.B=!1};
BE=function(){if(!AE.instance){var a=g.Wa("yt.networkRequestMonitor.instance")||new AE;g.Va("yt.networkRequestMonitor.instance",a);AE.instance=a}return AE.instance};
CE=function(){Cra||(Cra=new pD("yt.offline"));return Cra};
Dra=function(a){if(g.LB("offline_error_handling")){var b=CE().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);CE().set("errors",b,2592E3,!0)}};
DE=function(){g.Fd.call(this);var a=this;this.B=!1;this.j=Ika();this.j.Sa("networkstatus-online",function(){if(a.B&&g.LB("offline_error_handling")){var b=CE().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new g.fD(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;g.OB(d)}CE().set("errors",{},2592E3,!0)}}})};
Era=function(){if(!DE.instance){var a=g.Wa("yt.networkStatusManager.instance")||new DE;g.Va("yt.networkStatusManager.instance",a);DE.instance=a}return DE.instance};
g.EE=function(a){a=void 0===a?{}:a;g.Fd.call(this);var b=this;this.j=this.D=0;this.B=Era();var c=g.Wa("yt.networkStatusManager.instance.listen").bind(this.B);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Fra(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Fra(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),c("networkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")})))};
Fra=function(a,b){a.rateLimit?a.j?(g.ku.Jj(a.D),a.D=g.ku.Ji(function(){a.C!==b&&(a.dispatchEvent(b),a.C=b,a.j=(0,g.GD)())},a.rateLimit-((0,g.GD)()-a.j))):(a.dispatchEvent(b),a.C=b,a.j=(0,g.GD)()):a.dispatchEvent(b)};
FE=function(){var a=vE.call;Gra||(Gra=new g.EE({Tgb:!0,xfb:!0}));a.call(vE,this,{Ah:{f4:sra,Uy:rra,aW:ora,N6:pra,VQ:qra,set:nra},jh:Gra,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var h;QB(new g.fD(b.message,c,null==d?void 0:null==(h=d.error)?void 0:h.code),void 0,void 0,void 0,!0)}else g.OB(b)},
rz:QB,sendFn:Hra,now:g.GD,Z_:Dra,Hn:g.mD(),ZP:"publicytnetworkstatus-online",oP:"publicytnetworkstatus-offline",hH:!0,JG:.1,GJ:g.MB("potential_esf_error_limit",10),ob:g.LB,CC:!(g.hD()&&"www.youtube-nocookie.com"!==g.vl(document.location.toString()))});this.B=new g.sn;g.LB("networkless_immediately_drop_all_requests")&&tra();eqa("LogsDatabaseV2")};
GE=function(){var a=g.Wa("yt.networklessRequestController.instance");a||(a=new FE,g.Va("yt.networklessRequestController.instance",a),g.LB("networkless_logging")&&g.YD().then(function(b){a.Hf=b;hra(a);a.B.resolve();a.hH&&Math.random()<=a.JG&&a.Hf&&wra(a.Hf);g.LB("networkless_immediately_drop_sw_health_store")&&Ira(a)}));
return a};
Ira=function(a){var b;g.I(function(c){if(!a.Hf)throw b=g.BD("clearSWHealthLogsDb"),b;return c.return(xra(a.Hf).catch(function(d){a.handleError(d)}))})};
Hra=function(a,b,c,d){d=void 0===d?!1:d;b=g.LB("web_fp_via_jspb")?Object.assign({},b):b;g.LB("use_cfr_monitor")&&Jra(a,b);if(g.LB("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round((0,g.GD)())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round((0,g.GD)())}c&&0===Object.keys(b).length?g.zE(a):b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),rE(a,b.postBody,b,g.gC,
d)):rE(a,JSON.stringify(b.postParams),b,Rna,d):g.gC(a,b)};
Jra=function(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){BE().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){BE().requestComplete(a,!0);d(e,f)}};
g.HE=function(a){this.config_=null;a?this.config_=a:zqa()&&(this.config_=g.hE())};
g.IE=function(a,b,c,d){function e(p){try{if((void 0===p?0:p)&&d.retry&&!d.networklessOptions.bypassNetworkless)f.method="POST",d.networklessOptions.writeThenSend?GE().writeThenSend(n,f):GE().sendAndWrite(n,f);else if(d.compress){var q=!d.networklessOptions.writeThenSend;if(f.postBody){var r=f.postBody;"string"!==typeof r&&(r=JSON.stringify(f.postBody));rE(n,r,f,g.gC,q)}else rE(n,JSON.stringify(f.postParams),f,Rna,q)}else g.LB("web_all_payloads_via_jspb")?g.gC(n,f):Rna(n,f)}catch(t){if("InvalidAccessError"==
t.name)QB(Error("An extension is blocking network request."));else throw t;}}
!g.JB("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&QB(new g.fD("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new g.fD("innertube xhrclient not ready",b,c,d),g.OB(a),a;var f={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};f.headers["Content-Type"]||(f.headers["Content-Type"]="application/json");c="";var h=a.config_.WW;h&&(c=h);var l=a.config_.XW||!1;h=Kqa(l,c,d);Object.assign(f.headers,h);(h=f.headers.Authorization)&&!c&&l&&(f.headers["x-origin"]=window.location.origin);b="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;l={alt:"json"};var m=a.config_.oO&&h;m=m&&h.startsWith("Bearer");m||(l.key=a.config_.innertubeApiKey);var n=VB(""+c+b,l);g.Wa("ytNetworklessLoggingInitializationOptions")&&
Kra.isNwlInitialized?Xpa().then(function(p){e(p)}):e(!1)};
g.NE=function(a,b,c){var d=g.JE();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var h=function(){KE[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{g.LE[a]?h():g.bC(h,0)}catch(l){g.OB(l)}},c);
KE[e]=!0;ME[a]||(ME[a]=[]);ME[a].push(e);return e}return 0};
Lra=function(a){var b=g.NE("LOGGED_IN",function(c){a.apply(void 0,arguments);g.OE(b)})};
g.OE=function(a){var b=g.JE();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),g.dc(a,function(c){b.unsubscribeByKey(c);delete KE[c]}))};
g.PE=function(a,b){var c=g.JE();return c?c.publish.apply(c,arguments):!1};
Nra=function(a){var b=g.JE();if(b)if(b.clear(a),a)Mra(a);else for(var c in ME)Mra(c)};
g.JE=function(){return g.Ua.ytPubsubPubsubInstance};
Mra=function(a){ME[a]&&(a=ME[a],g.dc(a,function(b){KE[b]&&delete KE[b]}),a.length=0)};
g.Rra=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ora,""),c=c.replace(Pra,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Qra(a,b,c)};
Qra=function(a,b,c){c=void 0===c?null:c;var d=Sra(a),e=document.getElementById(d),f=e&&yoa(e),h=e&&!f;f?b&&b():(b&&(f=g.NE(d,b),b=""+g.gb(b),Tra[b]=f),h||(e=Ura(a,d,function(){yoa(e)||(xoa(e,"loaded","true"),g.PE(d),g.bC(g.jb(Nra,d),0))},c)))};
Ura=function(a,b,c,d){d=void 0===d?null:d;var e=g.vf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);g.Cn(e,g.Yv(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
Sra=function(a){var b=document.createElement("a");g.zn(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ie(a)};
RE=function(a){var b=g.Ka.apply(1,arguments);if(!QE(a)||b.some(function(d){return!QE(d)}))throw Error("Only objects may be merged.");
b=g.u(b);for(var c=b.next();!c.done;c=b.next())Vra(a,c.value);return a};
Vra=function(a,b){for(var c in b)if(QE(b[c])){if(c in a&&!QE(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Vra(a[c],b[c])}else if(Wra(b[c])){if(c in a&&!Wra(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Xra(a[c],b[c])}else a[c]=b[c];return a};
Xra=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,QE(c)?a.push(Vra({},c)):Wra(c)?a.push(Xra([],c)):a.push(c);return a};
QE=function(a){return"object"===typeof a&&!Array.isArray(a)};
Wra=function(a){return"object"===typeof a&&Array.isArray(a)};
SE=function(a){g.J.call(this);this.B=a};
TE=function(a){SE.call(this,!0);this.j=a};
Yra=function(a,b){g.J.call(this);var c=this;this.C=[];this.N=!1;this.B=0;this.G=this.K=this.D=!1;this.ma=null;var d=(0,g.ib)(a,b);this.j=new g.tu(function(){return d(c.ma)},300);
g.L(this,this.j);this.Y=this.Z=Infinity};
Zra=function(a,b){if(!b)return!1;for(var c=0;c<b.length;c++){var d=b.item(c);if(d&&a.C.includes(d.identifier))return!0}return!1};
$ra=function(a){for(var b=Array(a),c=0;c<a;c++){for(var d=Date.now(),e=0;e<d%23;e++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(UE)for(c=1,d=0;d<UE.length;d++)b[c%a]=b[c%a]^b[(c-1)%a]/4^UE.charCodeAt(d),c++;return b};
VE=function(a){if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(a),c=new Uint8Array(a);window.crypto.getRandomValues(c);for(var d=0;d<b.length;d++)b[d]=c[d];return b}catch(e){}return $ra(a)};
g.WE=function(a){a=VE(a);for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.asa=function(){return g.dq(VE(16),function(a){return(a&15).toString(16)}).join("")};
bsa=function(){var a={},b=void 0===a.k$?!1:a.k$;a=void 0===a.P4?!0:a.P4;if(null==g.Wa("_lact",window)){var c=parseInt(g.JB("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;g.Va("_lact",c,window);g.Va("_fact",c,window);-1==c&&XE();g.PC(document,"keydown",XE);g.PC(document,"keyup",XE);g.PC(document,"mousedown",XE);g.PC(document,"mouseup",XE);b?g.PC(window,"touchmove",function(){YE("touchmove",200)},{passive:!0}):(g.PC(window,"resize",function(){YE("resize",200)}),a&&g.PC(window,"scroll",function(){YE("scroll",
200)}));
new SC(function(){YE("mouse",100)});
g.PC(document,"touchstart",XE,{passive:!0});g.PC(document,"touchend",XE,{passive:!0})}};
YE=function(a,b){csa[a]||(csa[a]=!0,g.ku.Ji(function(){XE();csa[a]=!1},b))};
XE=function(){null==g.Wa("_lact",window)&&(bsa(),g.Wa("_lact",window));var a=Date.now();g.Va("_lact",a,window);-1==g.Wa("_fact",window)&&g.Va("_fact",a,window);(a=g.Wa("ytglobal.ytUtilActivityCallback_"))&&a()};
ZE=function(){var a=g.Wa("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)};
$E=function(a){this.name=a};
aF=function(a){this.key=a};
dsa=function(){var a=this;this.j=new Map;this.B=new Map;this.Ud={ggb:function(){return new Map(a.j)}}};
esa=function(a,b){a.j.set(b.CQ,b)};
cF=function(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.B.has(b))return a.B.get(b);if(!a.j.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.j.get(b);c.push(b);if(void 0!==d.aS)var e=d.aS;else if(d.cba)e=d[bF]?fsa(a,d[bF],c):[],e=d.cba.apply(d,g.pa(e));else if(d.M_){e=d.M_;var f=e[bF]?fsa(a,e[bF],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(g.pa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Phb||a.B.set(b,e);
return e};
fsa=function(a,b,c){return b?b.map(function(d){return d instanceof aF?cF(a,d.key,c,!0):cF(a,d,c)}):[]};
dF=function(){gsa||(gsa=new dsa);return gsa};
hsa=function(){var a,b;return"h5vcc"in eF&&(null==(a=eF.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=eF.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in eF&&eF.performance.mark&&eF.performance.measure?2:0};
isa=function(a){var b=hsa();switch(b){case 1:eF.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:eF.performance.mark(a+"-start");break;case 0:break;default:An(b,"unknown trace type")}};
jsa=function(a){var b=hsa();switch(b){case 1:eF.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";eF.performance.mark(c);eF.performance.measure(a,b,c);break;case 0:break;default:An(b,"unknown trace type")}};
lsa=function(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?g.mD():d;this.C=c;this.scheduler=d;this.B=new g.sn;this.j=a;for(a={Iv:0};a.Iv<this.j.length;a={AE:a.AE,Iv:a.Iv},a.Iv++)a.AE=this.j[a.Iv],c=function(e){return function(){e.AE.FO();b.j[e.Iv].JJ=!0;b.j.every(function(f){return!0===f.JJ})&&b.B.resolve()}}(a),d=jD(c,ksa(this,a.AE)),this.j[a.Iv]=Object.assign({},a.AE,{FO:c,
jobId:d})};
msa=function(a){var b=Array.from(a.j.keys()).sort(function(d,e){return ksa(a,a.j[e])-ksa(a,a.j[d])});
b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=a.j[c.value],void 0===c.jobId||c.JJ||(a.scheduler.Jj(c.jobId),jD(c.FO,10))};
ksa=function(a,b){var c;return null!=(c=b.priority)?c:a.C};
gF=function(a){this.state=a;this.plugins=[];this.C=void 0;this.D={};fF&&isa(this.state)};
osa=function(a,b){var c=b.filter(function(e){return 10===nsa(a,e)}),d=b.filter(function(e){return 10!==nsa(a,e)});
return a.D.Lhb?function(){var e=g.Ka.apply(0,arguments);return g.I(function(f){if(1==f.j)return g.z(f,a.M$.apply(a,[c].concat(g.pa(e))),2);a.HZ.apply(a,[d].concat(g.pa(e)));g.Ba(f)})}:function(){var e=g.Ka.apply(0,arguments);
a.N$.apply(a,[c].concat(g.pa(e)));a.HZ.apply(a,[d].concat(g.pa(e)))}};
nsa=function(a,b){var c,d;return null!=(d=null!=(c=a.C)?c:b.priority)?d:0};
psa=function(a){fF&&a&&isa(a)};
hF=function(a){fF&&a&&jsa(a)};
rsa=function(a,b,c){qsa&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())};
iF=function(a){gF.call(this,void 0===a?"none":a);this.j=null;this.C=10;this.transitions=[{from:"none",to:"application_navigating",action:this.G},{from:"application_navigating",to:"none",action:this.K},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]};
tsa=function(){ssa||(ssa=new iF);return ssa};
jF=function(){var a=this;this.store={};this.j=0;this.B={};this.Ud={Wfb:function(){return a.j}}};
vsa=function(a,b){var c=usa(b);if(a.B[c])return a.B[c];var d=Object.keys(a.store)||[];if(1>=d.length&&usa(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var h=d[f].split("/");if(kF(b.auth,h[0])){var l=b.isJspb;kF(void 0===l?"undefined":l?"true":"false",h[1])&&kF(b.cttAuthInfo,h[2])&&(l=b.tier,l=void 0===l?"undefined":JSON.stringify(l),kF(l,h[3])&&e.push(d[f]))}}return a.B[c]=e};
kF=function(a,b){return void 0===a||"undefined"===a?!0:a===b};
usa=function(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")};
lF=function(){this.D=this.j=this.B=0;this.C=!1};
mF=function(){var a=g.Wa("yt.logging.ims");a||(a=new jF,g.Va("yt.logging.ims",a));return a};
ysa=function(){if(Uqa()&&!wsa){var a=function(c){c=c.data;if("serializedGelBatch"===c.op){var d=nF.get(c.key);d&&(xsa(c.serializedBatch,d.client,d.resolve,d.networklessOptions,d.isIsolated,d.useVSSEndpoint,d.dangerousLogToVisitorSession,d.requestsOutstanding),nF.delete(c.key))}},b=oE();
b&&(b.addEventListener("message",a),b.onerror=function(){nF.clear()});
wsa=!0}};
Esa=function(a,b){if("log_event"===a.endpoint){oF(a);var c=pF(a),d=zsa(a.payload)||"",e=Asa(d),f=200;if(e){if(!1===e.enabled&&!g.LB("web_payload_policy_disabled_killswitch"))return;f=Bsa(e.tier);if(400===f){Csa(a,b);return}}qF[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};mF().storePayload(e,a.payload);Dsa(b,c,!1,e,tF(d))}};
Gsa=function(a,b,c){if("log_event"===b.endpoint){oF(void 0,b);var d=pF(b,!0),e=Asa(a),f=200;if(e){if(!1===e.enabled&&!g.LB("web_payload_policy_disabled_killswitch"))return;f=Bsa(e.tier);if(400===f){Fsa(a,b,c);return}}qF[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};mF().storePayload(e,b.payload.toJSON());Dsa(c,d,!0,e,tF(a))}};
Dsa=function(a,b,c,d,e){function f(){Hsa({writeThenSend:!0},g.LB("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(uF=new a);a=g.MB("tvhtml5_logging_max_batch_ads_fork")||g.MB("web_logging_max_batch")||100;var h=(0,g.GD)(),l=Isa(c,d.tier),m=l.D;e&&(l.C=!0);e=0;d&&(e=mF().getSequenceCount(d));1E3<=e?f():e>=a?Jsa||(Jsa=Ksa(function(){f();Jsa=void 0},0)):10<=h-m&&(Lsa(c,d.tier),l.D=h)};
Csa=function(a,b){if("log_event"===a.endpoint){oF(a);var c=pF(a),d=new Map;d.set(c,[a.payload]);var e=zsa(a.payload)||"";b&&(uF=new b);return new g.dg(function(f,h){uF&&uF.isReady()?Msa(d,uF,f,h,{bypassNetworkless:!0},!0,tF(e)):f()})}};
Fsa=function(a,b,c){if("log_event"===b.endpoint){oF(void 0,b);var d=pF(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(uF=new c);return new g.dg(function(f){uF&&uF.isReady()?Nsa(e,uF,f,{bypassNetworkless:!0},!0,tF(a)):f()})}};
pF=function(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new GB;c.videoId?d.setVideoId(c.videoId):c.playlistId&&hj(d,2,vF,ni(c.playlistId));wF[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),xF[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c};
Hsa=function(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new g.dg(function(e,f){var h=Isa(c,d),l=h.C;h.C=!1;Osa(h.B);Osa(h.j);h.j=0;uF&&uF.isReady()?void 0===d&&g.LB("enable_web_tiered_gel")?Psa(e,f,a,b,c,300,l):Psa(e,f,a,b,c,d,l):(Lsa(c,d),e())})};
Psa=function(a,b,c,d,e,f,h){var l=uF;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;h=void 0===h?!1:h;var m=new Map,n=new Map,p={isJspb:e,cttAuthInfo:d,tier:f},q={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=g.LB("enable_web_tiered_gel")?mF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):mF().extractMatchingEntries(q),m.set(d,b),Nsa(m,l,a,c,!1,h)):(m=g.LB("enable_web_tiered_gel")?mF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):mF().extractMatchingEntries(q),n.set(d,m),
Msa(n,l,a,b,c,!1,h));else if(e){b=g.u(Object.keys(qF));for(d=b.next();!d.done;d=b.next())n=d.value,f=g.LB("enable_web_tiered_gel")?mF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):mF().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),0<f.length&&m.set(n,f),(g.LB("web_fp_via_jspb_and_json")&&c.writeThenSend||!g.LB("web_fp_via_jspb_and_json"))&&delete qF[n];Nsa(m,l,a,c,!1,h)}else{m=g.u(Object.keys(qF));for(d=m.next();!d.done;d=m.next())p=d.value,q=g.LB("enable_web_tiered_gel")?mF().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:p,tier:f},{isJspb:!1,cttAuthInfo:p}],sizeLimit:1E3}):mF().extractMatchingEntries({isJspb:!1,cttAuthInfo:p}),0<q.length&&n.set(p,q),(g.LB("web_fp_via_jspb_and_json")&&c.writeThenSend||!g.LB("web_fp_via_jspb_and_json"))&&delete qF[p];Msa(n,l,a,b,c,!1,h)}};
Lsa=function(a,b){function c(){Hsa({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Isa(a,b),e=d===Qsa||d===Rsa?5E3:Ssa;g.LB("web_gel_timeout_cap")&&!d.j&&(e=Ksa(function(){c()},e),d.j=e);
Osa(d.B);e=g.JB("LOGGING_BATCH_TIMEOUT",g.MB("web_gel_debounce_ms",1E4));g.LB("shorten_initial_gel_batch_timeout")&&yF&&(e=Tsa);e=Ksa(function(){0<g.MB("gel_min_batch_size")?mF().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Usa&&c():c()},e);
d.B=e};
Msa=function(a,b,c,d,e,f,h){e=void 0===e?{}:e;var l=Math.round((0,g.GD)()),m=a.size,n=Vsa(h);a=g.u(a);var p=a.next();for(h={};!p.done;h={WI:h.WI,batchRequest:h.batchRequest,dangerousLogToVisitorSession:h.dangerousLogToVisitorSession,mJ:h.mJ,eJ:h.eJ},p=a.next()){var q=g.u(p.value);p=q.next().value;q=q.next().value;h.batchRequest=g.rd({context:g.Gqa(b.config_||g.hE())});if(!g.$a(q)&&!g.LB("throw_err_when_logevent_malformed_killswitch")){d();break}h.batchRequest.events=q;(q=xF[p])&&Wsa(h.batchRequest,
p,q);delete xF[p];h.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===p;Xsa(h.batchRequest,l,h.dangerousLogToVisitorSession);Ysa(e);h.mJ=function(r){g.LB("start_client_gcf")&&g.ku.Ji(function(){return g.I(function(t){return g.z(t,Zsa(r),0)})});
m--;m||c()};
h.WI=0;h.eJ=function(r){return function(){r.WI++;if(e.bypassNetworkless&&1===r.WI)try{g.IE(b,n,r.batchRequest,$sa({writeThenSend:!0},r.dangerousLogToVisitorSession,r.mJ,r.eJ,f)),yF=!1}catch(t){g.OB(t),d()}m--;m||c()}}(h);
try{g.IE(b,n,h.batchRequest,$sa(e,h.dangerousLogToVisitorSession,h.mJ,h.eJ,f)),yF=!1}catch(r){g.OB(r),d()}}};
Nsa=function(a,b,c,d,e,f){d=void 0===d?{}:d;var h=Math.round((0,g.GD)()),l={value:a.size},m=new Map([].concat(g.pa(a)));m=g.u(m);for(var n=m.next();!n.done;n=m.next()){var p=g.u(n.value).next().value,q=a.get(p);n=new ena;var r=b.config_||g.hE(),t=new Px,v=new g.Jx;P(v,1,r.nO);P(v,2,r.mO);R(v,16,r.VW);P(v,17,r.innertubeContextClientVersion);if(r.lI){var x=r.lI,C=new Dx;x.coldConfigData&&P(C,1,x.coldConfigData);x.appInstallData&&P(C,6,x.appInstallData);x.coldHashData&&P(C,3,x.coldHashData);x.hotHashData&&
C.Cr(x.hotHashData);N(v,Dx,62,C)}(x=g.Ua.devicePixelRatio)&&1!=x&&Lj(v,65,x);x=ina();""!==x&&P(v,54,x);x=jna();if(0<x.length){C=new Lx;for(var F=0;F<x.length;F++){var G=new Kx;P(G,1,x[F].key);hj(G,2,ata,ni(x[F].value));xj(C,15,Kx,G)}N(t,Lx,5,C)}Aqa(r,v);Bqa(t);Cqa(v);Dqa(r,v);Eqa(v);g.LB("start_client_gcf")&&Fqa(v);g.JB("DELEGATED_SESSION_ID")&&!g.LB("pageid_as_header_web")&&(r=new Ox,P(r,3,g.JB("DELEGATED_SESSION_ID")));!g.LB("fill_delegate_context_in_gel_killswitch")&&(r=g.JB("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(x=g.uj(t,Ox,3)||new Ox,r=P(x,18,r),N(t,Ox,3,r));r=v;x=g.u(Object.entries(TB(g.JB("DEVICE",""))));for(C=x.next();!C.done;C=x.next())F=g.u(C.value),C=F.next().value,F=F.next().value,"cbrand"===C?P(r,12,F):"cmodel"===C?P(r,13,F):"cbr"===C?P(r,87,F):"cbrver"===C?P(r,88,F):"cos"===C?P(r,18,F):"cosver"===C?P(r,19,F):"cplatform"===C&&R(r,42,Uoa(F));t.Qw(v);N(n,Px,1,t);if(v=wF[p])a:{if(v.Pe())t=1;else if(v.getPlaylistId())t=2;else break a;N(n,GB,4,v);v=g.uj(n,Px,1)||new Px;r=g.uj(v,Ox,3)||new Ox;x=new Nx;
x.setToken(p);R(x,1,t);xj(r,12,Nx,x);N(v,Ox,3,r)}delete wF[p];p="visitorOnlyApprovedKey"===p;bta()||Jj(n,2,h);!p&&(t=g.JB("EVENT_ID"))&&(v=cta(),r=new dna,P(r,1,t),Jj(r,2,v),N(n,dna,5,r));Ysa(d);if(g.LB("jspb_serialize_with_worker")&&(t=oE())&&d.writeThenSend){nF.set(dta,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:p,requestsOutstanding:l});t.postMessage({op:"gelBatchToSerialize",batchRequest:n.toJSON(),clientEvents:q,key:dta});dta++;break}if(q){t=
[];for(v=0;v<q.length;v++)try{t.push(new FB(q[v]))}catch(H){g.OB(new g.fD("Transport failed to deserialize "+String(q[v])))}q=t}else q=[];q=g.u(q);for(t=q.next();!t.done;t=q.next())xj(n,3,FB,t.value);q={startTime:(0,g.GD)(),ticks:{},infos:{}};n=n.Cj();q.ticks.geljspc=(0,g.GD)();g.LB("log_jspb_serialize_latency")&&Qqa("gel_jspb_serialize",q,{sampleRate:.1});xsa(n,b,c,d,e,f,p,l)}};
xsa=function(a,b,c,d,e,f,h,l){d=void 0===d?{}:d;l=void 0===l?{value:0}:l;f=Vsa(f);d=$sa(d,h,function(m){g.LB("start_client_gcf")&&g.ku.Ji(function(){return g.I(function(n){return g.z(n,Zsa(m),0)})});
l.value--;l.value||c()},function(){l.value--;
l.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;g.IE(b,f,"",d);yF=!1};
Ysa=function(a){g.LB("always_send_and_write")&&(a.writeThenSend=!1)};
$sa=function(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,nfb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:g.LB("compress_gel")||g.LB("compress_gel_lr")};bta()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round((0,g.GD)())));return a};
Xsa=function(a,b,c){bta()||(a.requestTimeMs=String(b));g.LB("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=g.JB("EVENT_ID"))&&(c=cta(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})};
cta=function(){var a=g.JB("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*eta/2));a++;a>eta&&(a=1);IB("BATCH_CLIENT_COUNTER",a);return a};
Wsa=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
oF=function(a,b){if(!g.Wa("yt.logging.transport.enableScrapingForTest")){var c=hna("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))fta=[],g.Va("yt.logging.transport.enableScrapingForTest",!0),g.Va("yt.logging.transport.scrapedPayloadsForTesting",fta),g.Va("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),g.Va("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
g.Va("yt.logging.transport.scrapeClientEvent",!0);else return}c=g.Wa("yt.logging.transport.scrapedPayloadsForTesting");var d=g.Wa("yt.logging.transport.payloadToScrape");b&&(b=b.payload,(b=g.Wa("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b)())&&c.push(b));b=g.Wa("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}g.Va("yt.logging.transport.scrapedPayloadsForTesting",
c)};
bta=function(){return g.LB("use_request_time_ms_header")||g.LB("lr_use_request_time_ms_header")};
Ksa=function(a,b){return g.LB("transport_use_scheduler")?g.LB("logging_avoid_blocking_during_navigation")||g.LB("lr_logging_avoid_blocking_during_navigation")?g.kD(0,function(){if("none"===tsa().currentState)a();else{var c={};tsa().install((c.none={callback:a},c))}},b):jD(a,0,b):g.bC(a,b)};
Osa=function(a){g.LB("transport_use_scheduler")?g.ku.Jj(a):g.dC(a)};
Zsa=function(a){var b,c,d,e,f,h,l,m,n,p;return g.I(function(q){return 1==q.j?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=g.T(d,gta),h=null==(f=d)?void 0:f.hotHashData,l=g.T(d,hta),n=null==(m=d)?void 0:m.coldHashData,(p=dF().resolve(new aF(fE)))?h?e?g.z(q,wqa(p,h,e),2):g.z(q,wqa(p,h),2):q.La(2):q.return()):n?l?g.z(q,xqa(p,n,l),0):g.z(q,xqa(p,n),0):q.La(0)})};
Isa=function(a,b){b=void 0===b?200:b;return a?300===b?Qsa:ita:300===b?Rsa:jta};
Asa=function(a){if(g.LB("enable_web_tiered_gel")){a=kta[a||""];var b,c,d,e=null==dF().resolve(new aF(fE))?void 0:null==(b=gE())?void 0:null==(c=b.loggingHotConfig)?void 0:null==(d=c.eventLoggingConfig)?void 0:d.payloadPolicies;if(e)for(b=0;b<e.length;b++)if(e[b].payloadNumber===a)return e[b]}};
zsa=function(a){a=Object.keys(a);a=g.u(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,kta[b])return b};
Bsa=function(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}};
tF=function(a){return"gelDebuggingEvent"===a};
Vsa=function(a){return(void 0===a?0:a)&&g.LB("vss_through_gel_video_stats")?"video_stats":"log_event"};
AF=function(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||(0,g.GD)());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ZE();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!g.LB("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:lta(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete zF[d.sequenceGroup]);(d.sendIsolatedPayload?Csa:Esa)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)};
mta=function(a){Hsa(void 0,void 0,void 0===a?!1:a)};
lta=function(a){zF[a]=a in zF?zF[a]+1:0;return zF[a]};
qta=function(a,b){nta||(nta=!0);ota=a;BF=b;pta=!1};
g.rD=function(a,b,c){c=void 0===c?{}:c;var d=rta;g.JB("ytLoggingEventsDefaultDisabled",!1)&&rta===g.HE&&(d=null);if(g.LB("web_all_payloads_via_jspb"))if(c.timestamp||(c.lact=ZE(),c.timestamp=(0,g.GD)()),ota&&BF){var e=ota[a];if(e){e=e(sta(b));var f=e[1];(e[0]||!g.LB("jspb_translator_return_completion"))&&f&&BF[a]?(BF[a](f,c,d||void 0),tta()):(QB(new g.fD("Unable to call logFn for payload",a)),AF(a,b,d,c))}else{if(!g.LB("web_translate_player_logs"))QB(new g.fD("Unable to translate payload to JSPB",
a));else if(!1===pta){var h=!1;e=Pqa("app_received_payload",function(){h=!0});
lE("player_pass_json_gel_to_app",{payloadName:a,payload:b,options:c});if(h)return;Oqa(e);Pqa("app_has_initialized",function(){lE("player_pass_json_gel_to_app",{payloadName:a,payload:b,options:c})})}AF(a,b,d,c)}}else uta.push({payloadName:a,
payload:b,options:c});else AF(a,b,d,c)};
tta=function(a){a=void 0===a?!1:a;var b=uta;uta=[];if(b){b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,a?AF(c.payloadName,c.payload,rta,c.options):g.rD(c.payloadName,c.payload,c.options)}};
sta=function(a){if(!g.LB("jspb_convert_payloads_to_lower_camel")||!g.ab(a))return a;for(var b=Object.keys(a),c=0;c<b.length;c++){var d=vta(b[c]);b[c]!==d&&(a[d]=a[b[c]],delete a[b[c]]);if("object"===typeof a[d]&&!g.$a(a[d]))a[d]=sta(a[d]);else if(g.$a(a[d])){for(var e=a[d],f=[],h=0;h<e.length;h++)f.push(sta(e[h]));a[d]=f}}return a};
vta=function(a){return a.includes("_")?a.toLowerCase().replace(/([_][a-z])/g,function(b){return b.toUpperCase().replace("_","")}):a};
CF=function(a,b,c,d){d=void 0===d?{}:d;var e=Math.round(d.timestamp||(0,g.GD)());Jj(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new cna;if(d.lact)Jj(e,1,isFinite(d.lact)?d.lact:-1);else if(d.timestamp)Jj(e,1,-1);else{var f=ZE();Jj(e,1,isFinite(f)?f:-1)}if(d.sequenceGroup&&!g.LB("web_gel_sequence_info_killswitch")){f=d.sequenceGroup;var h=lta(f),l=new EB;l.Rw(h);P(l,1,f);N(e,EB,3,l);d.endOfSequence&&delete wta[d.sequenceGroup]}N(b,cna,33,e);(d.sendIsolatedPayload?Fsa:Gsa)(a,{endpoint:"log_event",payload:b,
cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)};
DF=function(a,b,c){c=void 0===c?{}:c;var d=!1;g.JB("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);CF(a,b,d?null:g.HE,c)};
xta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,nB,72,EF,a);c?CF("visualElementShown",d,c,b):DF("visualElementShown",d,b)};
yta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,mB,73,EF,a);c?CF("visualElementHidden",d,c,b):DF("visualElementHidden",d,b)};
zta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,lB,78,EF,a);c?CF("visualElementGestured",d,c,b):DF("visualElementGestured",d,b)};
Ata=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,oB,208,EF,a);c?CF("visualElementStateChanged",d,c,b):DF("visualElementStateChanged",d,b)};
Bta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,jB,156,EF,a);c?CF("screenCreated",d,c,b):DF("screenCreated",d,b)};
Cta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,hB,202,EF,a);c?CF("playbackAssociated",d,c,b):DF("playbackAssociated",d,b)};
Dta=function(a,b,c){var d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(d,kB,215,EF,a);c?CF("visualElementAttached",d,c,b):DF("visualElementAttached",d,b)};
FF=function(a){this.j=a};
g.GF=function(a){return new FF({trackingParams:a})};
Fta=function(a){var b=Eta++;return new FF({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0,loggingDirectives:void 0})};
Gta=function(a){return g.JB("client-screen-nonce-store",{})[void 0===a?0:a]};
Hta=function(a,b){b=void 0===b?0:b;var c=g.JB("client-screen-nonce-store");c||(c={},IB("client-screen-nonce-store",c));c[b]=a};
Ita=function(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Jta=function(a){return g.JB(Ita(void 0===a?0:a))};
g.HF=function(a){return(a=Jta(void 0===a?0:a))?new FF({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null};
Kta=function(){var a=g.JB("csn-to-ctt-auth-info");a||(a={},IB("csn-to-ctt-auth-info",a));return a};
Lta=function(){return Object.values(g.JB("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})};
g.IF=function(a){a=Gta(void 0===a?0:a);if(!a&&!g.JB("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null};
Nta=function(a){for(var b=g.u(Object.values(Mta)),c=b.next();!c.done;c=b.next())if(g.IF(c.value)===a)return!0;return!1};
Ota=function(a,b,c){var d=Kta();(c=g.IF(c))&&delete d[c];b&&(d[a]=b)};
JF=function(a){return Kta()[a]};
Qta=function(a,b,c,d){c=void 0===c?0:c;if(a!==Gta(c)||b!==g.JB(Ita(c)))if(Ota(a,d,c),Hta(a,c),IB(Ita(c),b),b=function(){setTimeout(function(){if(a)if(g.LB("web_time_via_jspb")){var e=new Dma;P(e,1,Pta);P(e,2,a);var f=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(f,Dma,111,EF,e);DF("foregroundHeartbeatScreenAssociated",f)}else g.rD("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Pta,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()};
Sta=function(a,b){var c=void 0===c?!0:c;var d=g.JB("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.vl(window.location.href);e&&d.push(e);e=g.vl(a);if(g.Gb(d,e)||!e&&hc(a,"/"))if(d=document.createElement("a"),g.zn(d,a),a=d.href)if(a=wl(a),a=Uea(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.IF()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Rta(a,b,f)}else Rta(a,b)};
Rta=function(a,b,c){a=Tta(a);b=b?g.Al(b):"";c=c||5;goa()&&g.pC(a,b,c)};
Tta=function(a){for(var b=g.u(Uta),c=b.next();!c.done;c=b.next())a=El(a,c.value);return"ST-"+Ie(a).toString(36)};
Vta=function(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")};
Wta=function(){this.zs=[];this.gr=[]};
$ta=function(){if(!Xta){var a=Xta=new Wta;a.gr.length=0;a.zs.length=0;Yta(a,Zta)}return Xta};
Yta=function(a,b){b.gr&&a.gr.push.apply(a.gr,b.gr);b.zs&&a.zs.push.apply(a.zs,b.zs)};
bua=function(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=aua(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=aua(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=aua(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)};
aua=function(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity};
dua=function(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cua(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var h=a[e],l=b,m=c;f="string"!==typeof h||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(h=bua(atob(h.replace(/-/g,"+").replace(/_/g,"/"))))?cua(f+".ve",h,l,m):0;d+=f;d+=cua(e,a[e],b,c);if(500<d)break}}else c[b]=KF(a),d+=c[b].length;else c[b]=KF(a),d+=c[b].length;return d};
cua=function(a,b,c,d){c+="."+a;a=KF(b);d[c]=a;return c.length+a.length};
KF=function(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}};
jpa=function(a){g.LF(a)};
g.MF=function(a){g.LF(a,"WARNING")};
g.LF=function(a,b){var c=void 0===c?{}:c;c.name=g.JB("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.JB("INNERTUBE_CONTEXT_CLIENT_VERSION");b=void 0===b?"ERROR":b;var d=!1;b=void 0===b?"ERROR":b;d=void 0===d?!1:d;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(g.LB("console_log_js_exceptions")){var e=[];e.push("Name: "+a.name);e.push("Message: "+a.message);a.hasOwnProperty("params")&&e.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&e.push("Error args: "+JSON.stringify(a.args));
e.push("File name: "+a.fileName);e.push("Stacktrace: "+a.stack);window.console.log(e.join("\n"),a)}if(!(5<=eua)){e=fua;var f=Caa(a),h=f.message||"Unknown Error",l=f.name||"UnknownError",m=f.stack||a.B||"Not available";if(m.startsWith(l+": "+h)){var n=m.split("\n");n.shift();m=n.join("\n")}n=f.lineNumber||"Not available";f=f.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var q=0;q<a.args.length&&!(p=dua(a.args[q],"params."+q,c,p),500<=p);q++);else if(a.hasOwnProperty("params")&&
a.params){var r=a.params;if("object"===typeof a.params)for(q in r){if(r[q]){var t="params."+q,v=KF(r[q]);c[t]=v;p+=t.length+v.length;if(500<p)break}}else c.params=KF(r)}if(e.length)for(q=0;q<e.length&&!(p=dua(e[q],"params.context."+q,c,p),500<=p);q++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:h,name:l,lineNumber:n,fileName:f,stack:m,params:c,sampleWeight:1};e=Number(a.columnNumber);isNaN(e)||(c.lineNumber=c.lineNumber+":"+e);if("IGNORED"===a.level)a=
0;else a:{a=$ta();e=g.u(a.gr);for(h=e.next();!h.done;h=e.next())if(h=h.value,c.message&&c.message.match(h.dA)){a=h.weight;break a}a=g.u(a.zs);for(e=a.next();!e.done;e=a.next())if(e=e.value,e.callback(c)){a=e.weight;break a}a=1}c.sampleWeight=a;a=g.u(gua);for(e=a.next();!e.done;e=a.next())if(e=e.value,e.zJ[c.name])for(l=g.u(e.zJ[c.name]),h=l.next();!h.done;h=l.next())if(q=h.value,h=c.message.match(q.zj)){c.params["params.error.original"]=h[0];l=q.groups;q={};for(n=0;n<l.length;n++)q[l[n]]=h[n+1],c.params["params.error."+
l[n]]=h[n+1];c.message=e.aP(q);break}c.params||(c.params={});a=$ta();c.params["params.errorServiceSignature"]="msg="+a.gr.length+"&cb="+a.zs.length;c.params["params.serviceWorker"]="false";g.Ua.document&&g.Ua.document.querySelectorAll&&(c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));g.Yd("sample").constructor!==g.Sd&&(c.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(0!==c.sampleWeight&&!hua.has(c.message)){if(d&&
g.LB("web_enable_error_204"))iua(void 0===b?"ERROR":b,c);else{b=void 0===b?"ERROR":b;"ERROR"===b?(NF.oa("handleError",c),g.LB("record_app_crashed_web")&&0===jua&&1===c.sampleWeight&&(jua++,g.LB("errors_via_jspb")?(d=new Xz,d=R(d,1,1),g.LB("report_client_error_with_app_crash_ks")||(a=new Wz,e=new Fz,h=new Ez,l=new Dz,l=P(l,1,c.message),h=N(h,Dz,3,l),e=N(e,Ez,5,h),a=N(a,Fz,9,e),N(d,Wz,4,a)),a=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB,vj(a,Xz,20,EF,d),DF("appCrashed",a)):(d={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},
g.LB("report_client_error_with_app_crash_ks")||(d.systemHealth={crashData:{clientError:{logMessage:{message:c.message}}}}),g.rD("appCrashed",d))),kua++):"WARNING"===b&&NF.oa("handleWarning",c);if(g.LB("kevlar_gel_error_routing"))a:{d=b;if(g.LB("errors_via_jspb")){if(lua())a=void 0;else{h=new uz;P(h,1,c.stack);c.fileName&&P(h,4,c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||
(Hj(h,2,Number(a[0])),Hj(h,3,Number(a[1]))):Hj(h,2,Number(a[0])));a=new Dz;P(a,1,c.message);P(a,3,c.name);Hj(a,6,c.sampleWeight);"ERROR"===d?R(a,2,2):"WARNING"===d?R(a,2,1):R(a,2,0);e=new Cz;Gj(e,1,!0);vj(e,uz,3,OF,h);h=new sz;P(h,3,window.location.href);l=g.JB("FEXP_EXPERIMENTS",[]);for(q=0;q<l.length;q++)h.B(l[q]);l=g.JB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!KB("web_disable_gel_stp_ecatcher_killswitch")&&l)for(q=g.u(Object.keys(l)),n=q.next();!n.done;n=q.next())n=n.value,f=new az,P(f,1,
n),P(f,2,String(l[n])),h.j(f);if(l=c.params)for(q=g.u(Object.keys(l)),n=q.next();!n.done;n=q.next())n=n.value,f=new az,P(f,1,"client."+n),P(f,2,String(l[n])),h.j(f);q=g.JB("SERVER_NAME");l=g.JB("SERVER_VERSION");q&&l&&(n=new az,P(n,1,"server.name"),P(n,2,q),h.j(n),q=new az,P(q,1,"server.version"),P(q,2,l),h.j(q));l=new Ez;N(l,sz,1,h);N(l,Cz,2,e);N(l,Dz,3,a);a=l}if(!a)break a;e=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB;vj(e,Ez,163,EF,a);DF("clientError",e)}else{a=void 0;a=void 0===a?{}:
a;if(lua())a=void 0;else{h={stackTrace:c.stack};c.fileName&&(h.filename=c.fileName);e=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==e.length&&(1!==e.length||isNaN(Number(e[0]))?2!==e.length||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(h.lineNumber=Number(e[0]),h.columnNumber=Number(e[1])):h.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===d?e.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(e.level="ERROR_LEVEL_WARNNING");
h={isObfuscated:!0,browserStackInfo:h};a.pageUrl=window.location.href;a.kvPairs=[];g.JB("FEXP_EXPERIMENTS")&&(a.experimentIds=g.JB("FEXP_EXPERIMENTS"));q=g.JB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!KB("web_disable_gel_stp_ecatcher_killswitch")&&q)for(n=g.u(Object.keys(q)),l=n.next();!l.done;l=n.next())l=l.value,a.kvPairs.push({key:l,value:String(q[l])});if(q=c.params)for(n=g.u(Object.keys(q)),l=n.next();!l.done;l=n.next())l=l.value,a.kvPairs.push({key:"client."+l,value:String(q[l])});l=g.JB("SERVER_NAME");
q=g.JB("SERVER_VERSION");l&&q&&(a.kvPairs.push({key:"server.name",value:l}),a.kvPairs.push({key:"server.version",value:q}));a={errorMetadata:a,stackTrace:h,logMessage:e}}if(!a)break a;g.rD("clientError",a)}if("ERROR"===d||g.LB("errors_flush_gel_always_killswitch"))b:{if(g.LB("web_fp_via_jspb")&&(tta(!0),mta(!0),!g.LB("web_fp_via_jspb_and_json")))break b;mta()}}g.LB("suppress_error_204_logging")||iua(b,c)}try{hua.add(c.message)}catch(x){}eua++}}}};
lua=function(){for(var a=g.u(mua),b=a.next();!b.done;b=a.next())if(g.rC(b.value.toLowerCase()))return!0;return!1};
iua=function(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:g.JB("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=g.u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=g.JB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=
g.u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=g.JB("SERVER_NAME");b=g.JB("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}g.gC(g.JB("ECATCHER_REPORT_HOST","")+"/error_204",a)};
nua=function(a){var b=g.Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,g.pa(b))};
g.PF=function(a,b,c){void 0===c?delete a[b.name]:a[b.name]=c};
oua=function(a){a=void 0===a||a?VE(16):$ra(16);for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
pua=function(a){for(var b=0,c=0;c<a.length;c++)b=31*b+a.charCodeAt(c),c<a.length-1&&(b%=Math.pow(2,47));return b%1E5};
qua=function(a){jE.call(this,1,arguments);this.csn=a};
wua=function(a,b,c,d,e,f,h,l){function m(){g.MF(new g.fD("newScreen() parent element does not have a VE - rootVe",b))}
var n=rua(),p=new FF({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=QF({},n);e&&(f.cttAuthInfo=e);if(g.LB("il_via_jspb")){e=Nma((new jB).j(n),p.getAsJspb());c&&c.visualElement?(p=new Lma,c.clientScreenNonce&&P(p,2,c.clientScreenNonce),Mma(p,c.visualElement.getAsJspb()),h&&R(p,4,sua[h]),N(e,Lma,5,p)):c&&m();d&&P(e,3,d);if(g.LB("expectation_logging")&&l&&l.screenCreatedLoggingExpectations){c=new Ax;l=g.u(l.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=l.next();!d.done;d=l.next())d=
d.value,d.screenVeType&&(d=Xla(new yx,d.screenVeType),c.j(d));N(e,Ax,7,c)}Bta(e,f,a)}else e={csn:n,pageVe:p.getAsJson()},g.LB("expectation_logging")&&l&&l.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=l.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},h&&(e.implicitGesture.gestureType=h)):c&&m(),d&&(e.cloneCsn=d),a?AF("screenCreated",e,a,f):g.rD("screenCreated",e,f);lE(tua,new qua(n));
RF.clear();uua.clear();vua.clear();return n};
g.SF=function(a,b,c,d,e){g.xua(a,b,c,[d],void 0===e?!1:e)};
g.xua=function(a,b,c,d,e){e=void 0===e?!1:e;for(var f=QF({cttAuthInfo:JF(b)||void 0},b),h=g.u(d),l=h.next();!l.done;l=h.next()){l=l.value;var m=l.getAsJson();(g.kd(m)||!m.trackingParams&&!m.veType)&&g.MF(Error("Child VE logged with no data"));if(g.LB("no_client_ve_attach_unless_shown")){var n=TF(l,b);if(m.veType&&!uua.has(n)&&!vua.has(n)&&!e){RF.set(n,[a,b,c,l]);return}l=TF(c,b);RF.has(l)?yua(c,b):vua.set(l,!0)}}d=d.filter(function(q){q.csn!==b?(q.csn=b,q=!0):q=!1;return q});
if(g.LB("il_via_jspb")){var p=Oma((new kB).j(b),c.getAsJspb());g.dq(d,function(q){q=q.getAsJspb();xj(p,3,tA,q)});
"UNDEFINED_CSN"===b?UF("visualElementAttached",f,void 0,p):Dta(p,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:g.dq(d,function(q){return q.getAsJson()})},"UNDEFINED_CSN"===b?UF("visualElementAttached",f,c):a?AF("visualElementAttached",c,a,f):g.rD("visualElementAttached",c,f)};
Aua=function(a,b,c,d,e,f){zua(c,b);d=QF({cttAuthInfo:JF(b)||void 0},b);g.LB("il_via_jspb")?(e=(new nB).j(b),c=c.getAsJspb(),c=N(e,tA,2,c),c=R(c,4,1),f&&N(c,iB,3,f),"UNDEFINED_CSN"===b?UF("visualElementShown",d,void 0,c):xta(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?UF("visualElementShown",d,f):a?AF("visualElementShown",f,a,d):g.rD("visualElementShown",f,d))};
Bua=function(a,b,c,d){var e=(d=void 0===d?!1:d)?16:8,f=QF({cttAuthInfo:JF(b)||void 0,endOfSequence:d},b);g.LB("il_via_jspb")?(e=(new mB).j(b),c=c.getAsJspb(),c=N(e,tA,2,c),R(c,4,d?16:8),"UNDEFINED_CSN"===b?UF("visualElementHidden",f,void 0,c):yta(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?UF("visualElementHidden",f,d):a?AF("visualElementHidden",d,a,f):g.rD("visualElementHidden",d,f))};
Dua=function(a,b,c,d,e){Cua(a,b,c,d,e)};
Cua=function(a,b,c,d,e){var f=void 0;zua(c,b);f=f||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";var h=QF({cttAuthInfo:JF(b)||void 0},b);g.LB("il_via_jspb")?(d=(new lB).j(b),c=c.getAsJspb(),c=N(d,tA,2,c),R(c,4,sua[f]),e&&N(c,iB,3,e),"UNDEFINED_CSN"===b?UF("visualElementGestured",h,void 0,c):zta(c,h,a)):(e={csn:b,ve:c.getAsJson(),gestureType:f},d&&(e.clientData=d),"UNDEFINED_CSN"===b?UF("visualElementGestured",h,e):a?AF("visualElementGestured",e,a,h):g.rD("visualElementGestured",e,h))};
Eua=function(){var a;g.LB("enable_web_96_bit_csn")?a=oua():g.LB("enable_web_96_bit_csn_no_crypto")?a=oua(!1):a=g.tg(g.sg(Math.random()+""),3);return a};
UF=function(a,b,c,d){VF.push({payloadName:a,payload:c,zt:d,options:b});Fua||(Fua=Pqa(tua,Gua))};
Gua=function(a){if(VF){for(var b=g.u(VF),c=b.next();!c.done;c=b.next())if(c=c.value,g.LB("il_via_jspb")&&c.zt)switch(c.zt.j(a.csn),c.payloadName){case "screenCreated":Bta(c.zt,c.options);break;case "visualElementAttached":Dta(c.zt,c.options);break;case "visualElementShown":xta(c.zt,c.options);break;case "visualElementHidden":yta(c.zt,c.options);break;case "visualElementGestured":zta(c.zt,c.options);break;case "visualElementStateChanged":Ata(c.zt,c.options);break;default:g.MF(new g.fD("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,g.rD(c.payloadName,c.payload,c.options));VF.length=0}Fua=0};
TF=function(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b};
zua=function(a,b){if(g.LB("no_client_ve_attach_unless_shown")){var c=TF(a,b);uua.set(c,!0);yua(a,b)}};
yua=function(a,b){a=TF(a,b);RF.has(a)&&(b=RF.get(a)||[],g.SF(b[0],b[1],b[2],b[3],!0),RF.delete(a))};
QF=function(a,b){g.LB("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a};
g.WF=function(a,b,c,d){g.PB(Aua)(void 0,a,b,c,d,void 0)};
g.XF=function(a,b){g.PB(function(){g.dc(b,function(c){zua(c,a);var d=QF({cttAuthInfo:JF(a)||void 0},a);if(g.LB("il_via_jspb")){var e=(new nB).j(a);c=c.getAsJspb();e=N(e,tA,2,c);e=R(e,4,4);"UNDEFINED_CSN"===a?UF("visualElementShown",d,void 0,e):xta(e,d)}else e={csn:a,ve:c.getAsJson(),eventType:4},"UNDEFINED_CSN"===a?UF("visualElementShown",d,e):g.rD("visualElementShown",e,d)})})()};
g.YF=function(a,b){g.PB(function(){g.dc(b,function(c){Bua(void 0,a,c)})})()};
g.ZF=function(a,b,c){g.PB(Dua)(void 0,a,b,c,void 0)};
Kua=function(a){var b=g.T(a,$F);if(b)return b;if((b=g.T(a,Hua))&&b.commands)return Iua(b.commands);if((a=g.T(a,Jua))&&a.commands)return Iua(a.commands)};
Iua=function(a){if(0!==a.length){var b={commands:[]};a=g.u(a);for(var c=a.next();!c.done;c=a.next())(c=Kua(c.value))&&b.commands.push(c);a={};g.PF(a,g.aG,b);return a}};
cG=function(a,b,c,d,e,f){c=void 0===c?{}:c;this.componentType=a;this.renderer=void 0===b?null:b;this.macros=c;this.layoutId=d;this.interactionLoggingClientData=e;this.j=f;this.id=bG(a)};
bG=function(a){var b=":"+(g.nv.getInstance().j++).toString(36);return a+b};
g.dG=function(a){a=void 0===a?!1:a;g.J.call(this);this.jj=new g.Yu(a);g.L(this,this.jj)};
g.eG=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
fG=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
gG=function(){var a="ytp-id-"+Lua.toString();Lua++;return a};
g.hG=function(a){g.J.call(this);this.Nb={};this.Kd={};this.element=this.createElement(a)};
iG=function(a,b,c,d){if("{{"===d.substr(0,2))a.Kd[d]=[b,c];else return d};
Mua=function(a,b){var c=[];if(!b)return c;b=g.u(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.I?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,h){0<h&&c.push(g.vf("BR"));c.push(g.wf(f))}):c.push(g.wf(d))}return c};
jG=function(a,b,c,d){if("child"===c){g.yf(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.I?[d]:d;c=Mua(a,e);c=g.u(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?g.Qr(b,"cssText",d?d:""):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=g.de(g.yn(a))),b.setAttribute(c,a))};
g.U=function(a){g.hG.call(this,a);this.Gb=!0;this.Z=!1;this.listeners=[]};
g.kG=function(a,b){b?a.show():a.hide()};
Nua=function(a,b){a.element.setAttribute("aria-label",b)};
g.lG=function(a){g.U.call(this,a);this.Ra=new g.dG;g.L(this,this.Ra)};
mG=function(a,b,c,d,e,f,h){h=void 0===h?null:h;g.lG.call(this,b);this.api=a;this.macros={};this.componentType=c;this.K=this.N=null;this.yb=h;this.layoutId=d;this.interactionLoggingClientData=e;this.kb=f;this.Za=null;this.ZQ=new TE(this.element);g.L(this,this.ZQ);this.wb=this.T(this.element,"click",this.onClick);this.Ea=[];this.Aa=new Yra(this.onClick,this);g.L(this,this.Aa);this.Hb=!1;this.fb=this.ma=null};
nG=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.MF(Error("Got null or undefined adText object")),"";var c=g.He(a.text);if(!a.isTemplated)return c;if(null==b)return g.MF(Error("Missing required parameters for a templated message")),c;a=g.u(Object.entries(b));for(b=a.next();!b.done;b=a.next()){var d=g.u(b.value);b=d.next().value;d=d.next().value;c=c.replace("{"+b+"}",d)}return c};
Oua=function(a){a=void 0===a?null:a;return null!=a&&(a=a.thumbnail,null!=a&&null!=a.thumbnails&&0!=a.thumbnails.length&&null!=a.thumbnails[0].url)?g.He(a.thumbnails[0].url):""};
Pua=function(a){a=void 0===a?null:a;return null!=a&&(a=a.thumbnail,null!=a&&null!=a.thumbnails&&0!=a.thumbnails.length&&null!=a.thumbnails[0].width&&null!=a.thumbnails[0].height)?new g.Ce(a.thumbnails[0].width||0,a.thumbnails[0].height||0):new g.Ce(0,0)};
g.oG=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.u(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
g.pG=function(a){if(a.simpleText)return a=document.createTextNode(a.simpleText),a;var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];if(d.text){var e=b,f=e.push,h=null;var l=d.text;d.bold&&(h=uf("B",null,h||l));d.italics&&(h=uf("I",null,h||l));d.strikethrough&&(h=uf("STRIKE",null,h||l));d.navigationEndpoint&&d.navigationEndpoint.urlEndpoint&&(d=d.navigationEndpoint.urlEndpoint,h=uf("A",null,h||l),g.zn(h,d.url),"TARGET_NEW_WINDOW"==d.target&&(h.target="_blank"));l=h||uf("SPAN",null,
l);f.call(e,l)}}return 1==b.length?b[0]:uf("SPAN",null,b)};
g.Qua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
Rua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.qG=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",W:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.rG=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",W:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
Sua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",W:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{I:"path",W:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
Tua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
Uua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.sG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
Vua=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
Wua=function(){return{I:"svg",W:{viewBox:"0 0 24 24"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
Xua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]}};
Yua=function(){return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",W:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",W:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
Zua=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"m 17,23 h 2 V 17 H 17 Z M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 Z m 0,18 c -4.41,0 -8,-3.59 -8,-8 0,-4.41 3.59,-8 8,-8 4.41,0 8,3.59 8,8 0,4.41 -3.59,8 -8,8 z M 17,15 h 2 v -2 h -2 z"}}]}};
g.$ua=function(){return{I:"svg",W:{viewBox:"0 0 24 24"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",fill:"#fff"}}]}};
tG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
ava=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
bva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.cva=function(){return{I:"svg",W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",W:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
dva=function(){return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",W:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",W:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]}};
eva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
fva=function(){return{I:"svg",W:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},V:[{I:"path",S:"ytp-svg-fill",W:{"clip-rule":"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 17C17.8 16.29 14.7 15 12 15C9.3 15 6.2 16.29 6 17.01V18H18V17ZM4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 17V20H4V17Z","fill-rule":"evenodd"}}]}};
gva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
hva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
iva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.jva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.kva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,W:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
g.uG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 16 16",width:"100%"},V:[{I:"path",W:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}};
lva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
mva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Dc:!0,S:"ytp-svg-fill",W:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
vG=function(a){if(!a)return null;switch(a.iconType){case "OPEN_IN_NEW":return dva();case "CHECK_BOX":return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#d4d4d4"}}]};case "CHECK_BOX_OUTLINE_BLANK":return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
fill:"#d4d4d4"}},{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}}]};case "CLOSE":return g.sG();case "INFO_OUTLINE":return Yua();case "REMOVE_CIRCLE":return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",fill:"#757575"}}]};case "SKIP_NEXT":return bva();case "SKIP_NEXT_NEW":return{I:"svg",W:{height:"100%",viewBox:"-6 -6 36 36",
width:"100%"},V:[{I:"path",W:{d:"M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z",fill:"#fff"}}]};case "LIKE":return g.$ua();case "DISLIKE":return Wua();default:return g.MF(new g.fD("Unexpected icon:",a)),null}};
wG=function(a,b,c,d,e,f,h,l){e=void 0===e?[]:e;h=void 0===h?!1:h;e={I:"button",Ma:["ytp-ad-button"].concat(e)};null!=l&&(e.W={tabindex:l});mG.call(this,a,e,void 0===f?"button":f,b,c,d);this.j=this.B=this.C=null;this.D=h;this.hide()};
nva=function(a){var b=null;null!=a.j&&(b=[a.j.serviceEndpoint,a.j.navigationEndpoint].filter(function(c){return null!=c}),a.j.command&&(b=b.concat(a.j.command)));
return b||[]};
xG=function(){g.J.call(this);var a=this;this.j=new Map;this.B=Loa(function(b){if(b.target&&(b=a.j.get(b.target))&&b)for(var c=0;c<b.length;c++)g.zE(b[c])})};
ova=function(){null==yG&&(yG=new xG);return yG};
zG=function(a,b){if(a.simpleText){a:{a=a.simpleText;if(b&&(b=pva(a))){b=uf("SPAN",null,b);break a}b=g.wf(a)}return b}var c=[];if(a.runs)for(var d=0;d<a.runs.length;d++){var e=a.runs[d];e.text&&c.push(qva(e,b))}return 1==c.length?c[0]:uf("SPAN",null,c)};
qva=function(a,b){var c=null,d=a.text;b&&(d=pva(d)||d);a.bold&&(c=uf("B",null,c||d));a.italics&&(c=uf("I",null,c||d));a.strikethrough&&(c=uf("STRIKE",null,c||d));a.navigationEndpoint&&g.T(a.navigationEndpoint,g.AG)&&(b=g.T(a.navigationEndpoint,g.AG),c=uf("A",null,c||d),g.zn(c,b.url),"TARGET_NEW_WINDOW"==b.target&&(c.target="_blank"),a=a.navigationEndpoint.loggingUrls)&&(a=a.map(function(e){return e.baseUrl}),ova().register(c,a),g.Bu(c,"ytp-ad-has-logging-urls"));
return c||uf("SPAN",null,d)};
pva=function(a){a=a.split(/(?:\r\n|\r|\n)/g);if(1<a.length){for(var b=[a[0]],c=1;c<a.length;c++)b.push(uf("BR")),b.push(a[c]);return b}return null};
BG=function(a,b,c,d,e,f,h,l){f=void 0===f?!1:f;h=void 0===h?[]:h;mG.call(this,a,{I:"span",Ma:["ytp-ad-hover-text-button"].concat(h)},void 0===l?"ad-hover-text-button":l,b,c,d);this.button=this.B=null;this.G=f;this.D=e;this.hide()};
CG=function(a){return a&&a.thumbnails&&0!=(a.thumbnails||null).length&&a.thumbnails[0].url?g.He(a.thumbnails[0].url):""};
DG=function(a,b,c,d,e,f){f=void 0===f?!1:f;mG.call(this,a,{I:"img",S:"ytp-ad-image"},"ad-image",b,c,d,void 0===e?null:e);this.j=f;this.hide()};
EG=function(a,b,c,d,e,f){e=void 0===e?[]:e;mG.call(this,a,{I:"div",Ma:["ytp-ad-confirm-dialog-background"],V:[{I:"div",S:"ytp-ad-confirm-dialog-container",V:[{I:"div",Ma:["ytp-ad-confirm-dialog"].concat(e),W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-confirm-dialog-title",xa:"{{title}}"},{I:"div",S:"ytp-ad-confirm-dialog-messages"},{I:"div",S:"ytp-ad-confirm-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-confirm-dialog-cancel-button",xa:"{{cancelLabel}}"},{I:"button",S:"ytp-ad-confirm-dialog-confirm-button",
xa:"{{confirmLabel}}"}]}]}]},{I:"button",Ma:["ytp-ad-confirm-dialog-close-overlay-button","ytp-ad-button","ytp-ad-button-link"],V:[{I:"span",S:"ytp-ad-button-icon",V:[g.sG()]}]}]},void 0===f?"confirm-dialog":f,b,c,d);this.Y=this.Ga("ytp-ad-confirm-dialog-close-overlay-button");this.D=this.Ga("ytp-ad-confirm-dialog-cancel-button");this.G=this.Ga("ytp-ad-confirm-dialog-confirm-button");this.qa=this.Ga("ytp-ad-confirm-dialog-messages");this.C=null;this.j=new TC;g.L(this,this.j);this.B=null;this.hide()};
rva=function(a,b){if(b.title){var c=g.oG(b.title);a.updateValue("title",c)}if(b.dialogMessages){c=g.u(b.dialogMessages);for(var d=c.next();!d.done;d=c.next())d=zG(d.value),a.qa.appendChild(d)}b.cancelLabel&&(c=g.oG(b.cancelLabel),a.updateValue("cancelLabel",c),a.j.T(a.D,"click",function(e){return a.nL(e)}));
b.confirmLabel&&(b=g.oG(b.confirmLabel),a.updateValue("confirmLabel",b),a.j.T(a.G,"click",function(e){return a.wP(e)}));
a.j.T(a.Y,"click",function(e){return a.vP(e)})};
FG=function(a,b,c,d,e,f){e=void 0===e?[]:e;f=void 0===f?"toggle-button":f;var h=bG("ytp-ad-toggle-button-input"),l={role:"button","aria-label":"{{tooltipText}}"};a.U().experiments.ob("fix_h5_toggle_button_a11y")&&(l.tabindex="0");a.U().experiments.ob("fix_toggle_button_role_for_ad_components")&&(l.role="checkbox");mG.call(this,a,{I:"div",Ma:["ytp-ad-toggle-button"].concat(e),V:[{I:"label",S:"ytp-ad-toggle-button-label",W:{"for":h},V:[{I:"span",S:"ytp-ad-toggle-button-icon",W:l,V:[{I:"span",S:"ytp-ad-toggle-button-untoggled-icon",
xa:"{{untoggledIconTemplateSpec}}"},{I:"span",S:"ytp-ad-toggle-button-toggled-icon",xa:"{{toggledIconTemplateSpec}}"}]},{I:"input",S:"ytp-ad-toggle-button-input",W:{id:h,type:"checkbox"}},{I:"span",S:"ytp-ad-toggle-button-text",xa:"{{buttonText}}"},{I:"span",S:"ytp-ad-toggle-button-tooltip",xa:"{{tooltipText}}"}]}]},f,b,c,d);this.D=this.Ga("ytp-ad-toggle-button");this.j=this.Ga("ytp-ad-toggle-button-input");this.Ga("ytp-ad-toggle-button-label");this.C=this.Ga("ytp-ad-toggle-button-icon");this.Y=this.Ga("ytp-ad-toggle-button-untoggled-icon");
this.G=this.Ga("ytp-ad-toggle-button-toggled-icon");this.Da=this.Ga("ytp-ad-toggle-button-text");this.B=null;this.qa=!1;this.hide()};
sva=function(a){a.qa&&(a.isToggled()?(g.bs(a.Y,!1),g.bs(a.G,!0),a.api.U().experiments.ob("fix_toggle_button_role_for_ad_components")&&a.C.setAttribute("aria-checked",!0)):(g.bs(a.Y,!0),g.bs(a.G,!1),a.api.U().experiments.ob("fix_toggle_button_role_for_ad_components")&&a.C.setAttribute("aria-checked",!1)))};
tva=function(a,b){var c=null;a.B&&(c=(b?[a.B.defaultServiceEndpoint,a.B.defaultNavigationEndpoint]:[a.B.toggledServiceEndpoint]).filter(function(d){return null!=d}));
return c||[]};
uva=function(a,b,c){this.actionType=b;this.id=c;this.content=a};
GG=function(a){TC.call(this);this.j=a;this.T(this.j,"onAdUxUpdate",this.K)};
vva=function(a,b,c,d){mG.call(this,a,{I:"div",S:"ytp-ad-feedback-dialog-background",V:[{I:"div",S:"ytp-ad-feedback-dialog-container",V:[{I:"div",S:"ytp-ad-feedback-dialog-form",W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-feedback-dialog-title",V:[{I:"span",xa:"{{title}}"}]},{I:"span",S:"ytp-ad-info-dialog-feedback-options-title",xa:"{{reasonsTitle}}"},{I:"div",S:"ytp-ad-info-dialog-feedback-options"},{I:"div",S:"ytp-ad-feedback-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-feedback-dialog-cancel-button",
xa:"{{cancelLabel}}"},{I:"button",S:"ytp-ad-feedback-dialog-confirm-button",xa:"{{confirmLabel}}"}]}]}]}]},"ad-info-dialog",b,c,d);this.D=[];this.j=null;this.G=this.Ga("ytp-ad-feedback-dialog-cancel-button");this.Y=this.Ga("ytp-ad-feedback-dialog-confirm-button");this.qa=this.Ga("ytp-ad-info-dialog-feedback-options");this.Da=this.Ga("ytp-ad-feedback-dialog-title");this.C=this.B=null;this.hide()};
zva=function(a,b){var c=b.cancelRenderer&&b.cancelRenderer.buttonRenderer||null;c&&(a.j=new wG(a.api,a.layoutId,a.interactionLoggingClientData,a.kb,["ytp-ad-feedback-dialog-close-button"],"button"),g.L(a,a.j),a.j.init(bG("button"),c,a.macros),a.j.Sa("click",a.eY,a),a.j.Fa(a.element));b.title&&(c=g.oG(b.title),a.updateValue("title",c));b.reasonsTitle&&(c=g.oG(b.reasonsTitle),a.updateValue("reasonsTitle",c));b.reasons&&wva(a,b.reasons);b.cancelLabel&&(c=g.oG(b.cancelLabel),a.updateValue("cancelLabel",
c),g.PC(a.G,"click",function(){return a.eY()}));
b.confirmLabel&&(c=g.oG(b.confirmLabel),a.updateValue("confirmLabel",c),g.PC(a.Y,"click",function(){return xva(a)}));
b.undoRenderer&&yva(a,b.undoRenderer)};
wva=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;c=d.reason;null==c?g.MF(Error("AdFeedbackReason.reason was not set.")):(d=d.endpoint,null==d?g.MF(Error("AdFeedbackReason.endpoint was not set.")):(c=new Ava(c,d),g.L(a,c),d=c.Db(),a.qa.appendChild(d),a.D.push(c)))}};
yva=function(a,b){if(b=b&&b.buttonRenderer||null)b.serviceEndpoint?(a.B=new wG(a.api,a.layoutId,a.interactionLoggingClientData,a.kb,["ytp-ad-feedback-dialog-undo-mute-button"],"ad-feedback-undo-mute-button"),g.L(a,a.B),a.B.init(bG("ad-feedback-undo-mute-button"),b,a.macros),a.B.Sa("click",a.P9,a),a.B.Fa(a.Da)):g.MF(Error("AdFeedbackRenderer.undoRenderer.undoButtonRenderer was specified but did not contain a service endpoint."))};
xva=function(a){var b=a.D.filter(function(c){return c.isChecked()});
0!==b.length&&(b=b[0].B,a.layoutId?a.kb.executeCommand(b,a.layoutId):g.LF(Error("Missing layoutId for ad feedback dialog.")),a.api.onAdUxClicked("ad-feedback-dialog-confirm-button",a.layoutId),a.oa("a"),a.hide())};
Ava=function(a,b){this.B=b;this.j=new g.lG({I:"label",S:"ytp-ad-feedback-dialog-reason-label",V:[{I:"input",S:"ytp-ad-feedback-dialog-reason-input",W:{type:"radio",name:"feedback-reason-group"}},{I:"span",S:"ytp-ad-feedback-dialog-reason-text",xa:g.oG(a)}]});this.C=this.j.Ga("ytp-ad-feedback-dialog-reason-input")};
HG=function(a,b,c,d){EG.call(this,a,b,c,d,[],"ad-mute-confirm-dialog")};
Bva=function(a,b,c,d,e){mG.call(this,a,{I:"div",S:"ytp-ad-info-dialog-background",V:[{I:"div",S:"ytp-ad-info-dialog-container",V:[{I:"div",S:"ytp-ad-info-dialog-form",W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-info-dialog-title",xa:"{{title}}"},{I:"ul",S:"ytp-ad-info-dialog-ad-reasons"},{I:"div",S:"ytp-ad-info-dialog-message"},{I:"div",S:"ytp-ad-info-dialog-mute-container"},{I:"div",S:"ytp-ad-info-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-info-dialog-confirm-button",xa:"{{confirmLabel}}"}]}]}]}]},
"ad-info-dialog",b,c,d);this.j=this.B=null;this.Y=this.Ga("ytp-ad-info-dialog-confirm-button");this.ib=this.Ga("ytp-ad-info-dialog-mute-container");this.Va=this.Ga("ytp-ad-info-dialog-message");this.Ka=this.Ga("ytp-ad-info-dialog-ad-reasons");this.D=this.C=null;this.Da=e;this.G=null;this.Na=!1;this.qa=null;this.hide()};
Cva=function(a,b){if(b=b.content&&b.content.adFeedbackRenderer||null)a.B=new vva(a.api,a.layoutId,a.interactionLoggingClientData,a.kb),g.L(a,a.B),a.B.init(bG("ad-feedback-dialog"),b,a.macros),a.B.Fa(a.Da),a.B.subscribe("a",function(){return a.oa("c")})};
Dva=function(a,b){if(b=b.content&&b.content.confirmDialogRenderer||null)a.D=new HG(a.api,a.layoutId,a.interactionLoggingClientData,a.kb),g.L(a,a.D),a.D.init(bG("ad-mute-confirm-dialog"),b,a.macros),a.D.Fa(a.Da),a.D.subscribe("b",function(){return a.oa("c")})};
Eva=function(a){a.j&&a.j.Sa("click",a.kT,a);g.PC(a.Y,"click",function(){return a.kT()})};
IG=function(a,b,c,d,e,f){BG.call(this,a,b,c,d,void 0===f?!0:f,!0,["ytp-ad-info-hover-text-button"],"ad-info-hover-text-button");this.j=null;this.C=e;this.hide()};
Gva=function(a,b,c){b=b.dialog&&g.T(b.dialog,Fva)||null;null==b?g.LF(Error("AdInfoDialogEndpoint did not contain an AdInfoDialogRenderer.")):(a.j=new Bva(a.api,a.layoutId,a.interactionLoggingClientData,a.kb,a.C),g.L(a,a.j),a.j.init(bG("ad-info-dialog"),b,c),a.j.Fa(a.C),a.j.subscribe("d",function(){return a.oa("f")}),a.j.subscribe("c",function(){return a.oa("e")}))};
Jva=function(a,b,c){null==a.button?g.LF(Error("AdInfoHoverTextButton.button was expected but it was not created.")):(a.B&&g.Bu(a.B.element,"ytp-ad-info-hover-text-short"),(b=b&&b.serviceEndpoint&&g.T(b.serviceEndpoint,Hva)||null)?(Gva(a,b,c),a.button.Sa("click",function(){a.j&&!a.j.Gb&&(a.j.show(),Iva(a))})):a.button.Sa("click",function(){return Iva(a)}))};
Iva=function(a){a.api.onAdUxClicked("ad-info-icon-button",a.layoutId)};
JG=function(a,b,c,d,e,f){mG.call(this,a,{I:"div",S:"ytp-ad-text"},void 0===f?"ad-text":f,b,c,d,void 0===e?null:e);this.j=null;this.hide()};
Kva=function(a,b){b&&g.Gf(a.element,nG(a.j,b))};
KG=function(a,b,c,d,e,f,h){mG.call(this,a,b,c,d,e,f);this.j=h;g.L(this,this.j);this.Na=this.Y=-1};
LG=function(a){a.j&&-1===a.Y&&(a.Y=a.j.subscribe("h",a.Tn,a),a.Na=a.j.subscribe("g",a.Mp,a),a.Tn())};
MG=function(a){null!=a.j&&-1!==a.Y&&(a.j.Uh(a.Y),a.j.Uh(a.Na),a.Na=-1,a.Y=-1)};
g.NG=function(a,b,c,d,e,f){g.J.call(this);this.element=a;this.state=null;c||a.hide();this.B=b;this.C=void 0===d?b:d;this.j=f;this.onHidden=e;this.delay=new g.tu(this.jG,0,this);g.L(this,this.delay)};
OG=function(a,b){a=a.element.element;b?a.setAttribute("aria-hidden","true"):a.removeAttribute("aria-hidden")};
PG=function(a,b,c,d,e,f){KG.call(this,a,{I:"div",S:"ytp-ad-preview-slot"},"ad-preview",b,c,d,e);var h=this;this.ib=-1;this.D=this.api.U().experiments.ob("enable_modern_skip_button_on_web");this.B=new g.lG({I:"span",S:"ytp-ad-preview-container"});this.D&&this.B.element.classList.add("ytp-ad-preview-container-detached");g.L(this,this.B);this.C=this.D?new JG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,"ytp-ad-preview-text-modern"):new JG(this.api,this.layoutId,this.interactionLoggingClientData,
this.kb,"ytp-ad-preview-text");g.L(this,this.C);this.C.Fa(this.B.element);this.qa=this.D?new g.lG({I:"span",S:"ytp-ad-preview-image-modern"}):new g.lG({I:"span",S:"ytp-ad-preview-image"});g.L(this,this.qa);this.G=new DG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb);g.L(this,this.G);this.G.Fa(this.qa.element);this.qa.Fa(this.B.element);this.B.Fa(this.element);this.Da=new g.NG(this.B,400,!1,100,function(){return h.hide()});
g.L(this,this.Da);this.Ka=0;this.Va=!1;this.jb=f;this.hide()};
Lva=function(a){a.Da.show(100);a.show()};
Mva=function(a,b,c,d,e,f){KG.call(this,a,{I:"div",Ma:["ytp-flyout-cta","ytp-flyout-cta-inactive"],V:[{I:"div",S:"ytp-flyout-cta-icon-container"},{I:"div",S:"ytp-flyout-cta-body",V:[{I:"div",S:"ytp-flyout-cta-text-container",V:[{I:"div",S:"ytp-flyout-cta-headline-container"},{I:"div",S:"ytp-flyout-cta-description-container"}]},{I:"div",S:"ytp-flyout-cta-action-button-container"}]}]},"flyout-cta",b,c,d,e);this.C=new DG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,"ytp-flyout-cta-icon");
g.L(this,this.C);this.C.Fa(this.Ga("ytp-flyout-cta-icon-container"));this.api.U().L("web_rounded_thumbnails")&&this.C.element.classList.add("ytp-flyout-cta-icon-rounded");this.G=new JG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,"ytp-flyout-cta-headline");g.L(this,this.G);this.G.Fa(this.Ga("ytp-flyout-cta-headline-container"));this.D=new JG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,"ytp-flyout-cta-description");g.L(this,this.D);this.D.Fa(this.Ga("ytp-flyout-cta-description-container"));
a=["ytp-flyout-cta-action-button"];this.api.U().L("web_modern_buttons")&&a.push("ytp-flyout-cta-action-button-rounded");this.B=new wG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,a);g.L(this,this.B);this.B.Fa(this.Ga("ytp-flyout-cta-action-button-container"));this.B.element.setAttribute("tabIndex","-1");mu(this.B.element);this.qa=null;this.Da=0;this.Ka=f;this.hide()};
Nva=function(a,b,c,d,e){mG.call(this,a,{I:"div",S:"ytp-ad-instream-user-sentiment-container"},"instream-user-sentiment",b,c,d,void 0===e?null:e);var f=this;this.j=null;this.C=new FG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,["ytp-ad-instream-user-sentiment-like-button"]);g.L(this,this.C);this.C.Fa(this.element);this.B=new FG(this.api,this.layoutId,this.interactionLoggingClientData,this.kb,["ytp-ad-instream-user-sentiment-dislike-button"]);g.L(this,this.B);this.B.Fa(this.element);
this.D=new g.NG(this,400,!1,500,function(){return f.hide()});
g.L(this,this.D);this.hide()};
QG=function(a,b,c,d,e,f){e=void 0===e?0:e;f=void 0===f?!1:f;g.J.call(this);this.B=a;this.C=!1;this.Y=d;this.ma=f;this.K=!1;this.j=null;0<b&&(this.j=new g.tu(this.GU,b,this),g.L(this,this.j));this.G=new g.tu(this.GU,c,this);g.L(this,this.G);this.Z=Rka(this.B,e,1,d);g.L(this,this.Z);this.N=Rka(this.B,0,d,1);g.L(this,this.N);this.D=new TC;g.L(this,this.D)};
Ova=function(a){switch(a){case 0:return 0;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 1;case 5:return 1;default:An(a,"unknown result type")}};
Pva=function(a){try{var b=document.querySelector(".ytp-ad-skip-button-slot");var c=b?"none"===getComputedStyle(b).display?3:2:5}catch(d){c=1}b={detected:3===c,source:"i.s_sk"+(5===c?"_skip_not_found":"")};a&&(b.contentCpn=a.contentCpn);g.rD("biscottiBasedDetection",b);a=Ova(c);IB("CATSTAT",Number(g.JB("CATSTAT",0))&-769|a<<8)};
RG=function(a,b,c,d,e){d=void 0===d?{}:d;if(!e||5E-4>Math.random()){b=b||null;c=c||null;a=a instanceof Error?a:new g.fD(a);if(a.args)for(var f=g.u(a.args),h=f.next();!h.done;h=f.next())h=h.value,h instanceof Object&&(d=Object.assign({},h,d));d.category="H5 Ads Control Flow";b&&(d.slot=b?"slot:  "+b.slotType:"");c&&(d.layout=c?"layout:  "+c.layoutType:"");e&&(d.known_error_aggressively_sampled=!0);a.args=[d];g.MF(a)}};
g.SG=function(a,b){this.state=a;this.nA=b};
UG=function(a,b){return g.TG(a.state,b)&&!g.TG(a.nA,b)?1:!g.TG(a.state,b)&&g.TG(a.nA,b)?-1:0};
g.VG=function(a,b){return 0<UG(a,b)};
WG=function(a,b,c,d,e,f){KG.call(this,a,{I:"div",S:"ytp-ad-skip-button-slot"},"skip-button",b,c,d,e);var h=this;this.qa=null;this.Da=!1;this.Va=f;this.G=this.api.U().experiments.ob("enable_modern_skip_button_on_web");this.ib=!1;this.D=new g.lG({I:"span",Ma:["ytp-ad-skip-button-container"]});this.G&&this.D.element.classList.add("ytp-ad-skip-button-container-detached");g.L(this,this.D);this.D.Fa(this.element);this.B=this.C=null;this.jb=new g.NG(this.D,500,!1,100,function(){return h.hide()});
g.L(this,this.jb);this.Ka=new QG(this.D.element,15E3,5E3,.5,.5,this.G);g.L(this,this.Ka);this.hide()};
Rva=function(a){a=a.qa&&a.qa.adRendererCommands;return(a&&a.clickCommand&&g.T(a.clickCommand,g.aG)&&g.T(a.clickCommand,g.aG).commands||[]).some(function(b){return b.adLifecycleCommand?Qva(b.adLifecycleCommand):!1})};
Qva=function(a){return"END_LINEAR_AD"===a.action||"END_LINEAR_AD_PLACEMENT"===a.action};
XG=function(a,b,c,d,e,f){KG.call(this,a,{I:"div",S:"ytp-ad-skip-ad-slot"},"skip-ad",b,c,d,e);this.qa=f;this.D=!1;this.G=0;this.C=this.B=null;this.hide()};
Sva=function(a,b){a.D||(a.D=!0,a.B&&(b?a.B.Da.hide():a.B.hide()),b?(a=a.C,a.jb.show(),a.show()):a.C.show())};
Tva=function(a,b,c,d){wG.call(this,a,b,c,d,["ytp-ad-visit-advertiser-button"],"visit-advertiser")};
YG=function(a,b,c,d,e){e=void 0===e?!1:e;mG.call(this,a,{I:"span",S:"ytp-ad-simple-ad-badge"},"simple-ad-badge",b,c,d);this.j=e;this.hide()};
ZG=function(a,b,c,d,e){e=void 0===e?!1:e;cG.call(this,"player-overlay",a,{},b,d);this.videoAdDurationSeconds=c;this.interactionLoggingClientData=d;this.kK=e};
$G=function(a,b){g.dG.call(this);this.api=a;this.durationMs=b;this.j=null;this.Gd=new TC(this);g.L(this,this.Gd);this.B=Uva;this.Gd.T(this.api,"presentingplayerstatechange",this.Wd);this.j=this.Gd.T(this.api,"onAdPlaybackProgress",this.Kc)};
aH=function(a){g.dG.call(this);this.j=!1;this.aj=0;this.Gd=new TC(this);g.L(this,this.Gd);this.durationMs=a;this.timer=new g.ng(100);g.L(this,this.timer);this.Gd.T(this.timer,"tick",this.Kc);this.B={seekableStart:0,seekableEnd:a/1E3,current:0};this.start()};
g.bH=function(a,b){var c=Math.abs(Math.floor(a)),d=Math.floor(c/86400),e=Math.floor(c%86400/3600),f=Math.floor(c%3600/60);c=Math.floor(c%60);if(b){b="";0<d&&(b+=" "+d+" Days");if(0<d||0<e)b+=" "+e+" Hours";b+=" "+f+" Minutes";b+=" "+c+" Seconds";d=b.trim()}else{b="";0<d&&(b+=d+":",10>e&&(b+="0"));if(0<d||0<e)b+=e+":",10>f&&(b+="0");b+=f+":";10>c&&(b+="0");d=b+c}return 0<=a?d:"-"+d};
g.cH=function(a){return(!("button"in a)||"number"!==typeof a.button||0===a.button)&&!("shiftKey"in a&&a.shiftKey)&&!("altKey"in a&&a.altKey)&&!("metaKey"in a&&a.metaKey)&&!("ctrlKey"in a&&a.ctrlKey)};
dH=function(a,b,c,d,e,f){KG.call(this,a,{I:"span",S:"ytp-ad-duration-remaining"},"ad-duration-remaining",b,c,d,e);this.videoAdDurationSeconds=f;this.B=null;this.hide()};
Vva=function(a,b,c,d){JG.call(this,a,b,c,d,"ytp-video-ad-top-bar-title","ad-title")};
eH=function(a,b){this.B=a;this.j=b};
Wva=function(a,b){return a.B+b*(a.j-a.B)};
fH=function(a,b,c){return a.j-a.B?g.re((b-a.B)/(a.j-a.B),0,1):null!=c?c:Infinity};
gH=function(a,b){g.lG.call(this,{I:"div",S:"ytp-ad-persistent-progress-bar-container",V:[{I:"div",S:"ytp-ad-persistent-progress-bar"}]});this.api=a;this.B=b;g.L(this,this.B);this.Sc=this.Ga("ytp-ad-persistent-progress-bar");this.j=-1;this.T(a,"presentingplayerstatechange",this.onStateChange);this.hide();this.onStateChange()};
hH=function(a,b,c,d,e,f){mG.call(this,a,{I:"div",S:"ytp-ad-player-overlay",V:[{I:"div",S:"ytp-ad-player-overlay-flyout-cta"},{I:"div",S:"ytp-ad-player-overlay-instream-info"},{I:"div",S:"ytp-ad-player-overlay-skip-or-preview"},{I:"div",S:"ytp-ad-player-overlay-progress-bar"},{I:"div",S:"ytp-ad-player-overlay-instream-user-sentiment"}]},"player-overlay",b,c,d);this.Y=f;this.D=this.Ga("ytp-ad-player-overlay-flyout-cta");this.api.U().L("web_rounded_thumbnails")&&this.D.classList.add("ytp-ad-player-overlay-flyout-cta-rounded");
this.B=this.Ga("ytp-ad-player-overlay-instream-info");this.C=null;Xva(this)&&(a=uf("div"),g.Bu(a,"ytp-ad-player-overlay-top-bar-gradients"),b=this.B,b.parentNode&&b.parentNode.insertBefore(a,b),(b=this.api.getVideoData(2))&&b.isListed&&b.title&&(c=new Vva(this.api,this.layoutId,this.interactionLoggingClientData,this.kb),c.Fa(a),c.init(bG("ad-title"),{text:b.title},this.macros),g.L(this,c)),this.C=a);this.G=this.Ga("ytp-ad-player-overlay-skip-or-preview");this.Da=this.Ga("ytp-ad-player-overlay-progress-bar");
this.qa=this.Ga("ytp-ad-player-overlay-instream-user-sentiment");this.j=e;g.L(this,this.j);this.hide()};
Xva=function(a){a=a.api.U();return g.iH(a)&&a.B};
Yva=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Bl("/sharing_services",a);g.zE(d)};
g.jH=function(a){a&=16777215;var b=[(a&16711680)>>16,(a&65280)>>8,a&255];a=b[0];var c=b[1];b=b[2];a=Number(a);c=Number(c);b=Number(b);if(a!=(a&255)||c!=(c&255)||b!=(b&255))throw Error('"('+a+","+c+","+b+'") is not a valid RGB color');c=a<<16|c<<8|b;return 16>a?"#"+(16777216|c).toString(16).slice(1):"#"+c.toString(16)};
kH=function(a){this.j=new av(a)};
Zva=function(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return g.LB("copy_login_info_to_st_cookie")&&("WEB"===g.JB("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===g.JB("INNERTUBE_CLIENT_NAME"))&&a};
lH=function(a){if(g.JB("LOGGED_IN",!0)&&Zva()){var b=g.JB("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=g.vl(window.location.href);c&&b.push(c);c=g.vl(a);g.Gb(b,c)||!c&&hc(a,"/")?(b=wl(a),(b=Uea(b))?(b=Tta(b),b=(b=g.qC(b)||null)?TB(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Zva()?(d||(d=g.JB("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Sta(a,b)}};
g.$va=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;a=g.Bl(a,b);lH(a);c=g.yn(a+c);d=d.location;c=vn(c);void 0!==c&&(d.href=c)};
g.awa=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.JB("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Sta(a,b);c||(lH(a),(window.ytspf||{}).enabled?spf.navigate(a):g.$va(a))};
g.mH=function(a,b,c,d){c&&Sta(a,c);c=g.yn(a);var e=g.de(c);a!=e&&QB(Error("Unsafe window.open URL: "+a));a=e;b=b||Ie(a).toString(36);try{var f;if("2"===(null==(f=TB(a))?void 0:f.ase)){a=bwa(a);lH(a);g.LB("update_ytWindow_library_use_closure_window_library")?g.Dn(a,b,"attributionsrc"):window.open(a,b,"attributionsrc");return}}catch(l){g.OB(l)}if(d){a=bwa(a);try{var h=encodeURIComponent(d);lH(a);g.LB("update_ytWindow_library_use_closure_window_library")?g.Dn(a,b,"attributionsrc="+h):window.open(a,b,
"attributionsrc="+h);return}catch(l){g.OB(l)}}lH(a);g.LB("update_ytWindow_library_use_closure_window_library")?g.Dn(c,b):window.open(a,b)};
bwa=function(a){if("www.googleadservices.com"!==g.vl(a))return a;var b,c;return"function"===typeof(null==(b=document.featurePolicy)?void 0:b.features)&&(null==(c=document.featurePolicy)?0:c.features().includes("attribution-reporting"))?a+"&nis=6":a+"&nis=5"};
dwa=function(a){cwa=a&&a.data};
fwa=function(a){ewa=a&&a.data};
hwa=function(a){gwa=a&&a.data};
jwa=function(){iwa=gwa=ewa=cwa=null};
lwa=function(){var a=void 0===a?window.location.href:a;if(g.LB("kevlar_disable_theme_param"))return null;sl(g.ul(5,a));try{var b=g.UB(a).theme;return kwa.get(b)||null}catch(c){}return null};
nH=function(){this.j={};if(this.B=Una()){var a=g.qC("CONSISTENCY");a&&mwa(this,{encryptedTokenJarContents:a})}};
mwa=function(a,b){if(b.encryptedTokenJarContents&&(a.j[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.j[b.encryptedTokenJarContents]},1E3*c);
a.B&&g.pC("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
oH=function(){var a=g.JB("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===g.JB("INNERTUBE_CLIENT_NAME")&&(this.localStorage=nwa(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)};
nwa=function(a){return void 0===a.localStorage?new pD("yt-client-location"):a.localStorage};
g.pH=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=g.JB("INNERTUBE_CONTEXT");if(!d)return g.LF(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=g.rd(d);g.LB("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;"MWEB"===e.clientName&&(e.clientFormFactor=g.JB("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=Math.round(window.devicePixelRatio||
1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=void 0===f?!1:f;g.cD();var h="USER_INTERFACE_THEME_LIGHT";g.dD(0,165)?h="USER_INTERFACE_THEME_DARK":g.dD(0,174)?h="USER_INTERFACE_THEME_LIGHT":!g.LB("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(h="USER_INTERFACE_THEME_DARK");f=f?h:lwa()||h;e.userInterfaceTheme=f;if(!b){if(f=
cpa())e.connectionType=f;g.LB("web_log_effective_connection_type")&&(f=epa())&&(d.client.effectiveConnectionType=f)}var l;if(g.LB("web_log_memory_total_kbytes")&&(null==(l=g.Ua.navigator)?0:l.deviceMemory)){var m;l=null==(m=g.Ua.navigator)?void 0:m.deviceMemory;d.client.memoryTotalKbytes=""+1E6*l}g.LB("web_gcf_hashes_innertube")&&(f=yqa())&&(m=f.coldConfigData,l=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},d.client.configInfo.coldConfigData=m,d.client.configInfo.coldHashData=
l,d.client.configInfo.hotHashData=f);m=g.UB(g.Ua.location.href);!g.LB("web_populate_internal_geo_killswitch")&&m.internalcountrycode&&(e.internalGeo=m.internalcountrycode);"MWEB"===e.clientName||"WEB"===e.clientName?(e.mainAppWebInfo={graftUrl:g.Ua.location.href},g.LB("kevlar_woffle")&&Soa.instance&&(m=Soa.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!m.j&&m.B?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=Toa(),e.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===e.clientName&&(!g.LB("web_lr_app_quality_killswitch")&&(m=g.JB("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:m})),m=g.JB("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:m}));if(!g.LB("web_populate_time_zone_itc_killswitch")){a:{if("undefined"!==typeof Intl)try{var n=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(H){}n=void 0}n&&(e.timeZone=
n)}(n=ina())?e.experimentsToken=n:delete e.experimentsToken;n=jna();nH.instance||(nH.instance=new nH);d.request=Object.assign({},d.request,{internalExperimentFlags:n,consistencyTokenJars:fd(nH.instance.j)});!g.LB("web_prequest_context_killswitch")&&(n=g.JB("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=n);e=g.cD();n=g.dD(0,58);e=e.get("gsml","");d.user=Object.assign({},d.user);n&&(d.user.enableSafetyMode=n);e&&(d.user.lockedSafetyMode=!0);g.LB("warm_op_csn_cleanup")?c&&
(b=g.IF())&&(d.clientScreenNonce=b):!b&&(b=g.IF())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=g.Wa("yt.mdx.remote.remoteClient_"))d.remoteClient=a;oH.getInstance().setLocationOnInnerTubeContext(d);try{var p=ZB(),q=p.bid;delete p.bid;d.adSignalsInfo={params:[],bid:q};for(var r=g.u(Object.entries(p)),t=r.next();!t.done;t=r.next()){var v=g.u(t.value),x=v.next().value,C=v.next().value;p=x;q=C;a=void 0;null==(a=d.adSignalsInfo.params)||a.push({key:p,value:""+q})}var F;if(g.LB("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(F=d.client)?void 0:F.clientName)){var G=g.JB("INNERTUBE_CONTEXT");G.adSignalsInfo&&(d.adSignalsInfo.advertisingId=G.adSignalsInfo.advertisingId,d.adSignalsInfo.limitAdTracking=G.adSignalsInfo.limitAdTracking)}}catch(H){g.LF(H)}return d};
qwa=function(a,b){if(!a)return!1;var c,d=null==(c=g.T(a,owa))?void 0:c.signal;if(d&&b.Xw)return!!b.Xw[d];var e;if((c=null==(e=g.T(a,pwa))?void 0:e.request)&&b.HM)return!!b.HM[c];for(var f in a)if(b.DM[f])return!0;return!1};
rwa=function(a,b){var c,d=null==(c=g.T(a,owa))?void 0:c.signal;if(d&&b.Xw&&(c=b.Xw[d]))return c();var e;if((c=null==(e=g.T(a,pwa))?void 0:e.request)&&b.HM&&(e=b.HM[c]))return e();for(var f in a)if(b.DM[f]&&(a=b.DM[f]))return a()};
qH=function(a){return function(){return new a}};
twa=function(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=swa[b];if(c){var d=new RegExp(c),e=g.u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(swa).forEach(function(h){var l=g.u(h);h=l.next().value;l=l.next().value;b!==h&&f.push(l)});
d=new RegExp(f.join("|"));a.sort(function(h,l){return h.length-l.length});
e=g.u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]};
g.rH=function(a){return"/youtubei/v1/"+twa(a)};
sH=function(){};
tH=function(){};
uH=function(a){return g.Wa("ytcsi."+(a||"")+"data_")||uwa(a)};
vH=function(){var a=uH();a.info||(a.info={});return a.info};
wH=function(a){a=uH(a);a.metadata||(a.metadata={});return a.metadata};
xH=function(a){a=uH(a);a.tick||(a.tick={});return a.tick};
yH=function(a){a=uH(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel};
vwa=function(a){a=yH(a);a.gelInfos||(a.gelInfos={});return a.gelInfos};
zH=function(a){var b=uH(a).nonce;b||(b=g.WE(16),uH(a).nonce=b);return b};
uwa=function(a){var b={tick:{},info:{}};g.Va("ytcsi."+(a||"")+"data_",b);return b};
wwa=function(){var a=g.Wa("ytcsi.debug");a||(a=[],g.Va("ytcsi.debug",a),g.Va("ytcsi.reference",{}));return a};
AH=function(a){a=a||"";var b=xwa();if(b[a])return b[a];var c=wwa(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d};
ywa=function(a){a=a||"";var b=xwa();b[a]&&delete b[a];var c=wwa(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);b[a]=d};
xwa=function(){var a=g.Wa("ytcsi.reference");if(a)return a;wwa();return g.Wa("ytcsi.reference")};
BH=function(a){return zwa[a]||"LATENCY_ACTION_UNKNOWN"};
Ewa=function(a,b,c){c=yH(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Awa){c=Awa[a];g.Gb(Bwa,c)&&(b=!!b);a in Cwa&&"string"===typeof b&&(b=Cwa[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},h=0;h<b.length-1;h++){var l=b[h];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return RE({},d)}g.Gb(Dwa,a)||g.MF(new g.fD("Unknown label logged with GEL CSI",a))};
Fwa=function(a,b){jE.call(this,1,arguments);this.timer=b};
CH=function(){this.j=0};
DH=function(){CH.instance||(CH.instance=new CH);return CH.instance};
FH=function(a,b){EH[b]=EH[b]||{count:0};var c=EH[b];c.count++;c.time=(0,g.GD)();a.j||(a.j=g.kD(0,function(){var d=(0,g.GD)(),e;for(e in EH)EH[e]&&6E4<d-EH[e].time&&delete EH[e];a&&(a.j=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.fD("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.MF(c)),!0):!1};
Gwa=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
Hwa=function(){var a;if(g.LB("csi_use_performance_navigation_timing")||g.LB("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==GH?void 0:null==(a=GH.getEntriesByType)?void 0:null==(b=a.call(GH,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=HH(e.requestStart),e.responseEnd=HH(e.responseEnd),e.redirectStart=HH(e.redirectStart),e.redirectEnd=HH(e.redirectEnd),e.domainLookupEnd=HH(e.domainLookupEnd),e.connectStart=HH(e.connectStart),
e.connectEnd=HH(e.connectEnd),e.responseStart=HH(e.responseStart),e.secureConnectionStart=HH(e.secureConnectionStart),e.domainLookupStart=HH(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=GH.timing}else a=GH.timing;return a};
HH=function(a){return Math.round(IH()+a)};
IH=function(){return(g.LB("csi_use_time_origin")||g.LB("csi_use_time_origin_tvhtml5"))&&GH.timeOrigin?Math.floor(GH.timeOrigin):GH.timing.navigationStart};
KH=function(a,b){JH("_start",a,b)};
Iwa=function(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;wH(c).loadType=e}(a=Ewa(a,b,c))&&LH(a,c,d)}};
LH=function(a,b,c){c=void 0===c?!1:c;if(!g.LB("web_csi_action_sampling_enabled")||!uH(b).actionDisabled)if(g.LB("web_csi_via_jspb")&&!c){c=new tB;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":R(c,1,W[a[e]]);break;case "clientActionNonce":P(c,2,a[e]);break;case "clientScreenNonce":P(c,4,a[e]);break;case "loadType":P(c,3,a[e]);break;case "isPrewarmedLaunch":Gj(c,92,a[e]);break;case "isFirstInstall":Gj(c,55,a[e]);break;case "networkType":R(c,
5,MH[a[e]]);break;case "connectionType":R(c,26,NH[a[e]]);break;case "detailedConnectionType":R(c,27,OH[a[e]]);break;case "isVisible":Gj(c,6,a[e]);break;case "playerType":R(c,7,PH[a[e]]);break;case "clientPlaybackNonce":P(c,8,a[e]);break;case "adClientPlaybackNonce":P(c,28,a[e]);break;case "previousCpn":P(c,77,a[e]);break;case "targetCpn":P(c,76,a[e]);break;case "isMonetized":Gj(c,9,a[e]);break;case "isPrerollAllowed":Gj(c,16,a[e]);break;case "isPrerollShown":Gj(c,17,a[e]);break;case "adType":P(c,
12,a[e]);break;case "adTypesAllowed":P(c,36,a[e]);break;case "adNetworks":P(c,37,a[e]);break;case "previousAction":R(c,13,W[a[e]]);break;case "isRedSubscriber":Gj(c,14,a[e]);break;case "serverTimeMs":Hj(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":P(c,20,a[e]);break;case "targetVideoId":P(c,78,a[e]);break;case "adBreakType":R(c,21,QH[a[e]]);break;case "isNavigation":Gj(c,25,a[e]);break;case "viewportHeight":Hj(c,29,a[e]);break;case "viewportWidth":Hj(c,30,a[e]);break;
case "screenHeight":Hj(c,84,a[e]);break;case "screenWidth":Hj(c,85,a[e]);break;case "browseId":P(c,31,a[e]);break;case "isCacheHit":Gj(c,32,a[e]);break;case "httpProtocol":P(c,33,a[e]);break;case "transportProtocol":P(c,34,a[e]);break;case "searchQuery":P(c,41,a[e]);break;case "isContinuation":Gj(c,42,a[e]);break;case "availableProcessors":Hj(c,43,a[e]);break;case "sdk":P(c,44,a[e]);break;case "isLocalStream":Gj(c,45,a[e]);break;case "navigationRequestedSameUrl":Gj(c,64,a[e]);break;case "shellStartupDurationMs":Hj(c,
70,a[e]);break;case "appInstallDataAgeMs":Hj(c,73,a[e]);break;case "latencyActionError":R(c,71,RH[a[e]]);break;case "actionStep":Hj(c,79,a[e]);break;case "jsHeapSizeLimit":Jj(c,80,a[e]);break;case "totalJsHeapSize":Jj(c,81,a[e]);break;case "usedJsHeapSize":Jj(c,82,a[e]);break;case "sourceVideoDurationMs":Jj(c,90,a[e]);break;case "videoOutputFrames":Jj(c,93,a[e]);break;case "isResume":Gj(c,104,a[e]);break;case "debugTicksExcluded":Gj(c,105,a[e]);break;case "abandonedPing":Gj(c,113,a[e]);break;case "adPrebufferedTimeSecs":Hj(c,
39,a[e]);break;case "isLivestream":Gj(c,47,a[e]);break;case "liveStreamMode":R(c,91,SH[a[e]]);break;case "adCpn2":P(c,48,a[e]);break;case "adDaiDriftMillis":Jj(c,49,a[e]);break;case "videoStreamType":R(c,53,TH[a[e]]);break;case "playbackRequiresTap":Gj(c,56,a[e]);break;case "performanceNavigationTiming":Gj(c,67,a[e]);break;case "transactionType":R(c,74,UH[a[e]]);break;case "playerRotationType":R(c,101,VH[a[e]]);break;case "allowedPreroll":Gj(c,10,a[e]);break;case "shownPreroll":Gj(c,11,a[e]);break;
case "getHomeRequestId":P(c,57,a[e]);break;case "getSearchRequestId":P(c,60,a[e]);break;case "getPlayerRequestId":P(c,61,a[e]);break;case "getWatchNextRequestId":P(c,62,a[e]);break;case "getBrowseRequestId":P(c,63,a[e]);break;case "getLibraryRequestId":P(c,66,a[e]);break;case "isTransformerEnabledForFeature":Gj(c,106,a[e]);break;case "sourceVideoFrameCount":Jj(c,109,a[e]);break;default:Jwa.includes(f)&&g.OB(new g.fD("Codegen laipb translator asked to translate message field",""+f))}}catch(h){g.OB(Error("Codegen laipb translator failed to set "+
f))}}WH(c,b)}else c=AH(b||""),RE(c.info,a),a.loadType&&(c=a.loadType,wH(b).loadType=c),RE(vwa(b),a),c=zH(b),b=uH(b).cttAuthInfo,DH().info(a,c,b)};
WH=function(a,b){if(!g.LB("web_csi_action_sampling_enabled")||!uH(b).actionDisabled){var c=g.Ej(a,3);c&&(wH(b).loadType=c);AH(b||"").jspbInfo.push(a);c=zH(b);b=uH(b).cttAuthInfo;DH().jspbInfo(a,c,b)}};
Kwa=function(){var a,b,c,d;return(null!=(d=null==dF().resolve(new aF(fE))?void 0:null==(a=gE())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})};
JH=function(a,b,c){if(!g.LB("web_csi_action_sampling_enabled")||!uH(c).actionDisabled){var d=zH(c),e;if(e=g.LB("web_csi_debug_sample_enabled")&&d){(null==dF().resolve(new aF(fE))?0:gE())&&!Lwa&&(Lwa=!0,JH("gcfl",(0,g.GD)(),c));var f,h,l;e=(null==dF().resolve(new aF(fE))?void 0:null==(f=gE())?void 0:null==(h=f.loggingHotConfig)?void 0:null==(l=h.csiConfig)?void 0:l.debugSampleWeight)||0;if(f=0!==e)b:{f=Kwa();if(0<f.length)for(h=0;h<f.length;h++)if(a===f[h]){f=!0;break b}f=!1}f?(e=0!==pua(d)%e,uH(c).debugTicksExcludedLogged||
(g.LB("web_csi_via_jspb")?(f=new tB,f=Gj(f,105,e),WH(f,c)):(f={},f.debugTicksExcluded=e,LH(f,c))),uH(c).debugTicksExcludedLogged=!0):e=!1}if(!e){b||"_"===a[0]||(e=a,GH.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),GH.mark(e)));e=AH(c||"");e.tick[a]=b||(0,g.GD)();if(e.callback&&e.callback[a])for(e=g.u(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=yH(c);e.gelTicks&&(e.gelTicks[a]=!0);f=xH(c);e=b||(0,g.GD)();g.LB("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=uH(c).cttAuthInfo;
"_start"===a?(a=DH(),FH(a,"baseline_"+d)||(b={timestamp:b,cttAuthInfo:f},g.LB("web_csi_via_jspb")?(a=new Pma,P(a,1,d),d=g.LB("jspb_sparse_encoded_pivot")?new FB([{}]):new FB,vj(d,Pma,6,EF,a),DF("latencyActionBaselined",d,b)):g.rD("latencyActionBaselined",{clientActionNonce:d},b))):DH().tick(a,d,b,f);Mwa(c);return e}}};
Nwa=function(){var a,b=null==(a=GH.getEntriesByType)?void 0:a.call(GH,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;null==(d=GH.clearMarks)||d.call(GH,c.name)}})};
Owa=function(){switch(Boa()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
Rwa=function(a){var b=Hwa(),c=IH(),d=g.JB("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!g.LB("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(JH("srt",b.responseStart),1!==a.prerender&&KH(c));a=Pwa();0<a&&JH("fpt",a);a=Hwa();a.isPerformanceNavigationTiming&&LH({performanceNavigationTiming:!0},void 0);JH("nreqs",a.requestStart,void 0);JH("nress",a.responseStart,void 0);JH("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(JH("nrs",a.redirectStart,void 0),JH("nre",a.redirectEnd,void 0));
0<a.domainLookupEnd-a.domainLookupStart&&(JH("ndnss",a.domainLookupStart,void 0),JH("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(JH("ntcps",a.connectStart,void 0),JH("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=IH()&&0<a.connectEnd-a.secureConnectionStart&&(JH("nstcps",a.secureConnectionStart,void 0),JH("ntcpe",a.connectEnd,void 0));GH&&"getEntriesByType"in GH&&Qwa()};
Swa=function(a){function b(f,h,l){h=h.match("_rid")?h.split("_rid")[0]:h;"number"===typeof l&&(l=JSON.stringify(l));f.requestIds?f.requestIds.push({endpoint:h,id:l}):f.requestIds=[{endpoint:h,id:l}]}
var c={};a=g.u(Object.entries(a));for(var d=a.next();!d.done;d=a.next()){var e=g.u(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":b(c,d,e);break;case "GetGuide_rid":b(c,d,e);break;case "GetHome_rid":b(c,d,e);break;case "GetPlayer_rid":b(c,d,e);break;case "GetSearch_rid":b(c,d,e);break;case "GetSettings_rid":b(c,d,e);break;case "GetTrending_rid":b(c,d,e);break;case "GetWatchNext_rid":b(c,d,e);break;case "yt_red":c.isRedSubscriber=!!e;break;case "yt_ad":c.isMonetized=!!e}}return c};
Twa=function(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);qe()&&a.setAttribute("nonce",qe());return c?(a=GH.getEntriesByName(c))&&a[0]&&(a=a[0],c=IH(),JH("rsf_"+b,c+Math.round(a.fetchStart)),JH("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1};
Vwa=function(){var a=[];if(document.querySelector&&GH&&GH.getEntriesByName)for(var b in Uwa)if(Uwa.hasOwnProperty(b)){var c=Uwa[b];Twa(b,c)&&a.push(c)}return a};
Qwa=function(){var a=window.location.protocol,b=GH.getEntriesByType("resource");b=g.Rs(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=fq(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(JH("wffs",HH(b.startTime)),JH("wffe",HH(b.responseEnd)))};
Wwa=function(a,b,c){GH&&GH.measure&&(a.startsWith("measure_")||(a="measure_"+a),c?GH.measure(a,b,c):b?GH.measure(a,b):GH.measure(a))};
Xwa=function(a){var b=XH("aft",a);if(b)return b;b=g.JB((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=XH(b[d],a);if(e)return e}return NaN};
Ywa=function(a,b){g.Va("ytglobal.timing"+(b||"")+"ready_",a)};
XH=function(a,b){if(a=xH(b)[a])return"number"===typeof a?a:a[a.length-1]};
Mwa=function(a){var b=XH("_start",a),c=Xwa(a);b&&c&&!Zwa&&(lE($wa,new Fwa(Math.round(c-b),a)),Zwa=!0)};
axa=function(a,b){for(var c=g.u(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!axa(a[d],b[d]))return!1;return!0};
Pwa=function(){if(GH.getEntriesByType){var a=GH.getEntriesByType("paint");if(a=g.Eb(a,function(b){return"first-paint"===b.name}))return HH(a.startTime)}a=GH.timing;
return a.g7?Math.max(0,a.g7):0};
YH=function(a){uwa(a);bxa();Nwa();a||(g.JB("TIMING_ACTION")&&IB("PREVIOUS_ACTION",g.JB("TIMING_ACTION")),IB("TIMING_ACTION",""))};
cxa=function(){var a=["pbs","pbu"];g.PB(function(){AH("").info.actionType="watch";a&&IB("TIMING_AFT_KEYS",a);IB("TIMING_ACTION","watch");if(g.LB("web_csi_via_jspb")){var b=g.JB("TIMING_INFO",{}),c=new tB;b=g.u(Object.entries(b));for(var d=b.next();!d.done;d=b.next()){var e=g.u(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":uB(c,rB(qB(d),String(e)));break;case "GetGuide_rid":uB(c,rB(qB(d),String(e)));break;case "GetHome_rid":uB(c,rB(qB(d),String(e)));break;case "GetPlayer_rid":uB(c,
rB(qB(d),String(e)));break;case "GetSearch_rid":uB(c,rB(qB(d),String(e)));break;case "GetSettings_rid":uB(c,rB(qB(d),String(e)));break;case "GetTrending_rid":uB(c,rB(qB(d),String(e)));break;case "GetWatchNext_rid":uB(c,rB(qB(d),String(e)));break;case "yt_red":Gj(c,14,!!e);break;case "yt_ad":Gj(c,9,!!e)}}WH(c);c=new tB;c=Gj(c,25,!0);c=R(c,1,W[BH(g.JB("TIMING_ACTION"))]);(b=g.JB("PREVIOUS_ACTION"))&&R(c,13,W[BH(b)]);(b=g.JB("CLIENT_PROTOCOL"))&&P(c,33,b);(b=g.JB("CLIENT_TRANSPORT"))&&P(c,34,b);(b=g.IF())&&
"UNDEFINED_CSN"!==b&&P(c,4,b);b=Owa();1!==b&&-1!==b||Gj(c,6,!0);b=vH();(d="cold"===wH().loadType)||(d="cold"===b.yt_lt);if(d&&(P(c,3,"cold"),Rwa(b),b=Vwa(),0<b.length))for(b=g.u(b),d=b.next();!d.done;d=b.next())d=d.value,e=new Qma,P(e,1,d),xj(c,83,Qma,e);WH(c)}else{c=g.JB("TIMING_INFO",{});for(b in c)c.hasOwnProperty(b)&&Iwa(b,c[b]);c={isNavigation:!0,actionType:BH(g.JB("TIMING_ACTION"))};if(b=g.JB("PREVIOUS_ACTION"))c.previousAction=BH(b);if(b=g.JB("CLIENT_PROTOCOL"))c.httpProtocol=b;if(b=g.JB("CLIENT_TRANSPORT"))c.transportProtocol=
b;(b=g.IF())&&"UNDEFINED_CSN"!==b&&(c.clientScreenNonce=b);b=Owa();if(1===b||-1===b)c.isVisible=!0;b="cold"===wH().loadType;d=vH();b||(b="cold"===d.yt_lt);if(b&&(c.loadType="cold",Rwa(vH()),b=Vwa(),0<b.length))for(c.resourceInfo=[],b=g.u(b),d=b.next();!d.done;d=b.next())c.resourceInfo.push({resourceCache:d.value});LH(c)}c=vH();b=yH();b.preLoggedGelInfos||(b.preLoggedGelInfos=[]);d=b.preLoggedGelInfos;b=vwa();e=void 0;for(var f=0;f<d.length;f++){var h=d[f];if(h.loadType){e=h.loadType;break}}if("cold"===
wH().loadType&&("cold"===c.yt_lt||"cold"===b.loadType||"cold"===e)){e=xH();f=yH();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var l in e)if(!(l in f))if("number"===typeof e[l])JH(l,XH(l));else if(g.LB("log_repeated_ytcsi_ticks")){h=g.u(e[l]);for(var m=h.next();!m.done;m=h.next())JH(l.slice(1),m.value)}l={};e=!1;if(g.LB("use_infogel_early_logging"))for(d=g.u(d),f=d.next();!f.done;f=d.next())e=f.value,RE(b,e),RE(l,e),e=!0;d=g.u(Object.keys(c));for(f=d.next();!f.done;f=d.next())f=f.value,(f=Ewa(f,c[f]))&&
!axa(vwa(),f)&&(RE(b,f),RE(l,f),e=!0);e&&LH(l)}Ywa(!0);l=g.JB("TIMING_ACTION");g.Wa("ytglobal.timingready_")&&l&&ZH("_start")&&Xwa()&&Mwa()})()};
exa=function(){var a=void 0===a?{}:a;g.PB(function(){dxa();ywa();YH();Ywa(!1);a.cttAuthInfo&&(uH().cttAuthInfo=a.cttAuthInfo);IB("TIMING_AFT_KEYS",[]);a.Kgb?g.$H({loadType:"hot"}):g.$H({loadType:"warm"});IB("TIMING_ACTION","");delete g.JB("TIMING_INFO",{}).yt_lt;g.PB(KH)(a.startTime,void 0)})()};
aI=function(a,b){b=void 0===b?{}:b;g.PB(function(){fxa(a);var c=b.sampleRate;if(!g.LB("web_csi_action_sampling_enabled")||void 0===c||1>=c)c=!1;else{var d=zH(a);c=0!==pua(d)%c}c&&(uH(a).actionDisabled=!0);AH(a||"").info.actionType=a;b.cttAuthInfo&&(uH(a).cttAuthInfo=b.cttAuthInfo);IB(a+"TIMING_ACTION",a);g.PB(KH)(b.startTime,a);c={actionType:BH(a)};(d=g.IF())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);g.$H(c,a);Ywa(!0,a)})()};
fxa=function(a){g.PB(function(){dxa(a);ywa(a);YH(a)})()};
gxa=function(a,b,c,d){g.PB(Iwa)(a,b,c,d)};
g.$H=function(a,b,c){g.PB(LH)(a,b,void 0===c?!1:c)};
bI=function(a,b,c){return g.PB(JH)(a,b,c)};
hxa=function(a){g.PB(Wwa)("above_the_fold",a,void 0)};
ZH=function(a,b){return g.PB(function(){var c=xH(b);return a in c})()};
ixa=function(a,b){return g.PB(function(){if(ZH(a,b))return!1;bI(a,void 0,b);return!0})()};
cI=function(a,b,c){g.PB(function(){if(!ZH("_start",c)||ZH(a,c))return!1;bI(a,b,c);return!0})()};
jxa=function(){g.PB(function(){var a=zH();requestAnimationFrame(function(){setTimeout(function(){a===zH()&&bI("ftl",void 0,void 0)},0)})})()};
dxa=function(a){ZH("_start",a)&&bI("aa",void 0,a)};
dI=function(a,b,c,d){this.ZM=a;this.jh=b;this.j=c;this.D=d;this.C=void 0;this.B=new Map;a.Xw||(a.Xw={});a.Xw=Object.assign({},kxa,a.Xw)};
lxa=function(a,b,c,d){if(void 0!==dI.instance){if(d=dI.instance,a=[a!==d.ZM,b!==d.jh,c!==d.j,!1,!1,!1,void 0!==d.C],a.some(function(e){return e}))throw new g.fD("InnerTubeTransportService is already initialized",a);
}else dI.instance=new dI(a,b,c,d)};
eI=function(a,b,c){var d=void 0===d?iE:d;var e=rwa(b,a.ZM);if(!e)return gg(new g.fD("Error: No request builder found for command.",b));var f=e.G(b,c,d);return f?(lH(f.input),new g.dg(function(h){var l,m,n;return g.I(function(p){if(1==p.j)return m="cors"===(null==(l=f.Rt)?void 0:l.mode)?"cors":void 0,a.j.d_?(n=mxa(a,f.config,m),p.La(2)):g.z(p,nxa(a,f.config,m),3);2!=p.j&&(n=p.B);h(oxa(a,f,n));g.Ba(p)})})):gg(new g.fD("Error: Failed to build request for command.",b))};
g.fI=function(a,b,c,d,e){e=void 0===e?{Ku:{identity:iE}}:e;var f=void 0===f?!0:f;b.context||(b.context=g.pH(d,f));return new g.dg(function(h){var l,m,n,p,q;return g.I(function(r){if(1==r.j)return l=Vna(c),m=XB(l)?"same-origin":"cors",a.j.d_?(n=mxa(a,e,m),r.La(2)):g.z(r,nxa(a,e,m),3);2!=r.j&&(n=r.B);var t=n;p=Wna(Vna(c),t);q={input:p,Rt:Xna(p),zp:b,config:e};h(oxa(a,q,n));g.Ba(r)})})};
qxa=function(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Bhb)?0:d.Qhb)&&a.D){d=g.u(pxa);for(var e=d.next();!e.done;e=d.next())e=e.value,a.D[e]&&a.D[e].handleResponse(b,c)}};
oxa=function(a,b,c){var d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G,H,O,Q,X,ia,qa,ra,ma,sa,ea,za,ba,Ta;return g.I(function(y){switch(y.j){case 1:y.La(2);break;case 3:if((d=y.B)&&!d.isExpired())return y.return(Promise.resolve(d.j()));case 2:if(!(null==(e=b)?0:null==(f=e.zp)?0:f.context)){y.La(4);break}h=b.zp.context;y.La(5);break;case 5:l=g.u([]),m=l.next();case 7:if(m.done){y.La(4);break}n=m.value;return g.z(y,n.thb(h),8);case 8:m=l.next();y.La(7);break;case 4:if(null==(p=a.C)||!p.Khb(b.input,b.zp)){y.La(11);
break}return g.z(y,a.C.Rgb(b.input,b.zp),12);case 12:return q=y.B,g.LB("kevlar_process_local_innertube_responses_killswitch")||qxa(a,q,b),y.return(q);case 11:return(v=null==(t=b.config)?void 0:t.Zi)&&a.B.has(v)&&g.LB("web_memoize_inflight_requests")?r=a.B.get(v):(x=JSON.stringify(b.zp),G=null!=(F=null==(C=b.Rt)?void 0:C.headers)?F:{},b.Rt=Object.assign({},b.Rt,{headers:Object.assign({},G,c)}),H=Object.assign({},b.Rt),"POST"===b.Rt.method&&(H=Object.assign({},H,{body:x})),(null==(O=b.config)?0:O.G$)&&
bI(b.config.G$),Q=function(){return a.jh.fetch(b.input,H,b.config)},r=Q(),v&&a.B.set(v,r)),g.z(y,r,13);
case 13:if((X=y.B)&&"error"in X&&(null==(ia=X)?0:null==(qa=ia.error)?0:qa.details))for(ra=X.error.details,ma=g.u(ra),sa=ma.next();!sa.done;sa=ma.next())ea=sa.value,(za=ea["@type"])&&-1<rxa.indexOf(za)&&(delete ea["@type"],X=ea);v&&a.B.has(v)&&a.B.delete(v);(null==(ba=b.config)?0:ba.L$)&&bI(b.config.L$);if(X||null==(Ta=a.C)||!Ta.pfb(b.input,b.zp)){y.La(14);break}return g.z(y,a.C.Qgb(b.input,b.zp),15);case 15:X=y.B;case 14:return qxa(a,X,b),y.return(X||void 0)}})};
nxa=function(a,b,c){var d,e,f,h,l,m,n;return g.I(function(p){if(1==p.j){f=(null==(d=b)?void 0:null==(e=d.Ku)?void 0:e.identity)||iE;m=null==(h=b)?void 0:null==(l=h.Ku)?void 0:l.sessionIndex;var q=fg(a.j.SC(f,{sessionIndex:m}));return g.z(p,q,2)}n=p.B;return p.return(Promise.resolve(Object.assign({},sxa(c),n)))})};
mxa=function(a,b,c){var d,e=(null==b?void 0:null==(d=b.Ku)?void 0:d.identity)||iE,f;b=null==b?void 0:null==(f=b.Ku)?void 0:f.sessionIndex;a=a.j.SC(e,{sessionIndex:b});return Object.assign({},sxa(c),a)};
sxa=function(a){var b={"Content-Type":"application/json"};g.JB("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=g.JB("EOM_VISITOR_DATA"):g.JB("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=g.JB("VISITOR_DATA"));g.JB("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=g.JB("LOGGED_IN",!1);g.JB("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=g.JB("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=g.JB("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=g.JB("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=g.JB("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=g.JB("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b};
gI=function(){};
hI=function(){};
iI=function(){};
jI=function(){};
kI=function(){};
lI=function(){};
mI=function(a){this.j=a};
g.nI=function(a,b){if(!txa){var c=dF();esa(c,{CQ:uxa,M_:mI});var d={DM:{feedbackEndpoint:qH(iI),modifyChannelNotificationPreferenceEndpoint:qH(jI),playlistEditEndpoint:qH(kI),subscribeEndpoint:qH(gI),unsubscribeEndpoint:qH(hI),webPlayerShareEntityServiceEndpoint:qH(lI)}},e=oH.getInstance(),f={};e&&(f.client_location=e);void 0===a&&(a=Roa());void 0===b&&(b=c.resolve(uxa));lxa(d,b,a,f);esa(c,{CQ:vxa,aS:dI.instance});txa=c.resolve(vxa)}return txa};
xxa=function(a,b){var c=g.Wa("ytDebugData.callbacks");c||(c={},g.Va("ytDebugData.callbacks",c));if(g.LB("web_dd_iu")||wxa.includes(a))c[a]=b};
oI=function(){};
yxa=function(){oI.instance||(oI.instance=new oI);return oI.instance};
Axa=function(a){for(var b="",c=0;c<a.length;c++){var d=a[c];if(0===c)d="M "+d.x.toFixed(1)+","+d.y.toFixed(1);else{var e=zxa(a[c-1],a[c-2],d),f=zxa(d,a[c-1],a[c+1],!0);d=" C "+(e.x.toFixed(1)+","+e.y.toFixed(1)+" "+f.x.toFixed(1)+","+f.y.toFixed(1)+" "+d.x.toFixed(1)+","+d.y.toFixed(1))}b+=d}return b};
zxa=function(a,b,c,d){d=void 0===d?!1:d;b=new Bxa(b||a,c||a);return{x:a.x+.2*((void 0===d?0:d)?-1*b.j:b.j),y:a.y+.2*((void 0===d?0:d)?-1*b.B:b.B)}};
Bxa=function(a,b){this.B=this.j=0;this.j=b.x-a.x;this.B=b.y-a.y};
Cxa=function(a,b,c){var d;if(!b)return 1<=a.length?a[a.length-1]:null;var e=g.u(a);for(d=e.next();!d.done;d=e.next())if(d=d.value,d.width&&d.height&&(c&&d.width>=b||!c&&d.height>=b))return d;for(b=a.length-1;0<=b;b--)if(c&&a[b].width||!c&&a[b].height)return a[b];return a[0]};
Dxa=function(){this.state=1;this.j=null};
Fxa=function(a,b,c,d,e,f){var h=void 0===h?"trayride":h;c?(a.Gc(2),g.Rra(c,function(){if(window[h])Exa(a,d,h,e);else{a.Gc(3);var l=Sra(c),m=document.getElementById(l);m&&(Nra(l),m.parentNode.removeChild(m));g.MF(new g.fD("Unable to load Botguard","from "+c))}},f)):b?(f=g.vf("SCRIPT"),b instanceof Zd?(f.textContent=rba(b),Bn(f)):f.textContent=b,f.nonce=qe(),document.head.appendChild(f),document.head.removeChild(f),window[h]?Exa(a,d,h,e):(a.Gc(4),g.MF(new g.fD("Unable to load Botguard from JS")))):
g.MF(new g.fD("Unable to load VM; no url or JS provided"))};
Exa=function(a,b,c,d){a.Gc(5);try{var e=new tn({program:b,globalName:c,u$:g.LB("att_web_record_metrics")});e.iaa.then(function(){a.Gc(6);d&&d(b)});
a.mR(e)}catch(f){a.Gc(7),f instanceof Error&&g.MF(f)}};
Gxa=function(a,b){var c=g.pI;a=void 0===a?{}:a;b=void 0===b?3E3:b;return c.RF()?Promise.race([new Promise(function(d,e){setTimeout(function(){setTimeout(function(){setTimeout(function(){e(Error("Timed out waiting for snapshot"))},0)},0)},b)}),
new Promise(function(d){c.RF()?c.T_({Vu:a}).then(d):d(null)})]):Promise.resolve(null)};
Jxa=function(){if(!g.LB("disable_biscotti_fetch_for_ad_blocker_detection")&&!g.LB("disable_biscotti_fetch_entirely_for_all_web_clients")&&goa()){var a=g.JB("PLAYER_VARS",{});if("1"!=g.od(a,"privembed",!1)&&!koa(a)){var b=function(){Hxa=!0;"google_ad_status"in window?IB("DCLKSTAT",1):IB("DCLKSTAT",2)};
try{g.Rra("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ixa.push(g.ku.Ji(function(){if(!(Hxa||"google_ad_status"in window)){try{if(b){var c=""+g.gb(b),d=Tra[c];d&&g.OE(d)}}catch(e){}Hxa=!0;IB("DCLKSTAT",3)}},5E3))}}};
Kxa=function(){var a=Number(g.JB("DCLKSTAT",0));return isNaN(a)?0:a};
qI=function(){var a=g.Wa("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null};
rI=function(){Dxa.apply(this,arguments)};
Lxa=function(a,b,c){for(var d=!1,e=g.u(a.yl.entries()),f=e.next();!f.done;f=e.next())f=g.u(f.value).next().value,"SLOT_TYPE_PLAYER_BYTES"===f.slotType&&"core"===f.bb&&(d=!0);if(d){a:if(!c){a=g.u(a.yl.entries());for(c=a.next();!c.done;c=a.next())if(d=g.u(c.value),c=d.next().value,d=d.next().value,"SLOT_TYPE_IN_PLAYER"===c.slotType&&"core"===c.bb){c=d.layoutId;break a}c=void 0}c?b.WN(c):RG("No triggering layout ID available when attempting to mute.")}};
sI=function(a,b){this.sj=a;this.Vk=b};
tI=function(){};
uI=function(){};
xI=function(a){g.J.call(this);var b=this;this.Md=a;this.Df=new Map;this.j=new Map;vI(this,"commandExecutorCommand",function(c,d,e){b.eh(c.commands,d,e)});
wI(this,"commandExecutorCommand",function(c,d,e){Mxa(b,c.commands,d,e)});
vI(this,"clickTrackingParams",function(){});
wI(this,"clickTrackingParams",function(){})};
Nxa=function(a,b){vI(a,b.zq(),function(c,d,e){d=void 0===d?{}:d;e=void 0===e?{}:e;b.handle(c,d,e)})};
Oxa=function(a,b){wI(a,b.zq(),function(c,d,e){b.Ev(c,d,e)})};
vI=function(a,b,c){a.isDisposed();a.Df.get(b)&&g.LF(Error("Extension name "+b+" already registered"));a.Df.set(b,c)};
wI=function(a,b,c){a.isDisposed();a.j.get(b)&&g.LF(Error("Extension name "+b+" already registered"));a.j.set(b,c)};
Mxa=function(a,b,c,d){b=void 0===b?[]:b;a.isDisposed();var e=[],f=[],h=g.u(b);for(b=h.next();!b.done;b=h.next())b=b.value,g.T(b,Pxa)||g.T(b,Qxa)?e.push(b):f.push(b);e=g.u(e);for(b=e.next();!b.done;b=e.next())yI(a,b.value,c,d);f=g.u(f);for(b=f.next();!b.done;b=f.next())yI(a,b.value,c,d)};
Rxa=function(a,b){a.Md.get().Qa("innertubeCommand",{openPopupAction:b})};
Sxa=function(a,b){a.Md.get().Qa("innertubeCommand",{confirmDialogEndpoint:b})};
yI=function(a,b,c,d){a.isDisposed();b.loggingUrls&&Txa(a,"loggingUrls",b.loggingUrls,c,d);b=g.u(Object.entries(b));for(var e=b.next();!e.done;e=b.next()){var f=g.u(e.value);e=f.next().value;f=f.next().value;"openPopupAction"===e?Rxa(a,f):"confirmDialogEndpoint"===e?Sxa(a,f):Uxa.hasOwnProperty(e)||Txa(a,e,f,c,d)}};
Vxa=function(a,b,c,d,e){e=void 0===e?{}:e;if((a=a.Df.get(b))&&"function"===typeof a)try{a(c,d,e)}catch(f){g.LF(f)}else b=new g.fD("Unhandled field",b),g.MF(b)};
Txa=function(a,b,c,d,e){if((a=a.j.get(b))&&"function"===typeof a)try{a(c,d,e)}catch(f){g.LF(f)}else b=new g.fD("Unhandled field",b),g.MF(b)};
zI=function(a,b,c){this.Rn=a;this.e$=b;this.Pa=c};
AI=function(a){this.value=a};
BI=function(a){this.value=a};
Wxa=function(a){this.value=a};
CI=function(a){this.value=a};
DI=function(a){this.value=a};
Xxa=function(){AI.apply(this,arguments)};
Yxa=function(a){this.value=a};
Zxa=function(a){this.value=a};
$xa=function(a){this.value=a};
aya=function(a){this.value=a};
EI=function(a){this.value=a};
FI=function(a){this.value=a};
GI=function(a){this.value=a};
HI=function(a){this.value=a};
II=function(a){this.value=a};
JI=function(){AI.apply(this,arguments)};
KI=function(a){this.value=a};
LI=function(a){this.value=a};
MI=function(a){this.value=a};
NI=function(a){this.value=a};
OI=function(a){this.value=a};
bya=function(a){this.value=a};
PI=function(a){this.value=a};
cya=function(a){this.value=a};
dya=function(a){this.value=a};
eya=function(a){this.value=a};
fya=function(a){this.value=a};
QI=function(a){this.value=a};
RI=function(a){this.value=a};
SI=function(a){this.value=a};
gya=function(a){this.value=a};
TI=function(a){this.value=a};
UI=function(a){this.value=a};
VI=function(a){this.value=a};
hya=function(a){this.value=a};
WI=function(a){this.value=a};
XI=function(a){this.value=a};
YI=function(a){this.value=a};
ZI=function(a){this.value=a};
$I=function(a){this.value=a};
aJ=function(a){this.value=a};
bJ=function(a){this.value=a};
cJ=function(a){this.value=a};
dJ=function(a){this.value=a};
iya=function(a){this.value=a};
eJ=function(a){this.value=a};
fJ=function(a){this.value=a};
gJ=function(a){this.value=a};
jya=function(a){this.value=a};
hJ=function(a){this.value=a};
iJ=function(a){this.value=a};
jJ=function(a){this.value=a};
kJ=function(){AI.apply(this,arguments)};
kya=function(a){this.value=a};
lJ=function(){AI.apply(this,arguments)};
mJ=function(){AI.apply(this,arguments)};
lya=function(){AI.apply(this,arguments)};
nJ=function(){AI.apply(this,arguments)};
mya=function(a){this.value=a};
oJ=function(a){this.value=a};
nya=function(a){this.value=a};
qJ=function(a,b,c){if(c&&!c.includes(a.layoutType))return!1;b=g.u(b);for(c=b.next();!c.done;c=b.next())if(!pJ(a.Ca,c.value))return!1;return!0};
rJ=function(){return""};
oya=function(a,b){switch(a){case "TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL":return 0;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED":return 1;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED":return 2;case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return 3;case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return 4;case "TRIGGER_CATEGORY_SLOT_ENTRY":return 5;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED":return 6;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED":return 7;default:return b(a),8}};
sJ=function(a,b,c,d){d=void 0===d?!1:d;zb.call(this,a);this.Fk=c;this.Iu=d;this.args=[];b&&this.args.push(b)};
tJ=function(a,b,c,d){d=void 0===d?!1:d;zb.call(this,a);this.Fk=c;this.Iu=d;this.args=[];b&&this.args.push(b)};
uJ=function(a){var b=new Map;a.forEach(function(c){b.set(c.getType(),c)});
this.j=b};
pJ=function(a,b){return a.j.has(b)};
vJ=function(a,b){a=a.j.get(b);if(void 0!==a)return a.get()};
wJ=function(a){return Array.from(a.j.keys())};
xJ=function(a,b,c){if(c&&c!==a.slotType)return!1;b=g.u(b);for(c=b.next();!c.done;c=b.next())if(!pJ(a.Ca,c.value))return!1;return!0};
qya=function(a){var b;return(null==(b=pya.get(a))?void 0:b.Zw)||"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED"};
sya=function(a,b){var c={type:b.slotType,controlFlowManagerLayer:rya.get(b.bb)||"CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"};b.slotEntryTrigger&&(c.entryTriggerType=b.slotEntryTrigger.triggerType);1!==b.slotPhysicalPosition&&(c.slotPhysicalPosition=b.slotPhysicalPosition);if(a){c.debugData={slotId:b.slotId};if(a=b.slotEntryTrigger)c.debugData.slotEntryTriggerData=yJ(a);a=b.slotFulfillmentTriggers;c.debugData.fulfillmentTriggerData=[];a=g.u(a);for(var d=a.next();!d.done;d=a.next())c.debugData.fulfillmentTriggerData.push(yJ(d.value));
b=b.slotExpirationTriggers;c.debugData.expirationTriggerData=[];b=g.u(b);for(a=b.next();!a.done;a=b.next())c.debugData.expirationTriggerData.push(yJ(a.value))}return c};
tya=function(a,b){var c={type:b.layoutType,controlFlowManagerLayer:rya.get(b.bb)||"CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"};a&&(c.debugData={layoutId:b.layoutId});return c};
yJ=function(a,b){var c={type:a.triggerType};null!=b&&(c.category=b);null!=a.triggeringSlotId&&(c.triggerSourceData||(c.triggerSourceData={}),c.triggerSourceData.associatedSlotId=a.triggeringSlotId);null!=a.triggeringLayoutId&&(c.triggerSourceData||(c.triggerSourceData={}),c.triggerSourceData.associatedLayoutId=a.triggeringLayoutId);return c};
uya=function(a,b,c,d){b={opportunityType:b};a&&(d||c)&&(d=g.dq(d||[],function(e){return sya(a,e)}),b.debugData=Object.assign({},c&&0<c.length?{associatedSlotId:c}:{},0<d.length?{slots:d}:{}));
return b};
zJ=function(a,b){return function(c){return vya(wya(a),b.slotId,b.slotType,b.slotPhysicalPosition,b.bb,b.slotEntryTrigger,b.slotFulfillmentTriggers,b.slotExpirationTriggers,c.layoutId,c.layoutType,c.bb)}};
vya=function(a,b,c,d,e,f,h,l,m,n,p){return{adClientDataEntry:{slotData:sya(a,{slotId:b,slotType:c,slotPhysicalPosition:d,bb:e,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:l,Ca:new uJ([])}),layoutData:tya(a,{layoutId:m,layoutType:n,bb:p,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],Zb:new Map,Ca:new uJ([]),xc:{}})}}};
BJ=function(a){this.Ha=a;a=Math.random();var b=this.Ha.get();b=g.AJ(b.J.U().experiments,"html5_debug_data_log_probability");b=Number.isFinite(b)&&0<=b&&1>=b?b:0;this.j=a<b};
wya=function(a){return a.j||a.Ha.get().J.U().L("html5_force_debug_data_for_client_tmp_logs")};
xya=function(a,b,c,d){g.J.call(this);this.Me=b;this.uc=c;this.Ha=d;this.j=a(this,this,this,this,this);g.L(this,this.j);a=g.u(b);for(b=a.next();!b.done;b=a.next())g.L(this,b.value)};
yya=function(a,b,c,d){RG(c,b,void 0,void 0,c.Iu);c.Fk?CJ(a.uc,d,c.Fk,b):RG("adsClientErrorMessage is missing.",b);DJ(a,b,!0)};
Bya=function(a,b,c){if(EJ(a.j,b))if(FJ(a.j,b).D=c?"filled":"not_filled",null===c){GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_SLOT_FULFILLED_EMPTY",b);c=g.u(a.Me);for(var d=c.next();!d.done;d=c.next())d.value.lk(b);DJ(a,b,!1)}else{GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_SLOT_FULFILLED_NON_EMPTY",b,c);GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,c);var e=null!=(d=c.fB)?d:vJ(c.Ca,"metadata_type_sub_layouts");if(e)for(d=g.u(e),e=d.next();!e.done;e=d.next())GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,e.value);e=
g.u(a.Me);for(d=e.next();!d.done;d=e.next())d.value.nk(b);if(EJ(a.j,b))if(FJ(a.j,b).G)DJ(a,b,!1);else{GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_SCHEDULE_LAYOUT_REQUESTED",b,c);try{var f=a.j;if(!FJ(f,b))throw new sJ("Unknown slotState for onLayout",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_STATE_IS_NULL");if(!f.Df.Yq.get(b.slotType))throw new sJ("No LayoutRenderingAdapterFactory registered for slot of type: "+b.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_CANNOT_FIND_MATCHING_LAYOUT_RENDERING_ADAPTER_FACTORY");if(0==
c.layoutExitNormalTriggers.length&&0==c.layoutExitSkipTriggers.length&&0==c.layoutExitMuteTriggers.length&&0==c.layoutExitUserInputSubmittedTriggers.length&&0==c.hd.length)throw new sJ("Layout has no exit triggers.",void 0,"ADS_CLIENT_ERROR_MESSAGE_EMPTY_LAYOUT_EXIT_TRIGGER");HJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL",c.layoutExitNormalTriggers);HJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED",c.layoutExitSkipTriggers);HJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED",c.layoutExitMuteTriggers);HJ(f,
"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",c.layoutExitUserInputSubmittedTriggers);HJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED",c.hd)}catch(n){n instanceof sJ?a.Bf(b,c,n,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED"):a.Bf(b,c,new sJ("Unexpected error: "+n,void 0,"ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR"),"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED");DJ(a,b,!0);return}FJ(a.j,b).K=!0;try{var h=a.j,l=FJ(h,b),m=h.Df.Yq.get(b.slotType).get().build(h.D,h.B,b,c);m.init();l.layout=c;if(l.C)throw new sJ("Already had LayoutRenderingAdapter registered for slot",
void 0,"ADS_CLIENT_ERROR_MESSAGE_BUILD_DUPLICATE_LAYOUT_RENDERING_ADAPTER");l.C=m;IJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL",c.layoutExitNormalTriggers);IJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED",c.layoutExitSkipTriggers);IJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED",c.layoutExitMuteTriggers);IJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",c.layoutExitUserInputSubmittedTriggers);IJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED",c.hd)}catch(n){zya(a,b);n instanceof sJ?a.Bf(b,
c,n,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED"):a.Bf(b,c,new sJ("Unexpected error: "+n,void 0,"ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR"),"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED");DJ(a,b,!0);return}GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);f=g.u(a.Me);for(d=f.next();!d.done;d=f.next())d.value.vj(b,c);zya(a,b);Aya(a,b)}else a=a.Ha.get(),g.JJ(a.J.U())||KJ(a.J.U())||g.LJ(a.J.U())?a=!0:(RG("Composite VOD on legacy path."),a=!1),a&&RG("slot is unscheduled after been fulfilled.",
b,c)}};
Cya=function(a,b,c){"core"!==b.bb&&GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,c)};
Dya=function(a,b,c){GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);a=g.u(a.Me);for(var d=a.next();!d.done;d=a.next())d.value.vj(b,c)};
Eya=function(a,b,c){a=g.u(a.Me);for(var d=a.next();!d.done;d=a.next())d.value.Ph(b,c)};
Fya=function(a,b,c){GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_ENTERED",b,c);a=g.u(a.Me);for(var d=a.next();!d.done;d=a.next())d.value.Nc(b,c)};
Gya=function(a,b,c,d){GJ(a.uc,qya(d),b,c);a=g.u(a.Me);for(var e=a.next();!e.done;e=a.next())e.value.Zc(b,c,d)};
zya=function(a,b){if(EJ(a.j,b)){FJ(a.j,b).K=!1;var c=MJ;b=FJ(a.j,b);var d=[].concat(g.pa(b.Z));saa(b.Z);c(a,d)}};
MJ=function(a,b){b.sort(function(f,h){function l(m){RG("TriggerCategoryOrder enum does not contain trigger category: "+m)}
return f.category===h.category?f.trigger.triggerId.localeCompare(h.trigger.triggerId):oya(f.category,l)-oya(h.category,l)});
var c=new Map;b=g.u(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,EJ(a.j,d.slot))if(FJ(a.j,d.slot).K)FJ(a.j,d.slot).Z.push(d);else{Hya(a.uc,d.slot,d,d.layout);var e=c.get(d.category);e||(e=[]);e.push(d);c.set(d.category,e)}b=g.u(Iya);for(d=b.next();!d.done;d=b.next())e=g.u(d.value),d=e.next().value,e=e.next().value,(d=c.get(d))&&Jya(a,d,e);(b=c.get("TRIGGER_CATEGORY_SLOT_EXPIRATION"))&&Kya(a,b);(b=c.get("TRIGGER_CATEGORY_SLOT_FULFILLMENT"))&&Lya(a,b);(c=c.get("TRIGGER_CATEGORY_SLOT_ENTRY"))&&
Mya(a,c)};
Jya=function(a,b,c){b=g.u(b);for(var d=b.next();!d.done;d=b.next())d=d.value,d.layout&&Nya(a.j,d.slot)&&Oya(a,d.slot,d.layout,c)};
Kya=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next())DJ(a,c.value.slot,!1)};
Lya=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;a:switch(FJ(a.j,c.slot).D){case "not_filled":var d=!0;break a;default:d=!1}d&&(NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_FULFILL_SLOT_REQUESTED",c.slot),a.j.NC(c.slot))}};
Mya=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_ENTER_SLOT_REQUESTED",c.slot);for(var d=g.u(a.Me),e=d.next();!e.done;e=d.next())e.value.jk(c.slot);try{var f=a.j,h=c.slot,l=FJ(f,h);if(!l)throw new tJ("Got enter request for unknown slot",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_STATE_IS_NULL");if(!l.B)throw new tJ("Tried to enter slot with no assigned slotAdapter",void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");if("scheduled"!==l.j)throw new tJ("Tried to enter a slot from stage: "+
l.j,void 0,"ADS_CLIENT_ERROR_MESSAGE_ILLEGAL_SLOT_STATE");if(OJ(l))throw new tJ("Got enter request for already active slot",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_COLLISION");for(var m=g.u(PJ(f,h.slotType+"_"+h.slotPhysicalPosition).values()),n=m.next();!n.done;n=m.next()){var p=n.value;if(l!==p&&OJ(p))throw new tJ("Trying to enter a slot when a slot of same type is already active.",{activeSlotStatus:p.j},"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");}}catch(q){q instanceof tJ&&q.Fk?(CJ(a.uc,"ADS_CLIENT_ERROR_TYPE_ENTER_SLOT_FAILED",
q.Fk,c.slot),RG(q,c.slot,QJ(a.j,c.slot),void 0,q.Iu)):(CJ(a.uc,"ADS_CLIENT_ERROR_TYPE_ENTER_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",c.slot),RG(q,c.slot));DJ(a,c.slot,!0);continue}c=FJ(a.j,c.slot);"scheduled"!==c.j&&RJ(c.slot,c.j,"enterSlot");c.j="enter_requested";c.B.mH()}};
Aya=function(a,b){if(EJ(a.j,b)&&OJ(FJ(a.j,b))&&QJ(a.j,b)&&!Nya(a.j,b)){var c;GJ(a.uc,"ADS_CLIENT_EVENT_TYPE_ENTER_LAYOUT_REQUESTED",b,null!=(c=QJ(a.j,b))?c:void 0);a=FJ(a.j,b);"entered"!==a.j&&RJ(a.slot,a.j,"enterLayoutForSlot");a.j="rendering";a.C.startRendering(a.layout)}};
Oya=function(a,b,c,d){if(EJ(a.j,b)){var e=a.uc,f;var h=(null==(f=pya.get(d))?void 0:f.Nw)||"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED";GJ(e,h,b,c);a=FJ(a.j,b);"rendering"!==a.j&&RJ(a.slot,a.j,"exitLayout");a.j="rendering_stop_requested";a.C.uf(c,d)}};
DJ=function(a,b,c){if(EJ(a.j,b)){a:switch(FJ(a.j,b).j){case "exit_requested":var d=!0;break a;default:d=!1}if(!d)a:switch(FJ(a.j,b).j){case "rendering_stop_requested":d=!0;break a;default:d=!1}if(d&&(FJ(a.j,b).G=!0,!c))return;if(OJ(FJ(a.j,b)))FJ(a.j,b).G=!0,Pya(a,b,c);else{a:switch(FJ(a.j,b).D){case "fill_requested":c=!0;break a;default:c=!1}if(c)FJ(a.j,b).G=!0,EJ(a.j,b)&&(NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_CANCEL_SLOT_FULFILLMENT_REQUESTED",b),b=FJ(a.j,b),b.D="fill_cancel_requested",b.N.tM());else{c=
QJ(a.j,b);(d=a.Ha.get().J.U().experiments.ob("h5_enable_layout_unscheduling_events"))&&(c?a.Ph(b,c):RG(Error("Layout is null for LayoutUnscheduled event."),b,c,void 0,!1));NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_UNSCHEDULE_SLOT_REQUESTED",b);var e=FJ(a.j,b),f=b.slotEntryTrigger,h=e.Aa.get(f.triggerId);h&&(h.Dl(f),e.Aa.delete(f.triggerId));f=g.u(b.slotFulfillmentTriggers);for(h=f.next();!h.done;h=f.next()){h=h.value;var l=e.ma.get(h.triggerId);l&&(l.Dl(h),e.ma.delete(h.triggerId))}f=g.u(b.slotExpirationTriggers);
for(h=f.next();!h.done;h=f.next())if(h=h.value,l=e.Y.get(h.triggerId))l.Dl(h),e.Y.delete(h.triggerId);null!=e.layout&&(f=e.layout,SJ(e,f.layoutExitNormalTriggers),SJ(e,f.layoutExitSkipTriggers),SJ(e,f.layoutExitMuteTriggers),SJ(e,f.layoutExitUserInputSubmittedTriggers),SJ(e,f.hd));e.N=void 0;null!=e.B&&(e.B.release(),e.B=void 0);null!=e.C&&(e.C.release(),e.C=void 0);e=a.j;FJ(e,b)&&(e=PJ(e,b.slotType+"_"+b.slotPhysicalPosition))&&e.delete(b.slotId);NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_SLOT_UNSCHEDULED",
b);a=g.u(a.Me);for(e=a.next();!e.done;e=a.next())e=e.value,e.pk(b),c&&!d&&e.Ph(b,c)}}}};
Pya=function(a,b,c){if(EJ(a.j,b)&&OJ(FJ(a.j,b))){var d=QJ(a.j,b);if(d&&Nya(a.j,b))Oya(a,b,d,c?"error":"abandoned");else{NJ(a.uc,"ADS_CLIENT_EVENT_TYPE_EXIT_SLOT_REQUESTED",b);try{var e=FJ(a.j,b);if(!e)throw new tJ("Cannot exit slot it is unregistered",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_WAS_UNREGISTERED");"enter_requested"!==e.j&&"entered"!==e.j&&"rendering"!==e.j&&RJ(e.slot,e.j,"exitSlot");e.j="exit_requested";if(void 0===e.B)throw e.j="scheduled",new tJ("Cannot exit slot because adapter is not defined",
void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");e.B.oH()}catch(f){f instanceof tJ&&f.Fk?(CJ(a.uc,"ADS_CLIENT_ERROR_TYPE_EXIT_SLOT_FAILED",f.Fk,b),RG(f,b,void 0,void 0,f.Iu)):(CJ(a.uc,"ADS_CLIENT_ERROR_TYPE_EXIT_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",b),RG(f,b))}}}};
Qya=function(a){this.slot=a;this.Aa=new Map;this.ma=new Map;this.Y=new Map;this.qa=new Map;this.C=this.layout=this.B=this.N=void 0;this.K=this.G=!1;this.Z=[];this.j="not_scheduled";this.D="not_filled"};
OJ=function(a){return"enter_requested"===a.j||a.isActive()};
Rya=function(a,b,c,d,e,f){g.J.call(this);this.Df=a;this.C=b;this.G=c;this.D=d;this.B=e;this.Ha=f;this.j=new Map};
PJ=function(a,b){return(a=a.j.get(b))?a:new Map};
FJ=function(a,b){return PJ(a,b.slotType+"_"+b.slotPhysicalPosition).get(b.slotId)};
Sya=function(a){var b=[];a.j.forEach(function(c){c=g.u(c.values());for(var d=c.next();!d.done;d=c.next())b.push(d.value.slot)});
return b};
EJ=function(a,b){return null!=FJ(a,b)};
Nya=function(a,b){a=FJ(a,b);if(b=null!=a.layout)a:switch(a.j){case "rendering":case "rendering_stop_requested":b=!0;break a;default:b=!1}return b};
QJ=function(a,b){(a=FJ(a,b))?null!=a.layout&&!a.layout&&RG("Unexpected empty layout",b):RG("Unexpected undefined slotState",b);return(null==a?void 0:a.layout)||null};
Vya=function(a,b,c){if(0==c.length)throw new tJ("No "+Tya.get(b)+" triggers found for slot.",void 0,Uya(b));c=g.u(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,!a.Df.Bl.get(d.triggerType))throw new tJ("No trigger adapter registered for "+b+" trigger of type: "+d.triggerType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_TRIGGER_ADAPTER_REGISTERED_FOR_TYPE");};
Uya=function(a){switch(a){case "TRIGGER_CATEGORY_SLOT_ENTRY":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_ENTRY_TRIGGER";case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_EXPIRATION_TRIGGER";case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_FULFILLMENT_TRIGGER";default:return"ADS_CLIENT_ERROR_MESSAGE_INVALID_TRIGGER"}};
HJ=function(a,b,c){c=g.u(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,!a.Df.Bl.get(d.triggerType))throw new sJ("No trigger adapter registered for "+Tya.get(b)+" trigger of type: "+d.triggerType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_TRIGGER_ADAPTER_REGISTERED_FOR_TYPE");};
IJ=function(a,b,c,d){d=g.u(d);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=a.Df.Bl.get(e.triggerType);f.ll(c,e,b.slot,b.layout?b.layout:null);b.qa.set(e.triggerId,f)}};
SJ=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.qa.get(c.triggerId);d&&(d.Dl(c),a.qa.delete(c.triggerId))}};
RJ=function(a,b,c){RG("Slot stage was "+b+" when calling method "+c,a)};
Wya=function(a){return TJ(a.Aw).concat(TJ(a.Bl)).concat(TJ(a.wq)).concat(TJ(a.Ir)).concat(TJ(a.Yq))};
TJ=function(a){var b=[];a=g.u(a.values());for(var c=a.next();!c.done;c=a.next())c=c.value,c.qj&&b.push(c);return b};
Xya=function(a){g.J.call(this);var b=this;this.j=a;this.instance=null;g.wb(this,function(){g.ub(b.instance);b.instance=null})};
UJ=function(a){return new Xya(a)};
Zya=function(a){g.J.call(this);this.Gg=a;this.j=Yya(this)};
Yya=function(a){var b=new xya(function(c,d,e,f){return new Rya(a.Gg.Df,c,d,e,f,a.Gg.Ha)},new Set(Wya(a.Gg.Df).concat(a.Gg.listeners)),a.Gg.uc,a.Gg.Ha);
g.L(a,b);return b};
VJ=function(a){this.j=a};
WJ=function(a,b,c,d){(a=a.j())||RG("Could not initiate a command router instance.");yI(a,b,c,d)};
XJ=function(){this.listeners=new Set};
YJ=function(){};
$ya=function(a,b){a=b.bgp&&b.bgub;var c=b.upb;if(b.siub&&b.scs&&(a||c)){a=b.siub;var d=b.scs,e=b.bgub,f=b.bgp;b=window;var h=e?"//pagead2.googlesyndication.com/bg/"+g.Ge(e)+".js":"";e=b.document;var l={};d&&(l._scs_=d);l._bgu_=h;l._bgp_=f;l._li_="v_h.3.0.0.0";c&&(l._upb_=c);(c=b.GoogleTyFxhY)&&"function"==typeof c.push||(c=b.GoogleTyFxhY=[]);c.push(l);c=Ve(e).createElement("SCRIPT");c.type="text/javascript";c.async=!0;a=wba(g.Yd("//tpc.googlesyndication.com/sodar/%{path}"),{path:g.Ge(a)+".js"});g.Cn(c,
a);(a=(b.GoogleTyFxhYEET||{})[c.src])?a():e.getElementsByTagName("head")[0].appendChild(c)}};
aza=function(a,b,c,d,e){this.callback=a;this.slot=b;this.Ib=c;this.jc=d;this.Ha=e;this.j=null};
cza=function(a,b,c,d){a.j&&RG("Currently active request ongoing for slot. This should never happen",a.slot);a.j=b();a.j.then(function(e){a.j=null;d&&d(e);var f=e.hB?"LAYOUT_TYPE_THROTTLED_AD_BREAK_RESPONSE":"LAYOUT_TYPE_AD_BREAK_RESPONSE",h=a.Ib.get(),l=a.slot.slotId,m=zJ(a.jc.get(),{slotId:a.slot.slotId,slotType:a.slot.slotType,slotPhysicalPosition:a.slot.slotPhysicalPosition,bb:a.slot.bb,slotEntryTrigger:a.slot.slotEntryTrigger,slotFulfillmentTriggers:a.slot.slotFulfillmentTriggers,slotExpirationTriggers:a.slot.slotExpirationTriggers}),
n=ZJ(h.eb.get(),f,l),p={layoutId:n,layoutType:f,bb:"core"};e={layoutId:n,layoutType:f,Zb:new Map,layoutExitNormalTriggers:[new bza(h.j,l)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new jya(e)]),xc:m(p)};Bya(a.callback,a.slot,e)},function(e){a.j=null;
c&&c();e instanceof mg||yya(a.callback,a.slot,new tJ(e,void 0,"ADS_CLIENT_ERROR_MESSAGE_AD_BREAK_REQUEST_ERROR",!0),"ADS_CLIENT_ERROR_TYPE_FULFILL_SLOT_FAILED")})};
dza=function(a){if(null==a.j)a.callback.lJ(a.slot);else try{a.j.cancel(),a.j=null,a.callback.lJ(a.slot)}catch(b){a.j=null,yya(a.callback,a.slot,new tJ(b,void 0,"ADS_CLIENT_ERROR_MESSAGE_CANCEL_SLOT_FULFILLMENT_FAILURE"),"ADS_CLIENT_ERROR_TYPE_CANCEL_FULFILL_SLOT_FAILED")}};
$J=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.MF(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
aK=function(a,b){return b&&b.test(a)?!0:!1};
hza=function(a){var b=eza&&eza.exec(a);return b?b[0]:fza&&(a=gza&&gza.exec(a))?a[0]:""};
bK=function(a){var b=void 0===b?!1:b;return $J(aK(a,iza),a,b,"Trusted Stream URL")};
g.cK=function(a){var b=void 0===b?!1:b;return $J(aK(a,jza),a,b,"Trusted Image URL")};
lza=function(a){var b=void 0===b?!1:b;return $J(aK(a,kza),a,b,"Trusted Promoted Video Domain URL")};
nza=function(a){var b=void 0===b?!1:b;return $J(aK(a,mza),a,b,"Drm Licensor URL")};
pza=function(a,b){b=void 0===b?!1:b;return $J(aK(a,oza),a,b,"Captions URL")};
qza=function(a){a=new g.ao(a);g.bo(a,document.location.protocol);g.co(a,document.location.hostname);document.location.port&&g.eo(a,document.location.port);return a.toString()};
dK=function(a){a=new g.ao(a);g.bo(a,document.location.protocol);return a.toString()};
g.fK=function(a,b,c){c=void 0===c?{}:c;this.start=a;this.end=b;this.active=!0;this.color="";this.tm=0;this.B=rza++;this.id=c.id||"";this.priority=c.priority||9;this.visible=c.visible||!1;this.style=c.style||eK.AD_MARKER;this.namespace=c.namespace||"";if(a=c.color)a=a.toString(16),this.color="#"+Array(7-a.length).join("0")+a;this.tooltip=c.tooltip;this.icons=c.icons?c.icons.filter(function(d){return g.eq(d.thumbnails,function(e){return g.cK(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
sza=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
tza=function(a,b){switch(a.style){case eK.CHAPTER_MARKER:return b?8:5;case eK.AD_MARKER:return 6;case eK.TIME_MARKER:return Number.POSITIVE_INFINITY;default:return 0}};
g.uza=function(a,b){return a.start-b.start||a.priority-b.priority||a.B-b.B};
g.gK=function(a){return"crn_"+a};
g.hK=function(a){return"crx_"+a};
vza=function(a,b,c,d,e,f,h,l,m){this.slot=b;this.Vf=c;this.Pa=h;this.Ja=l;this.Rc=m;this.j=new aza(a,b,d,e,f)};
wza=function(a){var b;null==(b=a.Rc)||b.get().Mt(vJ(a.slot.Ca,"metadata_type_cue_point").identifier)};
xza=function(a,b,c,d,e,f){this.slot=b;this.Vf=c;this.j=new aza(a,b,d,e,f)};
yza=function(a,b){this.callback=a;this.slot=b};
zza=function(a,b){return xJ(a,b.qe,b.slotType)?!0:!1};
Aza=function(){};
iK=function(a,b,c,d,e,f,h){this.Vf=a;this.Ib=b;this.jc=c;this.Ha=d;this.Pa=e;this.Ja=f;this.Rc=h};
jK=function(){};
Bza=function(a,b,c,d,e,f){this.callback=a;this.slot=b;this.layout=c;this.j=d;this.Tb=e;this.eb=f};
Dza=function(a){if(vJ(a.slot.Ca,"metadata_type_allow_pause_ad_break_request_slot_reschedule")){var b=Cza(a,a.slot);kK(a.Tb.get(),"OPPORTUNITY_TYPE_PAUSE_AD_BREAK_REQUEST_SLOT_RESCHEDULE",function(){return[b]})}};
Cza=function(a,b){var c=lK(a.eb.get(),a.slot.slotType),d=Object,e=d.assign;a=a.slot;if(b.slotEntryTrigger){var f=b.slotEntryTrigger;f=null!=f.triggeringSlotId&&f.triggeringSlotId===b.slotId?f.clone(c):f}else f=void 0;return e.call(d,{},a,{slotId:c,slotEntryTrigger:f,slotFulfillmentTriggers:Eza(b.slotId,c,b.slotFulfillmentTriggers),slotExpirationTriggers:Eza(b.slotId,c,b.slotExpirationTriggers)})};
Eza=function(a,b,c){var d=[];c=g.u(c);for(var e=c.next();!e.done;e=c.next()){var f=d,h=f.push;e=e.value;e=null!=e.triggeringSlotId&&e.triggeringSlotId===a?e.clone(b):e;h.call(f,e)}return d};
g.mK=function(a,b){for(var c=g.u(Object.keys(b)),d=c.next(),e={};!d.done;e={placeholder:e.placeholder},d=c.next())d=d.value,e.placeholder=b[d],a=a.replace(new RegExp("\\$"+d,"gi"),function(f){return function(){return f.placeholder}}(e));
return a};
Fza=function(a,b,c){this.j=a;this.slot=b;this.layout=c};
Gza=function(a,b,c){b.layoutId!==a.layout.layoutId?a.j.Bf(a.slot,b,new sJ("Unknown layout received. Required LayoutId: "+a.layout.layoutId+("and LayoutType: "+a.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED"):c()};
nK=function(a,b,c,d){g.dG.call(this);this.callback=a;this.C=d;this.j=[];this.B=new Fza(a,b,c)};
pK=function(a,b,c,d,e,f,h){e=vJ(c.Ca,e);a=oK(a);var l=Md(function(){d.Nc(b,c)});
h.push(f(e,a,c.layoutId,{adsClientData:c.xc},function(){l()}))};
qK=function(a,b,c,d,e,f,h,l,m){if(b===a)if(m){if(m===l.layoutId){a:{a=g.u(c.keys());for(b=a.next();!b.done;b=a.next())if(b=b.value,"SLOT_TYPE_PLAYER_BYTES"===b.slotType&&f===c.get(b).layoutId){c=!0;break a}c=!1}c?d.J.sendVideoStatsEngageEvent(1,void 0,2):e?e():RG("Tried to call engagePingCallback but it is null",h,l)}}else RG("Companion AdUxClick received without a layoutId",h,l)};
rK=function(a){var b,c,d,e,f;return!(null==(b=a.get("active_view_viewable"))||!b.length)||!(null==(c=a.get("active_view_measurable"))||!c.length)||!(null==(d=a.get("active_view_fully_viewable_audible_half_duration"))||!d.length)||!(null==(e=a.get("audio_audible"))||!e.length)||!(null==(f=a.get("audio_measurable"))||!f.length)};
Hza=function(a){var b,c;return null!=(c=null==a?void 0:null==(b=a.activeViewTracking)?void 0:b.trafficType)?c:"ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"};
sK=function(a){var b,c;return new Map([["impression",a.impressionPings||[]],["error",a.errorPings||[]],["mute",a.mutePings||[]],["unmute",a.unmutePings||[]],["pause",a.pausePings||[]],["rewind",a.rewindPings||[]],["resume",a.resumePings||[]],["skip",a.skipPings||[]],["close",a.closePings||[]],["progress",a.progressPings||[]],["clickthrough",a.clickthroughPings||[]],["fullscreen",a.fullscreenPings||[]],["active_view_viewable",a.activeViewViewablePings||[]],["active_view_measurable",a.activeViewMeasurablePings||
[]],["active_view_fully_viewable_audible_half_duration",a.activeViewFullyViewableAudibleHalfDurationPings||[]],["audio_audible",(null==(b=a.activeViewTracking)?void 0:b.activeViewAudioAudiblePings)||[]],["audio_measurable",(null==(c=a.activeViewTracking)?void 0:c.activeViewAudioMeasurablePings)||[]],["end_fullscreen",a.endFullscreenPings||[]],["channel_clickthrough",a.channelClickthroughPings||[]],["abandon",a.abandonPings||[]],["start",a.startPings||[]],["first_quartile",a.firstQuartilePings||[]],
["midpoint",a.secondQuartilePings||[]],["third_quartile",a.thirdQuartilePings||[]],["complete",a.completePings||[]],["unmuted_impression",a.unmutedImpressionPings||[]],["unmuted_error",a.unmutedErrorPings||[]],["unmuted_mute",a.unmutedMutePings||[]],["unmuted_unmute",a.unmutedUnmutePings||[]],["unmuted_pause",a.unmutedPausePings||[]],["unmuted_resume",a.unmutedResumePings||[]],["unmuted_close",a.unmutedClosePings||[]],["unmuted_progress",a.unmutedProgressPings||[]],["unmuted_clickthrough",a.unmutedClickthroughPings||
[]],["unmuted_fullscreen",a.unmutedFullscreenPings||[]],["unmuted_end_fullscreen",a.unmutedEndFullscreenPings||[]],["unmuted_abandon",a.unmutedAbandonPings||[]],["unmuted_start",a.unmutedStartPings||[]],["unmuted_first_quartile",a.unmutedFirstQuartilePings||[]],["unmuted_midpoint",a.unmutedSecondQuartilePings||[]],["unmuted_third_quartile",a.unmutedThirdQuartilePings||[]],["unmuted_complete",a.unmutedCompletePings||[]],["unmuted_skip",a.unmutedSkipPings||[]]])};
Iza=function(a){switch(a){case "abandon":return"unmuted_abandon";case "active_view_fully_viewable_audible_half_duration":return null;case "active_view_measurable":return null;case "active_view_viewable":return null;case "audio_audible":return null;case "audio_measurable":return null;case "channel_clickthrough":return null;case "clickthrough":return"unmuted_clickthrough";case "close":return"unmuted_close";case "companion_engagement":return null;case "complete":return"unmuted_complete";case "end_fullscreen":return"unmuted_end_fullscreen";
case "error":return"unmuted_error";case "first_quartile":return"unmuted_first_quartile";case "fullscreen":return"unmuted_fullscreen";case "impression":return"unmuted_impression";case "midpoint":return"unmuted_midpoint";case "mute":return"unmuted_mute";case "pause":return"unmuted_pause";case "progress":return"unmuted_progress";case "resume":return"unmuted_resume";case "rewind":return null;case "skip":return"unmuted_skip";case "start":return"unmuted_start";case "third_quartile":return"unmuted_third_quartile";
case "unmute":return"unmuted_unmute";case "seek":return null;case "unmuted_abandon":case "unmuted_clickthrough":case "unmuted_complete":case "unmuted_end_fullscreen":case "unmuted_error":case "unmuted_first_quartile":case "unmuted_fullscreen":case "unmuted_impression":case "unmuted_midpoint":case "unmuted_mute":case "unmuted_pause":case "unmuted_close":case "unmuted_progress":case "unmuted_resume":case "unmuted_start":case "unmuted_third_quartile":case "unmuted_unmute":case "unmuted_skip":return null;
default:return null}};
tK=function(a,b,c,d,e){e=void 0===e?null:e;this.C=a;this.Pa=b;this.layoutId=d;this.D=0;this.K=null;this.G=void 0;this.j=new Set;this.B=Array.from(this.C.get("progress")||[]);this.B.sort(function(f,h){return(f.offsetMilliseconds||0)-(h.offsetMilliseconds||0)});
this.N={adPlacementConfig:c,HX:e}};
uK=function(){return["metadata_type_ad_placement_config"]};
oK=function(a){var b=a.Pa.get();return vK(b,a.N)};
wK=function(a,b,c){for(c=void 0===c?!1:c;a.D<a.B.length;){var d=a.B[a.D];if(d.offsetMilliseconds<=b||c)Jza(a,"progress",[d]),a.D++;else break}};
xK=function(a,b){return a.j.has(b)};
Kza=function(a){return a.B.every(function(b){return b.hasOwnProperty("offsetMilliseconds")})};
Lza=function(a,b,c){a.K=b;a.G=c};
Jza=function(a,b,c){var d,e=a.Pa.get(),f=a.layoutId,h=null!=(d=a.K)?d:void 0;a=a.G;c=void 0===c?[]:c;if(d=Mza(e.B.get(),f))for(b=e.Ub.get().Dh(f,b),f=vK(e,Nza(d),d,h,a),c=g.u(c),h=c.next();!h.done;h=c.next())h=h.value,h.baseUrl&&e.BA.send(h.baseUrl,f,b);else RG("Trying to track from an unknown layout.",void 0,void 0,{layoutId:f,trackingType:b})};
Oza=function(a,b,c,d,e){cG.call(this,"action-companion",a,b,c,d,e)};
Pza=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Pa=e;this.Le=f;this.K=l;this.qj=!0;this.D=null;this.G=vJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Le().Me.add(this);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
Qza=function(){var a=["metadata_type_action_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
Rza=function(a,b,c,d,e){cG.call(this,"image-companion",a,b,c,d,e)};
Sza=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Pa=e;this.Le=f;this.K=l;this.qj=!0;this.D=null;this.G=vJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Le().Me.add(this);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
Tza=function(){var a=["metadata_type_image_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
Uza=function(a,b,c,d,e){cG.call(this,"shopping-companion",a,b,c,d,e)};
Vza=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Pa=e;this.Le=f;this.K=l;this.qj=!0;this.D=null;this.G=vJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Le().Me.add(this);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
Wza=function(){var a=["metadata_type_shopping_companion_carousel_renderer","metadata_type_linked_player_bytes_layout_id"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_COMPANION_WITH_SHOPPING"]}};
Xza=function(a){var b;if("AD_VIDEO_PROGRESS_KIND_PERCENT"!==(null==(b=a.adVideoOffset)?void 0:b.kind))return!1;var c;return null!=(null==(c=a.adVideoOffset)?void 0:c.percent)};
Yza=function(a){var b;if("AD_VIDEO_PROGRESS_KIND_MILLISECONDS"!==(null==(b=a.adVideoOffset)?void 0:b.kind))return!1;var c;return null!=(null==(c=a.adVideoOffset)?void 0:c.milliseconds)&&!isNaN(Number(a.adVideoOffset.milliseconds))};
Zza=function(a,b,c,d){this.Wb=a;this.layoutId=c;this.G=d;this.B=[];this.j=[];this.C=this.D=0;a=g.u(b);for(b=a.next();!b.done;b=a.next())switch(b=b.value,c=void 0,null==(c=b.adVideoOffset)?void 0:c.kind){case "AD_VIDEO_PROGRESS_KIND_PERCENT":Xza(b)?this.B.push(b):RG("Invalid AdVideoProgressPercentCommand");break;case "AD_VIDEO_PROGRESS_KIND_MILLISECONDS":Yza(b)?this.j.push(b):RG("Invalid AdVideoProgressMillisecondsCommand");break;default:RG("Unknown or invalid AdVideoProgressOffSet kind")}this.B.sort(function(e,
f){return e.adVideoOffset.percent-f.adVideoOffset.percent});
this.j.sort(function(e,f){return Number(e.adVideoOffset.milliseconds)-Number(f.adVideoOffset.milliseconds)})};
$za=function(a,b,c,d,e,f){nK.call(this,a,b,c,d);this.Pa=e;this.Le=f;this.qj=!0;this.Le().Me.add(this);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
aAa=function(){var a=["metadata_type_action_companion_ad_renderer"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
bAa=function(a,b,c,d,e,f){this.callback=a;this.slot=b;this.layout=c;this.Ja=d;this.Pa=e;this.Ha=f;a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
cAa=function(a,b,c,d,e,f){nK.call(this,a,b,c,d);this.Ja=e;this.G=f;this.D=!1};
yK=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?!1:f;cG.call(this,"ad-action-interstitial",a,b,c,d);this.interactionLoggingClientData=d;this.tR=e;this.kK=f};
zK=function(a,b,c,d,e){nK.call(this,a,b,c,d);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,e,a,c.layoutId)};
dAa=function(){var a=["metadata_type_ad_action_interstitial_renderer"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_ENDCAP"]}};
AK=function(a,b){return qJ(a,b.qe,b.nf)?!0:!1};
BK=function(a,b,c){this.j=a;this.Tb=b;this.eb=c};
eAa=function(a,b,c,d,e){cG.call(this,"ads-engagement-panel",a,b,c,d,e)};
fAa=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Pa=e;this.Le=f;this.K=l;this.qj=!0;this.D=null;this.G=vJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Le().Me.add(this);a=vJ(c.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
gAa=function(){var a=["metadata_type_ads_engagement_panel_renderer","metadata_type_linked_player_bytes_layout_id"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON"]}};
hAa=function(a,b,c,d,e){this.Ac=a;this.Pa=b;this.Le=c;this.j=d;this.Ub=e};
iAa=function(a,b,c){cG.call(this,"player-underlay",a,{},b,c);this.interactionLoggingClientData=c};
CK=function(a,b,c,d){nK.call(this,a,b,c,d)};
jAa=function(a){this.Ac=a};
kAa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Pa=d;this.j=e;a=vJ(this.layout.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
lAa=function(){var a=["metadata_type_client_forecasting_ad_renderer"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_FORECASTING"]}};
mAa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Pa=d;this.j=e;a=vJ(this.layout.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId)};
DK=function(a,b,c,d){this.Ha=a;this.Pa=b;this.j=c;this.Ub=d};
nAa=function(a,b,c,d){cG.call(this,"player-overlay-layout",a,{},c,d);this.videoAdDurationSeconds=b;this.interactionLoggingClientData=d};
oAa=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Ja=e;this.Pa=f;this.K=h;this.G=l;this.D=!1;this.N=vJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
EK=function(a,b,c,d,e,f,h,l){nK.call(this,a,b,c,d);this.Ja=e;this.Pa=f;this.K=h;this.G=l;this.D=!1;this.N=vJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
pAa=function(){return{qe:["metadata_type_instream_ad_player_overlay_renderer","metadata_type_player_bytes_callback","metadata_type_linked_player_bytes_layout_id","METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"],nf:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]}};
qAa=function(a,b,c){cG.call(this,"ad-message",a,void 0,b,c)};
FK=function(a,b,c,d,e,f){nK.call(this,c,a,b,d);this.Ja=e;this.Ha=f};
rAa=function(){return{qe:["metadata_type_valid_ad_message_renderer"],nf:["LAYOUT_TYPE_TEXT_BANNER_OVERLAY"]}};
GK=function(a,b,c,d,e,f,h,l,m){return AK(c,pAa())?new EK(a,b,c,d,e,f,h,l):AK(c,{qe:["metadata_type_player_overlay_layout_renderer","metadata_type_player_bytes_callback","metadata_type_linked_player_bytes_layout_id","METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"],nf:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]})?new oAa(a,b,c,d,e,f,h,l):AK(c,dAa())?new zK(a,b,c,d,f):AK(c,rAa())?new FK(b,c,a,d,e,m):AK(c,{qe:["metadata_type_instream_ad_player_overlay_renderer"],nf:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]})?
new cAa(a,b,c,d,e,l):null};
sAa=function(a,b,c,d,e,f){this.Ac=a;this.Ja=b;this.Pa=c;this.B=d;this.j=e;this.Ha=f};
tAa=function(a,b,c){this.Ja=a;this.Pa=b;this.Ha=c};
uAa=function(a,b,c,d,e,f,h,l,m,n,p){g.J.call(this);this.callback=a;this.j=b;this.slot=c;this.layout=d;this.me=e;this.Je=f;this.Ya=h;this.Rc=l;this.Ee=m;this.Le=n;this.Ja=p;this.qj=!0;this.B=void 0;this.C=!1};
HK=function(a,b,c,d,e,f){g.J.call(this);this.callback=a;this.Ee=b;this.Ja=c;this.Wc=d;this.Le=e;this.Ha=f;this.qj=!0;this.gO=!1};
vAa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){HK.call(this,a,d,e,f,q,r);this.Ya=b;this.Rc=c;this.C=h;this.slot=l;this.layout=m;this.me=n;this.D=p;this.B=[];this.j=-1;this.K=this.G=!1};
yAa=function(a,b,c){var d=a.B[a.j];a.j===a.B.length-1&&RG("Unexpected skip with target requested during the last sublayout",d.Mc(),d.Ab(),{requestingSlot:b,requestingLayout:c});if(c.layoutId!==IK(d,b,c))RG("onSkipWithAdPodSkipTargetRequested for a PlayerBytes layout that is not currently active",d.Mc(),d.Ab(),{requestingSlot:b,requestingLayout:c});else{var e=vJ(d.Ab().Ca,"metadata_type_ad_pod_skip_target");if(e&&0<e&&e<a.B.length){a:{for(var f=e;f<a.B.length;){if(e===vJ(a.B[f].Ab().Ca,"metadata_type_ad_pod_skip_index")){e=
f;break a}f++}e=void 0}void 0===e?RG("Skip-to-index was requested but target index was not found",d.Mc(),d.Ab(),{requestingSlot:b,requestingLayout:c}):a.sf()?wAa(a,d.Ab(),e,"skipped"):xAa(a,d.Mc(),d.Ab(),e)}else RG("Invalid ad pod skip target index",d.Mc(),d.Ab(),{requestingSlot:b,requestingLayout:c})}};
IK=function(a,b,c){var d=vJ(a.Ab().Ca,"metadata_type_linked_in_player_layout_id");return d?d:(RG("Tried to retrieve Linked InPlayer LayoutId but missing ClientMetadata",a.Mc(),a.Ab(),{requestingSlot:b,requestingLayout:c}),null)};
zAa=function(a,b,c){JK(a,a.slot,b,c,function(){var d=a.N;d?(a.N=void 0,d(b)):RG("Expected further action after sublayout exit is confirmed",a.slot,a.layout)})};
BAa=function(a,b,c,d){a.sf()?wAa(a,c,a.j+1,d):JK(a,b,c,d,function(){AAa(a,a.j+1)})};
wAa=function(a,b,c,d){JK(a,a.slot,b,d,function(){if(c>=a.B.length+1||0>c)RG("Unexpected target sublayout index",a.slot,a.layout,{targetSubLayoutIndex:c});else{a.j=c;if(c===a.B.length){var e=a.Ya.get().lf(1).clientPlaybackNonce;KK(a.D,a.layout)}else e=a.B[c].Ab().layoutId;a.Rc.get().finishSegmentByCpn(b.layoutId,e)}})};
xAa=function(a,b,c,d){JK(a,b,c,"skipped",function(){AAa(a,d)})};
JK=function(a,b,c,d,e){if(!a.K){var f=a.B[a.j];f?(f.Ab().layoutId!==c.layoutId&&RG("SubLayout mismatch in exitSubLayout",b,c,{exitingSubLayout:c.layoutId,activeSubLayout:f.Ab().layoutId}),a.K=!0,f.uf(f.Ab(),d),Gya(a.C,b,c,d),a.K=!1,a.G=!1,a.Z?(a.Z(),CAa(a.Wc.get())):e()):RG("No active adapter when exitSubLayout in PlayerBytesVodCompositeLayoutRenderingAdapter. This should never happen.",b,c)}};
AAa=function(a,b){a.j===a.B.length-1?(a.j++,KK(a.D,a.layout),CAa(a.Wc.get())):DAa(a,b)};
DAa=function(a,b){if(-1===a.j&&(a.callback.Nc(a.slot,a.layout),0<b)){RG("Invalid index for playLayoutAtIndexOrExit when no ad has played yet.",a.slot,a.layout,{indexToPlay:b,layoutId:a.layout.layoutId});return}a.j=b;a.G=!0;b=a.B[a.j];if(0<a.j){a=a.Wc.get();a.B=!1;var c={};a.j&&a.videoId&&(c.cttAuthInfo={token:a.j,videoId:a.videoId});aI("ad_to_ad",c)}b.startRendering(b.Ab())};
EAa=function(a){return!a.nA.isPlaying()&&a.state.isPlaying()};
LK=function(a,b,c){return a<b?!1:null!=c?c<=b:a<=b+1};
MK=function(a){var b=[];if(a){a=g.u(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=g.u(c.value);c=d.next().value;d=d.next().value;void 0!==d&&(d="boolean"===typeof d?""+ +d:(""+d).replace(/[:,=]/g,"_"),b.push(c+"."+d))}}return b.join(";")};
NK=function(a,b,c){b=void 0===b?{}:b;this.errorCode=a;this.details=b;this.severity=void 0===c?0:c};
OK=function(a){return 1===a||2===a};
PK=function(a,b){b=void 0===b?0:b;if(a instanceof NK)return a;a=a&&a instanceof Error?a:Error(""+a);OK(b)?g.LF(a):g.MF(a);return new NK(1===b?"player.fatalexception":"player.exception",{name:""+a.name,message:""+a.message},b)};
g.GAa=function(a){return(a=FAa[a.toString()])?a:"LICENSE"};
HAa=function(a,b){function c(){var d=g.Ka.apply(0,arguments);a.removeEventListener("playing",c);b.apply(null,g.pa(d))}
a.addEventListener("playing",c)};
g.QK=function(){TC.apply(this,arguments)};
RK=function(a,b,c,d,e,f){this.sampleRate=void 0===a?0:a;this.numChannels=void 0===b?0:b;this.spatialAudioType=void 0===c?"SPATIAL_AUDIO_TYPE_NONE":c;this.j=void 0===d?!1:d;this.C=void 0===e?0:e;this.B=void 0===f?0:f};
TK=function(a,b,c,d,e,f,h,l,m){this.width=a;this.height=b;this.quality=f||IAa(a,b);this.j=g.SK[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&"UNKNOWN"!==d&&"RECTANGULAR"!==d?0:e;this.projectionType=d?"EQUIRECTANGULAR"===d&&2===e?"EQUIRECTANGULAR_THREED_TOP_BOTTOM":d:"UNKNOWN";(a=h)||(a=g.SK[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+("EQUIRECTANGULAR"===c||"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===c||"MESH"===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));
this.qualityLabel=a;this.B=l||"";this.primaries=m||""};
IAa=function(a,b){var c=Math.max(a,b);a=Math.min(a,b);b=UK[0];for(var d=0;d<UK.length;d++){var e=UK[d],f=g.SK[e];if(c>=1.3*Math.floor(16*f/9)||a>=1.3*f)return b;b=e}return"tiny"};
WK=function(a,b,c){c=void 0===c?{}:c;this.id=a;this.mimeType=b;0<c.Vb||(c.Vb=16E3);Object.assign(this,c);a=g.u(this.id.split(";"));this.itag=a.next().value;this.j=a.next().value;this.containerType=JAa(b);this.zb=VK[this.itag]||""};
XK=function(a){return"9"===a.zb||"("===a.zb||"9h"===a.zb||"(h"===a.zb};
KAa=function(a){return"H"===a.zb||"h"===a.zb};
LAa=function(a){return"9h"===a.zb||"(h"===a.zb};
YK=function(a){return"1"===a.zb||"1h"===a.zb};
ZK=function(a){return"mac3"===a.zb||"meac3"===a.zb||"m"===a.zb};
$K=function(a){return"MAC3"===a.zb||"MEAC3"===a.zb||"M"===a.zb};
g.aL=function(a){return 1===a.containerType};
MAa=function(a){return"("===a.zb||"(h"===a.zb||"H"===a.zb};
bL=function(a){return"application/x-mpegURL"===a.mimeType};
cL=function(a,b){return{itag:+a.itag,lmt:b?0:a.lastModified,xtags:a.j||""}};
dL=function(a,b){a=cL(a,b);return a.itag+";"+(a.lmt||0)+";"+a.xtags};
NAa=function(a){var b=navigator.mediaCapabilities;if(null==b||!b.decodingInfo||"f"===a.zb)return Promise.resolve();var c={type:a.audio&&a.video?"file":"media-source"};a.video&&(c.video={contentType:a.mimeType,width:a.video.width||640,height:a.video.height||360,bitrate:8*a.Vb||1E6,framerate:a.video.fps||30});a.audio&&(c.audio={contentType:a.mimeType,channels:""+(a.audio.numChannels||2),bitrate:8*a.Vb||128E3,samplerate:a.audio.sampleRate||44100});return b.decodingInfo(c).then(function(d){a.B=d})};
eL=function(a){return/(opus|mp4a|dtse|ac-3|ec-3)/.test(a)};
OAa=function(a){return/(vp9|vp09|vp8|avc1|av01)/.test(a)};
fL=function(a){return a.includes("vtt")||a.includes("text/mp4")};
JAa=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
gL=function(a,b,c,d,e,f){var h=new RK;b in g.SK||(b="small");"light"===b&&(b="tiny");d&&e?(e=Number(e),d=Number(d)):(e=g.SK[b],d=Math.round(16*e/9));f=new TK(d,e,0,null,void 0,b,f);a=unescape(a.replace(/&quot;/g,'"'));return new WK(c,a,{audio:h,video:f})};
PAa=function(a){var b="id="+a.id;a.video&&(b+=", res="+a.video.qualityLabel);var c,d;return b+", byterate=("+(null==(c=a.Lu)?void 0:c.toFixed(0))+", "+(null==(d=a.Vb)?void 0:d.toFixed(0))+")"};
hL=function(){var a=g.Wa("yt.player.utils.videoElement_");a||(a=g.vf("VIDEO"),g.Va("yt.player.utils.videoElement_",a));return a};
iL=function(a){var b=hL();return!!(b&&b.canPlayType&&b.canPlayType(a))};
kL=function(a){if(/opus/.test(a)&&g.jL&&!Xu("38")&&!g.tC())return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(QAa&&window.ManagedMediaSource&&window.ManagedMediaSource.isTypeSupported)return window.ManagedMediaSource.isTypeSupported(a);if(/webm/.test(a)&&!boa())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!iL(a)};
RAa=function(a){try{var b=kL('video/mp4; codecs="avc1.42001E"')||kL('video/webm; codecs="vp9"');return(kL('audio/mp4; codecs="mp4a.40.2"')||kL('audio/webm; codecs="opus"'))&&(b||!a)||iL('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
SAa=function(){var a=hL();return!(!a.webkitSupportsPresentationMode||"function"!==typeof a.webkitSetPresentationMode)};
TAa=function(){var a=hL();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
lL=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
mL=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
nL=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
oL=function(a,b){return 0<=nL(a,b)};
UAa=function(a,b){if(!a)return NaN;b=nL(a,b);return 0<=b?a.start(b):NaN};
pL=function(a,b){if(!a)return NaN;b=nL(a,b);return 0<=b?a.end(b):NaN};
qL=function(a){return a&&a.length?a.end(a.length-1):NaN};
rL=function(a,b){a=pL(a,b);return 0<=a?a-b:0};
sL=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return lL(d,e)};
tL=function(a,b,c,d){g.dG.call(this);var e=this;this.Rd=a;this.start=b;this.end=c;this.isActive=d;this.appendWindowStart=0;this.appendWindowEnd=Infinity;this.timestampOffset=0;this.zW={error:function(){!e.isDisposed()&&e.isActive&&e.oa("error",e)},
updateend:function(){!e.isDisposed()&&e.isActive&&e.oa("updateend",e)}};
g.eG(this.Rd,this.zW);this.SF=this.isActive};
uL=function(a,b,c,d,e,f){g.dG.call(this);var h=this;this.pc=a;this.kh=b;this.id=c;this.containerType=d;this.zb=e;this.ih=f;this.KO=this.LD=this.Mf=null;this.LG=!1;this.appendWindowStart=this.timestampOffset=0;this.qM=lL([],[]);this.pC=!1;this.KD=[];this.PA=VAa?[]:void 0;this.Gd=function(m){return h.oa(m.type,h)};
var l;if(null==(l=this.pc)?0:l.addEventListener)this.pc.addEventListener("updateend",this.Gd),this.pc.addEventListener("error",this.Gd)};
vL=function(){return window.SourceBuffer?!!SourceBuffer.prototype.changeType:!1};
wL=function(a,b){this.resource=a;this.j=void 0===b?!1:b;this.B=!1};
xL=function(a,b,c){c=void 0===c?!1:c;g.J.call(this);this.mediaElement=a;this.Ua=b;this.isView=c;this.K=0;this.D=!1;this.G=!0;this.Y=0;this.callback=null;this.Z=!1;this.Ua||(this.kh=this.mediaElement.Db());this.events=new g.QK(this);g.L(this,this.events);this.C=new wL(this.Ua?window.URL.createObjectURL(this.Ua):this.kh.webkitMediaSourceURL,!0);a=this.Ua||this.kh;UC(this.events,a,["sourceopen","webkitsourceopen"],this.x9);UC(this.events,a,["sourceclose","webkitsourceclose"],this.w9);this.N={updateend:this.f2}};
WAa=function(){return!!(window.MediaSource||yL&&window.ManagedMediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
XAa=function(a,b){zL(a)?g.bg(function(){b(a)}):a.callback=b};
ZAa=function(a,b,c){if(YAa){var d;AL(a.mediaElement,{l:"mswssb",sr:null==(d=a.mediaElement.ra)?void 0:BL(d)},!1);g.eG(b,a.N,a);g.eG(c,a.N,a)}a.j=b;a.B=c;g.L(a,b);g.L(a,c)};
$Aa=function(a,b,c,d){d=b.mimeType+(void 0===d?"":d);var e=c.mimeType;b=b.zb;c=c.zb;var f,h=null==(f=a.Ua)?void 0:f.addSourceBuffer(e),l;f="fakesb"===d.split(";")[0]?void 0:null==(l=a.Ua)?void 0:l.addSourceBuffer(d);a.kh&&(a.kh.webkitSourceAddId("0",e),a.kh.webkitSourceAddId("1",d));l=new uL(h,a.kh,"0",JAa(e),c,!1);d=new uL(f,a.kh,"1",JAa(d),b,!0);ZAa(a,l,d)};
CL=function(a){return!!a.j||!!a.B};
zL=function(a){try{return"open"===DL(a)}catch(b){return!1}};
DL=function(a){if(a.Ua)return a.Ua.readyState;switch(a.kh.webkitSourceState){case a.kh.SOURCE_OPEN:return"open";case a.kh.SOURCE_ENDED:return"ended";default:return"closed"}};
aBa=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)||yL&&window.ManagedMediaSource};
bBa=function(a,b,c,d){if(!a.j||!a.B)return null;var e=a.j.isView()?a.j.Rd:a.j,f=a.B.isView()?a.B.Rd:a.B,h=new xL(a.mediaElement,a.Ua,!0);h.C=a.C;ZAa(h,new tL(e,b,c,d),new tL(f,b,c,d));zL(a)||a.j.Sp(a.j.Uc());return h};
cBa=function(a){var b;null==(b=a.j)||b.Iy();var c;null==(c=a.B)||c.Iy();a.G=!1};
EL=function(){var a=this;this.iZ=this.qZ=paa;this.promise=new g.dg(function(b,c){a.qZ=b;a.iZ=c})};
FL=function(){g.J.call(this);this.iI=!1;this.resource=null;this.N=this.K=!1;this.D=new g.Fd;this.ra=null;g.L(this,this.D)};
dBa=function(a){a=a.hD();return 1>a.length?NaN:a.end(a.length-1)};
eBa=function(a){!a.B&&WAa()&&(a.C?a.C.then(function(){return eBa(a)}):a.Lf()||(a.B=a.Bq()))};
fBa=function(a){a.B&&(a.B.dispose(),a.B=void 0)};
AL=function(a,b,c){var d;(null==(d=a.ra)?0:d.Vc())&&a.ra.va("rms",b,void 0===c?!1:c)};
gBa=function(a,b,c){a.isPaused()||a.getCurrentTime()>b||10<c||(a.play(),g.bC(function(){gBa(a,a.getCurrentTime(),c+1)},500))};
hBa=function(a,b){a.resource&&a.resource.equals(b)||(a.resource&&a.resource.dispose(),a.resource=b)};
GL=function(a){return rL(a.Hh(),a.getCurrentTime())};
iBa=function(a,b){if(0===a.Bk()||a.hasError())return!1;var c=0<a.getCurrentTime();return 0<=b&&(a=a.hD(),a.length||!c)?oL(a,b):c};
kBa=function(a){a.Lf()&&(jBa&&a.ra&&a.ra.ju("rs_s"),VD&&0<a.getCurrentTime()&&a.seekTo(0),a.SJ(),a.load(),hBa(a,null));delete a.C};
lBa=function(a){switch(a.Sg()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
g.HL=function(a,b,c){this.uh=void 0===b?null:b;this.seekSource=void 0===c?null:c;this.state=a||64};
IL=function(a,b){return mBa(a,b.getCurrentTime(),(0,g.GD)(),GL(b))};
JL=function(a,b,c,d){if(!(b===a.state&&c===a.uh&&d===a.seekSource||void 0!==b&&(b&128&&!c||b&2&&b&16))){var e;if(e=b)e=b||a.state,e=!!(e&16||e&32);a=new g.HL(b,c,e?d?d:a.seekSource:null)}return a};
KL=function(a,b,c){return JL(a,a.state|b,null,void 0===c?null:c)};
LL=function(a,b){return JL(a,a.state&~b,null,null)};
ML=function(a,b,c,d){return JL(a,(a.state|b)&~c,null,void 0===d?null:d)};
g.TG=function(a,b){return!!(a.state&b)};
g.nBa=function(a,b){return b.state===a.state&&b.uh===a.uh};
g.NL=function(a){return g.TG(a,8)&&!g.TG(a,2)&&!g.TG(a,1024)};
oBa=function(a){return a.isPlaying()&&!g.TG(a,16)&&!g.TG(a,32)};
g.OL=function(a){return g.TG(a,1)&&!g.TG(a,2)};
PL=function(a){return g.TG(a,128)?-1:g.TG(a,2)?0:g.TG(a,2048)?3:g.TG(a,64)?-1:g.TG(a,1)&&!g.TG(a,32)?3:g.TG(a,8)?1:g.TG(a,4)?2:-1};
RL=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){g.J.call(this);var v=this;this.callback=a;this.slot=b;this.layout=c;this.Pa=d;this.Ub=e;this.Ja=f;this.Wc=h;this.hg=l;this.Wb=m;this.LE=n;this.position=q;this.p_=r;this.Ha=t;this.qj=!0;this.xZ=!1;this.Oc="not_rendering";this.HD=!1;a=vJ(this.layout.Ca,"metadata_type_ad_placement_config");this.ub=new tK(c.Zb,this.Pa,a,c.layoutId);var x;a=(null==(x=QL(this))?void 0:x.progressCommands)||[];this.o$=new Zza(m,a,c.layoutId,function(){return v.jz()});
this.FM=Md(function(){v.callback.Nc(v.slot,v.layout)});
this.TG=Md(function(){"rendering_stop_requested"!==v.Oc&&p(v);v.layoutExitReason?v.callback.Zc(v.slot,v.layout,v.layoutExitReason):RG("Received layout exit signal when not in layout exit flow.",v.slot,v.layout)})};
QL=function(a){return vJ(a.layout.Ca,"METADATA_TYPE_INTERACTIONS_AND_PROGRESS_LAYOUT_COMMANDS")};
SL=function(a,b,c){c=void 0===c?!1:c;if("rendering"===a.Oc){wK(a.ub,1E3*b,c);a.HD||wK(a.ub,1E3*b,void 0===c?!1:c);var d=a.jz();if(d&&(d/=1E3,(b>=.25*d||c)&&a.yd("first_quartile"),(b>=.5*d||c)&&a.yd("midpoint"),(b>=.75*d||c)&&a.yd("third_quartile"),a=a.o$,b*=1E3,c=a.G())){for(;a.D<a.B.length;)if(d=a.B[a.D],d.adVideoOffset.percent*c<=b)a.Wb.get().executeCommand(d.command,a.layoutId),a.D++;else break;for(;a.C<a.j.length;)if(c=a.j[a.C],Number(c.adVideoOffset.milliseconds)<=b)a.Wb.get().executeCommand(c.command,
a.layoutId),a.C++;else break}}};
qBa=function(a){0===a.position&&(a.Wc.get(),a=vJ(a.layout.Ca,"metadata_type_ad_placement_config").kind,a={adBreakType:pBa(a)},bI("ad_bl"),g.$H(a))};
TL=function(a,b,c){ZH(a,c)||cI(a,b,c);ZH(a,"video_to_ad")||cI(a,b,"video_to_ad");ZH(a,"ad_to_video")||cI(a,b,"ad_to_video");ZH(a,"ad_to_ad")||cI(a,b,"ad_to_ad")};
rBa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v){RL.call(this,a,b,c,d,e,f,h,m,n,p,q,r,t,v);var x=this;this.Md=l;this.pI=!0;this.NO=this.aj=0;this.timer=new g.ng(200);this.timer.Sa("tick",function(){x.Kc()});
g.L(this,this.timer)};
sBa=function(){for(var a=["METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"],b=g.u(uK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{qe:a,nf:["LAYOUT_TYPE_MEDIA_BREAK"]}};
uBa=function(a){a.NO=Date.now();tBa(a,a.aj);a.timer.start()};
tBa=function(a,b){b={current:b/1E3,duration:a.jz()/1E3};a.Md.get().Qa("onAdPlaybackProgress",b)};
WL=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G,H){RL.call(this,a,b,c,d,e,m,p,r,t,x,C,F,G,H);var O=this;this.tf=f;this.Ee=h;this.Ya=l;this.Bc=n;this.Md=q;this.xg=v;this.adCpn="";this.sf()||(this.MI=new g.tu(function(){O.jA("load_timeout",new sJ("Media layout load timeout.",{},"ADS_CLIENT_ERROR_MESSAGE_MEDIA_LAYOUT_LOAD_TIMEOUT",!0),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED")},1E4),a=UL(this.Ha.get()),H=VL(H.get()),a&&H&&(this.cA=new g.tu(function(){var Q=vJ(c.Ca,"metadata_type_preload_player_vars");
Q&&O.Ee.get().J.preloadVideoByPlayerVars(Q,2,300)})))};
vBa=function(){for(var a=["metadata_type_player_vars","metadata_type_player_bytes_callback_ref"],b=g.u(uK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{qe:a,nf:["LAYOUT_TYPE_MEDIA"]}};
wBa=function(a,b,c,d,e,f,h){HK.call(this,a,b,c,d,f,h);this.j=e};
zBa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G,H,O){if(AK(d,{qe:["metadata_type_sub_layouts"],nf:["LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES"]})||void 0!==d.fB&&"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES"===d.layoutType){var Q,X=null!=(Q=d.fB)?Q:vJ(d.Ca,"metadata_type_sub_layouts");a=new vAa(a,q,O,p,r,v,b,c,d,f,h,e,H);e=[];for(f={Jv:0};f.Jv<X.length;f={Jv:f.Jv},f.Jv++){O=xBa({Nc:a.A9.bind(a),Zc:a.C9.bind(a),cF:a.cF.bind(a),Bf:a.B9.bind(a)},c,X[f.Jv],l,m,n,p,q,r,t,v,x,C,F,G,function(ia){return function(qa){qa.uf(X[ia.Jv],
"normal")}}(f),f.Jv,X.length,H);
if(!O)return;e.push(O)}a.B=e;return a}if(yBa(c,H.get())&&AK(d,{qe:[],nf:["LAYOUT_TYPE_MEDIA","LAYOUT_TYPE_MEDIA_BREAK"]}))return(v=xBa({Nc:function(){},
Zc:function(){},
cF:function(){return void KK(h,d)},
Bf:function(){}},c,d,l,m,n,p,q,r,t,v,x,C,F,G,function(){},0,1,H))?new uAa(a,v,c,d,f,h,q,O,p,e,r):v;
if(AK(d,{qe:[],nf:["LAYOUT_TYPE_MEDIA","LAYOUT_TYPE_MEDIA_BREAK"]}))return(c=xBa({Nc:a.Nc.bind(a),Zc:a.Zc.bind(a),cF:function(){},
Bf:a.Bf.bind(a)},c,d,l,m,n,p,q,r,t,v,x,C,F,G,function(){KK(h,d)},0,1,H))?new wBa(a,p,r,v,c,e,H):c};
xBa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G){if(AK(c,sBa()))return new rBa(a,b,c,d,e,m,p,q,r,t,function(){},x,C,F,G);
if(AK(c,vBa()))return pJ(c.Ca,"metadata_type_ad_intro")?new WL(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,function(H){q.get().Qa("onAdIntroStateChange",H)},x,C,F,G):new WL(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,function(H){q.get().KE(H)},x,C,F,G)};
yBa=function(a,b){var c=vJ(a.Ca,"metadata_type_eligible_for_ssap");return void 0===c?(RG("Expected SSAP eligibility in PlayerBytes factory",a),!1):b.sf(c)};
XL=function(a,b,c,d,e,f,h,l,m,n){this.callback=a;this.slot=b;this.layout=c;this.Ya=d;this.Rc=e;this.Gf=f;this.Ja=h;this.ub=l;this.Pa=m;this.D=n;this.driftRecoveryMs=vJ(this.layout.Ca,"metadata_type_drift_recovery_ms")||null};
BBa=function(a){var b=vJ(a.layout.Ca,"metadata_type_layout_enter_ms"),c=vJ(a.layout.Ca,"metadata_type_layout_exit_ms");a=a.Gf.get();b=ABa(a.C,b,c);return Math.min(c,null!==b?b:Infinity)};
CBa=function(a,b){var c;YL(a.Pa.get(),{driftRecoveryInfo:Object.assign({},{contentCpn:null==(c=a.Ya.get().ev)?void 0:c.clientPlaybackNonce,adClientData:a.layout.xc.adClientDataEntry},b)})};
DBa=function(a,b,c,d,e,f,h,l,m,n,p){XL.call(this,a,b,c,d,e,f,h,l,m,n);this.C=p;this.B=this.j=null;a=g.u(this.C);for(b=a.next();!b.done;b=a.next())b=b.value,pJ(b.Ab().Ca,"metadata_type_survey_overlay")&&(this.B=b.Ab().layoutId)};
FBa=function(a,b){var c=EBa(a,b);a.j={Rl:c};c?c.startRendering(c.Ab()):b===a.B&&RG("Failed to find rendering adapter for survey media layout",a.slot,a.layout,{surveyMediaLayoutId:b})};
EBa=function(a,b){return null==b?null:a.C.find(function(c){return c.Ab().layoutId===b})||null};
GBa=function(a,b,c,d,e,f,h,l,m,n){var p=e-d,q=pJ(b.Ca,"metadata_type_survey_overlay"),r,t=(null==(r=vJ(a.Ca,"metadata_type_fulfilled_layout"))?void 0:vJ(r.Ca,"metadata_type_ssdai_ads_config"))||"";if(!p)return h.wD(c,t,2,f,d,e,a.slotId),n.ri("ads_iraot","sid."+a.slotId+";enterMs."+d+";exitMs."+e+";hso."+q+";vid."+c.video_id),null;p=h.fC(c,t,2,f,d,e,a.slotId);n.ri("ads_atct","sid."+a.slotId+";enterMs."+d+";exitMs."+e+";hso."+q+";vid."+c.video_id);if(!p)return RG("Unexpected failure to add to playback timeline",
a,b,m()),null;a=a.slotId;b=b.layoutId;p?(l.j.has(p)&&RG("Unexpected remap of timeline playback"),l.j.set(p,{slotId:a,layoutId:b})):RG("Invalid timeline playback ID");d+f>e&&h.MF(p,e-d);return p};
HBa=function(a,b){var c=vJ(b.Ca,"metadata_type_sodar_extension_data");if(c)try{$ya(0,c)}catch(d){RG("Unexpected error when loading Sodar",a,b,{error:d})}};
JBa=function(a,b,c,d,e,f){IBa(a,b,new g.SG(c,new g.HL),d,e,!1,f)};
IBa=function(a,b,c,d,e,f,h){f=void 0===f?!0:f;EAa(c)&&LK(e,0,null)&&(!xK(a,"impression")&&h&&h(),a.yd("impression"));xK(a,"impression")&&(g.VG(c,4)&&!g.VG(c,2)&&a.Dh("pause"),0>UG(c,4)&&!(0>UG(c,2))&&a.Dh("resume"),g.VG(c,16)&&.5<=e&&a.Dh("seek"),f&&g.VG(c,2)&&KBa(a,c.state,b,d,e))};
KBa=function(a,b,c,d,e,f,h){if(xK(a,"impression")){var l=1>=Math.abs(d-e);LBa(a,b,l?d:e,c,d,f,h&&l);l&&a.yd("complete")}};
LBa=function(a,b,c,d,e,f,h){wK(a,1E3*c,h);0>=e||0>=c||(null==b?0:g.TG(b,16))||(null==b?0:g.TG(b,32))||(LK(c,.25*e,d)&&(f&&!xK(a,"first_quartile")&&f("first"),a.yd("first_quartile")),LK(c,.5*e,d)&&(f&&!xK(a,"midpoint")&&f("second"),a.yd("midpoint")),LK(c,.75*e,d)&&(f&&!xK(a,"third_quartile")&&f("third"),a.yd("third_quartile")))};
MBa=function(a,b){xK(a,"impression")&&a.Dh(b?"fullscreen":"end_fullscreen")};
NBa=function(a){xK(a,"impression")&&a.Dh("clickthrough")};
OBa=function(a){a.Dh("active_view_measurable")};
PBa=function(a){xK(a,"impression")&&!xK(a,"seek")&&a.Dh("active_view_fully_viewable_audible_half_duration")};
QBa=function(a){xK(a,"impression")&&!xK(a,"seek")&&a.Dh("active_view_viewable")};
RBa=function(a){xK(a,"impression")&&!xK(a,"seek")&&a.Dh("audio_audible")};
SBa=function(a){xK(a,"impression")&&!xK(a,"seek")&&a.Dh("audio_measurable")};
TBa=function(a,b,c,d,e,f,h,l,m,n,p,q){this.callback=a;this.slot=b;this.layout=c;this.Rc=d;this.ub=e;this.Ja=f;this.Be=h;this.Ub=l;this.tf=m;this.Ha=n;this.Pa=p;this.Ya=q;this.pI=!0;this.bd=this.Oc=null;this.adCpn=void 0};
UBa=function(a,b,c){var d;a.Pa.get().ri("ads_qua","cpn."+vJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Ya.get().lf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
VBa=function(a,b){var c,d;a.Pa.get().ri("ads_imp","cpn."+vJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(c=a.Ya.get().lf(2))?void 0:c.clientPlaybackNonce)+";clr."+b+";skp."+!!g.T(null==(d=vJ(a.layout.Ca,"metadata_type_instream_ad_player_overlay_renderer"))?void 0:d.skipOrPreviewRenderer,ZL))};
WBa=function(a){return{enterMs:vJ(a.Ca,"metadata_type_layout_enter_ms"),exitMs:vJ(a.Ca,"metadata_type_layout_exit_ms")}};
XBa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){XL.call(this,a,b,c,d,e,h,l,m,n,q);this.Be=f;this.tf=p;this.Ub=r;this.Ha=t;this.bd=this.Oc=null};
YBa=function(a,b){var c;a.Pa.get().ri("ads_imp","acpn."+(null==(c=a.Ya.get().lf(2))?void 0:c.clientPlaybackNonce)+";clr."+b)};
ZBa=function(a,b,c){var d;a.Pa.get().ri("ads_qua","cpn."+vJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Ya.get().lf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
$Ba=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C,F,G,H){this.Le=a;this.me=b;this.B=c;this.Ya=d;this.Rc=e;this.Ja=f;this.Pa=h;this.Be=l;this.Gf=m;this.Ub=n;this.tf=p;this.Ee=q;this.Bc=r;this.Wc=t;this.Md=v;this.hg=x;this.Wb=C;this.xg=F;this.Ha=G;this.j=H};
$L=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x,C){this.Le=a;this.me=b;this.j=c;this.Pa=d;this.Ub=e;this.tf=f;this.Ee=h;this.Ya=l;this.Ja=m;this.Bc=n;this.Wc=p;this.Md=q;this.hg=r;this.Wb=t;this.xg=v;this.Ha=x;this.Rc=C};
aCa=function(a,b,c,d){cG.call(this,"survey-interstitial",a,b,c,d)};
aM=function(a,b,c,d,e){nK.call(this,c,a,b,d);this.Pa=e;a=vJ(b.Ca,"metadata_type_ad_placement_config");this.ub=new tK(b.Zb,e,a,b.layoutId)};
bM=function(a){return Math.round(a.width)+"x"+Math.round(a.height)};
cCa=function(a,b,c){c=void 0===c?bCa:c;c.width<bCa.width&&(c=bCa);if(a.width<c.width||a.height<c.height)return{IK:3,OF:501,errorMessage:"ad("+bM(c)+") larger than container("+bM(a)+")."};if(c.width*c.height>a.width*a.height*.2)return{IK:3,OF:501,errorMessage:"ad("+bM(c)+") to container("+bM(a)+") ratio exceeds limit."};if(c.height>a.height/3-b)return{IK:3,OF:501,errorMessage:"ad("+bM(c)+") covers container("+bM(a)+") center."}};
dCa=function(a,b){var c=vJ(a.Ca,"metadata_type_ad_placement_config");return new tK(a.Zb,b,c,a.layoutId)};
cM=function(a){return vJ(a.Ca,"metadata_type_invideo_overlay_ad_renderer")};
eCa=function(a,b,c,d){cG.call(this,"invideo-overlay",a,b,c,d);this.interactionLoggingClientData=d};
dM=function(a,b,c,d,e,f,h,l,m,n,p,q){nK.call(this,f,a,b,e);this.Pa=c;this.D=h;this.Ja=l;this.Wb=m;this.Ha=n;this.K=p;this.G=q;this.ub=dCa(b,c)};
fCa=function(){var a=["metadata_type_invideo_overlay_ad_renderer"];uK().forEach(function(b){a.push(b)});
return{qe:a,nf:["LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY","LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY"]}};
eM=function(a,b,c,d,e,f,h,l,m,n,p,q,r){nK.call(this,f,a,b,e);this.Pa=c;this.D=h;this.N=l;this.Ja=m;this.Wb=n;this.Ha=p;this.K=q;this.G=r;this.ub=dCa(b,c)};
gCa=function(){for(var a=["metadata_type_invideo_overlay_ad_renderer"],b=g.u(uK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{qe:a,nf:["LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY"]}};
fM=function(a){this.Ja=a;this.j=!1};
hCa=function(a,b,c){cG.call(this,"survey",a,{},b,c)};
iCa=function(a,b,c,d,e,f,h){nK.call(this,c,a,b,d);this.D=e;this.Ja=f;this.Ha=h};
jCa=function(a,b,c,d,e,f,h,l,m,n){this.Ac=a;this.Ja=b;this.Pa=c;this.D=d;this.Ub=e;this.B=f;this.C=h;this.Wb=l;this.Ha=m;this.j=n};
kCa=function(a,b,c,d,e,f,h,l,m,n){this.Ac=a;this.Ja=b;this.Pa=c;this.D=d;this.Ub=e;this.B=f;this.C=h;this.Wb=l;this.Ha=m;this.j=n};
gM=function(a,b,c,d,e,f,h,l,m){EK.call(this,a,b,c,d,e,f,h,m);this.Sm=l};
lCa=function(){var a=pAa();a.qe.push("metadata_type_ad_info_ad_metadata");return a};
mCa=function(a,b,c,d,e,f){this.Ac=a;this.Ja=b;this.Pa=c;this.B=d;this.Sm=e;this.j=f};
nCa=function(a,b,c,d,e,f,h){this.Ac=a;this.Ja=b;this.Pa=c;this.B=d;this.Sm=e;this.j=f;this.Ha=h};
hM=function(a,b){this.slotId=b;this.triggerType="TRIGGER_TYPE_AD_BREAK_STARTED";this.triggerId=a(this.triggerType)};
iM=function(a,b){this.j=a;this.B=b.length;this.adBreakLengthSeconds=b.reduce(function(d,e){return d+e},0);
var c=0;for(a+=1;a<b.length;a++)c+=b[a];this.adBreakRemainingLengthSeconds=c};
jM=function(a,b,c){this.Pr=b;this.triggerType="TRIGGER_TYPE_BEFORE_CONTENT_VIDEO_ID_STARTED";this.triggerId=c||a(this.triggerType)};
kM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_CLOSE_REQUESTED";this.triggerId=c||a(this.triggerType)};
lM=function(a,b,c,d){this.Pr=b;this.visible=c;this.triggerType="TRIGGER_TYPE_CONTENT_VIDEO_ID_ENDED";this.triggerId=d||a(this.triggerType)};
oCa=function(a){this.triggerType="TRIGGER_TYPE_DURATION_AFTER_MEDIA_PAUSED";this.triggerId=a(this.triggerType)};
mM=function(a,b,c){this.triggeringLayoutId=b;this.slotId=c;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ACTIVE_AND_SLOT_ID_HAS_EXITED";this.triggerId=a(this.triggerType)};
nM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
oM=function(a,b,c,d){this.triggeringLayoutId=b;this.j=c;this.triggerType="TRIGGER_TYPE_LAYOUT_EXITED_FOR_REASON";this.triggerId=d||a(this.triggerType)};
pCa=function(a){switch(a){case "LAYOUT_EXIT_REASON_UNSPECIFIED":return"unknown";case "LAYOUT_EXIT_REASON_NORMAL":return"normal";case "LAYOUT_EXIT_REASON_ERROR":return"error";case "LAYOUT_EXIT_REASON_USER_SKIPPED":return"skipped";case "LAYOUT_EXIT_REASON_USER_MUTED":return"muted";case "LAYOUT_EXIT_REASON_ABANDONED":return"abandoned";case "LAYOUT_EXIT_REASON_USER_INPUT_SUBMITTED":return"user_input_submitted";case "LAYOUT_EXIT_REASON_USER_CANCELLED":return"user_cancelled";default:return new tJ("Invalid layout exit reason: "+
a)}};
pM=function(a,b){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_EXITED";this.triggerId=a(this.triggerType)};
qCa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_ENDED";this.triggerId=a(this.triggerType)};
rCa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_STARTED";this.triggerId=a(this.triggerType)};
sCa=function(a){this.triggerId=a;this.triggerType="TRIGGER_TYPE_MEDIA_RESUMED"};
qM=function(a,b,c,d,e){this.Pr=b;this.j=c;this.visible=d;this.layoutId=e;this.triggerType="TRIGGER_TYPE_MEDIA_TIME_RANGE_ALLOW_REACTIVATION_ON_USER_CANCELLED";this.triggerId=a(this.triggerType)};
rM=function(a,b,c,d,e){this.Pr=b;this.j=c;this.visible=d;this.triggerType="TRIGGER_TYPE_MEDIA_TIME_RANGE";this.triggerId=e||a(this.triggerType)};
tCa=function(a,b,c){this.Pr=b;this.j=c;this.triggerType="TRIGGER_TYPE_NOT_IN_MEDIA_TIME_RANGE";this.triggerId=a(this.triggerType)};
uCa=function(a,b){this.j=b;this.slotType="SLOT_TYPE_PLAYER_BYTES";this.layoutType="LAYOUT_TYPE_MEDIA";this.triggerType="TRIGGER_TYPE_ON_DIFFERENT_LAYOUT_ID_ENTERED";this.triggerId=a(this.triggerType)};
vCa=function(a,b){this.j=b;this.slotType="SLOT_TYPE_IN_PLAYER";this.triggerType="TRIGGER_TYPE_ON_DIFFERENT_SLOT_ID_ENTER_REQUESTED";this.triggerId=a(this.triggerType)};
sM=function(a,b,c){this.layoutId=b;this.triggerType="TRIGGER_TYPE_ON_LAYOUT_SELF_EXIT_REQUESTED";this.triggerId=c||a(this.triggerType)};
tM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_ON_NEW_PLAYBACK_AFTER_CONTENT_VIDEO_ID";this.triggerId=c||a(this.triggerType)};
bza=function(a,b){this.opportunityType="OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED";this.associatedSlotId=b;this.triggerType="TRIGGER_TYPE_ON_OPPORTUNITY_TYPE_RECEIVED";this.triggerId=a(this.triggerType)};
wCa=function(a){this.triggerType="TRIGGER_TYPE_PLAYBACK_MINIMIZED";this.triggerId=a(this.triggerType)};
xCa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_PROGRESS_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
uM=function(a,b){this.layoutId=b;this.triggerType="TRIGGER_TYPE_SEEK_BACKWARD_BEFORE_LAYOUT_ENTER_TIME";this.triggerId=a(this.triggerType)};
yCa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_SEEK_FORWARD_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
vM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SKIP_REQUESTED";this.triggerId=c||a(this.triggerType)};
wM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
xM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
yM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_EMPTY";this.triggerId=a(this.triggerType)};
zM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_NON_EMPTY";this.triggerId=a(this.triggerType)};
AM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_SCHEDULED";this.triggerId=c||a(this.triggerType)};
BM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_UNSCHEDULED";this.triggerId=a(this.triggerType)};
CM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SURVEY_SUBMITTED";this.triggerId=c||a(this.triggerType)};
zCa=function(a,b){this.durationMs=45E3;this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_TIME_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
DM=function(a,b,c,d){this.category=a;this.trigger=b;this.slot=c;this.layout=d};
EM=function(a){return null!=(null==a?void 0:a.layoutId)&&null!=(null==a?void 0:a.layoutType)};
ACa=function(a){return null!=(null==a?void 0:a.durationMs)&&0<(null==a?void 0:a.durationMs)};
BCa=function(a){return!!(a.r6&&a.slot&&a.layout)};
CCa=function(a){var b,c=null==(b=a.config)?void 0:b.adPlacementConfig;a=a.renderer;return!(!c||null==c.kind||!a)};
FM=function(a){return void 0!==a.playerVars&&void 0!==a.pings&&void 0!==a.externalVideoId};
$M=function(a){if(!EM(a.adLayoutMetadata))return!1;a=a.renderingContent;var b=g.T(a,DCa);return b?ECa(b):(b=g.T(a,VM))?FM(b):(b=g.T(a,WM))?void 0!==b.playerVars:(b=g.T(a,XM))?void 0!==b.durationMilliseconds:g.T(a,YM)||g.T(a,ZM)?!0:!1};
ECa=function(a){a=(a.sequentialLayouts||[]).map(function(b){return g.T(b,FCa)});
return 0<a.length&&a.every($M)};
JCa=function(a){if(!EM(a.adLayoutMetadata))return!1;if(g.T(a.renderingContent,GCa))return!0;a=g.T(a.renderingContent,aN);return g.T(null==a?void 0:a.sidePanel,HCa)||g.T(null==a?void 0:a.sidePanel,ICa)?!0:!1};
LCa=function(a){var b=a.adSlotMetadata;if(void 0===(null==b?void 0:b.slotId)||void 0===(null==b?void 0:b.slotType)||!(KCa(a)||a.slotEntryTrigger&&a.slotFulfillmentTriggers&&a.slotExpirationTriggers))return!1;var c;a=null==(c=a.fulfillmentContent)?void 0:c.fulfilledLayout;return(c=g.T(a,FCa))?$M(c):(c=g.T(a,bN))?JCa(c):!1};
KCa=function(a){var b;a=g.T(null==(b=a.fulfillmentContent)?void 0:b.fulfilledLayout,bN);var c;return a&&"LAYOUT_TYPE_PANEL_QR_CODE"===(null==(c=a.adLayoutMetadata)?void 0:c.layoutType)};
NCa=function(a,b){var c;if(null==(c=a.questions)||!c.length||!a.playbackCommands||(void 0===b||!b)&&1!==a.questions.length)return!1;a=g.u(a.questions);for(b=a.next();!b.done;b=a.next()){b=b.value;var d=c=void 0,e=(null==(c=g.T(b,cN))?void 0:c.surveyAdQuestionCommon)||(null==(d=g.T(b,dN))?void 0:d.surveyAdQuestionCommon);if(!MCa(e))return!1}return!0};
OCa=function(a){a=((null==a?void 0:a.playerOverlay)||{}).instreamSurveyAdRenderer;var b;if(a)if(a.playbackCommands&&a.questions&&1===a.questions.length){var c,d=(null==(b=g.T(a.questions[0],cN))?void 0:b.surveyAdQuestionCommon)||(null==(c=g.T(a.questions[0],dN))?void 0:c.surveyAdQuestionCommon);b=MCa(d)}else b=!1;else b=!1;return b};
MCa=function(a){if(!a)return!1;a=g.T(a.instreamAdPlayerOverlay,PCa);var b=g.T(null==a?void 0:a.skipOrPreviewRenderer,ZL),c=g.T(null==a?void 0:a.adInfoRenderer,eN);return(g.T(null==a?void 0:a.skipOrPreviewRenderer,fN)||b)&&c?!0:!1};
QCa=function(a){return null!=a.linearAds&&EM(a.adLayoutMetadata)};
RCa=function(a){return null!=a.linearAd&&null!=a.adVideoStart};
SCa=function(a){if(isNaN(Number(a.timeoutSeconds))||!a.text||!a.ctaButton||!g.T(a.ctaButton,g.gN)||!a.brandImage)return!1;var b;return a.backgroundImage&&g.T(a.backgroundImage,hN)&&(null==(b=g.T(a.backgroundImage,hN))?0:b.landscape)?!0:!1};
iN=function(a,b,c,d,e,f,h){g.J.call(this);this.Ha=a;this.Tb=b;this.Ob=c;this.De=d;this.Ya=e;this.B=f;this.j=h};
WCa=function(a,b,c){var d,e=(null!=(d=c.adSlots)?d:[]).map(function(f){return g.T(f,TCa)});
c.hB?vJ(b.Ca,"metadata_type_allow_pause_ad_break_request_slot_reschedule")?kK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId):(a.Ha.get().J.U().L("h5_check_forecasting_renderer_for_throttled_midroll")?(d=c.Gu.filter(function(f){var h;
return null!=(null==(h=f.renderer)?void 0:h.clientForecastingAdRenderer)}),0!==d.length?UCa(a.j,d,e,b.slotId,c.ssdaiAdsConfig):kK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId)):kK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId),VCa(a.B,b)):UCa(a.j,c.Gu,e,b.slotId,c.ssdaiAdsConfig)};
YCa=function(a,b,c,d,e,f){var h=a.Ya.get().lf(1);kK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return XCa(a.De.get(),c,d,e,h.clientPlaybackNonce,h.Wu,h.daiEnabled,h,f)},b)};
aDa=function(a,b,c,d,e,f,h){b=ZCa(b,f,Number(d.prefetchMilliseconds)||0,h);a=b instanceof tJ?b:$Ca(a,d,e,b,c);return a instanceof tJ?a:[a]};
bDa=function(a,b,c,d,e){var f=lK(a.eb.get(),"SLOT_TYPE_AD_BREAK_REQUEST");d=[new gJ({getAdBreakUrl:d.getAdBreakUrl,GQ:0,FQ:0}),new nya(!0)];a=b.pauseDurationMs?b.lactThresholdMs?{slotId:f,slotType:"SLOT_TYPE_AD_BREAK_REQUEST",slotPhysicalPosition:2,slotEntryTrigger:new AM(a.j,f),slotFulfillmentTriggers:[new oCa(a.j)],slotExpirationTriggers:[new tM(a.j,e),new xM(a.j,f)],bb:"core",Ca:new uJ(d),adSlotLoggingData:c}:new tJ("AdPlacementConfig for Pause Ads is missing lact_threshold_ms"):new tJ("AdPlacementConfig for Pause Ads is missing pause_duration_ms");
return a instanceof tJ?a:[a]};
cDa=function(a){var b,c;return void 0!==(null==(b=a.renderer)?void 0:null==(c=b.adBreakServiceRenderer)?void 0:c.getAdBreakUrl)};
jN=function(a,b,c){if(a.beforeContentVideoIdStartedTrigger)a=a.beforeContentVideoIdStartedTrigger?new jM(rJ,b,a.id):new tJ("Not able to create BeforeContentVideoIdStartedTrigger");else if(a.layoutExitedForReasonTrigger){var d,e;(null==(d=a.layoutExitedForReasonTrigger)?0:d.triggeringLayoutId)&&(null==(e=a.layoutExitedForReasonTrigger)?0:e.layoutExitReason)?(b=pCa(a.layoutExitedForReasonTrigger.layoutExitReason),a=b instanceof tJ?b:new oM(rJ,a.layoutExitedForReasonTrigger.triggeringLayoutId,[b],a.id)):
a=new tJ("Not able to create LayoutIdExitedForReasonTrigger")}else{if(a.onLayoutSelfExitRequestedTrigger){var f;b=null!=(f=a.onLayoutSelfExitRequestedTrigger)&&f.triggeringLayoutId?new sM(rJ,a.onLayoutSelfExitRequestedTrigger.triggeringLayoutId,a.id):new tJ("Not able to create OnLayoutSelfExitRequestedTrigger")}else{if(a.onNewPlaybackAfterContentVideoIdTrigger)a=a.onNewPlaybackAfterContentVideoIdTrigger?new tM(rJ,b,a.id):new tJ("Not able to create OnNewPlaybackAfterContentVideoIdTrigger");else{if(a.skipRequestedTrigger){var h;
b=null!=(h=a.skipRequestedTrigger)&&h.triggeringLayoutId?new vM(rJ,a.skipRequestedTrigger.triggeringLayoutId,a.id):new tJ("Not able to create SkipRequestedTrigger")}else if(a.slotIdEnteredTrigger){var l;b=null!=(l=a.slotIdEnteredTrigger)&&l.triggeringSlotId?new wM(rJ,a.slotIdEnteredTrigger.triggeringSlotId,a.id):new tJ("Not able to create SlotIdEnteredTrigger")}else if(a.slotIdExitedTrigger){var m;b=null!=(m=a.slotIdExitedTrigger)&&m.triggeringSlotId?new xM(rJ,a.slotIdExitedTrigger.triggeringSlotId,
a.id):new tJ("Not able to create SkipRequestedTrigger")}else if(a.surveySubmittedTrigger){var n;b=null!=(n=a.surveySubmittedTrigger)&&n.triggeringLayoutId?new CM(rJ,a.surveySubmittedTrigger.triggeringLayoutId,a.id):new tJ("Not able to create SurveySubmittedTrigger")}else{if(a.mediaResumedTrigger)a=a.mediaResumedTrigger&&a.id?new sCa(a.id):new tJ("Not able to create MediaResumedTrigger");else{if(a.closeRequestedTrigger){var p;b=null!=(p=a.closeRequestedTrigger)&&p.triggeringLayoutId?new kM(rJ,a.closeRequestedTrigger.triggeringLayoutId,
a.id):new tJ("Not able to create CloseRequestedTrigger")}else if(a.slotIdScheduledTrigger){var q;b=null!=(q=a.slotIdScheduledTrigger)&&q.triggeringSlotId?new AM(rJ,a.slotIdScheduledTrigger.triggeringSlotId,a.id):new tJ("Not able to create SlotIdScheduledTrigger")}else{if(a.mediaTimeRangeTrigger){var r;f=Number(null==(r=a.mediaTimeRangeTrigger)?void 0:r.offsetStartMilliseconds);var t;h=Number(null==(t=a.mediaTimeRangeTrigger)?void 0:t.offsetEndMilliseconds);isFinite(f)&&isFinite(h)?(t=h,-1===t&&(t=
c),c=f>t?new tJ("AD_PLACEMENT_KIND_MILLISECONDS endMs needs to be >= startMs.",{offsetStartMs:f,offsetEndMs:t},"ADS_CLIENT_ERROR_MESSAGE_AD_PLACEMENT_END_SHOULD_GREATER_THAN_START",t===c&&f-500<=t):new Vu(f,t),a=c instanceof tJ?c:new rM(rJ,b,c,!1,a.id)):a=new tJ("Not able to create MediaTimeRangeTrigger")}else if(a.contentVideoIdEndedTrigger)a=a.contentVideoIdEndedTrigger?new lM(rJ,b,!1,a.id):new tJ("Not able to create ContentVideoIdEndedTrigger");else{if(a.layoutIdEnteredTrigger){var v;b=null!=(v=
a.layoutIdEnteredTrigger)&&v.triggeringLayoutId?new nM(rJ,a.layoutIdEnteredTrigger.triggeringLayoutId,a.id):new tJ("Not able to create LayoutIdEnteredTrigger")}else b=new tJ("Not able to convert an AdsControlflowTrigger.");a=b}b=a}a=b}b=a}a=b}b=a}a=b}return a};
eDa=function(a,b,c,d,e,f,h,l){return null===b?new tJ("Invalid slot type when get discovery companion fromActionCompanionAdRenderer",{slotType:b,ActionCompanionAdRenderer:d}):[dDa(a,b,h,f,function(m){var n=m.slotId;m=l(m);var p=d.adLayoutLoggingData,q=new uJ([new BI(d),new EI(e)]);n=ZJ(c.eb.get(),"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",n);var r={layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",bb:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Zb:new Map,
layoutExitNormalTriggers:[new tM(c.j,h)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:q,xc:m(r),adLayoutLoggingData:p}})]};
iDa=function(a,b,c,d,e,f){if(!f)for(b=g.u(b),f=b.next();!f.done;f=b.next())f=f.value,kN(a,f.renderer,f.config.adPlacementConfig.kind);a=Array.from(a.values()).filter(function(p){return fDa(p)});
b=[];f=g.u(a);for(var h=f.next(),l={};!h.done;l={As:l.As},h=f.next()){l.As=h.value;h=g.u(l.As.ZL);for(var m=h.next(),n={};!m.done;n={Ql:n.Ql},m=h.next())n.Ql=m.value,m=function(p,q){return function(r){return p.Ql.KM(r,q.As.instreamVideoAdRenderer.elementId,p.Ql.YL)}}(n,l),n.Ql.isContentVideoCompanion?b.push(gDa(c,d,e,l.As.instreamVideoAdRenderer.elementId,n.Ql.associatedCompositePlayerBytesLayoutId,n.Ql.adSlotLoggingData,m)):1<a.length?b.push(hDa(c,d,e,l.As.instreamVideoAdRenderer.elementId,n.Ql.adSlotLoggingData,
function(p,q){return function(r){return p.Ql.KM(r,q.As.instreamVideoAdRenderer.elementId,p.Ql.YL,p.Ql.associatedCompositePlayerBytesLayoutId)}}(n,l))):b.push(hDa(c,d,e,l.As.instreamVideoAdRenderer.elementId,n.Ql.adSlotLoggingData,m))}return b};
kN=function(a,b,c){if(b=jDa(b)){b=g.u(b);for(var d=b.next();!d.done;d=b.next())if((d=d.value)&&d.externalVideoId){var e=kDa(a,d.externalVideoId);e.instreamVideoAdRenderer||(e.instreamVideoAdRenderer=d,e.yD=c)}else RG("InstreamVideoAdRenderer without externalVideoId")}};
jDa=function(a){var b=[],c=a.sandwichedLinearAdRenderer&&a.sandwichedLinearAdRenderer.linearAd&&g.T(a.sandwichedLinearAdRenderer.linearAd,VM);if(c)return b.push(c),b;if(a.instreamVideoAdRenderer)return b.push(a.instreamVideoAdRenderer),b;if(a.linearAdSequenceRenderer&&a.linearAdSequenceRenderer.linearAds){a=g.u(a.linearAdSequenceRenderer.linearAds);for(c=a.next();!c.done;c=a.next())c=c.value,g.T(c,VM)&&b.push(g.T(c,VM));return b}return null};
fDa=function(a){if(void 0===a.instreamVideoAdRenderer)return RG("AdPlacementSupportedRenderers without matching InstreamVideoAdRenderer"),!1;for(var b=g.u(a.ZL),c=b.next();!c.done;c=b.next()){c=c.value;if(void 0===c.KM)return!1;if(void 0===c.YL)return RG("AdPlacementConfig for AdPlacementSupportedRenderers that matches an InstreamVideoAdRenderer is undefined"),!1;if(void 0===a.yD||void 0===c.sG||a.yD!==c.sG&&"AD_PLACEMENT_KIND_SELF_START"!==c.sG)return!1;if(void 0===a.instreamVideoAdRenderer.elementId)return RG("InstreamVideoAdRenderer has no elementId",
void 0,void 0,{kind:a.yD,"matching APSR kind":c.sG}),!1}return!0};
kDa=function(a,b){a.has(b)||a.set(b,{instreamVideoAdRenderer:void 0,yD:void 0,adVideoId:b,ZL:[]});return a.get(b)};
lN=function(a,b,c,d,e,f,h,l,m){e?kDa(a,e).ZL.push({dfb:b,sG:c,isContentVideoCompanion:d,YL:h,associatedCompositePlayerBytesLayoutId:f,adSlotLoggingData:l,KM:m}):RG("Companion AdPlacementSupportedRenderer without adVideoId")};
lDa=function(a){var b,c=null==(b=vJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:b.current;if(!c)return null;b=vJ(a.Ca,"metadata_type_ad_pod_skip_target_callback_ref");var d=a.layoutId,e=vJ(a.Ca,"metadata_type_content_cpn"),f=vJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),h=vJ(a.Ca,"metadata_type_player_underlay_renderer"),l=vJ(a.Ca,"metadata_type_ad_placement_config"),m=vJ(a.Ca,"metadata_type_video_length_seconds");var n=pJ(a.Ca,"metadata_type_layout_enter_ms")&&pJ(a.Ca,
"metadata_type_layout_exit_ms")?(vJ(a.Ca,"metadata_type_layout_exit_ms")-vJ(a.Ca,"metadata_type_layout_enter_ms"))/1E3:void 0;return{Xp:d,contentCpn:e,nQ:c,aM:b,instreamAdPlayerOverlayRenderer:f,instreamAdPlayerUnderlayRenderer:h,adPlacementConfig:l,videoLengthSeconds:m,LI:n,inPlayerLayoutId:vJ(a.Ca,"metadata_type_linked_in_player_layout_id"),inPlayerSlotId:vJ(a.Ca,"metadata_type_linked_in_player_slot_id")}};
oDa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v){d=lK(d,"SLOT_TYPE_PLAYER_BYTES");a=mDa(e,a,h,c,d,m,n);if(a instanceof tJ)return a;var x;n=null==(x=vJ(a.Ca,"metadata_type_fulfilled_layout"))?void 0:x.layoutId;if(!n)return new tJ("Invalid adNotify layout");b=nDa(n,e,f,c,l,b,m,p,q,r,t,v,h);return b instanceof tJ?b:[a].concat(g.pa(b))};
nDa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){c=pDa(b,c,d,f,h,l,m,n,p,q,r);if(c instanceof tJ)return c;a=qDa(b,a,h,e,c);return a instanceof tJ?a:[].concat(g.pa(a.Ag),[a.Ew])};
sDa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){b=pDa(a,b,c,e,f,l,m,n,p,q,r,t);if(b instanceof tJ)return b;a=rDa(a,c,f,h,d,l.Fc,b);return a instanceof tJ?a:a.Ag.concat(a.Ew)};
pDa=function(a,b,c,d,e,f,h,l,m,n,p,q){var r=mN(d,c,n);return r instanceof sJ?new tJ(r):n.J.U().experiments.ob("html5_refactor_in_player_slot_generation")?function(t){var v=new iM(0,[r.Ro]);t=tDa(b,r.layoutId,r.jo,c,nN(r.playerVars,r.IA,f,m,v),r.Ro,e,v,h(t),l.get(r.jo.externalVideoId),q);v=[];if(r.jo.playerOverlay.instreamAdPlayerOverlayRenderer){var x=lDa(t);if(!x)return RG("Expected MediaLayout to carry valid data to create InPlayerSlot and PlayerOverlayForMediaLayout",void 0,t),{layout:t,Ag:[]};
v=[uDa(a,x.contentCpn,x.Xp,function(F){return oN(b,F.slotId,"core",x,zJ(p,F))},x.inPlayerSlotId)].concat(g.pa(v));
if(x.instreamAdPlayerUnderlayRenderer&&vDa(n)){var C=x.instreamAdPlayerUnderlayRenderer;v=[wDa(a,x.contentCpn,x.Xp,function(F){return xDa(b,F.slotId,C,x.adPlacementConfig,x.Xp,zJ(p,F))})].concat(g.pa(v))}}return{layout:t,
Ag:v}}:function(t){var v=new iM(0,[r.Ro]);
return{layout:tDa(b,r.layoutId,r.jo,c,nN(r.playerVars,r.IA,f,m,v),r.Ro,e,v,h(t),l.get(r.jo.externalVideoId),q),Ag:[]}}};
mN=function(a,b,c){if(!a.playerVars)return new sJ("No playerVars available in InstreamVideoAdRenderer.");var d,e;if(null==a.elementId||null==a.playerVars||null==a.playerOverlay||null==(null==(d=a.playerOverlay)?void 0:d.instreamAdPlayerOverlayRenderer)&&null==(null==(e=a.playerOverlay)?void 0:e.playerOverlayLayoutRenderer)||null==a.pings||null==a.externalVideoId)return new sJ("Received invalid VOD InstreamVideoAdRenderer",{instreamVideoAdRenderer:a});d=TB(a.playerVars);e=Number(d.length_seconds);
isNaN(e)&&(e=0,RG("Expected valid length seconds in player vars but got NaN"));if(c.sf("AD_PLACEMENT_KIND_START"===b.kind)){if(void 0===a.layoutId)return new sJ("Expected server generated layout ID in instreamVideoAdRenderer");b=a.layoutId}else b=a.elementId;return{layoutId:b,jo:a,playerVars:d,IA:a.playerVars,Ro:e}};
nN=function(a,b,c,d,e){a.iv_load_policy=d;b=TB(b);if(b.cta_conversion_urls)try{a.cta_conversion_urls=JSON.parse(b.cta_conversion_urls)}catch(f){RG(f)}c.qk&&(a.ctrl=c.qk);c.ql&&(a.ytr=c.ql);c.Tu&&(a.ytrcc=c.Tu);c.isMdxPlayback&&(a.mdx="1");a.vvt&&(a.vss_credentials_token=a.vvt,c.Em&&(a.vss_credentials_token_type=c.Em),c.mdxEnvironment&&(a.mdx_environment=c.mdxEnvironment));2<=e.B&&(a.slot_pos=e.j);a.autoplay="1";return a};
yDa=function(a){var b=new Map;a=g.u(a);for(var c=a.next();!c.done;c=a.next())(c=c.value.renderer.remoteSlotsRenderer)&&c.hostElementId&&b.set(c.hostElementId,c);return b};
DDa=function(a,b,c,d,e,f,h,l,m,n){for(var p=[],q=g.u(a),r=q.next();!r.done;r=q.next())if(r=r.value,!KCa(r)){var t="SLOT_TRIGGER_EVENT_BEFORE_CONTENT"===r.adSlotMetadata.triggerEvent,v=m.sf(t),x=zDa(jN(r.slotEntryTrigger,d,c.Wu),v,r,n);if(x instanceof tJ)return x;for(var C=[],F=g.u(r.slotFulfillmentTriggers),G=F.next();!G.done;G=F.next()){G=jN(G.value,d,c.Wu);if(G instanceof tJ)return G;C.push(G)}C=ADa(C,v,r,n);v=[];F=g.u(r.slotExpirationTriggers);for(G=F.next();!G.done;G=F.next()){G=jN(G.value,d,
c.Wu);if(G instanceof tJ)return G;v.push(G)}F=[];c.Fc&&F.push(new mJ({}));var H=void 0;G={slotId:r.adSlotMetadata.slotId,slotType:r.adSlotMetadata.slotType,slotPhysicalPosition:null!=(H=r.adSlotMetadata.slotPhysicalPosition)?H:1,bb:"core",slotEntryTrigger:x,slotFulfillmentTriggers:C,slotExpirationTriggers:v};if(x=g.T(r.fulfillmentContent.fulfilledLayout,FCa)){if(!$M(x))return new tJ("Invalid PlayerBytesAdLayoutRenderer");x=BDa(G,x,b,c,d,e,f,h,l,m,n,a);if(x instanceof tJ)return x;F.push(new oJ(t));
r=Object.assign({},G,{Ca:new uJ(F),fulfilledLayout:x.layout,adSlotLoggingData:r.adSlotMetadata.adSlotLoggingData});p.push.apply(p,g.pa(x.Ag));p.push(r)}else if(t=g.T(r.fulfillmentContent.fulfilledLayout,bN),C=x=void 0,"LAYOUT_TYPE_PANEL_QR_CODE"!==(null==(x=t)?void 0:null==(C=x.adLayoutMetadata)?void 0:C.layoutType))if(t){if(!JCa(t))return new tJ("Invalid PlayerUnderlayAdLayoutRenderer");C=d;F=c.Wu;v=f;x=r.adSlotMetadata.triggerEvent;if("LAYOUT_TYPE_DISMISSABLE_PANEL_TEXT_PORTRAIT_IMAGE"===t.adLayoutMetadata.layoutType)if(H=
g.T(t.renderingContent,aN))if(H=g.T(H.sidePanel,ICa)){var O={layoutId:t.adLayoutMetadata.layoutId,layoutType:t.adLayoutMetadata.layoutType,bb:"core"};C=CDa(t,C,F);C instanceof tJ?t=C:(F=[],"SLOT_TRIGGER_EVENT_CONTENT_PAUSED"===x&&F.push(new EI({kind:"AD_PLACEMENT_KIND_PAUSE"})),t=Object.assign({},O,{renderingContent:t.renderingContent,Zb:new Map([["impression",H.impressionPings||[]],["resume",H.resumePings||[]]])},C,{xc:zJ(v,G)(O),Ca:new uJ(F)}))}else t=new tJ("DismissablePanelTextPortraitImageRenderer is missing");
else t=new tJ("SqueezebackPlayerSidePanelRenderer is missing");else"LAYOUT_TYPE_DISPLAY_TRACKING"===t.adLayoutMetadata.layoutType?g.T(t.renderingContent,GCa)?(H={layoutId:t.adLayoutMetadata.layoutId,layoutType:t.adLayoutMetadata.layoutType,bb:"core"},C=CDa(t,C,F),C instanceof tJ?t=C:(F=[],"SLOT_TRIGGER_EVENT_CONTENT_PAUSED"===x&&F.push(new EI({kind:"AD_PLACEMENT_KIND_PAUSE"})),t=Object.assign({},H,{renderingContent:t.renderingContent,Zb:new Map},C,{xc:zJ(v,G)(H),Ca:new uJ(F)}))):t=new tJ("CounterfactualRenderer is missing"):
t=new tJ("LayoutType ["+t.adLayoutMetadata.layoutType+"] is invalid for PlayerUnderlaySlot");if(t instanceof tJ)return t;r=Object.assign({},G,{Ca:new uJ([]),fulfilledLayout:t,adSlotLoggingData:r.adSlotMetadata.adSlotLoggingData});p.push(r)}else return new tJ("Unable to retrieve a client slot ["+G.slotType+"] from a given AdSlotRenderer")}return p};
zDa=function(a,b,c,d){return b&&"SLOT_TYPE_PLAYER_BYTES"===c.adSlotMetadata.slotType&&a instanceof jM?new hM(function(e){return pN(d,e)},c.adSlotMetadata.slotId):a};
ADa=function(a,b,c,d){return b&&"SLOT_TYPE_PLAYER_BYTES"===c.adSlotMetadata.slotType?a.map(function(e){return e instanceof wM?new AM(function(f){return pN(d,f)},c.adSlotMetadata.slotId):e}):a};
BDa=function(a,b,c,d,e,f,h,l,m,n,p,q){var r=CDa(b,e,d.Wu);if(r instanceof tJ)return r;if(g.T(b.renderingContent,VM)){d=EDa([b],d,l);if(d instanceof tJ)return d;if(1!==d.length)return new tJ("Only expected one media layout.");a=FDa(a,b,r,d[0],void 0,"core",c,e,f,h,m,q);return a instanceof tJ?a:{layout:a,Ag:[]}}var t=g.T(b.renderingContent,DCa);if(t){if(!EM(b.adLayoutMetadata))return new tJ("Invalid ad layout metadata");if(!ECa(t))return new tJ("Invalid sequential layout");t=t.sequentialLayouts.map(function(v){return v.playerBytesAdLayoutRenderer});
a=GDa(a,b.adLayoutMetadata,r,t,c,e,d,l,f,h,m,n,p,q);return a instanceof tJ?a:{layout:a.o4,Ag:a.Ag}}return new tJ("Not able to convert a sequential layout")};
GDa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){var v=new II({current:null}),x=EDa(d,h,l);if(x instanceof tJ)return x;h=[];l=[];for(var C=void 0,F=0;F<d.length;F++){var G=d[F];if(g.T(G.renderingContent,VM)){C=FDa(a,G,HDa,x[F],UL(q)&&VL(q)?x[F+1]:void 0,"adapter",e,f,m,n,p,t);if(C instanceof tJ)return C;h.push(C);C=x[F]}else if(g.T(G.renderingContent,WM)){var H=a,O=n;if($M(G)){var Q=g.T(G.renderingContent,WM);if(Q&&void 0!==Q.playerVars){var X={layoutId:G.adLayoutMetadata.layoutId,layoutType:G.adLayoutMetadata.layoutType,
bb:"adapter"};Q=TB(Q.playerVars);Q.autoplay="1";G=Object.assign({},X,HDa,{renderingContent:G.renderingContent,Ca:new uJ([new dJ({}),new EI({kind:"AD_PLACEMENT_KIND_START"}),new TI({current:null}),new XI(Q)]),Zb:new Map,xc:zJ(O,H)(X),adLayoutLoggingData:G.adLayoutMetadata.adLayoutLoggingData})}else G=new tJ("Invalid ad intro renderer")}else G=new tJ("Invalid PlayerBytesAdLayoutRenderer");if(G instanceof tJ)return G;h.push(G)}else if(g.T(G.renderingContent,XM)){a:{H=G.adLayoutMetadata.layoutId;O=g.u(e);
for(X=O.next();!X.done;X=O.next()){X=X.value;var ia=Q=void 0,qa=(null==(Q=X.renderer)?void 0:null==(ia=Q.linearAdSequenceRenderer)?void 0:ia.linearAds)||[];Q=g.u(qa);for(ia=Q.next();!ia.done;ia=Q.next())if((ia=g.T(ia.value,XM))&&void 0!==ia.inPlayerSlotId&&void 0!==ia.inPlayerLayoutId&&void 0!==ia.associatedPlayerBytesLayoutId&&ia.associatedPlayerBytesLayoutId===H){H={kH:ia,adPlacementConfig:X.config.adPlacementConfig};break a}}H=new tJ("Not able to find associated InPlayer slot for endcap")}if(H instanceof
tJ)return H;O=void 0;X=a;Q=n;var ra=H.adPlacementConfig;ia=C;if($M(G))if((qa=g.T(G.renderingContent,XM))&&void 0!==qa.durationMilliseconds){var ma={layoutId:G.adLayoutMetadata.layoutId,layoutType:G.adLayoutMetadata.layoutType,bb:"adapter"};ra=[new jJ(qa.durationMilliseconds),new lJ({impressionCommands:void 0,abandonCommands:qa.abandonCommands?[{commandExecutorCommand:qa.abandonCommands}]:void 0,completeCommands:qa.completionCommands}),new EI(ra)];ia&&(ra.push(new GI(ia.yy.j-1)),ra.push(new bJ(ia.yy.j)),
ra.push(new HI(null!=(O=ia.adPodSkipTarget)?O:-1)));G=Object.assign({},ma,HDa,{renderingContent:G.renderingContent,Ca:new uJ(ra),Zb:qa.skipPings?new Map([["skip",qa.skipPings]]):new Map,xc:zJ(Q,X)(ma),adLayoutLoggingData:G.adLayoutMetadata.adLayoutLoggingData})}else G=new tJ("Invalid endcap renderer");else G=new tJ("Invalid PlayerBytesAdLayoutRenderer");if(G instanceof tJ)return G;h.push(G);G=IDa(G.layoutId,r,f,H,v,n);if(G instanceof tJ)return G;l.push(G)}}b={layoutId:b.layoutId,layoutType:b.layoutType,
bb:"core"};return{o4:Object.assign({},b,c,{fB:h,Zb:new Map,Ca:new uJ([v]),xc:zJ(n,a)(b)}),Ag:l}};
FDa=function(a,b,c,d,e,f,h,l,m,n,p,q){if(!$M(b))return new tJ("Invalid PlayerBytesAdLayoutRenderer");var r=g.T(b.renderingContent,VM);(null==r?0:r.pings)?r=sK(r.pings):(r=g.T(b.renderingContent,XM),r=(null==r?0:r.skipPings)?new Map([["skip",r.skipPings]]):new Map);if(r instanceof tJ)return r;f={layoutId:b.adLayoutMetadata.layoutId,layoutType:b.adLayoutMetadata.layoutType,bb:f};var t=b.adLayoutMetadata.layoutId;b:{var v=g.u(h);for(h=v.next();!h.done;h=v.next()){h=h.value;var x=jDa(h.renderer)||[],
C=g.u(x);for(x=C.next();!x.done;x=C.next())if(x=x.value,x.associatedPlayerBytesLayoutId===t){x.associatedPlayerBytesLayoutId?(v=x.playerOverlay,C=void 0!==v&&void 0!==v.playerOverlayLayoutRenderer&&void 0!==v.playerOverlayLayoutRenderer.inPlayerSlotId&&void 0!==v.playerOverlayLayoutRenderer.inPlayerLayoutId,v=void 0!==v&&void 0!==v.instreamAdPlayerOverlayRenderer&&void 0!==v.instreamAdPlayerOverlayRenderer.inPlayerSlotId&&void 0!==v.instreamAdPlayerOverlayRenderer.inPlayerLayoutId||C):v=!1;h=v?{instreamVideoAdRenderer:x,
adPlacementConfig:h.config.adPlacementConfig}:new tJ("Invalid InPlayer shim");break b}}h=new tJ("Not able to find associated InPlayer slot")}C=h;if(C instanceof tJ)e=C;else if((h=g.T(b.renderingContent,VM))&&FM(h)){v=C.instreamVideoAdRenderer.playerOverlay.instreamAdPlayerOverlayRenderer;x=C.instreamVideoAdRenderer.playerOverlay.playerOverlayLayoutRenderer;var F,G=null!=(F=null==v?void 0:v.inPlayerSlotId)?F:null==x?void 0:x.inPlayerSlotId,H;F=null!=(H=null==v?void 0:v.inPlayerLayoutId)?H:null==x?
void 0:x.inPlayerLayoutId;if(void 0===G)e=new tJ("InPlayer shim slot id is undefined");else if(void 0===F)e=new tJ("InPlayer shim layout id is undefined");else{d=[new FI(d.yy),new JI(h.externalVideoId),new KI(l),new lJ({impressionCommands:h.impressionCommands,abandonCommands:h.onAbandonCommands,completeCommands:h.completeCommands}),new XI(d.jC),new TI({current:null}),new WI(d.h$.Ro),new RI(F),new SI(G),new bJ(d.yy.j),new nJ(Hza(h.pings)),new EI(C.adPlacementConfig)];v&&d.push(new LI(v));x&&d.push(new MI(x));
b:{q=g.u(q);for(l=q.next();!l.done;l=q.next())if(l=l.value,"SLOT_TYPE_PLAYER_UNDERLAY"===l.adSlotMetadata.slotType&&(H=g.T(l.fulfillmentContent.fulfilledLayout,bN))&&(H=g.T(H.renderingContent,aN))&&H.associatedPlayerBytesLayoutId===t){t=l;break b}t=void 0}t&&d.push(new OI(t));e&&d.push(new YI(e.jC));h.adNextParams&&d.push(new CI(h.adNextParams));h.clickthroughEndpoint&&d.push(new DI(h.clickthroughEndpoint));h.legacyInfoCardVastExtension&&d.push(new kJ(h.legacyInfoCardVastExtension));h.sodarExtensionData&&
d.push(new ZI(h.sodarExtensionData));(e=m.get(h.externalVideoId))&&d.push(new hJ(e));e=new uJ(d)}}else e=new tJ("Invalid vod media renderer");if(e instanceof tJ)return e;a=Object.assign({},f,c,{Zb:r,renderingContent:b.renderingContent,Ca:e,xc:zJ(n,a)(f),adLayoutLoggingData:b.adLayoutMetadata.adLayoutLoggingData});b=g.T(b.renderingContent,VM);if(!b||!FM(b))return new tJ("Invalid meida renderer");p=kDa(p,b.externalVideoId);p.instreamVideoAdRenderer=b;p.yD="AD_PLACEMENT_KIND_START";return a};
IDa=function(a,b,c,d,e,f){function h(n){return pN(b,n)}
var l=d.kH.inPlayerSlotId,m={layoutId:d.kH.inPlayerLayoutId,layoutType:"LAYOUT_TYPE_ENDCAP",bb:"core"};c={slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:new nM(h,a),slotFulfillmentTriggers:[new wM(h,l)],slotExpirationTriggers:[new xM(h,l),new tM(h,c)]};a=Object.assign({},m,{layoutExitNormalTriggers:[new pM(h,a)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],Zb:new Map,Ca:new uJ([new PI(d.kH),new EI(d.adPlacementConfig),
e]),xc:zJ(f,c)(m),adLayoutLoggingData:d.kH.adLayoutLoggingData});return Object.assign({},c,{Ca:new uJ([new fJ(a)])})};
CDa=function(a,b,c){for(var d=[],e=g.u(a.layoutExitNormalTriggers||[]),f=e.next();!f.done;f=e.next()){f=jN(f.value,b,c);if(f instanceof tJ)return f;d.push(f)}e=[];var h=g.u(a.layoutExitSkipTriggers||[]);for(f=h.next();!f.done;f=h.next()){f=jN(f.value,b,c);if(f instanceof tJ)return f;e.push(f)}h=[];var l=g.u(a.layoutExitMuteTriggers||[]);for(f=l.next();!f.done;f=l.next()){f=jN(f.value,b,c);if(f instanceof tJ)return f;h.push(f)}l=[];a=g.u(a.layoutExitUserInputSubmittedTriggers||[]);for(f=a.next();!f.done;f=
a.next()){f=jN(f.value,b,c);if(f instanceof tJ)return f;l.push(f)}return{layoutExitNormalTriggers:d,layoutExitSkipTriggers:e,layoutExitMuteTriggers:h,layoutExitUserInputSubmittedTriggers:l,hd:[]}};
EDa=function(a,b,c){for(var d=[],e=g.u(a),f=e.next();!f.done;f=e.next())if(f=g.T(f.value.renderingContent,VM)){if(!FM(f))return new tJ("Invalid vod media renderer");d.push(JDa(f))}e=d.map(function(q){return q.Ro});
f=[];for(var h=0,l=0;l<a.length;l++){var m=g.T(a[l].renderingContent,VM);if(m){var n=new iM(h,e),p=nN(d[h].playerVars,d[h].IA,b,c,n);f[l]={yy:n,adPodSkipTarget:m.adPodSkipTarget,h$:d[h],jC:p};h++}}return f};
JDa=function(a){var b=TB(a.playerVars),c=Number(b.length_seconds);isNaN(c)&&(c=0,RG("Expected valid length seconds in player vars but got NaN"));return{playerVars:b,IA:a.playerVars,Ro:c}};
KDa=function(a){var b=0;a=g.u(a.questions);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c=g.T(c,cN)||g.T(c,dN)){var d=void 0;b+=(null==(d=c.surveyAdQuestionCommon)?void 0:d.durationMilliseconds)||0}return b};
LDa=function(a){var b,c,d,e,f=(null==(c=g.T(null==(b=a.questions)?void 0:b[0],cN))?void 0:c.surveyAdQuestionCommon)||(null==(e=g.T(null==(d=a.questions)?void 0:d[0],dN))?void 0:e.surveyAdQuestionCommon),h;b=[].concat(g.pa((null==(h=a.playbackCommands)?void 0:h.instreamAdCompleteCommands)||[]),g.pa((null==f?void 0:f.timeoutCommands)||[]));var l,m,n,p,q,r,t,v,x,C,F,G,H,O,Q,X,ia,qa,ra,ma;return{impressionCommands:null==(l=a.playbackCommands)?void 0:l.impressionCommands,errorCommands:null==(m=a.playbackCommands)?
void 0:m.errorCommands,muteCommands:null==(n=a.playbackCommands)?void 0:n.muteCommands,unmuteCommands:null==(p=a.playbackCommands)?void 0:p.unmuteCommands,pauseCommands:null==(q=a.playbackCommands)?void 0:q.pauseCommands,rewindCommands:null==(r=a.playbackCommands)?void 0:r.rewindCommands,resumeCommands:null==(t=a.playbackCommands)?void 0:t.resumeCommands,skipCommands:null==(v=a.playbackCommands)?void 0:v.skipCommands,progressCommands:null==(x=a.playbackCommands)?void 0:x.progressCommands,rfb:null==
(C=a.playbackCommands)?void 0:C.clickthroughCommands,fullscreenCommands:null==(F=a.playbackCommands)?void 0:F.fullscreenCommands,activeViewViewableCommands:null==(G=a.playbackCommands)?void 0:G.activeViewViewableCommands,activeViewMeasurableCommands:null==(H=a.playbackCommands)?void 0:H.activeViewMeasurableCommands,activeViewFullyViewableAudibleHalfDurationCommands:null==(O=a.playbackCommands)?void 0:O.activeViewFullyViewableAudibleHalfDurationCommands,activeViewAudioAudibleCommands:null==(Q=a.playbackCommands)?
void 0:null==(X=Q.activeViewTracking)?void 0:X.activeViewAudioAudibleCommands,activeViewAudioMeasurableCommands:null==(ia=a.playbackCommands)?void 0:null==(qa=ia.activeViewTracking)?void 0:qa.activeViewAudioMeasurableCommands,endFullscreenCommands:null==(ra=a.playbackCommands)?void 0:ra.endFullscreenCommands,abandonCommands:null==(ma=a.playbackCommands)?void 0:ma.abandonCommands,completeCommands:b}};
ODa=function(a,b,c,d,e,f,h){return function(l,m){return MDa(a,m.slotId,l,f,function(n,p){n=h(n);return NDa(b,m.layoutId,p,e,n,"LAYOUT_TYPE_SURVEY",[new eya(c),d],c.adLayoutLoggingData)})}};
RDa=function(a,b,c,d,e,f,h){if(!PDa(a))return new tJ("Invalid InstreamVideoAdRenderer for SlidingText.",{instreamVideoAdRenderer:a});var l=a.additionalPlayerOverlay.slidingTextPlayerOverlayRenderer;return[QDa(f,b,c,d,function(m){var n=h(m);m=m.slotId;m=ZJ(e.eb.get(),"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",m);var p={layoutId:m,layoutType:"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",bb:"core"},q=new pM(e.j,d);return{layoutId:m,layoutType:"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",Zb:new Map,layoutExitNormalTriggers:[q],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new fya(l)]),xc:n(p)}})]};
PDa=function(a){a=g.T(null==a?void 0:a.additionalPlayerOverlay,SDa);if(!a)return!1;var b=a.slidingMessages;return a.title&&b&&0!==b.length?!0:!1};
UDa=function(a,b,c,d,e){var f;if(null==(f=a.playerOverlay)||!f.instreamSurveyAdRenderer)return function(){return[]};
if(!OCa(a))return function(){return new tJ("Received invalid InstreamVideoAdRenderer for DAI survey.",{instreamVideoAdRenderer:a})};
var h=a.playerOverlay.instreamSurveyAdRenderer,l=KDa(h);return 0>=l?function(){return new tJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:h})}:function(m,n){var p=TDa(m,c,d,function(q){var r=n(q),t=q.slotId;
q=LDa(h);t=ZJ(e.eb.get(),"LAYOUT_TYPE_SURVEY",t);var v={layoutId:t,layoutType:"LAYOUT_TYPE_SURVEY",bb:"core"},x=new pM(e.j,d),C=new vM(e.j,t),F=new CM(e.j,t),G=new wCa(e.j);return{layoutId:t,layoutType:"LAYOUT_TYPE_SURVEY",Zb:new Map,layoutExitNormalTriggers:[x,G],layoutExitSkipTriggers:[C],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[F],hd:[],bb:"core",Ca:new uJ([new dya(h),new EI(b),new iJ(l/1E3),new lJ(q)]),xc:r(v),adLayoutLoggingData:h.adLayoutLoggingData}});
m=RDa(a,c,p.slotId,d,e,m,n);return m instanceof tJ?m:[p].concat(g.pa(m))}};
bEa=function(a,b,c,d,e,f,h){h=void 0===h?!1:h;var l=[];try{var m=[];if(c.renderer.linearAdSequenceRenderer)var n=function(x){x=VDa(x.slotId,c,b,e(x),d,f,h);m=x.zaa;return x.y4};
else if(c.renderer.instreamVideoAdRenderer)n=function(x){var C=x.slotId;x=e(x);var F=h,G=c.config.adPlacementConfig,H=WDa(G),O=H.zV,Q=H.CV;H=c.renderer.instreamVideoAdRenderer;var X;if(null==H?0:null==(X=H.playerOverlay)?0:X.instreamSurveyAdRenderer)throw new TypeError("Survey overlay should not be set on single video.");var ia=XDa(H,F);X=Math.min(O+1E3*ia.videoLengthSeconds,Q);F=new iM(0,[ia.videoLengthSeconds]);Q=ia.videoLengthSeconds;var qa=ia.playerVars,ra=ia.instreamAdPlayerOverlayRenderer,ma=
ia.adVideoId,sa=YDa(c),ea=ia.Zb;ia=ia.yU;var za=null==H?void 0:H.adLayoutLoggingData;H=null==H?void 0:H.sodarExtensionData;C=ZJ(b.eb.get(),"LAYOUT_TYPE_MEDIA",C);var ba={layoutId:C,layoutType:"LAYOUT_TYPE_MEDIA",bb:"core"};return{layoutId:C,layoutType:"LAYOUT_TYPE_MEDIA",Zb:ea,layoutExitNormalTriggers:[new qCa(b.j)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new KI(d),new WI(Q),new XI(qa),new $I(O),new aJ(X),ra&&new LI(ra),
new EI(G),new JI(ma),new FI(F),new eJ(sa),H&&new ZI(H),new TI({current:null}),new cJ({}),new nJ(ia)].filter(ZDa)),xc:x(ba),adLayoutLoggingData:za}};
else throw new TypeError("Expected valid AdPlacementRenderer for DAI");var p=$Da(a,d,c.adSlotLoggingData,n);l.push(p);for(var q=g.u(m),r=q.next();!r.done;r=q.next()){var t=r.value,v=t(a,e);if(v instanceof tJ)return v;l.push.apply(l,g.pa(v))}}catch(x){return new tJ(x,{errorMessage:x.message,AdPlacementRenderer:c,numberOfSurveyRenderers:aEa(c)})}return l};
aEa=function(a){a=(a.renderer.linearAdSequenceRenderer||{}).linearAds;return null!=a&&a.length?a.filter(function(b){var c,d;return null!=(null==(c=g.T(b,VM))?void 0:null==(d=c.playerOverlay)?void 0:d.instreamSurveyAdRenderer)}).length:0};
VDa=function(a,b,c,d,e,f,h){var l=b.config.adPlacementConfig,m=WDa(l),n=m.zV,p=m.CV;m=(b.renderer.linearAdSequenceRenderer||{}).linearAds;if(null==m||!m.length)throw new TypeError("Expected linear ads");var q=[],r={a_:n,b_:0,waa:q};m=m.map(function(v){return cEa(a,v,r,c,d,l,e,p,h)}).map(function(v,x){x=new iM(x,q);
return v(x)});
var t=m.map(function(v){return v.z4});
return{y4:dEa(c,a,n,t,l,YDa(b),d,p,f),zaa:m.map(function(v){return v.yaa})}};
cEa=function(a,b,c,d,e,f,h,l,m){var n=XDa(g.T(b,VM),m),p=c.a_,q=c.b_,r=Math.min(p+1E3*n.videoLengthSeconds,l);c.a_=r;c.b_++;c.waa.push(n.videoLengthSeconds);var t,v,x=null==(t=g.T(b,VM))?void 0:null==(v=t.playerOverlay)?void 0:v.instreamSurveyAdRenderer;if("nPpU29QrbiU"===n.adVideoId&&null==x)throw new TypeError("Survey slate media has no survey overlay");return function(C){var F=n.playerVars;2<=C.B&&(F.slot_pos=C.j);F.autoplay="1";var G,H;F=n.videoLengthSeconds;var O=n.playerVars,Q=n.Zb,X=n.yU,ia=
n.instreamAdPlayerOverlayRenderer,qa=n.adVideoId,ra=null==(G=g.T(b,VM))?void 0:G.adLayoutLoggingData;G=null==(H=g.T(b,VM))?void 0:H.sodarExtensionData;H=ZJ(d.eb.get(),"LAYOUT_TYPE_MEDIA",a);var ma={layoutId:H,layoutType:"LAYOUT_TYPE_MEDIA",bb:"adapter"};C={layoutId:H,layoutType:"LAYOUT_TYPE_MEDIA",Zb:Q,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"adapter",Ca:new uJ([new KI(h),new WI(F),new XI(O),new $I(p),new aJ(r),
new bJ(q),new TI({current:null}),ia&&new LI(ia),new EI(f),new JI(qa),new FI(C),G&&new ZI(G),x&&new lya(x),new cJ({}),new nJ(X)].filter(ZDa)),xc:e(ma),adLayoutLoggingData:ra};F=UDa(g.T(b,VM),f,h,C.layoutId,d);return{z4:C,yaa:F}}};
XDa=function(a,b){if(!a)throw new TypeError("Expected instream video ad renderer");if(!a.playerVars)throw new TypeError("Expected player vars in url encoded string");var c=TB(a.playerVars),d=Number(c.length_seconds);if(isNaN(d))throw new TypeError("Expected valid length seconds in player vars");var e=Number(a.trimmedMaxNonSkippableAdDurationMs);d=isNaN(e)?d:Math.min(d,e/1E3);e=a.playerOverlay||{};e=void 0===e.instreamAdPlayerOverlayRenderer?null:e.instreamAdPlayerOverlayRenderer;var f=c.video_id;
f||(f=(f=a.externalVideoId)?f:void 0);if(!f)throw new TypeError("Expected valid video id in IVAR");if(b&&0===d){var h;b=null!=(h=eEa[f])?h:d}else b=d;return{playerVars:c,videoLengthSeconds:b,instreamAdPlayerOverlayRenderer:e,adVideoId:f,Zb:a.pings?sK(a.pings):new Map,yU:Hza(a.pings)}};
YDa=function(a){a=Number(a.driftRecoveryMs);return isNaN(a)||0>=a?null:a};
WDa=function(a){var b=a.adTimeOffset||{};a=b.offsetEndMilliseconds;b=Number(b.offsetStartMilliseconds);if(isNaN(b))throw new TypeError("Expected valid start offset");a=Number(a);if(isNaN(a))throw new TypeError("Expected valid end offset");return{zV:b,CV:a}};
gEa=function(a,b,c,d,e,f,h){var l=c.pings;return l?[fEa(a,f,e,function(m){var n=m.slotId;m=h(m);var p=c.adLayoutLoggingData;n=ZJ(b.eb.get(),"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",n);var q={layoutId:n,layoutType:"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",bb:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",Zb:sK(l),layoutExitNormalTriggers:[new tM(b.j,f)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new EI(d)]),
xc:m(q),adLayoutLoggingData:p}})]:new tJ("VideoAdTrackingRenderer without VideoAdTracking pings filled.",{videoAdTrackingRenderer:c})};
iEa=function(a,b,c,d,e,f,h,l){a=hEa(a,c,f,h,d,function(m){var n=m.slotId;m=l(m);n=ZJ(b.eb.get(),"LAYOUT_TYPE_FORECASTING",n);var p={layoutId:n,layoutType:"LAYOUT_TYPE_FORECASTING",bb:"core"},q=new Map,r=e.impressionUrls;r&&q.set("impression",r);return{layoutId:n,layoutType:"LAYOUT_TYPE_FORECASTING",Zb:q,layoutExitNormalTriggers:[new sM(b.j,n)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new iya(e),new EI(c)]),xc:m(p)}});
return a instanceof tJ?a:[a]};
kEa=function(a,b,c,d,e,f,h){return[jEa(a,f,d,function(l){var m=l.slotId;l=h(l);m=ZJ(b.eb.get(),"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",m);var n={layoutId:m,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",bb:"core"};return{layoutId:m,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Zb:new Map,layoutExitNormalTriggers:[new tM(b.j,f)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new LI(e),new EI(c)]),xc:l(n),adLayoutLoggingData:e.adLayoutLoggingData}})]};
oEa=function(a,b,c,d,e,f,h,l){a=lEa(a,c,f,h,d,function(m,n){var p=m.slotId;m=l(m);var q=e.contentSupportedRenderer;q?q.textOverlayAdContentRenderer?(q=ZJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY",p),n=mEa(b,q,"LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY",e,c,m,nEa(b,n,p))):q.enhancedTextOverlayAdContentRenderer?(q=ZJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY",p),n=mEa(b,q,"LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY",e,c,m,nEa(b,n,p))):q.imageOverlayAdContentRenderer?(q=ZJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY",
p),n=nEa(b,n,p),n.push(new zCa(b.j,q)),n=mEa(b,q,"LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY",e,c,m,n)):n=new sJ("InvideoOverlayAdRenderer without appropriate sub renderer"):n=new sJ("InvideoOverlayAdRenderer without contentSupportedRenderer");return n});
return a instanceof tJ?a:[a]};
rEa=function(a,b,c,d,e,f,h,l,m){var n=Number(d.durationMilliseconds);return isNaN(n)?new tJ("Expected valid duration for AdActionInterstitialRenderer."):function(p){return pEa(b,p.slotId,c,d,n,{impressionCommands:void 0,abandonCommands:d.abandonCommands?[{commandExecutorCommand:d.abandonCommands}]:void 0,completeCommands:d.completionCommands},d.skipPings?new Map([["skip",d.skipPings]]):new Map,h(p),function(q){return qEa(a,q,e,function(r,t){var v=r.slotId;r=h(r);v=ZJ(b.eb.get(),"LAYOUT_TYPE_ENDCAP",
v);return NDa(b,v,t,c,r,"LAYOUT_TYPE_ENDCAP",[new PI(d),l],d.adLayoutLoggingData)})},m,f-1,d.adLayoutLoggingData,f)}};
sEa=function(a,b,c,d){if(!c.playerVars)return new tJ("No playerVars available in AdIntroRenderer.");var e=TB(c.playerVars);e.autoplay="1";return function(f){var h=f.slotId;f=d(f);h=ZJ(a.eb.get(),"LAYOUT_TYPE_MEDIA",h);var l={layoutId:h,layoutType:"LAYOUT_TYPE_MEDIA",bb:"adapter"};return{xk:{layoutId:h,layoutType:"LAYOUT_TYPE_MEDIA",Zb:new Map,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"adapter",Ca:new uJ([new dJ({}),
new EI(b),new TI({current:null}),new XI(e)]),xc:f(l)},Vl:[new oM(a.j,h,["error"])],Lj:[],Ny:[],My:[]}}};
uEa=function(a,b,c,d,e,f,h,l,m,n){n=void 0===n?!1:n;var p=KDa(e);if(!NCa(e,n))return new tJ("Received invalid InstreamSurveyAdRenderer for VOD composite survey.",{InstreamSurveyAdRenderer:e});if(0>=p)return new tJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:e});var q=ODa(a,b,e,f,c,d,h);return q instanceof tJ?q:function(r){return tEa(b,r.slotId,c,p,e,LDa(e),h(r),q,l,m)}};
wEa=function(a,b,c,d,e,f,h,l){function m(q){return qEa(a,q,d,n)}
function n(q,r){var t=q.slotId;q=h(q);t=ZJ(b.eb.get(),"LAYOUT_TYPE_VIDEO_INTERSTITIAL_BUTTONED_LEFT",t);return NDa(b,t,r,c,q,"LAYOUT_TYPE_VIDEO_INTERSTITIAL_BUTTONED_LEFT",[new cya(e),f],e.adLayoutLoggingData)}
if(!SCa(e))return new tJ("Received invalid SurveyTextInterstitialRenderer.",{SurveyTextInterstitialRenderer:e});var p=1E3*e.timeoutSeconds;return function(q){var r={impressionCommands:e.impressionCommands,completeCommands:e.timeoutCommands,skipCommands:e.dismissCommands},t=h(q);q=vEa(b,q.slotId,c,p,r,new Map,t,m,void 0,qN(b,c,e.layoutId,"createSubLayoutVodMediaBreakLayoutForSurveyInterstitial"));r=new RI(q.vJ);t=new GI(l);return{xk:{layoutId:q.layoutId,layoutType:q.layoutType,Zb:q.Zb,layoutExitNormalTriggers:[],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:q.bb,Ca:new uJ([].concat(g.pa(q.Ky),[r,t])),xc:q.xc,adLayoutLoggingData:q.adLayoutLoggingData},Vl:[],Lj:q.layoutExitMuteTriggers,Ny:q.layoutExitUserInputSubmittedTriggers,My:q.hd,Ng:q.Ng}}};
yEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,v,x){a=lK(a,"SLOT_TYPE_PLAYER_BYTES");d=mDa(b,h,d,e,a,n,p);if(d instanceof tJ)return d;var C;h=null==(C=vJ(d.Ca,"metadata_type_fulfilled_layout"))?void 0:C.layoutId;if(!h)return new tJ("Invalid adNotify layout");b=xEa(h,b,c,e,f,m,l,n,q,r,t,v,x);return b instanceof tJ?b:[d].concat(g.pa(b))};
xEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){c=zEa(b,c,d,f,h,l,m,n,p,q,r);AEa(f)?(d=BEa(b,a),a=lK(b.eb.get(),"SLOT_TYPE_IN_PLAYER"),f=ZJ(b.eb.get(),"LAYOUT_TYPE_SURVEY",a),l=CEa(b,d,l),b=[].concat(g.pa(l.slotExpirationTriggers),[new kM(b.j,f)]),a=c({slotId:l.slotId,slotType:l.slotType,slotPhysicalPosition:l.slotPhysicalPosition,slotEntryTrigger:l.slotEntryTrigger,slotFulfillmentTriggers:l.slotFulfillmentTriggers,slotExpirationTriggers:b,bb:l.bb},{slotId:a,layoutId:f}),e=a instanceof tJ?a:{Ew:Object.assign({},
l,{slotExpirationTriggers:b,Ca:new uJ([new fJ(a.layout)]),adSlotLoggingData:e}),Ag:a.Ag}):e=qDa(b,a,l,e,c);return e instanceof tJ?e:[].concat(g.pa(e.Ag),[e.Ew])};
GEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){b=zEa(a,b,c,e,f,h,m,n,p,q,r,t);AEa(e)?(e=DEa(a,c,h,l),e instanceof tJ?a=e:(l=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=ZJ(a.eb.get(),"LAYOUT_TYPE_SURVEY",l),h=[].concat(g.pa(e.slotExpirationTriggers),[new kM(a.j,m)]),l=b({slotId:e.slotId,slotType:e.slotType,slotPhysicalPosition:e.slotPhysicalPosition,bb:e.bb,slotEntryTrigger:e.slotEntryTrigger,slotFulfillmentTriggers:e.slotFulfillmentTriggers,slotExpirationTriggers:h},{slotId:l,layoutId:m}),a=l instanceof tJ?
l:{Ew:{slotId:e.slotId,slotType:e.slotType,slotPhysicalPosition:e.slotPhysicalPosition,slotEntryTrigger:EEa(a,c,e.slotId,e.slotEntryTrigger),slotFulfillmentTriggers:FEa(a,c,e.slotId,e.slotFulfillmentTriggers),slotExpirationTriggers:h,bb:e.bb,Ca:new uJ([new oJ(rN(c)),new fJ(l.layout)]),adSlotLoggingData:d},Ag:l.Ag})):a=rDa(a,c,h,l,d,m.Fc,b);return a instanceof tJ?a:a.Ag.concat(a.Ew)};
AEa=function(a){a=g.u(a);for(var b=a.next();!b.done;b=a.next())if(g.T(b.value,YM))return!0;return!1};
zEa=function(a,b,c,d,e,f,h,l,m,n,p,q){return function(r,t){if(UL(p)&&VL(p))a:{var v=HEa(d,c,p);if(v instanceof tJ)t=v;else{for(var x=0,C=[],F=[],G=[],H=[],O=[],Q=[],X=new UI({current:null}),ia=new II({current:null}),qa=!1,ra=[],ma=0,sa=[],ea=0;ea<d.length;ea++){var za=d[ea],ba=g.T(za,VM);if(ba){ba=mN(ba,c,p);if(ba instanceof sJ){t=new tJ(ba);break a}var Ta=new iM(ma,v),y=nN(ba.playerVars,ba.IA,h,n,Ta);ma++;sa[ea]={renderer:za,data:ba,yy:Ta,jC:y}}}ma=-1;for(v=0;v<d.length;v++)if(ea=d[v],za=g.T(ea,
WM)){ea=sEa(b,c,za,l);if(ea instanceof tJ){t=ea;break a}ea=ea(r);C.push(ea.xk);F=[].concat(g.pa(ea.Vl),g.pa(F));G=[].concat(g.pa(ea.Lj),g.pa(G));ea.Ng&&(ra=[ea.Ng].concat(g.pa(ra)))}else if(g.T(ea,VM))za=sa[v],ma=za.data,ea=za.yy,za=za.jC,ba=sa[v+1],Ta=void 0,ba&&(Ta=ba.jC),ea=IEa(b,ma.layoutId,ma.jo,c,za,ma.Ro,f,ea,l(r),ia,m.get(ma.jo.externalVideoId),Ta,q),x++,C.push(ea.xk),F=[].concat(g.pa(ea.Vl),g.pa(F)),G=[].concat(g.pa(ea.Lj),g.pa(G)),qa||(Q.push(ia),qa=!0),ma=(ma=ma.jo.adPodSkipTarget)&&0<
ma?ma:-1;else if(za=g.T(ea,XM)){ea=rEa(a,b,c,za,f,x,l,ia,ma);if(ea instanceof tJ){t=ea;break a}ea=ea(r);C.push(ea.xk);F=[].concat(g.pa(ea.Vl),g.pa(F));G=[].concat(g.pa(ea.Lj),g.pa(G));ea.Ng&&(ra=[ea.Ng].concat(g.pa(ra)))}else if(za=g.T(ea,YM)){if(void 0===t){t=new tJ("Composite Survey must already have a Survey Bundle with required metadata.",{instreamSurveyAdRenderer:za});break a}ea=uEa(a,b,c,f,za,X,l,t,x,sN(p,"supports_multi_step_on_desktop"));if(ea instanceof tJ){t=ea;break a}ea=ea(r);C.push(ea.xk);
ea.Ng&&ra.push(ea.Ng);F=[].concat(g.pa(ea.Vl),g.pa(F));G=[].concat(g.pa(ea.Lj),g.pa(G));H=[].concat(g.pa(ea.Ny),g.pa(H));O=[].concat(g.pa(ea.My),g.pa(O));Q=[X].concat(g.pa(Q))}else if(ea=g.T(ea,ZM)){ea=wEa(a,b,c,f,ea,X,l,x);if(ea instanceof tJ){t=ea;break a}ea=ea(r);C.push(ea.xk);ea.Ng&&ra.push(ea.Ng);G=[].concat(g.pa(ea.Lj),g.pa(G))}else{t=new tJ("Unsupported linearAd found in LinearAdSequenceRenderer.");break a}t={fB:C,layoutExitSkipTriggers:F,layoutExitUserInputSubmittedTriggers:H,hd:O,layoutExitMuteTriggers:G,
Ky:Q,Ag:ra}}}else a:if(x=HEa(d,c,p),x instanceof tJ)t=x;else{C=0;F=[];G=[];H=[];O=[];Q=[];X=[];ia=new UI({current:null});qa=new II({current:null});ra=!1;sa=[];ma=-1;v=g.u(d);for(ea=v.next();!ea.done;ea=v.next())if(ea=ea.value,g.T(ea,WM)){ea=sEa(b,c,g.T(ea,WM),l);if(ea instanceof tJ){t=ea;break a}ea=ea(r);F.push(ea.xk);G=[].concat(g.pa(ea.Vl),g.pa(G));H=[].concat(g.pa(ea.Lj),g.pa(H));ea.Ng&&(sa=[ea.Ng].concat(g.pa(sa)))}else if(g.T(ea,VM)){ma=mN(g.T(ea,VM),c,p);if(ma instanceof sJ){t=new tJ(ma);break a}ea=
new iM(C,x);ea=IEa(b,ma.layoutId,ma.jo,c,nN(ma.playerVars,ma.IA,h,n,ea),ma.Ro,f,ea,l(r),qa,m.get(ma.jo.externalVideoId),void 0,q);C++;F.push(ea.xk);G=[].concat(g.pa(ea.Vl),g.pa(G));H=[].concat(g.pa(ea.Lj),g.pa(H));ra||(X.push(qa),ra=!0);ma=(ma=ma.jo.adPodSkipTarget)&&0<ma?ma:-1}else if(g.T(ea,XM)){ea=rEa(a,b,c,g.T(ea,XM),f,C,l,qa,ma);if(ea instanceof tJ){t=ea;break a}ea=ea(r);F.push(ea.xk);G=[].concat(g.pa(ea.Vl),g.pa(G));H=[].concat(g.pa(ea.Lj),g.pa(H));ea.Ng&&(sa=[ea.Ng].concat(g.pa(sa)))}else if(g.T(ea,
YM)){if(void 0===t){t=new tJ("Composite Survey must already have a Survey Bundle with required metadata.",{instreamSurveyAdRenderer:g.T(ea,YM)});break a}ea=uEa(a,b,c,f,g.T(ea,YM),ia,l,t,C,sN(p,"supports_multi_step_on_desktop"));if(ea instanceof tJ){t=ea;break a}ea=ea(r);F.push(ea.xk);ea.Ng&&sa.push(ea.Ng);G=[].concat(g.pa(ea.Vl),g.pa(G));H=[].concat(g.pa(ea.Lj),g.pa(H));O=[].concat(g.pa(ea.Ny),g.pa(O));Q=[].concat(g.pa(ea.My),g.pa(Q));X=[ia].concat(g.pa(X))}else if(g.T(ea,ZM)){ea=wEa(a,b,c,f,g.T(ea,
ZM),ia,l,C);if(ea instanceof tJ){t=ea;break a}ea=ea(r);F.push(ea.xk);ea.Ng&&sa.push(ea.Ng);H=[].concat(g.pa(ea.Lj),g.pa(H))}else{t=new tJ("Unsupported linearAd found in LinearAdSequenceRenderer.");break a}t={fB:F,layoutExitSkipTriggers:G,layoutExitUserInputSubmittedTriggers:O,hd:Q,layoutExitMuteTriggers:H,Ky:X,Ag:sa}}t instanceof tJ?r=t:(Q=r.slotId,x=t.fB,C=t.layoutExitSkipTriggers,F=t.layoutExitMuteTriggers,G=t.layoutExitUserInputSubmittedTriggers,H=t.Ky,r=l(r),O=e?e.layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",
Q=e?e.layoutId:ZJ(b.eb.get(),O,Q),X={layoutId:Q,layoutType:O,bb:"core"},r={layout:{layoutId:Q,layoutType:O,Zb:new Map,layoutExitNormalTriggers:[new sM(b.j,Q)],layoutExitSkipTriggers:C,layoutExitMuteTriggers:F,layoutExitUserInputSubmittedTriggers:G,hd:[],bb:"core",Ca:new uJ([new VI(x)].concat(g.pa(H))),xc:r(X)},Ag:t.Ag});return r}};
HEa=function(a,b,c){var d=[];a=g.u(a);for(var e=a.next();!e.done;e=a.next())if(e=e.value,g.T(e,VM)){e=mN(g.T(e,VM),b,c);if(e instanceof sJ)return new tJ(e);d.push(e.Ro)}return d};
KEa=function(a,b,c,d,e,f,h,l){if(!NCa(c,void 0===l?!1:l))return new tJ("Received invalid InstreamSurveyAdRenderer for VOD single survey.",{InstreamSurveyAdRenderer:c});var m=KDa(c);if(0>=m)return new tJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:c});var n=new UI({current:null}),p=ODa(a,b,c,n,d,f,h);return JEa(a,d,f,m,e,function(q,r){var t=q.slotId,v=LDa(c);q=h(q);var x,C=null!=(x=qN(b,d,c.layoutId,"createMediaBreakLayoutAndAssociatedInPlayerSlotForVodSurvey"))?
x:ZJ(b.eb.get(),"LAYOUT_TYPE_MEDIA_BREAK",t);t={layoutId:C,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",bb:"core"};x=p(C,r);vJ(x.Ca,"metadata_type_fulfilled_layout")||RG("Could not retrieve overlay layout ID during VodMediaBreakLayout for survey creation. This should never happen.");v=[new EI(d),new jJ(m),new lJ(v),n];return{W6:{layoutId:C,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Zb:new Map,layoutExitNormalTriggers:[new sM(b.j,C)],layoutExitSkipTriggers:[new vM(b.j,r.layoutId)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[new CM(b.j,
r.layoutId)],hd:[],bb:"core",Ca:new uJ(v),xc:q(t)},l6:x}})};
LEa=function(a){if(!RCa(a))return!1;var b=g.T(a.adVideoStart,tN);return b?g.T(a.linearAd,VM)&&BCa(b)?!0:(RG("Invalid Sandwich with notify"),!1):!1};
MEa=function(a){if(null==a.linearAds)return!1;a=g.T(a.adStart,tN);return a?BCa(a)?!0:(RG("Invalid LASR with notify"),!1):!1};
NEa=function(a){if(!QCa(a))return!1;a=g.T(a.adStart,tN);return a?BCa(a)?!0:(RG("Invalid LASR with notify"),!1):!1};
uN=function(a,b,c,d,e,f,h,l){this.eb=a;this.Ob=b;this.Ib=c;this.Ha=d;this.jc=e;this.j=f;this.Nj=h;this.loadPolicy=void 0===l?1:l};
XCa=function(a,b,c,d,e,f,h,l,m){var n=[];if(0===b.length&&0===d.length&&0===c.length)return n;b=b.filter(CCa);var p=c.filter(LCa),q=d.filter(CCa),r=new Map,t=yDa(b),v=c.some(function(ea){var za;return"SLOT_TYPE_PLAYER_BYTES"===(null==ea?void 0:null==(za=ea.adSlotMetadata)?void 0:za.slotType)});
c=c.some(function(ea){var za;return"SLOT_TYPE_PLAYER_UNDERLAY"===(null==ea?void 0:null==(za=ea.adSlotMetadata)?void 0:za.slotType)});
if(v||c)c=DDa(p,b,l,e,t,a.jc.get(),a.loadPolicy,r,a.Ha.get(),a.eb.get()),c instanceof tJ?RG(c,void 0,void 0,{contentCpn:e}):n.push.apply(n,g.pa(c));c=g.u(b);for(var x=c.next();!x.done;x=c.next()){x=x.value;var C=OEa(a,r,x,e,f,h,v,l,t,m,p);C instanceof tJ?RG(C,void 0,void 0,{renderer:x.renderer,config:x.config.adPlacementConfig,kind:x.config.adPlacementConfig.kind,contentCpn:e,daiEnabled:h}):n.push.apply(n,g.pa(C))}PEa(a.Ha.get())||(f=QEa(a,q,e,l,t,r),n.push.apply(n,g.pa(f)));if(null===a.j||h&&!l.nV){var F,
G,H;a=l.Fc&&1===b.length&&"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"===(null==(F=b[0].config)?void 0:null==(G=F.adPlacementConfig)?void 0:G.kind)&&(null==(H=b[0].renderer)?void 0:H.adBreakServiceRenderer);if(!n.length&&!a){var O,Q,X,ia;RG("Expected slots parsed from AdPlacementRenderers for DAI",void 0,void 0,{"AdPlacementRenderer count":b.length,contentCpn:e,"first APR kind":null==(O=b[0])?void 0:null==(Q=O.config)?void 0:null==(X=Q.adPlacementConfig)?void 0:X.kind,renderer:null==(ia=b[0])?void 0:ia.renderer})}return n}F=
d.filter(CCa);n.push.apply(n,g.pa(iDa(r,F,a.Ob.get(),a.j,e,v)));if(!n.length){var qa,ra,ma,sa;RG("Expected slots parsed from AdPlacementRenderers",void 0,void 0,{"AdPlacementRenderer count":b.length,contentCpn:e,daiEnabled:h.toString(),"first APR kind":null==(qa=b[0])?void 0:null==(ra=qa.config)?void 0:null==(ma=ra.adPlacementConfig)?void 0:ma.kind,renderer:null==(sa=b[0])?void 0:sa.renderer})}return n};
QEa=function(a,b,c,d,e,f){function h(r){return zJ(a.jc.get(),r)}
var l=[];b=g.u(b);for(var m=b.next();!m.done;m=b.next()){m=m.value;var n=m.renderer,p=n.sandwichedLinearAdRenderer,q=n.linearAdSequenceRenderer;p&&LEa(p)?(RG("Found AdNotify with SandwichedLinearAdRenderer"),q=g.T(p.adVideoStart,tN),p=g.T(p.linearAd,VM),kN(f,n,m.config.adPlacementConfig.kind),n=void 0,q=nDa(null==(n=q)?void 0:n.layout.layoutId,a.Ob.get(),a.Ib.get(),m.config.adPlacementConfig,m.adSlotLoggingData,p,c,d,h,e,a.loadPolicy,a.Ha.get(),a.jc.get()),q instanceof tJ?RG(q):l.push.apply(l,g.pa(q))):
q&&(!q.adLayoutMetadata&&MEa(q)||q.adLayoutMetadata&&NEa(q))&&(RG("Found AdNotify with LinearAdSequenceRenderer"),kN(f,n,m.config.adPlacementConfig.kind),n=void 0,p=xEa(null==(n=g.T(q.adStart,tN))?void 0:n.layout.layoutId,a.Ob.get(),a.Ib.get(),m.config.adPlacementConfig,m.adSlotLoggingData,q.linearAds,EM(q.adLayoutMetadata)?q.adLayoutMetadata:void 0,c,d,h,e,a.loadPolicy,a.Ha.get()),p instanceof tJ?RG(p):l.push.apply(l,g.pa(p)))}return l};
OEa=function(a,b,c,d,e,f,h,l,m,n,p){function q(F){return zJ(a.jc.get(),F)}
var r=c.renderer,t=c.config.adPlacementConfig,v=t.kind,x=c.adSlotLoggingData,C=l.nV&&"AD_PLACEMENT_KIND_START"===v;C=f&&!C;if(null!=r.adsEngagementPanelRenderer)return lN(b,c.elementId,v,r.adsEngagementPanelRenderer.isContentVideoEngagementPanel,r.adsEngagementPanelRenderer.adVideoId,r.adsEngagementPanelRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var Q=a.Ib.get(),X=r.adsEngagementPanelRenderer,ia=zJ(a.jc.get(),F);return vN(Q,F.slotId,"LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON",
new Wxa(X),G,H,X.impressionPings,ia,r.adsEngagementPanelRenderer.adLayoutLoggingData,O)}),[];
if(null!=r.actionCompanionAdRenderer){if(r.actionCompanionAdRenderer.showWithoutLinkedMediaLayout)return eDa(a.Ob.get(),a.j,a.Ib.get(),r.actionCompanionAdRenderer,t,x,d,q);lN(b,c.elementId,v,r.actionCompanionAdRenderer.isContentVideoCompanion,r.actionCompanionAdRenderer.adVideoId,r.actionCompanionAdRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var Q=a.Ib.get(),X=r.actionCompanionAdRenderer,ia=zJ(a.jc.get(),F);return vN(Q,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",
new BI(X),G,H,X.impressionPings,ia,r.actionCompanionAdRenderer.adLayoutLoggingData,O)})}else if(r.imageCompanionAdRenderer)lN(b,c.elementId,v,r.imageCompanionAdRenderer.isContentVideoCompanion,r.imageCompanionAdRenderer.adVideoId,r.imageCompanionAdRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var Q=a.Ib.get(),X=r.imageCompanionAdRenderer,ia=zJ(a.jc.get(),F);
return vN(Q,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_IMAGE",new Yxa(X),G,H,X.impressionPings,ia,r.imageCompanionAdRenderer.adLayoutLoggingData,O)});
else if(r.shoppingCompanionCarouselRenderer)lN(b,c.elementId,v,r.shoppingCompanionCarouselRenderer.isContentVideoCompanion,r.shoppingCompanionCarouselRenderer.adVideoId,r.shoppingCompanionCarouselRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var Q=a.Ib.get(),X=r.shoppingCompanionCarouselRenderer,ia=zJ(a.jc.get(),F);return vN(Q,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_SHOPPING",new Zxa(X),G,H,X.impressionPings,ia,r.shoppingCompanionCarouselRenderer.adLayoutLoggingData,O)});
else if(r.adBreakServiceRenderer){if(!cDa(c))return[];if("AD_PLACEMENT_KIND_PAUSE"===v)return bDa(a.Ob.get(),t,x,c.renderer.adBreakServiceRenderer,d);if("AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"!==v)return aDa(a.Ob.get(),t,x,c.renderer.adBreakServiceRenderer,d,e,f);if(!a.Nj)return new tJ("Received AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED with no CuePointOpportunityAdapter set for interface");l.Fc||RG("Received non-live cue point triggered AdBreakServiceRenderer",void 0,void 0,{kind:v,adPlacementConfig:t,
daiEnabledForContentVideo:String(f),isServedFromLiveInfra:String(l.Fc),clientPlaybackNonce:l.clientPlaybackNonce});REa(a.Nj,{adPlacementRenderer:c,contentCpn:d,Wu:e})}else{if(r.clientForecastingAdRenderer)return iEa(a.Ob.get(),a.Ib.get(),t,x,r.clientForecastingAdRenderer,d,e,q);if(r.invideoOverlayAdRenderer)return oEa(a.Ob.get(),a.Ib.get(),t,x,r.invideoOverlayAdRenderer,d,e,q);if(r.instreamAdPlayerOverlayRenderer)return kEa(a.Ob.get(),a.Ib.get(),t,x,r.instreamAdPlayerOverlayRenderer,d,q);if((r.linearAdSequenceRenderer||
r.instreamVideoAdRenderer)&&C)return bEa(a.Ob.get(),a.Ib.get(),c,d,q,n,!a.Ha.get().J.U().L("html5_override_ad_video_length_killswitch"));if(r.linearAdSequenceRenderer&&!C){if(h)return[];kN(b,r,v);if(r.linearAdSequenceRenderer.adLayoutMetadata){if(!QCa(r.linearAdSequenceRenderer))return new tJ("Received invalid LinearAdSequenceRenderer.")}else if(null==r.linearAdSequenceRenderer.linearAds)return new tJ("Received invalid LinearAdSequenceRenderer.");if(g.T(r.linearAdSequenceRenderer.adStart,tN)){RG("Found AdNotify in LinearAdSequenceRenderer");
b=g.T(r.linearAdSequenceRenderer.adStart,tN);if(!ACa(b))return new tJ("Invalid AdMessageRenderer.");c=r.linearAdSequenceRenderer.linearAds;return yEa(a.eb.get(),a.Ob.get(),a.Ib.get(),a.jc.get(),t,x,b,EM(r.linearAdSequenceRenderer.adLayoutMetadata)?r.linearAdSequenceRenderer.adLayoutMetadata:void 0,c,d,e,l,q,m,a.loadPolicy,a.Ha.get())}return GEa(a.Ob.get(),a.Ib.get(),t,x,r.linearAdSequenceRenderer.linearAds,EM(r.linearAdSequenceRenderer.adLayoutMetadata)?r.linearAdSequenceRenderer.adLayoutMetadata:
void 0,d,e,l,q,m,a.loadPolicy,a.Ha.get(),p)}if(!r.remoteSlotsRenderer||f){if(r.instreamVideoAdRenderer&&!C){if(h)return[];kN(b,r,v);return sDa(a.Ob.get(),a.Ib.get(),t,x,r.instreamVideoAdRenderer,d,e,l,q,m,a.loadPolicy,a.Ha.get(),a.jc.get(),p)}if(r.instreamSurveyAdRenderer)return KEa(a.Ob.get(),a.Ib.get(),r.instreamSurveyAdRenderer,t,x,d,q,sN(a.Ha.get(),"supports_multi_step_on_desktop"));if(null!=r.sandwichedLinearAdRenderer)return RCa(r.sandwichedLinearAdRenderer)?g.T(r.sandwichedLinearAdRenderer.adVideoStart,
tN)?(RG("Found AdNotify in SandwichedLinearAdRenderer"),b=g.T(r.sandwichedLinearAdRenderer.adVideoStart,tN),ACa(b)?(c=g.T(r.sandwichedLinearAdRenderer.linearAd,VM))?oDa(b,c,t,a.eb.get(),a.Ob.get(),a.Ib.get(),a.jc.get(),x,d,e,l,q,m,a.loadPolicy,a.Ha.get()):new tJ("Missing IVAR from Sandwich"):new tJ("Invalid AdMessageRenderer.")):GEa(a.Ob.get(),a.Ib.get(),t,x,[r.sandwichedLinearAdRenderer.adVideoStart,r.sandwichedLinearAdRenderer.linearAd],void 0,d,e,l,q,m,a.loadPolicy,a.Ha.get()):new tJ("Received invalid SandwichedLinearAdRenderer.");
if(null!=r.videoAdTrackingRenderer)return gEa(a.Ob.get(),a.Ib.get(),r.videoAdTrackingRenderer,t,x,d,q)}}return[]};
wN=function(a,b,c,d,e,f,h,l){g.J.call(this);var m=this;this.Tb=a;this.Ob=b;this.Gf=d;this.Ja=e;this.Ha=f;this.Pa=h;this.Rc=l;this.j=null;c.get().addListener(this);g.wb(this,function(){c.isDisposed()||c.get().removeListener(m)});
d.get().addListener(this);g.wb(this,function(){d.isDisposed()||d.get().removeListener(m)})};
REa=function(a,b){if(a.j)RG("Unexpected multiple fetch instructions for the current content");else{a.j=b;b=g.u(a.Gf.get().AK);for(var c=b.next();!c.done;c=b.next())SEa(a,a.j,c.value)}};
SEa=function(a,b,c){var d=a.Ja.get().getCurrentTimeSec(1,!1);a.Ha.get().J.U().Vc()&&a.Pa.get().ri("sdai","onopp.1;evt."+c.event+";start."+c.startSecs.toFixed(3)+";d."+c.Zh.toFixed(3));kK(a.Tb.get(),"OPPORTUNITY_TYPE_LIVE_STREAM_BREAK_SIGNAL",function(){var e=a.Ob.get(),f=b.adPlacementRenderer.renderer.adBreakServiceRenderer,h=b.contentCpn,l=b.adPlacementRenderer.adSlotLoggingData,m=xN(a.Ha.get()),n=a.Pa;if(e.Ha.get().J.U().experiments.ob("enable_smearing_expansion_dai")){var p=g.AJ(e.Ha.get().J.U().experiments,
"max_prefetch_window_sec_for_livestream_optimization");var q=g.AJ(e.Ha.get().J.U().experiments,"min_prefetch_offset_sec_for_livestream_optimization");m={Un:TEa(c),PE:!1,cueProcessedMs:1E3*d};var r=c.startSecs+c.Zh;if(0===d)m.fp=new Vu(0,1E3*r);else{q=c.startSecs-q;var t=q-d;m.fp=0>=t?new Vu(1E3*q,1E3*r):new Vu(1E3*Math.floor(d+Math.random()*Math.min(t,p)),1E3*r)}p=m}else p={Un:TEa(c),PE:!1},r=c.startSecs+c.Zh,c.startSecs<=d?m=new Vu(1E3*(c.startSecs-4),1E3*r):(q=Math.max(0,c.startSecs-d-10),m=new Vu(1E3*
Math.floor(d+Math.random()*(m?0===d?0:Math.min(q,5):q)),1E3*r)),p.fp=m;f=$Ca(e,f,h,p,l,[new hya(c)]);e.Ha.get().J.U().experiments.ob("html5_add_dai_smearing_to_qoe")?(h=n.get(),e=p.fp.start/1E3-d,n=c.startSecs-d,null!=(h=h.J.Fd())&&(h=h.Cc(),h.qoe&&(h=h.qoe,h.provider.X.L("html5_add_dai_smearing_to_qoe")&&(l=1E3*g.yN(h.provider),p=h.j.daism||[],p.push("t."+l.toFixed(0)+";smw."+(1E3*e).toFixed(0)+";smo."+(1E3*n).toFixed(0)),h.j.daism=p)))):n.get().ri("daism","ct."+Date.now()+";cmt."+d+";smw."+(p.fp.start/
1E3-d)+";tw."+(c.startSecs-d)+";cid."+c.identifier.replaceAll(":","_")+";sid."+f.slotId);return[f]})};
zN=function(a){var b,c=null==(b=vJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:b.current;if(!c)return null;b=vJ(a.Ca,"metadata_type_ad_pod_skip_target_callback_ref");var d=a.layoutId,e=vJ(a.Ca,"metadata_type_content_cpn"),f=vJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),h=vJ(a.Ca,"metadata_type_player_overlay_layout_renderer"),l=vJ(a.Ca,"metadata_type_player_underlay_renderer"),m=vJ(a.Ca,"metadata_type_ad_placement_config"),n=vJ(a.Ca,"metadata_type_video_length_seconds");
var p=pJ(a.Ca,"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds")?vJ(a.Ca,"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"):pJ(a.Ca,"metadata_type_layout_enter_ms")&&pJ(a.Ca,"metadata_type_layout_exit_ms")?(vJ(a.Ca,"metadata_type_layout_exit_ms")-vJ(a.Ca,"metadata_type_layout_enter_ms"))/1E3:void 0;return{Xp:d,contentCpn:e,nQ:c,aM:b,instreamAdPlayerOverlayRenderer:f,playerOverlayLayoutRenderer:h,instreamAdPlayerUnderlayRenderer:l,adPlacementConfig:m,videoLengthSeconds:n,LI:p,inPlayerLayoutId:vJ(a.Ca,"metadata_type_linked_in_player_layout_id"),
inPlayerSlotId:vJ(a.Ca,"metadata_type_linked_in_player_slot_id")}};
VEa=function(a,b){return UEa(a,b)};
WEa=function(a,b){b=UEa(a,b);if(!b)return null;var c;b.LI=null==(c=vJ(a.Ca,"metadata_type_ad_pod_info"))?void 0:c.adBreakRemainingLengthSeconds;return b};
UEa=function(a,b){var c,d=null==(c=vJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:c.current;if(!d)return null;pJ(a.Ca,"metadata_ad_video_is_listed")?c=vJ(a.Ca,"metadata_ad_video_is_listed"):b?c=b.isListed:(RG("No layout metadata nor AdPlayback specified for ad video isListed"),c=!1);pJ(a.Ca,"metadata_type_ad_info_ad_metadata")?b=vJ(a.Ca,"metadata_type_ad_info_ad_metadata"):b?b={channelId:b.Fl,channelThumbnailUrl:b.profilePicture,channelTitle:b.author,videoTitle:b.title}:(RG("No layout metadata nor AdPlayback specified for AdMetaData"),
b={channelId:"",channelThumbnailUrl:"",channelTitle:"",videoTitle:""});return{I3:b,adPlacementConfig:vJ(a.Ca,"metadata_type_ad_placement_config"),J3:c,contentCpn:vJ(a.Ca,"metadata_type_content_cpn"),inPlayerLayoutId:vJ(a.Ca,"metadata_type_linked_in_player_layout_id"),inPlayerSlotId:vJ(a.Ca,"metadata_type_linked_in_player_slot_id"),instreamAdPlayerOverlayRenderer:vJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),playerOverlayLayoutRenderer:void 0,instreamAdPlayerUnderlayRenderer:void 0,
LI:void 0,nQ:d,Xp:a.layoutId,videoLengthSeconds:vJ(a.Ca,"metadata_type_video_length_seconds")}};
AN=function(a,b,c,d,e,f,h,l,m){g.J.call(this);this.j=a;this.C=b;this.B=c;this.Tb=d;this.Ob=e;this.Ib=f;this.jc=h;this.Ha=l;this.Ya=m;this.qj=!0};
XEa=function(a,b,c){return wDa(a.Ob.get(),b.contentCpn,b.Xp,function(d){return xDa(a.Ib.get(),d.slotId,c,b.adPlacementConfig,b.Xp,zJ(a.jc.get(),d))})};
BN=function(a,b,c,d,e,f,h,l){g.J.call(this);this.Tb=a;this.De=b;this.j=c;this.Ha=d;this.B=e;this.Ya=f;this.Ja=h;this.Wc=l};
CN=function(a){g.J.call(this);this.j=a};
kK=function(a,b,c,d){a.j().Vi(b,d);c=c();a=a.j();a.uc.j("ADS_CLIENT_EVENT_TYPE_OPPORTUNITY_PROCESSED",b,d,c);b=g.u(c);for(c=b.next();!c.done;c=b.next())a:{d=a;c=c.value;NJ(d.uc,"ADS_CLIENT_EVENT_TYPE_SLOT_RECEIVED",c);NJ(d.uc,"ADS_CLIENT_EVENT_TYPE_SCHEDULE_SLOT_REQUESTED",c);try{var e=d.j;if(g.ic(c.slotId))throw new tJ("Slot ID was empty",void 0,"ADS_CLIENT_ERROR_MESSAGE_INVALID_SLOT");if(FJ(e,c))throw new tJ("Duplicate registration for slot.",{slotId:c.slotId,slotEntryTriggerType:c.slotEntryTrigger.triggerType},
"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");if(!e.Df.wq.has(c.slotType))throw new tJ("No fulfillment adapter factory registered for slot of type: "+c.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_FULFILLMENT_ADAPTER_REGISTERED");if(!e.Df.Ir.has(c.slotType))throw new tJ("No SlotAdapterFactory registered for slot of type: "+c.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");Vya(e,"TRIGGER_CATEGORY_SLOT_ENTRY",c.slotEntryTrigger?[c.slotEntryTrigger]:[]);Vya(e,"TRIGGER_CATEGORY_SLOT_FULFILLMENT",
c.slotFulfillmentTriggers);Vya(e,"TRIGGER_CATEGORY_SLOT_EXPIRATION",c.slotExpirationTriggers);var f=d.j,h=c.slotType+"_"+c.slotPhysicalPosition,l=PJ(f,h);if(FJ(f,c))throw new tJ("Duplicate slots not supported",void 0,"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");l.set(c.slotId,new Qya(c));f.j.set(h,l)}catch(qa){qa instanceof tJ&&qa.Fk?(CJ(d.uc,"ADS_CLIENT_ERROR_TYPE_REGISTER_SLOT_FAILED",qa.Fk,c),RG(qa,c,void 0,void 0,qa.Iu)):(CJ(d.uc,"ADS_CLIENT_ERROR_TYPE_REGISTER_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",
c),RG(qa,c));break a}FJ(d.j,c).K=!0;try{var m=d.j,n=FJ(m,c),p=c.slotEntryTrigger,q=m.Df.Bl.get(p.triggerType);q&&(q.ll("TRIGGER_CATEGORY_SLOT_ENTRY",p,c,null),n.Aa.set(p.triggerId,q));for(var r=g.u(c.slotFulfillmentTriggers),t=r.next();!t.done;t=r.next()){var v=t.value,x=m.Df.Bl.get(v.triggerType);x&&(x.ll("TRIGGER_CATEGORY_SLOT_FULFILLMENT",v,c,null),n.ma.set(v.triggerId,x))}for(var C=g.u(c.slotExpirationTriggers),F=C.next();!F.done;F=C.next()){var G=F.value,H=m.Df.Bl.get(G.triggerType);H&&(H.ll("TRIGGER_CATEGORY_SLOT_EXPIRATION",
G,c,null),n.Y.set(G.triggerId,H))}var O=m.Df.wq.get(c.slotType).get().build(m.C,c);n.N=O;var Q=m.Df.Ir.get(c.slotType).get().build(m.G,c);Q.init();n.B=Q}catch(qa){qa instanceof tJ&&qa.Fk?(CJ(d.uc,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_SLOT_FAILED",qa.Fk,c),RG(qa,c,void 0,void 0,qa.Iu)):(CJ(d.uc,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",c),RG(qa,c));DJ(d,c,!0);break a}NJ(d.uc,"ADS_CLIENT_EVENT_TYPE_SLOT_SCHEDULED",c);d.j.Xi(c);for(var X=g.u(d.Me),ia=X.next();!ia.done;ia=
X.next())ia.value.Xi(c);zya(d,c)}};
DN=function(a,b,c,d){g.J.call(this);var e=this;this.Tb=a;this.Ob=b;this.Bc=c;this.j=new Map;d.get().addListener(this);g.wb(this,function(){d.isDisposed()||d.get().removeListener(e)})};
VCa=function(a,b){var c=0x8000000000000;for(var d=0,e=g.u(b.slotFulfillmentTriggers),f=e.next();!f.done;f=e.next())f=f.value,f instanceof rM?(c=Math.min(c,f.j.start),d=Math.max(d,f.j.end)):RG("Found unexpected fulfillment trigger for throttled slot.",b,null,{fulfillmentTrigger:f});c=new Vu(c,d);d="throttledadcuerange:"+b.slotId;a.j.set(d,b);a.Bc.get().addCueRange(d,c.start,c.end,!1,a)};
EN=function(){g.J.apply(this,arguments);this.qj=!0;this.yl=new Map;this.j=new Map};
YEa=function(a,b){a=g.u(a.yl.values());for(var c=a.next();!c.done;c=a.next())if(c.value.layoutId===b)return!0;return!1};
Mza=function(a,b){a=g.u(a.j.values());for(var c=a.next();!c.done;c=a.next()){c=g.u(c.value);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.layoutId===b)return d}RG("Trying to retrieve an unknown layout",void 0,void 0,{isEmpty:String(g.ic(b)),layoutId:b})};
ZEa=function(a,b){this.callback=a;this.slot=b};
FN=function(){};
$Ea=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c};
aFa=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c;this.B=!1;this.j=0};
bFa=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c};
GN=function(a){this.Ja=a};
HN=function(a){g.J.call(this);this.oL=a;this.ac=new Map};
cFa=function(a,b){for(var c=[],d=g.u(a.ac.values()),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.trigger;f instanceof CM&&f.triggeringLayoutId===b&&c.push(e)}c.length?MJ(a.oL(),c):RG("Survey is submitted but no registered triggers can be activated.")};
IN=function(a,b,c){HN.call(this,a);var d=this;this.Ha=c;b.get().addListener(this);g.wb(this,function(){b.isDisposed()||b.get().removeListener(d)})};
JN=function(a){g.J.call(this);this.j=a;this.qj=!0;this.ac=new Map;this.G=new Set;this.C=new Set;this.D=new Set;this.K=new Set;this.B=new Set};
KN=function(a){g.J.call(this);this.j=a;this.ac=new Map};
LN=function(a,b){for(var c=[],d=g.u(a.ac.values()),e=d.next();!e.done;e=d.next())e=e.value,e.trigger.j===b.layoutId&&c.push(e);c.length&&MJ(a.j(),c)};
MN=function(a,b){g.J.call(this);var c=this;this.j=a;this.ac=new Map;b.get().addListener(this);g.wb(this,function(){b.isDisposed()||b.get().removeListener(c)})};
dFa=function(a,b,c,d){var e=[];a=g.u(a.values());for(var f=a.next();!f.done;f=a.next())if(f=f.value,f.trigger instanceof tM){var h=f.trigger.j===b;h===c?e.push(f):d&&h&&(RG("Firing OnNewPlaybackAfterContentVideoIdTrigger from presumed cached playback CPN match.",void 0,void 0,{cpn:b}),e.push(f))}return e};
eFa=function(a){return a instanceof xCa||a instanceof yCa||a instanceof uM};
NN=function(a,b,c,d){g.J.call(this);var e=this;this.B=a;this.Bc=b;this.Ja=c;this.Ya=d;this.qj=!0;this.ac=new Map;this.j=new Set;c.get().addListener(this);g.wb(this,function(){c.isDisposed()||c.get().removeListener(e)})};
fFa=function(a,b,c,d,e,f,h,l,m,n){if(a.Ya.get().lf(1).clientPlaybackNonce!==m)throw new tJ("Cannot register CueRange-based trigger for different content CPN",{trigger:c});a.ac.set(c.triggerId,{Ou:new DM(b,c,d,e),Zu:f});a.Bc.get().addCueRange(f,h,l,n,a)};
gFa=function(a,b){a=g.u(a.ac.entries());for(var c=a.next();!c.done;c=a.next()){var d=g.u(c.value);c=d.next().value;d=d.next().value;if(b===d.Zu)return c}return""};
ON=function(a,b){g.J.call(this);var c=this;this.D=a;this.B=new Map;this.C=new Map;this.j=null;b.get().addListener(this);g.wb(this,function(){b.isDisposed()||b.get().removeListener(c)});
var d;this.j=(null==(d=b.get().ev)?void 0:d.slotId)||null};
hFa=function(a,b){var c=[];a=g.u(a.values());for(var d=a.next();!d.done;d=a.next())d=d.value,d.slot.slotId===b&&c.push(d);return c};
PN=function(a){g.J.call(this);this.j=a;this.qj=!0;this.ac=new Map};
KK=function(a,b){b=b.layoutId;for(var c=[],d=g.u(a.ac.values()),e=d.next();!e.done;e=d.next())if(e=e.value,e.trigger instanceof sM){var f;if(f=e.trigger.layoutId===b)f=(f=Iya.get(e.category))?"normal"===f:!1;f&&c.push(e)}c.length&&MJ(a.j(),c)};
QN=function(a){g.J.call(this);this.j=a;this.qj=!0;this.ac=new Map};
RN=function(a){g.J.call(this);this.C=a;this.qj=!0;this.ac=new Map;this.j=new Map;this.B=new Map};
iFa=function(a,b){var c=[];if(b=a.j.get(b.layoutId)){b=g.u(b);for(var d=b.next();!d.done;d=b.next())(d=a.B.get(d.value.triggerId))&&c.push(d)}return c};
SN=function(a){g.J.call(this);this.j=a;this.ac=new Map};
jFa=function(a,b){for(var c=[],d=g.u(a.ac.values()),e=d.next();!e.done;e=d.next())e=e.value,e.trigger instanceof hM&&e.trigger.slotId===b&&c.push(e);1<=c.length&&MJ(a.j(),c)};
kFa=function(a,b){var c={slotId:lK(b,"SLOT_TYPE_IN_PLAYER"),slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:void 0,slotFulfillmentTriggers:[],slotExpirationTriggers:[],bb:"surface",Ca:new uJ([])},d=Object,e=d.assign;b=ZJ(b,"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",c.slotId);b={layoutId:b,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",Zb:new Map,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"surface",Ca:new uJ([]),
xc:vya(!1,c.slotId,c.slotType,c.slotPhysicalPosition,c.bb,c.slotEntryTrigger,c.slotFulfillmentTriggers,c.slotExpirationTriggers,b,"LAYOUT_TYPE_TEXT_BANNER_OVERLAY","surface")};return e.call(d,{},a,{r6:!0,slot:c,layout:b})};
ZCa=function(a,b,c,d){var e=a.kind;d=d?!1:!a.hideCueRangeMarker;switch(e){case "AD_PLACEMENT_KIND_START":return d={Un:new Vu(-0x8000000000000,-0x8000000000000),PE:d},null!=c&&(d.fp=new Vu(-0x8000000000000,-0x8000000000000)),d;case "AD_PLACEMENT_KIND_END":return d={Un:new Vu(0x7ffffffffffff,0x8000000000000),PE:d},null!=c&&(d.fp=new Vu(Math.max(0,b-c),0x8000000000000)),d;case "AD_PLACEMENT_KIND_MILLISECONDS":e=a.adTimeOffset;e.offsetStartMilliseconds||RG("AD_PLACEMENT_KIND_MILLISECONDS missing start milliseconds.");
e.offsetEndMilliseconds||RG("AD_PLACEMENT_KIND_MILLISECONDS missing end milliseconds.");a=Number(e.offsetStartMilliseconds);e=Number(e.offsetEndMilliseconds);-1===e&&(e=b);if(Number.isNaN(a)||Number.isNaN(e)||a>e)return new tJ("AD_PLACEMENT_KIND_MILLISECONDS endMs needs to be >= startMs.",{offsetStartMs:a,offsetEndMs:e},"ADS_CLIENT_ERROR_MESSAGE_AD_PLACEMENT_END_SHOULD_GREATER_THAN_START",e===b&&a-500<=e);d={Un:new Vu(a,e),PE:d};if(null!=c){a=Math.max(0,a-c);if(a===e)return d;d.fp=new Vu(a,e)}return d;
default:return new tJ("AdPlacementKind not supported in convertToRange.",{kind:e,adPlacementConfig:a})}};
TEa=function(a){var b=1E3*a.startSecs;return new Vu(b,b+1E3*a.Zh)};
TN=function(){this.B=new Map;this.j=new Map;this.C=new Map};
lK=function(a,b){if(g.JB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.B.get(b)||0;c++;a.B.set(b,c);return b+"_"+c}return g.WE(16)};
ZJ=function(a,b,c){if(g.JB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var d=a.j.get(b)||0;d++;a.j.set(b,d);return c+"_"+b+"_"+d}return g.WE(16)};
pN=function(a,b){if(g.JB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.C.get(b)||0;c++;a.C.set(b,c);return b+"_"+c}return g.WE(16)};
lFa=function(a){var b=[new QI(a.Xp),new gya(a.nQ),new EI(a.adPlacementConfig),new WI(a.videoLengthSeconds),new iJ(a.LI)];a.instreamAdPlayerOverlayRenderer&&b.push(new LI(a.instreamAdPlayerOverlayRenderer));a.playerOverlayLayoutRenderer&&b.push(new MI(a.playerOverlayLayoutRenderer));a.aM&&b.push(new II(a.aM));return b};
mFa=function(a,b,c,d,e,f){a=c.inPlayerLayoutId?c.inPlayerLayoutId:ZJ(f,"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",a);var h,l,m=c.instreamAdPlayerOverlayRenderer?null==(h=c.instreamAdPlayerOverlayRenderer)?void 0:h.adLayoutLoggingData:null==(l=c.playerOverlayLayoutRenderer)?void 0:l.adLayoutLoggingData;h={layoutId:a,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",bb:b};return{layoutId:a,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Zb:new Map,layoutExitNormalTriggers:[new pM(function(n){return pN(f,
n)},c.Xp)],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:b,Ca:d,xc:e(h),adLayoutLoggingData:m}};
UN=function(a,b){var c=this;this.eb=a;this.Ha=b;this.j=function(d){return pN(c.eb.get(),d)}};
xDa=function(a,b,c,d,e,f){c=new uJ([new NI(c),new EI(d)]);b=ZJ(a.eb.get(),"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",b);d={layoutId:b,layoutType:"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",bb:"core"};return{layoutId:b,layoutType:"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",Zb:new Map,layoutExitNormalTriggers:[new pM(function(h){return pN(a.eb.get(),h)},e)],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:c,xc:f(d),adLayoutLoggingData:void 0}};
oN=function(a,b,c,d,e){var f=lFa(d);return mFa(b,c,d,new uJ(f),e,a.eb.get())};
nFa=function(a,b,c,d,e){var f=lFa(d);f.push(new $xa(d.I3));f.push(new aya(d.J3));return mFa(b,c,d,new uJ(f),e,a.eb.get())};
vN=function(a,b,c,d,e,f,h,l,m,n){b=ZJ(a.eb.get(),c,b);var p={layoutId:b,layoutType:c,bb:"core"},q=new Map;h&&q.set("impression",h);h=[new uCa(a.j,e)];n&&h.push(new oM(a.j,n,["normal"]));return{layoutId:b,layoutType:c,Zb:q,layoutExitNormalTriggers:h,layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([d,new EI(f),new QI(e)]),xc:l(p),adLayoutLoggingData:m}};
nEa=function(a,b,c){var d=[];d.push(new vCa(a.j,c));b&&d.push(b);return d};
mEa=function(a,b,c,d,e,f,h){var l={layoutId:b,layoutType:c,bb:"core"};return{layoutId:b,layoutType:c,Zb:new Map,layoutExitNormalTriggers:h,layoutExitSkipTriggers:[new kM(a.j,b)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new Xxa(d),new EI(e)]),xc:f(l),adLayoutLoggingData:d.adLayoutLoggingData}};
NDa=function(a,b,c,d,e,f,h,l){var m={layoutId:b,layoutType:f,bb:"core"};return{layoutId:b,layoutType:f,Zb:new Map,layoutExitNormalTriggers:[new pM(a.j,c)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new EI(d)].concat(g.pa(h))),xc:e(m),adLayoutLoggingData:l}};
qN=function(a,b,c,d){if(a.Ha.get().sf("AD_PLACEMENT_KIND_START"===b.kind))if(void 0===c)RG("Expected SSAP layout ID in renderer",void 0,void 0,{caller:d});else return c};
pEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){a=vEa(a,b,c,e,f,h,l,m,q,qN(a,c,d.layoutId,"createSubLayoutVodSkippableMediaBreakLayoutForEndcap"),r);b=a.Ky;c=new RI(a.vJ);d=a.layoutExitSkipTriggers;0<n&&(b.push(c),b.push(new HI(n)),d=[]);b.push(new GI(p));return{xk:{layoutId:a.layoutId,layoutType:a.layoutType,Zb:a.Zb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:a.bb,Ca:new uJ(b),xc:a.xc,adLayoutLoggingData:a.adLayoutLoggingData},
Vl:d,Lj:a.layoutExitMuteTriggers,Ny:a.layoutExitUserInputSubmittedTriggers,My:a.hd,Ng:a.Ng}};
tEa=function(a,b,c,d,e,f,h,l,m,n){b=vEa(a,b,c,d,f,new Map,h,function(p){return l(p,m)},void 0,qN(a,c,e.layoutId,"createSubLayoutVodSkippableMediaBreakLayoutForVodSurvey"));
a=new CM(a.j,b.vJ);c=new RI(b.vJ);n=new GI(n);return{xk:{layoutId:b.layoutId,layoutType:b.layoutType,Zb:b.Zb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:b.bb,Ca:new uJ([].concat(g.pa(b.Ky),[c,n])),xc:b.xc,adLayoutLoggingData:b.adLayoutLoggingData},Vl:b.layoutExitSkipTriggers,Lj:b.layoutExitMuteTriggers,Ny:[].concat(g.pa(b.layoutExitUserInputSubmittedTriggers),[a]),My:b.hd,Ng:b.Ng}};
vEa=function(a,b,c,d,e,f,h,l,m,n,p){b=null!=n?n:ZJ(a.eb.get(),"LAYOUT_TYPE_MEDIA_BREAK",b);n={layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",bb:"adapter"};l=l(b);var q=vJ(l.Ca,"metadata_type_fulfilled_layout");q||RG("Could not retrieve overlay layout ID during VodSkippableMediaBreakLayout creation. This should never happen.");q=q?q.layoutId:"";c=[new EI(c),new jJ(d),new lJ(e)];p&&c.push(new bJ(p));return{layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Zb:f,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[new vM(a.j,
q)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"adapter",Ky:c,xc:h(n),adLayoutLoggingData:m,Ng:l,vJ:q}};
tDa=function(a,b,c,d,e,f,h,l,m,n,p){a=oFa(a,b,"core",c,d,e,f,h,l,m,n,void 0,p);return{layoutId:a.layoutId,layoutType:a.layoutType,Zb:a.Zb,layoutExitNormalTriggers:a.layoutExitNormalTriggers,layoutExitSkipTriggers:a.layoutExitSkipTriggers,layoutExitMuteTriggers:a.layoutExitMuteTriggers,layoutExitUserInputSubmittedTriggers:a.layoutExitUserInputSubmittedTriggers,hd:a.hd,bb:a.bb,Ca:new uJ(a.dV),xc:a.xc,adLayoutLoggingData:a.adLayoutLoggingData}};
IEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){b=oFa(a,b,"adapter",c,d,e,f,h,l,m,p,q,r);d=b.layoutExitSkipTriggers;e=b.dV;c.adPodSkipTarget&&0<c.adPodSkipTarget&&(e.push(n),e.push(new HI(c.adPodSkipTarget)),d=[]);e.push(new GI(l.j));c.isCritical&&(d=[new oM(a.j,b.layoutId,["error"])].concat(g.pa(d)));return{xk:{layoutId:b.layoutId,layoutType:b.layoutType,Zb:b.Zb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:b.bb,Ca:new uJ(e),
xc:b.xc,adLayoutLoggingData:b.adLayoutLoggingData},Vl:d,Lj:b.layoutExitMuteTriggers,Ny:b.layoutExitUserInputSubmittedTriggers,My:b.hd}};
oFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){var t={layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA",bb:c};e=[new EI(e),new FI(m),new JI(d.externalVideoId),new KI(l),new lJ({impressionCommands:d.impressionCommands,abandonCommands:d.onAbandonCommands,completeCommands:d.completeCommands}),new XI(f),new TI({current:null}),new WI(h)];(f=d.playerOverlay.instreamAdPlayerOverlayRenderer)&&e.push(new LI(f));(h=d.playerOverlay.playerOverlayLayoutRenderer)&&e.push(new MI(h));q&&e.push(new YI(q));(q=d.playerUnderlay)&&
e.push(new NI(q));l=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");q=(q=f?f.elementId:null==h?void 0:h.layoutId)?q:ZJ(a.eb.get(),"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",l);e.push(new RI(q));e.push(new SI(l));e.push(new bJ(m.j));d.adNextParams&&e.push(new CI(d.adNextParams));d.shrunkenPlayerBytesConfig&&e.push(new bya(d.shrunkenPlayerBytesConfig));d.clickthroughEndpoint&&e.push(new DI(d.clickthroughEndpoint));d.legacyInfoCardVastExtension&&e.push(new kJ(d.legacyInfoCardVastExtension));d.sodarExtensionData&&
e.push(new ZI(d.sodarExtensionData));p&&e.push(new hJ(p));e.push(new nJ(Hza(d.pings)));m=sK(d.pings);if(r){a:{r=g.u(r);for(p=r.next();!p.done;p=r.next())if(p=p.value,"SLOT_TYPE_PLAYER_UNDERLAY"===p.adSlotMetadata.slotType&&(f=g.T(p.fulfillmentContent.fulfilledLayout,bN))&&(f=g.T(f.renderingContent,aN))&&f.associatedPlayerBytesLayoutId===b){r=p;break a}r=void 0}r&&e.push(new OI(r))}return{layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA",Zb:m,layoutExitNormalTriggers:[new sM(a.j,b)],layoutExitSkipTriggers:d.skipOffsetMilliseconds?
[new vM(a.j,q)]:[],layoutExitMuteTriggers:[new vM(a.j,q)],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:c,dV:e,xc:n(t),adLayoutLoggingData:d.adLayoutLoggingData}};
dEa=function(a,b,c,d,e,f,h,l,m){d.every(function(p){return qJ(p,[],["LAYOUT_TYPE_MEDIA"])})||RG("Unexpect subLayout type for DAI composite layout");
b=ZJ(a.eb.get(),"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",b);var n={layoutId:b,layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",bb:"core"};return{layoutId:b,layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",Zb:new Map,layoutExitNormalTriggers:[new qCa(a.j)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],hd:[],bb:"core",Ca:new uJ([new $I(c),new aJ(l),new VI(d),new EI(e),new eJ(f),new cJ({}),new mya(m)]),xc:h(n)}};
ZDa=function(a){return null!=a};
VN=function(a,b,c){var d=this;this.eb=a;this.Ib=b;this.Ha=c;this.j=function(e){return pN(d.eb.get(),e)}};
$Ca=function(a,b,c,d,e,f){f=void 0===f?[]:f;var h=lK(a.eb.get(),"SLOT_TYPE_AD_BREAK_REQUEST"),l=[];d.fp&&d.fp.start!==d.Un.start&&l.push(new rM(a.j,c,new Vu(d.fp.start,d.Un.start),!1));l.push(new rM(a.j,c,new Vu(d.Un.start,d.Un.end),d.PE));d={getAdBreakUrl:b.getAdBreakUrl,GQ:d.Un.start,FQ:d.Un.end,cueProcessedMs:d.cueProcessedMs};b=new zM(a.j,h);f=[new gJ(d)].concat(g.pa(f));return{slotId:h,slotType:"SLOT_TYPE_AD_BREAK_REQUEST",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:l,slotExpirationTriggers:[new tM(a.j,
c),new xM(a.j,h),new yM(a.j,h)],bb:"core",Ca:new uJ(f),adSlotLoggingData:e}};
qFa=function(a,b,c){var d=[];c=g.u(c);for(var e=c.next();!e.done;e=c.next())d.push(pFa(a,b,e.value));return d};
pFa=function(a,b,c){return null!=c.triggeringSlotId&&c.triggeringSlotId===a?c.clone(b):c};
MDa=function(a,b,c,d,e){return rFa(a,b,c,d,e)};
qEa=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");return rFa(a,e,b,c,d)};
rFa=function(a,b,c,d,e){var f=new nM(a.j,c),h=[new wM(a.j,b)];a=[new xM(a.j,b),new tM(a.j,d)];return{slotId:b,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(e({slotId:b,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a},c))]),adSlotLoggingData:void 0}};
JEa=function(a,b,c,d,e,f){var h=lK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),l=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=ZJ(a.eb.get(),"LAYOUT_TYPE_SURVEY",l);d=WN(a,b,c,d);var n=[new wM(a.j,h)];c=[new xM(a.j,h),new tM(a.j,c),new kM(a.j,m)];if(d instanceof tJ)return d;l=f({slotId:h,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:d,slotFulfillmentTriggers:n,slotExpirationTriggers:c},{slotId:l,layoutId:m});f=l.W6;l=l.l6;return[{slotId:h,slotType:"SLOT_TYPE_PLAYER_BYTES",
slotPhysicalPosition:1,slotEntryTrigger:EEa(a,b,h,d),slotFulfillmentTriggers:FEa(a,b,h,n),slotExpirationTriggers:c,bb:"core",Ca:new uJ([new fJ(f),new oJ(rN(b))]),adSlotLoggingData:e},l]};
rN=function(a){return"AD_PLACEMENT_KIND_START"===a.kind};
uDa=function(a,b,c,d,e){e=e?e:lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new nM(a.j,c);var f=[new wM(a.j,e)];a=[new tM(a.j,b),new xM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(d({slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))])}};
wDa=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_PLAYER_UNDERLAY");c=new nM(a.j,c);var f=[new wM(a.j,e)];a=[new tM(a.j,b),new xM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_PLAYER_UNDERLAY",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(d({slotId:e,slotType:"SLOT_TYPE_PLAYER_UNDERLAY",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))])}};
mDa=function(a,b,c,d,e,f,h){var l=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=ZJ(a.eb.get(),"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",l);d=sFa(a,d,f,h,m);if(d instanceof tJ)return d;h=[new wM(a.j,l)];e=[new tM(a.j,f),new wM(a.j,e),new BM(a.j,e)];c=zJ(c,{slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:d,slotFulfillmentTriggers:h,slotExpirationTriggers:e});a=a.Ib.get();f={layoutId:m,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",bb:"core"};b={layoutId:m,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",
Zb:new Map,layoutExitNormalTriggers:[new xCa(a.j,m,b.durationMs)],layoutExitSkipTriggers:[new yCa(a.j,m,b.durationMs)],hd:[new uM(a.j,m)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],bb:"core",Ca:new uJ([new kya(b)]),xc:c(f)};return{slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:d,slotFulfillmentTriggers:h,slotExpirationTriggers:e,Ca:new uJ([new fJ(b)])}};
lEa=function(a,b,c,d,e,f){b=WN(a,b,c,d);if(b instanceof tJ)return b;var h=b instanceof rM?new tCa(a.j,c,b.j):null;d=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");var l=[new wM(a.j,d)];a=[new tM(a.j,c),new xM(a.j,d)];f=f({slotId:d,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:b,slotFulfillmentTriggers:l,slotExpirationTriggers:a},h);return f instanceof sJ?new tJ(f):{slotId:d,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:l,
slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(f)]),adSlotLoggingData:e}};
jEa=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),f=new jM(a.j,b),h=[new AM(a.j,e)];a=[new tM(a.j,b),new xM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(d({slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a}))]),adSlotLoggingData:c}};
TDa=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new nM(a.j,c);var f=[new wM(a.j,e)],h=[new xM(a.j,e),new tM(a.j,b)];f={slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:h};return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:[new wM(a.j,e)],slotExpirationTriggers:[new tM(a.j,b),new xM(a.j,e)],bb:"core",Ca:new uJ([new fJ(d(f))])}};
QDa=function(a,b,c,d,e){var f=lK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new mM(a.j,d,c);d=[new wM(a.j,f)];a=[new tM(a.j,b)];return{slotId:f,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:d,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(e({slotId:f,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:c,slotFulfillmentTriggers:d,slotExpirationTriggers:a}))])}};
hDa=function(a,b,c,d,e,f){var h=lK(a.eb.get(),b);return tFa(a,h,b,new nM(a.j,d),[new tM(a.j,c),new xM(a.j,h),new oM(a.j,d,["error"])],e,f)};
gDa=function(a,b,c,d,e,f,h){var l=lK(a.eb.get(),b);return tFa(a,l,b,new oM(a.j,e,["normal"]),[new tM(a.j,c),new xM(a.j,l),new oM(a.j,d,["error"])],f,h)};
dDa=function(a,b,c,d,e){var f=lK(a.eb.get(),b);return tFa(a,f,b,new jM(a.j,c),[new tM(a.j,c),new xM(a.j,f)],d,e)};
fEa=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_PLAYBACK_TRACKING");b=new jM(a.j,b);var f=[new wM(a.j,e)];a=[new xM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_PLAYBACK_TRACKING",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:f,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(d({slotId:e,slotType:"SLOT_TYPE_PLAYBACK_TRACKING",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:b,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))]),adSlotLoggingData:c}};
$Da=function(a,b,c,d){var e=lK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),f=new rCa(a.j),h=[new AM(a.j,e)];b=[new tM(a.j,b)];var l={slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b};a=a.Ha.get();return!g.LJ(a.J.U())&&a.J.U().experiments.ob("enable_pacf_slot_asde_player_byte_h5")||g.LJ(a.J.U())&&a.J.U().experiments.ob("enable_pacf_slot_asde_player_byte_h5_TV")?{slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,
slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b,bb:"core",Ca:new uJ([new fJ(d(l)),new cJ({})]),adSlotLoggingData:c}:{slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b,bb:"core",Ca:new uJ([new fJ(d(l)),new cJ({})])}};
BEa=function(a,b){return PEa(a.Ha.get())?new oM(a.j,b,["normal","error","skipped"]):new oM(a.j,b,["normal"])};
qDa=function(a,b,c,d,e){b=BEa(a,b);a=CEa(a,b,c);e=e({slotId:a.slotId,slotType:a.slotType,slotPhysicalPosition:a.slotPhysicalPosition,slotEntryTrigger:a.slotEntryTrigger,slotFulfillmentTriggers:a.slotFulfillmentTriggers,slotExpirationTriggers:a.slotExpirationTriggers,bb:a.bb});return e instanceof tJ?e:{Ew:Object.assign({},a,{Ca:new uJ([new fJ(e.layout)]),adSlotLoggingData:d}),Ag:e.Ag}};
rDa=function(a,b,c,d,e,f,h){c=DEa(a,b,c,d);if(c instanceof tJ)return c;h=h({slotId:c.slotId,slotType:c.slotType,slotPhysicalPosition:c.slotPhysicalPosition,slotEntryTrigger:c.slotEntryTrigger,slotFulfillmentTriggers:c.slotFulfillmentTriggers,slotExpirationTriggers:c.slotExpirationTriggers,bb:c.bb});if(h instanceof tJ)return h;d=[new oJ(rN(b)),new fJ(h.layout)];f&&d.push(new mJ({}));return{Ew:{slotId:c.slotId,slotType:c.slotType,slotPhysicalPosition:c.slotPhysicalPosition,slotEntryTrigger:EEa(a,b,
c.slotId,c.slotEntryTrigger),slotFulfillmentTriggers:FEa(a,b,c.slotId,c.slotFulfillmentTriggers),slotExpirationTriggers:c.slotExpirationTriggers,bb:c.bb,Ca:new uJ(d),adSlotLoggingData:e},Ag:h.Ag}};
EEa=function(a,b,c,d){return a.Ha.get().sf(rN(b))?new hM(a.j,c):d};
FEa=function(a,b,c,d){return a.Ha.get().sf(rN(b))?[new AM(a.j,c)]:d};
CEa=function(a,b,c){var d=lK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),e=[new wM(a.j,d)];a=[new xM(a.j,d),new tM(a.j,c)];return{slotId:d,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:e,slotExpirationTriggers:a,bb:"core"}};
DEa=function(a,b,c,d){b=WN(a,b,c,d);return b instanceof tJ?b:CEa(a,b,c)};
hEa=function(a,b,c,d,e,f){var h=lK(a.eb.get(),"SLOT_TYPE_FORECASTING");b=WN(a,b,c,d);if(b instanceof tJ)return b;d=[new wM(a.j,h)];a=[new xM(a.j,h),new tM(a.j,c)];return{slotId:h,slotType:"SLOT_TYPE_FORECASTING",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:d,slotExpirationTriggers:a,bb:"core",Ca:new uJ([new fJ(f({slotId:h,slotType:"SLOT_TYPE_FORECASTING",slotPhysicalPosition:1,bb:"core",slotEntryTrigger:b,slotFulfillmentTriggers:d,slotExpirationTriggers:a}))]),adSlotLoggingData:e}};
uFa=function(a,b,c,d,e){var f=!b.hideCueRangeMarker;switch(b.kind){case "AD_PLACEMENT_KIND_START":return new jM(a.j,c);case "AD_PLACEMENT_KIND_MILLISECONDS":return a=ZCa(b,d),a instanceof tJ?a:e(a.Un,f);case "AD_PLACEMENT_KIND_END":return new lM(a.j,c,f);default:return new tJ("Cannot construct entry trigger",{kind:b.kind})}};
sFa=function(a,b,c,d,e){return uFa(a,b,c,d,function(f,h){return new qM(a.j,c,f,h,e)})};
WN=function(a,b,c,d){return uFa(a,b,c,d,function(e,f){return new rM(a.j,c,e,f)})};
tFa=function(a,b,c,d,e,f,h){a=[new AM(a.j,b)];return{slotId:b,slotType:c,slotPhysicalPosition:1,slotEntryTrigger:d,slotFulfillmentTriggers:a,slotExpirationTriggers:e,bb:"core",Ca:new uJ([new fJ(h({slotId:b,slotType:c,slotPhysicalPosition:1,bb:"core",slotEntryTrigger:d,slotFulfillmentTriggers:a,slotExpirationTriggers:e}))]),adSlotLoggingData:f}};
XN=function(a,b){g.J.call(this);this.Ha=a;this.B=b;this.eventCount=0};
NJ=function(a,b,c){a.j(b,void 0,void 0,void 0,c,void 0,void 0,c.adSlotLoggingData)};
GJ=function(a,b,c,d){a.j(b,void 0,void 0,void 0,c,d?d:void 0,void 0,c.adSlotLoggingData,d?d.adLayoutLoggingData:void 0)};
Hya=function(a,b,c,d){wya(a.B.get())&&a.j("ADS_CLIENT_EVENT_TYPE_TRIGGER_ACTIVATED",void 0,void 0,void 0,b,d?d:void 0,c,b.adSlotLoggingData,d?d.adLayoutLoggingData:void 0)};
CJ=function(a,b,c,d,e){a.j("ADS_CLIENT_EVENT_TYPE_ERROR",void 0,void 0,void 0,d,e,void 0,d.adSlotLoggingData,e?e.adLayoutLoggingData:void 0,{errorType:b,errorMessage:c})};
vFa=function(a,b,c,d,e,f,h,l,m,n,p){if(!a.Ha.get().J.U().L("html5_disable_client_tmp_logs")&&("ADS_CLIENT_EVENT_TYPE_ERROR"!==b||a.qR())&&"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED"!==b){b||RG("Empty PACF event type",f,h);var q=wya(a.B.get());b={eventType:b,eventOrder:++a.eventCount};var r={};f&&(r.slotData=sya(q,f));h&&(r.layoutData=tya(q,h));l&&(r.triggerData=yJ(l.trigger,l.category));c&&(r.opportunityData=uya(q,c,d,e));c={organicPlaybackContext:{contentCpn:a.Ya.get().lf(1).clientPlaybackNonce}};c.organicPlaybackContext.isLivePlayback=
a.Ya.get().lf(1).Fc;var t;c.organicPlaybackContext.isMdxPlayback=null==(t=a.Ya.get().lf(1))?void 0:t.isMdxPlayback;var v;if(null==(v=a.Ya.get().lf(1))?0:v.daiEnabled)c.organicPlaybackContext.isDaiContent=!0;var x;if(a=null==(x=a.Ya.get().lf(2))?void 0:x.clientPlaybackNonce)c.adVideoPlaybackContext={adVideoCpn:a};c&&(r.externalContext=c);b.adClientData=r;m&&(b.serializedSlotAdServingData=m.serializedSlotAdServingDataEntry);n&&(b.serializedAdServingData=n.serializedAdServingDataEntry);p&&(b.errorInfo=
p);g.rD("adsClientStateChange",{adsClientEvent:b})}};
YN=function(a,b,c){XN.call(this,a,b);this.Ha=a;this.Ya=c};
ZN=function(){this.j=new Map};
$N=function(a){return window.Int32Array?new Int32Array(a):Array(a)};
fO=function(a){g.J.call(this);this.counter=[0,0,0,0];this.B=new Uint8Array(16);this.j=16;if(!wFa){var b,c=new Uint8Array(256),d=new Uint8Array(256);var e=1;for(b=0;256>b;b++)c[e]=b,d[b]=e,e^=e<<1^(e>>7&&283);aO=new Uint8Array(256);bO=$N(256);cO=$N(256);dO=$N(256);eO=$N(256);for(var f=0;256>f;f++){e=f?d[255^c[f]]:0;e^=e<<1^e<<2^e<<3^e<<4;e=e&255^e>>>8^99;aO[f]=e;b=e<<1^(e>>7&&283);var h=b^e;bO[f]=b<<24|e<<16|e<<8|h;cO[f]=h<<24|bO[f]>>>8;dO[f]=e<<24|cO[f]>>>8;eO[f]=e<<24|dO[f]>>>8}wFa=!0}e=$N(44);for(c=
0;4>c;c++)e[c]=a[4*c]<<24|a[4*c+1]<<16|a[4*c+2]<<8|a[4*c+3];for(d=1;44>c;c++)a=e[c-1],c%4||(a=(aO[a>>16&255]^d)<<24|aO[a>>8&255]<<16|aO[a&255]<<8|aO[a>>>24],d=d<<1^(d>>7&&283)),e[c]=e[c-4]^a;this.key=e};
xFa=function(a){for(var b=a.key,c=a.counter[0]^b[0],d=a.counter[1]^b[1],e=a.counter[2]^b[2],f=a.counter[3]^b[3],h=3;0<=h&&!(a.counter[h]=-~a.counter[h]);h--);for(var l,m,n=4;40>n;)h=bO[c>>>24]^cO[d>>16&255]^dO[e>>8&255]^eO[f&255]^b[n++],l=bO[d>>>24]^cO[e>>16&255]^dO[f>>8&255]^eO[c&255]^b[n++],m=bO[e>>>24]^cO[f>>16&255]^dO[c>>8&255]^eO[d&255]^b[n++],f=bO[f>>>24]^cO[c>>16&255]^dO[d>>8&255]^eO[e&255]^b[n++],c=h,d=l,e=m;a=a.B;h=b[40];a[0]=aO[c>>>24]^h>>>24;a[1]=aO[d>>16&255]^h>>16&255;a[2]=aO[e>>8&255]^
h>>8&255;a[3]=aO[f&255]^h&255;h=b[41];a[4]=aO[d>>>24]^h>>>24;a[5]=aO[e>>16&255]^h>>16&255;a[6]=aO[f>>8&255]^h>>8&255;a[7]=aO[c&255]^h&255;h=b[42];a[8]=aO[e>>>24]^h>>>24;a[9]=aO[f>>16&255]^h>>16&255;a[10]=aO[c>>8&255]^h>>8&255;a[11]=aO[d&255]^h&255;h=b[43];a[12]=aO[f>>>24]^h>>>24;a[13]=aO[c>>16&255]^h>>16&255;a[14]=aO[d>>8&255]^h>>8&255;a[15]=aO[e&255]^h&255};
hO=function(){if(!yFa&&!g.WD){if(gO)return gO;var a;gO=null==(a=window.crypto)?void 0:a.subtle;var b,c,d;if((null==(b=gO)?0:b.importKey)&&(null==(c=gO)?0:c.sign)&&(null==(d=gO)?0:d.encrypt))return gO;gO=void 0}};
zFa=function(){this.C=this.j=0;this.B=Array.from({length:iO.length}).fill(0)};
AFa=function(){};
BFa=function(a){this.name=a;this.startTimeMs=(0,g.GD)();this.j=!1};
CFa=function(){this.j=new AFa};
EFa=function(a,b,c,d){if(b&&"object"===typeof b&&"then"in b&&"function"===typeof b.then){var e=function(f){DFa(a,c,(0,g.GD)()-d);return f};
return b.then(e,e)}DFa(a,c,(0,g.GD)()-d);return b};
DFa=function(a,b,c,d){d=void 0===d?1:d;0<=c&&(b in a.j||(a.j[b]=new zFa),a.j[b].Bi(c,d))};
FFa=function(){};
GFa=function(a){if(!jO.isActive())return a.exports.AES128CTRCipher_encrypt.bind(a.exports);var b=a.j?"oals":"oalw";return function(c,d,e){jO.ym(b,function(){a.exports.AES128CTRCipher_encrypt(c,d,e)})}};
kO=function(a,b){g.J.call(this);var c=this;this.j=a;this.B=GFa(this.j);this.cipher=this.j.exports.AES128CTRCipher_create(b.byteOffset);g.wb(this,function(){c.j.exports.AES128CTRCipher_release(c.cipher)})};
g.lO=function(a){this.D=a};
g.mO=function(a){g.J.call(this);this.B=a};
nO=function(a,b){g.J.call(this);this.j=a;this.D=b};
HFa=function(a){this.G=new Uint8Array(64);this.C=new Uint8Array(64);this.D=0;this.K=new Uint8Array(64);this.B=0;this.G.set(a);this.C.set(a);for(a=0;64>a;a++)this.G[a]^=92,this.C[a]^=54;this.reset()};
IFa=function(a,b,c){for(var d=a.N,e=a.j[0],f=a.j[1],h=a.j[2],l=a.j[3],m=a.j[4],n=a.j[5],p=a.j[6],q=a.j[7],r,t,v,x=0;64>x;)16>x?(d[x]=v=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],v=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=v),r=q+oO[x]+v+((m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&n^~m&p),t=((e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10))+(e&f^e&h^f&h),q=r+t,l+=r,x++,16>x?(d[x]=v=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=
d[x-2],t=d[x-15],v=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=v),r=p+oO[x]+v+((l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&m^~l&n),t=((q>>>2|q<<30)^(q>>>13|q<<19)^(q>>>22|q<<10))+(q&e^q&f^e&f),p=r+t,h+=r,x++,16>x?(d[x]=v=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],v=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=v),r=n+oO[x]+v+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&l^
~h&m),t=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&q^p&e^q&e),n=r+t,f+=r,x++,16>x?(d[x]=v=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],v=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=v),r=m+oO[x]+v+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&h^~f&l),t=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&p^n&q^p&q),v=q,q=l,l=v,v=p,p=h,h=v,v=n,n=f,f=v,m=e+r,e=r+t,x++;a.j[0]=e+a.j[0]|0;a.j[1]=f+a.j[1]|0;a.j[2]=h+a.j[2]|0;a.j[3]=
l+a.j[3]|0;a.j[4]=m+a.j[4]|0;a.j[5]=n+a.j[5]|0;a.j[6]=p+a.j[6]|0;a.j[7]=q+a.j[7]|0};
KFa=function(a){var b=new Uint8Array(32),c=64-a.B;55<a.B&&(c+=64);var d=new Uint8Array(c);d[0]=128;for(var e=8*a.D,f=1;9>f;f++){var h=e%256;d[c-f]=h;e=(e-h)/256}a.update(d);for(c=0;8>c;c++)b[4*c]=a.j[c]>>>24,b[4*c+1]=a.j[c]>>>16&255,b[4*c+2]=a.j[c]>>>8&255,b[4*c+3]=a.j[c]&255;JFa(a);return b};
JFa=function(a){a.j=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];a.N=[];a.N.length=64;a.D=0;a.B=0};
LFa=function(a){this.j=a};
MFa=function(a,b,c){a=new HFa(a.j);a.update(b);a.update(c);b=KFa(a);a.update(a.G);a.update(b);b=KFa(a);a.reset();return b};
NFa=function(a){this.B=a};
OFa=function(a,b,c,d){var e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.j){l.La(2);break}return g.z(l,d.importKey("raw",a.B,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),3);case 3:a.j=l.B;case 2:return e=new Uint8Array(b.length+c.length),e.set(b),e.set(c,b.length),f={name:"HMAC",hash:"SHA-256"},g.z(l,d.sign(f,a.j,e),4);case 4:return h=l.B,l.return(new Uint8Array(h))}})};
PFa=function(a,b,c){a.C||(a.C=new LFa(a.B));return MFa(a.C,b,c)};
QFa=function(a,b,c){var d,e;return g.I(function(f){if(1==f.j){d=hO();if(!d)return f.return(PFa(a,b,c));g.Ca(f,3);return g.z(f,OFa(a,b,c,d),5)}if(3!=f.j)return f.return(f.B);e=g.Fa(f);g.MF(e);yFa=!0;return f.return(PFa(a,b,c))})};
pO=function(){var a=RFa;var b=void 0===b?[]:b;var c=void 0===c?[]:c;b=Ola.apply(null,[Pla.apply(null,g.pa(b))].concat(g.pa(c)));this.store=Rla(a,void 0,b)};
g.SFa=function(a,b,c){for(var d=Object.assign({},a),e=g.u(Object.keys(b)),f=e.next();!f.done;f=e.next()){f=f.value;var h=a[f],l=b[f];if(void 0===l)delete d[f];else if(void 0===h)d[f]=l;else if(Array.isArray(l)&&Array.isArray(h))d[f]=c?[].concat(g.pa(h),g.pa(l)):l;else if(!Array.isArray(l)&&g.ab(l)&&!Array.isArray(h)&&g.ab(h))d[f]=g.SFa(h,l,c);else if(typeof l===typeof h)d[f]=l;else return b=new g.fD("Attempted to merge fields of differing types.",{name:"DeepMergeError",key:f,ghb:h,updateValue:l}),
g.LF(b),a}return d};
qO=function(a){var b=this;a=void 0===a?[]:a;this.j=[];this.C=this.B=0;this.D=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
TFa=function(a,b){return 0===a.j.length?!1:(a=a.j[a.j.length-1])&&a.buffer===b.buffer&&a.byteOffset+a.length===b.byteOffset};
rO=function(a,b){b=g.u(b.j);for(var c=b.next();!c.done;c=b.next())a.append(c.value)};
sO=function(a,b,c){return a.split(b).Bm.split(c).dI};
UFa=function(a){a.D=void 0;a.B=0;a.C=0};
VFa=function(a,b,c){a.isFocused(b);return b-a.C+c<=a.j[a.B].length};
WFa=function(a){if(!a.D){var b=a.j[a.B];a.D=new DataView(b.buffer,b.byteOffset,b.length)}return a.D};
XFa=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength||!c)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!VFa(a,b,c)){var d=a.B,e=a.C;a.focus(b+c-1);e=new Uint8Array(a.C+a.j[a.B].length-e);for(var f=0,h=d;h<=a.B;h++)e.set(a.j[h],f),f+=a.j[h].length;a.j.splice(d,a.B-d+1,e);UFa(a);a.focus(b)}d=a.j[a.B];return new DataView(d.buffer,d.byteOffset+b-a.C,c)};
tO=function(a,b,c){a=XFa(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
YFa=function(a,b,c){a=tO(a,void 0===b?0:b,void 0===c?-1:c);b=new Uint8Array(a.length);try{b.set(a)}catch(d){for(c=0;c<a.length;c++)b[c]=a[c]}return b};
uO=function(a,b){a.focus(b);return a.j[a.B][b-a.C]};
ZFa=function(a,b){a.focus(b);return VFa(a,b,4)?WFa(a).getUint32(b-a.C):256*(256*(256*uO(a,b)+uO(a,b+1))+uO(a,b+2))+uO(a,b+3)};
$Fa=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
vO=function(a){return String.fromCharCode.apply(null,a)};
xO=function(a){return a.length?wO?wO.decode(a):vO(a):""};
g.zO=function(a){if(!a.length)return"";try{if(wO)return wO.decode(a);if("FetchInternal"in window)return FetchInternal.decodeFromUTF8(a)}catch(h){}for(var b=0,c=[],d=a.length;b<d;){for(var e=0;1024>e&&b<d;){var f=a[b++];if(128>f)yO[e++]=f;else{if(224>f)f=(f&31)<<6|a[b++]&63;else if(240>f)f=(f&15)<<12|(a[b++]&63)<<6|a[b++]&63;else{if(1024===e+1){--b;break}f=(f&7)<<18|(a[b++]&63)<<12|(a[b++]&63)<<6|a[b++]&63;f-=65536;yO[e++]=55296|f>>10;f=56320|f&1023}yO[e++]=f}}f=String.fromCharCode.apply(String,yO);
1024>e&&(f=f.substr(0,e));c.push(f)}return c.join("")};
BO=function(a,b){var c;if(null==(c=AO)?0:c.encodeInto)return b=AO.encodeInto(a,b),b.read<a.length?4*a.length:b.written;for(var d=c=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296===(e&64512)&&d+1<a.length&&56320===(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return c};
aGa=function(a){if(AO)return AO.encode(a);var b=new Uint8Array(Math.ceil(1.2*a.length)),c=BO(a,b);b.length<c&&(b=new Uint8Array(c),c=BO(a,b));b.length>c&&(b=b.subarray(0,c));return b};
CO=function(a){this.j=a;this.pos=0;this.B=-1};
DO=function(a){var b=uO(a.j,a.pos);++a.pos;if(128>b)return b;for(var c=b&127,d=1;128<=b;)b=uO(a.j,a.pos),++a.pos,d*=128,c+=(b&127)*d;return c};
EO=function(a,b){var c=a.B;for(a.B=-1;a.pos+1<=a.j.totalLength;){0>c&&(c=DO(a));var d=c>>3,e=c&7;if(d===b)return!0;if(d>b){a.B=c;break}c=-1;switch(e){case 0:DO(a);break;case 1:a.pos+=8;break;case 2:d=DO(a);a.pos+=d;break;case 5:a.pos+=4}}return!1};
FO=function(a,b){if(EO(a,b))return DO(a)};
GO=function(a,b){if(EO(a,b))return!!DO(a)};
HO=function(a,b){if(EO(a,b)){b=DO(a);var c=tO(a.j,a.pos,b);a.pos+=b;return c}};
IO=function(a,b){if(a=HO(a,b))return g.zO(a)};
JO=function(a,b,c){if(a=HO(a,b))return c(new CO(new qO([a])))};
KO=function(a,b){for(var c=[];EO(a,b);)c.push(DO(a));return c.length?c:void 0};
LO=function(a,b,c){for(var d=[],e;e=HO(a,b);)d.push(c(new CO(new qO([e]))));return d.length?d:void 0};
MO=function(a,b){a=a instanceof Uint8Array?new qO([a]):a;return b(new CO(a))};
bGa=function(a,b){a=void 0===a?4096:a;this.B=b;this.pos=0;this.C=[];b=void 0;if(this.B)try{var c=this.B.exports.malloc(a);b=new Uint8Array(this.B.exports.memory.buffer,c,a)}catch(d){}b||(b=new Uint8Array(a));this.j=b;this.view=new DataView(this.j.buffer,this.j.byteOffset,this.j.byteLength)};
NO=function(a,b){var c=a.pos+b;if(!(a.j.length>=c)){for(b=2*a.j.length;b<c;)b*=2;a.B?(c=a.B.exports.realloc(a.j.byteOffset,b),a.j=new Uint8Array(a.B.exports.memory.buffer,c,b)):(b=new Uint8Array(b),b.set(a.j.subarray(0,a.pos)),a.j=b);a.view=new DataView(a.j.buffer,a.j.byteOffset,a.j.byteLength)}};
OO=function(a,b){if(268435455<b){NO(a,4);for(var c=b&1073741823,d=0;4>d;d++)a.view.setUint8(a.pos,c&127|128),c>>=7,a.pos+=1;b=Math.floor(b/268435456)}for(NO(a,4);127<b;)a.view.setUint8(a.pos,b&127|128),b>>=7,a.pos+=1;a.view.setUint8(a.pos,b);a.pos+=1};
PO=function(a,b,c){void 0!==c&&(OO(a,8*b),OO(a,c))};
QO=function(a,b,c){void 0!==c&&PO(a,b,c?1:0)};
RO=function(a,b,c){void 0!==c&&(OO(a,8*b+2),b=c.length,OO(a,b),NO(a,b),a.j.set(c,a.pos),a.pos+=b)};
SO=function(a,b,c){void 0!==c&&(cGa(a,b,Math.ceil(Math.log2(4*c.length+2)/7)),NO(a,1.2*c.length),b=BO(c,a.j.subarray(a.pos)),a.pos+b>a.j.length&&(NO(a,b),b=BO(c,a.j.subarray(a.pos))),a.pos+=b,dGa(a))};
cGa=function(a,b,c){c=void 0===c?2:c;OO(a,8*b+2);a.C.push(a.pos);a.C.push(c);a.pos+=c};
dGa=function(a){for(var b=a.C.pop(),c=a.C.pop(),d=a.pos-c-b;b--;){var e=b?128:0;a.view.setUint8(c++,d&127|e);d>>=7}};
TO=function(a,b,c,d,e){c&&(cGa(a,b,void 0===e?3:e),d(a,c),dGa(a))};
eGa=function(a){a.B&&a.j.buffer!==a.B.exports.memory.buffer&&(a.j=new Uint8Array(a.B.exports.memory.buffer,a.j.byteOffset,a.j.byteLength),a.view=new DataView(a.j.buffer,a.j.byteOffset,a.j.byteLength));return new Uint8Array(a.j.buffer,a.j.byteOffset,a.pos)};
g.UO=function(a,b,c){c=new bGa(4096,c);b(c,a);return eGa(c)};
g.VO=function(a){var b=new CO(new qO([vg(decodeURIComponent(a))]));a=IO(b,2);b=FO(b,4);var c=fGa[b];if("undefined"===typeof c)throw a=new g.fD("Failed to recognize field number",{name:"EntityKeyHelperError",Jfb:b}),g.LF(a),a;return{T4:b,entityType:c,entityId:a}};
g.WO=function(a,b){var c=new bGa;RO(c,2,aGa(a));a=gGa[b];if("undefined"===typeof a)throw b=new g.fD("Failed to recognize entity type",{name:"EntityKeyHelperError",entityType:b}),g.LF(b),b;PO(c,4,a);PO(c,5,1);b=eGa(c);return encodeURIComponent(g.tg(b))};
XO=function(a,b,c,d){if(void 0===d)return d=Object.assign({},a[b]||{}),c=(delete d[c],d),d={},Object.assign({},a,(d[b]=c,d));var e={},f={};return Object.assign({},a,(f[b]=Object.assign({},a[b],(e[c]=d,e)),f))};
hGa=function(a,b,c,d,e){var f=a[b];if(null==f||!f[c])return a;d=g.SFa(f[c],d,"REPEATED_FIELDS_MERGE_OPTION_APPEND"===e);e={};f={};return Object.assign({},a,(f[b]=Object.assign({},a[b],(e[c]=d,e)),f))};
iGa=function(a,b){a=void 0===a?{}:a;switch(b.type){case "ENTITY_LOADED":return b.payload.reduce(function(d,e){var f,h=null==(f=e.options)?void 0:f.persistenceOption;if(h&&"ENTITY_PERSISTENCE_OPTION_UNKNOWN"!==h&&"ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST"!==h)return d;if(!e.entityKey)return g.LF(Error("Missing entity key")),d;if("ENTITY_MUTATION_TYPE_REPLACE"===e.type){if(!e.payload)return g.LF(new g.fD("REPLACE entity mutation is missing a payload",{entityKey:e.entityKey})),d;var l=g.cd(e.payload);
return XO(d,l,e.entityKey,e.payload[l])}if("ENTITY_MUTATION_TYPE_DELETE"===e.type){e=e.entityKey;try{var m=g.VO(e).entityType;l=XO(d,m,e)}catch(q){if(q instanceof Error)g.LF(new g.fD("Failed to deserialize entity key",{entityKey:e,aQ:q.message})),l=d;else throw q;}return l}if("ENTITY_MUTATION_TYPE_UPDATE"===e.type){if(!e.payload)return g.LF(new g.fD("UPDATE entity mutation is missing a payload",{entityKey:e.entityKey})),d;l=g.cd(e.payload);var n,p;return hGa(d,l,e.entityKey,e.payload[l],null==(n=
e.fieldMask)?void 0:null==(p=n.mergeOptions)?void 0:p.repeatedFieldsMergeOption)}return d},a);
case "REPLACE_ENTITY":var c=b.payload;return XO(a,c.entityType,c.key,c.S4);case "REPLACE_ENTITIES":return Object.keys(b.payload).reduce(function(d,e){var f=b.payload[e];return Object.keys(f).reduce(function(h,l){return XO(h,e,l,f[l])},d)},a);
case "UPDATE_ENTITY":return c=b.payload,hGa(a,c.entityType,c.key,c.S4,c.Ygb);default:return a}};
YO=function(a,b,c){return a[b]?a[b][c]||null:null};
kGa=function(a){var b=a.hours||0;var c=a.minutes||0,d=a.seconds||0;b=d+60*c+3600*b+86400*(a.days||0)+604800*(a.weeks||0)+2629800*(a.months||0)+31557600*(a.years||0);0>=b?b={hours:0,minutes:0,seconds:0}:(a=b,b=Math.floor(a/3600),a%=3600,c=Math.floor(a/60),d=Math.floor(a%60),b={hours:b,minutes:c,seconds:d});var e=void 0===b.hours?0:b.hours;c=void 0===b.minutes?0:b.minutes;a=void 0===b.seconds?0:b.seconds;d=0<e;b=[];if(d){e=(new Intl.NumberFormat("en-u-nu-latn")).format(e);var f=["fr"],h="az bs ca da de el es eu gl hr id is it km lo mk nl pt-BR ro sl sr sr-Latn tr vi".split(" ");
e="af be bg cs et fi fr-CA hu hy ka kk ky lt lv no pl pt-PT ru sk sq sv uk uz".split(" ").includes(ZO)?e.replace(",","\u00a0"):f.includes(ZO)?e.replace(",","\u202f"):h.includes(ZO)?e.replace(",","."):e;b.push(e)}d=void 0===d?!1:d;c=(["af","be","lt"].includes(ZO)||d)&&10>c?jGa().format(c):(new Intl.NumberFormat("en-u-nu-latn")).format(c);b.push(c);c=jGa().format(a);b.push(c);c=":";"da fi id si sl sr sr-Latn".split(" ").includes(ZO)&&(c=".");return b.join(c)};
jGa=function(){return new Intl.NumberFormat("en-u-nu-latn",{minimumIntegerDigits:2})};
lGa=function(a,b){var c,d;a=(null==(c=a.watchEndpointSupportedAuthorizationTokenConfig)?void 0:null==(d=c.videoAuthorizationToken)?void 0:d.credentialTransferTokens)||[];for(c=0;c<a.length;++c)if(a[c].scope===b)return a[c].token||void 0};
$O=function(a){return a?function(){try{return a.apply(this,arguments)}catch(b){g.LF(b)}}:a};
aP=function(a,b,c){if(!g.LB("jspb_translator_skip_iteration"))if(Array.isArray(b))for(var d=0;d<b.length;d++)c?a(c(b[d])[1]):a(b[d]);else c?a(c(b)[1]):a(b)};
bP=function(a,b,c){if(!g.LB("jspb_translator_skip_iteration"))if(Array.isArray(b))for(var d=0;d<b.length;d++)a(c[b[d]]);else a(c[b])};
Z=function(a){g.LB("jspb_translator_log_errors")&&g.OB(a)};
nGa=function(a){var b=new Ty,c=0;try{var d=a.eventType;void 0!==d&&(R(b,1,mGa[d]),c++);var e=a.storedEventsCount;void 0!==e&&(Hj(b,2,e),c++);var f=a.expiredEventsCount;void 0!==f&&(Hj(b,3,f),c++);var h=a.averageTimeBetweenDispatchesMs;void 0!==h&&(Hj(b,4,h),c++);var l=a.oldestStoredEventAgeMs;void 0!==l&&(Hj(b,5,l),c++);var m=a.metricIntervalMs;void 0!==m&&(Hj(b,6,m),c++);var n=a.dispatchedEventCount;void 0!==n&&(Hj(b,7,n),c++);var p=a.dispatchAttemptCount;void 0!==p&&(Hj(b,8,p),c++);var q=a.withDiskSpaceMs;
void 0!==q&&(Jj(b,9,q),c++);var r=a.withNetworkMs;void 0!==r&&(Jj(b,10,r),c++);var t=a.foregroundMs;void 0!==t&&(Jj(b,11,t),c++);var v=a.activeMs;void 0!==v&&(Jj(b,12,v),c++);var x=a.condensedPageBcSlackCount;void 0!==x&&(Hj(b,13,x),c++);var C=a.persistedDeleteUsedCount;void 0!==C&&(Hj(b,14,C),c++);var F=a.persistedDeleteCount;void 0!==F&&(Hj(b,15,F),c++);var G=a.eventDisabledCount;void 0!==G&&(Hj(b,16,G),c++);var H=a.identityResolutionErrorCount;void 0!==H&&(Hj(b,17,H),c++);var O=a.exceededMaxRetryCount;
void 0!==O&&(Hj(b,18,O),c++);var Q=a.condensedPageBcPersistFailCount;void 0!==Q&&(Hj(b,19,Q),c++);var X=a.couldNotUnloadPageCount;void 0!==X&&(Hj(b,20,X),c++);var ia=a.pageWasCorruptedCount;void 0!==ia&&(Hj(b,24,ia),c++);var qa=a.badEventIndexCount;void 0!==qa&&(Hj(b,27,qa),c++);var ra=a.serializeErrorCount;void 0!==ra&&(Hj(b,25,ra),c++);var ma=a.payloadInfoNotSetCount;void 0!==ma&&(Hj(b,21,ma),c++);var sa=a.requestEmptyErrorCount;void 0!==sa&&(Hj(b,22,sa),c++);var ea=a.clientEventNotSetCount;void 0!==
ea&&(Hj(b,23,ea),c++);var za=a.differentIdCount;void 0!==za&&(Hj(b,26,za),c++);var ba=a.failedWriteCount;void 0!==ba&&(Hj(b,28,ba),c++);var Ta=a.failedReadCount;void 0!==Ta&&(Hj(b,29,Ta),c++);var y=a.failedDispatchCount;void 0!==y&&(Hj(b,30,y),c++);var V=a.failedFetchCount;void 0!==V&&(Hj(b,31,V),c++);var eb=a.loggingliteLogsMoved;void 0!==eb&&(Hj(b,32,eb),c++);var kb=a.loggingliteLogsDropped;void 0!==kb&&(Hj(b,33,kb),c++);return[c===Object.keys(a).length,b]}catch(Xa){return Z(Xa),[!1,void 0]}};
cP=function(a){var b=new tA,c=0;try{var d=a.trackingParams;void 0!==d&&(b.eg(d),c++);var e=a.veType;void 0!==e&&(Hj(b,2,e),c++);var f=a.elementIndex;void 0!==f&&(Hj(b,3,f),c++);var h=a.veCounter;void 0!==h&&(Hj(b,6,h),c++);var l=a.dataElement;if(l){var m=cP(l);m[0]&&(N(b,tA,7,m[1]),c++)}var n=a.isCounterfactual;void 0!==n&&(Gj(b,5,n),c++);var p=a.youtubeData;if(p){var q=new Cx,r=0;try{var t=p.channelData;if(t){var v=new Lw,x=0;try{var C=t.externalId;void 0!==C&&(Nj(v,1,C),x++);var F=[x===Object.keys(t).length,
v]}catch(Na){Z(Na),F=[!1,void 0]}var G=F;G[0]&&(N(q,Lw,2,G[1]),r++)}var H=p.channelItem;if(H){var O=new Mw,Q=0;try{var X=H.externalId;void 0!==X&&(Nj(O,1,X),Q++);var ia=[Q===Object.keys(H).length,O]}catch(Na){Z(Na),ia=[!1,void 0]}var qa=ia;qa[0]&&(N(q,Mw,5,qa[1]),r++)}var ra=p.playlistItem;if(ra){var ma=new gx,sa=0;try{var ea=ra.externalPlaylistId;void 0!==ea&&(Nj(ma,5,ea),sa++);var za=[sa===Object.keys(ra).length,ma]}catch(Na){Z(Na),za=[!1,void 0]}var ba=za;ba[0]&&(N(q,gx,6,ba[1]),r++)}var Ta=p.analyticsData;
if(Ta){var y=new Jw,V=0;try{var eb=Ta.tabName;void 0!==eb&&(R(y,1,oGa[eb]),V++);var kb=Ta.analysisVariant;if(kb){var Xa=new ww,Qa=0;try{var fb=kb.analysisSummary;if(fb){var pb=new fw,La=0;try{var xb=fb.type;void 0!==xb&&(R(pb,1,pGa[xb]),La++);var cb=fb.eligibility;void 0!==cb&&(R(pb,2,qGa[cb]),La++);var A=fb.sentiment;void 0!==A&&(R(pb,3,rGa[A]),La++);var D=[La===Object.keys(fb).length,pb]}catch(Na){Z(Na),D=[!1,void 0]}var E=D;E[0]&&(N(Xa,fw,1,E[1]),Qa++)}var B=kb.videoPerformanceVariant;if(B){var K=
sGa(B);K[0]&&(vj(Xa,tw,2,dP,K[1]),Qa++)}var Y=kb.videoOverviewVariant;if(Y){var la=new uw,ua=0;try{var da=Y.timePeriod;void 0!==da&&(R(la,1,eP[da]),ua++);var fa=Y.videoPerformanceVariant;if(fa){var Ea=sGa(fa);Ea[0]&&(N(la,tw,2,Ea[1]),ua++)}var xa=Y.durationTimePeriod;void 0!==xa&&(R(la,3,tGa[xa]),ua++);var db=[ua===Object.keys(Y).length,la]}catch(Na){Z(Na),db=[!1,void 0]}var Ub=db;Ub[0]&&(vj(Xa,uw,3,dP,Ub[1]),Qa++)}var Kb=kb.channelFluctuationVariant;if(Kb){var Sb=new iw,yb=0;try{var Nb=Kb.views;
void 0!==Nb&&(R(Sb,1,fP[Nb]),yb++);var Yc=Kb.driver;void 0!==Yc&&(R(Sb,2,uGa[Yc]),yb++);var xc=Kb.ctr;void 0!==xc&&(R(Sb,3,fP[xc]),yb++);var dd=Kb.impressions;void 0!==dd&&(R(Sb,4,fP[dd]),yb++);var Zc=Kb.viewsPerVideo;void 0!==Zc&&(R(Sb,5,fP[Zc]),yb++);var ld=[yb===Object.keys(Kb).length,Sb]}catch(Na){Z(Na),ld=[!1,void 0]}var md=ld;md[0]&&(vj(Xa,iw,4,dP,md[1]),Qa++)}var Xb=kb.artistOverviewVariant;if(Xb){var Nd=new gw,Ud=0;try{var cc=Xb.timePeriod;void 0!==cc&&(R(Nd,1,eP[cc]),Ud++);var ac=Xb.variantType;
void 0!==ac&&(R(Nd,2,vGa[ac]),Ud++);var $c=[Ud===Object.keys(Xb).length,Nd]}catch(Na){Z(Na),$c=[!1,void 0]}var Ob=$c;Ob[0]&&(vj(Xa,gw,5,dP,Ob[1]),Qa++)}var Gd=kb.monthlySubsVariant;if(Gd){var Vd=wGa(Gd);Vd[0]&&(vj(Xa,mw,6,dP,Vd[1]),Qa++)}var Tb=kb.monthlyRevenueVariant;if(Tb){var pf=xGa(Tb);pf[0]&&(vj(Xa,lw,7,dP,pf[1]),Qa++)}var Je=kb.holisticMonthlyOverviewVariant;if(Je){var Ke=new nw,ve=0;try{var ch=Je.viewsPerformance;if(ch){var Cg=yGa(ch);Cg[0]&&(N(Ke,kw,1,Cg[1]),ve++)}var dh=Je.subsPerformance;
if(dh){var eh=wGa(dh);eh[0]&&(N(Ke,mw,2,eh[1]),ve++)}var fh=Je.revenuePerformance;if(fh){var gh=xGa(fh);gh[0]&&(N(Ke,lw,3,gh[1]),ve++)}var Le=[ve===Object.keys(Je).length,Ke]}catch(Na){Z(Na),Le=[!1,void 0]}var Ye=Le;Ye[0]&&(vj(Xa,nw,8,dP,Ye[1]),Qa++)}var ad=kb.personalizedChannelOverviewVariant;if(ad){var ie=new rw,Ad=0;try{var hh=ad.timePeriod;void 0!==hh&&(R(ie,1,eP[hh]),Ad++);var ih=ad.viewsPerformance;if(ih){var Od=yGa(ih);Od[0]&&(N(ie,kw,2,Od[1]),Ad++)}var Dg=[Ad===Object.keys(ad).length,ie]}catch(Na){Z(Na),
Dg=[!1,void 0]}var Ze=Dg;Ze[0]&&(vj(Xa,rw,9,dP,Ze[1]),Qa++)}var tc=kb.channelNewReturningVariant;if(tc){var Mf=new jw,jh=0;try{var Qh=tc.uniqueViewers;void 0!==Qh&&(R(Mf,1,fP[Qh]),jh++);var vi=tc.newViewers;void 0!==vi&&(R(Mf,2,fP[vi]),jh++);var qf=tc.returningViewers;void 0!==qf&&(R(Mf,3,fP[qf]),jh++);var Nf=[jh===Object.keys(tc).length,Mf]}catch(Na){Z(Na),Nf=[!1,void 0]}var $e=Nf;$e[0]&&(vj(Xa,jw,10,dP,$e[1]),Qa++)}var Eg=kb.lowReturningViewersDataStoryVariant;if(Eg){var Of=new ow,Dc=0;try{var yc=
Eg.videoListType;void 0!==yc&&(R(Of,1,zGa[yc]),Dc++);var ed=[Dc===Object.keys(Eg).length,Of]}catch(Na){Z(Na),ed=[!1,void 0]}var ij=ed;ij[0]&&(vj(Xa,ow,11,dP,ij[1]),Qa++)}var we=kb.weeklyDataStoryVariant;if(we){var Oc=new vw,af=0;try{var wi=we.dateId;void 0!==wi&&(Ij(Oc,1,wi),af++);var xi=[af===Object.keys(we).length,Oc]}catch(Na){Z(Na),xi=[!1,void 0]}var Rh=xi;Rh[0]&&(vj(Xa,vw,12,dP,Rh[1]),Qa++)}var Fg=kb.monthlyDataStoryVariant;if(Fg){var Sh=new pw,Pf=0;try{var jj=Fg.dateId;void 0!==jj&&(Ij(Sh,1,
jj),Pf++);var rf=Fg.highlightType;void 0!==rf&&(R(Sh,2,AGa[rf]),Pf++);var Gg=Fg.adviceType;void 0!==Gg&&(R(Sh,3,BGa[Gg]),Pf++);var xe=[Pf===Object.keys(Fg).length,Sh]}catch(Na){Z(Na),xe=[!1,void 0]}var kj=xe;kj[0]&&(vj(Xa,pw,13,dP,kj[1]),Qa++)}var Hg=kb.otherFormatsDataStoryVariant;if(Hg){var Ig=new qw,Jg=0;try{var kh=Hg.overlapShorts;void 0!==kh&&(Ij(Ig,1,kh),Jg++);var Me=Hg.overlapChannels;void 0!==Me&&(Ij(Ig,2,Me),Jg++);var Ne=[Jg===Object.keys(Hg).length,Ig]}catch(Na){Z(Na),Ne=[!1,void 0]}var ye=
Ne;ye[0]&&(vj(Xa,qw,14,dP,ye[1]),Qa++)}var Bf=kb.audienceWatchesLongformDataStoryVariant;if(Bf){var Qj=new hw,bf=0;try{var Oe=Bf.hasOverlapVideo;void 0!==Oe&&(Gj(Qj,1,Oe),bf++);var Wd=Bf.hasOverlapLivestream;void 0!==Wd&&(Gj(Qj,2,Wd),bf++);var lh=Bf.overlapChannels;void 0!==lh&&(Ij(Qj,3,lh),bf++);var Kg=[bf===Object.keys(Bf).length,Qj]}catch(Na){Z(Na),Kg=[!1,void 0]}var Qf=Kg;Qf[0]&&(vj(Xa,hw,15,dP,Qf[1]),Qa++)}var Lg=[Qa===Object.keys(kb).length,Xa]}catch(Na){Z(Na),Lg=[!1,void 0]}var jg=Lg;jg[0]&&
(N(y,ww,12,jg[1]),V++)}var Th=Ta.cardConfig;if(Th){var yi=new Aw,Uh=0;try{var Jl=Th.cardType;void 0!==Jl&&(R(yi,3,CGa[Jl]),Uh++);var Kl=Th.legacyMobileCardType;void 0!==Kl&&(R(yi,5,DGa[Kl]),Uh++);var Rj=Th.entityType;void 0!==Rj&&(R(yi,4,EGa[Rj]),Uh++);var lj=Th.tableCardConfig;if(lj){var Xd=new zw,ze=0;try{var Pd=lj.dimension;void 0!==Pd&&(R(Xd,1,gP[Pd]),ze++);var zi=lj.metrics;void 0!==zi&&(bP(Xd.j.bind(Xd),zi,gP),ze++);var Ll=[ze===Object.keys(lj).length,Xd]}catch(Na){Z(Na),Ll=[!1,void 0]}var Pk=
Ll;Pk[0]&&(vj(yi,zw,1,FGa,Pk[1]),Uh++)}var Sj=Th.keyMetricCardConfig;if(Sj){var mj=new yw,Tj=0;try{var Cf=Sj.metricTabConfigs;Cf&&(aP(mj.j.bind(mj),Cf,GGa),Tj++);var Uj=[Tj===Object.keys(Sj).length,mj]}catch(Na){Z(Na),Uj=[!1,void 0]}var Ai=Uj;Ai[0]&&(vj(yi,yw,2,FGa,Ai[1]),Uh++)}var Ml=[Uh===Object.keys(Th).length,yi]}catch(Na){Z(Na),Ml=[!1,void 0]}var Vj=Ml;Vj[0]&&(N(y,Aw,13,Vj[1]),V++)}var Vh=Ta.externalVideoId;void 0!==Vh&&(P(y,15,Vh),V++);var nj=Ta.videoSid;void 0!==nj&&(Jj(y,16,nj),V++);var mh=
Ta.exploreConfig;if(mh){var kg=new Iw,Rf=0;try{var Pe=mh.metrics;void 0!==Pe&&(bP(kg.j.bind(kg),Pe,gP),Rf++);var Qk=mh.dimension;void 0!==Qk&&(R(kg,2,gP[Qk]),Rf++);var Nl=mh.timePeriodType;void 0!==Nl&&(R(kg,3,eP[Nl]),Rf++);var Ol=[Rf===Object.keys(mh).length,kg]}catch(Na){Z(Na),Ol=[!1,void 0]}var Sf=Ol;Sf[0]&&(N(y,Iw,18,Sf[1]),V++)}var Qe=Ta.contentInspirationEntity;if(Qe){var sf=new ew,cf=0;try{var Rk=Qe.video;if(Rk){var Sk=new dw,Pl=0;try{var oj=Rk.externalVideoId;void 0!==oj&&(P(Sk,1,oj),Pl++);
var gc=[Pl===Object.keys(Rk).length,Sk]}catch(Na){Z(Na),gc=[!1,void 0]}var kq=gc;kq[0]&&(vj(sf,dw,1,hP,kq[1]),cf++)}var Ql=Qe.kgTopic;if(Ql){var Ls=new cw,Ms=0;try{var Um=Ql.kgTopicMid;void 0!==Um&&(P(Ls,1,Um),Ms++);var Wj=[Ms===Object.keys(Ql).length,Ls]}catch(Na){Z(Na),Wj=[!1,void 0]}var Rl=Wj;Rl[0]&&(vj(sf,cw,2,hP,Rl[1]),cf++)}var Wh=Qe.freeformTopic;if(Wh){var Xj=new aw,Tk=0;try{var uo=Wh.freeformTopic;void 0!==uo&&(P(Xj,1,uo),Tk++);var lq=Wh.languageCode;void 0!==lq&&(P(Xj,4,lq),Tk++);var vo=
Wh.isContentGap;void 0!==vo&&(Gj(Xj,2,vo),Tk++);var mq=Wh.isShortsContentGap;void 0!==mq&&(Gj(Xj,3,mq),Tk++);var nq=Wh.isInVideoIdeaShelf;void 0!==nq&&(Gj(Xj,5,nq),Tk++);var Yj=[Tk===Object.keys(Wh).length,Xj]}catch(Na){Z(Na),Yj=[!1,void 0]}var oq=Yj;oq[0]&&(vj(sf,aw,3,hP,oq[1]),cf++)}var Zj=Qe.generatedOutline;if(Zj){var Uk=new bw,df=0;try{var Xh=Zj.feedbackToken;void 0!==Xh&&(P(Uk,1,Xh),df++);var Mg=[df===Object.keys(Zj).length,Uk]}catch(Na){Z(Na),Mg=[!1,void 0]}var Bi=Mg;Bi[0]&&(vj(sf,bw,4,hP,
Bi[1]),cf++)}var Ci=[cf===Object.keys(Qe).length,sf]}catch(Na){Z(Na),Ci=[!1,void 0]}var pq=Ci;pq[0]&&(N(y,ew,19,pq[1]),V++)}var Vm=[V===Object.keys(Ta).length,y]}catch(Na){Z(Na),Vm=[!1,void 0]}var Ng=Vm;Ng[0]&&(N(q,Jw,20,Ng[1]),r++)}var nh=p.promotionData;if(nh){var Yh=new hx,Wm=0;try{var qq=nh.promotionId;void 0!==qq&&(P(Yh,1,qq),Wm++);var Sl=nh.placementType;void 0!==Sl&&(R(Yh,9,HGa[Sl]),Wm++);var Tl=[Wm===Object.keys(nh).length,Yh]}catch(Na){Z(Na),Tl=[!1,void 0]}var Xm=Tl;Xm[0]&&(N(q,hx,21,Xm[1]),
r++)}var Vk=p.backstageItem;if(Vk){var Ul=new Kw,Vl=0;try{var rq=Vk.stanzaId;void 0!==rq&&(P(Ul,1,rq),Vl++);var sq=Vk.likeCount;void 0!==sq&&(Jj(Ul,7,sq),Vl++);var wo=Vk.backstageId;void 0!==wo&&(P(Ul,9,wo),Vl++);var tq=Vk.wasPostScheduled;void 0!==tq&&(Gj(Ul,14,tq),Vl++);var uq=[Vl===Object.keys(Vk).length,Ul]}catch(Na){Z(Na),uq=[!1,void 0]}var zc=uq;zc[0]&&(N(q,Kw,32,zc[1]),r++)}var ef=p.adminSelfieData;if(ef){var Di=new Fw,Ym=0;try{var xo=ef.componentId;void 0!==xo&&(P(Di,1,xo),Ym++);var yo=ef.componentType;
void 0!==yo&&(P(Di,2,yo),Ym++);var Tf=ef.payload;if(Tf){var Uf=new Ew,oh=0;try{var Wk=Tf.include;if(Wk){var zo=new Bw,Ao=0;try{var vq=Wk.fragmentName;void 0!==vq&&(P(zo,1,vq),Ao++);var Bo=[Ao===Object.keys(Wk).length,zo]}catch(Na){Z(Na),Bo=[!1,void 0]}var wq=Bo;wq[0]&&(vj(Uf,Bw,1,IGa,wq[1]),oh++)}var Wl=Tf.toolboxPage;if(Wl){var Zm=new Dw,Co=0;try{var Do=Wl.fragmentName;void 0!==Do&&(P(Zm,1,Do),Co++);var Eo=[Co===Object.keys(Wl).length,Zm]}catch(Na){Z(Na),Eo=[!1,void 0]}var xq=Eo;xq[0]&&(vj(Uf,Dw,
2,IGa,xq[1]),oh++)}var Fo=Tf.reviewQueuePage;if(Fo){var Xk=new Cw,Go=0;try{var Xl=Fo.queueId;void 0!==Xl&&(Hj(Xk,1,Xl),Go++);var Ho=[Go===Object.keys(Fo).length,Xk]}catch(Na){Z(Na),Ho=[!1,void 0]}var Io=Ho;Io[0]&&(vj(Uf,Cw,3,IGa,Io[1]),oh++)}var yq=[oh===Object.keys(Tf).length,Uf]}catch(Na){Z(Na),yq=[!1,void 0]}var Yk=yq;Yk[0]&&(N(Di,Ew,3,Yk[1]),Ym++)}var $m=[Ym===Object.keys(ef).length,Di]}catch(Na){Z(Na),$m=[!1,void 0]}var zq=$m;zq[0]&&(N(q,Fw,41,zq[1]),r++)}var Ei=p.notificationState;if(Ei){var ak=
new xx,Fi=0;try{var Yl=Ei.inboxInteractionData;if(Yl){var Zl=new wx,Jo=0;try{var Zh=Yl.notifications;Zh&&(aP(Zl.j.bind(Zl),Zh,JGa),Jo++);var Aq=[Jo===Object.keys(Yl).length,Zl]}catch(Na){Z(Na),Aq=[!1,void 0]}var Ko=Aq;Ko[0]&&(N(ak,wx,9,Ko[1]),Fi++)}var bk=[Fi===Object.keys(Ei).length,ak]}catch(Na){Z(Na),bk=[!1,void 0]}var Lo=bk;Lo[0]&&(N(q,xx,59,Lo[1]),r++)}var Gi=p.delegationContext;if(Gi){var Hi=new ex,$h=0;try{var Zk=Gi.externalChannelId;void 0!==Zk&&(P(Hi,1,Zk),$h++);var ai=Gi.externalOwnerId;
void 0!==ai&&(P(Hi,3,ai),$h++);var Ii=Gi.artistId;void 0!==Ii&&(P(Hi,4,Ii),$h++);var je=Gi.roleType;if(je){var pj=new dx,$k=0;try{var Mo=je.channelRoleType;void 0!==Mo&&(Oj(pj,1,KGa,LGa[Mo]),$k++);var No=je.artistRoleType;void 0!==No&&(Oj(pj,2,KGa,MGa[No]),$k++);var Bq=je.contentOwnerRoleType;void 0!==Bq&&(Oj(pj,3,KGa,NGa[Bq]),$k++);var an=[$k===Object.keys(je).length,pj]}catch(Na){Z(Na),an=[!1,void 0]}var bn=an;bn[0]&&(N(Hi,dx,5,bn[1]),$h++)}var ck=Gi.oacChannelId;void 0!==ck&&(P(Hi,6,ck),$h++);
var cn=Gi.isInternalUser;void 0!==cn&&(Gj(Hi,8,cn),$h++);var dn=Gi.user;void 0!==dn&&(Gj(Hi,10,dn),$h++);var Cq=Gi.delegationContextSerialized;void 0!==Cq&&(Nj(Hi,9,Cq),$h++);var Dq=[$h===Object.keys(Gi).length,Hi]}catch(Na){Z(Na),Dq=[!1,void 0]}var Eq=Dq;Eq[0]&&(N(q,ex,63,Eq[1]),r++)}var Oo=p.campaignData;if(Oo){var al=new ux,en=0;try{var fn=Oo.campaignName;void 0!==fn&&(P(al,1,fn),en++);var ke=Oo.campaignVersion;void 0!==ke&&(P(al,2,ke),en++);var ff=[en===Object.keys(Oo).length,al]}catch(Na){Z(Na),
ff=[!1,void 0]}var gf=ff;gf[0]&&(N(q,ux,64,gf[1]),r++)}var Po=p.scoringEventInfo;if(Po){var Fq=new ix,gn=0;try{var hn=Po.scoringTrackingParams;void 0!==hn&&(Nj(Fq,1,hn),gn++);var Qo=[gn===Object.keys(Po).length,Fq]}catch(Na){Z(Na),Qo=[!1,void 0]}var Gq=Qo;Gq[0]&&(N(q,ix,77,Gq[1]),r++)}var Ro=p.servletData;if(Ro){var Hq=new jx,Iq=0;try{var $l=Ro.serializedServletEventId;void 0!==$l&&(P(Hq,1,$l),Iq++);var jn=[Iq===Object.keys(Ro).length,Hq]}catch(Na){Z(Na),jn=[!1,void 0]}var kn=jn;kn[0]&&(N(q,jx,83,
kn[1]),r++)}var So=p.yoodleData;if(So){var Jq=new tx,Kq=0;try{var Lq=So.promoId;void 0!==Lq&&(P(Jq,1,Lq),Kq++);var Mq=[Kq===Object.keys(So).length,Jq]}catch(Na){Z(Na),Mq=[!1,void 0]}var Nq=Mq;Nq[0]&&(N(q,tx,85,Nq[1]),r++)}var dk=p.videoRestrictionData;if(dk){var am=new sx,ln=0;try{var Oq=dk.restrictions;Oq&&(aP(am.j.bind(am),Oq,OGa),ln++);var Pq=dk.prechecksPending;void 0!==Pq&&(Gj(am,2,Pq),ln++);var ek=[ln===Object.keys(dk).length,am]}catch(Na){Z(Na),ek=[!1,void 0]}var Ji=ek;Ji[0]&&(N(q,sx,92,Ji[1]),
r++)}var Vf=p.creatorMusicData;if(Vf){var bi=new ax,bm=0;try{var bl=Vf.entity;if(bl){var cm=PGa(bl);cm[0]&&(N(bi,$w,1,cm[1]),bm++)}var cl=Vf.entities;cl&&(aP(bi.j.bind(bi),cl,PGa),bm++);var To=Vf.track;if(To){var Qq=QGa(To);Qq[0]&&(vj(bi,Zw,3,RGa,Qq[1]),bm++)}var Uo=Vf.collection;if(Uo){var Rq=SGa(Uo);Rq[0]&&(vj(bi,Xw,4,RGa,Rq[1]),bm++)}var Sq=[bm===Object.keys(Vf).length,bi]}catch(Na){Z(Na),Sq=[!1,void 0]}var Tq=Sq;Tq[0]&&(N(q,ax,96,Tq[1]),r++)}var Re=p.creatorData;if(Re){var Ae=new Sw,Df=0;try{var Uq=
Re.ttWizardTargetFeature;void 0!==Uq&&(Oj(Ae,1,TGa,UGa[Uq]),Df++);var Vq=Re.ttWizardTargetLevel;void 0!==Vq&&(Oj(Ae,2,TGa,VGa[Vq]),Df++);var fk=Re.simpleWizardDetails;if(fk){var dm=new Rw;try{var dl=[0===Object.keys(fk).length,dm]}catch(Na){Z(Na),dl=[!1,void 0]}var el=dl;el[0]&&(vj(Ae,Rw,3,WGa,el[1]),Df++)}var fl=Re.advancedWizardDetails;if(fl){var em=new Pw,Wq=0;try{var Xq=fl.isDoubleHop;void 0!==Xq&&(Gj(em,1,Xq),Wq++);var Yq=[Wq===Object.keys(fl).length,em]}catch(Na){Z(Na),Yq=[!1,void 0]}var Zq=
Yq;Zq[0]&&(vj(Ae,Pw,4,WGa,Zq[1]),Df++)}var Vo=Re.blockedWizardDetails;if(Vo){var $q=new Qw,ar=0;try{var gk=Vo.loggableBlockedReason;void 0!==gk&&(R($q,1,XGa[gk]),ar++);var Ki=[ar===Object.keys(Vo).length,$q]}catch(Na){Z(Na),Ki=[!1,void 0]}var gl=Ki;gl[0]&&(vj(Ae,Qw,5,WGa,gl[1]),Df++)}var hl=[Df===Object.keys(Re).length,Ae]}catch(Na){Z(Na),hl=[!1,void 0]}var Wo=hl;Wo[0]&&(N(q,Sw,98,Wo[1]),r++)}var Xo=p.adstubeData;if(Xo){var Ns=new Hw,ci=0;try{var Wf=Xo.countryTargetingPrefill;if(Wf){var Li=new Gw,
hf=0;try{var mn=Wf.prefilledCodes;mn&&(aP(Li.B.bind(Li),mn),hf++);var fm=Wf.finalCodes;fm&&(aP(Li.j.bind(Li),fm),hf++);var il=Wf.source;void 0!==il&&(P(Li,3,il),hf++);var br=[hf===Object.keys(Wf).length,Li]}catch(Na){Z(Na),br=[!1,void 0]}var hk=br;hk[0]&&(N(Ns,Gw,1,hk[1]),ci++)}var cr=[ci===Object.keys(Xo).length,Ns]}catch(Na){Z(Na),cr=[!1,void 0]}var gm=cr;gm[0]&&(N(q,Hw,104,gm[1]),r++)}var hm=p.loggingExpectations;if(hm){var im=YGa(hm);im[0]&&(N(q,Bx,106,im[1]),r++)}var Yo=p.channelPageVeData;if(Yo){var Os=
new Nw,dr=0;try{var nn=Yo.isForYouShelf;void 0!==nn&&(Gj(Os,2,nn),dr++);var ik=[dr===Object.keys(Yo).length,Os]}catch(Na){Z(Na),ik=[!1,void 0]}var er=ik;er[0]&&(N(q,Nw,107,er[1]),r++)}var Mi=p.shoppingAffiliateData;if(Mi){var lg=new nx,qj=0;try{var on=Mi.affiliateDeepLinkSource;void 0!==on&&(R(lg,1,ZGa[on]),qj++);var Zo=[qj===Object.keys(Mi).length,lg]}catch(Na){Z(Na),Zo=[!1,void 0]}var fr=Zo;fr[0]&&(N(q,nx,109,fr[1]),r++)}var jm=p.hashtagSuggestionData;if(jm){var jl=new fx,jk=0;try{var gr=jm.hashtagId;
void 0!==gr&&(P(jl,1,gr),jk++);var kk=jm.suggestionSources;void 0!==kk&&(bP(jl.j.bind(jl),kk,$Ga),jk++);var Og=[jk===Object.keys(jm).length,jl]}catch(Na){Z(Na),Og=[!1,void 0]}var kl=Og;kl[0]&&(N(q,fx,111,kl[1]),r++)}var pn=p.componentData;if(pn){var Ps=new Ow,hr=0;try{var km=pn.standardComponentType;void 0!==km&&(R(Ps,1,aHa[km]),hr++);var ir=[hr===Object.keys(pn).length,Ps]}catch(Na){Z(Na),ir=[!1,void 0]}var Qs=ir;Qs[0]&&(N(q,Ow,121,Qs[1]),r++)}var jr=p.creatorShoppingTaggingData;if(jr){var $o=new cx,
ap=0;try{var kr=jr.products;kr&&(aP($o.j.bind($o),kr,bHa),ap++);var rj=[ap===Object.keys(jr).length,$o]}catch(Na){Z(Na),rj=[!1,void 0]}var lk=rj;lk[0]&&(N(q,cx,122,lk[1]),r++)}var mk=[r===Object.keys(p).length,q]}catch(Na){Z(Na),mk=[!1,void 0]}var lr=mk;lr[0]&&(N(b,Cx,8,lr[1]),c++)}var mr=a.loggingExpectations;if(mr){var nk=YGa(mr);nk[0]&&(N(b,Bx,9,nk[1]),c++)}return[c===Object.keys(a).length,b]}catch(Na){return Z(Na),[!1,void 0]}};
sGa=function(a){var b=new tw,c=0;try{var d=a.views;void 0!==d&&(R(b,1,fP[d]),c++);var e=a.driver;void 0!==e&&(R(b,2,cHa[e]),c++);var f=a.ctr;void 0!==f&&(R(b,3,fP[f]),c++);var h=a.avd;void 0!==h&&(R(b,4,fP[h]),c++);var l=a.impressions;void 0!==l&&(R(b,5,fP[l]),c++);var m=a.videoLength;void 0!==m&&(R(b,6,fP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return Z(n),[!1,void 0]}};
wGa=function(a){var b=new mw,c=0;try{var d=a.subsGrowth;void 0!==d&&(R(b,1,fP[d]),c++);var e=a.nonSubViews;void 0!==e&&(R(b,2,fP[e]),c++);var f=a.subsAddedPerNonSubViews;void 0!==f&&(R(b,3,fP[f]),c++);var h=a.accountsClosed;void 0!==h&&(R(b,4,fP[h]),c++);var l=a.subsRemovedToAddedRatio;void 0!==l&&(R(b,5,fP[l]),c++);var m=a.videosPublished;void 0!==m&&(R(b,6,fP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return Z(n),[!1,void 0]}};
xGa=function(a){var b=new lw,c=0;try{var d=a.revenue;void 0!==d&&(R(b,1,fP[d]),c++);var e=a.revenueSource;void 0!==e&&(R(b,2,dHa[e]),c++);var f=a.revenueDrivingMetrics;void 0!==f&&(bP(b.j.bind(b),f,eHa),c++);var h=a.revenueChangeReason;void 0!==h&&(R(b,4,fHa[h]),c++);var l=a.revenueChangeFact;void 0!==l&&(R(b,5,gHa[l]),c++);var m=a.driverCountryCode;void 0!==m&&(P(b,6,m),c++);return[c===Object.keys(a).length,b]}catch(n){return Z(n),[!1,void 0]}};
yGa=function(a){var b=new kw,c=0;try{var d=a.views;void 0!==d&&(R(b,1,fP[d]),c++);var e=a.drivers;void 0!==e&&(bP(b.j.bind(b),e,hHa),c++);return[c===Object.keys(a).length,b]}catch(f){return Z(f),[!1,void 0]}};
GGa=function(a){var b=new xw,c=0;try{var d=a.metric;void 0!==d&&(R(b,1,gP[d]),c++);var e=a.comparisonMetric;void 0!==e&&(R(b,2,gP[e]),c++);var f=a.includeCumulative;void 0!==f&&(Gj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Z(h),[!1,void 0]}};
JGa=function(a){var b=new vx,c=0;try{var d=a.attributionTag;void 0!==d&&(P(b,2,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
OGa=function(a){var b=new rx,c=0;try{var d=a.limitedAds;if(d){var e=new qx,f=0;try{var h=d.imposer;void 0!==h&&(R(e,1,iHa[h]),f++);var l=[f===Object.keys(d).length,e]}catch(F){Z(F),l=[!1,void 0]}d=l;d[0]&&(vj(b,qx,1,jHa,d[1]),c++)}var m=a.copyright;if(m){var n=new px;d=0;try{var p=m.policyType;void 0!==p&&(R(n,1,kHa[p]),d++);var q=m.productTagsBlocked;void 0!==q&&(Gj(n,2,q),d++);var r=[d===Object.keys(m).length,n]}catch(F){Z(F),r=[!1,void 0]}m=r;m[0]&&(vj(b,px,2,jHa,m[1]),c++)}var t=a.communityGuidelines;
if(t){var v=new ox;m=0;try{var x=t.policyVerticals;void 0!==x&&(bP(v.j.bind(v),x,lHa),m++);var C=[m===Object.keys(t).length,v]}catch(F){Z(F),C=[!1,void 0]}t=C;t[0]&&(vj(b,ox,3,jHa,t[1]),c++)}return[c===Object.keys(a).length,b]}catch(F){return Z(F),[!1,void 0]}};
PGa=function(a){var b=new $w,c=0;try{var d=a.featuredCollection;if(d){var e=mHa(d);e[0]&&(vj(b,Tw,1,iP,e[1]),c++)}var f=a.mood;if(f){var h=nHa(f);h[0]&&(vj(b,Vw,2,iP,h[1]),c++)}var l=a.genre;if(l){var m=oHa(l);m[0]&&(vj(b,Uw,3,iP,m[1]),c++)}var n=a.track;if(n){var p=QGa(n);p[0]&&(vj(b,Zw,4,iP,p[1]),c++)}return[c===Object.keys(a).length,b]}catch(q){return Z(q),[!1,void 0]}};
mHa=function(a){var b=new Tw,c=0;try{var d=a.id;void 0!==d&&(P(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
nHa=function(a){var b=new Vw,c=0;try{var d=a.type;void 0!==d&&(R(b,1,pHa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
oHa=function(a){var b=new Uw,c=0;try{var d=a.type;void 0!==d&&(R(b,1,qHa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
QGa=function(a){var b=new Zw,c=0;try{var d=a.artTrackId;void 0!==d&&(P(b,1,d),c++);var e=a.assetId;void 0!==e&&(P(b,2,e),c++);var f=a.details;if(f){var h=new Yw;try{var l=[0===Object.keys(f).length,h]}catch(p){Z(p),l=[!1,void 0]}d=l;d[0]&&(N(b,Yw,3,d[1]),c++)}var m=a.parent;if(m){var n=SGa(m);n[0]&&(N(b,Xw,4,n[1]),c++)}return[c===Object.keys(a).length,b]}catch(p){return Z(p),[!1,void 0]}};
SGa=function(a){var b=new Xw,c=0;try{var d=a.featuredCollection;if(d){var e=mHa(d);e[0]&&(vj(b,Tw,1,jP,e[1]),c++)}var f=a.mood;if(f){var h=nHa(f);h[0]&&(vj(b,Vw,2,jP,h[1]),c++)}var l=a.genre;if(l){var m=oHa(l);m[0]&&(vj(b,Uw,3,jP,m[1]),c++)}var n=a.section;if(n){var p=new Ww;d=0;try{var q=n.type;void 0!==q&&(R(p,1,rHa[q]),d++);var r=[d===Object.keys(n).length,p]}catch(v){Z(v),r=[!1,void 0]}n=r;n[0]&&(vj(b,Ww,4,jP,n[1]),c++)}var t=a.dimension;void 0!==t&&(R(b,5,sHa[t]),c++);return[c===Object.keys(a).length,
b]}catch(v){return Z(v),[!1,void 0]}};
YGa=function(a){var b=new Bx,c=0;try{var d=a.attachLoggingExpectations;if(d){var e=new zx,f=0;try{var h=d.attachScreenExpectations;h&&(aP(e.j.bind(e),h,tHa),f++);var l=[f===Object.keys(d).length,e]}catch(r){Z(r),l=[!1,void 0]}d=l;d[0]&&(N(b,zx,1,d[1]),c++)}var m=a.screenCreatedLoggingExpectations;if(m){var n=new Ax;d=0;try{var p=m.expectedParentScreens;p&&(aP(n.j.bind(n),p,tHa),d++);var q=[d===Object.keys(m).length,n]}catch(r){Z(r),q=[!1,void 0]}m=q;m[0]&&(N(b,Ax,2,m[1]),c++)}return[c===Object.keys(a).length,
b]}catch(r){return Z(r),[!1,void 0]}};
tHa=function(a){var b=new yx,c=0;try{var d=a.screenVeType;void 0!==d&&(Xla(b,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
bHa=function(a){var b=new bx,c=0;try{var d=a.taggingSource;void 0!==d&&(R(b,1,uHa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
xHa=function(a){var b=new mz,c=0;try{var d=a.segments;d&&(aP(b.j.bind(b),d,vHa),c++);var e=a.transitions;e&&(aP(b.B.bind(b),e,wHa),c++);return[c===Object.keys(a).length,b]}catch(f){return Z(f),[!1,void 0]}};
vHa=function(a){var b=new kz,c=0;try{var d=a.type;void 0!==d&&(R(b,1,yHa[d]),c++);var e=a.effects;e&&(aP(b.L3.bind(b),e,zHa),c++);var f=a.videoInfo;if(f){var h=AHa(f);h[0]&&(N(b,iz,3,h[1]),c++)}var l=a.audioInfo;if(l){var m=new hz;d=0;try{var n=l.sourceOffsetMs;void 0!==n&&(Jj(m,1,n),d++);var p=l.sampleRateHz;void 0!==p&&(Hj(m,2,p),d++);var q=l.channelCount;void 0!==q&&(Hj(m,3,q),d++);var r=l.isRemote;void 0!==r&&(Gj(m,4,r),d++);var t=[d===Object.keys(l).length,m]}catch(G){Z(G),t=[!1,void 0]}l=t;
l[0]&&(N(b,hz,4,l[1]),c++)}var v=a.startTimeMs;void 0!==v&&(Jj(b,5,v),c++);var x=a.durationMs;void 0!==x&&(Kj(b,6,x),c++);var C=a.playbackRate;void 0!==C&&(b.setPlaybackRate(C),c++);var F=a.enabled;void 0!==F&&(b.iR(F),c++);return[c===Object.keys(a).length,b]}catch(G){return Z(G),[!1,void 0]}};
zHa=function(a){var b=new jz,c=0;try{var d=a.effectBaseName;void 0!==d&&(P(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Z(e),[!1,void 0]}};
AHa=function(a){var b=new iz,c=0;try{var d=a.resolutionWidth;void 0!==d&&(Hj(b,1,d),c++);var e=a.resolutionHeight;void 0!==e&&(Hj(b,2,e),c++);var f=a.frameRate;void 0!==f&&(Lj(b,3,f),c++);var h=a.durationMs;void 0!==h&&(Kj(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return Z(l),[!1,void 0]}};
wHa=function(a){var b=new lz,c=0;try{var d=a.incomingSegment;if(d){var e=vHa(d);e[0]&&(N(b,kz,1,e[1]),c++)}var f=a.outgoingSegment;if(f){var h=vHa(f);h[0]&&(N(b,kz,2,h[1]),c++)}var l=a.durationMs;void 0!==l&&(Kj(b,3,l),c++);return[c===Object.keys(a).length,b]}catch(m){return Z(m),[!1,void 0]}};
BHa=function(a){var b=new cz,c=0;try{var d=a.previewWidth;void 0!==d&&(Hj(b,1,d),c++);var e=a.previewHeight;void 0!==e&&(Hj(b,2,e),c++);var f=a.fps;void 0!==f&&(Hj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Z(h),[!1,void 0]}};
AIa=function(a){var b=new SA,c=0;try{var d=a.encryptedVideoId;void 0!==d&&(P(b,1,d),c++);var e=a.cotn;void 0!==e&&(P(b,20,e),c++);var f=a.cpn;void 0!==f&&(P(b,30,f),c++);var h=a.transferStatusType;void 0!==h&&(R(b,38,CHa[h]),c++);var l=a.statusType;void 0!==l&&(R(b,2,DHa[l]),c++);var m=a.failureReason;void 0!==m&&(R(b,3,EHa[m]),c++);var n=a.transferFailureReason;void 0!==n&&(R(b,41,FHa[n]),c++);var p=a.failureExceptionType;void 0!==p&&(P(b,37,p),c++);var q=a.totalFetchedKbytes;void 0!==q&&(Jj(b,4,
q),c++);var r=a.diskAvailableKbytes;void 0!==r&&(Jj(b,5,r),c++);var t=a.totalContentKbytes;void 0!==t&&(Jj(b,21,t),c++);var v=a.alreadyDownloadedKbytes;void 0!==v&&(Jj(b,22,v),c++);var x=a.fetchedFromCacheKbytes;void 0!==x&&(Jj(b,23,x),c++);var C=a.systemHealth;if(C){var F=new Wz,G=0;try{var H=C.tag;void 0!==H&&(R(F,1,GHa[H]),G++);var O=C.staticContext;if(O){var Q=new Rz,X=0;try{var ia=O.displayDensityDpi;void 0!==ia&&(Hj(Q,1,ia),X++);var qa=O.heightPixels;void 0!==qa&&(Hj(Q,2,qa),X++);var ra=O.widthPixels;
void 0!==ra&&(Hj(Q,3,ra),X++);var ma=O.memoryTotalKbytes;void 0!==ma&&(Jj(Q,4,ma),X++);var sa=O.osSdkVersion;void 0!==sa&&(Hj(Q,5,sa),X++);var ea=O.osIncrementalVersion;void 0!==ea&&(P(Q,6,ea),X++);var za=O.hardwareArchitecture;void 0!==za&&(P(Q,7,za),X++);var ba=O.appVersionCode;void 0!==ba&&(Hj(Q,8,ba),X++);var Ta=O.devicePixelRatio;void 0!==Ta&&(Lj(Q,9,Ta),X++);var y=O.buildFingerprint;void 0!==y&&(P(Q,10,y),X++);var V=O.socManufacturer;void 0!==V&&(P(Q,11,V),X++);var eb=O.socModel;void 0!==eb&&
(P(Q,12,eb),X++);var kb=O.availableProcessors;void 0!==kb&&(Hj(Q,13,kb),X++);var Xa=O.cpuCores;void 0!==Xa&&(Hj(Q,14,Xa),X++);var Qa=O.heightPoints;void 0!==Qa&&(Hj(Q,15,Qa),X++);var fb=O.widthPoints;void 0!==fb&&(Hj(Q,16,fb),X++);var pb=O.androidMediaPerformanceClass;void 0!==pb&&(Hj(Q,17,pb),X++);var La=[X===Object.keys(O).length,Q]}catch(qb){Z(qb),La=[!1,void 0]}var xb=La;xb[0]&&(N(F,Rz,2,xb[1]),G++)}var cb=C.dynamicContext;if(cb){var A=new Lz,D=0;try{var E=cb.screenOn;void 0!==E&&(Gj(A,1,E),D++);
var B=cb.deviceRotation;void 0!==B&&(Hj(A,2,B),D++);var K=cb.networkType;void 0!==K&&(Hj(A,3,K),D++);var Y=cb.networkCoarseState;void 0!==Y&&(Hj(A,4,Y),D++);var la=cb.chargingStatus;void 0!==la&&(R(A,5,HHa[la]),D++);var ua=cb.isInForeground;void 0!==ua&&(Gj(A,6,ua),D++);var da=cb.viewportHeightPixels;void 0!==da&&(Hj(A,7,da),D++);var fa=cb.viewportWidthPixels;void 0!==fa&&(Hj(A,8,fa),D++);var Ea=cb.hasCoarsePointer;void 0!==Ea&&(Gj(A,9,Ea),D++);var xa=cb.hasFinePointer;void 0!==xa&&(Gj(A,10,xa),D++);
var db=cb.hasHoverSupport;void 0!==db&&(Gj(A,11,db),D++);var Ub=cb.deviceFreeStorageMbytes;void 0!==Ub&&(Jj(A,12,Ub),D++);var Kb=cb.deviceStorageQuotaMbytes;void 0!==Kb&&(Jj(A,13,Kb),D++);var Sb=cb.deviceStorageUsageMbytes;void 0!==Sb&&(Jj(A,14,Sb),D++);var yb=cb.processUptimeMs;void 0!==yb&&(Jj(A,15,yb),D++);var Nb=cb.hasAppShell;void 0!==Nb&&(Gj(A,16,Nb),D++);var Yc=cb.glVersion;void 0!==Yc&&(P(A,17,Yc),D++);var xc=cb.glRenderer;void 0!==xc&&(P(A,18,xc),D++);var dd=cb.srsDatapushBuildIds;dd&&(aP(A.B.bind(A),
dd,IHa),D++);var Zc=cb.playerDatapushBuildIds;Zc&&(aP(A.j.bind(A),Zc,JHa),D++);var ld=cb.creationContext;if(ld){var md=new Jz,Xb=0;try{var Nd=ld.activeFrontendUploadId;void 0!==Nd&&(P(md,1,Nd),Xb++);var Ud=ld.inShortsCreation;void 0!==Ud&&(Gj(md,2,Ud),Xb++);var cc=ld.activeEffectLoggingIds;cc&&(aP(md.j.bind(md),cc,KHa),Xb++);var ac=ld.activePages;void 0!==ac&&(bP(md.B.bind(md),ac,LHa),Xb++);var $c=[Xb===Object.keys(ld).length,md]}catch(qb){Z(qb),$c=[!1,void 0]}var Ob=$c;Ob[0]&&(N(A,Jz,21,Ob[1]),D++)}var Gd=
cb.kimonoContext;if(Gd){var Vd=new Kz,Tb=0;try{var pf=Gd.cobaltUserAgent;void 0!==pf&&(P(Vd,1,pf),Tb++);var Je=Gd.webAppVersion;void 0!==Je&&(P(Vd,2,Je),Tb++);var Ke=Gd.cobaltVersion;void 0!==Ke&&(P(Vd,3,Ke),Tb++);var ve=Gd.webAppInterface;void 0!==ve&&(R(Vd,4,MHa[ve]),Tb++);var ch=Gd.clientDocumentNonce;void 0!==ch&&(P(Vd,5,ch),Tb++);var Cg=Gd.applicationState;void 0!==Cg&&(R(Vd,6,NHa[Cg]),Tb++);var dh=[Tb===Object.keys(Gd).length,Vd]}catch(qb){Z(qb),dh=[!1,void 0]}var eh=dh;eh[0]&&(N(A,Kz,22,eh[1]),
D++)}var fh=[D===Object.keys(cb).length,A]}catch(qb){Z(qb),fh=[!1,void 0]}var gh=fh;gh[0]&&(N(F,Lz,3,gh[1]),G++)}var Le=C.serializedPrimesMetric;void 0!==Le&&(Nj(F,4,Le),G++);var Ye=C.serializedIosPrimesMetric;void 0!==Ye&&(Nj(F,6,Ye),G++);var ad=C.webMetric;if(ad){var ie=new Tz,Ad=0;try{var hh=ad.currentHeapKbytes;void 0!==hh&&(Hj(ie,1,hh),Ad++);var ih=ad.navigationCount;void 0!==ih&&(Hj(ie,2,ih),Ad++);var Od=[Ad===Object.keys(ad).length,ie]}catch(qb){Z(qb),Od=[!1,void 0]}var Dg=Od;Dg[0]&&(N(F,Tz,
7,Dg[1]),G++)}var Ze=C.crashData;if(Ze){var tc=new Fz,Mf=0;try{var jh=Ze.stackTrace;void 0!==jh&&(P(tc,1,jh),Mf++);var Qh=Ze.screenVeType;void 0!==Qh&&(Hj(tc,2,Qh),Mf++);var vi=Ze.compactStackTrace;if(vi){var qf=kP(vi);qf[0]&&(N(tc,Sy,3,qf[1]),Mf++)}var Nf=Ze.crashTimeMs;void 0!==Nf&&(Jj(tc,4,Nf),Mf++);var $e=Ze.clientError;if($e){var Eg=new Ez,Of=0;try{var Dc=$e.errorMetadata;if(Dc){var yc=new sz,ed=0;try{var ij=Dc.exceptionCategory;void 0!==ij&&(R(yc,1,OHa[ij]),ed++);var we=Dc.serviceTrackingData;
if(we){var Oc=new bz,af=0;try{var wi=we.innertubeBuildChangelist;void 0!==wi&&(Jj(Oc,1,wi),af++);var xi=we.innertubeBuildExperimentsSourceVersion;void 0!==xi&&(Jj(Oc,2,xi),af++);var Rh=we.innertubeBuildLabel;void 0!==Rh&&(P(Oc,3,Rh),af++);var Fg=we.innertubeBuildTimestampSec;void 0!==Fg&&(Jj(Oc,4,Fg),af++);var Sh=we.innertubeBuildVariantsChecksum;void 0!==Sh&&(P(Oc,5,Sh),af++);var Pf=we.innertubeJobName;void 0!==Pf&&(P(Oc,6,Pf),af++);var jj=[af===Object.keys(we).length,Oc]}catch(qb){Z(qb),jj=[!1,
void 0]}var rf=jj;rf[0]&&(N(yc,bz,2,rf[1]),ed++)}var Gg=Dc.pageUrl;void 0!==Gg&&(P(yc,3,Gg),ed++);var xe=Dc.kvPairs;xe&&(aP(yc.j.bind(yc),xe,PHa),ed++);var kj=Dc.experimentIds;kj&&(aP(yc.B.bind(yc),kj),ed++);var Hg=Dc.playerMetadata;if(Hg){var Ig=new rz,Jg=0;try{var kh=Hg.error;void 0!==kh&&(bP(Ig.j.bind(Ig),kh,QHa),Jg++);var Me=Hg.stackTrace;void 0!==Me&&(P(Ig,2,Me),Jg++);var Ne=[Jg===Object.keys(Hg).length,Ig]}catch(qb){Z(qb),Ne=[!1,void 0]}var ye=Ne;ye[0]&&(N(yc,rz,6,ye[1]),ed++)}var Bf=Dc.exceptionType;
void 0!==Bf&&(R(yc,7,RHa[Bf]),ed++);var Qj=Dc.clientScreenNonce;void 0!==Qj&&(P(yc,8,Qj),ed++);var bf=Dc.blocksMethodExecutionInfo;if(bf){var Oe=new $y,Wd=0;try{var lh=bf.methodId;void 0!==lh&&(Ij(Oe,1,lh),Wd++);var Kg=bf.blockTypeId;void 0!==Kg&&(Ij(Oe,2,Kg),Wd++);var Qf=bf.methodType;void 0!==Qf&&(R(Oe,3,SHa[Qf]),Wd++);var Lg=bf.requestSize;void 0!==Lg&&(Ij(Oe,4,Lg),Wd++);var jg=bf.responseSize;void 0!==jg&&(Ij(Oe,5,jg),Wd++);var Th=bf.statusCode;void 0!==Th&&(Ij(Oe,6,Th),Wd++);var yi=bf.containerId;
void 0!==yi&&(Ij(Oe,7,yi),Wd++);var Uh=bf.moduleIdentifier;void 0!==Uh&&(P(Oe,8,Uh),Wd++);var Jl=bf.datapushBuildId;void 0!==Jl&&(Kj(Oe,9,Jl),Wd++);var Kl=bf.attribution;void 0!==Kl&&(R(Oe,10,THa[Kl]),Wd++);var Rj=[Wd===Object.keys(bf).length,Oe]}catch(qb){Z(qb),Rj=[!1,void 0]}var lj=Rj;lj[0]&&(N(yc,$y,9,lj[1]),ed++)}var Xd=Dc.mediaEngineMetadata;if(Xd){var ze=new g.pz,Pd=0;try{var zi=Xd.client;void 0!==zi&&(ze.Qw(UHa[zi]),Pd++);var Ll=Xd.mdeErrorType;void 0!==Ll&&(R(ze,2,VHa[Ll]),Pd++);var Pk=Xd.uploadId;
void 0!==Pk&&(P(ze,3,Pk),Pd++);var Sj=Xd.composition;Sj&&(aP(ze.j.bind(ze),Sj,xHa),Pd++);var mj=Xd.player;if(mj){var Tj=new nz,Cf=0;try{var Uj=mj.state;void 0!==Uj&&(Tj.Gc(WHa[Uj]),Cf++);var Ai=mj.playbackPositionTimeMs;void 0!==Ai&&(Jj(Tj,2,Ai),Cf++);var Ml=[Cf===Object.keys(mj).length,Tj]}catch(qb){Z(qb),Ml=[!1,void 0]}var Vj=Ml;Vj[0]&&(N(ze,nz,5,Vj[1]),Pd++)}var Vh=Xd.exporter;if(Vh){var nj=new gz,mh=0;try{var kg=Vh.settings;if(kg){var Rf=new fz,Pe=0;try{var Qk=kg.audioChannelCount;void 0!==Qk&&
(Hj(Rf,1,Qk),Pe++);var Nl=kg.resolutionWidth;void 0!==Nl&&(Hj(Rf,2,Nl),Pe++);var Ol=kg.resolutionHeight;void 0!==Ol&&(Hj(Rf,3,Ol),Pe++);var Sf=[Pe===Object.keys(kg).length,Rf]}catch(qb){Z(qb),Sf=[!1,void 0]}var Qe=Sf;Qe[0]&&(nj.lh(Qe[1]),mh++)}var sf=Vh.state;void 0!==sf&&(nj.Gc(XHa[sf]),mh++);var cf=Vh.durationMs;void 0!==cf&&(Kj(nj,3,cf),mh++);var Rk=Vh.progressMs;void 0!==Rk&&(Kj(nj,4,Rk),mh++);var Sk=[mh===Object.keys(Vh).length,nj]}catch(qb){Z(qb),Sk=[!1,void 0]}var Pl=Sk;Pl[0]&&(N(ze,gz,6,Pl[1]),
Pd++)}var oj=Xd.projectId;void 0!==oj&&(P(ze,7,oj),Pd++);var gc=Xd.deviceInfo;if(gc){var k