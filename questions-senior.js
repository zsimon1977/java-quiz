window.QUESTION_POOL = [

/* ===== 1–10: Java Memory Model ===== */
{level:"senior",q:"Mi a Java Memory Model (JMM) célja?",a:["GC optimalizálás","Threadek közti láthatóság és ordering szabályozása","Heap méret kezelése"],c:1},
{level:"senior",q:"Mit jelent a happens-before kapcsolat?",a:["Lock sorrend","Láthatósági garancia műveletek között","Class betöltési sorrend"],c:1},
{level:"senior",q:"Mit NEM garantál a volatile?",a:["Visibility","Atomicitás","Ordering"],c:1},
{level:"senior",q:"Mire NEM alkalmas önmagában a volatile?",a:["Visibility","Atomic műveletek","Ordering"],c:1},
{level:"senior",q:"Mi történik synchronized blokk belépésekor?",a:["GC fut","Memory barrier kerül be","Thread priority változik"],c:1},
{level:"senior",q:"Mi a memory visibility probléma oka?",a:["GC","CPU cache incoherencia","Heap fragmentáció"],c:1},
{level:"senior",q:"Mi az instruction reordering?",a:["Fordítási hiba","CPU/JIT optimalizálás","GC algoritmus"],c:1},
{level:"senior",q:"Mi a stack frame tartalma?",a:["Objektumok","Lokális változók és operand stack","Class metadata"],c:1},
{level:"senior",q:"Mi a safepoint?",a:["Thread váltási pont","Olyan pont, ahol a JVM megállíthatja a threadeket","GC thread"],c:1},
{level:"senior",q:"Mi az escape analysis célja?",a:["Lock eltávolítás","Stack allocation lehetősége","Inlining"],c:1},

/* ===== 11–20: Garbage Collection ===== */
{level:"senior",q:"Mi a Stop-The-World GC?",a:["Heap tisztítás","Minden alkalmazás thread leáll","CPU pause"],c:1},
{level:"senior",q:"Mi a Young Generation fő célja?",a:["Hosszú életű objektumok","Rövid életű objektumok kezelése","Class metadata"],c:1},
{level:"senior",q:"Mi a Survivor space szerepe?",a:["Objektum tárolás","Objektumok életkorának mérése","Fragmentáció csökkentés"],c:1},
{level:"senior",q:"Mi az Old Generation jellemzője?",a:["Gyakori GC","Hosszú életű objektumok","Thread stack"],c:1},
{level:"senior",q:"Mi a Full GC hatása?",a:["Csak young GC","Teljes heap scan és hosszú pause","Csak metadata tisztítás"],c:1},
{level:"senior",q:"Mi a CMS GC fő célja?",a:["Max throughput","Alacsony latency","Single-thread futás"],c:1},
{level:"senior",q:"Mi a G1 GC alapelve?",a:["Generációs only","Region alapú heap","Stack alapú"],c:1},
{level:"senior",q:"Mi a GC root?",a:["Heap objektum","Elérhető referenciák kezdőpontja","Class fájl"],c:1},
{level:"senior",q:"Mi történik memory leak esetén Java-ban?",a:["GC nem fut","Objektumok elérhetőek maradnak","Stack overflow"],c:1},
{level:"senior",q:"Miért problémás a finalize() használata?",a:["Gyors","Nem determinisztikus","Thread-safe"],c:1},

/* ===== 21–30: Collections internals ===== */
{level:"senior",q:"Mi a HashMap get() átlagos időkomplexitása?",a:["O(1)","O(log n)","O(n)"],c:0},
{level:"senior",q:"Mi történik HashMap collision esetén Java 8-tól?",a:["LinkedList marad","Red-Black Tree-re vált","Rehash"],c:1},
{level:"senior",q:"Mikor alakul át egy bucket fává HashMap-ben?",a:[">=4 elem",">=8 elem",">=16 elem"],c:1},
{level:"senior",q:"Miért fontos az equals() / hashCode() szerződés?",a:["GC","Hash alapú lookup helyessége","Ordering"],c:1},
{level:"senior",q:"Mi a ConcurrentHashMap lock stratégiája Java 8-tól?",a:["Global lock","Segment lock","Finom-granulált lockolás"],c:2},
{level:"senior",q:"Mi a CopyOnWriteArrayList fő hátránya?",a:["Nem thread-safe","Írási műveletek drágák","Olvasás lassú"],c:1},
{level:"senior",q:"Mi a TreeMap belső adatstruktúrája?",a:["Hash","Red-Black Tree","B-Tree"],c:1},
{level:"senior",q:"Miért nem thread-safe az ArrayList?",a:["GC","Race condition lehet","Ordering"],c:1},
{level:"senior",q:"Mi a fail-fast iterator viselkedése?",a:["Thread-safe","Concurrent módosításnál kivételt dob","Másolaton dolgozik"],c:1},
{level:"senior",q:"Mi a fail-safe iterator jellemzője?",a:["Lockol","Másolaton iterál","Exception-t dob"],c:1},

/* ===== 31–40: Concurrency advanced ===== */
{level:"senior",q:"Mi a deadlock?",a:["CPU túlterhelés","Kölcsönös lock várakozás","Starvation"],c:1},
{level:"senior",q:"Mi a starvation?",a:["Deadlock","Thread nem jut erőforráshoz","GC"],c:1},
{level:"senior",q:"Mi a livelock?",a:["Blokkolás","Aktív, de nincs előrehaladás","GC"],c:1},
{level:"senior",q:"Mi a ForkJoinPool célja?",a:["IO-bound","CPU-bound feladatok","Thread lifecycle"],c:1},
{level:"senior",q:"Mi a work-stealing algoritmus?",a:["Lock csere","Task újraosztás idle threadekhez","GC optimalizálás"],c:1},
{level:"senior",q:"Mi a ThreadLocal fő veszélye?",a:["Deadlock","Memory leak","Race condition"],c:1},
{level:"senior",q:"Mi a CompletableFuture előnye?",a:["Blokkoló","Aszinkron pipeline","Thread-safe"],c:1},
{level:"senior",q:"Mi a Future.get() problémája?",a:["Nem fut","Blokkol","Exception dob"],c:1},
{level:"senior",q:"Mi az atomic művelet?",a:["Osztott","Megszakíthatatlan","Thread-local"],c:1},
{level:"senior",q:"Mi a CAS (Compare-And-Swap)?",a:["Lock","Lock-free atomikus művelet","GC algoritmus"],c:1},

/* ===== 41–50: Stream API advanced ===== */
{level:"senior",q:"Miért veszélyes side-effect-et használni stream-ben?",a:["GC","Nem determinisztikus eredmény","Fordítási hiba"],c:1},
{level:"senior",q:"Mi történik parallelStream esetén?",a:["Új threadek","ForkJoinPool használata","ExecutorService"],c:1},
{level:"senior",q:"Mi a stream lazy jellege?",a:["Azonnal fut","Terminális műveletig nem fut","Thread-függő"],c:1},
{level:"senior",q:"Mi a spliterator szerepe?",a:["Iterator","Partícionált bejárás","Thread"],c:1},
{level:"senior",q:"Mi a reduce() tipikus használata?",a:["Szűrés","Aggregálás","Rendezés"],c:1},
{level:"senior",q:"Miért nem garantált a sorrend parallelStream-nél?",a:["GC","Thread scheduling","Ordering hiánya"],c:2},
{level:"senior",q:"Mi a flatMap() célja?",a:["Rendez","Lapít","Szűr"],c:1},
{level:"senior",q:"Mi a collector szerepe?",a:["Köztes","Terminális","Thread"],c:1},
{level:"senior",q:"Mi a boxing/unboxing költsége?",a:["GC","Heap allokáció","CPU lock"],c:1},
{level:"senior",q:"Miért veszélyes mutable objektum parallel stream-ben?",a:["GC","Race condition","Deadlock"],c:1},

/* ===== 51–60: Spring & proxy ===== */
{level:"senior",q:"Mi a Spring AOP alapja?",a:["Inheritance","Proxy","Bytecode weaving"],c:1},
{level:"senior",q:"Miért nem működik self-invocation @Transactional esetén?",a:["GC","Proxy megkerülése","Thread"],c:1},
{level:"senior",q:"Mi a JDK proxy feltétele?",a:["Osztály","Interface megléte","Abstract osztály"],c:1},
{level:"senior",q:"Mikor használ Spring CGLIB proxyt?",a:["Interface van","Nincs interface","Mindig"],c:1},
{level:"senior",q:"Mi az alapértelmezett rollback szabály @Transactional-nál?",a:["Minden exception","RuntimeException","Checked"],c:1},
{level:"senior",q:"Mi a propagation REQUIRED jelentése?",a:["Új tranzakció","Meglévőhöz csatlakozik","Független"],c:1},
{level:"senior",q:"Mi a lazy bean betöltés?",a:["Startup","Első használatkor","GC után"],c:1},
{level:"senior",q:"Mi okozhat circular dependency-t?",a:["GC","Bean graph ciklus","Thread"],c:1},
{level:"senior",q:"Mi a singleton scope jelentése Spring-ben?",a:["Egy thread","Egy JVM","Egy request"],c:1},
{level:"senior",q:"Mi a prototype scope?",a:["Egy példány","Minden injection új","Thread-local"],c:1},

/* ===== 61–70: Performance ===== */
{level:"senior",q:"Mi a false sharing?",a:["GC hiba","Cache line ütközés","Deadlock"],c:1},
{level:"senior",q:"Mi a CPU cache line?",a:["Memória blokk","Register","Heap region"],c:0},
{level:"senior",q:"Mi a branch prediction?",a:["CPU optimalizálás","GC","Thread scheduling"],c:0},
{level:"senior",q:"Mi a boxing overhead oka?",a:["CPU","Heap allokáció","Lock"],c:1},
{level:"senior",q:"Mi a throughput definíciója?",a:["Latency","Egységnyi idő alatti feldolgozás","GC idő"],c:1},
{level:"senior",q:"Mi a latency?",a:["Átbocsátás","Válaszidő","Heap méret"],c:1},
{level:"senior",q:"Miért gyorsabb a primitive használata?",a:["Nincs GC","Kevesebb allokáció","Thread-safe"],c:1},
{level:"senior",q:"Miért fontos a warm-up mérés előtt?",a:["GC","JIT optimalizáció","Thread start"],c:1},
{level:"senior",q:"Mi a profiling célja?",a:["GC futtatás","Bottleneck azonosítás","Thread stop"],c:1},
{level:"senior",q:"Miért veszélyes a microbenchmark?",a:["Pontatlan mérés","GC crash","Thread deadlock"],c:0},

/* ===== 71–80: Advanced concurrency ===== */
{level:"senior",q:"Mi a lock-free algoritmus előnye?",a:["Egyszerű","Jobb skálázhatóság","Determinista"],c:1},
{level:"senior",q:"Mi az ABA probléma?",a:["GC","CAS algoritmus hibája","Deadlock"],c:1},
{level:"senior",q:"Mi a spinlock?",a:["Alvó lock","Aktív várakozás","GC"],c:1},
{level:"senior",q:"Mi a backpressure célja?",a:["CPU","Túlterhelés kezelése","GC"],c:1},
{level:"senior",q:"Mi a reactive programozás lényege?",a:["Thread","Aszinkron adatfolyam","GC"],c:1},
{level:"senior",q:"Mi a scheduler szerepe reactive rendszerekben?",a:["Task ütemezés","GC","Lock"],c:0},
{level:"senior",q:"Mi a VarHandle célja?",a:["Lock","Low-level concurrency API","GC"],c:1},
{level:"senior",q:"Mi a sun.misc.Unsafe veszélye?",a:["Thread","JVM crash lehetősége","GC leak"],c:1},
{level:"senior",q:"Miért nehéz helyesen lockolni?",a:["GC","Ordering és deadlock kockázat","Thread"],c:1},
{level:"senior",q:"Mi a memory fence?",a:["GC","CPU/JVM ordering gát","Thread"],c:1},

/* ===== 81–100: Architektúra, edge case ===== */
{level:"senior",q:"Mi történik OutOfMemoryError után?",a:["Program folytatódik","Instabil állapot","Automatikus restart"],c:1},
{level:"senior",q:"Mi a Metaspace szerepe?",a:["Heap","Class metadata","Stack"],c:1},
{level:"senior",q:"Mi a classloader delegáció elve?",a:["Child-first","Parent-first","Random"],c:1},
{level:"senior",q:"Mi a shaded dependency fő veszélye?",a:["GC","Class conflict","Thread"],c:1},
{level:"senior",q:"Mi a fat jar egyik hátránya?",a:["Méret","Class loading","Mindkettő"],c:2},
{level:"senior",q:"Mi az idempotens művelet?",a:["Egyszer fut","Azonos eredmény többször","Rollback"],c:1},
{level:"senior",q:"Mi a eventual consistency?",a:["ACID","Idővel konzisztens állapot","Strong consistency"],c:1},
{level:"senior",q:"Mi a CAP tétel lényege?",a:["Mindhárom egyszerre","Kettő választható","Egy kötelező"],c:1},
{level:"senior",q:"Mi a circuit breaker pattern célja?",a:["Retry","Hibák izolálása","Cache"],c:1},
{level:"senior",q:"Mi a bulkhead pattern lényege?",a:["Thread pool izoláció","GC","Load balancing"],c:0}

];
