

// --------------------
// Create map centred on the UK
// --------------------
const map = L.map('map').setView([0, 0], 2);

// --------------------
// Add UK-only search
// --------------------
L.Control.geocoder({
  defaultMarkGeocode: false,
  placeholder: "Search places…",
  geocoder: L.Control.Geocoder.nominatim()
})
.on("markgeocode", function (e) {
  map.fitBounds(e.geocode.bbox);
})
.addTo(map);

// --------------------
// Add OpenStreetMap tiles
// --------------------
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// --------------------
// Create marker cluster group
// --------------------
const markerCluster = L.markerClusterGroup({
  disableClusteringAtZoom: 12,
  chunkedLoading: true
});

// --------------------
// Webcam markers
// --------------------
const webcamMarkers = [


L.marker([50.66268307823406, -1.5837663777002342]).bindPopup("<strong>Needles</strong><br><a href=\"https://www.isleofwight.com/webcams/needles/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.69449829765143, -1.5333713657086285]).bindPopup("<strong>Colwell Bay</strong><br><a href=\"https://www.isleofwight.com/webcams/colwell/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.5931494701386, -1.2112784872050357]).bindPopup("<strong>Ventnor</strong><br><a href=\"https://www.isleofwight.com/webcams/ventnor/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.6565289600507, -1.1481414284494054]).bindPopup("<strong>Sandown</strong><br><a href=\"https://www.isleofwight.com/webcams/sandown/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.73004127922462, -1.1611387888502922]).bindPopup("<strong>Ryde Pier</strong><br><a href=\"https://www.isleofwight.com/webcams/ryde/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.72733563930464, -1.1665730758359039]).bindPopup("<strong>Solent View</strong><br><a href=\"https://www.isleofwight.com/webcams/ryde/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.62352016872212, -1.1762112244116065]).bindPopup("<strong>Shanklin Bay</strong><br><a href=\"https://www.isleofwight.com/webcams/shanklin/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.76683552935895, -1.3123678422613165]).bindPopup("<strong>Cowes</strong><br><a href=\"https://www.isleofwight.com/webcams/cowes/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.82143788156671, -0.15091398912534737]).bindPopup("<strong>Brighton i360</strong><br><a href=\"https://www.brightoncctv.co.uk/i360-cams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.811945875210306, -0.10310134610441692]).bindPopup("<strong>Brighton Marina</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure2/Brighton_Harbour_Webcam.html#google_vignette\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.39973710115248, -3.5039249164071338]).bindPopup("<strong>Brixham Breakwater</strong><br><a href=\"https://www.camsecure.co.uk/brixham_breakwater.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.398778750976156, -3.5059495532882523]).bindPopup("<strong>Brixham Harbour</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure3/Brixham_Harbour.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.39908497859471, -3.514379070709676]).bindPopup("<strong>Brixham Yacht Club</strong><br><a href=\"https://www.camsecure.co.uk/brixham_sailing_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.805883964405325, -0.8649601037158521]).bindPopup("<strong>Itchenor, Chichester Harbour</strong><br><a href=\"https://www.camsecure.co.uk/itchenor_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.85334023744061, 0.572153759654715]).bindPopup("<strong>Hastings Pier</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/hastings/hastings-pier.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.69346291755252, -1.0933594096388681]).bindPopup("<strong>Bembridge Harbour</strong><br><a href=\"https://www.camsecure.co.uk/bembridge_sailing.html#google_vignette\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.76054266086146, -1.3248714595757156]).bindPopup("<strong>Gurnard Sailing Club</strong><br><a href=\"https://www.camsecure.co.uk/cowes_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.758014398454456, -1.2923594114796504]).bindPopup("<strong>River Medina</strong><br><a href=\"https://www.camsecure.co.uk/river_medina_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.72170291773064, -1.1103815850604053]).bindPopup("<strong>Eastern Solent</strong><br><a href=\"https://www.camsecure.co.uk/sea_view_yacht_club_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.704693957758195, -1.5022552930028652]).bindPopup("<strong>Yarmouth Sailing Club</strong><br><a href=\"https://www.camsecure.co.uk/yarmouth-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.705231484247946, -1.9509693317516432]).bindPopup("<strong>Poole, Salterns Marina</strong><br><a href=\"https://www.camsecure.co.uk/Poole_Quay_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.571460972270536, -2.4558586167909144]).bindPopup("<strong>Portland Harbour</strong><br><a href=\"https://www.camsecure.co.uk/portland_harbour_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.798204336326656, -1.1094752036772544]).bindPopup("<strong>Portsmouth, HMS Warrior</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/portsmouth/portsmouth.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.68764930772889, -3.1238448870880986]).bindPopup("<strong>Branscombe Beach</strong><br><a href=\"https://www.camsecure.co.uk/seaton%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.60734318451796, -1.9466141971471285]).bindPopup("<strong>Swanage Lifeboat Station</strong><br><a href=\"https://www.camsecure.co.uk/swanage_lifeboat_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.607237291296904, -1.9448164736581304]).bindPopup("<strong>Swanage NCI Station</strong><br><a href=\"https://www.camsecure.co.uk/swanage-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.460779488076284, -3.5259634018676866]).bindPopup("<strong>Torquay Marina</strong><br><a href=\"https://www.camsecure.co.uk/torquay_harbour_inner_dock.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.454531454995056, -3.545581173423548]).bindPopup("<strong>Torquay Harbour</strong><br><a href=\"https://www.camsecure.co.uk/torquay_sea_view.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.609190211522545, -2.452888175265032]).bindPopup("<strong>Weymouth Beach</strong><br><a href=\"https://www.camsecure.co.uk/Camsecure2/Weymouth_Seafront_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.806098111313396, -0.40617132923381977]).bindPopup("<strong>Worthing Beach</strong><br><a href=\"https://www.camsecure.co.uk/worthing_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.80887815412582, -0.3771419638183013]).bindPopup("<strong>Worthing Seafront</strong><br><a href=\"https://www.camsecure.co.uk/worthing_seafront_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.71885606930183, -4.0525922805358485]).bindPopup("<strong>Barmouth Harbour</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.824450931060426, -4.50581061274059]).bindPopup("<strong>Abersoch Inner Harbour</strong><br><a href=\"https://abersoch.com/abersoch-watersports-inner-harbour-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.88928206747624, -4.412943707533258]).bindPopup("<strong>Pwllheli</strong><br><a href=\"https://abersoch.com/offaxis-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.88684094431771, -4.405744264450622]).bindPopup("<strong>Pwilheli Marina</strong><br><a href=\"https://abersoch.com/hafan-pwllheli-marina-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.93724656251991, -4.5566487182402655]).bindPopup("<strong>Porth Dinllaen</strong><br>Location change<br><a href=\"https://abersoch.com/porth-dinllaen-sunset-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.93726935017612, -4.556852503620469]).bindPopup("<strong>Morfa Nefyn</strong><br><a href=\"https://abersoch.com/morfa-nefyn-multi-view-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.228919401273664, -4.522517775477222]).bindPopup("<strong>Rhosneigr Beach</strong><br><a href=\"https://camsecure.co.uk/rhosneigr_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.279180511826546, -4.616354465582782]).bindPopup("<strong>Trearddur Bay</strong><br><a href=\"https://weather.trearddurbay.org/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.360924543689286, -4.2728495539231215]).bindPopup("<strong>Lligwy Beach</strong><br><a href=\"https://www.camsecure.co.uk/lligwy-beach-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.34090088055693, -4.234368662085197]).bindPopup("<strong>Traeth Bychan</strong><br><a href=\"https://www.redwharfbaysc.co.uk/web-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.30948020570538, -4.2081624169517315]).bindPopup("<strong>Red Wharf bay</strong><br><a href=\"https://www.stdavidsleisure.com/Holiday-Parks-North-Wales/St-Davids-Park-Anglesey/Web-Cam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.32774273041791, -3.831155729351018]).bindPopup("<strong>LLandudno North Shore</strong><br><a href=\"https://www.youtube.com/@MinyDonLlandudno/streams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.3161586855924, -3.842019169773538]).bindPopup("<strong>Llandudno West Shore</strong><br>10am - 10pm only<br><a href=\"https://www.westshorebeachcafe.com/webcam-in-llandudno/#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.81716600112602, -3.0555986211652457]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.skylinewebcams.com/webcam/united-kingdom/england/blackpool/blackpool.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.83462956542015, -3.054557346277045]).bindPopup("<strong>Blackpool Prom</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/berkeley\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.84931004135319, -3.0529907274688233]).bindPopup("<strong>Blackpool Prom South</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.84961324316708, -3.052949002091682]).bindPopup("<strong>Blackpool Prom North</strong><br><a href=\"https://www.granadaapartments.uk/live-cameras/queens-mansions-2\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.07364686696934, -2.8651280885312445]).bindPopup("<strong>Morcambe Bay</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.07562016935932, -2.8611937065268718]).bindPopup("<strong>Morcambe Bay, Marine Rd</strong><br><a href=\"https://www.webcamtaxi.com/en/england/lancashire/marine-rd-morecambe.html#\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.20216039828964, -2.8345450688551286]).bindPopup("<strong>Arnside Pier</strong><br><a href=\"https://arnsidechipshop.co.uk/piercam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.063944460363075, -3.174379158514843]).bindPopup("<strong>Piel Island</strong><br><a href=\"https://www.cumbriawildlifetrust.org.uk/wildlife/cams/seal-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.74970742734678, -3.0335564430696706]).bindPopup("<strong>St Annes Beach</strong><br><a href=\"https://www.discoverfylde.co.uk/st-annes-beach-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.08024864074025, -0.19345826719300996]).bindPopup("<strong>Bridlington Harbour</strong><br><a href=\"https://www.bridhub.co.uk/public/Brid-Harbour-Cam.cfm\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.91622770744472, -0.16162855420292557]).bindPopup("<strong>Hornsea NCI</strong><br>2x webcams pointing N and S<br><a href=\"https://www.nci.org.uk/nci-hornsea-webcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.12910418315732, -0.10459440464977783]).bindPopup("<strong>Flamborough North Landing</strong><br><a href=\"https://www.youtube.com/watch?v=hywdwhtID90\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.950234678108934, 0.49429241094576803]).bindPopup("<strong>Hunstanton Old Beach</strong><br><a href=\"https://hunstanton.webcam/cliff-top\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.94146843487469, 0.4867726703816871]).bindPopup("<strong>Sailing Club, North Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/north-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.92878332495032, 0.4782857933936984]).bindPopup("<strong>South Beach, Hunstanton</strong><br>Position requires refining<br><a href=\"https://hunstanton.webcam/south-beach\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.938527183098955, 0.4855339480827639]).bindPopup("<strong>South Promenade, Hunstanton</strong><br><a href=\"https://hunstanton.webcam/south-prom\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.95839135660154, 0.8505047169492744]).bindPopup("<strong>Wells Harbour</strong><br><a href=\"https://www.portofwells.co.uk/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.54524784687084, -4.6782473541442275]).bindPopup("<strong>Troon Yacht Haven - Fuel Berth</strong><br><a href=\"https://g0.ipcamlive.com/player/player.php?alias=tyhfuel&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.77227128265369, -4.858405543983]).bindPopup("<strong>Largs Yacht Haven - Entrance</strong><br><a href=\"https://g0.ipcamlive.com/player/player.php?alias=layhentrance&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.36224671196267, 1.0253456976373665]).bindPopup("<strong>Whitstable Yacht Club</strong><br><a href=\"https://www.wyc.org.uk/webcam-weather-tides/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.576647140848216, -5.1369939421329756]).bindPopup("<strong>Arran - Brodick Ferry Terminal</strong><br><a href=\"https://www.twitch.tv/cmalbrodick\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([55.707649395530844, -5.301770339127706]).bindPopup("<strong>Arran - Loch Ranza Ferry Terminal</strong><br><a href=\"https://www.twitch.tv/cmallochranza\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.22402186849869, 1.4043131324588851]).bindPopup("<strong>Deal Pier</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-kingdom/england/deal/deal-kent.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.33214376700279, 1.423059756291877]).bindPopup("<strong>Ramsgate Harbour</strong><br><a href=\"https://www.youtube.com/live/q_43ulLyBeY\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.37606332586415, 0.6751428857367693]).bindPopup("<strong>Lower Halstow Yacht Club</strong><br><a href=\"https://weather.lhyc.org.uk/live/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.44042549215772, 0.778597663134572]).bindPopup("<strong>Isle of Sheppey Sailing Club</strong><br><a href=\"https://www.iossailingclub.com/webcam-and-weather\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.51470628004279, 0.7224602035041423]).bindPopup("<strong>Southend Pier</strong><br><a href=\"https://www.southendpier.co.uk/webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.96562516831914, 1.8414570801924819]).bindPopup("<strong>Calais Beach</strong><br><a href=\"https://www.viewsurf.com/univers/plage/vue/18722-france-nord-pas-de-calais-calais-live\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.76569490582019, 1.6066083103602982]).bindPopup("<strong>Plage de Wimereux</strong><br><a href=\"https://www.villatremail.ovh/webcam-en-direct\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.806540378622714, 1.020743645755972]).bindPopup("<strong>Brightlingsea Sailing Club</strong><br><a href=\"https://camsecure.co/httpswebcam/brightlingsea/brightlingsea.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.71612248076052, -1.875364932185292]).bindPopup("<strong>Bournemouth Pier</strong><br><a href=\"https://webcamexpo.com/bournemouth-webcam-uk/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.54847965676535, -3.490900815938079]).bindPopup("<strong>Teignmouth NCI Station</strong><br>2x webcams pointing NE and SW<br><a href=\"https://www.teignmouth-nci.org.uk/dual-live-streams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.58394765131022, -4.100155291637609]).bindPopup("<strong>Tywyn Beach</strong><br><a href=\"https://visit-tywyn.co.uk/webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94817946709824, 1.2862212086795908]).bindPopup("<strong>Ha'penny Pier</strong><br>2x webcams, left and right<br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94699835464553, 1.2897713349350184]).bindPopup("<strong>Navigation House</strong><br>2x webcams, left and right<br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.935835395173555, 1.3182427084050372]).bindPopup("<strong>Landguard Point</strong><br><a href=\"https://hha.co.uk/news/live-stream-cameras/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.94894202047571, 1.3349613669786315]).bindPopup("<strong>Felixstowe NCI lookout</strong><br>2x webcams, Deben and Lookout<br><a href=\"https://coastwatch-felixstowe.co.uk/New/webcams.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([51.97595885609089, 1.3823313047915984]).bindPopup("<strong>Felixstowe NCI Deben</strong><br>2x webcams, Deben and Lookout<br><a href=\"https://coastwatch-felixstowe.co.uk/New/webcams.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.838934175669394, -4.494212629330449]).bindPopup("<strong>Warren Beach</strong><br><a href=\"https://www.camsecure.co.uk/warren_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.82401018349658, -4.498773499201506]).bindPopup("<strong>Abersoch Main Beach</strong><br><a href=\"https://abersoch.com/abersoch-hydro-main-beach-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.943536393335485, -4.567956486162049]).bindPopup("<strong>Ty Coch Inn</strong><br><a href=\"http://www.tycoch.co.uk/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.15980275177253, -4.471635140436448]).bindPopup("<strong>Llangrannog Beach</strong><br><a href=\"https://www.camsecure.co.uk/llangrannog_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.14304240739951, -4.275962453809385]).bindPopup("<strong>Victoria Dock</strong><br>3x webcam views<br><a href=\"https://www.caernarfonharbour.org.uk/webcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([52.91219107900811, -4.099226443627253]).bindPopup("<strong>Portmeirion Estuary</strong><br><br><a href=\"https://portmeirion.wales/galleries/web-cams\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([53.25518382741184, -4.102483930811804]).bindPopup("<strong>Northern Menai Strait</strong><br><br><a href=\"https://www.caernarfonharbour.org.uk/nwvyc-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.278370563200866, -2.9555181737220373]).bindPopup("<strong>Lakeside Pier</strong><br><br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/lakeside-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.41969480113176, -2.9623977046965613]).bindPopup("<strong>Ambleside (Waterhead) Pier</strong><br><br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/ambleside-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.36288936760546, -2.922980827664341]).bindPopup("<strong>Bowness Pier</strong><br>Bowness Webcam<br><a href=\"https://www.windermere-lakecruises.co.uk/webcam/bowness-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.409455547725386, -2.948697435041926]).bindPopup("<strong>Low Wood Bay</strong><br><br><a href=\"https://englishlakes.co.uk/hotels/low-wood-bay/watersports/lake-windermere-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.353023708761924, -2.939774299871883]).bindPopup("<strong>Ferry ramp</strong><br><br><a href=\"https://www.fba.org.uk/windermere-ferry-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([32.32895462897819, -64.83232575135602]).bindPopup("<strong>Bermuda Dockyard</strong><br><a href=\"https://www.portbermudawebcam.com/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([18.187622700009527, -63.13473907758634]).bindPopup("<strong>Meads Bay</strong><br><a href=\"https://www.myearthcam.com/malliouhana\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([18.179296203554028, -63.1441833850818]).bindPopup("<strong>Meads Bay</strong><br><a href=\"https://www.earthcam.com/world/anguilla/meadsbay/?cam=meadsbay_hd\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([18.441326730124633, -64.75792313299952]).bindPopup("<strong>White Bay</strong><br><a href=\"https://www.livebeaches.com/webcams/pink-house-villas-bvi-live-cam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([18.425903825921665, -64.65729189473294]).bindPopup("<strong>Cane Garden Bay</strong><br><a href=\"https://www.livebeaches.com/webcams/pussers-at-myetts-live-cam-in-bvi/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.79743897823012, -1.1984330527469809]).bindPopup("<strong>Lee on Solent Sailing Club</strong><br><a href=\"https://www.camsecure.co.uk/lee_on_the_solent_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.85205944486873, -1.3058559097627334]).bindPopup("<strong>Hamble River Entrance</strong><br><a href=\"https://www.camsecure.co.uk/hamble_river_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([50.76604665309442, -0.874949453108074]).bindPopup("<strong>East Wittering</strong><br><a href=\"https://www.shore.co.uk/surf-check.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([-38.0087382861636, -57.537636439370424]).bindPopup("<strong>Mar del Plata</strong><br><a href=\"https://www.webcamtaxi.com/en/argentina/buenos-aires/mar-del-plata.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([-38.583074966809974, -58.72950365247535]).bindPopup("<strong>Playa de Necochea</strong><br><a href=\"https://www.youtube.com/watch?v=zIUoe2Bjtgk\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([-27.421323296285657, -48.4385139397202]).bindPopup("<strong>Cachoeira de Bom Jesus</strong><br><a href=\"https://www.youtube.com/watch?v=GFAEq2j3csQ\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([21.26147560762602, -157.82109261803868]).bindPopup("<strong>Kaluahole Channel</strong><br><a href=\"https://www.livebeaches.com/webcams/elks-lodge-shaka-cam-in-honolulu/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([21.66507696568255, -158.05092969363636]).bindPopup("<strong>Ehukai Beach</strong><br><a href=\"https://www.livebeaches.com/webcams/ehukai-beach-webcam-in-hawaii/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([40.61565972790332, -74.06352178515826]).bindPopup("<strong>New York Harbour - Staten</strong><br><a href=\"https://www.nyharborwebcam.com/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([40.909021383396166, -72.28484295047917]).bindPopup("<strong>Sagg Main Beach</strong><br><a href=\"https://webcams24.live/webcam/sagg-main-beach-ny-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([40.936106646603584, -72.21438404918528]).bindPopup("<strong>Georgica Beach</strong><br>Location requires refining<br><a href=\"https://webcams24.live/webcam/georgica-beach-east-hampton-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([25.785316911611044, -80.18688363424508]).bindPopup("<strong>Miami Cruise Terminal</strong><br><a href=\"https://webcams24.live/webcam/port-miami-florida-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([26.189938079512753, -80.09508010500177]).bindPopup("<strong>Anglins Pier</strong><br><a href=\"https://webcams24.live/webcam/anglins-pier-florida-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([26.317503784209663, -80.07554769938334]).bindPopup("<strong>Deerfield Beach</strong><br><a href=\"https://webcams24.live/webcam/deerfield-beach-surf-florida-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([49.129835396558995, -125.9015171556648]).bindPopup("<strong>Mackenzie Beach</strong><br><a href=\"https://webcams24.live/webcam/ocean-village-resort-tofino-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([33.65510485662744, -118.00408865829212]).bindPopup("<strong>Huntington Beach</strong><br><a href=\"https://www.youtube.com/watch?v=mhQjsLBfOoY\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([27.73162065826818, -97.1318948120484]).bindPopup("<strong>Port Aransas Beach</strong><br><a href=\"https://hdontap.com/stream/518728/port-aransas-beach-live-webvam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([-33.84983493577617, 151.21424239471702]).bindPopup("<strong>Sydney Harbour Bridge</strong><br><a href=\"https://webcams24.live/webcam/sydney-harbour-australia-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([-33.8507972429043, 151.21254723857047]).bindPopup("<strong>Sydney Harbour</strong><br>Panning camera<br><a href=\"https://webcams24.live/webcam/sydney-harbour-bridge-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([28.068005255377944, -16.732279509875138]).bindPopup("<strong>Playa de Troya</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/espana/canarias/santa-cruz-de-tenerife/playa-troya.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([28.09177557051144, -16.74422695310469]).bindPopup("<strong>Playa del Duque</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/espana/canarias/santa-cruz-de-tenerife/playa-del-duque.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([39.14368884116472, 23.867429440385635]).bindPopup("<strong>Patitiri Port</strong><br><a href=\"https://webcams24.live/webcam/patitiri-port-greece-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([40.780772300303916, 24.710886702263647]).bindPopup("<strong>Thasos Old Harbour</strong><br>Panning webcam<br><a href=\"https://webcams24.live/webcam/view-from-hotel-angelica-thasos-greece-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([53.88557996784982, 8.639696232225175]).bindPopup("<strong>Duhnen Strand</strong><br><a href=\"https://webcams24.live/webcam/duhner-strandpromenade-cuxhaven-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([54.907425773276366, 8.298223222747351]).bindPopup("<strong>Westerland Beach</strong><br>Panning webcam<br><a href=\"https://webcams24.live/webcam/westerland-sylt-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([9.478399837306123, 100.06619591474424]).bindPopup("<strong>Crystal Bay</strong><br><a href=\"https://webcams24.live/webcam/crystal-bay-beach-resort-samui-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),

L.marker([19.33470786082442, -81.381589983819]).bindPopup("<strong>7 Mile Beach</strong><br><a href=\"https://www.coralstoneclub.com/photo-gallery/beachcams/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([21.796523168935323, -72.17695779576604]).bindPopup("<strong>Grace Bay Beach</strong><br><a href=\"https://www.sevenstarsgracebay.com/live-cam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([17.918587942356616, -62.86000138285849]).bindPopup("<strong>Flamand Beach</strong><br><a href=\"https://webcams24.live/webcam/flamand-beach-gustavia-saint-barthelemy-webcam\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
L.marker([25.073409460530893, -77.39707934712706]).bindPopup("<strong>Gooman Bay</strong><br><a href=\"https://hdontap.com/stream/541510/baha-mar-nassau-bahamas-live-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),



  L.marker([56.41643428655136, -5.471424516591476]).bindPopup("<strong>Oban Bay</strong><br><em>Panning view</em><br><a href=\"https://camsecure.co.uk/oban%20bay%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([58.871136670296615, -2.892125638722046]).bindPopup("<strong>Churchill barriers</strong><br><a href=\"https://camsecure.co.uk/orkney%20islands%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([57.714718015148655, -7.1695278573664]).bindPopup("<strong>Berneray Harbour</strong><br><a href=\"https://camsecure.co.uk/bays%20loch%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([56.41042603427964, -5.486602674646835]).bindPopup("<strong>Oban waterfront</strong><br><a href=\"https://camsecure.co.uk/oban_waterside_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([56.41975823908796, -5.479824841083372]).bindPopup("<strong>Oban Bay</strong><br><a href=\"https://camsecure.co.uk/oban%20bay%20to%20kerrera%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([55.98309643630443, -3.22318558117044]).bindPopup("<strong>Forth Yacht Club</strong><br><a href=\"https://camsecure.co.uk/firth_of_forth_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([56.468398458763595, -2.89535923056464]).bindPopup("<strong>River Tay</strong><br><a href=\"https://camsecure.co.uk/Camsecure3/Dundee_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([56.336264080189565, -2.7823038420656845]).bindPopup("<strong>St Andrews</strong><br><a href=\"https://camsecure.co.uk/st_andrews_beach.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.217034351346165, -5.476778396316587]).bindPopup("<strong>Porthgwidden Beach</strong><br><a href=\"https://camsecure.co.uk/porthgwidden_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.07694258046086, -5.699018535026527]).bindPopup("<strong>Sennen Cove</strong><br><a href=\"https://camsecure.co.uk/sennen_cove_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.07774370109936, -5.704290226432298]).bindPopup("<strong>Sennen Harbour</strong><br><a href=\"https://camsecure.co.uk/sennen_harbour_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.22410614199363, -5.391701682080658]).bindPopup("<strong>Godrevy / St Gothian</strong><br><a href=\"https://camsecure.co.uk/Camsecure3/Gwithian_Beach_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.12697810549059, -5.4752525417558]).bindPopup("<strong>Mounts Bay</strong><br><em>Panning view</em><br><a href=\"https://camsecure.co.uk/marazion.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.10052566321354, -5.551985203522453]).bindPopup("<strong>Newlyn</strong><br><a href=\"https://camsecure.co.uk/newlyn%20live%20webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.21862959106866, -5.476180166894618]).bindPopup("<strong>St Ives NCI - Bay view</strong><br><a href=\"https://camsecure.co.uk/StIves2.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.218279460783364, -5.476249291669647]).bindPopup("<strong>St Ives NCI- Beaches view</strong><br><a href=\"https://camsecure.co.uk/StIvesWebcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.21855981112082, -5.476612593530449]).bindPopup("<strong>St Ives NCI- Clodgy Point</strong><br><a href=\"https://camsecure.co.uk/st_ives_clodgy_point.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.14480445404728, -5.068007141927797]).bindPopup("<strong>Gyllyngvase Beach</strong><br><a href=\"https://camsecure.co.uk/gyllyngvase_beach.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.350602774423294, -4.452578747041778]).bindPopup("<strong>Looe Beach and Harbour entrance</strong><br><a href=\"https://camsecure.co.uk/looe_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.21552587265052, -5.477138911737413]).bindPopup("<strong>St Ives Quay</strong><br><a href=\"https://camsecure.co.uk/st-ives-quayside.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.578504128915434, -4.9175345489020765]).bindPopup("<strong>Polzeath Beach</strong><br><a href=\"https://camsecure.co.uk/polzeath-beach-webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.083037008617076, -5.318657829768384]).bindPopup("<strong>Porthleven Harbour Entrance</strong><br><a href=\"https://camsecure.co.uk/porthleven_harbour_entrance.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.12027949514891, -5.530661457727625]).bindPopup("<strong>Penzance Bay</strong><br><a href=\"https://camsecure.co.uk/penzance_bay.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.03093833435933, -5.26486559570128]).bindPopup("<strong>Poldhu</strong><br><em>Panning view</em><br><a href=\"https://camsecure.co.uk/poldhu_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.21700025397345, -5.028618501746482]).bindPopup("<strong>King Harry Ferry</strong><br><a href=\"https://camsecure.co.uk/river_fal_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.33441980707058, -4.635769273225616]).bindPopup("<strong>Fowey Harbour</strong><br><a href=\"https://camsecure.co.uk/FoweyHarbour.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.34421127503883, -4.700855377809627]).bindPopup("<strong>St Austell Bay</strong><br><a href=\"https://www.sabbc.co.uk/web_cam.php\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.32971828670711, -4.646036104725492]).bindPopup("<strong>Readymoney cove</strong><br><a href=\"https://camsecure.co.uk/readymoney_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.15797758826105, -5.015077187246942]).bindPopup("<strong>St Mawes Harbour</strong><br><a href=\"https://camsecure.co.uk/St_Maws_Slipway_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.269663980721745, -4.787046859174731]).bindPopup("<strong>Mevagissey Harbour</strong><br><a href=\"https://camsecure.co.uk/mevagissey_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.15651301950862, -5.070653312469484]).bindPopup("<strong>Falmouth Prince of Wales Pier</strong><br><a href=\"https://camsecure.co.uk/Falmouth_Yacht_Webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.21455657010751, -5.479860536955349]).bindPopup("<strong>St Ives Wharf</strong><br><a href=\"https://camsecure.co.uk/StIves3.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([51.206441271871036, -4.038573207181687]).bindPopup("<strong>Combe Martin</strong><br><a href=\"https://camsecure.co.uk/combe_martin_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([51.20934502043774, -4.1158532364226765]).bindPopup("<strong>Ilfracombe Harbour</strong><br><a href=\"https://camsecure.co.uk/Camsecure3/ilfracombe_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([51.210877968157334, -4.112718757578761]).bindPopup("<strong>Harbour Office</strong><br><a href=\"https://camsecure.co.uk/Camsecure3/ilfra2.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.20288374514137, -3.720079673267815]).bindPopup("<strong>Prawle NCI</strong><br><em>Use page link for west facing cam</em><br><a href=\"https://www.nci-prawlepoint.org.uk/east-facing-webcam/\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.23654918502854, -3.7662744493965303]).bindPopup("<strong>Salcombe crossways</strong><br><a href=\"https://camsecure.co.uk/salcombe_crossways.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([51.04019829508326, -4.243836880594524]).bindPopup("<strong>Westward Ho</strong><br><a href=\"https://camsecure.co.uk/WestwardHo1.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.36555568364069, -4.144505780193923]).bindPopup("<strong>Plymouth Hoe</strong><br><a href=\"https://camsecure.co.uk/PlymouthSound.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.31959823892384, -3.610026049091129]).bindPopup("<strong>Blackpool Sands</strong><br><a href=\"https://camsecure.co.uk/blackpool_sands_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.24529229932052, -3.858528162845965]).bindPopup("<strong>Hope Cove</strong><br><a href=\"https://camsecure.co.uk/hope_cove_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.225124586036834, -3.7843872346592193]).bindPopup("<strong>South Sands</strong><br><a href=\"https://camsecure.co.uk/south_sands.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([50.48259759545543, -3.515456504596375]).bindPopup("<strong>Oddicombe Beach</strong><br><a href=\"https://camsecure.co.uk/oddicombe_beach_webcam.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([-54.80562217509055, -68.30015224666735]).bindPopup("<strong>Ushuaia port</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/argentina/tierra-del-fuego/ushuaia/ushuaia.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([-33.36212188296928, -71.68480023901294]).bindPopup("<strong>Cofradía Náutica Del Pacífico</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/chile/valparaiso/algarrobo/algarrobo-chile.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([18.34875170158155, -64.93160706806388]).bindPopup("<strong>St Thomas</strong><br><em>Looking South</em><br><a href=\"https://www.skylinewebcams.com/en/webcam/us-virgin-islands/st-thomas/charlotte-amalie/charlotte-amalie-harbor.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([22.88212553908396, -109.90692678809972]).bindPopup("<strong>Cabo San Lucas</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/mexico/baja-california-sur/cabo-san-lucas/cabo-san-lucas.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>"),
  L.marker([25.790850675734973, -80.18444534265127]).bindPopup("<strong>Venetian Marina</strong><br><a href=\"https://www.skylinewebcams.com/en/webcam/united-states/florida/miami/venetian-marina-biscayne-bay.html\" target=\"_blank\" rel=\"noopener\">View webcam</a>")



];


// --- Random Webcam list (curated from [webcams.xlsx](https://mcga-my.sharepoint.com/personal/rob_priestley_mcga_gov_uk/_layouts/15/Doc.aspx?sourcedoc=%7BC06D4A79-616E-49A1-900A-D99D680A23CC%7D&file=webcams.xlsx&action=default&mobileredirect=true&EntityRepresentationId=02ea6875-bd86-4b0d-a974-29e61d5f13c8) UK tab) ---
const webcamLinks = [
  "https://www.isleofwight.com/webcams/needles/",
  "https://www.isleofwight.com/webcams/colwell/",
  "https://www.isleofwight.com/webcams/ventnor/",
  "https://www.isleofwight.com/webcams/sandown/",
  "https://www.isleofwight.com/webcams/ryde/",
  "https://www.isleofwight.com/webcams/shanklin/",
  "https://www.isleofwight.com/webcams/cowes/",
  "https://www.brightoncctv.co.uk/i360-cams",
  "https://www.camsecure.co.uk/Camsecure2/Brighton_Harbour_Webcam.html",
  "https://www.camsecure.co.uk/brixham_breakwater.html",
  "https://www.camsecure.co.uk/Camsecure3/Brixham_Harbour.html",
  "https://www.camsecure.co.uk/brixham_sailing_webcam.html",
  "https://www.camsecure.co.uk/itchenor_webcam.html",
  "https://www.skylinewebcams.com/en/webcam/united-kingdom/england/hastings/hastings-pier.html",
  "https://www.camsecure.co.uk/bembridge_sailing.html",
  "https://www.camsecure.co.uk/cowes_webcam.html",
  "https://www.camsecure.co.uk/river_medina_webcam.html",
  "https://www.camsecure.co.uk/sea_view_yacht_club_webcam.html",
  "https://www.camsecure.co.uk/yarmouth-webcam.html",
  "https://www.camsecure.co.uk/Poole_Quay_Webcam.html",
  "https://www.camsecure.co.uk/portland_harbour_webcam.html",
  "https://www.skylinewebcams.com/en/webcam/united-kingdom/england/portsmouth/portsmouth.html",
  "https://www.camsecure.co.uk/seaton%20webcam.html",
  "https://www.camsecure.co.uk/swanage_lifeboat_webcam.html",
  "https://www.camsecure.co.uk/swanage-webcam.html",
  "https://www.camsecure.co.uk/torquay_harbour_inner_dock.html",
  "https://www.camsecure.co.uk/torquay_sea_view.html",
  "https://www.camsecure.co.uk/Camsecure2/Weymouth_Seafront_Webcam.html",
  "https://www.camsecure.co.uk/worthing_beach_webcam.html",
  "https://www.camsecure.co.uk/worthing_seafront_webcam.html",
  "https://www.skylinewebcams.com/webcam/united-kingdom/wales/gwynedd/barmouth-harbour.html",
  "https://abersoch.com/abersoch-watersports-inner-harbour-webcam/",
  "https://abersoch.com/offaxis-pwllheli-marina-webcam/",
  "https://abersoch.com/hafan-pwllheli-marina-webcam/",
  "https://abersoch.com/porth-dinllaen-sunset-webcam/",
  "https://abersoch.com/morfa-nefyn-multi-view-webcam/",
  "https://camsecure.co.uk/rhosneigr_beach_webcam.html",
  "https://weather.trearddurbay.org/webcam/",
  "https://www.camsecure.co.uk/lligwy-beach-webcam.html",
  "https://www.redwharfbaysc.co.uk/web-cam",
  "https://www.stdavidsleisure.com/Holiday-Parks-North-Wales/St-Davids-Park-Anglesey/Web-Cam/",
  "https://www.youtube.com/@MinyDonLlandudno/streams",
  "https://www.westshorebeachcafe.com/webcam-in-llandudno/",
  "https://www.skylinewebcams.com/webcam/united-kingdom/england/blackpool/blackpool.html",
  "https://www.granadaapartments.uk/live-cameras/berkeley",
  "https://www.granadaapartments.uk/live-cameras/queens-mansions-1",
  "https://www.granadaapartments.uk/live-cameras/queens-mansions-2",
  "https://www.webcamtaxi.com/en/england/lancashire/morecambe-bay.html",
  "https://www.webcamtaxi.com/en/england/lancashire/marine-rd-morecambe.html",
  "https://arnsidechipshop.co.uk/piercam",
  "https://www.cumbriawildlifetrust.org.uk/wildlife/cams/seal-cam",
  "https://www.discoverfylde.co.uk/st-annes-beach-webcam/",
  "https://www.bridhub.co.uk/public/Brid-Harbour-Cam.cfm",
  "https://www.nci.org.uk/nci-hornsea-webcams/",
  "https://www.youtube.com/watch?v=hywdwhtID90",
  "https://hunstanton.webcam/cliff-top",
  "https://hunstanton.webcam/north-prom",
  "https://hunstanton.webcam/south-beach",
  "https://hunstanton.webcam/south-prom",
  "https://www.portofwells.co.uk/webcam/",
  "https://g0.ipcamlive.com/player/player.php?alias=tyhfuel&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1",
  "https://g0.ipcamlive.com/player/player.php?alias=layhentrance&skin=white&autoplay=0&mute=1&timelapseplayerenabled=1",
  "https://www.wyc.org.uk/webcam-weather-tides/",
  "https://www.twitch.tv/cmalbrodick",
  "https://www.twitch.tv/cmallochranza",
  "https://www.skylinewebcams.com/en/webcam/united-kingdom/england/deal/deal-kent.html",
  "https://www.youtube.com/live/q_43ulLyBeY",
  "https://weather.lhyc.org.uk/live/",
  "https://www.iossailingclub.com/webcam-and-weather",
  "https://www.southendpier.co.uk/webcam",
  "https://www.viewsurf.com/univers/plage/vue/18722-france-nord-pas-de-calais-calais-live",
  "https://www.villatremail.ovh/webcam-en-direct",
  "https://camsecure.co/httpswebcam/brightlingsea/brightlingsea.html",
  "https://webcamexpo.com/bournemouth-webcam-uk/",
  "https://www.teignmouth-nci.org.uk/dual-live-streams",
  "https://visit-tywyn.co.uk/webcam/",
  "https://hha.co.uk/news/live-stream-cameras/",
  "https://coastwatch-felixstowe.co.uk/New/webcams.html",
  "https://www.camsecure.co.uk/warren_beach_webcam.html",
  "https://abersoch.com/abersoch-hydro-main-beach-webcam/",
  "http://www.tycoch.co.uk/",
  "https://www.camsecure.co.uk/llangrannog_beach_webcam.html",
  "https://www.caernarfonharbour.org.uk/webcams/",
  "https://portmeirion.wales/galleries/web-cams",
  "https://www.caernarfonharbour.org.uk/nwvyc-webcam/",
  "https://www.windermere-lakecruises.co.uk/webcam/lakeside-webcam",
  "https://www.windermere-lakecruises.co.uk/webcam/ambleside-webcam",
  "https://www.windermere-lakecruises.co.uk/webcam/bowness-webcam",
  "https://englishlakes.co.uk/hotels/low-wood-bay/watersports/lake-windermere-webcam/",
  "https://www.fba.org.uk/windermere-ferry-cam",
  "https://www.camsecure.co.uk/lee_on_the_solent_webcam.html",
  "https://www.camsecure.co.uk/hamble_river_webcam.html",
  "https://www.shore.co.uk/surf-check.html",
  "https://www.webcamtaxi.com/en/argentina/buenos-aires/mar-del-plata.html",
  "https://www.youtube.com/watch?v=zIUoe2Bjtgk",
  "https://www.youtube.com/watch?v=GFAEq2j3csQ",
  "https://www.livebeaches.com/webcams/elks-lodge-shaka-cam-in-honolulu/",
  "https://www.livebeaches.com/webcams/ehukai-beach-webcam-in-hawaii/",
  "https://www.nyharborwebcam.com/",
  "https://webcams24.live/webcam/sagg-main-beach-ny-webcam",
  "https://webcams24.live/webcam/georgica-beach-east-hampton-webcam",
  "https://webcams24.live/webcam/port-miami-florida-webcam",
  "https://webcams24.live/webcam/anglins-pier-florida-webcam",
  "https://webcams24.live/webcam/deerfield-beach-surf-florida-webcam",
  "https://webcams24.live/webcam/ocean-village-resort-tofino-webcam",
  "https://www.youtube.com/watch?v=mhQjsLBfOoY",
  "https://hdontap.com/stream/518728/port-aransas-beach-live-webvam/",
  "https://webcams24.live/webcam/sydney-harbour-australia-webcam",
  "https://webcams24.live/webcam/sydney-harbour-bridge-webcam",
  "https://www.skylinewebcams.com/en/webcam/espana/canarias/santa-cruz-de-tenerife/playa-troya.html",
  "https://www.skylinewebcams.com/en/webcam/espana/canarias/santa-cruz-de-tenerife/playa-del-duque.html",
  "https://webcams24.live/webcam/patitiri-port-greece-webcam",
  "https://webcams24.live/webcam/view-from-hotel-angelica-thasos-greece-webcam",
  "https://webcams24.live/webcam/duhner-strandpromenade-cuxhaven-webcam",
  "https://webcams24.live/webcam/westerland-sylt-webcam",
  "https://webcams24.live/webcam/crystal-bay-beach-resort-samui-webcam",
  "https://www.coralstoneclub.com/photo-gallery/beachcams/",
  "https://www.sevenstarsgracebay.com/live-cam",
  "https://webcams24.live/webcam/flamand-beach-gustavia-saint-barthelemy-webcam",
  "https://hdontap.com/stream/541510/baha-mar-nassau-bahamas-live-webcam/"

];

// --- Random open helper (unchanged) ---
function openRandomWebcam() {
  if (!webcamLinks.length) return;
  const index = Math.floor(Math.random() * webcamLinks.length);
  const url = webcamLinks[index];
  window.open(url, '_blank', 'noopener');
}

// --- Wire the button on index.html (unchanged) ---
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('randomWebcamBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();   // prevents '#' navigation
      openRandomWebcam();
    });
  }
});


// --------------------
// Add webcams to cluster
// --------------------
webcamMarkers.forEach(marker => {
  markerCluster.addLayer(marker);
});

// --------------------
// Add cluster to map
// --------------------
map.addLayer(markerCluster);

