window.QUESTION_POOL = [

/* ===== 1–10: Collections belsők ===== */
{level:"medior",q:"Mi a HashMap átlagos get() időkomplexitása?",a:["O(1)","O(log n)","O(n)"],c:0},
{level:"medior",q:"Miért kell az equals() és hashCode() együtt?",a:["GC miatt","Hash alapú lookup miatt","Rendezés miatt"],c:1},
{level:"medior",q:"Mi történik, ha equals() van, de hashCode() nincs felülírva?",a:["Fordítási hiba","Hibás működés HashMap-ben","Semmi"],c:1},
{level:"medior",q:"Mi a LinkedHashMap fő előnye?",a:["Gyorsabb","Beszúrási sorrend megtartása","Thread-safe"],c:1},
{level:"medior",q:"Mi a TreeMap alapja?",a:["Hash","Red-Black Tree","Heap"],c:1},
{level:"medior",q:"Mi a Set legfontosabb tulajdonsága?",a:["Indexelt","Egyedi elemek","Rendezett"],c:1},
{level:"medior",q:"Mi a ConcurrentHashMap célja?",a:["Rendezés","Thread-safe map","Gyors GC"],c:1},
{level:"medior",q:"Mi a CopyOnWriteArrayList hátránya?",a:["Olvasás lassú","Írás költséges","Nem thread-safe"],c:1},
{level:"medior",q:"Mi a fail-fast iterator?",a:["Másolaton dolgozik","Concurrent módosításra kivételt dob","Thread-safe"],c:1},
{level:"medior",q:"Mi a fail-safe iterator?",a:["Lockol","Másolaton iterál","Exception-t dob"],c:1},

/* ===== 11–20: Object, OOP ===== */
{level:"medior",q:"Mi az immutable objektum egyik fő előnye?",a:["Gyorsabb","Thread-safe","Kevesebb memória"],c:1},
{level:"medior",q:"Miért szükséges defensive copy immutable objektumoknál?",a:["GC","Belső állapot védelme","Thread"],c:1},
{level:"medior",q:"Mi a shallow copy?",a:["Teljes másolat","Referencia másolat","Immutable"],c:1},
{level:"medior",q:"Mi a deep copy?",a:["Referencia másolat","Teljes objektum másolat","GC"],c:1},
{level:"medior",q:"Miért veszélyes az instanceof túlhasználata?",a:["GC","Rosszul tervezett OOP","Thread"],c:1},
{level:"medior",q:"Miért hasznos az @Override annotáció?",a:["Gyorsít","Fordítási védelem","GC"],c:1},
{level:"medior",q:"Mi a covariant return type?",a:["Szélesebb típus","Szűkebb visszatérési típus","Thread"],c:1},
{level:"medior",q:"Mi történhet equals() szerződés megsértésekor?",a:["GC","Kollekció hibák","Thread deadlock"],c:1},
{level:"medior",q:"Mi a composition előnye inheritance-szel szemben?",a:["Gyorsabb","Rugalmasabb","Thread-safe"],c:1},
{level:"medior",q:"Mit ír le az LSP (Liskov Substitution Principle)?",a:["Típuscsere szabály","Öröklési szabály","Encapsulation"],c:0},

/* ===== 21–30: Exceptions ===== */
{level:"medior",q:"Mi a checked exception?",a:["Runtime","Fordításkor kötelező kezelni","Error"],c:1},
{level:"medior",q:"Mi a RuntimeException jellemzője?",a:["Checked","Unchecked","Error"],c:1},
{level:"medior",q:"Miért kerülendő a catch(Exception e)?",a:["GC","Eltakarja a konkrét hibákat","Thread"],c:1},
{level:"medior",q:"Mi a try-with-resources fő előnye?",a:["Gyorsabb","Automatikus erőforrás lezárás","Thread-safe"],c:1},
{level:"medior",q:"Mi történik, ha finally blokkban return van?",a:["Felülírja az előző return-t","Nem fut","Fordítási hiba"],c:0},
{level:"medior",q:"Mi a suppressed exception?",a:["Elveszik","Eltárolódik try-with-resources esetén","Thread"],c:1},
{level:"medior",q:"Miért nem ajánlott kivételt használni flow control-ra?",a:["GC","Teljesítmény okok","Thread"],c:1},
{level:"medior",q:"Mi az egyedi (custom) exception előnye?",a:["Gyorsabb","Jelentéssel bíró hibák","Thread-safe"],c:1},
{level:"medior",q:"Mi a stack trace előállításának költsége?",a:["CPU","Memória","Mindkettő"],c:2},
{level:"medior",q:"Miért rossz az üres catch blokk?",a:["GC","Hibák elnyelése","Thread"],c:1},

/* ===== 31–40: Stream API ===== */
{level:"medior",q:"Miért mondjuk, hogy a stream lazy?",a:["Azonnal fut","Terminális műveletig nem hajtódik végre","Thread-függő"],c:1},
{level:"medior",q:"Mi a map() művelet?",a:["Szűrés","Átalakítás","Gyűjtés"],c:1},
{level:"medior",q:"Mi a filter() célja?",a:["Átalakít","Szűr","Aggregál"],c:1},
{level:"medior",q:"Mi a collect()?",a:["Köztes","Terminális","Thread"],c:1},
{level:"medior",q:"Mi a reduce() szerepe?",a:["Rendez","Aggregál","Szűr"],c:1},
{level:"medior",q:"Miért veszélyes mutable state stream-ben?",a:["GC","Race condition","Deadlock"],c:1},
{level:"medior",q:"Mi történik parallelStream használatakor?",a:["Új threadek","ForkJoinPool használata","ExecutorService"],c:1},
{level:"medior",q:"Mi a forEachOrdered célja?",a:["Gyorsabb","Sorrend megtartása","Thread-safe"],c:1},
{level:"medior",q:"Mi a short-circuit művelet?",a:["Teljes bejárás","Korai kilépés","Thread"],c:1},
{level:"medior",q:"Mi az Optional célja?",a:["Gyorsítás","NullPointerException elkerülése","Thread"],c:1},

/* ===== 41–50: Concurrency ===== */
{level:"medior",q:"Mi a synchronized fő célja?",a:["Gyorsítás","Thread safety","GC"],c:1},
{level:"medior",q:"Mi a monitor lock?",a:["CPU lock","Objektumhoz tartozó lock","Thread"],c:1},
{level:"medior",q:"Mi a race condition?",a:["Deadlock","Párhuzamos adatütközés","GC"],c:1},
{level:"medior",q:"Mi a volatile fő hatása?",a:["Atomicitás","Visibility biztosítása","Lockolás"],c:1},
{level:"medior",q:"Mit jelent a happens-before kapcsolat?",a:["Ordering","Láthatósági szabály","GC"],c:1},
{level:"medior",q:"Mi a ThreadLocal célja?",a:["Globális változó","Thread-specifikus adat","GC"],c:1},
{level:"medior",q:"Mi a deadlock?",a:["CPU túlterhelés","Kölcsönös lock várakozás","Starvation"],c:1},
{level:"medior",q:"Mi a starvation?",a:["Deadlock","Thread nem jut erőforráshoz","GC"],c:1},
{level:"medior",q:"Mi a Future.get() hátránya?",a:["Nem fut","Blokkoló hívás","Exception"],c:1},
{level:"medior",q:"Mi a ExecutorService célja?",a:["Thread pool kezelés","GC","Lock"],c:0},

/* ===== 51–60: JVM alapok ===== */
{level:"medior",q:"Mi a heap szerepe?",a:["Stack","Objektumok tárolása","Thread memória"],c:1},
{level:"medior",q:"Mi a stack szerepe?",a:["Objektum tárolás","Metódus hívások","Class metadata"],c:1},
{level:"medior",q:"Mi az OutOfMemoryError?",a:["Exception","Memória kimerülés","Figyelmeztetés"],c:1},
{level:"medior",q:"Mi a GC fő célja?",a:["Gyorsítás","Memória felszabadítás","Thread leállítás"],c:1},
{level:"medior",q:"Mit jelent a Stop-The-World?",a:["CPU pause","Alkalmazás threadek megállnak","Heap pause"],c:1},
{level:"medior",q:"Mi a classloader feladata?",a:["Thread","Osztályok betöltése","GC"],c:1},
{level:"medior",q:"Mi a Metaspace?",a:["Heap","Class metadata","Stack"],c:1},
{level:"medior",q:"Mi a bytecode?",a:["Forráskód","JVM által futtatott kód","Gépi kód"],c:1},
{level:"medior",q:"Mi a JIT compiler célja?",a:["Fordítás","Runtime optimalizálás","GC"],c:1},
{level:"medior",q:"Mi a warm-up fázis jelentősége?",a:["GC","JIT optimalizálás","Thread start"],c:1},

/* ===== 61–70: Spring alapok ===== */
{level:"medior",q:"Mi a Spring Bean?",a:["Osztály","Spring által kezelt objektum","Thread"],c:1},
{level:"medior",q:"Mi a default bean scope?",a:["prototype","singleton","request"],c:1},
{level:"medior",q:"Mi a dependency injection lényege?",a:["Új példány","Függőség beadása","GC"],c:1},
{level:"medior",q:"Mi a @Autowired szerepe?",a:["GC","Bean injektálás","Thread"],c:1},
{level:"medior",q:"Mi a @Component annotáció?",a:["Konfiguráció","Bean jelölés","Thread"],c:1},
{level:"medior",q:"Mi a @Configuration szerepe?",a:["Bean","Konfigurációs osztály","Thread"],c:1},
{level:"medior",q:"Mi a @Bean annotáció?",a:["Osztály","Bean factory metódus","Thread"],c:1},
{level:"medior",q:"Mi a @Profile célja?",a:["GC","Környezeti feltétel","Thread"],c:1},
{level:"medior",q:"Mi a @Value annotáció?",a:["Inject","Konfiguráció érték beolvasás","Thread"],c:1},
{level:"medior",q:"Mi a @Primary szerepe?",a:["GC","Preferált bean kijelölése","Thread"],c:1},

/* ===== 71–80: Tranzakciók & SQL ===== */
{level:"medior",q:"Mi a @Transactional célja?",a:["GC","Tranzakció kezelés","Thread"],c:1},
{level:"medior",q:"Mit jelent az ACID?",a:["Cache elvek","Tranzakciós tulajdonságok","GC"],c:1},
{level:"medior",q:"Mi a rollback?",a:["Commit","Visszagörgetés","Lock"],c:1},
{level:"medior",q:"Mi a commit?",a:["Visszavon","Véglegesít","Thread"],c:1},
{level:"medior",q:"Mi a dirty read?",a:["Olvasás","Nem commitált adat olvasása","GC"],c:1},
{level:"medior",q:"Mi az isolation szintek célja?",a:["GC","Párhuzamos tranzakciók kezelése","Thread"],c:1},
{level:"medior",q:"Mi az alapértelmezett isolation szint?",a:["READ_UNCOMMITTED","READ_COMMITTED","SERIALIZABLE"],c:1},
{level:"medior",q:"Mi az N+1 probléma?",a:["GC","Sok felesleges SQL lekérdezés","Thread"],c:1},
{level:"medior",q:"Mi a lazy loading?",a:["Azonnali","Késleltetett betöltés","Thread"],c:1},
{level:"medior",q:"Mi az eager loading?",a:["Késleltetett","Azonnali betöltés","Thread"],c:1},

/* ===== 81–100: REST, architektúra ===== */
{level:"medior",q:"Mi a REST?",a:["Protokoll","Architektúra stílus","Framework"],c:1},
{level:"medior",q:"Mi a stateless szerver előnye?",a:["Gyors","Jobban skálázható","Thread-safe"],c:1},
{level:"medior",q:"Mi a DTO célja?",a:["GC","Adatok továbbítása","Thread"],c:1},
{level:"medior",q:"Mi a mapper szerepe?",a:["GC","Objektum átalakítás","Thread"],c:1},
{level:"medior",q:"Mi az idempotens művelet?",a:["Egyszer fut","Azonos eredmény többször","Rollback"],c:1},
{level:"medior",q:"Mi a pagination célja?",a:["GC","Nagy adathalmaz darabolása","Thread"],c:1},
{level:"medior",q:"Mi a cache-elés fő előnye?",a:["GC","Teljesítmény növelés","Thread"],c:1},
{level:"medior",q:"Mi a HTTP GET jellemzője?",a:["Állapotot módosít","Idempotens","Nem cache-elhető"],c:1},
{level:"medior",q:"Mi a HTTP POST jellemzője?",a:["Idempotens","Állapotot módosít","Cache"],c:1},
{level:"medior",q:"Mi a logolás elsődleges célja?",a:["GC","Diagnosztika","Thread"],c:1}

];
