Mikroprojekty rekrutacyjne mają to do siebie, że żyją krótko.
Nie ma co się oszukiwać - ten też zginie śmiercią naturalną od razu po prezentacji

Ale jest sposób na to by mieć z niego pożytek jeszcze przez dłuższy czas :)
Wystarczy spróbować czegoś nowego - a potem traktować go jako ściągę

Tak ja na codzień używam Material UI, Create-React-App, Redux ToolKit i Jesta, tak tym razem zdecydowałem się zrobić wszystko inaczej

- Zamiast **Material UI** - Użyłem **Joy UI** (krewniak)
- Zamiast **Create-React-App** - Użyłem **Vite z SWC**
- Zamiast **Redux ToolKit** - zgodnie z zaleceniem nauczyłem się **Recoil**
- Zamiast **Jesta** - Użyłem **Vitest**

Zwiększyłem również pokrycie testów - tam gdzie uznałem to za sensowne, tam zrobiłem testy. W pozostałych komponentach po prostu zainstalowałem snapshoty.

Dodatkowo od samego początku twardo skupiłem się na czymś czego nigdy nie robiłem, ale do czego od dawna się zabierałem: Semantic HTML oraz Accessibility

**Dodatkowe funkcjonalności ponad specyfikację:**
- Filtrowanie po kategoriach z odczytem/zapisem z URLu
- Tooltip z szczegółami albumu
- Strona z detalami albumu (integracja z react-router i react-helmet-async)
- Sekcja z polecanymi albumami (po kategorii)
- Sztuczne komentarze zaciągane z API mockaroo
- Skeletony dla komentarzy

**Jak co uruchomić?**
- _yarn dev_/_npm run dev_ - Uruchamia instancję deweloperską
- _yarn test_/_npm run test_ - Uruchamia testy
