# Vefforritun 2, 2025, einstaklingsverkefni

## Lýsing

Verkefnið er þríþætt:

1. Fyrri skil þar sem verkefnið er skilgreint; grunnur lagður að verkefni og skýrslu; og ákveðið hvort verkefni verði kynnt. Gildir 5% af lokaeinkunn.
2. Full skil á verkefni og skýrsla sem þið vinnið sjálf. Gildir 10% af lokaeinkunn.
3. Valkvæm kynning á verkefni. Gildir 10% af lokaeinkunn, til upphækkunnar.

Ætlast er til að öll vinni og skili verkefni (fyrri og full skil) og skýrslu.

### Verkefni

Verkefnið er unnið kringum valið efni og er í formi forrits eða viðmóts sem unnið er frá grunni.

Skilyrði er að verkefnið nýti að minnsta kosti þrennt af eftirfarandi:

- Bakendi útfærður.
- Vefþjónusta (REST eða GraphQL) útfærð.
- Framendi útfærður (með template máli eða framenda framework).
- Flóknari framendi útfærður (t.d. nýleg virkni í CSS eða flókin kvikun)
- Einhversskonar próf skrifuð sem skipta máli.
- Notendaumsjón útfærð.
- Gagnagrunnur (SQL eða NoSQL) notað.
- Hönnunarskjöl útfærð (Figma, UML rit eða álíka) og kynnt í skýrslu.
- Greining á verkefni unnin fyrirfram t.d. ef verkefnið er stærra en það sem formast innan þessa verkefnis (t.d. tímalínur, niðurbrot á verkþáttum) og kynnt í skýrslu.
- Verkefni sem notar annað umhverfi en Node.js.
- Verkefni sett upp í hýsingu með CI/CD ferlum (continuous integration, continuous deployment)

Það skal klára verkefnið á einhvern hátt, t.d. komin útfærsla sem er keyrandi og hægt að heimsækja á vefnum; eða búið er að klára greiningu að einhverju leiti og skilgreina næstu skref.

### Skýrsla

Skýrslan er skjölun á því hvað var gert og hvernig það gekk; hvernig viðfangsefni tengist vefforritun; hvaða skilyrði voru valin og hvernig þau voru uppfyllt.

Form skýrslur skal annaðhvort vera Markdown skjöl í repo (`readme.md` og hugsanlega fleiri skrár) eða sem PDF skjal. Í skýrslu skal taka fram (þetta gætu verið kaflaheiti):

- **Inngangur**, hvaðan kom hugmynd.
- **Útfærsla**, hvaða skilyrði eru uppfyllt og afhverju.
- **Tækni**, hvaða tækni er notuð og afhverju.
- **Hvað gekk vel**.
- **Hvað gekk illa**.
- **Hvað var áhugavert**.

Ekki er krafa um ákveðin blaðsíðufjölda en skýrslan skal uppfylla það sem ætlast er til á skýran hátt.

Skrifa má skýrsluna á íslensku eða ensku.

### Fyrri skil

Skila skal:

- Hvaða skilyrði verði útfærð og hvaða efnistök.
- Grunn að skýrslu, t.d. búið að skrifa inngang og fyrstu drög að kafla um útfærslu og tækni.
- Hvort verkefni verði kynnt, skráning á kynningu.
- Verkplani.
- Matskvarði fyrir verkefnið.

Verkplan skal taka fram hvenær og hvernig verkefnið verði unnið í vikum 6.–13. T.d. gæti verkplan tiltekið:

- Í hvaða vikum verkefnið helst unnið, eftir að tekið hefur verið tillit til annara námskeiða.
- Hvaða hlutar verkefnis gætu verið flóknari en aðrir.
- Hvenær farið verði í að setja verkefnið upp í hýsingu.
- Hvenær skýrsla verði skrifuð.

Fyrir matskvarða skal nemandi skilgreina _hvernig verkefnið verður dæmt að hluta í lokin_. Það er tengt við bæði efnistök og plan, t.d.:

- Ef verkefnið snýst um að skrifa REST API fyrir virkni `foo` og `bar` með prófum, sett upp í hýsingu:
  - 20% Útfærsla á `foo` sem les gögn.
  - 20% Útfærsla á `bar` sem les og leyfir að breyta, eyða og eyða gögnum.
  - 20% Einingaprófanir á `foo` og `bar`.
  - 20% Samþættingarprófanir (integration test) á `foo` og `bar`.
  - 20% Vefþjónusta sett upp í hýsingu.
