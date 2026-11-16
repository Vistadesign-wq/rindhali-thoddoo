/* Rindhali Thoddoo — translations
   Each row: [English, Arabic, Russian, German, French, Italian]
   English text must match the page text exactly (including <em> tags and &amp;). */
(function(){
  var LANGS = [['en','English','EN'],['ar','العربية','AR'],['ru','Русский','RU'],['de','Deutsch','DE'],['fr','Français','FR'],['it','Italiano','IT']];
  var ROWS = [
  /* ---------- navigation & site chrome ---------- */
  ["Home","الرئيسية","Главная","Start","Accueil","Home"],
  ["Rooms","الغرف","Номера","Zimmer","Chambres","Camere"],
  ["Dining","المطعم","Питание","Kulinarik","Restauration","Ristorazione"],
  ["Thoddoo","ثودو","Тодду","Thoddoo","Thoddoo","Thoddoo"],
  ["Gallery","معرض الصور","Галерея","Galerie","Galerie","Galleria"],
  ["Reviews","التقييمات","Отзывы","Bewertungen","Avis","Recensioni"],
  ["Plan Your Trip","خطط لرحلتك","Планирование","Reiseplanung","Préparer le voyage","Pianifica il viaggio"],
  ["Contact","اتصل بنا","Контакты","Kontakt","Contact","Contatti"],
  ["Book direct","احجز مباشرة","Забронировать","Direkt buchen","Réserver en direct","Prenota diretto"],
  ["Thoddoo · Alif Alif Atoll · Maldives","ثودو · أتول أليف أليف · جزر المالديف","Тодду · атолл Алиф-Алиф · Мальдивы","Thoddoo · Alif-Alif-Atoll · Malediven","Thoddoo · atoll d'Alif Alif · Maldives","Thoddoo · atollo di Alif Alif · Maldive"],
  ["Guest rating <b>9.3 / 10 · Wonderful</b>","تقييم الضيوف <b>9.3 / 10 · رائع</b>","Оценка гостей <b>9,3 / 10 · Превосходно</b>","Gästebewertung <b>9,3 / 10 · Hervorragend</b>","Note des clients <b>9,3 / 10 · Exceptionnel</b>","Voto degli ospiti <b>9,3 / 10 · Eccezionale</b>"],
  ["Check-in 12:00 · Check-out 11:00","الوصول 12:00 · المغادرة 11:00","Заезд 12:00 · Выезд 11:00","Check-in 12:00 · Check-out 11:00","Arrivée 12h00 · Départ 11h00","Check-in 12:00 · Check-out 11:00"],
  ["Check availability","تحقق من التوفر","Проверить наличие","Verfügbarkeit prüfen","Vérifier les disponibilités","Verifica disponibilità"],
  ["Skip to content","انتقل إلى المحتوى","Перейти к содержанию","Zum Inhalt springen","Aller au contenu","Vai al contenuto"],
  ["A brand-new guesthouse on Thoddoo, the garden island of the Maldives. Balcony rooms, family rooms, warm Maldivian hospitality and a 9.3 guest rating.","دار ضيافة جديدة كليًا في ثودو، جزيرة الحدائق في جزر المالديف. غرف بشرفات وغرف عائلية وضيافة مالديفية دافئة وتقييم 9.3 من الضيوف.","Совершенно новый гестхаус на Тодду, острове-саде Мальдив. Номера с балконами, семейные номера, тёплое мальдивское гостеприимство и оценка гостей 9,3.","Ein brandneues Gästehaus auf Thoddoo, der Garteninsel der Malediven. Balkonzimmer, Familienzimmer, herzliche maledivische Gastfreundschaft und 9,3 Gästebewertung.","Une maison d'hôtes toute neuve à Thoddoo, l'île-jardin des Maldives. Chambres avec balcon, chambres familiales, accueil maldivien chaleureux et note de 9,3.","Una guesthouse nuovissima a Thoddoo, l'isola giardino delle Maldive. Camere con balcone, camere familiari, calda ospitalità maldiviana e voto 9,3."],
  ["Stay","الإقامة","Проживание","Aufenthalt","Séjour","Soggiorno"],
  ["Explore","استكشف","Исследуйте","Entdecken","Découvrir","Scopri"],
  ["Guest reviews","آراء الضيوف","Отзывы гостей","Gästebewertungen","Avis des clients","Recensioni degli ospiti"],
  ["Thoddoo island","جزيرة ثودو","Остров Тодду","Insel Thoddoo","L'île de Thoddoo","L'isola di Thoddoo"],
  ["Getting here","كيفية الوصول","Как добраться","Anreise","Comment venir","Come arrivare"],
  ["FAQ","الأسئلة الشائعة","Вопросы и ответы","FAQ","FAQ","FAQ"],
  ["Privacy notice","إشعار الخصوصية","Политика конфиденциальности","Datenschutzhinweis","Politique de confidentialité","Informativa privacy"],
  ["Language","اللغة","Язык","Sprache","Langue","Lingua"],

  /* ---------- home: hero ---------- */
  ["Brand-new guesthouse · Thoddoo, Maldives","دار ضيافة جديدة · ثودو، المالديف","Новый гестхаус · Тодду, Мальдивы","Brandneues Gästehaus · Thoddoo, Malediven","Maison d'hôtes neuve · Thoddoo, Maldives","Guesthouse nuovissima · Thoddoo, Maldive"],
  ["Your island home <em>on Thoddoo</em>","بيتك في الجزيرة <em>على ثودو</em>","Ваш дом на острове <em>Тодду</em>","Ihr Inselzuhause <em>auf Thoddoo</em>","Votre maison sur l'île <em>de Thoddoo</em>","La tua casa sull'isola <em>di Thoddoo</em>"],
  ["Rated 9.3 “Wonderful” by our guests, with a perfect 10 for staff, comfort and location.","تقييم 9.3 «رائع» من ضيوفنا، مع علامة كاملة 10 للموظفين والراحة والموقع.","Оценка гостей 9,3 «Превосходно» и идеальные 10 баллов за персонал, комфорт и расположение.","Von unseren Gästen mit 9,3 „Hervorragend“ bewertet, mit perfekten 10 für Personal, Komfort und Lage.","Noté 9,3 « Exceptionnel » par nos clients, avec un 10 parfait pour le personnel, le confort et l'emplacement.","Votato 9,3 «Eccezionale» dai nostri ospiti, con un 10 pieno per staff, comfort e posizione."],
  ["Brand-new rooms with huge private balconies, king beds and rain showers.","غرف جديدة كليًا بشرفات خاصة واسعة وأسرّة كبيرة ودشّ مطري.","Новые номера с огромными балконами, большими кроватями и тропическим душем.","Brandneue Zimmer mit riesigen Privatbalkonen, Kingsize-Betten und Regenduschen.","Chambres neuves avec immenses balcons privés, lits king-size et douches à l'italienne.","Camere nuovissime con enormi balconi privati, letti king e docce a pioggia."],
  ["An 11-minute walk to Thoddoo’s white-sand bikini beach, with cafés right on the doorstep.","على بعد 11 دقيقة سيرًا من شاطئ ثودو الأبيض المخصص للسياح، والمقاهي على عتبة الباب.","11 минут пешком до белоснежного пляжа Тодду, кафе — прямо у порога.","11 Gehminuten zum weißen Bikini-Strand von Thoddoo, Cafés direkt vor der Tür.","À 11 minutes à pied de la plage de sable blanc de Thoddoo, cafés juste devant la porte.","A 11 minuti a piedi dalla spiaggia bianca di Thoddoo, con i caffè proprio sotto casa."],
  ["Family rooms for four, free bicycles, free Wi-Fi and speedboat transfers arranged for you.","غرف عائلية لأربعة أشخاص ودراجات وواي فاي مجانًا، ونرتّب لك رحلات القارب السريع.","Семейные номера на четверых, бесплатные велосипеды и Wi‑Fi, мы организуем трансфер на скоростном катере.","Familienzimmer für vier, kostenlose Fahrräder und WLAN, Schnellboot-Transfers organisieren wir.","Chambres familiales pour quatre, vélos et Wi‑Fi gratuits, transferts en speedboat organisés pour vous.","Camere familiari per quattro, bici e Wi‑Fi gratuiti, transfer in motoscafo organizzati per voi."],
  ["Thoddoo, the garden island of the Maldives: fruit farms, white beaches and a turquoise lagoon.","ثودو، جزيرة الحدائق في المالديف: مزارع فاكهة وشواطئ بيضاء وبحيرة فيروزية.","Тодду — остров-сад Мальдив: фруктовые фермы, белые пляжи и бирюзовая лагуна.","Thoddoo, die Garteninsel der Malediven: Obstfarmen, weiße Strände und eine türkise Lagune.","Thoddoo, l'île-jardin des Maldives : vergers, plages blanches et lagon turquoise.","Thoddoo, l'isola giardino delle Maldive: frutteti, spiagge bianche e una laguna turchese."],
  ["Sandbank picnics, snorkelling with turtles and dolphin cruises, arranged by our team.","نزهات على الكثبان الرملية، والغوص مع السلاحف، ورحلات الدلافين، ينظمها فريقنا.","Пикники на песчаной косе, снорклинг с черепахами и круизы к дельфинам — всё организуем мы.","Picknicks auf der Sandbank, Schnorcheln mit Schildkröten und Delfintouren – von unserem Team organisiert.","Pique-niques sur un banc de sable, snorkeling avec les tortues et sorties dauphins, organisés par notre équipe.","Picnic sul banco di sabbia, snorkeling con le tartarughe e gite con i delfini, organizzati dal nostro team."],
  ["Explore rooms","استكشف الغرف","Смотреть номера","Zimmer ansehen","Voir les chambres","Scopri le camere"],
  ["View gallery","شاهد الصور","Галерея","Galerie ansehen","Voir la galerie","Vedi la galleria"],
  ["Arrival","الوصول","Заезд","Anreise","Arrivée","Arrivo"],
  ["Departure","المغادرة","Выезд","Abreise","Départ","Partenza"],
  ["Room","الغرفة","Номер","Zimmer","Chambre","Camera"],
  ["Check rates →","اعرض الأسعار ←","Узнать цены →","Preise prüfen →","Voir les tarifs →","Verifica tariffe →"],
  ["No booking-site fees","بدون رسوم مواقع الحجز","Без комиссий сайтов бронирования","Keine Buchungsportal-Gebühren","Aucuns frais de plateforme","Nessuna commissione di portali"],
  ["Personal WhatsApp service","خدمة شخصية عبر واتساب","Личная связь в WhatsApp","Persönlicher WhatsApp-Service","Service personnalisé sur WhatsApp","Servizio personale su WhatsApp"],
  ["Transfers &amp; meal plans in one request","التنقلات والوجبات في طلب واحد","Трансфер и питание — одним запросом","Transfers &amp; Verpflegung in einer Anfrage","Transferts &amp; repas en une seule demande","Transfer e pasti in un'unica richiesta"],
  ["Wonderful","رائع","Превосходно","Hervorragend","Exceptionnel","Eccezionale"],
  ["Verified guest rating","تقييم ضيوف موثّق","Проверенная оценка гостей","Verifizierte Gästebewertung","Note clients vérifiée","Voto verificato degli ospiti"],
  ["To the beach","إلى الشاطئ","До пляжа","Zum Strand","Jusqu'à la plage","Alla spiaggia"],
  ["A short walk from your room","على بعد خطوات من غرفتك","Короткая прогулка от номера","Ein kurzer Spaziergang","À quelques pas de votre chambre","A pochi passi dalla camera"],
  /* marquee */
  ["Rated 9.3 Wonderful","تقييم 9.3 رائع","Оценка 9,3 — Превосходно","9,3 Hervorragend","Noté 9,3 Exceptionnel","Votato 9,3 Eccezionale"],
  ["Brand-new balcony rooms","غرف جديدة بشرفات","Новые номера с балконами","Brandneue Balkonzimmer","Chambres neuves avec balcon","Camere nuove con balcone"],
  ["Family rooms for 4","غرف عائلية لأربعة","Семейные номера на 4","Familienzimmer für 4","Chambres familiales pour 4","Camere familiari per 4"],
  ["11 minutes to the beach","11 دقيقة إلى الشاطئ","11 минут до пляжа","11 Minuten zum Strand","11 minutes de la plage","11 minuti dalla spiaggia"],
  ["Free bicycles","دراجات مجانية","Бесплатные велосипеды","Kostenlose Fahrräder","Vélos gratuits","Biciclette gratuite"],
  ["Free Wi-Fi","واي فاي مجاني","Бесплатный Wi‑Fi","Kostenloses WLAN","Wi‑Fi gratuit","Wi‑Fi gratuito"],
  ["Airport transfers","التنقل من المطار","Трансфер из аэропорта","Flughafentransfers","Transferts aéroport","Transfer aeroportuali"],
  ["Maldivian breakfast","فطور مالديفي","Мальдивский завтрак","Maledivisches Frühstück","Petit-déjeuner maldivien","Colazione maldiviana"],
  ["24-hour front desk","استقبال على مدار الساعة","Круглосуточная стойка регистрации","24-Stunden-Rezeption","Réception 24h/24","Reception 24 ore"],
  /* stats */
  ["Guest rating · Wonderful","تقييم الضيوف · رائع","Оценка гостей · Превосходно","Gästebewertung · Hervorragend","Note clients · Exceptionnel","Voto ospiti · Eccezionale"],
  ["Staff, comfort &amp; location","الموظفون والراحة والموقع","Персонал, комфорт и расположение","Personal, Komfort &amp; Lage","Personnel, confort &amp; emplacement","Staff, comfort e posizione"],
  ["Walk to Thoddoo beach","سيرًا إلى شاطئ ثودو","Пешком до пляжа Тодду","Zu Fuß zum Strand","À pied jusqu'à la plage","A piedi alla spiaggia"],
  ["Guests per family room","ضيوف في الغرفة العائلية","Гостей в семейном номере","Gäste pro Familienzimmer","Personnes par chambre familiale","Ospiti per camera familiare"],
  /* welcome */
  ["Welcome to Rindhali","مرحبًا بكم في ريندهالي","Добро пожаловать в Риндхали","Willkommen im Rindhali","Bienvenue au Rindhali","Benvenuti al Rindhali"],
  ["New, bright and <em>made for slow island days</em>","جديدة ومشرقة <em>وصُمّمت لأيام الجزيرة الهادئة</em>","Новый, светлый и <em>создан для неспешных дней на острове</em>","Neu, hell und <em>gemacht für entspannte Inseltage</em>","Neuf, lumineux et <em>pensé pour des jours lents sur l'île</em>","Nuovo, luminoso e <em>pensato per giornate lente sull'isola</em>"],
  ["Rindhali Thoddoo is a brand-new guesthouse in the heart of Thoddoo, the green farming island of Alif Alif Atoll.","ريندهالي ثودو دار ضيافة جديدة كليًا في قلب ثودو، الجزيرة الزراعية الخضراء في أتول أليف أليف.","Rindhali Thoddoo — совершенно новый гестхаус в самом сердце Тодду, зелёного острова фермеров в атолле Алиф-Алиф.","Das Rindhali Thoddoo ist ein brandneues Gästehaus im Herzen von Thoddoo, der grünen Bauerninsel des Alif-Alif-Atolls.","Le Rindhali Thoddoo est une maison d'hôtes toute neuve au cœur de Thoddoo, l'île agricole verdoyante de l'atoll d'Alif Alif.","Il Rindhali Thoddoo è una guesthouse nuovissima nel cuore di Thoddoo, la verde isola agricola dell'atollo di Alif Alif."],
  ["Spacious air-conditioned rooms open onto big private balconies. Our team is with you around the clock, from your speedboat transfer to breakfast the way you like it and the bicycles you’ll use to explore the island’s fruit farms and beaches.","غرف واسعة مكيّفة تطل على شرفات خاصة كبيرة. فريقنا معك على مدار الساعة، من رحلة القارب السريع إلى الفطور كما تحب والدراجات التي ستستكشف بها مزارع الفاكهة والشواطئ.","Просторные номера с кондиционером выходят на большие балконы. Наша команда рядом круглосуточно — от трансфера на катере до завтрака на ваш вкус и велосипедов для поездок к фруктовым фермам и пляжам.","Großzügige klimatisierte Zimmer öffnen sich zu großen Privatbalkonen. Unser Team ist rund um die Uhr für Sie da – vom Schnellboot-Transfer über das Frühstück nach Wunsch bis zu den Fahrrädern für Obstplantagen und Strände.","De spacieuses chambres climatisées s'ouvrent sur de grands balcons privés. Notre équipe est là jour et nuit, du transfert en speedboat au petit-déjeuner à votre goût, jusqu'aux vélos pour explorer vergers et plages.","Camere spaziose e climatizzate si aprono su grandi balconi privati. Il nostro team è con voi giorno e notte, dal transfer in motoscafo alla colazione come piace a voi, fino alle bici per esplorare frutteti e spiagge."],
  ["Private balcony rooms","غرف بشرفات خاصة","Номера с балконом","Zimmer mit Privatbalkon","Chambres avec balcon privé","Camere con balcone privato"],
  ["Room service","خدمة الغرف","Обслуживание номеров","Zimmerservice","Service en chambre","Servizio in camera"],
  ["Free Wi-Fi everywhere","واي فاي مجاني في كل مكان","Бесплатный Wi‑Fi повсюду","Kostenloses WLAN überall","Wi‑Fi gratuit partout","Wi‑Fi gratuito ovunque"],
  ["English &amp; Russian spoken","نتحدث الإنجليزية والروسية","Говорим по-английски и по-русски","Englisch &amp; Russisch","Anglais &amp; russe parlés","Si parla inglese e russo"],
  ["Discover the rooms →","اكتشف الغرف ←","Смотреть номера →","Zimmer entdecken →","Découvrir les chambres →","Scopri le camere →"],
  ["Wonderful<br>9 verified reviews","رائع<br>9 تقييمات موثّقة","Превосходно<br>9 проверенных отзывов","Hervorragend<br>9 verifizierte Bewertungen","Exceptionnel<br>9 avis vérifiés","Eccezionale<br>9 recensioni verificate"],
  /* usps */
  ["Why guests choose Rindhali","لماذا يختار الضيوف ريندهالي","Почему гости выбирают Риндхали","Warum Gäste das Rindhali wählen","Pourquoi nos clients choisissent le Rindhali","Perché gli ospiti scelgono il Rindhali"],
  ["Eight reasons to <em>book direct</em>","ثمانية أسباب <em>للحجز المباشر</em>","Восемь причин <em>бронировать напрямую</em>","Acht Gründe, <em>direkt zu buchen</em>","Huit raisons de <em>réserver en direct</em>","Otto motivi per <em>prenotare diretto</em>"],
  ["Perfect 10s for staff, comfort and location from verified Booking.com guests.","علامة 10 كاملة للموظفين والراحة والموقع من ضيوف Booking.com الموثّقين.","Идеальные 10 баллов за персонал, комфорт и расположение от гостей Booking.com.","Perfekte 10 für Personal, Komfort und Lage von verifizierten Booking.com-Gästen.","Des 10 parfaits pour le personnel, le confort et l'emplacement par des clients Booking.com vérifiés.","10 pieno per staff, comfort e posizione da ospiti verificati di Booking.com."],
  ["Huge private balconies","شرفات خاصة واسعة","Огромные личные балконы","Riesige Privatbalkone","Immenses balcons privés","Enormi balconi privati"],
  ["Brand-new rooms with king or twin beds and a balcony big enough to live on.","غرف جديدة بأسرّة كبيرة أو منفصلة وشرفة واسعة كأنها غرفة إضافية.","Новые номера с большой или раздельными кроватями и балконом, на котором можно жить.","Brandneue Zimmer mit Kingsize- oder Einzelbetten und einem Balkon, groß genug zum Wohnen.","Chambres neuves avec lit king-size ou lits jumeaux et un balcon où l'on pourrait vivre.","Camere nuove con letto king o letti singoli e un balcone grande come un salotto."],
  ["Central, near the beach","في المركز وقرب الشاطئ","В центре, рядом с пляжем","Zentral, nah am Strand","Central, près de la plage","Centrale, vicino alla spiaggia"],
  ["300 m from the island centre, cafés next door, 11 minutes on foot to the beach.","300 م من مركز الجزيرة، والمقاهي بجوارنا، و11 دقيقة سيرًا إلى الشاطئ.","300 м до центра острова, кафе по соседству, 11 минут пешком до пляжа.","300 m zum Inselzentrum, Cafés nebenan, 11 Minuten zu Fuß zum Strand.","À 300 m du centre, cafés à côté, 11 minutes à pied de la plage.","A 300 m dal centro, caffè accanto, 11 minuti a piedi dalla spiaggia."],
  ["Family rooms for four","غرف عائلية لأربعة","Семейные номера на четверых","Familienzimmer für vier","Chambres familiales pour quatre","Camere familiari per quattro"],
  ["Two king beds or four twins. Children of all ages are welcome, with kids’ meals.","سريران كبيران أو أربعة أسرّة منفصلة. نرحب بالأطفال من جميع الأعمار مع وجبات للأطفال.","Две большие кровати или четыре односпальные. Рады детям любого возраста, есть детское меню.","Zwei Kingsize- oder vier Einzelbetten. Kinder jeden Alters willkommen, mit Kindermenüs.","Deux lits king-size ou quatre lits simples. Enfants de tout âge bienvenus, menus enfants.","Due letti king o quattro singoli. Bambini di ogni età benvenuti, con menù bimbi."],
  ["Breakfast your way","فطورك كما تحب","Завтрак на ваш вкус","Frühstück nach Wunsch","Le petit-déjeuner à votre goût","La colazione come piace a voi"],
  ["Maldivian, continental, English, Asian or American, including vegan and halal options.","مالديفي أو قاري أو إنجليزي أو آسيوي أو أمريكي، مع خيارات نباتية وحلال.","Мальдивский, континентальный, английский, азиатский или американский, есть веганские и халяль блюда.","Maledivisch, kontinental, englisch, asiatisch oder amerikanisch, auch vegan und halal.","Maldivien, continental, anglais, asiatique ou américain, options végane et halal.","Maldiviana, continentale, inglese, asiatica o americana, anche vegana e halal."],
  ["Ride through banana groves and papaya farms to Sunrise and Sunset beaches.","تجوّل بين بساتين الموز ومزارع البابايا إلى شاطئي الشروق والغروب.","Катайтесь среди банановых рощ и папайевых ферм к пляжам Sunrise и Sunset.","Radeln Sie durch Bananenhaine und Papayafarmen zu Sunrise- und Sunset-Beach.","Pédalez entre bananeraies et papayers jusqu'aux plages Sunrise et Sunset.","Pedalate tra banani e papaie fino alle spiagge Sunrise e Sunset."],
  ["We book your speedboat from Velana Airport and meet you at Thoddoo jetty.","نحجز لك القارب السريع من مطار فيلانا ونستقبلك عند رصيف ثودو.","Мы бронируем катер из аэропорта Велана и встречаем вас на пристани Тодду.","Wir buchen Ihr Schnellboot ab Flughafen Velana und holen Sie am Steg von Thoddoo ab.","Nous réservons votre speedboat depuis l'aéroport Velana et vous accueillons à la jetée.","Prenotiamo il motoscafo dall'aeroporto di Velana e vi accogliamo al molo di Thoddoo."],
  ["24-hour care","رعاية على مدار الساعة","Забота 24/7","Rund-um-die-Uhr-Service","Attention 24h/24","Assistenza 24 ore"],
  ["Front desk, room service, laundry help and daily housekeeping.","استقبال وخدمة غرف ومساعدة في الغسيل وتنظيف يومي.","Ресепшн, обслуживание номеров, помощь со стиркой и ежедневная уборка.","Rezeption, Zimmerservice, Wäschehilfe und tägliche Reinigung.","Réception, service en chambre, aide pour le linge et ménage quotidien.","Reception, servizio in camera, aiuto lavanderia e pulizia quotidiana."],
  /* rooms on home */
  ["Accommodation","الإقامة","Размещение","Unterkunft","Hébergement","Sistemazioni"],
  ["Balcony rooms &amp; <em>family suites</em>","غرف بشرفات <em>وأجنحة عائلية</em>","Номера с балконом и <em>семейные номера</em>","Balkonzimmer &amp; <em>Familiensuiten</em>","Chambres avec balcon &amp; <em>suites familiales</em>","Camere con balcone e <em>suite familiari</em>"],
  ["All room details","تفاصيل جميع الغرف","Все о номерах","Alle Zimmerdetails","Tous les détails","Tutti i dettagli"],
  ["Most booked","الأكثر حجزًا","Чаще всего бронируют","Am häufigsten gebucht","Le plus réservé","La più prenotata"],
  ["Up to 3 guests","حتى 3 ضيوف","До 3 гостей","Bis zu 3 Gäste","Jusqu'à 3 personnes","Fino a 3 ospiti"],
  ["Up to 4 guests","حتى 4 ضيوف","До 4 гостей","Bis zu 4 Gäste","Jusqu'à 4 personnes","Fino a 4 ospiti"],
  ["Families &amp; friends","للعائلات والأصدقاء","Семьи и друзья","Familien &amp; Freunde","Familles &amp; amis","Famiglie e amici"],
  ["Deluxe Double or Twin with Balcony","غرفة ديلوكس مزدوجة أو بسريرين مع شرفة","Делюкс с двуспальной или раздельными кроватями и балконом","Deluxe Doppel- oder Zweibettzimmer mit Balkon","Deluxe double ou lits jumeaux avec balcon","Deluxe matrimoniale o doppia con balcone"],
  ["Deluxe Family Room","غرفة ديلوكس عائلية","Семейный номер Делюкс","Deluxe-Familienzimmer","Chambre familiale Deluxe","Camera familiare Deluxe"],
  ["One king bed or three twin beds, a private balcony and a modern rain-shower bathroom.","سرير كبير أو ثلاثة أسرّة منفصلة، وشرفة خاصة وحمام حديث بدش مطري.","Одна большая или три односпальные кровати, личный балкон и современная ванная с тропическим душем.","Ein Kingsize-Bett oder drei Einzelbetten, Privatbalkon und modernes Bad mit Regendusche.","Un lit king-size ou trois lits simples, un balcon privé et une salle de bain moderne avec douche pluie.","Un letto king o tre singoli, balcone privato e bagno moderno con doccia a pioggia."],
  ["Two king beds or four twin beds with space to spread out: ideal for families and groups of friends.","سريران كبيران أو أربعة أسرّة منفصلة بمساحة رحبة: مثالية للعائلات والأصدقاء.","Две большие или четыре односпальные кровати и много места — идеально для семей и компаний друзей.","Zwei Kingsize- oder vier Einzelbetten mit viel Platz: ideal für Familien und Freundesgruppen.","Deux lits king-size ou quatre lits simples, avec de l'espace : idéal pour les familles et amis.","Due letti king o quattro singoli con tanto spazio: ideale per famiglie e gruppi di amici."],
  ["Private balcony","شرفة خاصة","Личный балкон","Privatbalkon","Balcon privé","Balcone privato"],
  ["Balcony","شرفة","Балкон","Balkon","Balcon","Balcone"],
  ["A/C","تكييف","Кондиционер","Klimaanlage","Climatisation","Aria condizionata"],
  ["Flat-screen TV","تلفاز بشاشة مسطحة","Телевизор","Flachbild-TV","TV écran plat","TV a schermo piatto"],
  ["Tea &amp; coffee maker","أدوات الشاي والقهوة","Чайник и кофе","Tee- &amp; Kaffeezubehör","Plateau thé &amp; café","Set tè e caffè"],
  ["Hairdryer","مجفف شعر","Фен","Haartrockner","Sèche-cheveux","Asciugacapelli"],
  ["Free toiletries","مستلزمات استحمام مجانية","Бесплатные туалетные принадлежности","Gratis Pflegeprodukte","Produits de toilette offerts","Set di cortesia"],
  ["Pay in cash at the property · Check-in 12:00–18:00 · Check-out by 11:00","الدفع نقدًا في الفندق · الوصول 12:00–18:00 · المغادرة حتى 11:00","Оплата наличными на месте · Заезд 12:00–18:00 · Выезд до 11:00","Barzahlung vor Ort · Check-in 12:00–18:00 · Check-out bis 11:00","Paiement en espèces sur place · Arrivée 12h–18h · Départ avant 11h","Pagamento in contanti in struttura · Check-in 12–18 · Check-out entro le 11"],
  ["Pay in cash at the property · Children of all ages welcome · No cribs or extra beds","الدفع نقدًا في الفندق · نرحب بالأطفال من جميع الأعمار · لا تتوفر أسرّة أطفال أو إضافية","Оплата наличными на месте · Дети любого возраста · Без детских и дополнительных кроватей","Barzahlung vor Ort · Kinder jeden Alters willkommen · Keine Kinder- oder Zustellbetten","Paiement en espèces sur place · Enfants de tout âge bienvenus · Pas de lit bébé ni d'appoint","Pagamento in contanti · Bambini di ogni età benvenuti · Niente culle o letti aggiuntivi"],
  ["No booking-site fees direct","بدون رسوم عند الحجز المباشر","Без комиссий при прямом бронировании","Keine Portalgebühren bei Direktbuchung","Sans frais en direct","Nessuna commissione diretta"],
  ["Request","اطلب","Запросить","Anfragen","Demander","Richiedi"],
  /* testimonials / gallery / cta */
  ["Guest testimonials","شهادات الضيوف","Отзывы гостей","Gästestimmen","Témoignages","Testimonianze"],
  ["In our guests’ <em>own words</em>","بكلمات <em>ضيوفنا</em>","<em>Слова</em> наших гостей","In den <em>Worten unserer Gäste</em>","Avec les <em>mots de nos clients</em>","Con le <em>parole dei nostri ospiti</em>"],
  ["Rated by verified guests on Booking.com","تقييم ضيوف موثّقين على Booking.com","Оценка проверенных гостей Booking.com","Bewertet von verifizierten Booking.com-Gästen","Noté par des clients vérifiés sur Booking.com","Votato da ospiti verificati su Booking.com"],
  ["Read all reviews &amp; scores →","اقرأ كل التقييمات ←","Все отзывы и оценки →","Alle Bewertungen lesen →","Lire tous les avis →","Leggi tutte le recensioni →"],
  ["A look <em>inside</em>","نظرة <em>من الداخل</em>","Взгляд <em>изнутри</em>","Ein Blick <em>hinein</em>","Un aperçu <em>de l'intérieur</em>","Uno sguardo <em>all'interno</em>"],
  ["All 30 photos","جميع الصور الـ30","Все 30 фото","Alle 30 Fotos","Les 30 photos","Tutte le 30 foto"],
  ["Your Thoddoo escape <em>starts here</em>","عطلتك في ثودو <em>تبدأ هنا</em>","Ваш отдых на Тодду <em>начинается здесь</em>","Ihre Auszeit auf Thoddoo <em>beginnt hier</em>","Votre escapade à Thoddoo <em>commence ici</em>","La tua fuga a Thoddoo <em>inizia qui</em>"],
  ["Send your dates and we’ll reply within a few hours with availability, your best direct rate and transfer options.","أرسل تواريخك وسنرد خلال ساعات بالتوفر وأفضل سعر مباشر وخيارات التنقل.","Пришлите даты — в течение нескольких часов ответим о наличии, лучшей прямой цене и трансфере.","Senden Sie uns Ihre Daten – wir antworten in wenigen Stunden mit Verfügbarkeit, bestem Direktpreis und Transferoptionen.","Envoyez vos dates : réponse en quelques heures avec disponibilités, meilleur tarif direct et transferts.","Inviaci le date: rispondiamo in poche ore con disponibilità, miglior tariffa diretta e transfer."],
  ["Request a booking","اطلب حجزًا","Отправить запрос","Buchung anfragen","Demander une réservation","Richiedi una prenotazione"],
  ["WhatsApp us","راسلنا على واتساب","Написать в WhatsApp","WhatsApp schreiben","Écrivez-nous sur WhatsApp","Scrivici su WhatsApp"],

  /* ---------- inner page headers & CTAs ---------- */
  ["Rooms with <em>room to breathe</em>","غرف <em>تمنحك مساحة</em>","Номера, где <em>легко дышится</em>","Zimmer mit <em>Raum zum Atmen</em>","Des chambres <em>où respirer</em>","Camere con <em>spazio per respirare</em>"],
  ["Two room types, both brand new, bright and air-conditioned, with private bathrooms and balconies.","نوعان من الغرف، جديدان ومشرقان ومكيّفان، بحمامات خاصة وشرفات.","Два типа номеров — новые, светлые, с кондиционером, собственной ванной и балконом.","Zwei Zimmertypen, brandneu, hell und klimatisiert, mit eigenem Bad und Balkon.","Deux types de chambres, neuves, lumineuses et climatisées, avec salle de bain et balcon.","Due tipologie di camere, nuove, luminose e climatizzate, con bagno privato e balcone."],
  ["Breakfast, lunch &amp; <em>dinner, your way</em>","فطور وغداء <em>وعشاء كما تحب</em>","Завтрак, обед и <em>ужин на ваш вкус</em>","Frühstück, Mittag- &amp; <em>Abendessen nach Wunsch</em>","Petit-déjeuner, déjeuner &amp; <em>dîner à votre goût</em>","Colazione, pranzo e <em>cena come piace a voi</em>"],
  ["From a Maldivian breakfast of mas huni and roshi to a full English, our kitchen team cooks to your taste.","من فطور مالديفي بالماس هوني والروشي إلى الفطور الإنجليزي الكامل، يطهو فريقنا حسب ذوقك.","От мальдивского завтрака мас хуни с роши до полного английского — кухня готовит на ваш вкус.","Vom maledivischen Frühstück mit Mas Huni und Roshi bis zum English Breakfast – wir kochen nach Ihrem Geschmack.","Du petit-déjeuner maldivien mas huni et roshi au full English, notre cuisine s'adapte à vos goûts.","Dalla colazione maldiviana con mas huni e roshi alla full English, cuciniamo secondo i vostri gusti."],
  ["The garden island <em>of the Maldives</em>","جزيرة الحدائق <em>في جزر المالديف</em>","Остров-сад <em>Мальдив</em>","Die Garteninsel <em>der Malediven</em>","L'île-jardin <em>des Maldives</em>","L'isola giardino <em>delle Maldive</em>"],
  ["Fruit farms, palm-lined lanes, turquoise lagoons and a reef just off the beach. We arrange every trip with trusted local crews.","مزارع فاكهة وممرات تحفها النخيل وبحيرات فيروزية وشعاب قرب الشاطئ. نرتّب كل رحلة مع طواقم محلية موثوقة.","Фруктовые фермы, пальмовые аллеи, бирюзовые лагуны и риф у самого берега. Все экскурсии — с проверенными местными командами.","Obstfarmen, palmengesäumte Wege, türkise Lagunen und ein Riff direkt vor dem Strand. Alle Ausflüge mit vertrauten lokalen Crews.","Vergers, allées de palmiers, lagons turquoise et récif tout près de la plage. Toutes les sorties avec des équipages locaux de confiance.","Frutteti, viali di palme, lagune turchesi e una barriera vicino alla spiaggia. Ogni escursione con equipaggi locali fidati."],
  ["The <em>gallery</em>","معرض <em>الصور</em>","<em>Галерея</em>","Die <em>Galerie</em>","La <em>galerie</em>","La <em>galleria</em>"],
  ["30 photos of Rindhali Thoddoo and the island. Tap any photo to view it full size.","30 صورة لريندهالي ثودو والجزيرة. اضغط على أي صورة لعرضها بالحجم الكامل.","30 фотографий Риндхали и острова. Нажмите на фото, чтобы открыть его полностью.","30 Fotos vom Rindhali und der Insel. Tippen Sie auf ein Foto für die volle Größe.","30 photos du Rindhali et de l'île. Touchez une photo pour l'agrandir.","30 foto del Rindhali e dell'isola. Tocca una foto per vederla a schermo intero."],
  ["Loved by <em>our guests</em>","محبوب <em>من ضيوفنا</em>","Любимый <em>нашими гостями</em>","Geliebt von <em>unseren Gästen</em>","Adoré par <em>nos clients</em>","Amato dai <em>nostri ospiti</em>"],
  ["Verified reviews from guests who stayed with us, collected on Booking.com.","تقييمات موثّقة من ضيوف أقاموا لدينا، جُمعت من Booking.com.","Проверенные отзывы гостей, которые жили у нас, с Booking.com.","Verifizierte Bewertungen von Gästen, die bei uns wohnten, gesammelt auf Booking.com.","Avis vérifiés de clients ayant séjourné chez nous, recueillis sur Booking.com.","Recensioni verificate di ospiti che hanno soggiornato da noi, raccolte su Booking.com."],
  ["From Malé airport <em>to our door</em>","من مطار ماليه <em>إلى بابنا</em>","Из аэропорта Мале <em>к нашей двери</em>","Vom Flughafen Malé <em>bis vor unsere Tür</em>","De l'aéroport de Malé <em>à notre porte</em>","Dall'aeroporto di Malé <em>alla nostra porta</em>"],
  ["Thoddoo is about 1 hr 20 by speedboat from Velana International Airport. We book your transfer and meet you at the jetty.","تبعد ثودو نحو ساعة و20 دقيقة بالقارب السريع عن مطار فيلانا الدولي. نحجز تنقلك ونستقبلك عند الرصيف.","До Тодду около 1 ч 20 мин на катере от аэропорта Велана. Мы бронируем трансфер и встречаем вас на пристани.","Thoddoo liegt etwa 1 Std. 20 mit dem Schnellboot vom Flughafen Velana entfernt. Wir buchen den Transfer und holen Sie am Steg ab.","Thoddoo est à environ 1 h 20 en speedboat de l'aéroport Velana. Nous réservons le transfert et vous accueillons à la jetée.","Thoddoo dista circa 1 h 20 in motoscafo dall'aeroporto di Velana. Prenotiamo il transfer e vi accogliamo al molo."],
  ["Privacy <em>notice</em>","إشعار <em>الخصوصية</em>","Политика <em>конфиденциальности</em>","Datenschutz<em>hinweis</em>","Politique de <em>confidentialité</em>","Informativa <em>privacy</em>"],
  ["Found your room? <em>Let’s check your dates.</em>","وجدت غرفتك؟ <em>لنتحقق من تواريخك.</em>","Выбрали номер? <em>Проверим ваши даты.</em>","Zimmer gefunden? <em>Prüfen wir Ihre Daten.</em>","Chambre trouvée ? <em>Vérifions vos dates.</em>","Trovata la camera? <em>Verifichiamo le date.</em>"],
  ["See all photos","شاهد كل الصور","Все фото","Alle Fotos","Toutes les photos","Tutte le foto"],
  ["Add half or full board <em>to your stay</em>","أضف نصف إقامة أو إقامة كاملة <em>إلى رحلتك</em>","Добавьте полупансион или <em>полный пансион</em>","Halb- oder Vollpension <em>dazubuchen</em>","Ajoutez la demi-pension ou <em>la pension complète</em>","Aggiungi mezza pensione o <em>pensione completa</em>"],
  ["Plan your island days <em>with us</em>","خطط لأيامك في الجزيرة <em>معنا</em>","Спланируйте отдых <em>вместе с нами</em>","Planen Sie Ihre Inseltage <em>mit uns</em>","Organisez vos journées <em>avec nous</em>","Pianifica le giornate <em>con noi</em>"],
  ["Plan your trip","خطط لرحلتك","Спланировать поездку","Reise planen","Préparer le voyage","Pianifica il viaggio"],
  ["Like what you see?","هل أعجبك ما رأيت؟","Нравится?","Gefällt es Ihnen?","Ça vous plaît ?","Ti piace?"],
  ["Compare rooms","قارن الغرف","Сравнить номера","Zimmer vergleichen","Comparer les chambres","Confronta le camere"],
  ["Become our <em>next happy guest</em>","كن <em>ضيفنا السعيد التالي</em>","Станьте нашим <em>следующим счастливым гостем</em>","Werden Sie unser <em>nächster glücklicher Gast</em>","Devenez notre <em>prochain client heureux</em>","Diventa il nostro <em>prossimo ospite felice</em>"],
  ["Ready when <em>you are</em>","جاهزون <em>متى كنت جاهزًا</em>","Готовы, <em>когда готовы вы</em>","Bereit, <em>wenn Sie es sind</em>","Prêts <em>quand vous l'êtes</em>","Pronti <em>quando lo sei tu</em>"],
  ["All","الكل","Все","Alle","Tout","Tutte"],
  ["Bathrooms","الحمامات","Ванные","Bäder","Salles de bain","Bagni"],
  ["Dining &amp; lounge","المطعم والصالة","Ресторан и лаунж","Restaurant &amp; Lounge","Restaurant &amp; salon","Ristorante e lounge"],
  ["The building","المبنى","Здание","Das Gebäude","Le bâtiment","L'edificio"],
  ["Island","الجزيرة","Остров","Insel","L'île","Isola"],

  /* ---------- contact page & enquiry form ---------- */
  ["Book <em>direct</em>","احجز <em>مباشرة</em>","Бронируйте <em>напрямую</em>","Direkt <em>buchen</em>","Réservez <em>en direct</em>","Prenota <em>diretto</em>"],
  ["Send us your dates and we’ll reply within a few hours with availability, your best direct rate and transfer options.","أرسل لنا تواريخك وسنرد خلال ساعات بالتوفر وأفضل سعر مباشر وخيارات التنقل.","Пришлите нам даты — в течение нескольких часов ответим о наличии, лучшей прямой цене и трансфере.","Senden Sie uns Ihre Daten – wir antworten in wenigen Stunden mit Verfügbarkeit, bestem Direktpreis und Transferoptionen.","Envoyez-nous vos dates : réponse en quelques heures avec disponibilités, meilleur tarif direct et transferts.","Inviaci le tue date: rispondiamo in poche ore con disponibilità, miglior tariffa diretta e transfer."],
  ["Get in touch","تواصل معنا","Свяжитесь с нами","Kontakt aufnehmen","Nous contacter","Contattaci"],
  ["We’re here <em>around the clock</em>","نحن هنا <em>على مدار الساعة</em>","Мы на связи <em>круглосуточно</em>","Wir sind <em>rund um die Uhr</em> da","Nous sommes là <em>jour et nuit</em>","Siamo qui <em>24 ore su 24</em>"],
  ["Our front desk is open 24 hours. Message us on WhatsApp for the fastest reply.","مكتب الاستقبال مفتوح 24 ساعة. راسلنا على واتساب لأسرع رد.","Ресепшн работает круглосуточно. Быстрее всего ответим в WhatsApp.","Unsere Rezeption ist 24 Stunden geöffnet. Am schnellsten antworten wir per WhatsApp.","Notre réception est ouverte 24h/24. Écrivez-nous sur WhatsApp pour une réponse rapide.","La reception è aperta 24 ore. Per una risposta rapida scrivici su WhatsApp."],
  ["Phone · 24-hour front desk","الهاتف · استقبال على مدار الساعة","Телефон · ресепшн 24/7","Telefon · 24-Stunden-Rezeption","Téléphone · réception 24h/24","Telefono · reception 24 ore"],
  ["Email","البريد الإلكتروني","Эл. почта","E-Mail","E-mail","E-mail"],
  ["Follow us","تابعنا","Мы в соцсетях","Folgen Sie uns","Suivez-nous","Seguici"],
  ["Address","العنوان","Адрес","Adresse","Adresse","Indirizzo"],
  ["Check-in / Check-out","الوصول / المغادرة","Заезд / Выезд","Check-in / Check-out","Arrivée / Départ","Check-in / Check-out"],
  ["Open larger map →","افتح خريطة أكبر ←","Открыть большую карту →","Größere Karte öffnen →","Ouvrir la carte →","Apri la mappa grande →"],
  ["Walking times from Rindhali","أوقات المشي من ريندهالي","Пешком от Риндхали","Gehzeiten vom Rindhali","Temps de marche depuis le Rindhali","Tempi a piedi dal Rindhali"],
  ["Island centre","مركز الجزيرة","Центр острова","Inselzentrum","Centre de l'île","Centro dell'isola"],
  ["Thoddoo tourist beach","شاطئ ثودو السياحي","Туристический пляж Тодду","Touristenstrand Thoddoo","Plage touristique de Thoddoo","Spiaggia turistica di Thoddoo"],
  ["Booking request","طلب حجز","Запрос на бронирование","Buchungsanfrage","Demande de réservation","Richiesta di prenotazione"],
  ["Check-in","الوصول","Заезд","Anreise","Arrivée","Check-in"],
  ["Check-out","المغادرة","Выезд","Abreise","Départ","Check-out"],
  ["Adults","البالغون","Взрослые","Erwachsene","Adultes","Adulti"],
  ["Children (0–17)","الأطفال (0–17)","Дети (0–17)","Kinder (0–17)","Enfants (0–17)","Bambini (0–17)"],
  ["Age of each child at check-in","عمر كل طفل عند الوصول","Возраст каждого ребёнка на дату заезда","Alter jedes Kindes bei Anreise","Âge de chaque enfant à l'arrivée","Età di ogni bambino all'arrivo"],
  ["Full name","الاسم الكامل","Имя и фамилия","Vollständiger Name","Nom complet","Nome e cognome"],
  ["Country","الدولة","Страна","Land","Pays","Paese"],
  ["WhatsApp / phone (with country code)","واتساب / هاتف (مع رمز الدولة)","WhatsApp / телефон (с кодом страны)","WhatsApp / Telefon (mit Landesvorwahl)","WhatsApp / téléphone (avec indicatif)","WhatsApp / telefono (con prefisso)"],
  ["Message (meal plan, flight time, requests)","رسالة (الوجبات، موعد الرحلة، طلبات)","Сообщение (питание, время рейса, пожелания)","Nachricht (Verpflegung, Flugzeit, Wünsche)","Message (repas, heure du vol, demandes)","Messaggio (pasti, orario volo, richieste)"],
  ["We only use your details to answer your booking request. Read our <a href=\"privacy.html\">privacy notice</a>. No payment is taken online.","نستخدم بياناتك فقط للرد على طلب الحجز. اقرأ <a href=\"privacy.html\">إشعار الخصوصية</a>. لا يتم الدفع عبر الإنترنت.","Мы используем ваши данные только для ответа на запрос. См. <a href=\"privacy.html\">политику конфиденциальности</a>. Онлайн-оплаты нет.","Wir nutzen Ihre Daten nur zur Beantwortung Ihrer Anfrage. Siehe <a href=\"privacy.html\">Datenschutzhinweis</a>. Keine Online-Zahlung.","Vos données servent uniquement à répondre à votre demande. Voir notre <a href=\"privacy.html\">politique de confidentialité</a>. Aucun paiement en ligne.","Usiamo i tuoi dati solo per rispondere alla richiesta. Leggi l'<a href=\"privacy.html\">informativa privacy</a>. Nessun pagamento online."],
  ["Send booking request","أرسل طلب الحجز","Отправить запрос","Anfrage senden","Envoyer la demande","Invia richiesta"],
  ["Select your country","اختر دولتك","Выберите страну","Land auswählen","Choisissez votre pays","Seleziona il paese"],
  ["Deluxe Double or Twin Room with Balcony","غرفة ديلوكس مزدوجة أو بسريرين مع شرفة","Делюкс с двуспальной или раздельными кроватями и балконом","Deluxe Doppel- oder Zweibettzimmer mit Balkon","Deluxe double ou lits jumeaux avec balcon","Deluxe matrimoniale o doppia con balcone"],
  /* script messages */
  ["Read more","اقرأ المزيد","Читать далее","Weiterlesen","Lire la suite","Leggi tutto"],
  ["Show less","عرض أقل","Свернуть","Weniger","Réduire","Mostra meno"],
  ["Sending…","جارٍ الإرسال…","Отправка…","Wird gesendet…","Envoi…","Invio…"],
  ["Your request is ready. Choose how to send it:","طلبك جاهز. اختر طريقة الإرسال:","Запрос готов. Выберите способ отправки:","Ihre Anfrage ist fertig. Wie möchten Sie sie senden?","Votre demande est prête. Choisissez comment l'envoyer :","La richiesta è pronta. Scegli come inviarla:"],
  ["Send by email","أرسل بالبريد","Отправить по почте","Per E-Mail senden","Envoyer par e-mail","Invia per e-mail"],
  ["Send on WhatsApp","أرسل عبر واتساب","Отправить в WhatsApp","Per WhatsApp senden","Envoyer sur WhatsApp","Invia su WhatsApp"],
  ["Your request has been sent. We will reply by email or WhatsApp within a few hours.","تم إرسال طلبك. سنرد بالبريد أو واتساب خلال ساعات.","Запрос отправлен. Мы ответим по почте или в WhatsApp в течение нескольких часов.","Ihre Anfrage wurde gesendet. Wir antworten in wenigen Stunden per E-Mail oder WhatsApp.","Votre demande a été envoyée. Réponse par e-mail ou WhatsApp sous quelques heures.","Richiesta inviata. Rispondiamo via e-mail o WhatsApp entro poche ore."],
  ["Thank you","شكرًا","Спасибо","Vielen Dank","Merci","Grazie"],
  ["Child","الطفل","Ребёнок","Kind","Enfant","Bambino"],
  ["Under 1","أقل من سنة","До 1 года","Unter 1","Moins d'1 an","Meno di 1"],
  ["Pause","إيقاف مؤقت","Пауза","Pause","Pause","Pausa"],
  ["Thoddoo now","ثودو الآن","Сейчас на Тодду","Thoddoo jetzt","Thoddoo maintenant","Thoddoo ora"],
  ["Clear sky","سماء صافية","Ясно","Klarer Himmel","Ciel dégagé","Cielo sereno"],
  ["Mostly clear","صافٍ غالبًا","Преимущественно ясно","Überwiegend klar","Plutôt dégagé","Prevalentemente sereno"],
  ["Partly cloudy","غائم جزئيًا","Переменная облачность","Teilweise bewölkt","Partiellement nuageux","Parzialmente nuvoloso"],
  ["Cloudy","غائم","Облачно","Bewölkt","Nuageux","Nuvoloso"],
  ["Hazy","ضبابي","Дымка","Dunstig","Brumeux","Foschia"],
  ["Light drizzle","رذاذ خفيف","Лёгкая морось","Leichter Niesel","Bruine légère","Pioggerella"],
  ["Drizzle","رذاذ","Морось","Nieselregen","Bruine","Pioggerella"],
  ["Light rain","مطر خفيف","Небольшой дождь","Leichter Regen","Pluie légère","Pioggia leggera"],
  ["Rain","مطر","Дождь","Regen","Pluie","Pioggia"],
  ["Heavy rain","مطر غزير","Сильный дождь","Starker Regen","Forte pluie","Pioggia forte"],
  ["Showers","زخات","Ливни","Schauer","Averses","Rovesci"],
  ["Heavy showers","زخات غزيرة","Сильные ливни","Starke Schauer","Fortes averses","Forti rovesci"],
  ["Thunderstorm","عاصفة رعدية","Гроза","Gewitter","Orage","Temporale"],
  ["Tropical","استوائي","Тропики","Tropisch","Tropical","Tropicale"],
  ["Play","تشغيل","Воспроизвести","Abspielen","Lecture","Riproduci"]
  ];

  var IDX = {ar:1, ru:2, de:3, fr:4, it:5};
  var MAP = {}; ROWS.forEach(function(r){ MAP[r[0]] = r; });
  var cur = 'en';
  var norm = function(s){ return s.replace(/\s+/g,' ').trim(); };
  var T = function(en){ if (cur === 'en') return en; var r = MAP[en]; return (r && r[IDX[cur]]) || en; };
  window.RT_T = T;
  window.RT_lang = function(){ return cur; };

  var SEL = 'h1,h2,h3,h4,p,a,button,span,small,b,strong,li,summary,figcaption,cite,option,legend span,label>span,div.form-title';
  var apply = function(code, save){
    if (!IDX[code]) code = 'en';
    cur = code;
    var html = document.documentElement;
    html.lang = code; html.dir = code === 'ar' ? 'rtl' : 'ltr';
    if (code === 'ar' && !document.getElementById('ar-font')) {
      var l = document.createElement('link'); l.id = 'ar-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@400;500;700&display=swap';
      document.head.appendChild(l);
    }
    [].forEach.call(document.querySelectorAll(SEL), function(el){
      if (el.closest('.tm, .lang')) return;
      var key = el.getAttribute('data-en');
      if (key == null) { var k = norm(el.innerHTML); if (!MAP[k]) return; el.setAttribute('data-en', k); key = k; }
      var out = T(key);
      if (el.innerHTML !== out) el.innerHTML = out;
    });
    [].forEach.call(document.querySelectorAll('[data-usp]'), function(el){
      if (!el.hasAttribute('data-usp-en')) el.setAttribute('data-usp-en', el.getAttribute('data-usp'));
      el.setAttribute('data-usp', T(el.getAttribute('data-usp-en')));
    });
    var cl = document.querySelector('.lang-cur'); if (cl) cl.textContent = code.toUpperCase();
    [].forEach.call(document.querySelectorAll('[data-lang]'), function(b){ var on = b.getAttribute('data-lang') === code; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
    if (save) { try { localStorage.setItem('rindhali-lang', code); } catch(e){} }
    document.dispatchEvent(new CustomEvent('langchange', {detail: code}));
  };
  window.RT_applyLang = apply;

  /* language switcher (header + mobile menu) */
  var build = function(){
    var bar = document.querySelector('.site-h .wrap'); if (!bar) return;
    var box = document.createElement('div'); box.className = 'lang';
    box.innerHTML = '<button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg><span class="lang-cur">EN</span></button>' +
      '<div class="lang-menu" role="menu" hidden>' + LANGS.map(function(l){ return '<button type="button" role="menuitemradio" data-lang="' + l[0] + '" lang="' + l[0] + '"><span>' + l[1] + '</span><small>' + l[2] + '</small></button>'; }).join('') + '</div>';
    var btnDirect = bar.querySelector(':scope > .btn');
    bar.insertBefore(box, btnDirect || bar.querySelector('.burger'));
    var nav = document.querySelector('.nav');
    if (nav) { var row = document.createElement('div'); row.className = 'lang-row'; row.innerHTML = LANGS.map(function(l){ return '<button type="button" data-lang="' + l[0] + '" lang="' + l[0] + '">' + l[1] + '</button>'; }).join(''); nav.appendChild(row); }
    var btn = box.querySelector('.lang-btn'), menu = box.querySelector('.lang-menu');
    var open = function(o){ menu.hidden = !o; btn.setAttribute('aria-expanded', o); };
    btn.addEventListener('click', function(e){ e.stopPropagation(); open(menu.hidden); });
    document.addEventListener('click', function(e){ if (!e.target.closest('.lang')) open(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') open(false); });
    [].forEach.call(document.querySelectorAll('[data-lang]'), function(b){ b.addEventListener('click', function(){ apply(b.getAttribute('data-lang'), true); open(false); }); });
  };

  var start = function(){
    build();
    var pick = null;
    try { var q = new URLSearchParams(location.search).get('lang'); if (q && (IDX[q] || q === 'en')) pick = q; } catch(e){}
    if (!pick) { try { pick = localStorage.getItem('rindhali-lang'); } catch(e){} }
    if (!pick) { var nl = navigator.languages || [navigator.language || 'en']; for (var i = 0; i < nl.length && !pick; i++) { var c = String(nl[i]).slice(0,2).toLowerCase(); if (IDX[c]) pick = c; } }
    apply(pick || 'en', false);
  };
  window.RT_startLang = start;
})();
