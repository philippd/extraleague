angular.module('PlayerMappings', [])
.factory('Players', ['$resource', function($resource) {
	return $resource('/rest/players/:player');
}])
.factory('PlayerService', ['Players', function(Players) {
	var playerResultMap = {};
	var playerMap = {
	    "pz" : "peter-zurbruegg",
	    "st" : "stefan-tramm",
	    "pmu" : "peter-mueller",
	    "th" : "thierry-hafner",
	    "ts" : "thomas-schenkel",
	    "mig" : "michael-gassmann",
	    "mf" : "mike-franz",
	    "pa" : "patrik-aufdermauer",
	    "jb" : "jason-brazile",
	    "rb" : "ronnie-brunner",
	    "xfu" : "felix-bucher",
	    "tg" : "thomas-geier",
	    "rg" : "ramon-grunder",
	    "jh" : "joachim-hagger",
	    "xsh" : "simon-hefti",
	    "pk" : "peter-kohler",
	    "jp" : "jens-piesbergen",
	    "rs" : "ralph-schenkel",
	    "js" : "juerg-straub",
	    "av" : "andrej-vckovski",
	    "hr" : "hansruedi-vondermuehll",
	    "ul" : "urs-laub",
	    "sfu" : "stefan-furrer",
	    "cd" : "corsin-decurtins",
	    "pb" : "peter-brantschen",
	    "uh" : "urs-hardegger",
	    "xri" : "roland-sailer",
	    "aka" : "andreas-karrer",
	    "rw" : "ralph-wildhaber",
	    "so" : "stefan-odendahl",
	    "mst" : "marcel-steinmann",
	    "gb" : "gabriele-brechbuehl",
	    "jr" : "jacqueline-rohner",
	    "xdb" : "daniel-bareiss",
	    "xzs" : "zbynek-sykora",
	    "mbr" : "michael-brantschen",
	    "rgi" : "reto-giger",
	    "rsp" : "roman-spycher",
	    "mj" : "martin-jaeger",
	    "xhg" : "hanspeter-graenicher",
	    "msr" : "marcel-stoer",
	    "do" : "david-oetiker",
	    "sr" : "stefan-rufer",
	    "nk" : "nathalie-ringgenberg",
	    "xbu" : "markus-buechel",
	    "tf" : "thomas-fromherz",
	    "gf" : "georg-fromherz",
	    "ldy" : "levente-dobszay",
	    "wd" : "walter-duss",
	    "mme" : "martin-meier",
	    "tt" : "thomas-troescher",
	    "xst" : "mattias-steinholtz",
	    "xdv" : "daniel-volkart",
	    "sru" : "sandra-ruzicic",
	    "mp" : "michael-pellaton",
	    "dsc" : "daniel-schaedler",
	    "xja" : "jacqueline-aebi",
	    "om" : "ovidio-mallo",
	    "sk" : "stephan-keller",
	    "mfa" : "michael-fahrni",
	    "cc" : "claudia-chini",
	    "rwe" : "roland-weiss",
	    "sba" : "sabine-bamert",
	    "rv" : "regina-vogt",
	    "dcl" : "daniel-clausen",
	    "fr" : "felix-romer",
	    "dei" : "daniel-eichhorn",
	    "cm" : "cla-monsch",
	    "jst" : "jacques-stadler",
	    "xmn" : "matthias-nicolet",
	    "xak" : "andreas-knobel",
	    "mke" : "marcel-kessler",
	    "rbo" : "reto-bodenmann",
	    "aim" : "alexander-imfeld",
	    "xcr" : "candid-rutz",
	    "bsr" : "brigitte-seiler",
	    "mmy" : "michael-meyer",
	    "rgr" : "reto-grob",
	    "pe" : "patrick-ehrensperger",
	    "jd" : "jacqueline-duvoisin",
	    "tmi" : "thomas-marti",
	    "pm" : "philippe-marschall",
	    "oa" : "oliver-aeschlimann",
	    "jc" : "joshy-cyriac",
	    "ac" : "antonio-caliano",
	    "mdi" : "markus-dietrich",
	    "iv" : "ivan-valentin",
	    "ibi" : "iwan-birrer",
	    "fbu" : "friedemann-buergel",
	    "wh" : "wolfgang-habicht",
	    "dke" : "daniel-kellenberger",
	    "jbr" : "jean-claude-brantschen",
	    "mhe" : "martin-hermann",
	    "ssp" : "sonja-spaar",
	    "dd" : "damjan-dimitrov",
	    "xps" : "peter-stulzer",
	    "kbn" : "kate-rageth",
	    "aj" : "alexander-josef",
	    "usc" : "ulrich-schwar",
	    "dmu" : "diana-estermann",
	    "rfi" : "roman-fischer",
	    "sm" : "sandra-mayer",
	    "xac" : "andrey-collison",
	    "as" : "angelika-seiler",
	    "xaj" : "ales-jakubek",
	    "yw" : "yannick-winiger",
	    "cz" : "christof-zellweger",
	    "xhe" : "sascha-hegi",
	    "af" : "andreas-fritschy",
	    "rlo" : "remi-locherer",
	    "dh" : "dominik-hiltbrunner",
	    "mti" : "muzelife-tairi",
	    "xsc" : "christian-schnider",
	    "jro" : "joel-roth",
	    "xdm" : "daniel-moser",
	    "xwe" : "marian-weisser",
	    "msd" : "melanie-schmid",
	    "xse" : "miroslav-senk",
	    "ta" : "thomas-anderegg",
	    "tza" : "thomas-zangerl",
	    "xtw" : "tim-walther",
	    "psc" : "patrick-schorno",
	    "cw" : "christian-waldvogel",
	    "nh" : "nicola-hefti",
	    "ys" : "yannick-signer",
	    "br" : "beda-rickenbacher",
	    "xsm" : "sven-mader",
	    "xnn" : "nico-negri",
	    "xml" : "marco-longhitano",
	    "mzi" : "mathias-zimmermann",
	    "xmm" : "martin-moser",
	    "rfn" : "rolf-frieden",
	    "sdi" : "simon-dietschi",
	    "fa" : "franziska-zingg",
	    "xmc" : "martin-mcnulty",
	    "xjc" : "jan-chmelar",
	    "xsj" : "pavel-stejgerle",
	    "xpv" : "pavel-safranek",
	    "xjk" : "jan-krebs",
	    "xmr" : "maurice-ray",
	    "xcb" : "carmen-betschart",
	    "pfr" : "peter-frick",
	    "msh" : "michele-schaeuble",
	    "kkh" : "kkandiah",
	    "ska" : "kandiah",
	    "csl" : "cyrill-schenkel",
	    "ed" : "evelyn-daerendinger",
	    "mre" : "micaela-raschle",
	    "dma" : "daniel-margreth",
	    "kse" : "kevin-seidler",
	    "xas" : "joonas-asikainen",
	    "xgs" : "giancarlo-scrugli",
	    "xkw" : "katrin-wassmuth",
	    "mfn" : "marco-fuellemann",
	    "nko" : "nathanael-sommer",
	    "rr" : "raphael-roth",
	    "xck" : "christian-kohler",
	    "rko" : "rolf-koch",
	    "csh" : "christian-schaetti",
	    "sdk" : "stephan-dick",
	    "xji" : "joel-ineichen",
	    "dnm" : "duy-ngoc-mai",
	    "rbu" : "raphael-buechler",
	    "ttr" : "tobias-trusch",
	    "lpe" : "lucy-pelzer",
	    "sou" : "sander-ouwendijk",
	    "dad" : "diego-adolf",
	    "xra" : "robert-saniga",
	    "pde" : "philipp-denzler",
	    "rpe" : "rafael-perez",
	    "pfo" : "priska-forrer",
	    "ach" : "aleksandar-chochovski",
	    "mju" : "matthias-junker",
	    "xjt" : "jonas-tappolet",
	    "xhz" : "hansueli-zuercher",
	    "xtz" : "thomas-zaedow",
	    "ra" : "raoul-adler",
	    "aku" : "anna-pitschna-kunz",
	    "xka" : "katja-ambord",
	    "ir" : "irena-radoeshka",
	    "rri" : "riste-ristevski",
	    "abu" : "angela-buehler",
	    "sl" : "simon-leo",
	    "mv" : "markus-vaterlaus",
	    "jg" : "john-guthoerl",
	    "fhe" : "florian-hengartner",
	    "hs" : "hans-schriber",
	    "mha" : "maya-haug",
	    "mli" : "matthias-liechti",
	    "iil" : "ivan-iljkic",
	    "mdm" : "marija-dimovska",
	    "avi" : "attila-vizhanyo",
	    "bg" : "baris-guec",
	    "bmo" : "bjoern-mosler",
	    "lmu" : "lara-muehlemann",
	    "jpd" : "jean-pierre-dillier",
	    "tba" : "thomas-baumann",
	    "sku" : "sascha-kuhn",
	    "xsa" : "stefan-arnold",
	    "zsz" : "zoltan-szekely",
	    "wm" : "wolfgang-marent",
	    "xha" : "maria-hahnloser",
	    "nb" : "nidhal-boumaiza",
	    "is" : "igor-simevski",
	    "isu" : "igor-sudijovski",
	    "ig" : "igor-geshoski",
	    "zla" : "zhivko-lazarov",
	    "dsp" : "daniel-spasovski",
	    "xpe" : "pietro-pedrozzi",
	    "gma" : "giancarlo-massari",
	    "zm" : "zoran-mirchevski",
	    "sri" : "simon-riedener",
	    "vp" : "vlado-peshov",
	    "dle" : "dirk-leiner",
	    "aho" : "andi-hotz",
	    "rpr" : "remo-preuss",
	    "jhi" : "joel-hirano",
	    "kma" : "kevin-marbacher",
	    "brs" : "beat-ris",
	    "tpt" : "tobias-peter",
	    "xtk" : "tom-kool",
	    "mma" : "mark-maier",
	    "sar" : "slavcho-arsovski",
	    "ibu" : "igor-bulovski",
	    "jpa" : "jordan-palikrushev",
	    "rj" : "roger-jaeggi",
	    "xjf" : "jan-fornusek",
	    "vli" : "vito-liloia",
	    "xmd" : "martin-damek",
	    "aap" : "aleksandar-apostolov",
	    "smr" : "spase-markovski",
	    "iii" : "ivan-ilievski",
	    "mae" : "martin-angelovski",
	    "mja" : "maja-jankuloska",
	    "rro" : "rudolf-roth",
	    "jj" : "jovan-jovanovski",
	    "lm" : "louise-miedaner",
	    "cne" : "christoph-neuhaus",
	    "vu" : "vithusiya-ulagarajah",
	    "xss" : "mail-schulz",
	    "vpa" : "vasja-pavlov",
	    "tmr" : "thomas-maeder",
	    "sas" : "sebastian-asler",
	    "mcv" : "martin-cvetkov",
	    "xfe" : "sophie-fedier",
	    "xbf" : "bernd-fellinghauer",
	    "dkn" : "daniel-kaufmann",
	    "bhe" : "beat-heggli",
	    "xgc" : "gustavo-colliard",
	    "er" : "erich-ruf",
	    "ck" : "christian-kunz",
	    "dde" : "domenico-de-stefano",
	    "fan" : "filip-anastasovski",
	    "ean" : "emilija-andreevska",
	    "cni" : "christoph-niemz",
	    "ssc" : "sebastian-schrepfer",
	    "ga" : "goran-atanasovski",
	    "amo" : "adrian-morgenegg",
	    "xmg" : "marcel-engelberger",
	    "cco" : "corsin-conzett",
	    "cfa" : "claudio-fava",
	    "nna" : "nikola-naumchevski",
	    "sda" : "stephan-dambo",
	    "xma" : "marcel-wirth",
	    "xsb" : "samuel-christian-bernet",
	    "xmh" : "michael-schmidt",
	    "jpz" : "jasmina-pazardjievska",
	    "psn" : "peter-stegemann",
	    "cma" : "christian-maeder",
	    "ahk" : "adrian-heydecker",
	    "ari" : "ana-risteska",
	    "kmo" : "kristin-mock",
	    "xjb" : "jonas-baeckman",
	    "vst" : "vladimir-stojov",
	    "xcl" : "chantal-landis",
	    "ya" : "yazid-abuanzeh",
	    "xce" : "catalin-ehrmann",
	    "xay" : "asli-yaman",
	    "smi" : "slobodan-minov",
	    "gp" : "goran-peshanski",
	    "xjs" : "jaroslav-sendler",
	    "ead" : "elisaveta-andreeva",
	    "xnb" : "noel-blessing",
	    "xbd" : "barbara-dravec",
	    "ssm" : "stojan-stamkov",
	    "vda" : "vlatko-danchev",
	    "xbo" : "eszter-boerzsoenyi",
	    "mdu" : "madelein-duplessis",
	    "csa" : "charles-salameh",
	    "xjl" : "janine-lutz",
	    "lst" : "ljupcho-stojcheski",
	    "xcw" : "charles-windlin",
	    "ha" : "hamad-albadi",
	    "xuh" : "urs-herger",
	    "xla" : "ludwig-antilli",
	    "xsg" : "sebastian-gubser",
	    "mat" : "margrit-angst",
	    "mse" : "makedonka-stamatova",
	    "an" : "aleksandar-nikov",
	    "km" : "kiril-milev",
	    "oi" : "ognen-ivanovski",
	    "kd" : "krume-dolnenec",
	    "jk" : "jovan-kolov",
	    "oc" : "ostoja-cvijik",
	    "vs" : "vladimir-simjanoski",
	    "mta" : "maja-trajanoska",
	    "lz" : "ljubomir-zivanovic",
	    "tv" : "tome-velkov",
	    "va" : "valentina-atanaskova",
	    "mmi" : "mitko-mitrov",
	    "sp" : "slobodan-percuklieski",
	    "stu" : "stojanco-tudzarski",
	    "vg" : "vladimir-gjokjevski",
	    "kda" : "kristina-damjanoska",
	    "vc" : "viktor-cvetkovik",
	    "gt" : "gorazd-titizov",
	    "nsi" : "nako-siskov",
	    "pst" : "peco-stanoev",
	    "ar" : "aleksandar-ristov",
	    "vmi" : "vasko-milevski",
	    "ec" : "emil-cepunjoski",
	    "ahr" : "aleksandra-hristov",
	    "ad" : "aneta-damceska",
	    "kl" : "katerina-ljubevska",
	    "im" : "ivan-milanov",
	    "spe" : "stefanija-peroska",
	    "bi" : "bozidar-ilievski",
	    "tk" : "toni-kostov",
	    "gc" : "goran-cvetkoski",
	    "lpa" : "lazar-pancevski",
	    "acv" : "andrej-cvetanovski",
	    "ap" : "aleksandar-petreski",
	    "man" : "mirjana-andovska",
	    "pmi" : "pece-milosev",
	    "et" : "elena-temelkovska",
	    "asi" : "andon-sikavica",
	    "mki" : "marjan-kindalov",
	    "ape" : "aleksandar-petrusevski",
	    "zn" : "zdravko-nikolovski",
	    "bil" : "blaze-iliev",
	    "zk" : "zlatko-kuvendziski",
	    "jso" : "jordan-soklevski",
	    "apt" : "aleksandar-petrov",
	    "fre" : "frosina-remenska",
	    "tr" : "toni-rajkovski",
	    "vat" : "viktor-atanasovski",
	    "pca" : "pance-cavkovski",
	    "var" : "vladimir-arsov",
	    "agi" : "aleksandar-gizarovski",
	    "gg" : "goran-gajduk",
	    "skr" : "suzana-kordumova",
	    "dko" : "dean-kostovski",
	    "bsm" : "boris-simovski",
	    "spa" : "suzana-pasharikovska",
	    "vk" : "valentina-koteva",
	    "tpj" : "tome-pejoski",
	    "vtr" : "vladimir-trajkovski",
	    "vgr" : "viktor-grozdanovski",
	    "zb" : "zoran-bogdanovski",
	    "zi" : "zarko-ivanoski",
	    "apr" : "aleksandar-petrovski",
	    "tu" : "tanja-uzunova",
	    "tne" : "tina-nestoroska",
	    "ech" : "elena-chovikj",
	    "vgj" : "vlado-gjorgjiev",
	    "zst" : "zlatko-stamatov",
	    "jka" : "jana-karcheska",
	    "ol" : "oliver-lazoroski",
	    "csm" : "cvetanka-smileska",
	    "omi" : "orce-mihailov",
	    "tla" : "trajche-lazovski",
	    "vku" : "vojche-kushevski",
	    "mmt" : "martin-mitrevski",
	    "vv" : "valerija-velinovska",
	    "bm" : "boban-mitovski",
	    "nga" : "natasha-gavrovska",
	    "at" : "aleksandar-toshevski",
	    "bpo" : "bojana-popovska",
	    "bh" : "benno-haefliger",
	    "wr" : "werner-roos",
	    "xsv" : "sandra-vontobel",
	    "xnr" : "nicola-reggiori",
	    "xso" : "stamatis-stefanakos"

	};
	return {
		getPlayerPicture: function(shortname) {
			var playerName = playerMap[shortname];
			if (angular.isDefined(playerName) && shortname.length > 1) {
				console.log("Getting image address for ")
				return "http://www.netcetera.com/en/data/contacts/Netcetera/" + playerName + "/photo/photo.jpg";
			} else {
				return "images/person2.png";
			}
		}
	    
	 	
	}
}]);