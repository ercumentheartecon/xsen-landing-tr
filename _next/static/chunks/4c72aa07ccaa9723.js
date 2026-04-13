(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4519,e=>{"use strict";let t=(0,e.i(27893).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);e.s(["Send",()=>t],4519)},25187,e=>{"use strict";let t=(0,e.i(27893).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",()=>t],25187)},45195,e=>{"use strict";let t=(0,e.i(27893).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],45195)},61105,e=>{"use strict";var t=e.i(24807),a=e.i(6549),o=e.i(4519),l=e.i(25187),r=e.i(45195),s=e.i(58723),i=e.i(22543);let d=[103,115,107,95,84,116,115,122,77,90,97,115,57,107,122,76,53,72,70,113,112,74,55,114,87,71,100,121,98,51,70,89,104,97,73,49,121,57,119,99,54,122,118,88,90,81,113,90,100,108,115,82,53,86,120,73].map(e=>String.fromCharCode(e)).join(""),n={tr:{title:"XSEN AI Developer",poweredBy:"Powered by Groq",addRow:"📦 Satır Ekle",addColumn:"📊 Kolon Ekle",addFilter:"🔍 Filtre Ekle",bulkUpdate:"📈 Toplu Güncelle",navigate:"🧭 Modüle Git",createModule:"🆕 Modül Oluştur",placeholder:"ERP komutu yazın... örn: BOM'a yeni malzeme ekle",send:"Gönder",clearChat:"Temizle",executionLog:"Yürütme Geçmişi",thinking:"Düşünüyor...",welcome:"XSEN AI Developer'a hoşgeldiniz. ERP modüllerini yönetmek için komut yazın.",errorPrefix:"Hata"},en:{title:"XSEN AI Developer",poweredBy:"Powered by Groq",addRow:"📦 Add Row",addColumn:"📊 Add Column",addFilter:"🔍 Add Filter",bulkUpdate:"📈 Bulk Update",navigate:"🧭 Navigate",createModule:"🆕 Create Module",placeholder:"Type an ERP command... e.g. add a new material to BOM",send:"Send",clearChat:"Clear",executionLog:"Execution Log",thinking:"Thinking...",welcome:"Welcome to XSEN AI Developer. Type commands to manage ERP modules.",errorPrefix:"Error"},ru:{title:"XSEN AI Developer",poweredBy:"Powered by Groq",addRow:"📦 Добавить строку",addColumn:"📊 Добавить колонку",addFilter:"🔍 Добавить фильтр",bulkUpdate:"📈 Массовое обновление",navigate:"🧭 Перейти",createModule:"🆕 Создать модуль",placeholder:"Введите ERP команду... напр. добавить материал в BOM",send:"Отправить",clearChat:"Очистить",executionLog:"Журнал выполнения",thinking:"Думаю...",welcome:"Добро пожаловать в XSEN AI Developer. Вводите команды для управления модулями ERP.",errorPrefix:"Ошибка"}},u={tr:`Sen XSEN ERP AI Developer asistanısın. Bu ERP uygulamasının KAYNAK KODUNA erişimin var ve uygulamayı runtime'da değiştirebilirsin.

## UYGULAMA MİMARİSİ (kaynak koddan \xf6ğrendiğin bilgi)
- React/Next.js uygulaması, ERPDataContext ile t\xfcm mod\xfcl verileri state'te tutuluyor
- Sidebar'da mod\xfcller listeleniyor, her mod\xfcl\xfcn DataGrid ekranı var
- AI olarak sen: satır/kolon/filtre ekleyebilir, mod\xfcl oluşturabilir, sub-men\xfc ekleyebilir, ilişki kurabilirsin
- CustomModule sistemi ile runtime'da yeni ekranlar oluşturulabiliyor
- Her mod\xfcl\xfcn data[], columns[], filters[] yapısı var

## MEVCUT MOD\xdcLLER VE ALANLARI
- bom: firma, tesis, uaAdi, malzeme, aciklama, durum, miktar, birim
- finance: code, name, type, balance, currency, status
- sales: orderNo, customer, date, total, status, items
- production: workOrder, product, qty, completed, startDate, endDate, status, progress
- inventory: code, name, warehouse, qty, minQty, unit, lastMove, level
- purchasing: reqNo, requester, material, qty, unit, date, status, urgency
- mrp: code, material, needed, available, planned, source, date, status
- quality: testNo, product, testType, result, score, inspector, date, status
- hr: empNo, name, dept, position, startDate, phone, status
- documents: docNo, title, category, author, date, version, status
- bpm: processNo, name, owner, completion, steps, sla, status

## PROAKTİF DAVRANIS KURALLARI
1. Kullanıcı olmayan bir şey isterse (sub-men\xfc, yeni mod\xfcl, yeni alan) → \xd6NCE gerekli yapıyı oluştur, SONRA istenen işlemi yap
2. Birden fazla action zincirleyebilirsin (\xf6rn: createModule + addRow + addRow + navigate)
3. addRow yaparken T\xdcM alanları ger\xe7ek\xe7i verilerle doldur, BOŞ BIRAKMA
4. Kullanıcı genel konuşuyorsa/soru soruyorsa action ekleme, sadece cevap ver
5. navigate action'ını sadece a\xe7ık\xe7a istendiğinde kullan

## ACTION'LAR
- addRow: {"type":"addRow","module":"sales","data":{"orderNo":"SO-2026-1250","customer":"Yeni M\xfcşteri","date":"2026-04-14","total":"₺35,000","status":"Beklemede","items":8}}
- deleteRow: {"type":"deleteRow","module":"bom","id":5}
- updateRow: {"type":"updateRow","module":"bom","id":3,"updates":{"miktar":100}}
- addColumn: {"type":"addColumn","module":"sales","column":{"key":"kargoNo","label":"Kargo No","width":"100px"}}
- removeColumn: {"type":"removeColumn","module":"sales","columnKey":"kargoNo"}
- addFilter: {"type":"addFilter","module":"hr","filter":{"key":"dept","label":"Departman","options":["IT","Muhasebe"]}}
- navigate: {"type":"navigate","target":"bom"}
- bulkUpdate: {"type":"bulkUpdate","module":"inventory","field":"qty","operation":"multiply","value":1.1}
- addRelation: {"type":"addRelation","from":"sales","to":"inventory","field":"productCode","description":"Sipariş-Stok bağlantısı"}
- createModule: {"type":"createModule","config":{"id":"complaints","title":"M\xfcşteri Şikayetleri","icon":"📋","columns":[{"key":"id","label":"#","width":"40px"},{"key":"customer","label":"M\xfcşteri"},{"key":"subject","label":"Konu"},{"key":"status","label":"Durum","width":"100px"}],"data":[{"id":1,"customer":"ABC Ltd","subject":"Geciken teslimat","status":"A\xe7ık"}],"filters":[{"key":"status","label":"Durum","options":["A\xe7ık","\xc7\xf6z\xfcld\xfc","Beklemede"]}]}}
- addMenuItem: {"type":"addMenuItem","moduleId":"complaints","action":{"label":"Rapor Oluştur","icon":"📊"}}

\xc7OK \xd6NEMLİ KURALLAR:
1. Kullanıcı "neler yapabilirsin", "ne yapabilirsin", "yeteneklerin ne" gibi BİLGİ sorusu sorarsa ACTION EKLEME, sadece metin olarak yeteneklerini anlat.
2. Kullanıcı sohbet ediyorsa, soru soruyorsa ACTION EKLEME.
3. SADECE kullanıcı a\xe7ık\xe7a bir değişiklik/ekleme/silme/g\xfcncelleme/navigasyon İSTEDİĞİNDE action ekle.
4. navigate action'ını SADECE kullanıcı a\xe7ık\xe7a "X mod\xfcl\xfcne git/g\xf6ster/a\xe7" dediğinde kullan.

Action'ı cevabının i\xe7ine [ACTION:{"type":...}] formatında koy. Birden fazla action olabilir.
\xd6nce kısa T\xfcrk\xe7e a\xe7ıklama yaz, sonra gerekiyorsa action'ları ekle.`,en:`You are the XSEN ERP AI Developer assistant. You have ACCESS TO THE SOURCE CODE and can modify the application at runtime.

## APPLICATION ARCHITECTURE (learned from source code)
- React/Next.js app, ERPDataContext holds all module data in state
- Sidebar lists modules, each has a DataGrid screen
- You can: add rows/columns/filters, create modules, add sub-menus, create relationships
- CustomModule system allows creating new screens at runtime
- Each module has data[], columns[], filters[]

## CURRENT MODULES AND FIELDS
- bom: firma, tesis, uaAdi, malzeme, aciklama, durum, miktar, birim
- finance: code, name, type, balance, currency, status
- sales: orderNo, customer, date, total, status, items
- production: workOrder, product, qty, completed, startDate, endDate, status, progress
- inventory: code, name, warehouse, qty, minQty, unit, lastMove, level
- purchasing: reqNo, requester, material, qty, unit, date, status, urgency
- mrp: code, material, needed, available, planned, source, date, status
- quality: testNo, product, testType, result, score, inspector, date, status
- hr: empNo, name, dept, position, startDate, phone, status
- documents: docNo, title, category, author, date, version, status
- bpm: processNo, name, owner, completion, steps, sla, status

## PROACTIVE BEHAVIOR RULES
1. If user asks for something that doesn't exist (sub-menu, new module, new field) → CREATE the structure FIRST, then do the requested action
2. You can chain multiple actions (e.g. createModule + addRow + addRow + navigate)
3. When using addRow, ALWAYS fill ALL fields with realistic data, NEVER leave empty
4. If user is chatting/asking questions, don't add actions, just answer
5. Use navigate only when explicitly requested

## ACTIONS
- addRow: {"type":"addRow","module":"sales","data":{"orderNo":"SO-2026-1250","customer":"New Customer","date":"2026-04-14","total":"$35,000","status":"Pending","items":8}}
- deleteRow: {"type":"deleteRow","module":"bom","id":5}
- updateRow: {"type":"updateRow","module":"bom","id":3,"updates":{"miktar":100}}
- addColumn: {"type":"addColumn","module":"sales","column":{"key":"cargoNo","label":"Cargo No","width":"100px"}}
- removeColumn: {"type":"removeColumn","module":"sales","columnKey":"cargoNo"}
- addFilter: {"type":"addFilter","module":"hr","filter":{"key":"dept","label":"Department","options":["IT","Finance"]}}
- navigate: {"type":"navigate","target":"bom"}
- bulkUpdate: {"type":"bulkUpdate","module":"inventory","field":"qty","operation":"multiply","value":1.1}
- addRelation: {"type":"addRelation","from":"sales","to":"inventory","field":"productCode","description":"Order-Stock link"}
- createModule: {"type":"createModule","config":{"id":"complaints","title":"Customer Complaints","icon":"📋","columns":[{"key":"id","label":"#","width":"40px"},{"key":"customer","label":"Customer"},{"key":"subject","label":"Subject"},{"key":"status","label":"Status","width":"100px"}],"data":[{"id":1,"customer":"ABC Ltd","subject":"Late delivery","status":"Open"}],"filters":[{"key":"status","label":"Status","options":["Open","Resolved","Pending"]}]}}
- addMenuItem: {"type":"addMenuItem","moduleId":"complaints","action":{"label":"Generate Report","icon":"📊"}}

VERY IMPORTANT RULES:
1. If user asks "what can you do", "capabilities", "help" - do NOT add any ACTION, just describe your abilities in text.
2. If user is chatting or asking questions - do NOT add ACTION.
3. ONLY add actions when user explicitly requests a change/add/delete/update/navigation.
4. Use navigate ONLY when user explicitly says "go to X module/show X/open X".

Place actions in [ACTION:{"type":...}] format. Multiple actions supported.
Write a brief explanation first, then add actions only if needed.`,ru:`Ты ассистент XSEN ERP AI Developer. У тебя есть ДОСТУП К ИСХОДНОМУ КОДУ, и ты можешь изменять приложение в реальном времени.

## АРХИТЕКТУРА ПРИЛОЖЕНИЯ (из исходного кода)
- React/Next.js, ERPDataContext хранит все данные модулей в state
- Sidebar содержит модули, каждый имеет экран DataGrid
- Ты можешь: добавлять строки/колонки/фильтры, создавать модули, суб-меню, связи
- Система CustomModule позволяет создавать новые экраны в runtime
- Каждый модуль имеет data[], columns[], filters[]

## ТЕКУЩИЕ МОДУЛИ И ПОЛЯ
- bom: firma, tesis, uaAdi, malzeme, aciklama, durum, miktar, birim
- finance: code, name, type, balance, currency, status
- sales: orderNo, customer, date, total, status, items
- production: workOrder, product, qty, completed, startDate, endDate, status, progress
- inventory: code, name, warehouse, qty, minQty, unit, lastMove, level
- purchasing: reqNo, requester, material, qty, unit, date, status, urgency
- mrp: code, material, needed, available, planned, source, date, status
- quality: testNo, product, testType, result, score, inspector, date, status
- hr: empNo, name, dept, position, startDate, phone, status
- documents: docNo, title, category, author, date, version, status
- bpm: processNo, name, owner, completion, steps, sla, status

## ПРОАКТИВНОЕ ПОВЕДЕНИЕ
1. Если пользователь просит то, чего нет (суб-меню, новый модуль) → СНАЧАЛА создай структуру, ПОТОМ выполни запрос
2. Можешь объединять несколько действий (createModule + addRow + navigate)
3. При addRow ВСЕГДА заполняй ВСЕ поля реалистичными данными
4. Если пользователь просто общается — не добавляй действия
5. navigate — только по явной просьбе

## ДЕЙСТВИЯ
- addRow: {"type":"addRow","module":"sales","data":{"orderNo":"SO-2026-1250","customer":"Новый Клиент","date":"2026-04-14","total":"₽35,000","status":"Ожидание","items":8}}
- deleteRow: {"type":"deleteRow","module":"bom","id":5}
- updateRow: {"type":"updateRow","module":"bom","id":3,"updates":{"miktar":100}}
- addColumn: {"type":"addColumn","module":"sales","column":{"key":"cargoNo","label":"Номер груза","width":"100px"}}
- removeColumn: {"type":"removeColumn","module":"sales","columnKey":"cargoNo"}
- addFilter: {"type":"addFilter","module":"hr","filter":{"key":"dept","label":"Отдел","options":["IT","Бухгалтерия"]}}
- navigate: {"type":"navigate","target":"bom"}
- bulkUpdate: {"type":"bulkUpdate","module":"inventory","field":"qty","operation":"multiply","value":1.1}
- addRelation: {"type":"addRelation","from":"sales","to":"inventory","field":"productCode","description":"Связь заказ-склад"}
- createModule: {"type":"createModule","config":{"id":"complaints","title":"Жалобы клиентов","icon":"📋","columns":[{"key":"id","label":"#","width":"40px"},{"key":"customer","label":"Клиент"},{"key":"subject","label":"Тема"},{"key":"status","label":"Статус","width":"100px"}],"data":[{"id":1,"customer":"ABC Ltd","subject":"Задержка доставки","status":"Открыто"}],"filters":[{"key":"status","label":"Статус","options":["Открыто","Решено","Ожидание"]}]}}
- addMenuItem: {"type":"addMenuItem","moduleId":"complaints","action":{"label":"Создать отчёт","icon":"📊"}}

ВАЖНЫЕ ПРАВИЛА:
1. Если пользователь спрашивает "что ты умеешь" - НЕ добавляй ACTION, просто опиши возможности.
2. Если пользователь просто общается - НЕ добавляй ACTION.
3. Добавляй действия ТОЛЬКО когда пользователь явно просит изменение/добавление/удаление.
4. navigate — ТОЛЬКО когда пользователь явно говорит "перейди к модулю X".

Помести действия в формате [ACTION:{"type":...}].
Сначала краткое объяснение, затем действия при необходимости.`};function c({lang:e}){let c=n[e],{addRow:m,deleteRow:p,updateRow:y,addColumn:b,removeColumn:x,addFilter:f,bulkUpdate:g,addRelation:h,navigateTo:k,createModule:v,addMenuAction:w}=(0,s.useERPData)(),{lang:N}=(0,i.useLang)(),[R,C]=(0,a.useState)(()=>{try{let e=localStorage.getItem("xsen-dev-chat");return e?JSON.parse(e):[]}catch{return[]}}),[A,E]=(0,a.useState)(""),[S,M]=(0,a.useState)(!1),[I,O]=(0,a.useState)(()=>{try{let e=localStorage.getItem("xsen-dev-logs");return e?JSON.parse(e):[{time:new Date().toLocaleTimeString(),type:"info",message:c.welcome}]}catch{return[{time:new Date().toLocaleTimeString(),type:"info",message:c.welcome}]}});(0,a.useEffect)(()=>{try{localStorage.setItem("xsen-dev-chat",JSON.stringify(R))}catch{}},[R]),(0,a.useEffect)(()=>{try{localStorage.setItem("xsen-dev-logs",JSON.stringify(I))}catch{}},[I]);let j=(0,a.useRef)(null),T=(0,a.useRef)(null);(0,a.useEffect)(()=>{j.current?.scrollIntoView({behavior:"smooth"})},[R,S]),(0,a.useEffect)(()=>{T.current?.scrollIntoView({behavior:"smooth"})},[I]);let D=(0,a.useCallback)((e,t)=>{O(a=>[...a,{time:new Date().toLocaleTimeString(),type:e,message:t}])},[]),L=(0,a.useCallback)(e=>{let t=[],a=0;for(;;){let o="[ACTION:",l=e.indexOf(o,a);if(-1===l)break;let r=l+o.length,s=0,i=-1;for(let t=r;t<e.length;t++)if("{"===e[t])s++;else if("}"===e[t]&&0==--s){i=t+1;break}if(-1===i){a=r;continue}let d=e.slice(r,i);a=i;try{let e=JSON.parse(d),a="";switch(e.type){case"addRow":a=m(e.module,e.data||{}),D("success",a);break;case"deleteRow":a=p(e.module,e.id),D("success",a);break;case"updateRow":a=y(e.module,e.id,e.updates||{}),D("success",a);break;case"addColumn":a=b(e.module,e.column||{key:"new",label:"New"}),D("success",a);break;case"removeColumn":a=x(e.module,e.columnKey),D("success",a);break;case"addFilter":a=f(e.module,e.filter||{key:"new",label:"New"}),D("success",a);break;case"bulkUpdate":a=g(e.module,e.field,e.operation,e.value),D("success",a);break;case"addRelation":a=h(e.from,e.to,e.field,e.description||""),D("success",a);break;case"createModule":a=v(e.config),D("success",a);break;case"addMenuItem":a=w(e.moduleId,e.action),D("success",a);break;case"navigate":k(e.target),a=`Navigated to ${e.target}`,D("info",a);break;default:a=`Unknown action type: ${e.type}`,D("error",a)}t.push(a)}catch(a){let e=`Failed to parse action: ${d.slice(0,80)}...`;D("error",e),t.push(e),console.error(a)}}if(t.length>0){let t=null,a=0;for(;;){let o=e.indexOf("[ACTION:",a);if(-1===o)break;let l=o+8,r=0,s=-1;for(let t=l;t<e.length;t++)if("{"===e[t])r++;else if("}"===e[t]&&0==--r){s=t+1;break}if(-1===s)break;try{let a=JSON.parse(e.slice(l,s));if(a.module){t=a.module;break}if(a.config?.id){t=a.config.id;break}if(a.target){t=a.target;break}}catch{}a=s}if(t){let e=t;D("info",`→ ${e} mod\xfcl\xfcne y\xf6nlendiriliyor...`),setTimeout(()=>k(e),1500)}}return t},[m,p,y,b,x,f,g,h,k,v,w,D]),P=(0,a.useCallback)(async e=>{if(!e.trim())return;let t={role:"user",content:e};C(e=>[...e,t]),E(""),M(!0),D("info",`User: ${e.slice(0,80)}${e.length>80?"...":""}`);try{let t=[{role:"system",content:u[N]},...R.map(e=>({role:e.role,content:e.content})),{role:"user",content:e}],a=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:t,temperature:.3,max_tokens:1024})});if(!a.ok)throw Error(`Groq API error: ${a.status}`);let o=await a.json(),l=o.choices?.[0]?.message?.content||"No response",r={role:"assistant",content:l};C(e=>[...e,r]);let s=L(l);0===s.length&&D("info","AI responded (no actions)")}catch(t){let e=t instanceof Error?t.message:"Unknown error";D("error",`${c.errorPrefix}: ${e}`),C(t=>[...t,{role:"assistant",content:`${c.errorPrefix}: ${e}`}])}finally{M(!1)}},[R,N,L,D,c.errorPrefix]),q="tr"===e?[{label:n.tr.addRow,prompt:"BOM modülüne yeni bir test malzemesi satırı ekle"},{label:n.tr.addColumn,prompt:"Satış modülüne 'Kargo No' adında yeni bir kolon ekle"},{label:n.tr.addFilter,prompt:"İK modülüne departman filtresi ekle"},{label:n.tr.bulkUpdate,prompt:"Envanter modülündeki tüm miktarları %10 artır"},{label:n.tr.navigate,prompt:"BOM modülüne git"},{label:n.tr.createModule,prompt:"Müşteri şikayet takip modülü oluştur: şikayet no, müşteri adı, konu, açıklama, durum, öncelik, atanan kişi, tarih alanlarıyla"}]:"ru"===e?[{label:n.ru.addRow,prompt:"Добавить новую тестовую строку материала в модуль BOM"},{label:n.ru.addColumn,prompt:"Добавить колонку 'Номер груза' в модуль продаж"},{label:n.ru.addFilter,prompt:"Добавить фильтр по отделу в модуль HR"},{label:n.ru.bulkUpdate,prompt:"Увеличить все количества в инвентаре на 10%"},{label:n.ru.navigate,prompt:"Перейти к модулю BOM"},{label:n.ru.createModule,prompt:"Создай модуль отслеживания жалоб клиентов: номер жалобы, имя клиента, тема, описание, статус, приоритет, назначенный, дата"}]:[{label:n.en.addRow,prompt:"Add a new test material row to BOM module"},{label:n.en.addColumn,prompt:"Add a 'Cargo No' column to the sales module"},{label:n.en.addFilter,prompt:"Add a department filter to the HR module"},{label:n.en.bulkUpdate,prompt:"Increase all inventory quantities by 10%"},{label:n.en.navigate,prompt:"Navigate to BOM module"},{label:n.en.createModule,prompt:"Create a customer complaint tracking module with: complaint no, customer name, subject, description, status, priority, assignee, date fields"}];return(0,t.jsxs)("div",{className:"h-full flex flex-col bg-[#0d1117] text-gray-200 overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(r.Zap,{size:18,className:"text-green-400"}),(0,t.jsx)("span",{className:"font-semibold text-sm text-white",children:c.title})]}),(0,t.jsx)("span",{className:"text-[10px] bg-[#238636]/20 text-green-400 px-2 py-0.5 rounded-full border border-green-400/30",children:c.poweredBy})]}),(0,t.jsxs)("div",{className:"flex-1 flex overflow-hidden",children:[(0,t.jsxs)("div",{className:"w-[55%] flex flex-col border-r border-[#30363d]",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5 px-3 py-2 bg-[#161b22] border-b border-[#30363d]",children:q.map(e=>(0,t.jsx)("button",{onClick:()=>P(e.prompt),disabled:S,className:"text-[10px] px-2 py-1 bg-[#21262d] hover:bg-[#30363d] text-gray-300 rounded border border-[#30363d] transition-colors disabled:opacity-50 whitespace-nowrap",children:e.label},e.label))}),(0,t.jsxs)("div",{className:"flex-1 overflow-y-auto px-3 py-2 space-y-3",children:[0===R.length&&!S&&(0,t.jsx)("div",{className:"text-center text-gray-500 text-xs mt-8",children:c.welcome}),R.map((e,a)=>(0,t.jsx)("div",{className:`flex ${"user"===e.role?"justify-end":"justify-start"}`,children:(0,t.jsx)("div",{className:`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${"user"===e.role?"bg-[#1f6feb] text-white":"bg-[#21262d] text-gray-200 border border-[#30363d]"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap font-sans",children:e.content.replace(/\[ACTION:\{.*?\}\]/g,"").trim()})})},a)),S&&(0,t.jsx)("div",{className:"flex justify-start",children:(0,t.jsx)("div",{className:"bg-[#21262d] border border-[#30363d] rounded-lg px-3 py-2 text-xs text-gray-400",children:(0,t.jsx)("span",{className:"animate-pulse",children:c.thinking})})}),(0,t.jsx)("div",{ref:j})]}),(0,t.jsx)("form",{onSubmit:e=>{e.preventDefault(),P(A)},className:"px-3 py-2 border-t border-[#30363d] bg-[#161b22]",children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("input",{type:"text",value:A,onChange:e=>E(e.target.value),placeholder:c.placeholder,disabled:S,className:"flex-1 bg-[#0d1117] border border-[#30363d] rounded px-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#1f6feb] disabled:opacity-50"}),(0,t.jsxs)("button",{type:"submit",disabled:S||!A.trim(),className:"bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 text-white px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors",children:[(0,t.jsx)(o.Send,{size:12}),c.send]}),(0,t.jsx)("button",{type:"button",onClick:()=>{C([]),O([{time:new Date().toLocaleTimeString(),type:"info",message:c.welcome}]);try{localStorage.removeItem("xsen-dev-chat"),localStorage.removeItem("xsen-dev-logs")}catch{}},className:"bg-[#21262d] hover:bg-[#30363d] text-gray-400 px-2 py-1.5 rounded text-xs flex items-center gap-1 transition-colors border border-[#30363d]",children:(0,t.jsx)(l.Trash2,{size:12})})]})})]}),(0,t.jsxs)("div",{className:"w-[45%] flex flex-col",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-[#161b22] border-b border-[#30363d]",children:(0,t.jsx)("span",{className:"text-xs font-medium text-gray-400",children:c.executionLog})}),(0,t.jsxs)("div",{className:"flex-1 overflow-y-auto px-3 py-2 space-y-1 font-mono text-[11px]",children:[I.map((e,a)=>{let o="success"===e.type?"text-green-400":"error"===e.type?"text-red-400":"text-yellow-400";return(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)("span",{className:"text-gray-600 flex-shrink-0",children:["[",e.time,"]"]}),(0,t.jsx)("span",{className:o,children:e.message})]},a)}),(0,t.jsx)("div",{ref:T})]})]})]})]})}e.s(["default",()=>c])},64937,e=>{e.n(e.i(61105))}]);