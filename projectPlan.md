## HBV403G Vefforritun 2 - Einstaklingsverkefni
# Vefþjónusta fyrir Kröfugreiningu Hugbúnaðarverkefna

### Um Hugbúnaðinn
Þessi vefþjónusta er ætluð að safna saman, geyma, og tengja saman allt er kemur að kröfugreiningu hugbúnaðarverkefna. Hægt verður meðal annars að:
 * Skilgreina ýmsar kröfur verkefna á borð við viðskipta-, notenda-, virkni- og gæðakröfur.
 * Skilgreina hagsmunaaðila.
 * Útbúa Use Cases og SRS skjal.

Eftirfarandi verður tryggt:
 * Hver krafa fær einstakt, læsilegt auðkenni sem hægt verður að benda á annars staðar.
 * Eldri útgáfur verða geymdar svo hægt sé að afturkalla breytingar.

 Farið verður eftir bestu venjum er kemur að kröfugreiningu eins og sett er fram í [Software Requirements, 3rd ed. eftir Karl Wiegers og Joy Beatty, gefin út af Microsoft Press](https://www.processimpact.com/pubs.html#SR3E).

### Fyrsta útgáfa (Einstaklingsverkefni)
Fyrsta útgáfa mun leyfa notendum að búa til Use Cases fyrir sín hubúnaðarverkefni, og það felur í sér að gera notendum kleift að:
 * Skilgreina ýmis formatriði á borð við nafn, dagsetningu, megin notanda og auka notendur, lýsingu, forgang, tíðni, aðrar upplýsingar og ályktanir.
 * Skilgreina forkröfur og eftirskilyrði sem hægt verður að vitna í.
 * Setja fram venjulegt flæði, önnur flæði og undantekningar, þar sem hægt verður að vitna í einstök skref.
 * Tengja viðskiptareglur sem eiga við.

 Til þess að útfæra þetta þarf:
 - Vefþjónusta (REST).
 - Framendi útfærður (með template máli eða framenda framework).
 - Gagnagrunnur (SQL).
 - Hönnunarskjöl útfærð (UML rit).

 ### Skýrsla
 Skýrslan verður skrifuð í LaTeX. Hægt er að skoða `.tex` skjalið [hér](report/ProjectReport.tex), eða `.pdf` útgáfu [hér](report/ProjectReport.pdf).

 ### Verkáætlun
 Reynt verður að vinna verkefnið jafnt og þétt yfir önnina, en líklegt er að áætlanir riðlist til vegna ófyrirsjáanlegra þátta í öðrum áföngum. Eftirfarandi áætlun er birt með fyrirvara um breytingar:
| Vika | Áætluð vinna               |
|------|----------------------------|
| 6    | Grunnur fyrir bakenda      |
| 7    | UML klasarit               |
| 8    | Gagnagrunnur og schema     |
| 9    | Formsatriði fyrir Use Case |
| 10   | Einfaldur framendi         |
| 11   | Forkröfur og eftirskilyrði |
| 12   | Flæði                      |
| 13   | Lagfæringar                |

Lítil reynsla er í ýmsu sem gert verður í þessu verkefni, að minnsta kosti í þessu umhverfi, og því getur margt reynst vera flókið í útfærslu, en líklegt er að erfiðast verði að útfæra UML klasarit fyrir bakenda og tengingar á milli flæða og krafna. Hýsa ætti verkefnið sem fyrst, og það uppfært jafnóðum. Skýrslan verður skrifuð samhliða verkefnavinnunni. Verkefnið verður ekki kynnt.

### Matskvarði
| Hluti | Virkni                                            |
|-------|---------------------------------------------------|
| 10%   | UML klasarit                                      |
| 15%   | Fylla inn formsatriði fyrir Use Case              |
| 20%   | Skilgreina og vitna í forkröfur og eftirskilyrði  |
| 25%   | Setja upp flæði og vitna í þau                    |
| 10%   | Framendi útfærður                                 |
| 15%   | Skilgreina og vitna í viðskiptareglur og notendur |
| 5%    | Hýsing                                            |
