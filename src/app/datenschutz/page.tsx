export const metadata = { title: 'Datenschutzerklärung | AI-n_sights Portal' }

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Datenschutzerklärung</h1>

        <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
              <strong className="text-foreground">M.W.</strong><br />
              M.W.<br />
              12345 Stadt<br />
              E-Mail: automattesting645@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">2. Datenerfassung beim Besuch der Website</h2>
            <p>
              Beim bloßen Besuch der Website werden automatisch Informationen in den Server-Logfiles erfasst, die dein Browser an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung dieser Daten erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses an der Sicherheit und Stabilität der Website. Die Daten werden nicht für Rückschlüsse auf deine Person verwendet und nach spätestens 7 Tagen gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">3. Google Analytics</h2>
            <p>
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (&bdquo;Google&ldquo;). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglicht. Die durch das Cookie erzeugten Informationen über deine Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="mt-2">
              Wir nutzen Google Analytics mit aktivierter IP-Anonymisierung. Deine IP-Adresse wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt, bevor sie in die USA übertragen wird. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Google-Server in den USA übertragen und dort gekürzt.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, sofern du über das Cookie-Consent-Tool zugestimmt hast. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="mt-2">
              Weitere Informationen findest du in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-primary hover:underline">Datenschutzerklärung von Google</a>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">4. Google Translate</h2>
            <p>
              Diese Website nutzt den Dienst Google Translate der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, um die Website in verschiedene Sprachen zu übersetzen. Bei Nutzung des Übersetzungsdienstes wird deine IP-Adresse an Google-Server, möglicherweise in den USA, übermittelt. Die Nutzung erfolgt auf Grundlage deiner Einwilligung bzw. deines aktiven Klicks auf das Übersetzungs-Widget (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">5. Newsletter</h2>
            <p>
              Wenn du unseren Newsletter abonnierst, verwenden wir deine E-Mail-Adresse, um dir regelmäßig Informationen zu KI-News, Tools und Guides zu senden. Die Angabe der E-Mail-Adresse ist zur Nutzung des Newsletters erforderlich. Weitere Daten werden nicht erhoben.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst den Newsletter jederzeit abbestellen, indem du auf den Abmelde-Link am Ende jedes Newsletters klickst oder uns eine E-Mail sendest. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">6. YouTube</h2>
            <p>
              Auf dieser Website sind Videos von YouTube eingebunden. Betreiber von YouTube ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wenn du ein YouTube-Video auf unserer Website aufrufst, wird eine Verbindung zu den YouTube-Servern hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten du besucht hast. Wenn du in deinem YouTube-Konto eingeloggt bist, ermöglichst du YouTube, dein Surfverhalten direkt deinem persönlichen Profil zuzuordnen.
            </p>
            <p className="mt-2">
              Die Einbindung von YouTube-Videos erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung unserer Inhalte). Weitere Informationen findest du in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-primary hover:underline">Datenschutzerklärung von Google/YouTube</a>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">7. Externe Links</h2>
            <p>
              Auf unserer Website befinden sich Links zu externen Websites Dritter (z. B. zu KI-Tools, GitHub, YouTube). Für die Datenverarbeitung auf diesen externen Seiten sind die jeweiligen Betreiber verantwortlich. Wir haben keinen Einfluss auf die Datenerhebung und -verarbeitung auf diesen Seiten. Bitte informiere dich dort direkt über die geltenden Datenschutzbestimmungen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">8. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Auskunft über deine bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Die Löschung deiner Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>Deine Daten in einem strukturierten Format zu erhalten (Datenübertragbarkeit, Art. 20 DSGVO)</li>
              <li>Deine Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung deiner Rechte wende dich bitte an die oben angegebene E-Mail-Adresse. Du hast außerdem das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen, wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen die DSGVO verstößt.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">9. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen (z. B. steuerliche Aufbewahrungspflichten von 10 Jahren für Rechnungsdaten).
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">10. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets den aktuellen rechtlichen Anforderungen anzupassen oder Änderungen unserer Leistungen abzubilden. Für deinen erneuten Besuch gilt dann die aktualisierte Fassung.
            </p>
          </section>

          <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-8">
            Stand: Mai 2026. Diese Datenschutzerklärung wurde auf Basis von Vorlagen und Generatoren erstellt, ersetzt jedoch keine professionelle Rechtsberatung. Bei Fragen wende dich bitte an einen Datenschutzexperten.
          </p>

        </div>
      </div>
    </div>
  )
}
