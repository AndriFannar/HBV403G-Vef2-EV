## HBV403G Vefforritun 2 - Einstaklingsverkefni
# Kröfuumsjónarkerfi fyrir Hugbúnaðarverkefni
### Requirements Management System for Software Projects

## Um Bakendann
Einstaklingsverkefnið í HBV403G Vefforritun 2, þar sem ákveðið var að búa til bakenda sem sér um að skrásetja kröfur ( aðiens Use Cases hingað til) verkefna. Notar Hono til að útfæra REST-ful API, notar Prisma til að geyma gögn og Cloudinary til að geyma myndir. 
* Nánari lýsing um hugbúnaðinn í heild má finna [hér](../README.md).
* Upplýsingar um framendann má finna [hér](../frontend/README.md).

## Hýsing
API má finna [hér](https://hbv403g-vef2-ev2-pls.onrender.com).

## Hönnun
Hægt er að skoða hönnun forritsins [hér](designDocs/Design.png)

## Uppsetning
Verkefnið krefst `Node.js` útgáfu 22.
Hægt er að setja upp verkefnið með því að gera 
```bash
npm ci
npm run build
```

### Keyrsla
Til þess að keyra verkefnið þarf að gera
```bash
npm run start
```

Þýddu skrárnar má finna í [build](build/) möppunni.

### Prófanir
Prófanirnar notast við Vitest útgáfu 3.
Til þess að keyra prófanir þarf að gera 
```bash
npm run test
```
Einnig er hægt að sjá `coverage` með því að gera
```bash
npm run coverage
```
