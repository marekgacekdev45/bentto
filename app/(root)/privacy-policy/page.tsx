import Hero from '@/components/hero'

import Background from '@/public/images/1600/bentto-68.webp'

const page = () => {
	return (
		<>
			<Hero bgi={Background} heading='Polityka prywatności' />

			<section className='py-20'>
				<div className='prose max-w-screen-lg mx-auto prose:max-w-full wrapper'>
					<p className='font-semibold'>
						Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych
						oraz ciasteczek, czyli tzw. cookies.
					</p>

					<h2>1. Informacje ogólne</h2>
					<p>
						Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <strong>bentto.eu</strong>
					</p>
					<p>Operatorem serwisu oraz Administratorem danych osobowych jest:</p>
					<p>
						<strong>
							Bentto
							<br />
							Szaflarska 61, 34-400 Nowy Targ
						</strong>
					</p>
					<p>
						Adres kontaktowy poczty elektronicznej operatora: <a href='mailto:bentto@onet.eu'>bentto@onet.eu</a>
					</p>
					<p>
						Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
						Serwisie.
					</p>
					<p>Serwis wykorzystuje dane osobowe w następujących celach:</p>
					<ul>
						<li>Obsługa zapytań przez formularz</li>
						<li>Prezentacja oferty lub informacji</li>
					</ul>
					<p>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</p>
					<ul>
						<li>
							Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
						</li>
						<li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
					</ul>

					<h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
					<ul>
						<li>
							Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
							Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
							użytkownika i mogą być odczytane jedynie na docelowym serwerze.
						</li>
						<li>
							Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający Operator
							klucz może je odczytać.
						</li>
						<li>
							Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie
							jest możliwe odwrócenie jej działania.
						</li>
						<li>Operator okresowo zmienia swoje hasła administracyjne.</li>
						<li>W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.</li>
						<li>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania.</li>
					</ul>

					<h2>3. Hosting</h2>
					<p>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: Netlify</p>
					<p>Firma hostingowa prowadzi logi na poziomie serwera, które mogą obejmować:</p>
					<ul>
						<li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
						<li>czas nadejścia zapytania,</li>
						<li>czas wysłania odpowiedzi,</li>
						<li>nazwę stacji klienta,</li>
						<li>informacje o błędach przy realizacji transakcji HTTP,</li>
						<li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link),</li>
						<li>informacje o przeglądarce użytkownika,</li>
						<li>informacje o adresie IP.</li>
					</ul>

					<h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
					<p>
						Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom w niezbędnym zakresie. Dotyczy to:
					</p>
					<ul>
						<li>firmy hostingowej,</li>
						<li>upoważnionych pracowników i współpracowników,</li>
						<li>firm świadczących usługi marketingowe.</li>
					</ul>
					<p>Przysługuje Ci prawo do:</p>
					<ul>
						<li>dostępu do danych osobowych,</li>
						<li>ich sprostowania,</li>
						<li>usunięcia,</li>
						<li>ograniczenia przetwarzania,</li>
						<li>przenoszenia danych.</li>
					</ul>
					<p>Podanie danych osobowych jest dobrowolne, ale niezbędne do obsługi Serwisu.</p>

					<h2>5. Informacje w formularzach</h2>
					<p>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe.</p>
					<p>Dane są przetwarzane w celu wynikającym z funkcji formularza, np. obsługi zgłoszenia serwisowego.</p>

					<h2>6. Logi Administratora</h2>
					<p>
						Informacje o zachowaniu użytkowników mogą podlegać logowaniu i są wykorzystywane w celu administrowania
						serwisem.
					</p>

					<h2>7. Istotne techniki marketingowe</h2>
					<p>
						Operator stosuje Google Analytics do analizy ruchu na stronie, korzystając z ciasteczek. Użytkownicy mogą
						zarządzać preferencjami ciasteczek w{' '}
						<a href='https://www.google.com/ads/preferences/'>ustawieniach Google</a>.
					</p>

					<h2>8. Informacja o plikach cookies</h2>
					<p>Serwis korzysta z plików cookies w celu:</p>
					<ul>
						<li>utrzymania sesji użytkownika,</li>
						<li>realizacji celów marketingowych.</li>
					</ul>
					<p>Użytkownicy mogą zarządzać plikami cookies w ustawieniach przeglądarki.</p>

					<h2>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
					<p>
						Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
						wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
						preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
					</p>
					<p>
						W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową, której używasz, i
						postępuj zgodnie z instrukcjami:
					</p>
					<ul>
						<li>
							<a
								href='https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
								target='_blank'
								rel='noreferrer nofollow'>
								Edge
							</a>
						</li>
						<li>
							<a
								href='https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-df77-91d8-5cfdf8e93e3f'
								target='_blank'
								rel='noreferrer nofollow'>
								Internet Explorer
							</a>
						</li>
						<li>
							<a href='https://support.google.com/chrome/answer/95647?hl=pl' target='_blank' rel='noreferrer nofollow'>
								Chrome
							</a>
						</li>
						<li>
							<a
								href='https://support.apple.com/pl-pl/guide/safari/sfri11471/mac'
								target='_blank'
								rel='noreferrer nofollow'>
								Safari
							</a>
						</li>
						<li>
							<a href='https://support.mozilla.org/pl/kb/usuwanie-ciasteczek' target='_blank' rel='noreferrer nofollow'>
								Firefox
							</a>
						</li>
						<li>
							<a
								href='https://help.opera.com/en/latest/web-preferences/#cookies'
								target='_blank'
								rel='noreferrer nofollow'>
								Opera
							</a>
						</li>
					</ul>
					<p>Urządzenia mobilne:</p>
					<ul>
						<li>
							<a
								href='https://support.google.com/chrome/answer/95647?hl=pl&co=GENIE.Platform%3DAndroid'
								target='_blank'
								rel='noreferrer nofollow'>
								Android
							</a>
						</li>
						<li>
							<a href='https://support.apple.com/pl-pl/HT201265' target='_blank' rel='noreferrer nofollow'>
								Safari (iOS)
							</a>
						</li>
						<li>
							<a
								href='https://support.microsoft.com/en-us/topic/how-to-manage-cookies-in-internet-explorer-on-windows-phone-7-292583c6-f81f-c2f6-7bee-22ce6e8ce756'
								target='_blank'
								rel='noreferrer nofollow'>
								Windows Phone
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default page
