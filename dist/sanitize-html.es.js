var ir = Object.defineProperty, nr = Object.defineProperties;
var ar = Object.getOwnPropertyDescriptors;
var Oe = Object.getOwnPropertySymbols;
var Mt = Object.prototype.hasOwnProperty, kt = Object.prototype.propertyIsEnumerable;
var Rt = (u, S, v) => S in u ? ir(u, S, { enumerable: !0, configurable: !0, writable: !0, value: v }) : u[S] = v, ae = (u, S) => {
  for (var v in S || (S = {}))
    Mt.call(S, v) && Rt(u, v, S[v]);
  if (Oe)
    for (var v of Oe(S))
      kt.call(S, v) && Rt(u, v, S[v]);
  return u;
}, we = (u, S) => nr(u, ar(S));
var ze = (u, S) => {
  var v = {};
  for (var d in u)
    Mt.call(u, d) && S.indexOf(d) < 0 && (v[d] = u[d]);
  if (u != null && Oe)
    for (var d of Oe(u))
      S.indexOf(d) < 0 && kt.call(u, d) && (v[d] = u[d]);
  return v;
};
var jt = (u, S, v) => new Promise((d, b) => {
  var x = (g) => {
    try {
      h(v.next(g));
    } catch (i) {
      b(i);
    }
  }, o = (g) => {
    try {
      h(v.throw(g));
    } catch (i) {
      b(i);
    }
  }, h = (g) => g.done ? d(g.value) : Promise.resolve(g.value).then(x, o);
  h((v = v.apply(u, S)).next());
});
function sr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function or(u) {
  if (Object.prototype.hasOwnProperty.call(u, "__esModule")) return u;
  var S = u.default;
  if (typeof S == "function") {
    var v = function d() {
      var b = !1;
      try {
        b = this instanceof d;
      } catch (x) {
      }
      return b ? Reflect.construct(S, arguments, this.constructor) : S.apply(this, arguments);
    };
    v.prototype = S.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(u).forEach(function(d) {
    var b = Object.getOwnPropertyDescriptor(u, d);
    Object.defineProperty(v, d, b.get ? b : {
      enumerable: !0,
      get: function() {
        return u[d];
      }
    });
  }), v;
}
var Y = {}, K = {}, Ge = {}, ee = {}, Ne = {}, Bt;
function cr() {
  return Bt || (Bt = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.default = new Uint16Array(
    // prettier-ignore
    'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(u) {
      return u.charCodeAt(0);
    })
  )), Ne;
}
var _e = {}, Ut;
function lr() {
  return Ut || (Ut = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.default = new Uint16Array(
    // prettier-ignore
    "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(u) {
      return u.charCodeAt(0);
    })
  )), _e;
}
var We = {}, Ht;
function Ft() {
  return Ht || (Ht = 1, (function(u) {
    var S;
    Object.defineProperty(u, "__esModule", { value: !0 }), u.replaceCodePoint = u.fromCodePoint = void 0;
    var v = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    u.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (S = String.fromCodePoint) !== null && S !== void 0 ? S : function(x) {
      var o = "";
      return x > 65535 && (x -= 65536, o += String.fromCharCode(x >>> 10 & 1023 | 55296), x = 56320 | x & 1023), o += String.fromCharCode(x), o;
    };
    function d(x) {
      var o;
      return x >= 55296 && x <= 57343 || x > 1114111 ? 65533 : (o = v.get(x)) !== null && o !== void 0 ? o : x;
    }
    u.replaceCodePoint = d;
    function b(x) {
      return (0, u.fromCodePoint)(d(x));
    }
    u.default = b;
  })(We)), We;
}
var Vt;
function Re() {
  return Vt || (Vt = 1, (function(u) {
    var S = ee && ee.__createBinding || (Object.create ? (function(E, O, D, L) {
      L === void 0 && (L = D);
      var N = Object.getOwnPropertyDescriptor(O, D);
      (!N || ("get" in N ? !O.__esModule : N.writable || N.configurable)) && (N = { enumerable: !0, get: function() {
        return O[D];
      } }), Object.defineProperty(E, L, N);
    }) : (function(E, O, D, L) {
      L === void 0 && (L = D), E[L] = O[D];
    })), v = ee && ee.__setModuleDefault || (Object.create ? (function(E, O) {
      Object.defineProperty(E, "default", { enumerable: !0, value: O });
    }) : function(E, O) {
      E.default = O;
    }), d = ee && ee.__importStar || function(E) {
      if (E && E.__esModule) return E;
      var O = {};
      if (E != null) for (var D in E) D !== "default" && Object.prototype.hasOwnProperty.call(E, D) && S(O, E, D);
      return v(O, E), O;
    }, b = ee && ee.__importDefault || function(E) {
      return E && E.__esModule ? E : { default: E };
    };
    Object.defineProperty(u, "__esModule", { value: !0 }), u.decodeXML = u.decodeHTMLStrict = u.decodeHTMLAttribute = u.decodeHTML = u.determineBranch = u.EntityDecoder = u.DecodingMode = u.BinTrieFlags = u.fromCodePoint = u.replaceCodePoint = u.decodeCodePoint = u.xmlDecodeTree = u.htmlDecodeTree = void 0;
    var x = b(/* @__PURE__ */ cr());
    u.htmlDecodeTree = x.default;
    var o = b(/* @__PURE__ */ lr());
    u.xmlDecodeTree = o.default;
    var h = d(/* @__PURE__ */ Ft());
    u.decodeCodePoint = h.default;
    var g = /* @__PURE__ */ Ft();
    Object.defineProperty(u, "replaceCodePoint", { enumerable: !0, get: function() {
      return g.replaceCodePoint;
    } }), Object.defineProperty(u, "fromCodePoint", { enumerable: !0, get: function() {
      return g.fromCodePoint;
    } });
    var i;
    (function(E) {
      E[E.NUM = 35] = "NUM", E[E.SEMI = 59] = "SEMI", E[E.EQUALS = 61] = "EQUALS", E[E.ZERO = 48] = "ZERO", E[E.NINE = 57] = "NINE", E[E.LOWER_A = 97] = "LOWER_A", E[E.LOWER_F = 102] = "LOWER_F", E[E.LOWER_X = 120] = "LOWER_X", E[E.LOWER_Z = 122] = "LOWER_Z", E[E.UPPER_A = 65] = "UPPER_A", E[E.UPPER_F = 70] = "UPPER_F", E[E.UPPER_Z = 90] = "UPPER_Z";
    })(i || (i = {}));
    var r = 32, c;
    (function(E) {
      E[E.VALUE_LENGTH = 49152] = "VALUE_LENGTH", E[E.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", E[E.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(c = u.BinTrieFlags || (u.BinTrieFlags = {}));
    function e(E) {
      return E >= i.ZERO && E <= i.NINE;
    }
    function t(E) {
      return E >= i.UPPER_A && E <= i.UPPER_F || E >= i.LOWER_A && E <= i.LOWER_F;
    }
    function s(E) {
      return E >= i.UPPER_A && E <= i.UPPER_Z || E >= i.LOWER_A && E <= i.LOWER_Z || e(E);
    }
    function y(E) {
      return E === i.EQUALS || s(E);
    }
    var p;
    (function(E) {
      E[E.EntityStart = 0] = "EntityStart", E[E.NumericStart = 1] = "NumericStart", E[E.NumericDecimal = 2] = "NumericDecimal", E[E.NumericHex = 3] = "NumericHex", E[E.NamedEntity = 4] = "NamedEntity";
    })(p || (p = {}));
    var n;
    (function(E) {
      E[E.Legacy = 0] = "Legacy", E[E.Strict = 1] = "Strict", E[E.Attribute = 2] = "Attribute";
    })(n = u.DecodingMode || (u.DecodingMode = {}));
    var f = (
      /** @class */
      (function() {
        function E(O, D, L) {
          this.decodeTree = O, this.emitCodePoint = D, this.errors = L, this.state = p.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = n.Strict;
        }
        return E.prototype.startEntity = function(O) {
          this.decodeMode = O, this.state = p.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }, E.prototype.write = function(O, D) {
          switch (this.state) {
            case p.EntityStart:
              return O.charCodeAt(D) === i.NUM ? (this.state = p.NumericStart, this.consumed += 1, this.stateNumericStart(O, D + 1)) : (this.state = p.NamedEntity, this.stateNamedEntity(O, D));
            case p.NumericStart:
              return this.stateNumericStart(O, D);
            case p.NumericDecimal:
              return this.stateNumericDecimal(O, D);
            case p.NumericHex:
              return this.stateNumericHex(O, D);
            case p.NamedEntity:
              return this.stateNamedEntity(O, D);
          }
        }, E.prototype.stateNumericStart = function(O, D) {
          return D >= O.length ? -1 : (O.charCodeAt(D) | r) === i.LOWER_X ? (this.state = p.NumericHex, this.consumed += 1, this.stateNumericHex(O, D + 1)) : (this.state = p.NumericDecimal, this.stateNumericDecimal(O, D));
        }, E.prototype.addToNumericResult = function(O, D, L, N) {
          if (D !== L) {
            var j = L - D;
            this.result = this.result * Math.pow(N, j) + parseInt(O.substr(D, j), N), this.consumed += j;
          }
        }, E.prototype.stateNumericHex = function(O, D) {
          for (var L = D; D < O.length; ) {
            var N = O.charCodeAt(D);
            if (e(N) || t(N))
              D += 1;
            else
              return this.addToNumericResult(O, L, D, 16), this.emitNumericEntity(N, 3);
          }
          return this.addToNumericResult(O, L, D, 16), -1;
        }, E.prototype.stateNumericDecimal = function(O, D) {
          for (var L = D; D < O.length; ) {
            var N = O.charCodeAt(D);
            if (e(N))
              D += 1;
            else
              return this.addToNumericResult(O, L, D, 10), this.emitNumericEntity(N, 2);
          }
          return this.addToNumericResult(O, L, D, 10), -1;
        }, E.prototype.emitNumericEntity = function(O, D) {
          var L;
          if (this.consumed <= D)
            return (L = this.errors) === null || L === void 0 || L.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          if (O === i.SEMI)
            this.consumed += 1;
          else if (this.decodeMode === n.Strict)
            return 0;
          return this.emitCodePoint((0, h.replaceCodePoint)(this.result), this.consumed), this.errors && (O !== i.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }, E.prototype.stateNamedEntity = function(O, D) {
          for (var L = this.decodeTree, N = L[this.treeIndex], j = (N & c.VALUE_LENGTH) >> 14; D < O.length; D++, this.excess++) {
            var B = O.charCodeAt(D);
            if (this.treeIndex = l(L, N, this.treeIndex + Math.max(1, j), B), this.treeIndex < 0)
              return this.result === 0 || // If we are parsing an attribute
              this.decodeMode === n.Attribute && // We shouldn't have consumed any characters after the entity,
              (j === 0 || // And there should be no invalid characters.
              y(B)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (N = L[this.treeIndex], j = (N & c.VALUE_LENGTH) >> 14, j !== 0) {
              if (B === i.SEMI)
                return this.emitNamedEntityData(this.treeIndex, j, this.consumed + this.excess);
              this.decodeMode !== n.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
          }
          return -1;
        }, E.prototype.emitNotTerminatedNamedEntity = function() {
          var O, D = this, L = D.result, N = D.decodeTree, j = (N[L] & c.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(L, j, this.consumed), (O = this.errors) === null || O === void 0 || O.missingSemicolonAfterCharacterReference(), this.consumed;
        }, E.prototype.emitNamedEntityData = function(O, D, L) {
          var N = this.decodeTree;
          return this.emitCodePoint(D === 1 ? N[O] & ~c.VALUE_LENGTH : N[O + 1], L), D === 3 && this.emitCodePoint(N[O + 2], L), L;
        }, E.prototype.end = function() {
          var O;
          switch (this.state) {
            case p.NamedEntity:
              return this.result !== 0 && (this.decodeMode !== n.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            // Otherwise, emit a numeric entity if we have one.
            case p.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case p.NumericHex:
              return this.emitNumericEntity(0, 3);
            case p.NumericStart:
              return (O = this.errors) === null || O === void 0 || O.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case p.EntityStart:
              return 0;
          }
        }, E;
      })()
    );
    u.EntityDecoder = f;
    function m(E) {
      var O = "", D = new f(E, function(L) {
        return O += (0, h.fromCodePoint)(L);
      });
      return function(N, j) {
        for (var B = 0, V = 0; (V = N.indexOf("&", V)) >= 0; ) {
          O += N.slice(B, V), D.startEntity(j);
          var G = D.write(
            N,
            // Skip the "&"
            V + 1
          );
          if (G < 0) {
            B = V + D.end();
            break;
          }
          B = V + G, V = G === 0 ? B + 1 : B;
        }
        var W = O + N.slice(B);
        return O = "", W;
      };
    }
    function l(E, O, D, L) {
      var N = (O & c.BRANCH_LENGTH) >> 7, j = O & c.JUMP_TABLE;
      if (N === 0)
        return j !== 0 && L === j ? D : -1;
      if (j) {
        var B = L - j;
        return B < 0 || B >= N ? -1 : E[D + B] - 1;
      }
      for (var V = D, G = V + N - 1; V <= G; ) {
        var W = V + G >>> 1, re = E[W];
        if (re < L)
          V = W + 1;
        else if (re > L)
          G = W - 1;
        else
          return E[W + N];
      }
      return -1;
    }
    u.determineBranch = l;
    var a = m(x.default), w = m(o.default);
    function T(E, O) {
      return O === void 0 && (O = n.Legacy), a(E, O);
    }
    u.decodeHTML = T;
    function A(E) {
      return a(E, n.Attribute);
    }
    u.decodeHTMLAttribute = A;
    function I(E) {
      return a(E, n.Strict);
    }
    u.decodeHTMLStrict = I;
    function q(E) {
      return w(E, n.Strict);
    }
    u.decodeXML = q;
  })(ee)), ee;
}
var zt;
function Wu() {
  return zt || (zt = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.QuoteType = void 0;
    var S = /* @__PURE__ */ Re(), v;
    (function(e) {
      e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket";
    })(v || (v = {}));
    var d;
    (function(e) {
      e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.SpecialStartSequence = 23] = "SpecialStartSequence", e[e.InSpecialTag = 24] = "InSpecialTag", e[e.BeforeEntity = 25] = "BeforeEntity", e[e.BeforeNumericEntity = 26] = "BeforeNumericEntity", e[e.InNamedEntity = 27] = "InNamedEntity", e[e.InNumericEntity = 28] = "InNumericEntity", e[e.InHexEntity = 29] = "InHexEntity";
    })(d || (d = {}));
    function b(e) {
      return e === v.Space || e === v.NewLine || e === v.Tab || e === v.FormFeed || e === v.CarriageReturn;
    }
    function x(e) {
      return e === v.Slash || e === v.Gt || b(e);
    }
    function o(e) {
      return e >= v.Zero && e <= v.Nine;
    }
    function h(e) {
      return e >= v.LowerA && e <= v.LowerZ || e >= v.UpperA && e <= v.UpperZ;
    }
    function g(e) {
      return e >= v.UpperA && e <= v.UpperF || e >= v.LowerA && e <= v.LowerF;
    }
    var i;
    (function(e) {
      e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double";
    })(i = u.QuoteType || (u.QuoteType = {}));
    var r = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
      // `</title`
    }, c = (
      /** @class */
      (function() {
        function e(t, s) {
          var y = t.xmlMode, p = y === void 0 ? !1 : y, n = t.decodeEntities, f = n === void 0 ? !0 : n;
          this.cbs = s, this.state = d.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = d.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = p, this.decodeEntities = f, this.entityTrie = p ? S.xmlDecodeTree : S.htmlDecodeTree;
        }
        return e.prototype.reset = function() {
          this.state = d.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = d.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
        }, e.prototype.write = function(t) {
          this.offset += this.buffer.length, this.buffer = t, this.parse();
        }, e.prototype.end = function() {
          this.running && this.finish();
        }, e.prototype.pause = function() {
          this.running = !1;
        }, e.prototype.resume = function() {
          this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
        }, e.prototype.getIndex = function() {
          return this.index;
        }, e.prototype.getSectionStart = function() {
          return this.sectionStart;
        }, e.prototype.stateText = function(t) {
          t === v.Lt || !this.decodeEntities && this.fastForwardTo(v.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = d.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === v.Amp && (this.state = d.BeforeEntity);
        }, e.prototype.stateSpecialStartSequence = function(t) {
          var s = this.sequenceIndex === this.currentSequence.length, y = s ? (
            // If we are at the end of the sequence, make sure the tag name has ended
            x(t)
          ) : (
            // Otherwise, do a case-insensitive comparison
            (t | 32) === this.currentSequence[this.sequenceIndex]
          );
          if (!y)
            this.isSpecial = !1;
          else if (!s) {
            this.sequenceIndex++;
            return;
          }
          this.sequenceIndex = 0, this.state = d.InTagName, this.stateInTagName(t);
        }, e.prototype.stateInSpecialTag = function(t) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (t === v.Gt || b(t)) {
              var s = this.index - this.currentSequence.length;
              if (this.sectionStart < s) {
                var y = this.index;
                this.index = s, this.cbs.ontext(this.sectionStart, s), this.index = y;
              }
              this.isSpecial = !1, this.sectionStart = s + 2, this.stateInClosingTagName(t);
              return;
            }
            this.sequenceIndex = 0;
          }
          (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === r.TitleEnd ? this.decodeEntities && t === v.Amp && (this.state = d.BeforeEntity) : this.fastForwardTo(v.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === v.Lt);
        }, e.prototype.stateCDATASequence = function(t) {
          t === r.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === r.Cdata.length && (this.state = d.InCommentLike, this.currentSequence = r.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = d.InDeclaration, this.stateInDeclaration(t));
        }, e.prototype.fastForwardTo = function(t) {
          for (; ++this.index < this.buffer.length + this.offset; )
            if (this.buffer.charCodeAt(this.index - this.offset) === t)
              return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }, e.prototype.stateInCommentLike = function(t) {
          t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === r.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = d.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }, e.prototype.isTagStartChar = function(t) {
          return this.xmlMode ? !x(t) : h(t);
        }, e.prototype.startSpecial = function(t, s) {
          this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = s, this.state = d.SpecialStartSequence;
        }, e.prototype.stateBeforeTagName = function(t) {
          if (t === v.ExclamationMark)
            this.state = d.BeforeDeclaration, this.sectionStart = this.index + 1;
          else if (t === v.Questionmark)
            this.state = d.InProcessingInstruction, this.sectionStart = this.index + 1;
          else if (this.isTagStartChar(t)) {
            var s = t | 32;
            this.sectionStart = this.index, !this.xmlMode && s === r.TitleEnd[2] ? this.startSpecial(r.TitleEnd, 3) : this.state = !this.xmlMode && s === r.ScriptEnd[2] ? d.BeforeSpecialS : d.InTagName;
          } else t === v.Slash ? this.state = d.BeforeClosingTagName : (this.state = d.Text, this.stateText(t));
        }, e.prototype.stateInTagName = function(t) {
          x(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(t));
        }, e.prototype.stateBeforeClosingTagName = function(t) {
          b(t) || (t === v.Gt ? this.state = d.Text : (this.state = this.isTagStartChar(t) ? d.InClosingTagName : d.InSpecialComment, this.sectionStart = this.index));
        }, e.prototype.stateInClosingTagName = function(t) {
          (t === v.Gt || b(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = d.AfterClosingTagName, this.stateAfterClosingTagName(t));
        }, e.prototype.stateAfterClosingTagName = function(t) {
          (t === v.Gt || this.fastForwardTo(v.Gt)) && (this.state = d.Text, this.baseState = d.Text, this.sectionStart = this.index + 1);
        }, e.prototype.stateBeforeAttributeName = function(t) {
          t === v.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = d.InSpecialTag, this.sequenceIndex = 0) : this.state = d.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : t === v.Slash ? this.state = d.InSelfClosingTag : b(t) || (this.state = d.InAttributeName, this.sectionStart = this.index);
        }, e.prototype.stateInSelfClosingTag = function(t) {
          t === v.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = d.Text, this.baseState = d.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : b(t) || (this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(t));
        }, e.prototype.stateInAttributeName = function(t) {
          (t === v.Eq || x(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = d.AfterAttributeName, this.stateAfterAttributeName(t));
        }, e.prototype.stateAfterAttributeName = function(t) {
          t === v.Eq ? this.state = d.BeforeAttributeValue : t === v.Slash || t === v.Gt ? (this.cbs.onattribend(i.NoValue, this.index), this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(t)) : b(t) || (this.cbs.onattribend(i.NoValue, this.index), this.state = d.InAttributeName, this.sectionStart = this.index);
        }, e.prototype.stateBeforeAttributeValue = function(t) {
          t === v.DoubleQuote ? (this.state = d.InAttributeValueDq, this.sectionStart = this.index + 1) : t === v.SingleQuote ? (this.state = d.InAttributeValueSq, this.sectionStart = this.index + 1) : b(t) || (this.sectionStart = this.index, this.state = d.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t));
        }, e.prototype.handleInAttributeValue = function(t, s) {
          t === s || !this.decodeEntities && this.fastForwardTo(s) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(s === v.DoubleQuote ? i.Double : i.Single, this.index), this.state = d.BeforeAttributeName) : this.decodeEntities && t === v.Amp && (this.baseState = this.state, this.state = d.BeforeEntity);
        }, e.prototype.stateInAttributeValueDoubleQuotes = function(t) {
          this.handleInAttributeValue(t, v.DoubleQuote);
        }, e.prototype.stateInAttributeValueSingleQuotes = function(t) {
          this.handleInAttributeValue(t, v.SingleQuote);
        }, e.prototype.stateInAttributeValueNoQuotes = function(t) {
          b(t) || t === v.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(i.Unquoted, this.index), this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === v.Amp && (this.baseState = this.state, this.state = d.BeforeEntity);
        }, e.prototype.stateBeforeDeclaration = function(t) {
          t === v.OpeningSquareBracket ? (this.state = d.CDATASequence, this.sequenceIndex = 0) : this.state = t === v.Dash ? d.BeforeComment : d.InDeclaration;
        }, e.prototype.stateInDeclaration = function(t) {
          (t === v.Gt || this.fastForwardTo(v.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = d.Text, this.sectionStart = this.index + 1);
        }, e.prototype.stateInProcessingInstruction = function(t) {
          (t === v.Gt || this.fastForwardTo(v.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = d.Text, this.sectionStart = this.index + 1);
        }, e.prototype.stateBeforeComment = function(t) {
          t === v.Dash ? (this.state = d.InCommentLike, this.currentSequence = r.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = d.InDeclaration;
        }, e.prototype.stateInSpecialComment = function(t) {
          (t === v.Gt || this.fastForwardTo(v.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = d.Text, this.sectionStart = this.index + 1);
        }, e.prototype.stateBeforeSpecialS = function(t) {
          var s = t | 32;
          s === r.ScriptEnd[3] ? this.startSpecial(r.ScriptEnd, 4) : s === r.StyleEnd[3] ? this.startSpecial(r.StyleEnd, 4) : (this.state = d.InTagName, this.stateInTagName(t));
        }, e.prototype.stateBeforeEntity = function(t) {
          this.entityExcess = 1, this.entityResult = 0, t === v.Number ? this.state = d.BeforeNumericEntity : t === v.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = d.InNamedEntity, this.stateInNamedEntity(t));
        }, e.prototype.stateInNamedEntity = function(t) {
          if (this.entityExcess += 1, this.trieIndex = (0, S.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, t), this.trieIndex < 0) {
            this.emitNamedEntity(), this.index--;
            return;
          }
          this.trieCurrent = this.entityTrie[this.trieIndex];
          var s = this.trieCurrent & S.BinTrieFlags.VALUE_LENGTH;
          if (s) {
            var y = (s >> 14) - 1;
            if (!this.allowLegacyEntity() && t !== v.Semi)
              this.trieIndex += y;
            else {
              var p = this.index - this.entityExcess + 1;
              p > this.sectionStart && this.emitPartial(this.sectionStart, p), this.entityResult = this.trieIndex, this.trieIndex += y, this.entityExcess = 0, this.sectionStart = this.index + 1, y === 0 && this.emitNamedEntity();
            }
          }
        }, e.prototype.emitNamedEntity = function() {
          if (this.state = this.baseState, this.entityResult !== 0) {
            var t = (this.entityTrie[this.entityResult] & S.BinTrieFlags.VALUE_LENGTH) >> 14;
            switch (t) {
              case 1: {
                this.emitCodePoint(this.entityTrie[this.entityResult] & ~S.BinTrieFlags.VALUE_LENGTH);
                break;
              }
              case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
              }
              case 3:
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
          }
        }, e.prototype.stateBeforeNumericEntity = function(t) {
          (t | 32) === v.LowerX ? (this.entityExcess++, this.state = d.InHexEntity) : (this.state = d.InNumericEntity, this.stateInNumericEntity(t));
        }, e.prototype.emitNumericEntity = function(t) {
          var s = this.index - this.entityExcess - 1, y = s + 2 + +(this.state === d.InHexEntity);
          y !== this.index && (s > this.sectionStart && this.emitPartial(this.sectionStart, s), this.sectionStart = this.index + Number(t), this.emitCodePoint((0, S.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
        }, e.prototype.stateInNumericEntity = function(t) {
          t === v.Semi ? this.emitNumericEntity(!0) : o(t) ? (this.entityResult = this.entityResult * 10 + (t - v.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
        }, e.prototype.stateInHexEntity = function(t) {
          t === v.Semi ? this.emitNumericEntity(!0) : o(t) ? (this.entityResult = this.entityResult * 16 + (t - v.Zero), this.entityExcess++) : g(t) ? (this.entityResult = this.entityResult * 16 + ((t | 32) - v.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
        }, e.prototype.allowLegacyEntity = function() {
          return !this.xmlMode && (this.baseState === d.Text || this.baseState === d.InSpecialTag);
        }, e.prototype.cleanup = function() {
          this.running && this.sectionStart !== this.index && (this.state === d.Text || this.state === d.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === d.InAttributeValueDq || this.state === d.InAttributeValueSq || this.state === d.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
        }, e.prototype.shouldContinue = function() {
          return this.index < this.buffer.length + this.offset && this.running;
        }, e.prototype.parse = function() {
          for (; this.shouldContinue(); ) {
            var t = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
              case d.Text: {
                this.stateText(t);
                break;
              }
              case d.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
              }
              case d.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
              }
              case d.CDATASequence: {
                this.stateCDATASequence(t);
                break;
              }
              case d.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
              }
              case d.InAttributeName: {
                this.stateInAttributeName(t);
                break;
              }
              case d.InCommentLike: {
                this.stateInCommentLike(t);
                break;
              }
              case d.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
              }
              case d.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
              }
              case d.InTagName: {
                this.stateInTagName(t);
                break;
              }
              case d.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
              }
              case d.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
              }
              case d.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
              }
              case d.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
              }
              case d.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
              }
              case d.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
              }
              case d.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
              }
              case d.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
              }
              case d.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
              }
              case d.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
              }
              case d.InDeclaration: {
                this.stateInDeclaration(t);
                break;
              }
              case d.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
              }
              case d.BeforeComment: {
                this.stateBeforeComment(t);
                break;
              }
              case d.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
              }
              case d.InNamedEntity: {
                this.stateInNamedEntity(t);
                break;
              }
              case d.BeforeEntity: {
                this.stateBeforeEntity(t);
                break;
              }
              case d.InHexEntity: {
                this.stateInHexEntity(t);
                break;
              }
              case d.InNumericEntity: {
                this.stateInNumericEntity(t);
                break;
              }
              default:
                this.stateBeforeNumericEntity(t);
            }
            this.index++;
          }
          this.cleanup();
        }, e.prototype.finish = function() {
          this.state === d.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
        }, e.prototype.handleTrailingData = function() {
          var t = this.buffer.length + this.offset;
          this.state === d.InCommentLike ? this.currentSequence === r.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === d.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === d.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === d.InTagName || this.state === d.BeforeAttributeName || this.state === d.BeforeAttributeValue || this.state === d.AfterAttributeName || this.state === d.InAttributeName || this.state === d.InAttributeValueSq || this.state === d.InAttributeValueDq || this.state === d.InAttributeValueNq || this.state === d.InClosingTagName || this.cbs.ontext(this.sectionStart, t);
        }, e.prototype.emitPartial = function(t, s) {
          this.baseState !== d.Text && this.baseState !== d.InSpecialTag ? this.cbs.onattribdata(t, s) : this.cbs.ontext(t, s);
        }, e.prototype.emitCodePoint = function(t) {
          this.baseState !== d.Text && this.baseState !== d.InSpecialTag ? this.cbs.onattribentity(t) : this.cbs.ontextentity(t);
        }, e;
      })()
    );
    u.default = c;
  })(Ge)), Ge;
}
var Gt;
function Wt() {
  if (Gt) return K;
  Gt = 1;
  var u = K && K.__createBinding || (Object.create ? (function(p, n, f, m) {
    m === void 0 && (m = f);
    var l = Object.getOwnPropertyDescriptor(n, f);
    (!l || ("get" in l ? !n.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return n[f];
    } }), Object.defineProperty(p, m, l);
  }) : (function(p, n, f, m) {
    m === void 0 && (m = f), p[m] = n[f];
  })), S = K && K.__setModuleDefault || (Object.create ? (function(p, n) {
    Object.defineProperty(p, "default", { enumerable: !0, value: n });
  }) : function(p, n) {
    p.default = n;
  }), v = K && K.__importStar || function(p) {
    if (p && p.__esModule) return p;
    var n = {};
    if (p != null) for (var f in p) f !== "default" && Object.prototype.hasOwnProperty.call(p, f) && u(n, p, f);
    return S(n, p), n;
  };
  Object.defineProperty(K, "__esModule", { value: !0 }), K.Parser = void 0;
  var d = v(/* @__PURE__ */ Wu()), b = /* @__PURE__ */ Re(), x = /* @__PURE__ */ new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
  ]), o = /* @__PURE__ */ new Set(["p"]), h = /* @__PURE__ */ new Set(["thead", "tbody"]), g = /* @__PURE__ */ new Set(["dd", "dt"]), i = /* @__PURE__ */ new Set(["rt", "rp"]), r = /* @__PURE__ */ new Map([
    ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
    ["th", /* @__PURE__ */ new Set(["th"])],
    ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
    ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
    ["li", /* @__PURE__ */ new Set(["li"])],
    ["p", o],
    ["h1", o],
    ["h2", o],
    ["h3", o],
    ["h4", o],
    ["h5", o],
    ["h6", o],
    ["select", x],
    ["input", x],
    ["output", x],
    ["button", x],
    ["datalist", x],
    ["textarea", x],
    ["option", /* @__PURE__ */ new Set(["option"])],
    ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
    ["dd", g],
    ["dt", g],
    ["address", o],
    ["article", o],
    ["aside", o],
    ["blockquote", o],
    ["details", o],
    ["div", o],
    ["dl", o],
    ["fieldset", o],
    ["figcaption", o],
    ["figure", o],
    ["footer", o],
    ["form", o],
    ["header", o],
    ["hr", o],
    ["main", o],
    ["nav", o],
    ["ol", o],
    ["pre", o],
    ["section", o],
    ["table", o],
    ["ul", o],
    ["rt", i],
    ["rp", i],
    ["tbody", h],
    ["tfoot", h]
  ]), c = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]), e = /* @__PURE__ */ new Set(["math", "svg"]), t = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
  ]), s = /\s|\//, y = (
    /** @class */
    (function() {
      function p(n, f) {
        f === void 0 && (f = {});
        var m, l, a, w, T;
        this.options = f, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = n != null ? n : {}, this.lowerCaseTagNames = (m = f.lowerCaseTags) !== null && m !== void 0 ? m : !f.xmlMode, this.lowerCaseAttributeNames = (l = f.lowerCaseAttributeNames) !== null && l !== void 0 ? l : !f.xmlMode, this.tokenizer = new ((a = f.Tokenizer) !== null && a !== void 0 ? a : d.default)(this.options, this), (T = (w = this.cbs).onparserinit) === null || T === void 0 || T.call(w, this);
      }
      return p.prototype.ontext = function(n, f) {
        var m, l, a = this.getSlice(n, f);
        this.endIndex = f - 1, (l = (m = this.cbs).ontext) === null || l === void 0 || l.call(m, a), this.startIndex = f;
      }, p.prototype.ontextentity = function(n) {
        var f, m, l = this.tokenizer.getSectionStart();
        this.endIndex = l - 1, (m = (f = this.cbs).ontext) === null || m === void 0 || m.call(f, (0, b.fromCodePoint)(n)), this.startIndex = l;
      }, p.prototype.isVoidElement = function(n) {
        return !this.options.xmlMode && c.has(n);
      }, p.prototype.onopentagname = function(n, f) {
        this.endIndex = f;
        var m = this.getSlice(n, f);
        this.lowerCaseTagNames && (m = m.toLowerCase()), this.emitOpenTag(m);
      }, p.prototype.emitOpenTag = function(n) {
        var f, m, l, a;
        this.openTagStart = this.startIndex, this.tagname = n;
        var w = !this.options.xmlMode && r.get(n);
        if (w)
          for (; this.stack.length > 0 && w.has(this.stack[this.stack.length - 1]); ) {
            var T = this.stack.pop();
            (m = (f = this.cbs).onclosetag) === null || m === void 0 || m.call(f, T, !0);
          }
        this.isVoidElement(n) || (this.stack.push(n), e.has(n) ? this.foreignContext.push(!0) : t.has(n) && this.foreignContext.push(!1)), (a = (l = this.cbs).onopentagname) === null || a === void 0 || a.call(l, n), this.cbs.onopentag && (this.attribs = {});
      }, p.prototype.endOpenTag = function(n) {
        var f, m;
        this.startIndex = this.openTagStart, this.attribs && ((m = (f = this.cbs).onopentag) === null || m === void 0 || m.call(f, this.tagname, this.attribs, n), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
      }, p.prototype.onopentagend = function(n) {
        this.endIndex = n, this.endOpenTag(!1), this.startIndex = n + 1;
      }, p.prototype.onclosetag = function(n, f) {
        var m, l, a, w, T, A;
        this.endIndex = f;
        var I = this.getSlice(n, f);
        if (this.lowerCaseTagNames && (I = I.toLowerCase()), (e.has(I) || t.has(I)) && this.foreignContext.pop(), this.isVoidElement(I))
          !this.options.xmlMode && I === "br" && ((l = (m = this.cbs).onopentagname) === null || l === void 0 || l.call(m, "br"), (w = (a = this.cbs).onopentag) === null || w === void 0 || w.call(a, "br", {}, !0), (A = (T = this.cbs).onclosetag) === null || A === void 0 || A.call(T, "br", !1));
        else {
          var q = this.stack.lastIndexOf(I);
          if (q !== -1)
            if (this.cbs.onclosetag)
              for (var E = this.stack.length - q; E--; )
                this.cbs.onclosetag(this.stack.pop(), E !== 0);
            else
              this.stack.length = q;
          else !this.options.xmlMode && I === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
        }
        this.startIndex = f + 1;
      }, p.prototype.onselfclosingtag = function(n) {
        this.endIndex = n, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = n + 1) : this.onopentagend(n);
      }, p.prototype.closeCurrentTag = function(n) {
        var f, m, l = this.tagname;
        this.endOpenTag(n), this.stack[this.stack.length - 1] === l && ((m = (f = this.cbs).onclosetag) === null || m === void 0 || m.call(f, l, !n), this.stack.pop());
      }, p.prototype.onattribname = function(n, f) {
        this.startIndex = n;
        var m = this.getSlice(n, f);
        this.attribname = this.lowerCaseAttributeNames ? m.toLowerCase() : m;
      }, p.prototype.onattribdata = function(n, f) {
        this.attribvalue += this.getSlice(n, f);
      }, p.prototype.onattribentity = function(n) {
        this.attribvalue += (0, b.fromCodePoint)(n);
      }, p.prototype.onattribend = function(n, f) {
        var m, l;
        this.endIndex = f, (l = (m = this.cbs).onattribute) === null || l === void 0 || l.call(m, this.attribname, this.attribvalue, n === d.QuoteType.Double ? '"' : n === d.QuoteType.Single ? "'" : n === d.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
      }, p.prototype.getInstructionName = function(n) {
        var f = n.search(s), m = f < 0 ? n : n.substr(0, f);
        return this.lowerCaseTagNames && (m = m.toLowerCase()), m;
      }, p.prototype.ondeclaration = function(n, f) {
        this.endIndex = f;
        var m = this.getSlice(n, f);
        if (this.cbs.onprocessinginstruction) {
          var l = this.getInstructionName(m);
          this.cbs.onprocessinginstruction("!".concat(l), "!".concat(m));
        }
        this.startIndex = f + 1;
      }, p.prototype.onprocessinginstruction = function(n, f) {
        this.endIndex = f;
        var m = this.getSlice(n, f);
        if (this.cbs.onprocessinginstruction) {
          var l = this.getInstructionName(m);
          this.cbs.onprocessinginstruction("?".concat(l), "?".concat(m));
        }
        this.startIndex = f + 1;
      }, p.prototype.oncomment = function(n, f, m) {
        var l, a, w, T;
        this.endIndex = f, (a = (l = this.cbs).oncomment) === null || a === void 0 || a.call(l, this.getSlice(n, f - m)), (T = (w = this.cbs).oncommentend) === null || T === void 0 || T.call(w), this.startIndex = f + 1;
      }, p.prototype.oncdata = function(n, f, m) {
        var l, a, w, T, A, I, q, E, O, D;
        this.endIndex = f;
        var L = this.getSlice(n, f - m);
        this.options.xmlMode || this.options.recognizeCDATA ? ((a = (l = this.cbs).oncdatastart) === null || a === void 0 || a.call(l), (T = (w = this.cbs).ontext) === null || T === void 0 || T.call(w, L), (I = (A = this.cbs).oncdataend) === null || I === void 0 || I.call(A)) : ((E = (q = this.cbs).oncomment) === null || E === void 0 || E.call(q, "[CDATA[".concat(L, "]]")), (D = (O = this.cbs).oncommentend) === null || D === void 0 || D.call(O)), this.startIndex = f + 1;
      }, p.prototype.onend = function() {
        var n, f;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (var m = this.stack.length; m > 0; this.cbs.onclosetag(this.stack[--m], !0))
            ;
        }
        (f = (n = this.cbs).onend) === null || f === void 0 || f.call(n);
      }, p.prototype.reset = function() {
        var n, f, m, l;
        (f = (n = this.cbs).onreset) === null || f === void 0 || f.call(n), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (l = (m = this.cbs).onparserinit) === null || l === void 0 || l.call(m, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
      }, p.prototype.parseComplete = function(n) {
        this.reset(), this.end(n);
      }, p.prototype.getSlice = function(n, f) {
        for (; n - this.bufferOffset >= this.buffers[0].length; )
          this.shiftBuffer();
        for (var m = this.buffers[0].slice(n - this.bufferOffset, f - this.bufferOffset); f - this.bufferOffset > this.buffers[0].length; )
          this.shiftBuffer(), m += this.buffers[0].slice(0, f - this.bufferOffset);
        return m;
      }, p.prototype.shiftBuffer = function() {
        this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
      }, p.prototype.write = function(n) {
        var f, m;
        if (this.ended) {
          (m = (f = this.cbs).onerror) === null || m === void 0 || m.call(f, new Error(".write() after done!"));
          return;
        }
        this.buffers.push(n), this.tokenizer.running && (this.tokenizer.write(n), this.writeIndex++);
      }, p.prototype.end = function(n) {
        var f, m;
        if (this.ended) {
          (m = (f = this.cbs).onerror) === null || m === void 0 || m.call(f, new Error(".end() after done!"));
          return;
        }
        n && this.write(n), this.ended = !0, this.tokenizer.end();
      }, p.prototype.pause = function() {
        this.tokenizer.pause();
      }, p.prototype.resume = function() {
        for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        this.ended && this.tokenizer.end();
      }, p.prototype.parseChunk = function(n) {
        this.write(n);
      }, p.prototype.done = function(n) {
        this.end(n);
      }, p;
    })()
  );
  return K.Parser = y, K;
}
var pe = {}, $e = {}, $t;
function Se() {
  return $t || ($t = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.Doctype = u.CDATA = u.Tag = u.Style = u.Script = u.Comment = u.Directive = u.Text = u.Root = u.isTag = u.ElementType = void 0;
    var S;
    (function(d) {
      d.Root = "root", d.Text = "text", d.Directive = "directive", d.Comment = "comment", d.Script = "script", d.Style = "style", d.Tag = "tag", d.CDATA = "cdata", d.Doctype = "doctype";
    })(S = u.ElementType || (u.ElementType = {}));
    function v(d) {
      return d.type === S.Tag || d.type === S.Script || d.type === S.Style;
    }
    u.isTag = v, u.Root = S.Root, u.Text = S.Text, u.Directive = S.Directive, u.Comment = S.Comment, u.Script = S.Script, u.Style = S.Style, u.Tag = S.Tag, u.CDATA = S.CDATA, u.Doctype = S.Doctype;
  })($e)), $e;
}
var k = {}, Xt;
function Qt() {
  if (Xt) return k;
  Xt = 1;
  var u = k && k.__extends || /* @__PURE__ */ (function() {
    var a = function(w, T) {
      return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, I) {
        A.__proto__ = I;
      } || function(A, I) {
        for (var q in I) Object.prototype.hasOwnProperty.call(I, q) && (A[q] = I[q]);
      }, a(w, T);
    };
    return function(w, T) {
      if (typeof T != "function" && T !== null)
        throw new TypeError("Class extends value " + String(T) + " is not a constructor or null");
      a(w, T);
      function A() {
        this.constructor = w;
      }
      w.prototype = T === null ? Object.create(T) : (A.prototype = T.prototype, new A());
    };
  })(), S = k && k.__assign || function() {
    return S = Object.assign || function(a) {
      for (var w, T = 1, A = arguments.length; T < A; T++) {
        w = arguments[T];
        for (var I in w) Object.prototype.hasOwnProperty.call(w, I) && (a[I] = w[I]);
      }
      return a;
    }, S.apply(this, arguments);
  };
  Object.defineProperty(k, "__esModule", { value: !0 }), k.cloneNode = k.hasChildren = k.isDocument = k.isDirective = k.isComment = k.isText = k.isCDATA = k.isTag = k.Element = k.Document = k.CDATA = k.NodeWithChildren = k.ProcessingInstruction = k.Comment = k.Text = k.DataNode = k.Node = void 0;
  var v = /* @__PURE__ */ Se(), d = (
    /** @class */
    (function() {
      function a() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(a.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(w) {
          this.parent = w;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(a.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(w) {
          this.prev = w;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(a.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(w) {
          this.next = w;
        },
        enumerable: !1,
        configurable: !0
      }), a.prototype.cloneNode = function(w) {
        return w === void 0 && (w = !1), m(this, w);
      }, a;
    })()
  );
  k.Node = d;
  var b = (
    /** @class */
    (function(a) {
      u(w, a);
      function w(T) {
        var A = a.call(this) || this;
        return A.data = T, A;
      }
      return Object.defineProperty(w.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(T) {
          this.data = T;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(d)
  );
  k.DataNode = b;
  var x = (
    /** @class */
    (function(a) {
      u(w, a);
      function w() {
        var T = a !== null && a.apply(this, arguments) || this;
        return T.type = v.ElementType.Text, T;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(b)
  );
  k.Text = x;
  var o = (
    /** @class */
    (function(a) {
      u(w, a);
      function w() {
        var T = a !== null && a.apply(this, arguments) || this;
        return T.type = v.ElementType.Comment, T;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(b)
  );
  k.Comment = o;
  var h = (
    /** @class */
    (function(a) {
      u(w, a);
      function w(T, A) {
        var I = a.call(this, A) || this;
        return I.name = T, I.type = v.ElementType.Directive, I;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(b)
  );
  k.ProcessingInstruction = h;
  var g = (
    /** @class */
    (function(a) {
      u(w, a);
      function w(T) {
        var A = a.call(this) || this;
        return A.children = T, A;
      }
      return Object.defineProperty(w.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var T;
          return (T = this.children[0]) !== null && T !== void 0 ? T : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(w.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(w.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(T) {
          this.children = T;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(d)
  );
  k.NodeWithChildren = g;
  var i = (
    /** @class */
    (function(a) {
      u(w, a);
      function w() {
        var T = a !== null && a.apply(this, arguments) || this;
        return T.type = v.ElementType.CDATA, T;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(g)
  );
  k.CDATA = i;
  var r = (
    /** @class */
    (function(a) {
      u(w, a);
      function w() {
        var T = a !== null && a.apply(this, arguments) || this;
        return T.type = v.ElementType.Root, T;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(g)
  );
  k.Document = r;
  var c = (
    /** @class */
    (function(a) {
      u(w, a);
      function w(T, A, I, q) {
        I === void 0 && (I = []), q === void 0 && (q = T === "script" ? v.ElementType.Script : T === "style" ? v.ElementType.Style : v.ElementType.Tag);
        var E = a.call(this, I) || this;
        return E.name = T, E.attribs = A, E.type = q, E;
      }
      return Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(w.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(T) {
          this.name = T;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(w.prototype, "attributes", {
        get: function() {
          var T = this;
          return Object.keys(this.attribs).map(function(A) {
            var I, q;
            return {
              name: A,
              value: T.attribs[A],
              namespace: (I = T["x-attribsNamespace"]) === null || I === void 0 ? void 0 : I[A],
              prefix: (q = T["x-attribsPrefix"]) === null || q === void 0 ? void 0 : q[A]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), w;
    })(g)
  );
  k.Element = c;
  function e(a) {
    return (0, v.isTag)(a);
  }
  k.isTag = e;
  function t(a) {
    return a.type === v.ElementType.CDATA;
  }
  k.isCDATA = t;
  function s(a) {
    return a.type === v.ElementType.Text;
  }
  k.isText = s;
  function y(a) {
    return a.type === v.ElementType.Comment;
  }
  k.isComment = y;
  function p(a) {
    return a.type === v.ElementType.Directive;
  }
  k.isDirective = p;
  function n(a) {
    return a.type === v.ElementType.Root;
  }
  k.isDocument = n;
  function f(a) {
    return Object.prototype.hasOwnProperty.call(a, "children");
  }
  k.hasChildren = f;
  function m(a, w) {
    w === void 0 && (w = !1);
    var T;
    if (s(a))
      T = new x(a.data);
    else if (y(a))
      T = new o(a.data);
    else if (e(a)) {
      var A = w ? l(a.children) : [], I = new c(a.name, S({}, a.attribs), A);
      A.forEach(function(D) {
        return D.parent = I;
      }), a.namespace != null && (I.namespace = a.namespace), a["x-attribsNamespace"] && (I["x-attribsNamespace"] = S({}, a["x-attribsNamespace"])), a["x-attribsPrefix"] && (I["x-attribsPrefix"] = S({}, a["x-attribsPrefix"])), T = I;
    } else if (t(a)) {
      var A = w ? l(a.children) : [], q = new i(A);
      A.forEach(function(L) {
        return L.parent = q;
      }), T = q;
    } else if (n(a)) {
      var A = w ? l(a.children) : [], E = new r(A);
      A.forEach(function(L) {
        return L.parent = E;
      }), a["x-mode"] && (E["x-mode"] = a["x-mode"]), T = E;
    } else if (p(a)) {
      var O = new h(a.name, a.data);
      a["x-name"] != null && (O["x-name"] = a["x-name"], O["x-publicId"] = a["x-publicId"], O["x-systemId"] = a["x-systemId"]), T = O;
    } else
      throw new Error("Not implemented yet: ".concat(a.type));
    return T.startIndex = a.startIndex, T.endIndex = a.endIndex, a.sourceCodeLocation != null && (T.sourceCodeLocation = a.sourceCodeLocation), T;
  }
  k.cloneNode = m;
  function l(a) {
    for (var w = a.map(function(A) {
      return m(A, !0);
    }), T = 1; T < w.length; T++)
      w[T].prev = w[T - 1], w[T - 1].next = w[T];
    return w;
  }
  return k;
}
var Jt;
function de() {
  return Jt || (Jt = 1, (function(u) {
    var S = pe && pe.__createBinding || (Object.create ? (function(h, g, i, r) {
      r === void 0 && (r = i);
      var c = Object.getOwnPropertyDescriptor(g, i);
      (!c || ("get" in c ? !g.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
        return g[i];
      } }), Object.defineProperty(h, r, c);
    }) : (function(h, g, i, r) {
      r === void 0 && (r = i), h[r] = g[i];
    })), v = pe && pe.__exportStar || function(h, g) {
      for (var i in h) i !== "default" && !Object.prototype.hasOwnProperty.call(g, i) && S(g, h, i);
    };
    Object.defineProperty(u, "__esModule", { value: !0 }), u.DomHandler = void 0;
    var d = /* @__PURE__ */ Se(), b = /* @__PURE__ */ Qt();
    v(/* @__PURE__ */ Qt(), u);
    var x = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, o = (
      /** @class */
      (function() {
        function h(g, i, r) {
          this.dom = [], this.root = new b.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof i == "function" && (r = i, i = x), typeof g == "object" && (i = g, g = void 0), this.callback = g != null ? g : null, this.options = i != null ? i : x, this.elementCB = r != null ? r : null;
        }
        return h.prototype.onparserinit = function(g) {
          this.parser = g;
        }, h.prototype.onreset = function() {
          this.dom = [], this.root = new b.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, h.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, h.prototype.onerror = function(g) {
          this.handleCallback(g);
        }, h.prototype.onclosetag = function() {
          this.lastNode = null;
          var g = this.tagStack.pop();
          this.options.withEndIndices && (g.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(g);
        }, h.prototype.onopentag = function(g, i) {
          var r = this.options.xmlMode ? d.ElementType.Tag : void 0, c = new b.Element(g, i, void 0, r);
          this.addNode(c), this.tagStack.push(c);
        }, h.prototype.ontext = function(g) {
          var i = this.lastNode;
          if (i && i.type === d.ElementType.Text)
            i.data += g, this.options.withEndIndices && (i.endIndex = this.parser.endIndex);
          else {
            var r = new b.Text(g);
            this.addNode(r), this.lastNode = r;
          }
        }, h.prototype.oncomment = function(g) {
          if (this.lastNode && this.lastNode.type === d.ElementType.Comment) {
            this.lastNode.data += g;
            return;
          }
          var i = new b.Comment(g);
          this.addNode(i), this.lastNode = i;
        }, h.prototype.oncommentend = function() {
          this.lastNode = null;
        }, h.prototype.oncdatastart = function() {
          var g = new b.Text(""), i = new b.CDATA([g]);
          this.addNode(i), g.parent = i, this.lastNode = g;
        }, h.prototype.oncdataend = function() {
          this.lastNode = null;
        }, h.prototype.onprocessinginstruction = function(g, i) {
          var r = new b.ProcessingInstruction(g, i);
          this.addNode(r);
        }, h.prototype.handleCallback = function(g) {
          if (typeof this.callback == "function")
            this.callback(g, this.dom);
          else if (g)
            throw g;
        }, h.prototype.addNode = function(g) {
          var i = this.tagStack[this.tagStack.length - 1], r = i.children[i.children.length - 1];
          this.options.withStartIndices && (g.startIndex = this.parser.startIndex), this.options.withEndIndices && (g.endIndex = this.parser.endIndex), i.children.push(g), r && (g.prev = r, r.next = g), g.parent = i, this.lastNode = null;
        }, h;
      })()
    );
    u.DomHandler = o, u.default = o;
  })(pe)), pe;
}
var me = {}, ie = {}, Q = {}, Xe = {}, se = {}, Ie = {}, Zt;
function fr() {
  if (Zt) return Ie;
  Zt = 1, Object.defineProperty(Ie, "__esModule", { value: !0 });
  function u(S) {
    for (var v = 1; v < S.length; v++)
      S[v][0] += S[v - 1][0] + 1;
    return S;
  }
  return Ie.default = new Map(/* @__PURE__ */ u([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ u([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ u([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ u([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])), Ie;
}
var Qe = {}, Yt;
function Ot() {
  return Yt || (Yt = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.escapeText = u.escapeAttribute = u.escapeUTF8 = u.escape = u.encodeXML = u.getCodePoint = u.xmlReplacer = void 0, u.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var S = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    u.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? function(b, x) {
      return b.codePointAt(x);
    } : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(b, x) {
        return (b.charCodeAt(x) & 64512) === 55296 ? (b.charCodeAt(x) - 55296) * 1024 + b.charCodeAt(x + 1) - 56320 + 65536 : b.charCodeAt(x);
      }
    );
    function v(b) {
      for (var x = "", o = 0, h; (h = u.xmlReplacer.exec(b)) !== null; ) {
        var g = h.index, i = b.charCodeAt(g), r = S.get(i);
        r !== void 0 ? (x += b.substring(o, g) + r, o = g + 1) : (x += "".concat(b.substring(o, g), "&#x").concat((0, u.getCodePoint)(b, g).toString(16), ";"), o = u.xmlReplacer.lastIndex += +((i & 64512) === 55296));
      }
      return x + b.substr(o);
    }
    u.encodeXML = v, u.escape = v;
    function d(b, x) {
      return function(h) {
        for (var g, i = 0, r = ""; g = b.exec(h); )
          i !== g.index && (r += h.substring(i, g.index)), r += x.get(g[0].charCodeAt(0)), i = g.index + 1;
        return r + h.substring(i);
      };
    }
    u.escapeUTF8 = d(/[&<>'"]/g, S), u.escapeAttribute = d(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ])), u.escapeText = d(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  })(Qe)), Qe;
}
var Kt;
function eu() {
  if (Kt) return se;
  Kt = 1;
  var u = se && se.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(se, "__esModule", { value: !0 }), se.encodeNonAsciiHTML = se.encodeHTML = void 0;
  var S = u(/* @__PURE__ */ fr()), v = /* @__PURE__ */ Ot(), d = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
  function b(h) {
    return o(d, h);
  }
  se.encodeHTML = b;
  function x(h) {
    return o(v.xmlReplacer, h);
  }
  se.encodeNonAsciiHTML = x;
  function o(h, g) {
    for (var i = "", r = 0, c; (c = h.exec(g)) !== null; ) {
      var e = c.index;
      i += g.substring(r, e);
      var t = g.charCodeAt(e), s = S.default.get(t);
      if (typeof s == "object") {
        if (e + 1 < g.length) {
          var y = g.charCodeAt(e + 1), p = typeof s.n == "number" ? s.n === y ? s.o : void 0 : s.n.get(y);
          if (p !== void 0) {
            i += p, r = h.lastIndex += 1;
            continue;
          }
        }
        s = s.v;
      }
      if (s !== void 0)
        i += s, r = e + 1;
      else {
        var n = (0, v.getCodePoint)(g, e);
        i += "&#x".concat(n.toString(16), ";"), r = h.lastIndex += +(n !== t);
      }
    }
    return i + g.substr(r);
  }
  return se;
}
var tu;
function dr() {
  return tu || (tu = 1, (function(u) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.decodeXMLStrict = u.decodeHTML5Strict = u.decodeHTML4Strict = u.decodeHTML5 = u.decodeHTML4 = u.decodeHTMLAttribute = u.decodeHTMLStrict = u.decodeHTML = u.decodeXML = u.DecodingMode = u.EntityDecoder = u.encodeHTML5 = u.encodeHTML4 = u.encodeNonAsciiHTML = u.encodeHTML = u.escapeText = u.escapeAttribute = u.escapeUTF8 = u.escape = u.encodeXML = u.encode = u.decodeStrict = u.decode = u.EncodingMode = u.EntityLevel = void 0;
    var S = /* @__PURE__ */ Re(), v = /* @__PURE__ */ eu(), d = /* @__PURE__ */ Ot(), b;
    (function(e) {
      e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML";
    })(b = u.EntityLevel || (u.EntityLevel = {}));
    var x;
    (function(e) {
      e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text";
    })(x = u.EncodingMode || (u.EncodingMode = {}));
    function o(e, t) {
      t === void 0 && (t = b.XML);
      var s = typeof t == "number" ? t : t.level;
      if (s === b.HTML) {
        var y = typeof t == "object" ? t.mode : void 0;
        return (0, S.decodeHTML)(e, y);
      }
      return (0, S.decodeXML)(e);
    }
    u.decode = o;
    function h(e, t) {
      var s;
      t === void 0 && (t = b.XML);
      var y = typeof t == "number" ? { level: t } : t;
      return (s = y.mode) !== null && s !== void 0 || (y.mode = S.DecodingMode.Strict), o(e, y);
    }
    u.decodeStrict = h;
    function g(e, t) {
      t === void 0 && (t = b.XML);
      var s = typeof t == "number" ? { level: t } : t;
      return s.mode === x.UTF8 ? (0, d.escapeUTF8)(e) : s.mode === x.Attribute ? (0, d.escapeAttribute)(e) : s.mode === x.Text ? (0, d.escapeText)(e) : s.level === b.HTML ? s.mode === x.ASCII ? (0, v.encodeNonAsciiHTML)(e) : (0, v.encodeHTML)(e) : (0, d.encodeXML)(e);
    }
    u.encode = g;
    var i = /* @__PURE__ */ Ot();
    Object.defineProperty(u, "encodeXML", { enumerable: !0, get: function() {
      return i.encodeXML;
    } }), Object.defineProperty(u, "escape", { enumerable: !0, get: function() {
      return i.escape;
    } }), Object.defineProperty(u, "escapeUTF8", { enumerable: !0, get: function() {
      return i.escapeUTF8;
    } }), Object.defineProperty(u, "escapeAttribute", { enumerable: !0, get: function() {
      return i.escapeAttribute;
    } }), Object.defineProperty(u, "escapeText", { enumerable: !0, get: function() {
      return i.escapeText;
    } });
    var r = /* @__PURE__ */ eu();
    Object.defineProperty(u, "encodeHTML", { enumerable: !0, get: function() {
      return r.encodeHTML;
    } }), Object.defineProperty(u, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
      return r.encodeNonAsciiHTML;
    } }), Object.defineProperty(u, "encodeHTML4", { enumerable: !0, get: function() {
      return r.encodeHTML;
    } }), Object.defineProperty(u, "encodeHTML5", { enumerable: !0, get: function() {
      return r.encodeHTML;
    } });
    var c = /* @__PURE__ */ Re();
    Object.defineProperty(u, "EntityDecoder", { enumerable: !0, get: function() {
      return c.EntityDecoder;
    } }), Object.defineProperty(u, "DecodingMode", { enumerable: !0, get: function() {
      return c.DecodingMode;
    } }), Object.defineProperty(u, "decodeXML", { enumerable: !0, get: function() {
      return c.decodeXML;
    } }), Object.defineProperty(u, "decodeHTML", { enumerable: !0, get: function() {
      return c.decodeHTML;
    } }), Object.defineProperty(u, "decodeHTMLStrict", { enumerable: !0, get: function() {
      return c.decodeHTMLStrict;
    } }), Object.defineProperty(u, "decodeHTMLAttribute", { enumerable: !0, get: function() {
      return c.decodeHTMLAttribute;
    } }), Object.defineProperty(u, "decodeHTML4", { enumerable: !0, get: function() {
      return c.decodeHTML;
    } }), Object.defineProperty(u, "decodeHTML5", { enumerable: !0, get: function() {
      return c.decodeHTML;
    } }), Object.defineProperty(u, "decodeHTML4Strict", { enumerable: !0, get: function() {
      return c.decodeHTMLStrict;
    } }), Object.defineProperty(u, "decodeHTML5Strict", { enumerable: !0, get: function() {
      return c.decodeHTMLStrict;
    } }), Object.defineProperty(u, "decodeXMLStrict", { enumerable: !0, get: function() {
      return c.decodeXML;
    } });
  })(Xe)), Xe;
}
var ge = {}, uu;
function hr() {
  return uu || (uu = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.attributeNames = ge.elementNames = void 0, ge.elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
  ].map(function(u) {
    return [u.toLowerCase(), u];
  })), ge.attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map(function(u) {
    return [u.toLowerCase(), u];
  }))), ge;
}
var ru;
function br() {
  if (ru) return Q;
  ru = 1;
  var u = Q && Q.__assign || function() {
    return u = Object.assign || function(l) {
      for (var a, w = 1, T = arguments.length; w < T; w++) {
        a = arguments[w];
        for (var A in a) Object.prototype.hasOwnProperty.call(a, A) && (l[A] = a[A]);
      }
      return l;
    }, u.apply(this, arguments);
  }, S = Q && Q.__createBinding || (Object.create ? (function(l, a, w, T) {
    T === void 0 && (T = w);
    var A = Object.getOwnPropertyDescriptor(a, w);
    (!A || ("get" in A ? !a.__esModule : A.writable || A.configurable)) && (A = { enumerable: !0, get: function() {
      return a[w];
    } }), Object.defineProperty(l, T, A);
  }) : (function(l, a, w, T) {
    T === void 0 && (T = w), l[T] = a[w];
  })), v = Q && Q.__setModuleDefault || (Object.create ? (function(l, a) {
    Object.defineProperty(l, "default", { enumerable: !0, value: a });
  }) : function(l, a) {
    l.default = a;
  }), d = Q && Q.__importStar || function(l) {
    if (l && l.__esModule) return l;
    var a = {};
    if (l != null) for (var w in l) w !== "default" && Object.prototype.hasOwnProperty.call(l, w) && S(a, l, w);
    return v(a, l), a;
  };
  Object.defineProperty(Q, "__esModule", { value: !0 }), Q.render = void 0;
  var b = d(/* @__PURE__ */ Se()), x = /* @__PURE__ */ dr(), o = /* @__PURE__ */ hr(), h = /* @__PURE__ */ new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
  ]);
  function g(l) {
    return l.replace(/"/g, "&quot;");
  }
  function i(l, a) {
    var w;
    if (l) {
      var T = ((w = a.encodeEntities) !== null && w !== void 0 ? w : a.decodeEntities) === !1 ? g : a.xmlMode || a.encodeEntities !== "utf8" ? x.encodeXML : x.escapeAttribute;
      return Object.keys(l).map(function(A) {
        var I, q, E = (I = l[A]) !== null && I !== void 0 ? I : "";
        return a.xmlMode === "foreign" && (A = (q = o.attributeNames.get(A)) !== null && q !== void 0 ? q : A), !a.emptyAttrs && !a.xmlMode && E === "" ? A : "".concat(A, '="').concat(T(E), '"');
      }).join(" ");
    }
  }
  var r = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  function c(l, a) {
    a === void 0 && (a = {});
    for (var w = ("length" in l) ? l : [l], T = "", A = 0; A < w.length; A++)
      T += e(w[A], a);
    return T;
  }
  Q.render = c, Q.default = c;
  function e(l, a) {
    switch (l.type) {
      case b.Root:
        return c(l.children, a);
      // @ts-expect-error We don't use `Doctype` yet
      case b.Doctype:
      case b.Directive:
        return p(l);
      case b.Comment:
        return m(l);
      case b.CDATA:
        return f(l);
      case b.Script:
      case b.Style:
      case b.Tag:
        return y(l, a);
      case b.Text:
        return n(l, a);
    }
  }
  var t = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
  ]), s = /* @__PURE__ */ new Set(["svg", "math"]);
  function y(l, a) {
    var w;
    a.xmlMode === "foreign" && (l.name = (w = o.elementNames.get(l.name)) !== null && w !== void 0 ? w : l.name, l.parent && t.has(l.parent.name) && (a = u(u({}, a), { xmlMode: !1 }))), !a.xmlMode && s.has(l.name) && (a = u(u({}, a), { xmlMode: "foreign" }));
    var T = "<".concat(l.name), A = i(l.attribs, a);
    return A && (T += " ".concat(A)), l.children.length === 0 && (a.xmlMode ? (
      // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
      a.selfClosingTags !== !1
    ) : (
      // User explicitly asked for self-closing tags, even in HTML mode
      a.selfClosingTags && r.has(l.name)
    )) ? (a.xmlMode || (T += " "), T += "/>") : (T += ">", l.children.length > 0 && (T += c(l.children, a)), (a.xmlMode || !r.has(l.name)) && (T += "</".concat(l.name, ">"))), T;
  }
  function p(l) {
    return "<".concat(l.data, ">");
  }
  function n(l, a) {
    var w, T = l.data || "";
    return ((w = a.encodeEntities) !== null && w !== void 0 ? w : a.decodeEntities) !== !1 && !(!a.xmlMode && l.parent && h.has(l.parent.name)) && (T = a.xmlMode || a.encodeEntities !== "utf8" ? (0, x.encodeXML)(T) : (0, x.escapeText)(T)), T;
  }
  function f(l) {
    return "<![CDATA[".concat(l.children[0].data, "]]>");
  }
  function m(l) {
    return "<!--".concat(l.data, "-->");
  }
  return Q;
}
var iu;
function $u() {
  if (iu) return ie;
  iu = 1;
  var u = ie && ie.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.getOuterHTML = b, ie.getInnerHTML = x, ie.getText = o, ie.textContent = h, ie.innerText = g;
  var S = /* @__PURE__ */ de(), v = u(/* @__PURE__ */ br()), d = /* @__PURE__ */ Se();
  function b(i, r) {
    return (0, v.default)(i, r);
  }
  function x(i, r) {
    return (0, S.hasChildren)(i) ? i.children.map(function(c) {
      return b(c, r);
    }).join("") : "";
  }
  function o(i) {
    return Array.isArray(i) ? i.map(o).join("") : (0, S.isTag)(i) ? i.name === "br" ? `
` : o(i.children) : (0, S.isCDATA)(i) ? o(i.children) : (0, S.isText)(i) ? i.data : "";
  }
  function h(i) {
    return Array.isArray(i) ? i.map(h).join("") : (0, S.hasChildren)(i) && !(0, S.isComment)(i) ? h(i.children) : (0, S.isText)(i) ? i.data : "";
  }
  function g(i) {
    return Array.isArray(i) ? i.map(g).join("") : (0, S.hasChildren)(i) && (i.type === d.ElementType.Tag || (0, S.isCDATA)(i)) ? g(i.children) : (0, S.isText)(i) ? i.data : "";
  }
  return ie;
}
var te = {}, nu;
function pr() {
  if (nu) return te;
  nu = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.getChildren = S, te.getParent = v, te.getSiblings = d, te.getAttributeValue = b, te.hasAttrib = x, te.getName = o, te.nextElementSibling = h, te.prevElementSibling = g;
  var u = /* @__PURE__ */ de();
  function S(i) {
    return (0, u.hasChildren)(i) ? i.children : [];
  }
  function v(i) {
    return i.parent || null;
  }
  function d(i) {
    var r, c, e = v(i);
    if (e != null)
      return S(e);
    for (var t = [i], s = i.prev, y = i.next; s != null; )
      t.unshift(s), r = s, s = r.prev;
    for (; y != null; )
      t.push(y), c = y, y = c.next;
    return t;
  }
  function b(i, r) {
    var c;
    return (c = i.attribs) === null || c === void 0 ? void 0 : c[r];
  }
  function x(i, r) {
    return i.attribs != null && Object.prototype.hasOwnProperty.call(i.attribs, r) && i.attribs[r] != null;
  }
  function o(i) {
    return i.name;
  }
  function h(i) {
    for (var r, c = i.next; c !== null && !(0, u.isTag)(c); )
      r = c, c = r.next;
    return c;
  }
  function g(i) {
    for (var r, c = i.prev; c !== null && !(0, u.isTag)(c); )
      r = c, c = r.prev;
    return c;
  }
  return te;
}
var oe = {}, au;
function mr() {
  if (au) return oe;
  au = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.removeElement = u, oe.replaceElement = S, oe.appendChild = v, oe.append = d, oe.prependChild = b, oe.prepend = x;
  function u(o) {
    if (o.prev && (o.prev.next = o.next), o.next && (o.next.prev = o.prev), o.parent) {
      var h = o.parent.children, g = h.lastIndexOf(o);
      g >= 0 && h.splice(g, 1);
    }
    o.next = null, o.prev = null, o.parent = null;
  }
  function S(o, h) {
    var g = h.prev = o.prev;
    g && (g.next = h);
    var i = h.next = o.next;
    i && (i.prev = h);
    var r = h.parent = o.parent;
    if (r) {
      var c = r.children;
      c[c.lastIndexOf(o)] = h, o.parent = null;
    }
  }
  function v(o, h) {
    if (u(h), h.next = null, h.parent = o, o.children.push(h) > 1) {
      var g = o.children[o.children.length - 2];
      g.next = h, h.prev = g;
    } else
      h.prev = null;
  }
  function d(o, h) {
    u(h);
    var g = o.parent, i = o.next;
    if (h.next = i, h.prev = o, o.next = h, h.parent = g, i) {
      if (i.prev = h, g) {
        var r = g.children;
        r.splice(r.lastIndexOf(i), 0, h);
      }
    } else g && g.children.push(h);
  }
  function b(o, h) {
    if (u(h), h.parent = o, h.prev = null, o.children.unshift(h) !== 1) {
      var g = o.children[1];
      g.prev = h, h.next = g;
    } else
      h.next = null;
  }
  function x(o, h) {
    u(h);
    var g = o.parent;
    if (g) {
      var i = g.children;
      i.splice(i.indexOf(o), 0, h);
    }
    o.prev && (o.prev.next = h), h.parent = g, h.prev = o.prev, h.next = o, o.prev = h;
  }
  return oe;
}
var ce = {}, su;
function Xu() {
  if (su) return ce;
  su = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.filter = S, ce.find = v, ce.findOneChild = d, ce.findOne = b, ce.existsOne = x, ce.findAll = o;
  var u = /* @__PURE__ */ de();
  function S(h, g, i, r) {
    return i === void 0 && (i = !0), r === void 0 && (r = 1 / 0), v(h, Array.isArray(g) ? g : [g], i, r);
  }
  function v(h, g, i, r) {
    for (var c = [], e = [Array.isArray(g) ? g : [g]], t = [0]; ; ) {
      if (t[0] >= e[0].length) {
        if (t.length === 1)
          return c;
        e.shift(), t.shift();
        continue;
      }
      var s = e[0][t[0]++];
      if (h(s) && (c.push(s), --r <= 0))
        return c;
      i && (0, u.hasChildren)(s) && s.children.length > 0 && (t.unshift(0), e.unshift(s.children));
    }
  }
  function d(h, g) {
    return g.find(h);
  }
  function b(h, g, i) {
    i === void 0 && (i = !0);
    for (var r = Array.isArray(g) ? g : [g], c = 0; c < r.length; c++) {
      var e = r[c];
      if ((0, u.isTag)(e) && h(e))
        return e;
      if (i && (0, u.hasChildren)(e) && e.children.length > 0) {
        var t = b(h, e.children, !0);
        if (t)
          return t;
      }
    }
    return null;
  }
  function x(h, g) {
    return (Array.isArray(g) ? g : [g]).some(function(i) {
      return (0, u.isTag)(i) && h(i) || (0, u.hasChildren)(i) && x(h, i.children);
    });
  }
  function o(h, g) {
    for (var i = [], r = [Array.isArray(g) ? g : [g]], c = [0]; ; ) {
      if (c[0] >= r[0].length) {
        if (r.length === 1)
          return i;
        r.shift(), c.shift();
        continue;
      }
      var e = r[0][c[0]++];
      (0, u.isTag)(e) && h(e) && i.push(e), (0, u.hasChildren)(e) && e.children.length > 0 && (c.unshift(0), r.unshift(e.children));
    }
  }
  return ce;
}
var le = {}, ou;
function Qu() {
  if (ou) return le;
  ou = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.testElement = o, le.getElements = h, le.getElementById = g, le.getElementsByTagName = i, le.getElementsByClassName = r, le.getElementsByTagType = c;
  var u = /* @__PURE__ */ de(), S = /* @__PURE__ */ Xu(), v = {
    tag_name: function(e) {
      return typeof e == "function" ? function(t) {
        return (0, u.isTag)(t) && e(t.name);
      } : e === "*" ? u.isTag : function(t) {
        return (0, u.isTag)(t) && t.name === e;
      };
    },
    tag_type: function(e) {
      return typeof e == "function" ? function(t) {
        return e(t.type);
      } : function(t) {
        return t.type === e;
      };
    },
    tag_contains: function(e) {
      return typeof e == "function" ? function(t) {
        return (0, u.isText)(t) && e(t.data);
      } : function(t) {
        return (0, u.isText)(t) && t.data === e;
      };
    }
  };
  function d(e, t) {
    return typeof t == "function" ? function(s) {
      return (0, u.isTag)(s) && t(s.attribs[e]);
    } : function(s) {
      return (0, u.isTag)(s) && s.attribs[e] === t;
    };
  }
  function b(e, t) {
    return function(s) {
      return e(s) || t(s);
    };
  }
  function x(e) {
    var t = Object.keys(e).map(function(s) {
      var y = e[s];
      return Object.prototype.hasOwnProperty.call(v, s) ? v[s](y) : d(s, y);
    });
    return t.length === 0 ? null : t.reduce(b);
  }
  function o(e, t) {
    var s = x(e);
    return s ? s(t) : !0;
  }
  function h(e, t, s, y) {
    y === void 0 && (y = 1 / 0);
    var p = x(e);
    return p ? (0, S.filter)(p, t, s, y) : [];
  }
  function g(e, t, s) {
    return s === void 0 && (s = !0), Array.isArray(t) || (t = [t]), (0, S.findOne)(d("id", e), t, s);
  }
  function i(e, t, s, y) {
    return s === void 0 && (s = !0), y === void 0 && (y = 1 / 0), (0, S.filter)(v.tag_name(e), t, s, y);
  }
  function r(e, t, s, y) {
    return s === void 0 && (s = !0), y === void 0 && (y = 1 / 0), (0, S.filter)(d("class", e), t, s, y);
  }
  function c(e, t, s, y) {
    return s === void 0 && (s = !0), y === void 0 && (y = 1 / 0), (0, S.filter)(v.tag_type(e), t, s, y);
  }
  return le;
}
var fe = {}, cu;
function gr() {
  if (cu) return fe;
  cu = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.DocumentPosition = void 0, fe.removeSubsets = S, fe.compareDocumentPosition = d, fe.uniqueSort = b;
  var u = /* @__PURE__ */ de();
  function S(x) {
    for (var o = x.length; --o >= 0; ) {
      var h = x[o];
      if (o > 0 && x.lastIndexOf(h, o - 1) >= 0) {
        x.splice(o, 1);
        continue;
      }
      for (var g = h.parent; g; g = g.parent)
        if (x.includes(g)) {
          x.splice(o, 1);
          break;
        }
    }
    return x;
  }
  var v;
  (function(x) {
    x[x.DISCONNECTED = 1] = "DISCONNECTED", x[x.PRECEDING = 2] = "PRECEDING", x[x.FOLLOWING = 4] = "FOLLOWING", x[x.CONTAINS = 8] = "CONTAINS", x[x.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(v || (fe.DocumentPosition = v = {}));
  function d(x, o) {
    var h = [], g = [];
    if (x === o)
      return 0;
    for (var i = (0, u.hasChildren)(x) ? x : x.parent; i; )
      h.unshift(i), i = i.parent;
    for (i = (0, u.hasChildren)(o) ? o : o.parent; i; )
      g.unshift(i), i = i.parent;
    for (var r = Math.min(h.length, g.length), c = 0; c < r && h[c] === g[c]; )
      c++;
    if (c === 0)
      return v.DISCONNECTED;
    var e = h[c - 1], t = e.children, s = h[c], y = g[c];
    return t.indexOf(s) > t.indexOf(y) ? e === o ? v.FOLLOWING | v.CONTAINED_BY : v.FOLLOWING : e === x ? v.PRECEDING | v.CONTAINS : v.PRECEDING;
  }
  function b(x) {
    return x = x.filter(function(o, h, g) {
      return !g.includes(o, h + 1);
    }), x.sort(function(o, h) {
      var g = d(o, h);
      return g & v.PRECEDING ? -1 : g & v.FOLLOWING ? 1 : 0;
    }), x;
  }
  return fe;
}
var qe = {}, lu;
function yr() {
  if (lu) return qe;
  lu = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getFeed = v;
  var u = /* @__PURE__ */ $u(), S = /* @__PURE__ */ Qu();
  function v(e) {
    var t = g(c, e);
    return t ? t.name === "feed" ? d(t) : b(t) : null;
  }
  function d(e) {
    var t, s = e.children, y = {
      type: "atom",
      items: (0, S.getElementsByTagName)("entry", s).map(function(f) {
        var m, l = f.children, a = { media: h(l) };
        r(a, "id", "id", l), r(a, "title", "title", l);
        var w = (m = g("link", l)) === null || m === void 0 ? void 0 : m.attribs.href;
        w && (a.link = w);
        var T = i("summary", l) || i("content", l);
        T && (a.description = T);
        var A = i("updated", l);
        return A && (a.pubDate = new Date(A)), a;
      })
    };
    r(y, "id", "id", s), r(y, "title", "title", s);
    var p = (t = g("link", s)) === null || t === void 0 ? void 0 : t.attribs.href;
    p && (y.link = p), r(y, "description", "subtitle", s);
    var n = i("updated", s);
    return n && (y.updated = new Date(n)), r(y, "author", "email", s, !0), y;
  }
  function b(e) {
    var t, s, y = (s = (t = g("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && s !== void 0 ? s : [], p = {
      type: e.name.substr(0, 3),
      id: "",
      items: (0, S.getElementsByTagName)("item", e.children).map(function(f) {
        var m = f.children, l = { media: h(m) };
        r(l, "id", "guid", m), r(l, "title", "title", m), r(l, "link", "link", m), r(l, "description", "description", m);
        var a = i("pubDate", m) || i("dc:date", m);
        return a && (l.pubDate = new Date(a)), l;
      })
    };
    r(p, "title", "title", y), r(p, "link", "link", y), r(p, "description", "description", y);
    var n = i("lastBuildDate", y);
    return n && (p.updated = new Date(n)), r(p, "author", "managingEditor", y, !0), p;
  }
  var x = ["url", "type", "lang"], o = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
  ];
  function h(e) {
    return (0, S.getElementsByTagName)("media:content", e).map(function(t) {
      for (var s = t.attribs, y = {
        medium: s.medium,
        isDefault: !!s.isDefault
      }, p = 0, n = x; p < n.length; p++) {
        var f = n[p];
        s[f] && (y[f] = s[f]);
      }
      for (var m = 0, l = o; m < l.length; m++) {
        var f = l[m];
        s[f] && (y[f] = parseInt(s[f], 10));
      }
      return s.expression && (y.expression = s.expression), y;
    });
  }
  function g(e, t) {
    return (0, S.getElementsByTagName)(e, t, !0, 1)[0];
  }
  function i(e, t, s) {
    return s === void 0 && (s = !1), (0, u.textContent)((0, S.getElementsByTagName)(e, t, s, 1)).trim();
  }
  function r(e, t, s, y, p) {
    p === void 0 && (p = !1);
    var n = i(s, y, p);
    n && (e[t] = n);
  }
  function c(e) {
    return e === "rss" || e === "feed" || e === "rdf:RDF";
  }
  return qe;
}
var fu;
function Je() {
  return fu || (fu = 1, (function(u) {
    var S = me && me.__createBinding || (Object.create ? (function(b, x, o, h) {
      h === void 0 && (h = o);
      var g = Object.getOwnPropertyDescriptor(x, o);
      (!g || ("get" in g ? !x.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
        return x[o];
      } }), Object.defineProperty(b, h, g);
    }) : (function(b, x, o, h) {
      h === void 0 && (h = o), b[h] = x[o];
    })), v = me && me.__exportStar || function(b, x) {
      for (var o in b) o !== "default" && !Object.prototype.hasOwnProperty.call(x, o) && S(x, b, o);
    };
    Object.defineProperty(u, "__esModule", { value: !0 }), u.hasChildren = u.isDocument = u.isComment = u.isText = u.isCDATA = u.isTag = void 0, v(/* @__PURE__ */ $u(), u), v(/* @__PURE__ */ pr(), u), v(/* @__PURE__ */ mr(), u), v(/* @__PURE__ */ Xu(), u), v(/* @__PURE__ */ Qu(), u), v(/* @__PURE__ */ gr(), u), v(/* @__PURE__ */ yr(), u);
    var d = /* @__PURE__ */ de();
    Object.defineProperty(u, "isTag", { enumerable: !0, get: function() {
      return d.isTag;
    } }), Object.defineProperty(u, "isCDATA", { enumerable: !0, get: function() {
      return d.isCDATA;
    } }), Object.defineProperty(u, "isText", { enumerable: !0, get: function() {
      return d.isText;
    } }), Object.defineProperty(u, "isComment", { enumerable: !0, get: function() {
      return d.isComment;
    } }), Object.defineProperty(u, "isDocument", { enumerable: !0, get: function() {
      return d.isDocument;
    } }), Object.defineProperty(u, "hasChildren", { enumerable: !0, get: function() {
      return d.hasChildren;
    } });
  })(me)), me;
}
var du;
function xr() {
  return du || (du = 1, (function(u) {
    var S = Y && Y.__createBinding || (Object.create ? (function(n, f, m, l) {
      l === void 0 && (l = m);
      var a = Object.getOwnPropertyDescriptor(f, m);
      (!a || ("get" in a ? !f.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
        return f[m];
      } }), Object.defineProperty(n, l, a);
    }) : (function(n, f, m, l) {
      l === void 0 && (l = m), n[l] = f[m];
    })), v = Y && Y.__setModuleDefault || (Object.create ? (function(n, f) {
      Object.defineProperty(n, "default", { enumerable: !0, value: f });
    }) : function(n, f) {
      n.default = f;
    }), d = Y && Y.__importStar || function(n) {
      if (n && n.__esModule) return n;
      var f = {};
      if (n != null) for (var m in n) m !== "default" && Object.prototype.hasOwnProperty.call(n, m) && S(f, n, m);
      return v(f, n), f;
    }, b = Y && Y.__importDefault || function(n) {
      return n && n.__esModule ? n : { default: n };
    };
    Object.defineProperty(u, "__esModule", { value: !0 }), u.DomUtils = u.parseFeed = u.getFeed = u.ElementType = u.Tokenizer = u.createDomStream = u.parseDOM = u.parseDocument = u.DefaultHandler = u.DomHandler = u.Parser = void 0;
    var x = /* @__PURE__ */ Wt(), o = /* @__PURE__ */ Wt();
    Object.defineProperty(u, "Parser", { enumerable: !0, get: function() {
      return o.Parser;
    } });
    var h = /* @__PURE__ */ de(), g = /* @__PURE__ */ de();
    Object.defineProperty(u, "DomHandler", { enumerable: !0, get: function() {
      return g.DomHandler;
    } }), Object.defineProperty(u, "DefaultHandler", { enumerable: !0, get: function() {
      return g.DomHandler;
    } });
    function i(n, f) {
      var m = new h.DomHandler(void 0, f);
      return new x.Parser(m, f).end(n), m.root;
    }
    u.parseDocument = i;
    function r(n, f) {
      return i(n, f).children;
    }
    u.parseDOM = r;
    function c(n, f, m) {
      var l = new h.DomHandler(n, f, m);
      return new x.Parser(l, f);
    }
    u.createDomStream = c;
    var e = /* @__PURE__ */ Wu();
    Object.defineProperty(u, "Tokenizer", { enumerable: !0, get: function() {
      return b(e).default;
    } }), u.ElementType = d(/* @__PURE__ */ Se());
    var t = /* @__PURE__ */ Je(), s = /* @__PURE__ */ Je();
    Object.defineProperty(u, "getFeed", { enumerable: !0, get: function() {
      return s.getFeed;
    } });
    var y = { xmlMode: !0 };
    function p(n, f) {
      return f === void 0 && (f = y), (0, t.getFeed)(r(n, f));
    }
    u.parseFeed = p, u.DomUtils = d(/* @__PURE__ */ Je());
  })(Y)), Y;
}
var Ze, hu;
function vr() {
  return hu || (hu = 1, Ze = (u) => {
    if (typeof u != "string")
      throw new TypeError("Expected a string");
    return u.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }), Ze;
}
var Ce = {}, bu;
function wr() {
  if (bu) return Ce;
  bu = 1, Object.defineProperty(Ce, "__esModule", { value: !0 });
  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  function u(v) {
    return Object.prototype.toString.call(v) === "[object Object]";
  }
  function S(v) {
    var d, b;
    return u(v) === !1 ? !1 : (d = v.constructor, d === void 0 ? !0 : (b = d.prototype, !(u(b) === !1 || b.hasOwnProperty("isPrototypeOf") === !1)));
  }
  return Ce.isPlainObject = S, Ce;
}
var Ye, pu;
function Sr() {
  if (pu) return Ye;
  pu = 1;
  var u = function(f) {
    return S(f) && !v(f);
  };
  function S(n) {
    return !!n && typeof n == "object";
  }
  function v(n) {
    var f = Object.prototype.toString.call(n);
    return f === "[object RegExp]" || f === "[object Date]" || x(n);
  }
  var d = typeof Symbol == "function" && Symbol.for, b = d ? Symbol.for("react.element") : 60103;
  function x(n) {
    return n.$$typeof === b;
  }
  function o(n) {
    return Array.isArray(n) ? [] : {};
  }
  function h(n, f) {
    return f.clone !== !1 && f.isMergeableObject(n) ? y(o(n), n, f) : n;
  }
  function g(n, f, m) {
    return n.concat(f).map(function(l) {
      return h(l, m);
    });
  }
  function i(n, f) {
    if (!f.customMerge)
      return y;
    var m = f.customMerge(n);
    return typeof m == "function" ? m : y;
  }
  function r(n) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(f) {
      return Object.propertyIsEnumerable.call(n, f);
    }) : [];
  }
  function c(n) {
    return Object.keys(n).concat(r(n));
  }
  function e(n, f) {
    try {
      return f in n;
    } catch (m) {
      return !1;
    }
  }
  function t(n, f) {
    return e(n, f) && !(Object.hasOwnProperty.call(n, f) && Object.propertyIsEnumerable.call(n, f));
  }
  function s(n, f, m) {
    var l = {};
    return m.isMergeableObject(n) && c(n).forEach(function(a) {
      l[a] = h(n[a], m);
    }), c(f).forEach(function(a) {
      t(n, a) || (e(n, a) && m.isMergeableObject(f[a]) ? l[a] = i(a, m)(n[a], f[a], m) : l[a] = h(f[a], m));
    }), l;
  }
  function y(n, f, m) {
    m = m || {}, m.arrayMerge = m.arrayMerge || g, m.isMergeableObject = m.isMergeableObject || u, m.cloneUnlessOtherwiseSpecified = h;
    var l = Array.isArray(f), a = Array.isArray(n), w = l === a;
    return w ? l ? m.arrayMerge(n, f, m) : s(n, f, m) : h(f, m);
  }
  y.all = function(f, m) {
    if (!Array.isArray(f))
      throw new Error("first argument should be an array");
    return f.reduce(function(l, a) {
      return y(l, a, m);
    }, {});
  };
  var p = y;
  return Ye = p, Ye;
}
var Le = { exports: {} }, Tr = Le.exports, mu;
function Er() {
  return mu || (mu = 1, (function(u) {
    (function(S, v) {
      u.exports ? u.exports = v() : S.parseSrcset = v();
    })(Tr, function() {
      return function(S) {
        function v(l) {
          return l === " " || // space
          l === "	" || // horizontal tab
          l === `
` || // new line
          l === "\f" || // form feed
          l === "\r";
        }
        function d(l) {
          var a, w = l.exec(S.substring(p));
          if (w)
            return a = w[0], p += a.length, a;
        }
        for (var b = S.length, x = /^[ \t\n\r\u000c]+/, o = /^[, \t\n\r\u000c]+/, h = /^[^ \t\n\r\u000c]+/, g = /[,]+$/, i = /^\d+$/, r = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, c, e, t, s, y, p = 0, n = []; ; ) {
          if (d(o), p >= b)
            return n;
          c = d(h), e = [], c.slice(-1) === "," ? (c = c.replace(g, ""), m()) : f();
        }
        function f() {
          for (d(x), t = "", s = "in descriptor"; ; ) {
            if (y = S.charAt(p), s === "in descriptor")
              if (v(y))
                t && (e.push(t), t = "", s = "after descriptor");
              else if (y === ",") {
                p += 1, t && e.push(t), m();
                return;
              } else if (y === "(")
                t = t + y, s = "in parens";
              else if (y === "") {
                t && e.push(t), m();
                return;
              } else
                t = t + y;
            else if (s === "in parens")
              if (y === ")")
                t = t + y, s = "in descriptor";
              else if (y === "") {
                e.push(t), m();
                return;
              } else
                t = t + y;
            else if (s === "after descriptor" && !v(y))
              if (y === "") {
                m();
                return;
              } else
                s = "in descriptor", p -= 1;
            p += 1;
          }
        }
        function m() {
          var l = !1, a, w, T, A, I = {}, q, E, O, D, L;
          for (A = 0; A < e.length; A++)
            q = e[A], E = q[q.length - 1], O = q.substring(0, q.length - 1), D = parseInt(O, 10), L = parseFloat(O), i.test(O) && E === "w" ? ((a || w) && (l = !0), D === 0 ? l = !0 : a = D) : r.test(O) && E === "x" ? ((a || w || T) && (l = !0), L < 0 ? l = !0 : w = L) : i.test(O) && E === "h" ? ((T || w) && (l = !0), D === 0 ? l = !0 : T = D) : l = !0;
          l ? console && console.log && console.log("Invalid srcset descriptor found in '" + S + "' at '" + q + "'.") : (I.url = c, a && (I.w = a), w && (I.d = w), T && (I.h = T), n.push(I));
        }
      };
    });
  })(Le)), Le.exports;
}
var De = { exports: {} }, gu;
function Ar() {
  if (gu) return De.exports;
  gu = 1;
  var u = String, S = function() {
    return { isColorSupported: !1, reset: u, bold: u, dim: u, italic: u, underline: u, inverse: u, hidden: u, strikethrough: u, black: u, red: u, green: u, yellow: u, blue: u, magenta: u, cyan: u, white: u, gray: u, bgBlack: u, bgRed: u, bgGreen: u, bgYellow: u, bgBlue: u, bgMagenta: u, bgCyan: u, bgWhite: u, blackBright: u, redBright: u, greenBright: u, yellowBright: u, blueBright: u, magentaBright: u, cyanBright: u, whiteBright: u, bgBlackBright: u, bgRedBright: u, bgGreenBright: u, bgYellowBright: u, bgBlueBright: u, bgMagentaBright: u, bgCyanBright: u, bgWhiteBright: u };
  };
  return De.exports = S(), De.exports.createColors = S, De.exports;
}
const Or = {}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" })), ue = /* @__PURE__ */ or(Nr);
var Ke, yu;
function Nt() {
  if (yu) return Ke;
  yu = 1;
  let u = /* @__PURE__ */ Ar(), S = ue;
  class v extends Error {
    constructor(b, x, o, h, g, i) {
      super(b), this.name = "CssSyntaxError", this.reason = b, g && (this.file = g), h && (this.source = h), i && (this.plugin = i), typeof x != "undefined" && typeof o != "undefined" && (typeof x == "number" ? (this.line = x, this.column = o) : (this.line = x.line, this.column = x.column, this.endLine = o.line, this.endColumn = o.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, v);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line != "undefined" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(b) {
      if (!this.source) return "";
      let x = this.source;
      b == null && (b = u.isColorSupported);
      let o = (t) => t, h = (t) => t, g = (t) => t;
      if (b) {
        let { bold: t, gray: s, red: y } = u.createColors(!0);
        h = (p) => t(y(p)), o = (p) => s(p), S && (g = (p) => S(p));
      }
      let i = x.split(/\r?\n/), r = Math.max(this.line - 3, 0), c = Math.min(this.line + 2, i.length), e = String(c).length;
      return i.slice(r, c).map((t, s) => {
        let y = r + 1 + s, p = " " + (" " + y).slice(-e) + " | ";
        if (y === this.line) {
          if (t.length > 160) {
            let f = 20, m = Math.max(0, this.column - f), l = Math.max(
              this.column + f,
              this.endColumn + f
            ), a = t.slice(m, l), w = o(p.replace(/\d/g, " ")) + t.slice(0, Math.min(this.column - 1, f - 1)).replace(/[^\t]/g, " ");
            return h(">") + o(p) + g(a) + `
 ` + w + h("^");
          }
          let n = o(p.replace(/\d/g, " ")) + t.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return h(">") + o(p) + g(t) + `
 ` + n + h("^");
        }
        return " " + o(p) + g(t);
      }).join(`
`);
    }
    toString() {
      let b = this.showSourceCode();
      return b && (b = `

` + b + `
`), this.name + ": " + this.message + b;
    }
  }
  return Ke = v, v.default = v, Ke;
}
var et, xu;
function Ju() {
  if (xu) return et;
  xu = 1;
  const u = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
  };
  function S(d) {
    return d[0].toUpperCase() + d.slice(1);
  }
  class v {
    constructor(b) {
      this.builder = b;
    }
    atrule(b, x) {
      let o = "@" + b.name, h = b.params ? this.rawValue(b, "params") : "";
      if (typeof b.raws.afterName != "undefined" ? o += b.raws.afterName : h && (o += " "), b.nodes)
        this.block(b, o + h);
      else {
        let g = (b.raws.between || "") + (x ? ";" : "");
        this.builder(o + h + g, b);
      }
    }
    beforeAfter(b, x) {
      let o;
      b.type === "decl" ? o = this.raw(b, null, "beforeDecl") : b.type === "comment" ? o = this.raw(b, null, "beforeComment") : x === "before" ? o = this.raw(b, null, "beforeRule") : o = this.raw(b, null, "beforeClose");
      let h = b.parent, g = 0;
      for (; h && h.type !== "root"; )
        g += 1, h = h.parent;
      if (o.includes(`
`)) {
        let i = this.raw(b, null, "indent");
        if (i.length)
          for (let r = 0; r < g; r++) o += i;
      }
      return o;
    }
    block(b, x) {
      let o = this.raw(b, "between", "beforeOpen");
      this.builder(x + o + "{", b, "start");
      let h;
      b.nodes && b.nodes.length ? (this.body(b), h = this.raw(b, "after")) : h = this.raw(b, "after", "emptyBody"), h && this.builder(h), this.builder("}", b, "end");
    }
    body(b) {
      let x = b.nodes.length - 1;
      for (; x > 0 && b.nodes[x].type === "comment"; )
        x -= 1;
      let o = this.raw(b, "semicolon");
      for (let h = 0; h < b.nodes.length; h++) {
        let g = b.nodes[h], i = this.raw(g, "before");
        i && this.builder(i), this.stringify(g, x !== h || o);
      }
    }
    comment(b) {
      let x = this.raw(b, "left", "commentLeft"), o = this.raw(b, "right", "commentRight");
      this.builder("/*" + x + b.text + o + "*/", b);
    }
    decl(b, x) {
      let o = this.raw(b, "between", "colon"), h = b.prop + o + this.rawValue(b, "value");
      b.important && (h += b.raws.important || " !important"), x && (h += ";"), this.builder(h, b);
    }
    document(b) {
      this.body(b);
    }
    raw(b, x, o) {
      let h;
      if (o || (o = x), x && (h = b.raws[x], typeof h != "undefined"))
        return h;
      let g = b.parent;
      if (o === "before" && (!g || g.type === "root" && g.first === b || g && g.type === "document"))
        return "";
      if (!g) return u[o];
      let i = b.root();
      if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[o] != "undefined")
        return i.rawCache[o];
      if (o === "before" || o === "after")
        return this.beforeAfter(b, o);
      {
        let r = "raw" + S(o);
        this[r] ? h = this[r](i, b) : i.walk((c) => {
          if (h = c.raws[x], typeof h != "undefined") return !1;
        });
      }
      return typeof h == "undefined" && (h = u[o]), i.rawCache[o] = h, h;
    }
    rawBeforeClose(b) {
      let x;
      return b.walk((o) => {
        if (o.nodes && o.nodes.length > 0 && typeof o.raws.after != "undefined")
          return x = o.raws.after, x.includes(`
`) && (x = x.replace(/[^\n]+$/, "")), !1;
      }), x && (x = x.replace(/\S/g, "")), x;
    }
    rawBeforeComment(b, x) {
      let o;
      return b.walkComments((h) => {
        if (typeof h.raws.before != "undefined")
          return o = h.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
      }), typeof o == "undefined" ? o = this.raw(x, null, "beforeDecl") : o && (o = o.replace(/\S/g, "")), o;
    }
    rawBeforeDecl(b, x) {
      let o;
      return b.walkDecls((h) => {
        if (typeof h.raws.before != "undefined")
          return o = h.raws.before, o.includes(`
`) && (o = o.replace(/[^\n]+$/, "")), !1;
      }), typeof o == "undefined" ? o = this.raw(x, null, "beforeRule") : o && (o = o.replace(/\S/g, "")), o;
    }
    rawBeforeOpen(b) {
      let x;
      return b.walk((o) => {
        if (o.type !== "decl" && (x = o.raws.between, typeof x != "undefined"))
          return !1;
      }), x;
    }
    rawBeforeRule(b) {
      let x;
      return b.walk((o) => {
        if (o.nodes && (o.parent !== b || b.first !== o) && typeof o.raws.before != "undefined")
          return x = o.raws.before, x.includes(`
`) && (x = x.replace(/[^\n]+$/, "")), !1;
      }), x && (x = x.replace(/\S/g, "")), x;
    }
    rawColon(b) {
      let x;
      return b.walkDecls((o) => {
        if (typeof o.raws.between != "undefined")
          return x = o.raws.between.replace(/[^\s:]/g, ""), !1;
      }), x;
    }
    rawEmptyBody(b) {
      let x;
      return b.walk((o) => {
        if (o.nodes && o.nodes.length === 0 && (x = o.raws.after, typeof x != "undefined"))
          return !1;
      }), x;
    }
    rawIndent(b) {
      if (b.raws.indent) return b.raws.indent;
      let x;
      return b.walk((o) => {
        let h = o.parent;
        if (h && h !== b && h.parent && h.parent === b && typeof o.raws.before != "undefined") {
          let g = o.raws.before.split(`
`);
          return x = g[g.length - 1], x = x.replace(/\S/g, ""), !1;
        }
      }), x;
    }
    rawSemicolon(b) {
      let x;
      return b.walk((o) => {
        if (o.nodes && o.nodes.length && o.last.type === "decl" && (x = o.raws.semicolon, typeof x != "undefined"))
          return !1;
      }), x;
    }
    rawValue(b, x) {
      let o = b[x], h = b.raws[x];
      return h && h.value === o ? h.raw : o;
    }
    root(b) {
      this.body(b), b.raws.after && this.builder(b.raws.after);
    }
    rule(b) {
      this.block(b, this.rawValue(b, "selector")), b.raws.ownSemicolon && this.builder(b.raws.ownSemicolon, b, "end");
    }
    stringify(b, x) {
      if (!this[b.type])
        throw new Error(
          "Unknown AST node type " + b.type + ". Maybe you need to change PostCSS stringifier."
        );
      this[b.type](b, x);
    }
  }
  return et = v, v.default = v, et;
}
var tt, vu;
function Me() {
  if (vu) return tt;
  vu = 1;
  let u = Ju();
  function S(v, d) {
    new u(d).stringify(v);
  }
  return tt = S, S.default = S, tt;
}
var Pe = {}, wu;
function _t() {
  return wu || (wu = 1, Pe.isClean = Symbol("isClean"), Pe.my = Symbol("my")), Pe;
}
var ut, Su;
function ke() {
  if (Su) return ut;
  Su = 1;
  let u = Nt(), S = Ju(), v = Me(), { isClean: d, my: b } = _t();
  function x(g, i) {
    let r = new g.constructor();
    for (let c in g) {
      if (!Object.prototype.hasOwnProperty.call(g, c) || c === "proxyCache") continue;
      let e = g[c], t = typeof e;
      c === "parent" && t === "object" ? i && (r[c] = i) : c === "source" ? r[c] = e : Array.isArray(e) ? r[c] = e.map((s) => x(s, r)) : (t === "object" && e !== null && (e = x(e)), r[c] = e);
    }
    return r;
  }
  function o(g, i) {
    if (i && typeof i.offset != "undefined")
      return i.offset;
    let r = 1, c = 1, e = 0;
    for (let t = 0; t < g.length; t++) {
      if (c === i.line && r === i.column) {
        e = t;
        break;
      }
      g[t] === `
` ? (r = 1, c += 1) : r += 1;
    }
    return e;
  }
  class h {
    get proxyOf() {
      return this;
    }
    constructor(i = {}) {
      this.raws = {}, this[d] = !1, this[b] = !0;
      for (let r in i)
        if (r === "nodes") {
          this.nodes = [];
          for (let c of i[r])
            typeof c.clone == "function" ? this.append(c.clone()) : this.append(c);
        } else
          this[r] = i[r];
    }
    addToError(i) {
      if (i.postcssNode = this, i.stack && this.source && /\n\s{4}at /.test(i.stack)) {
        let r = this.source;
        i.stack = i.stack.replace(
          /\n\s{4}at /,
          `$&${r.input.from}:${r.start.line}:${r.start.column}$&`
        );
      }
      return i;
    }
    after(i) {
      return this.parent.insertAfter(this, i), this;
    }
    assign(i = {}) {
      for (let r in i)
        this[r] = i[r];
      return this;
    }
    before(i) {
      return this.parent.insertBefore(this, i), this;
    }
    cleanRaws(i) {
      delete this.raws.before, delete this.raws.after, i || delete this.raws.between;
    }
    clone(i = {}) {
      let r = x(this);
      for (let c in i)
        r[c] = i[c];
      return r;
    }
    cloneAfter(i = {}) {
      let r = this.clone(i);
      return this.parent.insertAfter(this, r), r;
    }
    cloneBefore(i = {}) {
      let r = this.clone(i);
      return this.parent.insertBefore(this, r), r;
    }
    error(i, r = {}) {
      if (this.source) {
        let { end: c, start: e } = this.rangeBy(r);
        return this.source.input.error(
          i,
          { column: e.column, line: e.line },
          { column: c.column, line: c.line },
          r
        );
      }
      return new u(i);
    }
    getProxyProcessor() {
      return {
        get(i, r) {
          return r === "proxyOf" ? i : r === "root" ? () => i.root().toProxy() : i[r];
        },
        set(i, r, c) {
          return i[r] === c || (i[r] = c, (r === "prop" || r === "value" || r === "name" || r === "params" || r === "important" || /* c8 ignore next */
          r === "text") && i.markDirty()), !0;
        }
      };
    }
    /* c8 ignore next 3 */
    markClean() {
      this[d] = !0;
    }
    markDirty() {
      if (this[d]) {
        this[d] = !1;
        let i = this;
        for (; i = i.parent; )
          i[d] = !1;
      }
    }
    next() {
      if (!this.parent) return;
      let i = this.parent.index(this);
      return this.parent.nodes[i + 1];
    }
    positionBy(i = {}) {
      let r = this.source.start;
      if (i.index)
        r = this.positionInside(i.index);
      else if (i.word) {
        let c = "document" in this.source.input ? this.source.input.document : this.source.input.css, t = c.slice(
          o(c, this.source.start),
          o(c, this.source.end)
        ).indexOf(i.word);
        t !== -1 && (r = this.positionInside(t));
      }
      return r;
    }
    positionInside(i) {
      let r = this.source.start.column, c = this.source.start.line, e = "document" in this.source.input ? this.source.input.document : this.source.input.css, t = o(e, this.source.start), s = t + i;
      for (let y = t; y < s; y++)
        e[y] === `
` ? (r = 1, c += 1) : r += 1;
      return { column: r, line: c, offset: s };
    }
    prev() {
      if (!this.parent) return;
      let i = this.parent.index(this);
      return this.parent.nodes[i - 1];
    }
    rangeBy(i = {}) {
      let r = "document" in this.source.input ? this.source.input.document : this.source.input.css, c = {
        column: this.source.start.column,
        line: this.source.start.line,
        offset: o(r, this.source.start)
      }, e = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line,
        offset: typeof this.source.end.offset == "number" ? (
          // `source.end.offset` is exclusive, so we don't need to add 1
          this.source.end.offset
        ) : (
          // Since line/column in this.source.end is inclusive,
          // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
          // So, we add 1 to convert it to exclusive.
          o(r, this.source.end) + 1
        )
      } : {
        column: c.column + 1,
        line: c.line,
        offset: c.offset + 1
      };
      if (i.word) {
        let s = r.slice(
          o(r, this.source.start),
          o(r, this.source.end)
        ).indexOf(i.word);
        s !== -1 && (c = this.positionInside(s), e = this.positionInside(s + i.word.length));
      } else
        i.start ? c = {
          column: i.start.column,
          line: i.start.line,
          offset: o(r, i.start)
        } : i.index && (c = this.positionInside(i.index)), i.end ? e = {
          column: i.end.column,
          line: i.end.line,
          offset: o(r, i.end)
        } : typeof i.endIndex == "number" ? e = this.positionInside(i.endIndex) : i.index && (e = this.positionInside(i.index + 1));
      return (e.line < c.line || e.line === c.line && e.column <= c.column) && (e = {
        column: c.column + 1,
        line: c.line,
        offset: c.offset + 1
      }), { end: e, start: c };
    }
    raw(i, r) {
      return new S().raw(this, i, r);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...i) {
      if (this.parent) {
        let r = this, c = !1;
        for (let e of i)
          e === this ? c = !0 : c ? (this.parent.insertAfter(r, e), r = e) : this.parent.insertBefore(r, e);
        c || this.remove();
      }
      return this;
    }
    root() {
      let i = this;
      for (; i.parent && i.parent.type !== "document"; )
        i = i.parent;
      return i;
    }
    toJSON(i, r) {
      let c = {}, e = r == null;
      r = r || /* @__PURE__ */ new Map();
      let t = 0;
      for (let s in this) {
        if (!Object.prototype.hasOwnProperty.call(this, s) || s === "parent" || s === "proxyCache") continue;
        let y = this[s];
        if (Array.isArray(y))
          c[s] = y.map((p) => typeof p == "object" && p.toJSON ? p.toJSON(null, r) : p);
        else if (typeof y == "object" && y.toJSON)
          c[s] = y.toJSON(null, r);
        else if (s === "source") {
          if (y == null) continue;
          let p = r.get(y.input);
          p == null && (p = t, r.set(y.input, t), t++), c[s] = {
            end: y.end,
            inputId: p,
            start: y.start
          };
        } else
          c[s] = y;
      }
      return e && (c.inputs = [...r.keys()].map((s) => s.toJSON())), c;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(i = v) {
      i.stringify && (i = i.stringify);
      let r = "";
      return i(this, (c) => {
        r += c;
      }), r;
    }
    warn(i, r, c = {}) {
      let e = { node: this };
      for (let t in c) e[t] = c[t];
      return i.warn(r, e);
    }
  }
  return ut = h, h.default = h, ut;
}
var rt, Tu;
function je() {
  if (Tu) return rt;
  Tu = 1;
  let u = ke();
  class S extends u {
    constructor(d) {
      super(d), this.type = "comment";
    }
  }
  return rt = S, S.default = S, rt;
}
var it, Eu;
function Be() {
  if (Eu) return it;
  Eu = 1;
  let u = ke();
  class S extends u {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(d) {
      d && typeof d.value != "undefined" && typeof d.value != "string" && (d = we(ae({}, d), { value: String(d.value) })), super(d), this.type = "decl";
    }
  }
  return it = S, S.default = S, it;
}
var nt, Au;
function ye() {
  if (Au) return nt;
  Au = 1;
  let u = je(), S = Be(), v = ke(), { isClean: d, my: b } = _t(), x, o, h, g;
  function i(e) {
    return e.map((t) => (t.nodes && (t.nodes = i(t.nodes)), delete t.source, t));
  }
  function r(e) {
    if (e[d] = !1, e.proxyOf.nodes)
      for (let t of e.proxyOf.nodes)
        r(t);
  }
  class c extends v {
    get first() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...t) {
      for (let s of t) {
        let y = this.normalize(s, this.last);
        for (let p of y) this.proxyOf.nodes.push(p);
      }
      return this.markDirty(), this;
    }
    cleanRaws(t) {
      if (super.cleanRaws(t), this.nodes)
        for (let s of this.nodes) s.cleanRaws(t);
    }
    each(t) {
      if (!this.proxyOf.nodes) return;
      let s = this.getIterator(), y, p;
      for (; this.indexes[s] < this.proxyOf.nodes.length && (y = this.indexes[s], p = t(this.proxyOf.nodes[y], y), p !== !1); )
        this.indexes[s] += 1;
      return delete this.indexes[s], p;
    }
    every(t) {
      return this.nodes.every(t);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let t = this.lastEach;
      return this.indexes[t] = 0, t;
    }
    getProxyProcessor() {
      return {
        get(t, s) {
          return s === "proxyOf" ? t : t[s] ? s === "each" || typeof s == "string" && s.startsWith("walk") ? (...y) => t[s](
            ...y.map((p) => typeof p == "function" ? (n, f) => p(n.toProxy(), f) : p)
          ) : s === "every" || s === "some" ? (y) => t[s](
            (p, ...n) => y(p.toProxy(), ...n)
          ) : s === "root" ? () => t.root().toProxy() : s === "nodes" ? t.nodes.map((y) => y.toProxy()) : s === "first" || s === "last" ? t[s].toProxy() : t[s] : t[s];
        },
        set(t, s, y) {
          return t[s] === y || (t[s] = y, (s === "name" || s === "params" || s === "selector") && t.markDirty()), !0;
        }
      };
    }
    index(t) {
      return typeof t == "number" ? t : (t.proxyOf && (t = t.proxyOf), this.proxyOf.nodes.indexOf(t));
    }
    insertAfter(t, s) {
      let y = this.index(t), p = this.normalize(s, this.proxyOf.nodes[y]).reverse();
      y = this.index(t);
      for (let f of p) this.proxyOf.nodes.splice(y + 1, 0, f);
      let n;
      for (let f in this.indexes)
        n = this.indexes[f], y < n && (this.indexes[f] = n + p.length);
      return this.markDirty(), this;
    }
    insertBefore(t, s) {
      let y = this.index(t), p = y === 0 ? "prepend" : !1, n = this.normalize(
        s,
        this.proxyOf.nodes[y],
        p
      ).reverse();
      y = this.index(t);
      for (let m of n) this.proxyOf.nodes.splice(y, 0, m);
      let f;
      for (let m in this.indexes)
        f = this.indexes[m], y <= f && (this.indexes[m] = f + n.length);
      return this.markDirty(), this;
    }
    normalize(t, s) {
      if (typeof t == "string")
        t = i(o(t).nodes);
      else if (typeof t == "undefined")
        t = [];
      else if (Array.isArray(t)) {
        t = t.slice(0);
        for (let p of t)
          p.parent && p.parent.removeChild(p, "ignore");
      } else if (t.type === "root" && this.type !== "document") {
        t = t.nodes.slice(0);
        for (let p of t)
          p.parent && p.parent.removeChild(p, "ignore");
      } else if (t.type)
        t = [t];
      else if (t.prop) {
        if (typeof t.value == "undefined")
          throw new Error("Value field is missed in node creation");
        typeof t.value != "string" && (t.value = String(t.value)), t = [new S(t)];
      } else if (t.selector || t.selectors)
        t = [new g(t)];
      else if (t.name)
        t = [new x(t)];
      else if (t.text)
        t = [new u(t)];
      else
        throw new Error("Unknown node type in node creation");
      return t.map((p) => (p[b] || c.rebuild(p), p = p.proxyOf, p.parent && p.parent.removeChild(p), p[d] && r(p), p.raws || (p.raws = {}), typeof p.raws.before == "undefined" && s && typeof s.raws.before != "undefined" && (p.raws.before = s.raws.before.replace(/\S/g, "")), p.parent = this.proxyOf, p));
    }
    prepend(...t) {
      t = t.reverse();
      for (let s of t) {
        let y = this.normalize(s, this.first, "prepend").reverse();
        for (let p of y) this.proxyOf.nodes.unshift(p);
        for (let p in this.indexes)
          this.indexes[p] = this.indexes[p] + y.length;
      }
      return this.markDirty(), this;
    }
    push(t) {
      return t.parent = this, this.proxyOf.nodes.push(t), this;
    }
    removeAll() {
      for (let t of this.proxyOf.nodes) t.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(t) {
      t = this.index(t), this.proxyOf.nodes[t].parent = void 0, this.proxyOf.nodes.splice(t, 1);
      let s;
      for (let y in this.indexes)
        s = this.indexes[y], s >= t && (this.indexes[y] = s - 1);
      return this.markDirty(), this;
    }
    replaceValues(t, s, y) {
      return y || (y = s, s = {}), this.walkDecls((p) => {
        s.props && !s.props.includes(p.prop) || s.fast && !p.value.includes(s.fast) || (p.value = p.value.replace(t, y));
      }), this.markDirty(), this;
    }
    some(t) {
      return this.nodes.some(t);
    }
    walk(t) {
      return this.each((s, y) => {
        let p;
        try {
          p = t(s, y);
        } catch (n) {
          throw s.addToError(n);
        }
        return p !== !1 && s.walk && (p = s.walk(t)), p;
      });
    }
    walkAtRules(t, s) {
      return s ? t instanceof RegExp ? this.walk((y, p) => {
        if (y.type === "atrule" && t.test(y.name))
          return s(y, p);
      }) : this.walk((y, p) => {
        if (y.type === "atrule" && y.name === t)
          return s(y, p);
      }) : (s = t, this.walk((y, p) => {
        if (y.type === "atrule")
          return s(y, p);
      }));
    }
    walkComments(t) {
      return this.walk((s, y) => {
        if (s.type === "comment")
          return t(s, y);
      });
    }
    walkDecls(t, s) {
      return s ? t instanceof RegExp ? this.walk((y, p) => {
        if (y.type === "decl" && t.test(y.prop))
          return s(y, p);
      }) : this.walk((y, p) => {
        if (y.type === "decl" && y.prop === t)
          return s(y, p);
      }) : (s = t, this.walk((y, p) => {
        if (y.type === "decl")
          return s(y, p);
      }));
    }
    walkRules(t, s) {
      return s ? t instanceof RegExp ? this.walk((y, p) => {
        if (y.type === "rule" && t.test(y.selector))
          return s(y, p);
      }) : this.walk((y, p) => {
        if (y.type === "rule" && y.selector === t)
          return s(y, p);
      }) : (s = t, this.walk((y, p) => {
        if (y.type === "rule")
          return s(y, p);
      }));
    }
  }
  return c.registerParse = (e) => {
    o = e;
  }, c.registerRule = (e) => {
    g = e;
  }, c.registerAtRule = (e) => {
    x = e;
  }, c.registerRoot = (e) => {
    h = e;
  }, nt = c, c.default = c, c.rebuild = (e) => {
    e.type === "atrule" ? Object.setPrototypeOf(e, x.prototype) : e.type === "rule" ? Object.setPrototypeOf(e, g.prototype) : e.type === "decl" ? Object.setPrototypeOf(e, S.prototype) : e.type === "comment" ? Object.setPrototypeOf(e, u.prototype) : e.type === "root" && Object.setPrototypeOf(e, h.prototype), e[b] = !0, e.nodes && e.nodes.forEach((t) => {
      c.rebuild(t);
    });
  }, nt;
}
var at, Ou;
function It() {
  if (Ou) return at;
  Ou = 1;
  let u = ye();
  class S extends u {
    constructor(d) {
      super(d), this.type = "atrule";
    }
    append(...d) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...d);
    }
    prepend(...d) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...d);
    }
  }
  return at = S, S.default = S, u.registerAtRule(S), at;
}
var st, Nu;
function qt() {
  if (Nu) return st;
  Nu = 1;
  let u = ye(), S, v;
  class d extends u {
    constructor(x) {
      super(ae({ type: "document" }, x)), this.nodes || (this.nodes = []);
    }
    toResult(x = {}) {
      return new S(new v(), this, x).stringify();
    }
  }
  return d.registerLazyResult = (b) => {
    S = b;
  }, d.registerProcessor = (b) => {
    v = b;
  }, st = d, d.default = d, st;
}
var ot, _u;
function _r() {
  if (_u) return ot;
  _u = 1;
  let u = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return ot = { nanoid: (d = 21) => {
    let b = "", x = d | 0;
    for (; x--; )
      b += u[Math.random() * 64 | 0];
    return b;
  }, customAlphabet: (d, b = 21) => (x = b) => {
    let o = "", h = x | 0;
    for (; h--; )
      o += d[Math.random() * d.length | 0];
    return o;
  } }, ot;
}
var ct, Iu;
function Zu() {
  if (Iu) return ct;
  Iu = 1;
  let { existsSync: u, readFileSync: S } = ue, { dirname: v, join: d } = ue, { SourceMapConsumer: b, SourceMapGenerator: x } = ue;
  function o(g) {
    return Buffer ? Buffer.from(g, "base64").toString() : window.atob(g);
  }
  class h {
    constructor(i, r) {
      if (r.map === !1) return;
      this.loadAnnotation(i), this.inline = this.startWith(this.annotation, "data:");
      let c = r.map ? r.map.prev : void 0, e = this.loadMap(r.from, c);
      !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = v(this.mapFile)), e && (this.text = e);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new b(this.text)), this.consumerCache;
    }
    decodeInline(i) {
      let r = /^data:application\/json;charset=utf-?8;base64,/, c = /^data:application\/json;base64,/, e = /^data:application\/json;charset=utf-?8,/, t = /^data:application\/json,/, s = i.match(e) || i.match(t);
      if (s)
        return decodeURIComponent(i.substr(s[0].length));
      let y = i.match(r) || i.match(c);
      if (y)
        return o(i.substr(y[0].length));
      let p = i.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + p);
    }
    getAnnotationURL(i) {
      return i.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(i) {
      return typeof i != "object" ? !1 : typeof i.mappings == "string" || typeof i._mappings == "string" || Array.isArray(i.sections);
    }
    loadAnnotation(i) {
      let r = i.match(/\/\*\s*# sourceMappingURL=/g);
      if (!r) return;
      let c = i.lastIndexOf(r.pop()), e = i.indexOf("*/", c);
      c > -1 && e > -1 && (this.annotation = this.getAnnotationURL(i.substring(c, e)));
    }
    loadFile(i) {
      if (this.root = v(i), u(i))
        return this.mapFile = i, S(i, "utf-8").toString().trim();
    }
    loadMap(i, r) {
      if (r === !1) return !1;
      if (r) {
        if (typeof r == "string")
          return r;
        if (typeof r == "function") {
          let c = r(i);
          if (c) {
            let e = this.loadFile(c);
            if (!e)
              throw new Error(
                "Unable to load previous source map: " + c.toString()
              );
            return e;
          }
        } else {
          if (r instanceof b)
            return x.fromSourceMap(r).toString();
          if (r instanceof x)
            return r.toString();
          if (this.isMap(r))
            return JSON.stringify(r);
          throw new Error(
            "Unsupported previous source map format: " + r.toString()
          );
        }
      } else {
        if (this.inline)
          return this.decodeInline(this.annotation);
        if (this.annotation) {
          let c = this.annotation;
          return i && (c = d(v(i), c)), this.loadFile(c);
        }
      }
    }
    startWith(i, r) {
      return i ? i.substr(0, r.length) === r : !1;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return ct = h, h.default = h, ct;
}
var lt, qu;
function Ue() {
  if (qu) return lt;
  qu = 1;
  let { nanoid: u } = /* @__PURE__ */ _r(), { isAbsolute: S, resolve: v } = ue, { SourceMapConsumer: d, SourceMapGenerator: b } = ue, { fileURLToPath: x, pathToFileURL: o } = ue, h = Nt(), g = Zu(), i = ue, r = Symbol("lineToIndexCache"), c = !!(d && b), e = !!(v && S);
  function t(y) {
    if (y[r]) return y[r];
    let p = y.css.split(`
`), n = new Array(p.length), f = 0;
    for (let m = 0, l = p.length; m < l; m++)
      n[m] = f, f += p[m].length + 1;
    return y[r] = n, n;
  }
  class s {
    get from() {
      return this.file || this.id;
    }
    constructor(p, n = {}) {
      if (p === null || typeof p == "undefined" || typeof p == "object" && !p.toString)
        throw new Error(`PostCSS received ${p} instead of CSS string`);
      if (this.css = p.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, n.document && (this.document = n.document.toString()), n.from && (!e || /^\w+:\/\//.test(n.from) || S(n.from) ? this.file = n.from : this.file = v(n.from)), e && c) {
        let f = new g(this.css, n);
        if (f.text) {
          this.map = f;
          let m = f.consumer().file;
          !this.file && m && (this.file = this.mapResolve(m));
        }
      }
      this.file || (this.id = "<input css " + u(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(p, n, f, m = {}) {
      let l, a, w, T, A;
      if (n && typeof n == "object") {
        let q = n, E = f;
        if (typeof q.offset == "number") {
          T = q.offset;
          let O = this.fromOffset(T);
          n = O.line, f = O.col;
        } else
          n = q.line, f = q.column, T = this.fromLineAndColumn(n, f);
        if (typeof E.offset == "number") {
          w = E.offset;
          let O = this.fromOffset(w);
          a = O.line, l = O.col;
        } else
          a = E.line, l = E.column, w = this.fromLineAndColumn(E.line, E.column);
      } else if (f)
        T = this.fromLineAndColumn(n, f);
      else {
        T = n;
        let q = this.fromOffset(T);
        n = q.line, f = q.col;
      }
      let I = this.origin(n, f, a, l);
      return I ? A = new h(
        p,
        I.endLine === void 0 ? I.line : { column: I.column, line: I.line },
        I.endLine === void 0 ? I.column : { column: I.endColumn, line: I.endLine },
        I.source,
        I.file,
        m.plugin
      ) : A = new h(
        p,
        a === void 0 ? n : { column: f, line: n },
        a === void 0 ? f : { column: l, line: a },
        this.css,
        this.file,
        m.plugin
      ), A.input = { column: f, endColumn: l, endLine: a, endOffset: w, line: n, offset: T, source: this.css }, this.file && (o && (A.input.url = o(this.file).toString()), A.input.file = this.file), A;
    }
    fromLineAndColumn(p, n) {
      return t(this)[p - 1] + n - 1;
    }
    fromOffset(p) {
      let n = t(this), f = n[n.length - 1], m = 0;
      if (p >= f)
        m = n.length - 1;
      else {
        let l = n.length - 2, a;
        for (; m < l; )
          if (a = m + (l - m >> 1), p < n[a])
            l = a - 1;
          else if (p >= n[a + 1])
            m = a + 1;
          else {
            m = a;
            break;
          }
      }
      return {
        col: p - n[m] + 1,
        line: m + 1
      };
    }
    mapResolve(p) {
      return /^\w+:\/\//.test(p) ? p : v(this.map.consumer().sourceRoot || this.map.root || ".", p);
    }
    origin(p, n, f, m) {
      if (!this.map) return !1;
      let l = this.map.consumer(), a = l.originalPositionFor({ column: n, line: p });
      if (!a.source) return !1;
      let w;
      typeof f == "number" && (w = l.originalPositionFor({ column: m, line: f }));
      let T;
      S(a.source) ? T = o(a.source) : T = new URL(
        a.source,
        this.map.consumer().sourceRoot || o(this.map.mapFile)
      );
      let A = {
        column: a.column,
        endColumn: w && w.column,
        endLine: w && w.line,
        line: a.line,
        url: T.toString()
      };
      if (T.protocol === "file:")
        if (x)
          A.file = x(T);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let I = l.sourceContentFor(a.source);
      return I && (A.source = I), A;
    }
    toJSON() {
      let p = {};
      for (let n of ["hasBOM", "css", "file", "id"])
        this[n] != null && (p[n] = this[n]);
      return this.map && (p.map = ae({}, this.map), p.map.consumerCache && (p.map.consumerCache = void 0)), p;
    }
  }
  return lt = s, s.default = s, i && i.registerInput && i.registerInput(s), lt;
}
var ft, Cu;
function Te() {
  if (Cu) return ft;
  Cu = 1;
  let u = ye(), S, v;
  class d extends u {
    constructor(x) {
      super(x), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(x, o, h) {
      let g = super.normalize(x);
      if (o) {
        if (h === "prepend")
          this.nodes.length > 1 ? o.raws.before = this.nodes[1].raws.before : delete o.raws.before;
        else if (this.first !== o)
          for (let i of g)
            i.raws.before = o.raws.before;
      }
      return g;
    }
    removeChild(x, o) {
      let h = this.index(x);
      return !o && h === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[h].raws.before), super.removeChild(x);
    }
    toResult(x = {}) {
      return new S(new v(), this, x).stringify();
    }
  }
  return d.registerLazyResult = (b) => {
    S = b;
  }, d.registerProcessor = (b) => {
    v = b;
  }, ft = d, d.default = d, u.registerRoot(d), ft;
}
var dt, Du;
function Yu() {
  if (Du) return dt;
  Du = 1;
  let u = {
    comma(S) {
      return u.split(S, [","], !0);
    },
    space(S) {
      let v = [" ", `
`, "	"];
      return u.split(S, v);
    },
    split(S, v, d) {
      let b = [], x = "", o = !1, h = 0, g = !1, i = "", r = !1;
      for (let c of S)
        r ? r = !1 : c === "\\" ? r = !0 : g ? c === i && (g = !1) : c === '"' || c === "'" ? (g = !0, i = c) : c === "(" ? h += 1 : c === ")" ? h > 0 && (h -= 1) : h === 0 && v.includes(c) && (o = !0), o ? (x !== "" && b.push(x.trim()), x = "", o = !1) : x += c;
      return (d || x !== "") && b.push(x.trim()), b;
    }
  };
  return dt = u, u.default = u, dt;
}
var ht, Pu;
function Ct() {
  if (Pu) return ht;
  Pu = 1;
  let u = ye(), S = Yu();
  class v extends u {
    get selectors() {
      return S.comma(this.selector);
    }
    set selectors(b) {
      let x = this.selector ? this.selector.match(/,\s*/) : null, o = x ? x[0] : "," + this.raw("between", "beforeOpen");
      this.selector = b.join(o);
    }
    constructor(b) {
      super(b), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return ht = v, v.default = v, u.registerRule(v), ht;
}
var bt, Lu;
function Ir() {
  if (Lu) return bt;
  Lu = 1;
  let u = It(), S = je(), v = Be(), d = Ue(), b = Zu(), x = Te(), o = Ct();
  function h(g, i) {
    if (Array.isArray(g)) return g.map((s) => h(s));
    let e = g, { inputs: r } = e, c = ze(e, ["inputs"]);
    if (r) {
      i = [];
      for (let s of r) {
        let y = we(ae({}, s), { __proto__: d.prototype });
        y.map && (y.map = we(ae({}, y.map), {
          __proto__: b.prototype
        })), i.push(y);
      }
    }
    if (c.nodes && (c.nodes = g.nodes.map((s) => h(s, i))), c.source) {
      let t = c.source, { inputId: s } = t, y = ze(t, ["inputId"]);
      c.source = y, s != null && (c.source.input = i[s]);
    }
    if (c.type === "root")
      return new x(c);
    if (c.type === "decl")
      return new v(c);
    if (c.type === "rule")
      return new o(c);
    if (c.type === "comment")
      return new S(c);
    if (c.type === "atrule")
      return new u(c);
    throw new Error("Unknown node type: " + g.type);
  }
  return bt = h, h.default = h, bt;
}
var pt, Ru;
function Ku() {
  if (Ru) return pt;
  Ru = 1;
  let { dirname: u, relative: S, resolve: v, sep: d } = ue, { SourceMapConsumer: b, SourceMapGenerator: x } = ue, { pathToFileURL: o } = ue, h = Ue(), g = !!(b && x), i = !!(u && v && S && d);
  class r {
    constructor(e, t, s, y) {
      this.stringify = e, this.mapOpts = s.map || {}, this.root = t, this.opts = s, this.css = y, this.originalCSS = y, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let e;
      this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
      let t = `
`;
      this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
    }
    applyPrevMaps() {
      for (let e of this.previous()) {
        let t = this.toUrl(this.path(e.file)), s = e.root || u(e.file), y;
        this.mapOpts.sourcesContent === !1 ? (y = new b(e.text), y.sourcesContent && (y.sourcesContent = null)) : y = e.consumer(), this.map.applySourceMap(y, t, this.toUrl(this.path(s)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let e;
          for (let t = this.root.nodes.length - 1; t >= 0; t--)
            e = this.root.nodes[t], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(t);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), i && g && this.isMap())
        return this.generateMap();
      {
        let e = "";
        return this.stringify(this.root, (t) => {
          e += t;
        }), [e];
      }
    }
    generateMap() {
      if (this.root)
        this.generateString();
      else if (this.previous().length === 1) {
        let e = this.previous()[0].consumer();
        e.file = this.outputFile(), this.map = x.fromSourceMap(e, {
          ignoreInvalidMapping: !0
        });
      } else
        this.map = new x({
          file: this.outputFile(),
          ignoreInvalidMapping: !0
        }), this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new x({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      });
      let e = 1, t = 1, s = "<no source>", y = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      }, p, n;
      this.stringify(this.root, (f, m, l) => {
        if (this.css += f, m && l !== "end" && (y.generated.line = e, y.generated.column = t - 1, m.source && m.source.start ? (y.source = this.sourcePath(m), y.original.line = m.source.start.line, y.original.column = m.source.start.column - 1, this.map.addMapping(y)) : (y.source = s, y.original.line = 1, y.original.column = 0, this.map.addMapping(y))), n = f.match(/\n/g), n ? (e += n.length, p = f.lastIndexOf(`
`), t = f.length - p) : t += f.length, m && l !== "start") {
          let a = m.parent || { raws: {} };
          (!(m.type === "decl" || m.type === "atrule" && !m.nodes) || m !== a.last || a.raws.semicolon) && (m.source && m.source.end ? (y.source = this.sourcePath(m), y.original.line = m.source.end.line, y.original.column = m.source.end.column - 1, y.generated.line = e, y.generated.column = t - 2, this.map.addMapping(y)) : (y.source = s, y.original.line = 1, y.original.column = 0, y.generated.line = e, y.generated.column = t - 1, this.map.addMapping(y)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? !0 : typeof this.mapOpts.annotation != "undefined" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline != "undefined")
        return this.mapOpts.inline;
      let e = this.mapOpts.annotation;
      return typeof e != "undefined" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
    }
    isMap() {
      return typeof this.opts.map != "undefined" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent != "undefined" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(e) {
      if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
      let t = this.memoizedPaths.get(e);
      if (t) return t;
      let s = this.opts.to ? u(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (s = u(v(s, this.mapOpts.annotation)));
      let y = S(s, e);
      return this.memoizedPaths.set(e, y), y;
    }
    previous() {
      if (!this.previousMaps)
        if (this.previousMaps = [], this.root)
          this.root.walk((e) => {
            if (e.source && e.source.input.map) {
              let t = e.source.input.map;
              this.previousMaps.includes(t) || this.previousMaps.push(t);
            }
          });
        else {
          let e = new h(this.originalCSS, this.opts);
          e.map && this.previousMaps.push(e.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let e = {};
      if (this.root)
        this.root.walk((t) => {
          if (t.source) {
            let s = t.source.input.from;
            if (s && !e[s]) {
              e[s] = !0;
              let y = this.usesFileUrls ? this.toFileUrl(s) : this.toUrl(this.path(s));
              this.map.setSourceContent(y, t.source.input.css);
            }
          }
        });
      else if (this.css) {
        let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(t, this.css);
      }
    }
    sourcePath(e) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
    }
    toBase64(e) {
      return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
    }
    toFileUrl(e) {
      let t = this.memoizedFileURLs.get(e);
      if (t) return t;
      if (o) {
        let s = o(e).toString();
        return this.memoizedFileURLs.set(e, s), s;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(e) {
      let t = this.memoizedURLs.get(e);
      if (t) return t;
      d === "\\" && (e = e.replace(/\\/g, "/"));
      let s = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e, s), s;
    }
  }
  return pt = r, pt;
}
var mt, Mu;
function qr() {
  if (Mu) return mt;
  Mu = 1;
  const u = 39, S = 34, v = 92, d = 47, b = 10, x = 32, o = 12, h = 9, g = 13, i = 91, r = 93, c = 40, e = 41, t = 123, s = 125, y = 59, p = 42, n = 58, f = 64, m = /[\t\n\f\r "#'()/;[\\\]{}]/g, l = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, a = /.[\r\n"'(/\\]/, w = /[\da-f]/i;
  return mt = function(A, I = {}) {
    let q = A.css.valueOf(), E = I.ignoreErrors, O, D, L, N, j, B, V, G, W, re, xe = q.length, R = 0, J = [], he = [];
    function Ee() {
      return R;
    }
    function ve(_) {
      throw A.error("Unclosed " + _, R);
    }
    function He() {
      return he.length === 0 && R >= xe;
    }
    function Fe(_) {
      if (he.length) return he.pop();
      if (R >= xe) return;
      let P = _ ? _.ignoreUnclosed : !1;
      switch (O = q.charCodeAt(R), O) {
        case b:
        case x:
        case h:
        case g:
        case o: {
          N = R;
          do
            N += 1, O = q.charCodeAt(N);
          while (O === x || O === b || O === h || O === g || O === o);
          B = ["space", q.slice(R, N)], R = N - 1;
          break;
        }
        case i:
        case r:
        case t:
        case s:
        case n:
        case y:
        case e: {
          let C = String.fromCharCode(O);
          B = [C, C, R];
          break;
        }
        case c: {
          if (re = J.length ? J.pop()[1] : "", W = q.charCodeAt(R + 1), re === "url" && W !== u && W !== S && W !== x && W !== b && W !== h && W !== o && W !== g) {
            N = R;
            do {
              if (V = !1, N = q.indexOf(")", N + 1), N === -1)
                if (E || P) {
                  N = R;
                  break;
                } else
                  ve("bracket");
              for (G = N; q.charCodeAt(G - 1) === v; )
                G -= 1, V = !V;
            } while (V);
            B = ["brackets", q.slice(R, N + 1), R, N], R = N;
          } else
            N = q.indexOf(")", R + 1), D = q.slice(R, N + 1), N === -1 || a.test(D) ? B = ["(", "(", R] : (B = ["brackets", D, R, N], R = N);
          break;
        }
        case u:
        case S: {
          j = O === u ? "'" : '"', N = R;
          do {
            if (V = !1, N = q.indexOf(j, N + 1), N === -1)
              if (E || P) {
                N = R + 1;
                break;
              } else
                ve("string");
            for (G = N; q.charCodeAt(G - 1) === v; )
              G -= 1, V = !V;
          } while (V);
          B = ["string", q.slice(R, N + 1), R, N], R = N;
          break;
        }
        case f: {
          m.lastIndex = R + 1, m.test(q), m.lastIndex === 0 ? N = q.length - 1 : N = m.lastIndex - 2, B = ["at-word", q.slice(R, N + 1), R, N], R = N;
          break;
        }
        case v: {
          for (N = R, L = !0; q.charCodeAt(N + 1) === v; )
            N += 1, L = !L;
          if (O = q.charCodeAt(N + 1), L && O !== d && O !== x && O !== b && O !== h && O !== g && O !== o && (N += 1, w.test(q.charAt(N)))) {
            for (; w.test(q.charAt(N + 1)); )
              N += 1;
            q.charCodeAt(N + 1) === x && (N += 1);
          }
          B = ["word", q.slice(R, N + 1), R, N], R = N;
          break;
        }
        default: {
          O === d && q.charCodeAt(R + 1) === p ? (N = q.indexOf("*/", R + 2) + 1, N === 0 && (E || P ? N = q.length : ve("comment")), B = ["comment", q.slice(R, N + 1), R, N], R = N) : (l.lastIndex = R + 1, l.test(q), l.lastIndex === 0 ? N = q.length - 1 : N = l.lastIndex - 2, B = ["word", q.slice(R, N + 1), R, N], J.push(B), R = N);
          break;
        }
      }
      return R++, B;
    }
    function Ae(_) {
      he.push(_);
    }
    return {
      back: Ae,
      endOfFile: He,
      nextToken: Fe,
      position: Ee
    };
  }, mt;
}
var gt, ku;
function Cr() {
  if (ku) return gt;
  ku = 1;
  let u = It(), S = je(), v = Be(), d = Te(), b = Ct(), x = qr();
  const o = {
    empty: !0,
    space: !0
  };
  function h(i) {
    for (let r = i.length - 1; r >= 0; r--) {
      let c = i[r], e = c[3] || c[2];
      if (e) return e;
    }
  }
  class g {
    constructor(r) {
      this.input = r, this.root = new d(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: r, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(r) {
      let c = new u();
      c.name = r[1].slice(1), c.name === "" && this.unnamedAtrule(c, r), this.init(c, r[2]);
      let e, t, s, y = !1, p = !1, n = [], f = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (r = this.tokenizer.nextToken(), e = r[0], e === "(" || e === "[" ? f.push(e === "(" ? ")" : "]") : e === "{" && f.length > 0 ? f.push("}") : e === f[f.length - 1] && f.pop(), f.length === 0)
          if (e === ";") {
            c.source.end = this.getPosition(r[2]), c.source.end.offset++, this.semicolon = !0;
            break;
          } else if (e === "{") {
            p = !0;
            break;
          } else if (e === "}") {
            if (n.length > 0) {
              for (s = n.length - 1, t = n[s]; t && t[0] === "space"; )
                t = n[--s];
              t && (c.source.end = this.getPosition(t[3] || t[2]), c.source.end.offset++);
            }
            this.end(r);
            break;
          } else
            n.push(r);
        else
          n.push(r);
        if (this.tokenizer.endOfFile()) {
          y = !0;
          break;
        }
      }
      c.raws.between = this.spacesAndCommentsFromEnd(n), n.length ? (c.raws.afterName = this.spacesAndCommentsFromStart(n), this.raw(c, "params", n), y && (r = n[n.length - 1], c.source.end = this.getPosition(r[3] || r[2]), c.source.end.offset++, this.spaces = c.raws.between, c.raws.between = "")) : (c.raws.afterName = "", c.params = ""), p && (c.nodes = [], this.current = c);
    }
    checkMissedSemicolon(r) {
      let c = this.colon(r);
      if (c === !1) return;
      let e = 0, t;
      for (let s = c - 1; s >= 0 && (t = r[s], !(t[0] !== "space" && (e += 1, e === 2))); s--)
        ;
      throw this.input.error(
        "Missed semicolon",
        t[0] === "word" ? t[3] + 1 : t[2]
      );
    }
    colon(r) {
      let c = 0, e, t, s;
      for (let [y, p] of r.entries()) {
        if (t = p, s = t[0], s === "(" && (c += 1), s === ")" && (c -= 1), c === 0 && s === ":")
          if (!e)
            this.doubleColon(t);
          else {
            if (e[0] === "word" && e[1] === "progid")
              continue;
            return y;
          }
        e = t;
      }
      return !1;
    }
    comment(r) {
      let c = new S();
      this.init(c, r[2]), c.source.end = this.getPosition(r[3] || r[2]), c.source.end.offset++;
      let e = r[1].slice(2, -2);
      if (/^\s*$/.test(e))
        c.text = "", c.raws.left = e, c.raws.right = "";
      else {
        let t = e.match(/^(\s*)([^]*\S)(\s*)$/);
        c.text = t[2], c.raws.left = t[1], c.raws.right = t[3];
      }
    }
    createTokenizer() {
      this.tokenizer = x(this.input);
    }
    decl(r, c) {
      let e = new v();
      this.init(e, r[0][2]);
      let t = r[r.length - 1];
      for (t[0] === ";" && (this.semicolon = !0, r.pop()), e.source.end = this.getPosition(
        t[3] || t[2] || h(r)
      ), e.source.end.offset++; r[0][0] !== "word"; )
        r.length === 1 && this.unknownWord(r), e.raws.before += r.shift()[1];
      for (e.source.start = this.getPosition(r[0][2]), e.prop = ""; r.length; ) {
        let f = r[0][0];
        if (f === ":" || f === "space" || f === "comment")
          break;
        e.prop += r.shift()[1];
      }
      e.raws.between = "";
      let s;
      for (; r.length; )
        if (s = r.shift(), s[0] === ":") {
          e.raws.between += s[1];
          break;
        } else
          s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]), e.raws.between += s[1];
      (e.prop[0] === "_" || e.prop[0] === "*") && (e.raws.before += e.prop[0], e.prop = e.prop.slice(1));
      let y = [], p;
      for (; r.length && (p = r[0][0], !(p !== "space" && p !== "comment")); )
        y.push(r.shift());
      this.precheckMissedSemicolon(r);
      for (let f = r.length - 1; f >= 0; f--) {
        if (s = r[f], s[1].toLowerCase() === "!important") {
          e.important = !0;
          let m = this.stringFrom(r, f);
          m = this.spacesFromEnd(r) + m, m !== " !important" && (e.raws.important = m);
          break;
        } else if (s[1].toLowerCase() === "important") {
          let m = r.slice(0), l = "";
          for (let a = f; a > 0; a--) {
            let w = m[a][0];
            if (l.trim().startsWith("!") && w !== "space")
              break;
            l = m.pop()[1] + l;
          }
          l.trim().startsWith("!") && (e.important = !0, e.raws.important = l, r = m);
        }
        if (s[0] !== "space" && s[0] !== "comment")
          break;
      }
      r.some((f) => f[0] !== "space" && f[0] !== "comment") && (e.raws.between += y.map((f) => f[1]).join(""), y = []), this.raw(e, "value", y.concat(r), c), e.value.includes(":") && !c && this.checkMissedSemicolon(r);
    }
    doubleColon(r) {
      throw this.input.error(
        "Double colon",
        { offset: r[2] },
        { offset: r[2] + r[1].length }
      );
    }
    emptyRule(r) {
      let c = new b();
      this.init(c, r[2]), c.selector = "", c.raws.between = "", this.current = c;
    }
    end(r) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(r[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(r);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(r) {
      if (this.spaces += r[1], this.current.nodes) {
        let c = this.current.nodes[this.current.nodes.length - 1];
        c && c.type === "rule" && !c.raws.ownSemicolon && (c.raws.ownSemicolon = this.spaces, this.spaces = "", c.source.end = this.getPosition(r[2]), c.source.end.offset += c.raws.ownSemicolon.length);
      }
    }
    // Helpers
    getPosition(r) {
      let c = this.input.fromOffset(r);
      return {
        column: c.col,
        line: c.line,
        offset: r
      };
    }
    init(r, c) {
      this.current.push(r), r.source = {
        input: this.input,
        start: this.getPosition(c)
      }, r.raws.before = this.spaces, this.spaces = "", r.type !== "comment" && (this.semicolon = !1);
    }
    other(r) {
      let c = !1, e = null, t = !1, s = null, y = [], p = r[1].startsWith("--"), n = [], f = r;
      for (; f; ) {
        if (e = f[0], n.push(f), e === "(" || e === "[")
          s || (s = f), y.push(e === "(" ? ")" : "]");
        else if (p && t && e === "{")
          s || (s = f), y.push("}");
        else if (y.length === 0)
          if (e === ";")
            if (t) {
              this.decl(n, p);
              return;
            } else
              break;
          else if (e === "{") {
            this.rule(n);
            return;
          } else if (e === "}") {
            this.tokenizer.back(n.pop()), c = !0;
            break;
          } else e === ":" && (t = !0);
        else e === y[y.length - 1] && (y.pop(), y.length === 0 && (s = null));
        f = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (c = !0), y.length > 0 && this.unclosedBracket(s), c && t) {
        if (!p)
          for (; n.length && (f = n[n.length - 1][0], !(f !== "space" && f !== "comment")); )
            this.tokenizer.back(n.pop());
        this.decl(n, p);
      } else
        this.unknownWord(n);
    }
    parse() {
      let r;
      for (; !this.tokenizer.endOfFile(); )
        switch (r = this.tokenizer.nextToken(), r[0]) {
          case "space":
            this.spaces += r[1];
            break;
          case ";":
            this.freeSemicolon(r);
            break;
          case "}":
            this.end(r);
            break;
          case "comment":
            this.comment(r);
            break;
          case "at-word":
            this.atrule(r);
            break;
          case "{":
            this.emptyRule(r);
            break;
          default:
            this.other(r);
            break;
        }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(r, c, e, t) {
      let s, y, p = e.length, n = "", f = !0, m, l;
      for (let a = 0; a < p; a += 1)
        s = e[a], y = s[0], y === "space" && a === p - 1 && !t ? f = !1 : y === "comment" ? (l = e[a - 1] ? e[a - 1][0] : "empty", m = e[a + 1] ? e[a + 1][0] : "empty", !o[l] && !o[m] ? n.slice(-1) === "," ? f = !1 : n += s[1] : f = !1) : n += s[1];
      if (!f) {
        let a = e.reduce((w, T) => w + T[1], "");
        r.raws[c] = { raw: a, value: n };
      }
      r[c] = n;
    }
    rule(r) {
      r.pop();
      let c = new b();
      this.init(c, r[0][2]), c.raws.between = this.spacesAndCommentsFromEnd(r), this.raw(c, "selector", r), this.current = c;
    }
    spacesAndCommentsFromEnd(r) {
      let c, e = "";
      for (; r.length && (c = r[r.length - 1][0], !(c !== "space" && c !== "comment")); )
        e = r.pop()[1] + e;
      return e;
    }
    // Errors
    spacesAndCommentsFromStart(r) {
      let c, e = "";
      for (; r.length && (c = r[0][0], !(c !== "space" && c !== "comment")); )
        e += r.shift()[1];
      return e;
    }
    spacesFromEnd(r) {
      let c, e = "";
      for (; r.length && (c = r[r.length - 1][0], c === "space"); )
        e = r.pop()[1] + e;
      return e;
    }
    stringFrom(r, c) {
      let e = "";
      for (let t = c; t < r.length; t++)
        e += r[t][1];
      return r.splice(c, r.length - c), e;
    }
    unclosedBlock() {
      let r = this.current.source.start;
      throw this.input.error("Unclosed block", r.line, r.column);
    }
    unclosedBracket(r) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: r[2] },
        { offset: r[2] + 1 }
      );
    }
    unexpectedClose(r) {
      throw this.input.error(
        "Unexpected }",
        { offset: r[2] },
        { offset: r[2] + 1 }
      );
    }
    unknownWord(r) {
      throw this.input.error(
        "Unknown word " + r[0][1],
        { offset: r[0][2] },
        { offset: r[0][2] + r[0][1].length }
      );
    }
    unnamedAtrule(r, c) {
      throw this.input.error(
        "At-rule without name",
        { offset: c[2] },
        { offset: c[2] + c[1].length }
      );
    }
  }
  return gt = g, gt;
}
var yt, ju;
function Dt() {
  if (ju) return yt;
  ju = 1;
  let u = ye(), S = Ue(), v = Cr();
  function d(b, x) {
    let o = new S(b, x), h = new v(o);
    try {
      h.parse();
    } catch (g) {
      throw g;
    }
    return h.root;
  }
  return yt = d, d.default = d, u.registerParse(d), yt;
}
var xt, Bu;
function er() {
  if (Bu) return xt;
  Bu = 1;
  class u {
    constructor(v, d = {}) {
      if (this.type = "warning", this.text = v, d.node && d.node.source) {
        let b = d.node.rangeBy(d);
        this.line = b.start.line, this.column = b.start.column, this.endLine = b.end.line, this.endColumn = b.end.column;
      }
      for (let b in d) this[b] = d[b];
    }
    toString() {
      return this.node ? this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return xt = u, u.default = u, xt;
}
var vt, Uu;
function Pt() {
  if (Uu) return vt;
  Uu = 1;
  let u = er();
  class S {
    get content() {
      return this.css;
    }
    constructor(d, b, x) {
      this.processor = d, this.messages = [], this.root = b, this.opts = x, this.css = "", this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(d, b = {}) {
      b.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (b.plugin = this.lastPlugin.postcssPlugin);
      let x = new u(d, b);
      return this.messages.push(x), x;
    }
    warnings() {
      return this.messages.filter((d) => d.type === "warning");
    }
  }
  return vt = S, S.default = S, vt;
}
var wt, Hu;
function tr() {
  if (Hu) return wt;
  Hu = 1;
  let u = ye(), S = qt(), v = Ku(), d = Dt(), b = Pt(), x = Te(), o = Me(), { isClean: h, my: g } = _t();
  const i = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  }, r = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0
  }, c = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
  }, e = 0;
  function t(m) {
    return typeof m == "object" && typeof m.then == "function";
  }
  function s(m) {
    let l = !1, a = i[m.type];
    return m.type === "decl" ? l = m.prop.toLowerCase() : m.type === "atrule" && (l = m.name.toLowerCase()), l && m.append ? [
      a,
      a + "-" + l,
      e,
      a + "Exit",
      a + "Exit-" + l
    ] : l ? [a, a + "-" + l, a + "Exit", a + "Exit-" + l] : m.append ? [a, e, a + "Exit"] : [a, a + "Exit"];
  }
  function y(m) {
    let l;
    return m.type === "document" ? l = ["Document", e, "DocumentExit"] : m.type === "root" ? l = ["Root", e, "RootExit"] : l = s(m), {
      eventIndex: 0,
      events: l,
      iterator: 0,
      node: m,
      visitorIndex: 0,
      visitors: []
    };
  }
  function p(m) {
    return m[h] = !1, m.nodes && m.nodes.forEach((l) => p(l)), m;
  }
  let n = {};
  class f {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(l, a, w) {
      this.stringified = !1, this.processed = !1;
      let T;
      if (typeof a == "object" && a !== null && (a.type === "root" || a.type === "document"))
        T = p(a);
      else if (a instanceof f || a instanceof b)
        T = p(a.root), a.map && (typeof w.map == "undefined" && (w.map = {}), w.map.inline || (w.map.inline = !1), w.map.prev = a.map);
      else {
        let A = d;
        w.syntax && (A = w.syntax.parse), w.parser && (A = w.parser), A.parse && (A = A.parse);
        try {
          T = A(a, w);
        } catch (I) {
          this.processed = !0, this.error = I;
        }
        T && !T[g] && u.rebuild(T);
      }
      this.result = new b(l, T, w), this.helpers = we(ae({}, n), { postcss: n, result: this.result }), this.plugins = this.processor.plugins.map((A) => typeof A == "object" && A.prepare ? ae(ae({}, A), A.prepare(this.result)) : A);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(l) {
      return this.async().catch(l);
    }
    finally(l) {
      return this.async().then(l, l);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(l, a) {
      let w = this.result.lastPlugin;
      try {
        a && a.addToError(l), this.error = l, l.name === "CssSyntaxError" && !l.plugin ? (l.plugin = w.postcssPlugin, l.setMessage()) : w.postcssVersion;
      } catch (T) {
        console && console.error && console.error(T);
      }
      return l;
    }
    prepareVisitors() {
      this.listeners = {};
      let l = (a, w, T) => {
        this.listeners[w] || (this.listeners[w] = []), this.listeners[w].push([a, T]);
      };
      for (let a of this.plugins)
        if (typeof a == "object")
          for (let w in a) {
            if (!r[w] && /^[A-Z]/.test(w))
              throw new Error(
                `Unknown event ${w} in ${a.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!c[w])
              if (typeof a[w] == "object")
                for (let T in a[w])
                  T === "*" ? l(a, w, a[w][T]) : l(
                    a,
                    w + "-" + T.toLowerCase(),
                    a[w][T]
                  );
              else typeof a[w] == "function" && l(a, w, a[w]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    runAsync() {
      return jt(this, null, function* () {
        this.plugin = 0;
        for (let l = 0; l < this.plugins.length; l++) {
          let a = this.plugins[l], w = this.runOnRoot(a);
          if (t(w))
            try {
              yield w;
            } catch (T) {
              throw this.handleError(T);
            }
        }
        if (this.prepareVisitors(), this.hasListener) {
          let l = this.result.root;
          for (; !l[h]; ) {
            l[h] = !0;
            let a = [y(l)];
            for (; a.length > 0; ) {
              let w = this.visitTick(a);
              if (t(w))
                try {
                  yield w;
                } catch (T) {
                  let A = a[a.length - 1].node;
                  throw this.handleError(T, A);
                }
            }
          }
          if (this.listeners.OnceExit)
            for (let [a, w] of this.listeners.OnceExit) {
              this.result.lastPlugin = a;
              try {
                if (l.type === "document") {
                  let T = l.nodes.map(
                    (A) => w(A, this.helpers)
                  );
                  yield Promise.all(T);
                } else
                  yield w(l, this.helpers);
              } catch (T) {
                throw this.handleError(T);
              }
            }
        }
        return this.processed = !0, this.stringify();
      });
    }
    runOnRoot(l) {
      this.result.lastPlugin = l;
      try {
        if (typeof l == "object" && l.Once) {
          if (this.result.root.type === "document") {
            let a = this.result.root.nodes.map(
              (w) => l.Once(w, this.helpers)
            );
            return t(a[0]) ? Promise.all(a) : a;
          }
          return l.Once(this.result.root, this.helpers);
        } else if (typeof l == "function")
          return l(this.result.root, this.result);
      } catch (a) {
        throw this.handleError(a);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = !0, this.sync();
      let l = this.result.opts, a = o;
      l.syntax && (a = l.syntax.stringify), l.stringifier && (a = l.stringifier), a.stringify && (a = a.stringify);
      let T = new v(a, this.result.root, this.result.opts).generate();
      return this.result.css = T[0], this.result.map = T[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = !0, this.processing)
        throw this.getAsyncError();
      for (let l of this.plugins) {
        let a = this.runOnRoot(l);
        if (t(a))
          throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let l = this.result.root;
        for (; !l[h]; )
          l[h] = !0, this.walkSync(l);
        if (this.listeners.OnceExit)
          if (l.type === "document")
            for (let a of l.nodes)
              this.visitSync(this.listeners.OnceExit, a);
          else
            this.visitSync(this.listeners.OnceExit, l);
      }
      return this.result;
    }
    then(l, a) {
      return this.async().then(l, a);
    }
    toString() {
      return this.css;
    }
    visitSync(l, a) {
      for (let [w, T] of l) {
        this.result.lastPlugin = w;
        let A;
        try {
          A = T(a, this.helpers);
        } catch (I) {
          throw this.handleError(I, a.proxyOf);
        }
        if (a.type !== "root" && a.type !== "document" && !a.parent)
          return !0;
        if (t(A))
          throw this.getAsyncError();
      }
    }
    visitTick(l) {
      let a = l[l.length - 1], { node: w, visitors: T } = a;
      if (w.type !== "root" && w.type !== "document" && !w.parent) {
        l.pop();
        return;
      }
      if (T.length > 0 && a.visitorIndex < T.length) {
        let [I, q] = T[a.visitorIndex];
        a.visitorIndex += 1, a.visitorIndex === T.length && (a.visitors = [], a.visitorIndex = 0), this.result.lastPlugin = I;
        try {
          return q(w.toProxy(), this.helpers);
        } catch (E) {
          throw this.handleError(E, w);
        }
      }
      if (a.iterator !== 0) {
        let I = a.iterator, q;
        for (; q = w.nodes[w.indexes[I]]; )
          if (w.indexes[I] += 1, !q[h]) {
            q[h] = !0, l.push(y(q));
            return;
          }
        a.iterator = 0, delete w.indexes[I];
      }
      let A = a.events;
      for (; a.eventIndex < A.length; ) {
        let I = A[a.eventIndex];
        if (a.eventIndex += 1, I === e) {
          w.nodes && w.nodes.length && (w[h] = !0, a.iterator = w.getIterator());
          return;
        } else if (this.listeners[I]) {
          a.visitors = this.listeners[I];
          return;
        }
      }
      l.pop();
    }
    walkSync(l) {
      l[h] = !0;
      let a = s(l);
      for (let w of a)
        if (w === e)
          l.nodes && l.each((T) => {
            T[h] || this.walkSync(T);
          });
        else {
          let T = this.listeners[w];
          if (T && this.visitSync(T, l.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return f.registerPostcss = (m) => {
    n = m;
  }, wt = f, f.default = f, x.registerLazyResult(f), S.registerLazyResult(f), wt;
}
var St, Fu;
function Dr() {
  if (Fu) return St;
  Fu = 1;
  let u = Ku(), S = Dt();
  const v = Pt();
  let d = Me();
  class b {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root)
        return this._root;
      let o, h = S;
      try {
        o = h(this._css, this._opts);
      } catch (g) {
        this.error = g;
      }
      if (this.error)
        throw this.error;
      return this._root = o, o;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(o, h, g) {
      h = h.toString(), this.stringified = !1, this._processor = o, this._css = h, this._opts = g, this._map = void 0;
      let i, r = d;
      this.result = new v(this._processor, i, this._opts), this.result.css = h;
      let c = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return c.root;
        }
      });
      let e = new u(r, i, this._opts, h);
      if (e.isMap()) {
        let [t, s] = e.generate();
        t && (this.result.css = t), s && (this.result.map = s);
      } else
        e.clearAnnotation(), this.result.css = e.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(o) {
      return this.async().catch(o);
    }
    finally(o) {
      return this.async().then(o, o);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(o, h) {
      return this.async().then(o, h);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return St = b, b.default = b, St;
}
var Tt, Vu;
function Pr() {
  if (Vu) return Tt;
  Vu = 1;
  let u = qt(), S = tr(), v = Dr(), d = Te();
  class b {
    constructor(o = []) {
      this.version = "8.5.6", this.plugins = this.normalize(o);
    }
    normalize(o) {
      let h = [];
      for (let g of o)
        if (g.postcss === !0 ? g = g() : g.postcss && (g = g.postcss), typeof g == "object" && Array.isArray(g.plugins))
          h = h.concat(g.plugins);
        else if (typeof g == "object" && g.postcssPlugin)
          h.push(g);
        else if (typeof g == "function")
          h.push(g);
        else if (!(typeof g == "object" && (g.parse || g.stringify))) throw new Error(g + " is not a PostCSS plugin");
      return h;
    }
    process(o, h = {}) {
      return !this.plugins.length && !h.parser && !h.stringifier && !h.syntax ? new v(this, o, h) : new S(this, o, h);
    }
    use(o) {
      return this.plugins = this.plugins.concat(this.normalize([o])), this;
    }
  }
  return Tt = b, b.default = b, d.registerProcessor(b), u.registerProcessor(b), Tt;
}
var Et, zu;
function Lr() {
  if (zu) return Et;
  zu = 1;
  let u = It(), S = je(), v = ye(), d = Nt(), b = Be(), x = qt(), o = Ir(), h = Ue(), g = tr(), i = Yu(), r = ke(), c = Dt(), e = Pr(), t = Pt(), s = Te(), y = Ct(), p = Me(), n = er();
  function f(...m) {
    return m.length === 1 && Array.isArray(m[0]) && (m = m[0]), new e(m);
  }
  return f.plugin = function(l, a) {
    let w = !1;
    function T(...I) {
      console && console.warn && !w && (w = !0, console.warn(
        l + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
        l + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
      ));
      let q = a(...I);
      return q.postcssPlugin = l, q.postcssVersion = new e().version, q;
    }
    let A;
    return Object.defineProperty(T, "postcss", {
      get() {
        return A || (A = T()), A;
      }
    }), T.process = function(I, q, E) {
      return f([T(E)]).process(I, q);
    }, T;
  }, f.stringify = p, f.parse = c, f.fromJSON = o, f.list = i, f.comment = (m) => new S(m), f.atRule = (m) => new u(m), f.decl = (m) => new b(m), f.rule = (m) => new y(m), f.root = (m) => new s(m), f.document = (m) => new x(m), f.CssSyntaxError = d, f.Declaration = b, f.Container = v, f.Processor = e, f.Document = x, f.Comment = S, f.Warning = n, f.AtRule = u, f.Result = t, f.Input = h, f.Rule = y, f.Root = s, f.Node = r, g.registerPostcss(f), Et = f, f.default = f, Et;
}
var At, Gu;
function Rr() {
  if (Gu) return At;
  Gu = 1;
  const u = /* @__PURE__ */ xr(), S = vr(), { isPlainObject: v } = wr(), d = Sr(), b = Er(), { parse: x } = Lr(), o = [
    "img",
    "audio",
    "video",
    "picture",
    "svg",
    "object",
    "map",
    "iframe",
    "embed"
  ], h = ["script", "style"];
  function g(p, n) {
    p && Object.keys(p).forEach(function(f) {
      n(p[f], f);
    });
  }
  function i(p, n) {
    return {}.hasOwnProperty.call(p, n);
  }
  function r(p, n) {
    const f = [];
    return g(p, function(m) {
      n(m) && f.push(m);
    }), f;
  }
  function c(p) {
    for (const n in p)
      if (i(p, n))
        return !1;
    return !0;
  }
  function e(p) {
    return p.map(function(n) {
      if (!n.url)
        throw new Error("URL missing");
      return n.url + (n.w ? ` ${n.w}w` : "") + (n.h ? ` ${n.h}h` : "") + (n.d ? ` ${n.d}x` : "");
    }).join(", ");
  }
  At = s;
  const t = /^[^\0\t\n\f\r /<=>]+$/;
  function s(p, n, f) {
    if (p == null)
      return "";
    typeof p == "number" && (p = p.toString());
    let m = "", l = "";
    function a(_, P) {
      const C = this;
      this.tag = _, this.attribs = P || {}, this.tagPosition = m.length, this.text = "", this.openingTagLength = 0, this.mediaChildren = [], this.updateParentNodeText = function() {
        if (j.length) {
          const M = j[j.length - 1];
          M.text += C.text;
        }
      }, this.updateParentNodeMediaChildren = function() {
        j.length && o.includes(this.tag) && j[j.length - 1].mediaChildren.push(this.tag);
      };
    }
    n = Object.assign({}, s.defaults, n), n.parser = Object.assign({}, y, n.parser);
    const w = function(_) {
      return n.allowedTags === !1 || (n.allowedTags || []).indexOf(_) > -1;
    };
    h.forEach(function(_) {
      w(_) && !n.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${_}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
    });
    const T = n.nonTextTags || [
      "script",
      "style",
      "textarea",
      "option"
    ];
    let A, I;
    n.allowedAttributes && (A = {}, I = {}, g(n.allowedAttributes, function(_, P) {
      A[P] = [];
      const C = [];
      _.forEach(function(M) {
        typeof M == "string" && M.indexOf("*") >= 0 ? C.push(S(M).replace(/\\\*/g, ".*")) : A[P].push(M);
      }), C.length && (I[P] = new RegExp("^(" + C.join("|") + ")$"));
    }));
    const q = {}, E = {}, O = {};
    g(n.allowedClasses, function(_, P) {
      if (A && (i(A, P) || (A[P] = []), A[P].push("class")), q[P] = _, Array.isArray(_)) {
        const C = [];
        q[P] = [], O[P] = [], _.forEach(function(M) {
          typeof M == "string" && M.indexOf("*") >= 0 ? C.push(S(M).replace(/\\\*/g, ".*")) : M instanceof RegExp ? O[P].push(M) : q[P].push(M);
        }), C.length && (E[P] = new RegExp("^(" + C.join("|") + ")$"));
      }
    });
    const D = {};
    let L;
    g(n.transformTags, function(_, P) {
      let C;
      typeof _ == "function" ? C = _ : typeof _ == "string" && (C = s.simpleTransform(_)), P === "*" ? L = C : D[P] = C;
    });
    let N, j, B, V, G, W, re = !1;
    R();
    const xe = new u.Parser({
      onopentag: function(_, P) {
        if (n.onOpenTag && n.onOpenTag(_, P), n.enforceHtmlBoundary && _ === "html" && R(), G) {
          W++;
          return;
        }
        const C = new a(_, P);
        j.push(C);
        let M = !1;
        const $ = !!C.text;
        let X;
        if (i(D, _) && (X = D[_](_, P), C.attribs = P = X.attribs, X.text !== void 0 && (C.innerText = X.text), _ !== X.tagName && (C.name = _ = X.tagName, V[N] = X.tagName)), L && (X = L(_, P), C.attribs = P = X.attribs, _ !== X.tagName && (C.name = _ = X.tagName, V[N] = X.tagName)), (!w(_) || n.disallowedTagsMode === "recursiveEscape" && !c(B) || n.nestingLimit != null && N >= n.nestingLimit) && (M = !0, B[N] = !0, (n.disallowedTagsMode === "discard" || n.disallowedTagsMode === "completelyDiscard") && T.indexOf(_) !== -1 && (G = !0, W = 1)), N++, M) {
          if (n.disallowedTagsMode === "discard" || n.disallowedTagsMode === "completelyDiscard") {
            if (C.innerText && !$) {
              const z = J(C.innerText);
              n.textFilter ? m += n.textFilter(z, _) : m += z, re = !0;
            }
            return;
          }
          l = m, m = "";
        }
        m += "<" + _, _ === "script" && (n.allowedScriptHostnames || n.allowedScriptDomains) && (C.innerText = ""), M && (n.disallowedTagsMode === "escape" || n.disallowedTagsMode === "recursiveEscape") && n.preserveEscapedAttributes ? g(P, function(z, U) {
          m += " " + U + '="' + J(z || "", !0) + '"';
        }) : (!A || i(A, _) || A["*"]) && g(P, function(z, U) {
          if (!t.test(U)) {
            delete C.attribs[U];
            return;
          }
          if (z === "" && !n.allowedEmptyAttributes.includes(U) && (n.nonBooleanAttributes.includes(U) || n.nonBooleanAttributes.includes("*"))) {
            delete C.attribs[U];
            return;
          }
          let Ve = !1;
          if (!A || i(A, _) && A[_].indexOf(U) !== -1 || A["*"] && A["*"].indexOf(U) !== -1 || i(I, _) && I[_].test(U) || I["*"] && I["*"].test(U))
            Ve = !0;
          else if (A && A[_]) {
            for (const H of A[_])
              if (v(H) && H.name && H.name === U) {
                Ve = !0;
                let F = "";
                if (H.multiple === !0) {
                  const be = z.split(" ");
                  for (const ne of be)
                    H.values.indexOf(ne) !== -1 && (F === "" ? F = ne : F += " " + ne);
                } else H.values.indexOf(z) >= 0 && (F = z);
                z = F;
              }
          }
          if (Ve) {
            if (n.allowedSchemesAppliedToAttributes.indexOf(U) !== -1 && he(_, z)) {
              delete C.attribs[U];
              return;
            }
            if (_ === "script" && U === "src") {
              let H = !0;
              try {
                const F = Ee(z);
                if (n.allowedScriptHostnames || n.allowedScriptDomains) {
                  const be = (n.allowedScriptHostnames || []).find(function(Z) {
                    return Z === F.url.hostname;
                  }), ne = (n.allowedScriptDomains || []).find(function(Z) {
                    return F.url.hostname === Z || F.url.hostname.endsWith(`.${Z}`);
                  });
                  H = be || ne;
                }
              } catch (F) {
                H = !1;
              }
              if (!H) {
                delete C.attribs[U];
                return;
              }
            }
            if (_ === "iframe" && U === "src") {
              let H = !0;
              try {
                const F = Ee(z);
                if (F.isRelativeUrl)
                  H = i(n, "allowIframeRelativeUrls") ? n.allowIframeRelativeUrls : !n.allowedIframeHostnames && !n.allowedIframeDomains;
                else if (n.allowedIframeHostnames || n.allowedIframeDomains) {
                  const be = (n.allowedIframeHostnames || []).find(function(Z) {
                    return Z === F.url.hostname;
                  }), ne = (n.allowedIframeDomains || []).find(function(Z) {
                    return F.url.hostname === Z || F.url.hostname.endsWith(`.${Z}`);
                  });
                  H = be || ne;
                }
              } catch (F) {
                H = !1;
              }
              if (!H) {
                delete C.attribs[U];
                return;
              }
            }
            if (U === "srcset")
              try {
                let H = b(z);
                if (H.forEach(function(F) {
                  he("srcset", F.url) && (F.evil = !0);
                }), H = r(H, function(F) {
                  return !F.evil;
                }), H.length)
                  z = e(r(H, function(F) {
                    return !F.evil;
                  })), C.attribs[U] = z;
                else {
                  delete C.attribs[U];
                  return;
                }
              } catch (H) {
                delete C.attribs[U];
                return;
              }
            if (U === "class") {
              const H = q[_], F = q["*"], be = E[_], ne = O[_], Z = O["*"], ur = E["*"], Lt = [
                be,
                ur
              ].concat(ne, Z).filter(function(rr) {
                return rr;
              });
              if (H && F ? z = Ae(z, d(H, F), Lt) : z = Ae(z, H || F, Lt), !z.length) {
                delete C.attribs[U];
                return;
              }
            }
            if (U === "style") {
              if (n.parseStyleAttributes)
                try {
                  const H = x(_ + " {" + z + "}", { map: !1 }), F = ve(H, n.allowedStyles);
                  if (z = He(F), z.length === 0) {
                    delete C.attribs[U];
                    return;
                  }
                } catch (H) {
                  typeof window != "undefined" && console.warn('Failed to parse "' + _ + " {" + z + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete C.attribs[U];
                  return;
                }
              else if (n.allowedStyles)
                throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
            }
            m += " " + U, z && z.length ? m += '="' + J(z, !0) + '"' : n.allowedEmptyAttributes.includes(U) && (m += '=""');
          } else
            delete C.attribs[U];
        }), n.selfClosing.indexOf(_) !== -1 ? m += " />" : (m += ">", C.innerText && !$ && !n.textFilter && (m += J(C.innerText), re = !0)), M && (m = l + J(m), l = ""), C.openingTagLength = m.length - C.tagPosition;
      },
      ontext: function(_) {
        if (G)
          return;
        const P = j[j.length - 1];
        let C;
        if (P && (C = P.tag, _ = P.innerText !== void 0 ? P.innerText : _), n.disallowedTagsMode === "completelyDiscard" && !w(C))
          _ = "";
        else if ((n.disallowedTagsMode === "discard" || n.disallowedTagsMode === "completelyDiscard") && (C === "script" || C === "style"))
          m += _;
        else if (!re) {
          const M = J(_, !1);
          n.textFilter ? m += n.textFilter(M, C) : m += M;
        }
        if (j.length) {
          const M = j[j.length - 1];
          M.text += _;
        }
      },
      onclosetag: function(_, P) {
        if (n.onCloseTag && n.onCloseTag(_, P), G)
          if (W--, !W)
            G = !1;
          else
            return;
        const C = j.pop();
        if (!C)
          return;
        if (C.tag !== _) {
          j.push(C);
          return;
        }
        G = n.enforceHtmlBoundary ? _ === "html" : !1, N--;
        const M = B[N];
        if (M) {
          if (delete B[N], n.disallowedTagsMode === "discard" || n.disallowedTagsMode === "completelyDiscard") {
            C.updateParentNodeText();
            return;
          }
          l = m, m = "";
        }
        if (V[N] && (_ = V[N], delete V[N]), n.exclusiveFilter) {
          const $ = n.exclusiveFilter(C);
          if ($ === "excludeTag") {
            M && (m = l, l = ""), m = m.substring(0, C.tagPosition) + m.substring(C.tagPosition + C.openingTagLength);
            return;
          } else if ($) {
            m = m.substring(0, C.tagPosition);
            return;
          }
        }
        if (C.updateParentNodeMediaChildren(), C.updateParentNodeText(), // Already output />
        n.selfClosing.indexOf(_) !== -1 || // Escaped tag, closing tag is implied
        P && !w(_) && ["escape", "recursiveEscape"].indexOf(n.disallowedTagsMode) >= 0) {
          M && (m = l, l = "");
          return;
        }
        m += "</" + _ + ">", M && (m = l + J(m), l = ""), re = !1;
      }
    }, n.parser);
    return xe.write(p), xe.end(), m;
    function R() {
      m = "", N = 0, j = [], B = {}, V = {}, G = !1, W = 0;
    }
    function J(_, P) {
      return typeof _ != "string" && (_ = _ + ""), n.parser.decodeEntities && (_ = _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), P && (_ = _.replace(/"/g, "&quot;"))), _ = _.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), P && (_ = _.replace(/"/g, "&quot;")), _;
    }
    function he(_, P) {
      for (P = P.replace(/[\x00-\x20]+/g, ""); ; ) {
        const $ = P.indexOf("<!--");
        if ($ === -1)
          break;
        const X = P.indexOf("-->", $ + 4);
        if (X === -1)
          break;
        P = P.substring(0, $) + P.substring(X + 3);
      }
      const C = P.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
      if (!C)
        return P.match(/^[/\\]{2}/) ? !n.allowProtocolRelative : !1;
      const M = C[1].toLowerCase();
      return i(n.allowedSchemesByTag, _) ? n.allowedSchemesByTag[_].indexOf(M) === -1 : !n.allowedSchemes || n.allowedSchemes.indexOf(M) === -1;
    }
    function Ee(_) {
      if (_ = _.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), _.startsWith("relative:"))
        throw new Error("relative: exploit attempt");
      let P = "relative://relative-site";
      for (let $ = 0; $ < 100; $++)
        P += `/${$}`;
      const C = new URL(_, P);
      return {
        isRelativeUrl: C && C.hostname === "relative-site" && C.protocol === "relative:",
        url: C
      };
    }
    function ve(_, P) {
      if (!P)
        return _;
      const C = _.nodes[0];
      let M;
      return P[C.selector] && P["*"] ? M = d(
        P[C.selector],
        P["*"]
      ) : M = P[C.selector] || P["*"], M && (_.nodes[0].nodes = C.nodes.reduce(Fe(M), [])), _;
    }
    function He(_) {
      return _.nodes[0].nodes.reduce(function(P, C) {
        return P.push(
          `${C.prop}:${C.value}${C.important ? " !important" : ""}`
        ), P;
      }, []).join(";");
    }
    function Fe(_) {
      return function(P, C) {
        return i(_, C.prop) && _[C.prop].some(function($) {
          return $.test(C.value);
        }) && P.push(C), P;
      };
    }
    function Ae(_, P, C) {
      return P ? (_ = _.split(/\s+/), _.filter(function(M) {
        return P.indexOf(M) !== -1 || C.some(function($) {
          return $.test(M);
        });
      }).join(" ")) : _;
    }
  }
  const y = {
    decodeEntities: !0
  };
  return s.defaults = {
    allowedTags: [
      // Sections derived from MDN element categories and limited to the more
      // benign categories.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
      // Content sectioning
      "address",
      "article",
      "aside",
      "footer",
      "header",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hgroup",
      "main",
      "nav",
      "section",
      // Text content
      "blockquote",
      "dd",
      "div",
      "dl",
      "dt",
      "figcaption",
      "figure",
      "hr",
      "li",
      "menu",
      "ol",
      "p",
      "pre",
      "ul",
      // Inline text semantics
      "a",
      "abbr",
      "b",
      "bdi",
      "bdo",
      "br",
      "cite",
      "code",
      "data",
      "dfn",
      "em",
      "i",
      "kbd",
      "mark",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "time",
      "u",
      "var",
      "wbr",
      // Table content
      "caption",
      "col",
      "colgroup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr"
    ],
    // Tags that cannot be boolean
    nonBooleanAttributes: [
      "abbr",
      "accept",
      "accept-charset",
      "accesskey",
      "action",
      "allow",
      "alt",
      "as",
      "autocapitalize",
      "autocomplete",
      "blocking",
      "charset",
      "cite",
      "class",
      "color",
      "cols",
      "colspan",
      "content",
      "contenteditable",
      "coords",
      "crossorigin",
      "data",
      "datetime",
      "decoding",
      "dir",
      "dirname",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "fetchpriority",
      "for",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formtarget",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "http-equiv",
      "id",
      "imagesizes",
      "imagesrcset",
      "inputmode",
      "integrity",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemtype",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "name",
      "nonce",
      "optimum",
      "pattern",
      "ping",
      "placeholder",
      "popover",
      "popovertarget",
      "popovertargetaction",
      "poster",
      "preload",
      "referrerpolicy",
      "rel",
      "rows",
      "rowspan",
      "sandbox",
      "scope",
      "shape",
      "size",
      "sizes",
      "slot",
      "span",
      "spellcheck",
      "src",
      "srcdoc",
      "srclang",
      "srcset",
      "start",
      "step",
      "style",
      "tabindex",
      "target",
      "title",
      "translate",
      "type",
      "usemap",
      "value",
      "width",
      "wrap",
      // Event handlers
      "onauxclick",
      "onafterprint",
      "onbeforematch",
      "onbeforeprint",
      "onbeforeunload",
      "onbeforetoggle",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextlost",
      "oncontextmenu",
      "oncontextrestored",
      "oncopy",
      "oncuechange",
      "oncut",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "onformdata",
      "onhashchange",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onlanguagechange",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmessage",
      "onmessageerror",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpaste",
      "onpause",
      "onplay",
      "onplaying",
      "onpopstate",
      "onprogress",
      "onratechange",
      "onreset",
      "onresize",
      "onrejectionhandled",
      "onscroll",
      "onscrollend",
      "onsecuritypolicyviolation",
      "onseeked",
      "onseeking",
      "onselect",
      "onslotchange",
      "onstalled",
      "onstorage",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "onunhandledrejection",
      "onunload",
      "onvolumechange",
      "onwaiting",
      "onwheel"
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
      a: ["href", "name", "target"],
      // We don't currently allow img itself by default, but
      // these attributes would make sense if we did.
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
    },
    allowedEmptyAttributes: [
      "alt"
    ],
    // Lots of these won't come up by default because we don't allow them
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
    // URL schemes we permit
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: !0,
    enforceHtmlBoundary: !1,
    parseStyleAttributes: !0,
    preserveEscapedAttributes: !1
  }, s.simpleTransform = function(p, n, f) {
    return f = f === void 0 ? !0 : f, n = n || {}, function(m, l) {
      let a;
      if (f)
        for (a in n)
          l[a] = n[a];
      else
        l = n;
      return {
        tagName: p,
        attribs: l
      };
    };
  }, At;
}
var Mr = Rr();
const Ur = /* @__PURE__ */ sr(Mr);
export {
  Ur as default
};
