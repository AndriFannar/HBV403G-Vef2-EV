## HBV403G Vefforritun 2 - Einstaklingsverkefni
# Kröfuumsjónarkerfi fyrir Hugbúnaðarverkefni
#### Requirements Management System for Software Projects

## Um Bakendann
Bakendi fyrir Umsjónarkerfi fyrir Hugbúnaðarverkefni. Notar Hono til að útfæra REST-ful API, Prisma til að geyma gögn og Cloudinary til að geyma myndir. 
* Hugbúnaðurinn í heild → [Kröfuumsjónarkerfi](../README.md).
* Framendi → [Framendi](../frontend/README.md).

## Hýsing
Bakendinn er í ókeypis hýsingu hjá Render, og hægt er að nálgast hann hér: [API](https://hbv403g-vef2-ev2-pls.onrender.com).

## Hönnunarskjöl
Hönnun eininda í bakenda → [Hönnunarskjöl](designDocs/design.md).

## Uppsetning
Verkefnið krefst `Node.js` útgáfu 22. Hægt er að setja upp verkefnið með því að gera (verið viss um að þið séuð í `backend` möppunni):
```bash
npm ci
```
Til að smíða bakendann þarf svo að keyra:
```bash
npm run build
```

## Keyrsla
Til að keyra upp bakendann eftir að hann hefur verið smíðaður þarf að keyra:
```bash
npm run start
```

Þýddu skrárnar má finna í [build](build/) möppunni.

## Prófanir
Prófanirnar notast við Vitest útgáfu 3.
Til þess að keyra prófanir þarf að gera 
```bash
npm run test
```
Einnig er hægt að sjá `coverage` með því að gera
```bash
npm run coverage
```
