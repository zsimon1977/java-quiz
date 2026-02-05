window.QUESTION_POOL = [

/* ===== 1–10: Java alapok ===== */
{level:"junior",q:"Mi a JVM fő feladata?",a:["Java kód fordítása","Bytecode futtatása","Memória felszabadítása"],c:1},
{level:"junior",q:"Melyik NEM primitív típus?",a:["int","boolean","String"],c:2},
{level:"junior",q:"Mi az OOP egyik alapelve?",a:["Polimorfizmus","Deadlock","Garbage Collection"],c:0},
{level:"junior",q:"Mi a main metódus szerepe?",a:["Objektum létrehozás","Program belépési pont","GC indítás"],c:1},
{level:"junior",q:"Melyik kulcsszóval történik öröklés?",a:["implements","extends","inherits"],c:1},
{level:"junior",q:"Mi a konstruktor?",a:["Statikus metódus","Objektum inicializáló","Interface metódus"],c:1},
{level:"junior",q:"Melyik collection enged duplikátumot?",a:["Set","List","Map"],c:1},
{level:"junior",q:"Mi a null jelentése?",a:["0 érték","Nincs referencia","Üres objektum"],c:1},
{level:"junior",q:"Mikor dobódik NullPointerException?",a:["Fordításkor","Futásidőben","Class load során"],c:1},
{level:"junior",q:"Mi a for-each ciklus célja?",a:["Indexelés","Kollekció bejárás","Szálkezelés"],c:1},

/* ===== 11–20: access, static, final ===== */
{level:"junior",q:"Melyik access modifier a legszűkebb?",a:["public","protected","private"],c:2},
{level:"junior",q:"Mi a static jelentése?",a:["Objektumhoz kötött","Osztályhoz kötött","Thread-local"],c:1},
{level:"junior",q:"Mit jelent a final változón?",a:["Felülírható","Nem módosítható","Statikus"],c:1},
{level:"junior",q:"Mi a boolean alapértelmezett értéke?",a:["true","false","null"],c:1},
{level:"junior",q:"Mi a default constructor?",a:["Privát","Paraméter nélküli","Statikus"],c:1},
{level:"junior",q:"Lehet-e egy osztály final?",a:["Nem","Igen","Csak abstract"],c:1},
{level:"junior",q:"Mi történik final osztály esetén?",a:["Nem példányosítható","Nem örökölhető","Nem használható"],c:1},
{level:"junior",q:"Lehet-e static metódus override-olva?",a:["Igen","Nem","Csak abstract"],c:1},
{level:"junior",q:"Mi a package szerepe?",a:["Memória kezelés","Névtér","Thread pool"],c:1},
{level:"junior",q:"Mi a this kulcsszó?",a:["Osztály","Aktuális objektum","Szülő osztály"],c:1},

/* ===== 21–30: OOP ===== */
{level:"junior",q:"Mi az interface?",a:["Objektum","Szerződés","Implementáció"],c:1},
{level:"junior",q:"Lehet-e több interface-t implementálni?",a:["Nem","Igen","Csak abstract osztállyal"],c:1},
{level:"junior",q:"Mi az abstract osztály?",a:["Nem példányosítható","Interface","Statikus osztály"],c:0},
{level:"junior",q:"Mi a polymorphism?",a:["Többszálúság","Többféle megvalósítás","Több konstruktor"],c:1},
{level:"junior",q:"Mi a method overloading?",a:["Felülírás","Azonos név, eltérő paraméter","Öröklés"],c:1},
{level:"junior",q:"Mi a method overriding?",a:["Új metódus","Felülírás öröklésnél","Statikus hívás"],c:1},
{level:"junior",q:"Mi az instanceof célja?",a:["Öröklés","Típus ellenőrzés","Cast"],c:1},
{level:"junior",q:"Mi a super kulcsszó?",a:["Gyerek osztály","Szülő osztály","Interface"],c:1},
{level:"junior",q:"Mi az encapsulation?",a:["Elrejtés","Öröklés","Polimorfizmus"],c:0},
{level:"junior",q:"Mi a getter/setter célja?",a:["Gyorsítás","Adatelérés szabályozás","GC"],c:1},

/* ===== 31–40: String, Object ===== */
{level:"junior",q:"A String milyen típus?",a:["mutable","immutable","primitive"],c:1},
{level:"junior",q:"Miért immutable a String?",a:["Gyors","Thread-safe","Kisebb memória"],c:1},
{level:"junior",q:"Mi az equals metódus célja?",a:["Referencia összehasonlítás","Tartalmi összehasonlítás","Hash számítás"],c:1},
{level:"junior",q:"Mi a == operátor objektumokra?",a:["Tartalom","Referencia","Hash"],c:1},
{level:"junior",q:"Mi az Object osztály?",a:["Nincs","Minden osztály őse","Interface"],c:1},
{level:"junior",q:"Mi a toString célja?",a:["Log","Debug","Szöveges reprezentáció"],c:2},
{level:"junior",q:"Mi a hashCode szerepe?",a:["Egyediség","Hash alapú kollekció","GC"],c:1},
{level:"junior",q:"Mi történik equals felülírásakor hashCode nélkül?",a:["Semmi","Hibás működés HashMap-ben","Fordítási hiba"],c:1},
{level:"junior",q:"Mi a StringBuilder?",a:["Immutable","Mutable","Thread-safe"],c:1},
{level:"junior",q:"Mi a StringBuffer?",a:["Nem thread-safe","Thread-safe","Deprecated"],c:1},

/* ===== 41–50: Collections ===== */
{level:"junior",q:"Mi a List jellemzője?",a:["Egyedi elemek","Rendezett","Kulcs-érték"],c:1},
{level:"junior",q:"Mi a Set jellemzője?",a:["Duplikátum","Egyediség","Indexelt"],c:1},
{level:"junior",q:"Mi a Map jellemzője?",a:["Lista","Kulcs-érték","Halmaz"],c:1},
{level:"junior",q:"Mi az ArrayList alapja?",a:["Linked list","Dinamikus tömb","Fa"],c:1},
{level:"junior",q:"Mi a LinkedList előnye?",a:["Gyors keresés","Gyors beszúrás","Kevesebb memória"],c:1},
{level:"junior",q:"Mi a HashMap kulcs szabálya?",a:["Duplikálható","Egyedi","Rendezett"],c:1},
{level:"junior",q:"Mi a TreeSet?",a:["Nem rendezett","Rendezett Set","Map"],c:1},
{level:"junior",q:"Mi a Collections.sort célja?",a:["Keresés","Rendezés","Másolás"],c:1},
{level:"junior",q:"Mi a forEach metódus?",a:["Ciklus","Lambda alapú iteráció","Thread"],c:1},
{level:"junior",q:"Mi az Iterator célja?",a:["GC","Bejárás","Szinkronizálás"],c:1},

/* ===== 51–60: Exceptions ===== */
{level:"junior",q:"Mi az exception?",a:["Fordítási hiba","Futásidejű hiba","Figyelmeztetés"],c:1},
{level:"junior",q:"Mi a checked exception?",a:["Runtime","Fordításkor kezelt","GC"],c:1},
{level:"junior",q:"Mi a RuntimeException?",a:["Checked","Unchecked","Error"],c:1},
{level:"junior",q:"Mi a try-catch célja?",a:["Optimalizálás","Exception kezelés","Thread"],c:1},
{level:"junior",q:"Mi a finally blokk?",a:["Exception dobás","Mindig lefut","Rollback"],c:1},
{level:"junior",q:"Mi a throw kulcsszó?",a:["Elkap","Dob","Logol"],c:1},
{level:"junior",q:"Mi a throws kulcsszó?",a:["Elkap","Deklarál","Fut"],c:1},
{level:"junior",q:"Mi történik el nem kapott exception esetén?",a:["Semmi","Program leáll","GC fut"],c:1},
{level:"junior",q:"Mi az Error típus?",a:["Kezelhető","Nem javasolt kezelni","Checked"],c:1},
{level:"junior",q:"Mi a stack trace?",a:["Heap lista","Hívási lánc","Class lista"],c:1},

/* ===== 61–70: JVM, memória ===== */
{level:"junior",q:"Mi a heap?",a:["Stack","Objektum memória","Thread memória"],c:1},
{level:"junior",q:"Mi a stack?",a:["Objektumok","Metódus hívások","Class metadata"],c:1},
{level:"junior",q:"Mi a garbage collector célja?",a:["Gyorsítás","Memória felszabadítás","Thread leállítás"],c:1},
{level:"junior",q:"Mikor fut GC?",a:["Kézzel","Memória nyomásnál","Program végén"],c:1},
{level:"junior",q:"Mi az OutOfMemoryError?",a:["Exception","Memória hiba","Figyelmeztetés"],c:1},
{level:"junior",q:"Mi a classloader?",a:["Thread","Osztály betöltő","GC"],c:1},
{level:"junior",q:"Mi a bytecode?",a:["Forráskód","JVM kód","Gépi kód"],c:1},
{level:"junior",q:"Mi a JDK?",a:["Runtime","Fejlesztői eszközök","VM"],c:1},
{level:"junior",q:"Mi a JRE?",a:["Fejlesztés","Futtatókörnyezet","Fordító"],c:1},
{level:"junior",q:"Mi a javac?",a:["Interpreter","Fordító","Linker"],c:1},

/* ===== 71–80: Multithreading alap ===== */
{level:"junior",q:"Mi a Thread?",a:["Objektum","Végrehajtási szál","Process"],c:1},
{level:"junior",q:"Hogyan hozunk létre threadet?",a:["new Thread","Runnable","Mindkettő"],c:2},
{level:"junior",q:"Mi a Runnable?",a:["Thread","Interface","Osztály"],c:1},
{level:"junior",q:"Mi a start() metódus?",a:["run hívás","Új thread indítás","GC"],c:1},
{level:"junior",q:"Mi történik run() hívásakor?",a:["Új thread","Aktuális thread","Process"],c:1},
{level:"junior",q:"Mi a sleep célja?",a:["Leállít","Várakoztat","Megszüntet"],c:1},
{level:"junior",q:"Mi a synchronized?",a:["Gyorsítás","Szinkronizáció","GC"],c:1},
{level:"junior",q:"Mi a race condition?",a:["Lock","Adatütközés","Deadlock"],c:1},
{level:"junior",q:"Mi a deadlock?",a:["CPU hiba","Kölcsönös lock","Memory leak"],c:1},
{level:"junior",q:"Mi a thread-safe?",a:["Gyors","Biztonságos párhuzamosan","Immutable"],c:1},

/* ===== 81–100: Modern Java ===== */
{level:"junior",q:"Mi a lambda kifejezés?",a:["Osztály","Névtelen függvény","Thread"],c:1},
{level:"junior",q:"Mi a functional interface?",a:["Sok metódus","Egy absztrakt metódus","Statikus"],c:1},
{level:"junior",q:"Mi az Optional célja?",a:["Gyorsítás","Null kezelés","Thread"],c:1},
{level:"junior",q:"Mi a stream?",a:["IO","Adatfolyam","Thread"],c:1},
{level:"junior",q:"Mi a filter művelet?",a:["Rendez","Szűr","Gyűjt"],c:1},
{level:"junior",q:"Mi a map művelet?",a:["Szűr","Átalakít","Gyűjt"],c:1},
{level:"junior",q:"Mi a collect?",a:["Terminális","Köztes","Thread"],c:0},
{level:"junior",q:"Mi a LocalDate?",a:["Mutable","Immutable dátum","Thread-safe"],c:1},
{level:"junior",q:"Mi a enum?",a:["Osztály","Fix értékhalmaz","Interface"],c:1},
{level:"junior",q:"Mi a package-private láthatóság?",a:["public","Nincs modifier","protected"],c:1}

];
