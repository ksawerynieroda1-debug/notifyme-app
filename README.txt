NOTIFYME — STARTOWA WERSJA 0.1

Co działa:
- responsywny panel na komputer i telefon,
- menu: Przegląd, Źródła, Historia, Ustawienia,
- lokalna historia alertów zapisywana w przeglądarce,
- testowy alert,
- prośba o zgodę na powiadomienia przeglądarki,
- pliki PWA: manifest i service worker.

Ważne ograniczenia:
- To jest front-endowy prototyp. Zdalne powiadomienia nie będą działać, dopóki nie dodamy backendu i subskrypcji push.
- Discord: integrację z serwerami robimy przez oficjalnego bota, z uprawnieniami ograniczonymi do potrzebnych kanałów. Nie używamy self-bota, tokena konta użytkownika ani automatyzacji prywatnych wiadomości.
- Strony, e-mail i webhooki wymagają osobnych, bezpiecznych integracji po stronie serwera.
- Nie wpisuj haseł ani tokenów do plików HTML/JS.

Uruchomienie lokalne:
1. Rozpakuj ZIP.
2. Otwórz terminal w folderze i uruchom: python -m http.server 8000
3. Wejdź na http://localhost:8000

Publikacja:
- Wgraj pliki do repozytorium GitHub i włącz GitHub Pages.
- Dla powiadomień push na żywo i integracji potrzebny będzie osobny backend HTTPS (GitHub Pages sam nie uruchamia serwera).