- Ef verkefnið snýst um að rannsaka Deno sem forritunarumhverfi, byggja vef (framenda og bakenda) og setja það upp í hýsingu:
  - 40% Rannsókn á Deno sem forritunarumhverfi og lýsing á því í skýrslu með efni áfangans til samanburðar.
  - 30% Uppsetning á bakenda og framenda.
  - 30% Uppsetning á verkefni í hýsingu.
- Ef verkefnið snýst um að nota Figma til að útbúa hönnun á vef, setja upp framenda með nýlegri CSS virkni og nota Framer kvikunarforritasafnið til að setja upp kvikun:
  - 30% Hönnun á vef í Figma.
  - 40% Útfærsla á vef með nýlegri CSS virkni.
  - 30% Útfæra kvikun með Framer.

### Kynning

Skila þarf verkefni og skýrslu _fyrir_ kynningu til að geta fengið fulla einkunn.

Kynning fer fram í mánudags eða miðvikudagstíma fyrir framan kennara og aðra nemendur. Kynning fer yfir það sem kemur fram í skýrslu og sýnir dæmi úr forriti.

Lengd skal vera um 10 mínútur, hámark 15 mínútur.

Eftir kynningu þarf að svara óundirbúnum spurningum frá kennara.

## Hugmyndir um efnistök

Verkefnið er viljandi opið, þið megið gera hérumbil hvað sem er svo lengi sem það hefur _einhverja_ tengingu við vefforritun (þarf ekki einu sinni að vera tengt við neitt sem við gerum í vor!)

Til dæmis:

- Vefforritun í öðru forritunarmáli/forritunarumhverfi, t.d. Ruby on Rails, .NET, PHP.
- Önnur framendaframework, t.d. Svelte, Vue.
- Önnur „meta“ framework, t.d. SvelteKit, Nuxt.
- Notkun á öðrum gagnagrunnum, SQL eða NoSQL, t.d. MySQL, SQLite, MongoDB.
- App útfærsla með t.d. React Native eða Flutter.
- Desktop útfærsla með t.d. Electron eða Tauri.
- Notkun á kvikun gegnum library, t.d. GSAP eða Motion.
- Útfærsla á verkefni með Web Components.
- Notkun á „[local first](https://www.inkandswitch.com/local-first/)“ útfærslum.
- Önnur hýsing, t.d. Cloudflare, AWS eða Google Cloud.
- Útfærsla á verkefni í formi vefforrits:
  - Einhver „viðskiptahugmynd“, getur verið í formi „proof of concept“.
  - Þinn eigin vefur/blog.
  - Vefur um efni/áhugamál.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri miðvikudaginn 23. janúar 2025.

## Skil

Fyrri skil eru í seinasta lagi fimmtudaginn 13. febrúar 2025.

Skil á fullkláruðu verkefni í seinasta lagi fimmtudaginn 10. apríl 2025.

Skil skulu innihalda:

- Slóð á verkefni keyrandi á hýsingu, ef við á.
- Slóð á GitHub repo fyrir verkefni, bjóða skal `osk` í repo.
- Skýrslu.

### Skil á kynningu

Skila skal kynningu á Canvas í seinasta lagi _daginn fyrir_ kynningu.

Kynningar fara fram í fyrirlestrartímum:

- mánudaginn 31. mars 2025.
- miðvikudaginn 2. apríl 2025.
- mánudaginn 7. apríl 2025.
- miðvikudaginn 9. apríl 2025.

Skráning á þær er sérstaklega tiltekin í verkefnalýsingu á Canvas.

## Mat

- Fyrri skil
  - 40% Matskvarði skilgreindur.
  - 30% Tímaplan.
  - 20% Grunnur að skýrslu.
  - 10% Afstaða til kynningar og skráning ef við á.
- Verkefni og skýrsla:
  - 30% Efnistök og tenging við vefforritun, útfærsla og skilyrði uppfyllt.
  - 30% Skýrsla.
  - 40% Mat á verkefni samkvæmt matskvarða nemenda.
- Kynning
  - 10% Kynning virðir tímamörk.
  - 20% Uppsetning, glærur, forritunardæmi.
  - 40% Kynningin skýr og auðvelt að fylgja eftir.
  - 30% Svör við óundirbúnum spurningum.

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
