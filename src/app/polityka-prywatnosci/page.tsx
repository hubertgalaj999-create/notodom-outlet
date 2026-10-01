import { pageMetadata } from '../lib/seo'
import CookieSettingsLink from '../components/CookieSettingsLink'

export const metadata = pageMetadata({
  title: 'Polityka prywatności – outlet notoDOM Zielona Góra',
  description:
    'Polityka prywatności outletu notoDOM w Zielonej Górze: administrator danych, cele przetwarzania, Google Analytics po zgodzie, mapa Google, cookies.',
  path: '/polityka-prywatnosci',
})

const Todo = () => <mark className="policy-todo">[DO UZUPEŁNIENIA]</mark>

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo">notoDOM <em>Outlet</em></a>
        </div>
      </header>

      <main className="container policy">
        <h1>Polityka prywatności</h1>
        <p className="policy-meta">
          Serwis: outlet.notodom.pl<br />
          Ostatnia aktualizacja: 1 października 2026
        </p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem Twoich danych osobowych jest <strong>Notodom sp. z o.o.</strong> z siedzibą pod adresem
          ul. Henryka Sienkiewicza 9, 65-431 Zielona Góra, NIP 9292084384, KRS <Todo />, REGON <Todo />.
        </p>

        <h2>2. Kontakt w sprawach ochrony danych</h2>
        <p>
          We wszystkich sprawach dotyczących przetwarzania danych osobowych możesz kontaktować się z nami pod
          adresem: <a href="mailto:biuro@notodom.pl">biuro@notodom.pl</a>.
        </p>

        <h2>3. Jakie dane przetwarzamy, w jakim celu i na jakiej podstawie</h2>
        <p>
          <strong>Kontakt z outletem.</strong> Serwis nie ma formularza kontaktowego – kontaktujesz się z nami
          telefonicznie (<a href="tel:+48887535955">887 535 955</a>) lub e-mailowo
          (<a href="mailto:outlet@notodom.pl">outlet@notodom.pl</a>). Gdy dzwonisz, piszesz na adres e-mail outletu
          albo odwiedzasz salon, przetwarzamy dane, które nam przekazujesz (np. imię, numer telefonu, adres e-mail,
          treść wiadomości), aby odpowiedzieć na pytanie, zarezerwować produkt i przygotować zakup. Podstawa prawna:
          art. 6 ust. 1 lit. b RODO (działania podejmowane na Twoje żądanie przed zawarciem umowy) oraz art. 6 ust. 1
          lit. f RODO (nasz prawnie uzasadniony interes: obsługa korespondencji i zapytań).
        </p>
        <p>
          <strong>Zakup w outlecie.</strong> Jeśli kupujesz meble, przetwarzamy dane niezbędne do zawarcia
          i wykonania umowy sprzedaży oraz do wystawienia dokumentu sprzedaży (imię i nazwisko lub nazwa firmy, adres,
          NIP przy fakturze, dane kontaktowe). Podstawa prawna: art. 6 ust. 1 lit. b RODO (umowa), art. 6 ust. 1
          lit. c RODO (obowiązki wynikające z przepisów podatkowych i rachunkowych) oraz art. 6 ust. 1 lit. f RODO
          (dochodzenie roszczeń i obrona przed nimi).
        </p>
        <p>
          <strong>Dziennik serwera.</strong> Przy każdym wejściu na stronę serwer hostingowy (Vercel) zapisuje
          podstawowe dane techniczne (m.in. adres IP, datę i godzinę, adres żądanej strony, typ przeglądarki), aby
          zapewnić działanie i bezpieczeństwo serwisu. Podstawa prawna: art. 6 ust. 1 lit. f RODO.
        </p>
        <p>
          <strong>Google Analytics.</strong> Po wyrażeniu zgody w banerze cookies dane o sposobie korzystania ze
          strony przetwarzane są w celach statystycznych i analitycznych (pliki cookies _ga i _ga_*). Do czasu
          wyrażenia zgody skrypt Google Analytics nie jest w ogóle ładowany. Podstawa prawna: art. 6 ust. 1 lit. a
          RODO (zgoda).
        </p>
        <p>
          <strong>Mapa Google w stopce.</strong> Mapa ładuje się dopiero po kliknięciu przycisku „Pokaż mapę”.
          Wtedy Twoja przeglądarka łączy się z serwerami Google, które otrzymują m.in. adres IP i mogą zapisać własne
          pliki cookies. Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda wyrażona przez kliknięcie). Link „Trasa”
          otwiera Mapy Google w nowej karcie, a od tego momentu obowiązują zasady Google.
        </p>
        <p>
          <strong>Zapamiętanie Twojego wyboru w sprawie cookies.</strong> Informację o wyborze zapisujemy
          w pamięci przeglądarki (localStorage), aby nie pytać o zgodę przy każdej wizycie. Podstawa prawna: art. 6
          ust. 1 lit. f RODO.
        </p>

        <h2>4. Odbiorcy danych</h2>
        <ul>
          <li><strong>Vercel Inc.</strong>, dostawca hostingu serwisu.</li>
          <li>
            <strong>Google LLC</strong>, dostawca Google Analytics (wyłącznie po wyrażeniu zgody) oraz Map Google
            (wyłącznie po kliknięciu „Pokaż mapę”).
          </li>
          <li>
            <strong>Podmioty świadczące na naszą rzecz usługi księgowe, prawne i informatyczne</strong>, w zakresie
            niezbędnym do ich wykonania.
          </li>
          <li><strong>Organy publiczne</strong>, jeśli obowiązek wydania danych wynika z przepisów prawa.</li>
        </ul>

        <h2>5. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
        <p>
          W związku z korzystaniem z usług Vercel Inc. oraz Google LLC (w tym Google Analytics i Map Google) dane mogą
          być przekazywane do Stanów Zjednoczonych. Odbywa się to w oparciu o standardowe klauzule umowne
          zatwierdzone przez Komisję Europejską lub inny mechanizm przewidziany w rozdziale V RODO, stanowiący
          odpowiednie zabezpieczenie.
        </p>

        <h2>6. Okres przechowywania danych</h2>
        <ul>
          <li>
            <strong>Dane z kontaktu z outletem</strong> przechowujemy do czasu zakończenia sprawy, nie dłużej niż
            3 lata od ostatniej korespondencji.
          </li>
          <li>
            <strong>Dane z umowy sprzedaży i dokumentów sprzedaży</strong> przechowujemy przez okres wymagany
            przepisami podatkowymi i rachunkowymi (co do zasady 5 lat licząc od końca roku, którego dotyczą), a w
            zakresie niezbędnym do dochodzenia roszczeń i obrony przed nimi do upływu terminu ich przedawnienia.
          </li>
          <li>
            <strong>Dziennik serwera</strong> przechowywany jest przez czas niezbędny do zapewnienia bezpieczeństwa
            serwisu, zgodnie z ustawieniami dostawcy hostingu.
          </li>
          <li>
            <strong>Dane zbierane przez Google Analytics</strong> przechowywane są do 14 miesięcy. Pliki cookies _ga
            i _ga_* przechowywane są do 2 lat.
          </li>
          <li>
            <strong>Informacja o Twoim wyborze w sprawie cookies</strong> jest przechowywana do czasu usunięcia danych
            przeglądarki dla tej strony albo zmiany wyboru.
          </li>
        </ul>

        <h2>7. Twoje prawa</h2>
        <p>
          Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
          przenoszenia danych oraz wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym
          interesie. Jeśli przetwarzamy dane na podstawie zgody, możesz ją cofnąć w dowolnym momencie, bez wpływu na
          zgodność z prawem przetwarzania dokonanego przed jej cofnięciem. Zgodę na cookies analityczne możesz cofnąć
          za pomocą linku „Ustawienia cookies” w stopce serwisu. Przysługuje Ci również prawo wniesienia skargi do
          Prezesa Urzędu Ochrony Danych Osobowych.
        </p>

        <h2>8. Dobrowolność podania danych</h2>
        <p>
          Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi na Twoje pytanie, rezerwacji
          produktu lub zawarcia umowy sprzedaży. Nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany,
          w tym w formie profilowania.
        </p>

        <h2>9. Pliki cookies i podobne technologie</h2>
        <p>
          Serwis nie korzysta z plików cookies niezbędnych do jego działania. Pliki cookies analityczne Google
          Analytics zapisywane są wyłącznie po wyrażeniu zgody w banerze cookies.
        </p>
        <div className="policy-table">
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Dostawca</th>
                <th>Cel</th>
                <th>Okres przechowywania</th>
                <th>Kiedy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google</td>
                <td>rozróżnianie użytkowników na potrzeby statystyk</td>
                <td>do 2 lat</td>
                <td>po wyrażeniu zgody</td>
              </tr>
              <tr>
                <td>_ga_&lt;identyfikator&gt;</td>
                <td>Google</td>
                <td>zapamiętanie stanu sesji na potrzeby statystyk</td>
                <td>do 2 lat</td>
                <td>po wyrażeniu zgody</td>
              </tr>
              <tr>
                <td>wybór w sprawie cookies (localStorage)</td>
                <td>Notodom sp. z o.o.</td>
                <td>zapamiętanie Twojej decyzji</td>
                <td>do usunięcia danych przeglądarki lub zmiany wyboru</td>
                <td>zawsze</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Po kliknięciu „Pokaż mapę” Google może zapisać własne pliki cookies. Ich zakres określa polityka
          prywatności Google.
        </p>
        <p>
          Zgodę możesz zmienić lub cofnąć w dowolnym momencie za pomocą linku „Ustawienia cookies” w stopce serwisu.
          Pliki cookies możesz też usunąć w ustawieniach swojej przeglądarki.
        </p>

        <h2>10. Zmiany polityki</h2>
        <p>
          Polityka może być aktualizowana. Aktualna wersja jest zawsze dostępna pod adresem
          outlet.notodom.pl/polityka-prywatnosci.
        </p>
      </main>

      <footer style={{
        background: 'var(--charcoal)', color: 'rgba(255,255,255,.6)',
        padding: '40px 0', textAlign: 'center', fontSize: '13px',
      }}>
        <div className="container">
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
            notoDOM <em style={{ color: 'var(--gold)' }}>Outlet</em>
          </div>
          <p>ul. Sienkiewicza 9, Zielona Góra · 📞 887 535 955 · outlet@notodom.pl</p>
          <p style={{ marginTop: '12px', fontSize: '12px' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Strona główna outletu</a>
            {' · '}
            <CookieSettingsLink />
          </p>
        </div>
      </footer>
    </div>
  )
}
