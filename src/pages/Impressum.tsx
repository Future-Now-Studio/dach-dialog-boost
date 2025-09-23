export default function Impressum() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header / Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Impressum</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content Card */}
      <section className="relative mt-10 md:-mt-12 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <article className="rounded-2xl bg-white dark:bg-slate-950 shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 md:p-10 space-y-12">
              {/* Anschrift */}
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  Anschrift
                </h2>
                <address className="not-italic leading-relaxed text-slate-600 dark:text-slate-300">
                  Ahmet Krasniqi 1<br />
                  40000 Mitrovice
                </address>
              </section>

              {/* Vertretung */}
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm-8 9a8 8 0 1 1 16 0v1H4v-1Z" />
                    </svg>
                  </span>
                  Vertreten durch
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Geschäftsführer: Jeton Gela, Pascal Zielosko
                </p>
              </section>

              {/* Kontakt */}
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M21 8V7l-9 6-9-6v1l9 6 9-6Zm0 9H3V6h18v11Z" />
                    </svg>
                  </span>
                  Kontakt
                </h2>
                <div className="text-slate-600 dark:text-slate-300 space-y-1">
                  <p>Telefon: Bitte Erstkontakt nur per Mail</p>
                  <p>
                    E-Mail:{' '}
                    <a
                      href="mailto:info@dach-dialog.de"
                      className="font-medium text-slate-800 underline decoration-dotted underline-offset-4 hover:decoration-solid dark:text-slate-200"
                    >
                      info@dach-dialog.de
                    </a>
                  </p>
                </div>
              </section>

              {/* Registereintrag */}
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M6 3h9l3 3v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9 0v3h3" />
                    </svg>
                  </span>
                  Registereintrag
                </h2>
                <div className="text-slate-600 dark:text-slate-300">
                  <p>Eintragung im Handelsregister.</p>
                  <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm text-slate-500">Registergericht</dt>
                      <dd>Beantragt</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-500">Registernummer</dt>
                      <dd>Beantragt</dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* Umsatzsteuer-ID */}
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                  </span>
                  Umsatzsteuer-ID
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: Beantragt
                </p>
              </section>

              {/* Hinweis */}
              <section className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
                  Hinweis: Sofern einzelne Angaben (z. B. Registergericht, Registernummer, USt-ID) noch beantragt sind, werden sie nach Erhalt umgehend aktualisiert.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
