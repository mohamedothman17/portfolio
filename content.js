/* All website copy lives here (English + Arabic). Edit text freely; keep the quotes. */
const D = id => `https://drive.google.com/file/d/${id}/view`;
window.CONTENT = {
filters: ['all', 'brand', 'ai', 'anim', 'cars', 'football', 'vlog'],
shown: 10,
discount: {"on": true, "odds": [[5, 35], [10, 35], [15, 22], [20, 8]], "validDays": 7, "minMs": 20000, "priceDwellMs": 12000, "formIdleMs": 30000, "lateMs": 90000, "t": {"en": {"tag": "Bonus round", "title": "Still deciding? Try your luck.", "sub": "One spin, one real discount on your first project.", "spin": "Spin", "spinning": "Spinning…", "win": "{pct}% off your first project", "terms": "It is real and it is yours. It stays once you start your brief, for 7 days. First project only, one spin per visitor.", "lock": "Keep it: start my brief", "later": "Maybe later", "close": "Close", "chipWait": "{pct}% off is waiting. Start your brief to keep it.", "chipLocked": "{pct}% off kept · code {code}"}, "ar": {"tag": "جولة الحظ", "title": "للحين محتار؟ جرّب حظك.", "sub": "لفّة وحدة، وخصم حقيقي على أول مشروع.", "spin": "لفّ", "spinning": "جاري اللف…", "win": "خصم {pct}% على أول مشروع", "terms": "الخصم حقيقي ولك. يثبت أول ما تبدأ تعبي البريف، ويبقى 7 أيام. لأول مشروع فقط، ولفّة وحدة لكل زائر.", "lock": "ثبّته: ابدأ البريف", "later": "بعدين", "close": "إغلاق", "chipWait": "خصم {pct}% بانتظارك. ابدأ البريف عشان تثبّته.", "chipLocked": "خصم {pct}% مثبت · الكود {code}"}}},
proof: {"en": [{"img": "proof1.jpg", "q": "First, tell him thank you, he did a great job. Let him edit at his own pace so the work comes out even better.", "who": "Mahmoud Fahmawy, brand ads, UAE"}, {"img": "proof2.jpg", "q": "Asked how likely he is to recommend me, from 1 to 10: “Honestly, 10.”", "who": "Mahmoud Fahmawy, brand ads, UAE"}, {"img": "proof3.jpg", "q": "Honestly, I am the one who is happy working with you. God willing, we keep going together. 10/10.", "who": "Ibrahim, football creator, UAE"}], "ar": [{"img": "proof1.jpg", "q": "«أول شي احكيلو شكراً إلك وما قصرت… خلي يمنتج على راحتو عشان يطلع أحلى شغل»", "who": "محمود فهماوي، إعلانات براندات، الإمارات"}, {"img": "proof2.jpg", "q": "سألته من 1 لـ 10 قد إيه يرشحني لحد ثاني، ورد: «والله 10»", "who": "محمود فهماوي، إعلانات براندات، الإمارات"}, {"img": "proof3.jpg", "q": "«والله أنا اللي يسعدني صراحة بكل أمانة، إن شاء الله مكملين مع بعض» وتقييمه 10/10", "who": "إبراهيم، صانع محتوى كورة، الإمارات"}]},
lfFacts: { en: ['5:41 long', '16:9 for YouTube', 'Data cards with sources', 'English captions'], ar: ['مدته 5:41', '16:9 ليوتيوب', 'كروت أرقام بالمصدر', 'كابشن إنجليزي'] },
work: [
 {k:'greatest', c:'football', full:'', live:{"u": "https://www.youtube.com/shorts/Yb8S4bpxvUk", "en": "429,771 views on YouTube", "ar": "429,771 مشاهدة على يوتيوب", "s": "430K views"}, en:["Who is the most complete coach? · football story", "Three coaches compared on one animated scoreboard that fills in, category by category."], ar:["مين الأشمل والأفضل تاريخياً؟ · قصة كورة", "مقارنة بين ثلاث مدربين على لوحة نقاط متحركة تتعبى قسم قسم."]},
 {k:'whatif', c:'football', full:'', live:{"u": "https://www.youtube.com/shorts/e4uyOYRMppU", "en": "247,881 views on YouTube", "ar": "247,881 مشاهدة على يوتيوب", "s": "248K views"}, en:["What if, my dear… · football story", "Imagined scenarios with player cut outs and kinetic Arabic captions, like Messi in the Premier League."], ar:["ماذا لو يا عزيزي… · قصة كورة", "سيناريوهات خيالية بقص صور اللاعبين وكابشن عربي متحرك، مثل ميسي في الدوري الإنجليزي."]},
 {k:'aljazira', c:'brand', full:D('1eXXeo_zqa6vFSwMm5vHfWj72F_DmdLX_'), en:['Al Jazira Club · app launch','Cinematic set, the app animated on a phone, club identity in every frame.'], ar:['نادي الجزيرة · إطلاق التطبيق','ديكور سينمائي والتطبيق متحرك على الجوال وهوية النادي في كل لقطة.']},
 {k:'lays', c:'ai', full:D('1g3lDLRpmpVwU8QbgIEuTgUXxfHyagqOD'), en:["Lay's World Cup · AI concept","The presenter placed inside AI stadiums and crowds, then cut at 69 cuts a minute."], ar:["Lay's كأس العالم · فكرة إعلان AI","المقدم داخل ستادات وجماهير مولدة بالـ AI، ومقصوص بـ 69 قطع في الدقيقة."]},
 {k:'deliveroo', c:'brand', full:D('1MFtRkd4dnOchqBtHC-L_mElEbIPviHqF'), en:['Deliveroo · World Cup prediction','A match prediction format with anime players and the app built into the story, so the order feels like part of the game.'], ar:['Deliveroo · توقع مباراة كأس العالم','فورمات توقع المباراة مع لاعبين بستايل أنمي، والتطبيق داخل في القصة عشان الطلب يصير جزء من اللعبة.']},
 {k:'okx2', c:'brand', full:D('1xhMJlPxUbO4yOwNY_k4j0ty24FNTBs6C'), en:['OKX · sponsored integration','32 seconds: counter, phone tracking and coins landing on the beat.'], ar:['OKX · إعلان داخل المحتوى','32 ثانية: عداد وتتبع على الجوال وعملات تنزل على الإيقاع.']},
 {k:'barcavlog', c:'vlog', full:'', live:{"u": "https://www.youtube.com/shorts/Uj7RPp3raSU", "en": "1,628 views on YouTube", "ar": "1,628 مشاهدة على يوتيوب", "s": "1.6K views"}, en:["Barcelona · travel vlog", "Sagrada Família, the club museum and the store, cut at 124 cuts a minute with match cuts between places."], ar:["برشلونة · فلوج سفر", "ساجرادا فاميليا ومتحف النادي والمتجر، مقصوص بـ 124 قطع في الدقيقة مع ماتش كات بين الأماكن."]},
 {k:'arsenal', c:'football', full:D('1T0qvSskKQOEcBJYhSvUsekFRKY2U5hdL'), en:['Arsenal · the story of the cannon','Club history in After Effects: logo animation, archive cards, a timeline.'], ar:['أرسنال · قصة المدفع','تاريخ النادي على After Effects: أنيميشن الشعار وكروت أرشيف وخط زمني.']},
 {k:'madridtrip', c:'vlog', full:'', en:["Madrid · travel vlog", "The city, the Bernabéu tour and the crowd, filmed on a phone and cut at 70 cuts a minute."], ar:["مدريد · فلوج سفر", "المدينة وجولة البرنابيو والجمهور، تصوير جوال ومقصوص بـ 70 قطع في الدقيقة."]},
 {k:'rivaldokaka', c:'football', full:'', live:{"u": "https://www.youtube.com/shorts/7fFkDYI_qqY", "en": "30,559 views on YouTube", "ar": "30,559 مشاهدة على يوتيوب", "s": "30.5K views"}, en:["Rivaldo and Kaká · where did they play together?", "A football question answered in 26 seconds, with player cards and club badges on the beat."], ar:["ريفالدو وكاكا · وين لعبوا مع بعض؟", "سؤال كورة يتجاوب في 26 ثانية، بكروت اللاعبين وشعارات الأندية على الإيقاع."]},
 {k:'kroos', c:'football', full:'', en:["Toni Kroos · football story", "Stamps, cut outs and motion graphics around one talking head."], ar:["توني كروس · قصة كورة", "طوابع وقص صور وموشن جرافيك حول المقدم."]},
 {k:'noonad', c:'brand', full:'', en:["noon Food · comedy ad", "A sketch on a lit set with the match on the TV and the order inside the story."], ar:["نون فود · إعلان كوميدي", "سكتش على ديكور مضاء والمباراة على الشاشة والطلب داخل القصة."]},
 {k:'merengue', c:'football', full:D('1Au1qM0wcyTe9NNJOO4jW2XMr4iAao79I'), en:['Real Madrid · where "Merengue" came from','Documentary style with archive photos and kinetic Arabic captions.'], ar:['ريال مدريد · أصل كلمة ميرنجي','أسلوب وثائقي بصور أرشيف وكابشن عربي متحرك.']},
 {k:'egypt', c:'football', full:'', en:["Egypt vs Argentina · football story", "A scrapbook tribute with Umm Kulthum, street celebrations from the ocean to the Gulf, and the presenter on a red set."], ar:["مصر ضد الأرجنتين · قصة كورة", "سكرابوك لأم كلثوم واحتفالات الشارع «من المحيط للخليج»، والمقدم في ديكور أحمر."]},
 {k:'madridtitles', c:'football', full:'', live:{"u": "https://www.youtube.com/shorts/8V3hvPl6bx0", "en": "12,523 views on YouTube", "ar": "12,523 مشاهدة على يوتيوب", "s": "12.5K views"}, en:["When will Madrid win again? · football short", "A 42 second take on Real Madrid and the trophies, built around one question."], ar:["متى يرجع مدريد للبطولات؟ · شورت كورة", "رأي في 42 ثانية عن ريال مدريد والبطولات، مبني حول سؤال واحد."]},
 {k:'schoolsubjects', c:'football', full:'', live:{"u": "https://www.instagram.com/p/DYb-VwaMcbr/", "en": "3,440 likes on Instagram", "ar": "3,440 لايك على إنستقرام", "s": "3.4K likes"}, en:["If players were school subjects · Fahmawy reel", "A comedy format where each player becomes a subject, with the last one saved as the twist."], ar:["لو كان اللاعبين مواد مدرسية · ريل فهماوي", "فورمات كوميدي كل لاعب فيه مادة، وآخر لاعب هو المفاجأة."]},
 {k:'okxanime', c:'brand', full:D('1zafwza-vzbddQw2g0ah8sIuFZeHtj2MW'), en:['OKX · spin the wheel','An anime player draft on a spin wheel that leads into the offer.'], ar:['OKX · العجلة','سحب لاعبين بستايل أنمي على عجلة، توصل للعرض.']},
 {k:'legendstore', c:'vlog', full:'', en:["Legends store · vlog", "A walk through a football memorabilia shop, Romario's World Cup and the shirts, cut on the beat."], ar:["متجر ليجندز · فلوج", "جولة في متجر تذكارات الكورة، كأس عالم روماريو والقمصان، على الإيقاع."]},
 {k:'xabi', c:'football', full:'', live:{"u": "https://www.instagram.com/p/DWoJjW8Df4s/", "en": "2,251 likes on Instagram", "ar": "2,251 لايك على إنستقرام", "s": "2.2K likes"}, en:["Can Xabi Alonso succeed at Liverpool? · football story", "A coaching story with archive, graphics and a clear opinion at the end."], ar:["هل ينجح تشابي ألونسو مع ليفربول؟ · قصة كورة", "قصة مدرب بالأرشيف والجرافيكس ورأي واضح في الآخر."]},
 {k:'reel5000', c:'anim', full:'', en:["The $5,000 rule · 2D explainer reel", "A 2D cartoon world, a presenter and data cards that make one rule easy to follow."], ar:["قاعدة الـ 5,000 دولار · ريل شرح 2D", "عالم كرتون 2D ومقدم وكروت أرقام تخلي القاعدة سهلة الفهم."]},
 {k:'atleti', c:'vlog', full:'', en:["Atlético · matchday vlog", "A black and white opening, the stadium and the crowd, cut in three versions with different hooks."], ar:["أتلتيكو · فلوج يوم المباراة", "بداية أبيض وأسود، والملعب والجمهور، ومقصوص بثلاث نسخ بهوكات مختلفة."]},
 {k:'messispain', c:'vlog', full:'', en:["Messi in Barcelona · vlog", "The metro, the museum and Messi's trophies, with Arabic captions."], ar:["ميسي في برشلونة · فلوج", "المترو والمتحف وبطولات ميسي، مع كابشن عربي."]},
 {k:'ronaldinho', c:'football', full:'', live:{"u": "https://www.instagram.com/p/DWqkYp3DecF/", "en": "791 likes on Instagram", "ar": "791 لايك على إنستقرام", "s": "791 likes"}, en:["Ronaldinho · legend or overrated?", "A debate reel about the most fun player to watch, with his best moments on the beat."], ar:["رونالدينيو · أسطورة ولا أوفررتد؟", "ريل نقاش عن أمتع لاعب، وأحلى لقطاته على الإيقاع."]},
 {k:'deepal', c:'cars', full:D('1EiZMi2E3EBqyLAgLXt8TzyVLw-KkjgDG'), en:['Deepal G318 · car ad','Filmed in the car and the showroom: range, cabin and the drive, with captions that keep pace.'], ar:['ديبال G318 · إعلان سيارة','تصوير داخل السيارة والمعرض: المدى والمقصورة والقيادة، مع كابشن ماشي مع الإيقاع.']},
 {k:'aiinterview', c:'ai', full:'', en:['AI interview · the host and the legends','The host sits down with football players who were never in the room, generated with AI and matched to his real set.'], ar:['مقابلة AI · المقدم مع الأساطير','المقدم يجلس مع لاعبين ما كانوا في المكان أصلًا، مولدين بالـ AI ومطابقين لديكوره الحقيقي.']},
 {k:'tesla', c:'cars', full:D('10SiD0geYYqRDnKt9Z6g0BkUN3fhxwBvT'), en:['Tesla · AI concept','The car lifts off in a cloud of smoke, then hands over to the presenter.'], ar:['Tesla · فكرة إعلان AI','السيارة تطير وسط الدخان وبعدها تبدأ المقدمة.']},
 {k:'eyewa', c:'brand', full:D('1K9LGwm0H3ly_Y6RgZUTlOIkJaauuaq8P'), en:['Eyewa · in store ad','Presenter led retail ad with football graphics and product inserts.'], ar:['Eyewa · إعلان داخل المعرض','إعلان بمقدم داخل المعرض مع جرافيكس كورة ولقطات المنتج.']},
 {k:'v10car', c:'cars', full:D('1ADB3kw5Zn0KCczQ6L9Onc7cpW4uI18R5'), en:['Land Cruiser · AI build','A stock Land Cruiser assembled into an off road build with AI, shot by shot.'], ar:['لاندكروزر · تعديل بالـ AI','لاندكروزر عادية تتحول لنسخة أوف رود بالـ AI لقطة بلقطة.']},
 {k:'nooncard', c:'brand', full:'', en:["noon · card ad", "The same cast, the app on the phone and the match at the right moment."], ar:["نون · إعلان البطاقة", "نفس الأبطال، والتطبيق على الجوال، والمباراة في اللحظة المناسبة."]},
 {k:'lamine', c:'football', full:'', en:["Lamine Yamal · football story", "Match clips in framed windows beside the presenter, on the beat."], ar:["لامين يامال · قصة كورة", "لقطات المباريات في نوافذ بجانب المقدم وعلى الإيقاع."]},
 {k:'noon', c:'brand', full:D('1nQt0fuOvlE8iY98AFNjDENmCDLgKixef'), en:['noon · creator integration','The product folded into a talking head video without breaking it.'], ar:['noon · إعلان مع صانع محتوى','المنتج داخل كلام المقدم من غير ما يقطع الفيديو.']},
 {k:'cola3d', c:'anim', full:'', en:['Social Security raise · 3D explainer','2D characters walking through a 3D town, numbers on a chalkboard, captions word by word.'], ar:['زيادة الضمان الاجتماعي · شرح 3D','شخصيات 2D تمشي في مدينة 3D، والأرقام على سبورة، وكابشن كلمة بكلمة.']},
 {k:'colaletter', c:'anim', full:'', en:['The raise letter · illustrated story','A finance explainer told as a small story, one illustrated scene per idea.'], ar:['خطاب الزيادة · قصة مرسومة','شرح مالي على شكل قصة قصيرة، كل فكرة في مشهد مرسوم.']},
 {k:'madrid', c:'vlog', full:D('1yC4zpLLvuprB7ozb0g3z8NzfGKXtM-HB'), en:['Madrid · stadium and membership vlog',"Travel and football through the eyes of the person filming, captions in Arabic and English."], ar:['مدريد · فلوج الملعب والعضوية','سفر وكورة من عين المصور، وكابشن عربي وإنجليزي.']},
 {k:'katana', c:'ai', full:D('1p4aNoHTD2GI2iOXm9z10QT9-kGuYfsBn'), en:['AI tool tutorial · Katana','Screen recordings with zooms and callouts, no waiting time left in.'], ar:['شرح أداة AI · Katana','تسجيل شاشة مع زوم وأسهم، ومن غير أي وقت انتظار.']},
 {k:'ronaldo', c:'football', full:D('1j9BdBCUXW4s-hB9M-gzfTUadCRpZ3jsd'), en:['Ronaldo · hype edit','21 seconds built on the beat.'], ar:['رونالدو · إيديت حماسي','21 ثانية مبنية على الإيقاع.']},
],
t: {
 en: {
  stH:"One editor. Many styles.",
  stSub:"Your brand does not need my style. It needs the right one. Pick a style to see it.",
  tlH:"Same video. Three openings.",
  tlSub:"This is what a hook test looks like. One reel, three different first seconds. You post them, the numbers pick the winner, and the next video starts from what worked.",
  hookA:"Opening A: the news",
  hookB:"Opening B: the date",
  hookC:"Opening C: the question",
  thH:"Thumbnails built to be tested",
  thSub:"Three options for the same video, ready for YouTube Test and Compare or for your reel covers. You keep the one people click.",
  edH:"I studied psychology and philosophy. Your videos get the benefit.",
  edSub:"Editing is a decision about attention, made every second. Knowing why people stop, stay and act makes those decisions better.",
  bnH:"What you get when you work with me",
  askQuote:"Ask for a quote",
  title:'Video editor for brands, football and AI ads', navCta:'Start a project',
  kicker:'Video editor working in After Effects, Premiere, Blender and AI tools',
  h1a:'The first seconds decide', h1b:'if people watch.',
  heroSub:'I edit for those seconds. Brand ads, football storytelling in After Effects and AI ads, for teams and creators in the Gulf, Europe and the US. Every opening is built to earn the next second.',
  heroNote:'About 2 minutes. Nothing is sent until you press send.',
  cta1:'Tell me about your project', cta2:'See selected work', concept1:"AI concepts: Lay's, Tesla",
  probH:'Good footage is not the problem. The first seconds are.',
  probP:'When people scroll, you get a few seconds. In my experience, most ads do not fail because the product is weak. They fail in one of three places.',
  probClose:'I fix those three in the edit: a sharper opening, a faster path to the point, and the offer placed where people are still watching. When you want proof instead of opinion, I cut several openings of the same video so you can test them against each other.',
  workH:'Selected work', f_all:'All', f_brand:'Brand ads', f_ai:'AI', f_cars:'Cars', f_football:'Football', f_vlog:'Vlog', f_anim:'Animation and 3D', watch:'Watch with sound', heroProof:'Two of my edits on client channels: 429,771 and 247,881 views on YouTube.', prH:'What clients say', prSub:'Real WhatsApp messages from clients, cropped so no numbers or other chats show.', prOpen:'See the message', lfH:'Long YouTube videos', lfSub:'A 5 minute 41 second explainer on the 2027 Social Security changes: a presenter, numbered sections, data cards with the source on screen and captions, built in Remotion.', thMoreH:'More thumbnails', moreWork:'Show more work', lessWork:'Show the top 10', contactH:'Every way to reach me', call:'Call',
  svcH:'What I can do for you', svcSub:'Editing is the core. Around it sit the ideas, the hooks, the thumbnails and the testing that decide whether the edit gets watched.',
  styleNote:'Every project gets its own fixed quote, based on the style, the length and the deadline. Pick a package below, or tell me about your project and I will send you a quote before anything starts.',
  pkH:'Ways to work together', pkSub:'Every plan includes captions, sound, colour, a first cut in 24 hours and 2 rounds of changes. Need someone full time? Ask me about a dedicated remote editor.',
  pickTier:'Choose this', rec:'Recommended',
  fairH:'Why the price makes sense',
  aiH:'Shots nobody filmed', aiP:'AI goes into a project when it adds a shot you could not film or saves you a shoot day. It always ends inside a real edit, cut to sound, in After Effects and Premiere.',
  procH:'How a project runs', faqH:'Questions clients ask first',
  briefH:'Tell me about your project', briefSub:'Five short steps, about 2 minutes. Most are one tap. You see the full message before anything is sent.',
  back:'Back', next:'Next', full:'Open the full video', close:'Close', orDirect:'Prefer to message directly?',
  waHello:'Hello, I found your portfolio and I would like to talk about a video project.',
  foot:'Based in Egypt (Cairo time). Working with clients in the Gulf, Europe and the US.'
 },
 ar: {
  stH:"مونتير واحد. ستايلات كثيرة.",
  stSub:"البراند حقك ما يحتاج ستايلي أنا، يحتاج الستايل الصح. اختر ستايل وشوفه.",
  tlH:"نفس الفيديو. ثلاث بدايات.",
  tlSub:"هذا شكل اختبار الهوك: ريل واحد بثلاث بدايات مختلفة. تنشرها، والأرقام تختار الأفضل، والفيديو الجاي يبدأ من اللي نجح.",
  hookA:"البداية A: الخبر",
  hookB:"البداية B: الموعد",
  hookC:"البداية C: السؤال",
  thH:"صور مصغرة جاهزة للاختبار",
  thSub:"ثلاث خيارات لنفس الفيديو، جاهزة لاختبار Test and Compare في يوتيوب أو كغلاف للريلز. وتعتمد اللي الناس تضغط عليه.",
  edH:"درست علم النفس والفلسفة، وهذا ينعكس على فيديوهاتك.",
  edSub:"المونتاج قرار عن انتباه المشاهد في كل ثانية. ولما تفهم ليش الناس توقف وتكمل وتتفاعل، تصير القرارات أدق.",
  bnH:"وش تاخذ لما تشتغل معي",
  askQuote:"اطلب السعر",
  title:'مونتير إعلانات وكورة و AI', navCta:'ابدأ مشروعك',
  kicker:'مونتير شغال على After Effects وPremiere وأدوات الـ AI',
  h1a:'الثواني الأولى', h1b:'تقرر كل شي.',
  heroSub:'وأنا أشتغل على هالثواني. إعلانات براندات، وقصص كورة على After Effects، وإعلانات بالـ AI، لفرق وصناع محتوى في الخليج وأوروبا وأمريكا. كل افتتاحية مبنية عشان تكسب الثانية اللي بعدها.',
  heroNote:'تاخذ دقيقتين تقريبًا، وما ينرسل شي إلا لما تضغط إرسال.',
  cta1:'كلمني عن مشروعك', cta2:'شوف أعمال مختارة', concept1:"أفكار AI: Lay's وTesla",
  probH:'المشكلة مو في اللقطات. المشكلة في أول ثواني.',
  probP:'وقت التمرير عندك ثواني قليلة. ومن تجربتي، أغلب الإعلانات ما تفشل لأن المنتج ضعيف. تفشل في واحد من ثلاث أماكن.',
  probClose:'أصلح هالثلاث في المونتاج: بداية أقوى، وطريق أسرع للفكرة، والعرض في اللحظة اللي المشاهد للحين متابع فيها. ولما تبي دليل بدل الرأي، أجهز أكثر من بداية لنفس الفيديو عشان تختبرها مع بعض.',
  workH:'أعمال مختارة', f_all:'الكل', f_brand:'إعلانات', f_ai:'AI', f_cars:'سيارات', f_football:'كورة', f_vlog:'فلوج', f_anim:'أنيميشن و3D', watch:'شوفه بالصوت', heroProof:'فيديوهين من مونتاجي على قنوات العملاء: 429,771 و247,881 مشاهدة على يوتيوب.', prH:'كلام العملاء', prSub:'رسائل واتساب حقيقية من العملاء، مقصوصة بحيث ما يظهر أي رقم أو محادثة ثانية.', prOpen:'شوف الرسالة', lfH:'فيديوهات يوتيوب طويلة', lfSub:'شرح مدته 5 دقائق و41 ثانية عن تغييرات الضمان الاجتماعي الأمريكي 2027: مقدم وأقسام مرقمة وكروت أرقام عليها المصدر وكابشن، معمول على Remotion.', thMoreH:'صور مصغرة ثانية', moreWork:'اعرض شغل أكثر', lessWork:'اعرض أقوى 10 بس', contactH:'كل طرق التواصل', call:'اتصال',
  svcH:'وش أقدر أسوي لك', svcSub:'المونتاج هو الأساس، وحوله الأفكار والهوكات والاختبار، وهذي اللي تحدد إذا الفيديو بينشاف.',
  styleNote:'كل مشروع له سعر ثابت خاص فيه، حسب الستايل والمدة والموعد. اختر باقة من تحت، أو كلمني عن مشروعك وأرسل لك السعر قبل ما يبدأ أي شي.',
  pkH:'طرق الشغل معي', pkSub:'كل باقة فيها الكابشن والصوت والألوان، والنسخة الأولى خلال 24 ساعة، وجولتين تعديل. تحتاج محرر متفرغ؟ اسألني عن المحرر الخاص عن بعد.',
  pickTier:'اختر هذي', rec:'موصى بها',
  fairH:'ليش السعر منطقي',
  aiH:'لقطات ما أحد صورها', aiP:'الـ AI يدخل في المشروع لما يضيف لقطة ما تقدر تصورها أو يوفر عليك يوم تصوير، ودايمًا يخلص داخل مونتاج حقيقي على After Effects وPremiere.',
  procH:'كيف يمشي المشروع', faqH:'أسئلة العملاء الأولى',
  briefH:'كلمني عن مشروعك', briefSub:'خمس خطوات قصيرة، تقريبًا دقيقتين، وأغلبها ضغطة وحدة. تشوف الرسالة كاملة قبل ما ينرسل أي شي.',
  back:'رجوع', next:'التالي', full:'افتح الفيديو كامل', close:'إغلاق', orDirect:'تفضل تراسلني مباشرة؟',
  waHello:'السلام عليكم، شفت أعمالك وحاب أتكلم معك عن مشروع فيديو.',
  foot:'مقيم في مصر (بتوقيت القاهرة)، وأشتغل مع عملاء في الخليج وأوروبا وأمريكا.'
 }
},
forList: {
 en: [['01','The opening looks like every other ad.'],['02','The story starts late.'],['03','The offer arrives after people have left.']],
 ar: [['01','البداية تشبه كل إعلان ثاني.'],['02','القصة تبدأ متأخرة.'],['03','العرض يظهر بعد ما يكون المشاهد راح.']]
},
services: {
 en: [
  {n:'Short videos that hold attention', d:'Reels, Shorts and TikTok with a strong opening, tight pacing, captions, clean sound and colour.'},
  {n:'Sponsored ads that fit your channel', d:'Creator integrations and brand ads cut to the brief, with the product shown clearly.'},
  {n:'AI ads without a shoot', d:'A full ad built with Kling, Seedance and Veo, for products or ideas that are hard or costly to film.'},
  {n:'AI scenes inside your real footage', d:'Shots that would need a big production budget, made with AI and blended into what you filmed.'},
  {n:'Hook trial versions', d:'One video recut with 2 or 3 different openings so you can see which one keeps people watching.'},
  {n:'Ad variants for paid testing', d:'The same ad with other openings or lengths, ready to run against each other.'},
  {n:'Hook writing', d:'Five opening lines for one video, in Arabic or English, written for your audience.'},
  {n:'Content ideas', d:'Ten video ideas for your niche, each with a hook and a short outline.'},
  {n:'Monthly content plan', d:'A month in one calendar: topics, hooks, format and posting order.'},
  {n:'Trend monitoring', d:'A weekly note on the formats, sounds and topics rising in your niche, and what you could make from them.'},
  {n:'Motion graphics and football stories', d:'Story pieces built in After Effects, like club history videos.'},
  {n:'Instagram comment to DM', d:'Someone comments a keyword and gets a DM with your link or offer automatically.'},
  {n:'Reels for local businesses', d:'8 reels a month for a cafe, clinic or shop, with ideas and hooks planned for you.'},
  {n:'Long form YouTube', d:'10 to 20 minute videos edited for pacing, with graphics where they help the story.'},
  {n:'Thumbnails and covers for A/B tests', d:'Two or three thumbnail options per video, for YouTube Test and Compare or for reel covers.'},
  {n:'3D in Blender', d:'Products, logos and scenes built in 3D, then cut into your edit.'},
  {n:'Animated explainers', d:'2D characters in 3D worlds, or illustrated stories, for finance, education and brand explainers.'},
  {n:'Full time remote editor', d:'One editor working on your content full time.'}
 ],
 ar: [
  {n:'فيديوهات قصيرة تشد الانتباه', d:'ريلز وشورتس وتيك توك بافتتاحية قوية وإيقاع مضبوط، مع كابشن وصوت نظيف وألوان متناسقة.'},
  {n:'إعلانات رعاية تناسب قناتك', d:'إعلان داخل محتواك أو إعلان للبراند، يظهر فيه المنتج بوضوح مثل ما يطلب البريف.'},
  {n:'إعلانات بالذكاء الاصطناعي بدون تصوير', d:'إعلان كامل بأدوات Kling وSeedance وVeo، للمنتجات أو الأفكار اللي يصعب تصويرها أو تكلف كثير.'},
  {n:'مشاهد AI داخل لقطاتك الحقيقية', d:'لقطات كانت تحتاج ميزانية إنتاج كبيرة، أصنعها بالذكاء الاصطناعي وأدمجها في فيديوك.'},
  {n:'نسخ تجريبية بهوكات مختلفة', d:'نفس الفيديو بافتتاحيتين أو ثلاث، عشان تعرف أي افتتاحية تخلي المشاهد يكمل أطول.'},
  {n:'نسخ إعلانية للاختبار الممول', d:'نفس الإعلان بافتتاحيات أو مدد مختلفة، جاهزة للمقارنة في الإعلانات الممولة.'},
  {n:'كتابة الهوك', d:'خمس جمل افتتاحية لفيديو واحد، بالعربي أو الإنجليزي، مكتوبة لجمهورك.'},
  {n:'أفكار محتوى', d:'عشر أفكار فيديو في مجالك، لكل فكرة هوك وملخص قصير.'},
  {n:'خطة محتوى شهرية', d:'شهر كامل في تقويم واحد: المواضيع والهوكات وشكل كل فيديو وترتيب النشر.'},
  {n:'متابعة الترند', d:'ملاحظة أسبوعية عن الأشكال والأصوات والمواضيع الصاعدة في مجالك، ووش تقدر تسوي منها.'},
  {n:'موشن جرافيك وقصص كورة', d:'فيديوهات سرد بالموشن على After Effects، مثل فيديوهات تاريخ الأندية.'},
  {n:'رسائل تلقائية من تعليقات Instagram', d:'كل من يعلق بكلمة محددة توصله رسالة خاصة تلقائية فيها رابطك أو عرضك.'},
  {n:'ريلز للأعمال المحلية', d:'8 ريلز شهريًا لمقهى أو عيادة أو متجر، مع الأفكار والهوكات جاهزة لك.'},
  {n:'مونتاج يوتيوب طويل', d:'فيديوهات من 10 إلى 20 دقيقة بإيقاع مضبوط، مع رسومات وين ما تخدم القصة.'},
  {n:'صور مصغرة وأغلفة لاختبار A/B', d:'خيارين أو ثلاث لكل فيديو، لاختبار Test and Compare في يوتيوب أو كغلاف للريلز.'},
  {n:'3D على Blender', d:'منتجات وشعارات ومشاهد مبنية 3D، وبعدها داخل المونتاج.'},
  {n:'فيديوهات شرح متحركة', d:'شخصيات 2D في عالم 3D، أو قصص مرسومة، لشرح المال والتعليم والبراندات.'},
  {n:'محرر متفرغ عن بعد', d:'محرر واحد يشتغل على محتواك بدوام كامل.'}
 ]
},
tiers: {
 en: [
  {n:'Content Partner', p:'$2,400 / month', sep:'Booked separately: <s>$3,490</s>', anchor:1, f:'For creators and brands who want one person handling content from idea to final file.', i:['30 short videos','Monthly content plan: topics, hooks, format, posting order','Weekly trend notes for your niche','A written hook for every video','Hook tests on 8 videos, 2 extra openings each','Instagram comment to DM setup','One planning call a month'], why:'Ideas, trends, editing and testing sit with one person who knows your channel.'},
  {n:'Growth', p:'$1,150 / month', sep:'Booked separately: <s>$1,640</s>', rec:1, f:'For creators posting several times a week who want to know what works.', i:['16 short videos','10 video ideas with hooks','Hook tests on 4 videos, 2 extra openings each'], why:'Four tests a month show which openings your audience stays for.'},
  {n:'Essentials', p:'$600 / month', f:'For creators who have the ideas and need an editor they can rely on.', i:['8 short videos','Arabic or English captions','Sound cleanup and colour'], why:'You post on a steady schedule without editing yourself.'},
  {n:'Brand Ad Pack', p:'from $480 / ad', sep:'Booked separately: <s>$530</s>', f:'For brands and agencies running a campaign with creators or on paid social.', i:['1 sponsored or brand ad edited to your brief','3 extra openings to test','Arabic and English captions, sound and colour','With AI scenes: from $650'], why:'You launch with four versions and move spend to the one that does best.'}
 ],
 ar: [
  {n:'شريك المحتوى', p:'2,400 دولار شهريًا', sep:'لو طلبت كل خدمة لحالها: <s>3,490 دولار</s>', anchor:1, f:'لصناع المحتوى والبراندات اللي يبون شخص واحد يتولى المحتوى من الفكرة للملف النهائي.', i:['30 فيديو قصير','خطة محتوى شهرية: المواضيع والهوكات والشكل وترتيب النشر','ملاحظات أسبوعية عن الترند في مجالك','هوك مكتوب لكل فيديو','اختبار الهوك على 8 فيديوهات، بافتتاحيتين إضافيتين لكل فيديو','إعداد الرسائل التلقائية من تعليقات Instagram','مكالمة تخطيط كل شهر'], why:'الأفكار والترند والمونتاج والاختبار عند شخص واحد يعرف قناتك.'},
  {n:'النمو', p:'1,150 دولار شهريًا', sep:'لو طلبت كل خدمة لحالها: <s>1,640 دولار</s>', rec:1, f:'لصناع المحتوى اللي ينشرون أكثر من مرة بالأسبوع ويبون يعرفون وش ينجح.', i:['16 فيديو قصير','10 أفكار فيديو مع الهوك','اختبار الهوك على 4 فيديوهات، بافتتاحيتين لكل فيديو'], why:'أربع اختبارات بالشهر توضح أي افتتاحية يكمل معها جمهورك.'},
  {n:'الأساسية', p:'600 دولار شهريًا', f:'لصناع المحتوى اللي عندهم الأفكار ويحتاجون محرر يعتمدون عليه.', i:['8 فيديوهات قصيرة','كابشن عربي أو إنجليزي','تنظيف الصوت وتصحيح الألوان'], why:'تنشر بانتظام بدون ما تسوي المونتاج بنفسك.'},
  {n:'باقة إعلان البراند', p:'من 480 دولار للإعلان', sep:'لو طلبت كل خدمة لحالها: <s>530 دولار</s>', f:'للبراندات والوكالات اللي تطلق حملة مع صناع المحتوى أو بالإعلانات الممولة.', i:['إعلان رعاية أو إعلان براند حسب البريف','3 افتتاحيات إضافية للمقارنة','كابشن عربي وإنجليزي، وصوت وألوان','مع مشاهد AI: من 650 دولار'], why:'تبدأ حملتك بأربع نسخ وتنقل الميزانية للنسخة الأفضل.'}
 ]
},
fair: {
 en: ['You brief one person for ideas, editing, motion and AI scenes instead of managing three freelancers.','Hook tests give you real numbers on what keeps people watching, so each month starts from what worked.','First cuts arrive in 24 hours, so your time goes into filming, not chasing edits.','You get a fixed quote before work starts. The price we agree is the price you pay unless the brief changes. If the first cut misses the brief, I redo it at no extra cost.'],
 ar: ['تتعامل مع شخص واحد للأفكار والمونتاج والموشن ومشاهد الـ AI، بدل ما تدير ثلاث مستقلين.','اختبار الهوك يعطيك أرقام حقيقية عن اللي يخلي جمهورك يكمل، فيبدأ كل شهر من اللي نجح.','النسخة الأولى توصلك خلال 24 ساعة، فوقتك يروح للتصوير مو لملاحقة المحرر.','سعر ثابت قبل ما يبدأ الشغل، واللي نتفق عليه هو اللي تدفعه إلا إذا تغير البريف. وإذا النسخة الأولى ما طابقت البريف، أعيدها بدون أي تكلفة.']
},
stack: {
 en: [['Edit and motion',['After Effects','Premiere Pro','Photoshop','Audition','Media Encoder','CapCut']],['3D',['Blender']],['AI generation',['Higgsfield (Kling, Seedance)','Google Flow / Veo','ChatGPT images','Claude + Remotion','Topaz Video AI']]],
 ar: [['المونتاج والموشن',['After Effects','Premiere Pro','Photoshop','Audition','Media Encoder','CapCut']],['3D',['Blender']],['توليد بالـ AI',['Higgsfield (Kling, Seedance)','Google Flow / Veo','ChatGPT images','Claude + Remotion','Topaz Video AI']]]
},
styles: [
 {k:'aljazira', en:['Cinematic brand ad','Set, light and the product moving like a film.'], ar:['إعلان سينمائي','ديكور وإضاءة والمنتج يتحرك كأنه فيلم.']},
 {k:'deliveroo', en:['Anime and illustrated','Players and products drawn into a story.'], ar:['أنمي ورسوم','لاعبين ومنتجات مرسومة داخل قصة.']},
 {k:'cola3d', en:['3D animated explainer','2D characters in a 3D world, numbers made visual.'], ar:['شرح 3D متحرك','شخصيات 2D في عالم 3D، والأرقام تصير صورة.']},
 {k:'colaletter', en:['Illustrated story','One scene per idea, easy to follow.'], ar:['قصة مرسومة','مشهد لكل فكرة، سهل تتابعه.']},
 {k:'lays', en:['AI worlds','Stadiums and crowds nobody filmed.'], ar:['عوالم AI','ستادات وجماهير ما أحد صورها.']},
 {k:'merengue', en:['Documentary and archive','History told with archive and kinetic text.'], ar:['وثائقي وأرشيف','تاريخ بالأرشيف والنص المتحرك.']},
 {k:'noon', en:['Creator integration','The product inside the talk, not a break from it.'], ar:['إعلان داخل المحتوى','المنتج داخل الكلام، مو فاصل عنه.']},
 {k:'ronaldo', en:['Hype on the beat','Every cut on the music.'], ar:['حماس على الإيقاع','كل قطع على الموسيقى.']},
 {k:'deepal', en:['Product and car','Details, range and the drive, in pace.'], ar:['منتج وسيارات','التفاصيل والقيادة بإيقاع مضبوط.']},
 {k:'madrid', en:['Travel vlog','Real moments with clean captions.'], ar:['فلوج سفر','لحظات حقيقية بكابشن نظيف.']},
 {k:'katana', en:['Screen tutorial','Zooms and callouts, no waiting.'], ar:['شرح شاشة','زوم وأسهم، بدون انتظار.']}
],
edge: {
 en: [['Attention','I know what makes a thumb stop: surprise, a clear question, something about the viewer. The first seconds are built on that, not on luck.'],['Emotion','Music, pace and cuts are timed to the feeling you want at each moment, so the viewer feels it before they think it.'],['Persuasion with respect','The offer comes after trust, not before. People act when they feel understood, not pushed.'],['Clear thinking','Philosophy taught me to find the one idea a video is really about and cut what does not serve it. It matters most in explainers, finance and education.'],['Reading the audience','Comments, retention and test results get read like research, so the next video starts from evidence.']],
 ar: [['الانتباه','أعرف وش يوقف الإبهام: المفاجأة، والسؤال الواضح، والشي اللي يخص المشاهد نفسه. وأبني أول ثواني على هذا، مو على الحظ.'],['الإحساس','الموسيقى والإيقاع والقطع مضبوطة على الإحساس اللي تبيه في كل لحظة، فالمشاهد يحس فيه قبل ما يفكر.'],['الإقناع باحترام','العرض يجي بعد الثقة، مو قبلها. الناس تتحرك لما تحس إنك فاهمها، مو لما تضغط عليها.'],['التفكير الواضح','الفلسفة علمتني ألقى الفكرة الوحدة اللي الفيديو يدور حولها، وأشيل أي شي ما يخدمها. وهذا يفرق كثير في فيديوهات الشرح والمال والتعليم.'],['قراءة الجمهور','أقرأ التعليقات والاحتفاظ ونتايج الاختبار كأنها بحث، فيبدأ الفيديو الجاي من دليل.']]
},
benefits: {
 en: ['One person from idea to upload: ideas, hooks, edit, motion, 3D, AI scenes, thumbnails and covers.','Any style your brand needs, from cinematic ads to anime, documentary, 3D explainers and hype edits.','Proof instead of opinions: hook versions and thumbnail options you can test against each other.','Arabic and English, with captions in both and Gulf audiences in mind.','Every size from one edit: 9:16, 4:5, 1:1 and 16:9.','A style sheet for your brand, so every video looks like it came from the same channel.','Trend notes from your niche, so ideas come from what is rising now.','Content ideas and hooks from someone who understands why people watch.'],
 ar: ['شخص واحد من الفكرة للنشر: الأفكار والهوك والمونتاج والموشن و3D ومشاهد الـ AI والصور المصغرة والأغلفة.','أي ستايل يحتاجه البراند، من الإعلان السينمائي للأنمي والوثائقي وشرح 3D وإيديت الحماس.','دليل بدل الرأي: نسخ هوك وخيارات صور مصغرة تختبرها مع بعض.','عربي وإنجليزي، بكابشن باللغتين وبفهم للجمهور الخليجي.','كل المقاسات من مونتاج واحد: 9:16 و4:5 و1:1 و16:9.','دليل ستايل للبراند، عشان كل فيديو يبان من نفس القناة.','ملاحظات عن الترند في مجالك، فالأفكار تجي من اللي صاعد الحين.','أفكار وهوكات من شخص فاهم ليش الناس تتفرج.']
},
process: {
 en: [['Brief','You tell me the goal, share your footage or assets, and add a reference if you have one. I reply with questions and a written scope and price before anything starts.'],['First cut','You get a first cut in 24 hours, with the opening I recommend and the reason for it. If you want to test, I add alternate openings.'],['Review','You send all your notes together and I apply them in one pass. Two rounds are included.'],['Delivery','You get the final files by link, in the sizes your platforms need, with captions or clean versions when agreed.']],
 ar: [['البريف','تقول لي الهدف، وترسل اللقطات أو المواد، وتضيف مرجع إذا عندك. أرد بأسئلة ونطاق شغل وسعر مكتوب قبل ما يبدأ أي شي.'],['النسخة الأولى','توصلك خلال 24 ساعة، مع البداية اللي أنصح فيها وسبب اختيارها. وإذا تبي تختبر، أضيف بدايات ثانية.'],['المراجعة','ترسل كل ملاحظاتك مرة وحدة وأطبقها في جولة وحدة. جولتين تعديل مشمولة.'],['التسليم','تستلم الملفات النهائية برابط، بالمقاسات اللي تحتاجها منصاتك، مع الكابشن أو نسخ بدون نص حسب الاتفاق.']]
},
faq: {
 en: [
  ['I am in a different time zone. Will remote work slow us down?','No. I am in Egypt (Cairo time), which overlaps the working day in the Gulf and Europe and the morning in the US. At the start we agree one channel, usually WhatsApp, and the delivery dates. You can send notes at any time, and I confirm each delivery date in writing. When a call helps, I join at a time that suits you.'],
  ['How many revisions are included?','Two rounds. A round means all your notes sent together and applied in one pass. A third round, or a change of direction after the first cut, is quoted before I start, so there are no surprises on the invoice.'],
  ['Who owns the final videos and the project files?','You own the final videos. Once the final payment is made, you can use them on any channel you run. If a video uses licensed music, stock footage or AI generated material, I tell you the source and the license terms before you publish. Project files, such as After Effects projects, are not included by default. I provide them on request, with the price agreed first. Unless you ask me not to, I may show the finished work in my portfolio, and I sign an NDA when you need one.'],
  ['How does payment work?','I send a written quote before anything starts. For a single project, half starts the work and half is due on delivery. Monthly plans are paid at the start of each month. Final files are released when the final payment clears. If the scope changes, I tell you the price before I do the extra work.'],
  ['Can you match our existing style?','Yes. Send your brand guide, past videos and one or two references you like. I match the type, colours, pacing and sound, and I tell you in my first reply if I see something worth changing, and why. For ongoing clients I keep a style sheet, so every video looks like it came from the same channel.'],
  ['What if I only need one video?','Then one video is the project. There is no retainer and no long contract. I quote a single video on its own, separate from monthly plans. If you want to see how I handle your brand before committing to more, one video is a fair way to start, and you can add alternate openings to it if you want to test.']
 ],
 ar: [
  ['أنا في بلد ثاني بتوقيت مختلف. الشغل عن بعد بيبطئ المشروع؟','لا. أنا في مصر (بتوقيت القاهرة)، ودوامي يغطي يوم العمل في الخليج وأوروبا وصباح أمريكا. في البداية نتفق على قناة وحدة، غالبًا واتساب، وعلى مواعيد التسليم. ترسل ملاحظاتك أي وقت، وأأكد كل موعد تسليم كتابةً. ولو المكالمة تفيد، أدخلها في وقت يناسبك.'],
  ['كم جولة تعديل مشمولة؟','جولتين. الجولة يعني ترسل كل ملاحظاتك مرة وحدة وأطبقها في جولة وحدة. الجولة الثالثة، أو تغيير الاتجاه بعد النسخة الأولى، أعطيك سعرها قبل ما أبدأ، فما فيه مفاجآت في الفاتورة.'],
  ['لمن الفيديوهات النهائية وملفات المشروع؟','الفيديوهات النهائية لك. بعد الدفعة الأخيرة تستخدمها في أي قناة تديرها. وإذا الفيديو فيه موسيقى مرخصة أو لقطات جاهزة أو مواد مولدة بالـ AI، أقول لك المصدر وشروط الترخيص قبل النشر. ملفات المشروع، مثل مشاريع After Effects، مو مشمولة تلقائيًا، وأسلمها عند الطلب بسعر نتفق عليه أول. وإذا ما عندك مانع، ممكن أعرض الشغل في البورتفوليو، وأوقع اتفاقية سرية لو تحتاجها.'],
  ['كيف الدفع؟','أرسل لك عرض سعر مكتوب قبل ما يبدأ أي شي. في المشروع الواحد، نص المبلغ مقدم عند البدء والنص الثاني عند التسليم. والباقات الشهرية تندفع بداية كل شهر. الملفات النهائية تتسلم بعد وصول الدفعة الأخيرة. وإذا تغير نطاق الشغل، أقول لك السعر قبل ما أنفذ الإضافة.'],
  ['تقدر تمشي على ستايل البراند الحالي؟','إيه. أرسل دليل الهوية وفيديوهاتك السابقة ومرجع أو اثنين يعجبونك. أطابق الخطوط والألوان والإيقاع والصوت، وفي أول رد أقول لك إذا شفت شي يستاهل يتغير وليش. ومع العملاء المستمرين أحتفظ بدليل ستايل، عشان كل فيديو يبان من نفس القناة.'],
  ['وإذا أحتاج فيديو واحد بس؟','عادي، الفيديو الواحد مشروع بحد ذاته. ما فيه اشتراك شهري ولا عقد طويل، وأسعّره لحاله بعيد عن الباقات. وإذا تبي تشوف كيف أشتغل على البراند قبل ما تلتزم بأكثر، فيديو واحد بداية منطقية، وتقدر تضيف له بدايات بديلة للاختبار.']
 ]
},
form: {
 en: {
  sep:', ', count:'Step {a} of {b}: {label}', countLast:'Last step: {label}', optional:'(optional)', required:'Pick or fill this one to continue.',
  skip:'Skip this step', submit:'Send on WhatsApp', submitMail:'Send by email', submitCopy:'Show my message',
  mailInstead:'Send by email instead', preview:'Preview the message', hidePreview:'Hide the preview',
  pkgNote:'Package you picked', pkgClear:'Remove',
  reassure:'WhatsApp opens with your message ready. You can read and edit it first, and nothing is sent until you press send there.',
  reassureMail:'Your email app opens with the message ready. Nothing is sent until you press send there.',
  privacy:'I use your details only to reply to you. No mailing list. This page does not save your answers.',
  steps: [
   {label:'What you need', q:'What do you need help with?', help:'Pick all that apply. You can change your mind at any point.', fields:[
    {id:'need', type:'multi', excl:1, err:'Pick at least one so I know where to start.', options:['Short videos for creators','Brand or sponsored ads','AI ads or AI scenes','Football and motion stories','Hook trial versions (different openings to test)','Content ideas and a monthly plan','Trend monitoring','Thumbnails for A/B tests','3D or animated explainers','Not sure yet, help me choose']}]},
   {label:'Who it is for', q:'What kind of content or brand is this for?', help:'Pick the closest one. You can add details later.', fields:[
    {id:'type', type:'chips', err:'Pick the closest one.', options:['A brand or product','An app or a launch','A football club, player or sports page','An agency, working for its clients','A creator or personal brand','A clinic, cafe or local business','Something else']},
    {id:'platforms', type:'multi', excl:1, optional:1, label:'Where will the videos run?', help:'This tells me which sizes and lengths to plan for.', options:['Instagram and Reels','TikTok','YouTube and Shorts','Snapchat','Paid ads','Not decided yet']}]},
   {label:'Show me the style', skip:1, q:'Show me the style', help:'Everything here is optional. You can skip this step.', fields:[
    {id:'account', type:'url', optional:1, label:'Link to your account or website', ph:'instagram.com/yourbrand', help:'Instagram, TikTok, YouTube or a website. A public link works best.'},
    {id:'ref', type:'url', optional:1, label:'A video whose feel you like', ph:'Paste a link', help:'It can be a competitor, a brand you admire, or one of mine. If you share Google Drive or WeTransfer, set it so anyone with the link can view.'},
    {id:'notes', type:'textarea', optional:1, label:'Anything else I should know?', ph:'For example: the goal, the offer, the footage you have, languages, anything to avoid.'}]},
   {label:'Timing and budget', q:'What is your timeline?', help:'A real date helps me tell you honestly if it fits. If it is flexible, say so.', fields:[
    {id:'when', type:'chips', err:'Pick a timeframe, even a rough one.', options:['Within a week','Within two weeks','Within a month','Later, I am planning ahead','Every month, ongoing','No fixed date']},
    {id:'budget', type:'chips', optional:1, label:'Roughly what budget range are you working with?', help:'In US dollars. Per month for ongoing work, or per project for a single video. A range helps me suggest a scope that fits. It is not a quote and it does not commit you to anything.', options:['$300 to $600','$600 to $1,000','$1,000 to $1,800','$1,800 to $3,000','$3,000 or more','Not sure yet, suggest a scope for me','I would rather discuss it first']}]},
   {label:'Where to reply', q:'Where should I reply?', fields:[
    {id:'name', type:'text', label:'Your name', ph:'First name is fine', help:'Add your brand name too if you like.', err:'Add a name so I know who to reply to.', ac:'name'},
    {id:'location', type:'text', optional:1, label:'Where are you based?', ph:'City or country', help:'So I reply at a sensible hour for you.'},
    {id:'reply', type:'chips', def:1, label:'How would you like me to reply?', options:['WhatsApp, in the same chat','Email','Phone call']},
    {id:'email', type:'email', show:{reply:1}, label:'Your email address', ph:'you@company.com', err:'That email address looks incomplete.', ac:'email'},
    {id:'phone', type:'tel', show:{reply:2}, label:'Your phone number with country code', ph:'+971 50 000 0000', err:'Add the country code, for example +971.', ac:'tel'},
    {id:'bestTime', type:'text', optional:1, show:{reply:2}, label:'Best time to call', ph:'In your local time'}]}
  ],
  msg: {
   hello:'Hello, I found your portfolio and I would like to talk about a video project.', thanks:'Thank you.',
   groups:[[['Need','need'],['Content type','type'],['Platforms','platforms'],['Account','account'],['Reference video','ref'],['Details','notes'],['Timeline','when'],['Budget range','budget'],['Package','pkg']],[['Name','name'],['Based in','location'],['Reply by','replyText']]]
  },
  replyMsg:['WhatsApp, in this chat','Email: {email}','Phone call: {phone}'], replyBest:', best time {t}',
  mailSubject:'Video project inquiry from {name}',
  doneH:'Your message is ready',
  doneWa:'WhatsApp should now be open with your inquiry filled in. Press send there to finish. It is not sent until you do. If WhatsApp did not open, tap Copy message and send it to {wa}, or use email.',
  doneMail:'Your email app should now be open with the message filled in. Press send there to finish. It is not sent until you do.',
  doneNone:'Contact details are not set on this page yet. Copy the message and send it through Instagram.',
  doneNext:'What happens next: I read your message myself and reply with a few questions or a rough plan. Then you decide whether to go ahead. There is no pressure either way.',
  again:'Open WhatsApp again', discLabel:'Discount', discLine:'{pct}% off the first project, code {code}', ig:'Send on Instagram', copy:'Copy message', copied:'Copied', edit:'Edit my answers'
 },
 ar: {
  sep:'، ', count:'الخطوة {a} من {b}: {label}', countLast:'الخطوة الأخيرة: {label}', optional:'(اختياري)', required:'اختر أو اكتب هنا عشان تكمل.',
  skip:'تخطَّ هذي الخطوة', submit:'أرسل على واتساب', submitMail:'أرسل بالإيميل', submitCopy:'اعرض رسالتي',
  mailInstead:'أرسل بالإيميل بدالها', preview:'شوف الرسالة قبل الإرسال', hidePreview:'أخفِ الرسالة',
  pkgNote:'الباقة اللي اخترتها', pkgClear:'إزالة',
  reassure:'واتساب ينفتح والرسالة جاهزة. تقدر تقرأها وتعدلها، وما ينرسل شي إلا لما تضغط إرسال هناك.',
  reassureMail:'الإيميل ينفتح والرسالة جاهزة، وما ينرسل شي إلا لما تضغط إرسال هناك.',
  privacy:'أستخدم بياناتك عشان أرد عليك بس. ما فيه قائمة بريدية، والصفحة ما تحفظ إجاباتك.',
  steps: [
   {label:'وش تحتاج', q:'وش تحتاج مساعدة فيه؟', help:'اختر كل اللي ينطبق، وتقدر تغير رأيك أي وقت.', fields:[
    {id:'need', type:'multi', excl:1, err:'اختر خيار واحد على الأقل عشان أعرف من وين أبدأ.', options:['فيديوهات قصيرة لصناع المحتوى','إعلانات براند أو رعاية','إعلانات أو مشاهد AI','قصص كورة وموشن','نسخ بهوكات مختلفة للاختبار','أفكار محتوى وخطة شهرية','متابعة الترند','صور مصغرة لاختبار A/B','شرح 3D أو أنيميشن','مو متأكد، ساعدني أختار']}]},
   {label:'لمن الشغل', q:'لأي نوع محتوى أو براند؟', help:'اختر الأقرب، والتفاصيل تقدر تضيفها بعدين.', fields:[
    {id:'type', type:'chips', err:'اختر الأقرب.', options:['براند أو منتج','تطبيق أو إطلاق','نادي أو لاعب أو صفحة رياضية','وكالة تشتغل لعملائها','صانع محتوى أو براند شخصي','عيادة أو مقهى أو محل','شي ثاني']},
    {id:'platforms', type:'multi', excl:1, optional:1, label:'وين بتنعرض الفيديوهات؟', help:'عشان أعرف المقاسات والمدد المناسبة.', options:['إنستقرام وريلز','تيك توك','يوتيوب وشورتس','سناب شات','إعلانات ممولة','ما تحدد بعد']}]},
   {label:'وريني الستايل', skip:1, q:'وريني الستايل', help:'كل شي هنا اختياري، وتقدر تتخطى الخطوة.', fields:[
    {id:'account', type:'url', optional:1, label:'رابط حسابك أو موقعك', ph:'instagram.com/yourbrand', help:'إنستقرام أو تيك توك أو يوتيوب أو موقع. الرابط العام أفضل.'},
    {id:'ref', type:'url', optional:1, label:'فيديو يعجبك ستايله', ph:'الصق الرابط', help:'ممكن يكون لمنافس أو براند تحبه أو واحد من أعمالي. ولو رابط Google Drive أو WeTransfer، خله متاح لأي أحد عنده الرابط.'},
    {id:'notes', type:'textarea', optional:1, label:'فيه شي ثاني لازم أعرفه؟', ph:'مثلًا: الهدف، العرض، اللقطات اللي عندك، اللغات، أو أشياء تبي تتجنبها.'}]},
   {label:'الوقت والميزانية', q:'متى تحتاجه؟', help:'الموعد الحقيقي يخليني أقول لك بصراحة إذا يمشي. وإذا الوقت مرن، اختر كذا.', fields:[
    {id:'when', type:'chips', err:'اختر وقت، حتى لو تقريبي.', options:['خلال أسبوع','خلال أسبوعين','خلال شهر','بعدين، أخطط من الحين','كل شهر، شغل مستمر','ما فيه موعد محدد']},
    {id:'budget', type:'chips', optional:1, label:'وش الميزانية التقريبية؟', help:'بالدولار الأمريكي. شهريًا للشغل المستمر، أو للمشروع لو فيديو واحد. النطاق يساعدني أقترح شغل يناسبك، وهو مو عرض سعر ولا يلزمك بشي.', options:['300 إلى 600 دولار','600 إلى 1,000 دولار','1,000 إلى 1,800 دولار','1,800 إلى 3,000 دولار','3,000 دولار أو أكثر','ما حددت، اقترح علي نطاق','أفضل نتكلم فيها أول']}]},
   {label:'وين أرد عليك', q:'وين أرد عليك؟', fields:[
    {id:'name', type:'text', label:'اسمك', ph:'الاسم الأول يكفي', help:'وتقدر تضيف اسم البراند.', err:'اكتب اسمك عشان أعرف أرد على مين.', ac:'name'},
    {id:'location', type:'text', optional:1, label:'وين مقرك؟', ph:'المدينة أو الدولة', help:'عشان أرد عليك في وقت يناسبك.'},
    {id:'reply', type:'chips', def:1, label:'كيف تحب أرد عليك؟', options:['واتساب، في نفس المحادثة','إيميل','مكالمة']},
    {id:'email', type:'email', show:{reply:1}, label:'إيميلك', ph:'you@company.com', err:'الإيميل يبان ناقص.', ac:'email'},
    {id:'phone', type:'tel', show:{reply:2}, label:'رقم جوالك مع رمز الدولة', ph:'+971 50 000 0000', err:'أضف رمز الدولة، مثل +971.', ac:'tel'},
    {id:'bestTime', type:'text', optional:1, show:{reply:2}, label:'أفضل وقت للاتصال', ph:'بتوقيتك'}]}
  ],
  msg: {
   hello:'السلام عليكم، شفت أعمالك وحاب أتكلم معك عن مشروع فيديو.', thanks:'شكرًا لك.',
   groups:[[['المطلوب','need'],['نوع المحتوى','type'],['المنصات','platforms'],['الحساب','account'],['فيديو مرجعي','ref'],['تفاصيل','notes'],['الوقت','when'],['الميزانية','budget'],['الباقة','pkg']],[['الاسم','name'],['المكان','location'],['طريقة الرد','replyText']]]
  },
  replyMsg:['واتساب، في هذي المحادثة','إيميل: {email}','مكالمة: {phone}'], replyBest:'، أفضل وقت {t}',
  mailSubject:'استفسار عن مشروع فيديو من {name}',
  doneH:'رسالتك جاهزة',
  doneWa:'المفروض واتساب انفتح وطلبك مكتوب فيه. اضغط إرسال هناك عشان يوصلني، وما ينرسل شي قبل كذا. ولو ما انفتح، اضغط انسخ الرسالة وأرسلها على {wa}، أو استخدم الإيميل.',
  doneMail:'المفروض الإيميل انفتح والرسالة مكتوبة فيه. اضغط إرسال هناك عشان توصلني، وما تنرسل قبل كذا.',
  doneNone:'بيانات التواصل للحين ما انضافت للصفحة. انسخ الرسالة وأرسلها على إنستقرام.',
  doneNext:'وبعدها: أقرأ رسالتك بنفسي وأرد بأسئلة قليلة أو خطة مبدئية، وأنت تقرر إذا تبي تكمل. بدون أي ضغط.',
  again:'افتح واتساب مرة ثانية', discLabel:'الخصم', discLine:'{pct}% على أول مشروع، الكود {code}', ig:'أرسل على إنستقرام', copy:'انسخ الرسالة', copied:'تم النسخ', edit:'عدّل إجاباتي'
 }
}
};
