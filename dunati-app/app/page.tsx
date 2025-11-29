import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Dunati</Link>
              <div className="flex items-center gap-2">
              </div>
            </div>
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </nav>

        <div className="max-w-4xl w-full rounded-lg shadow-lg p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Dunati — Soluções em Cilindros</h1>
            <p className="mt-2 text-sm text-slate-600">
              Fabricação, manutenção e reparo de cilindros e serviços de serralheria industrial com precisão e agilidade.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="font-semibold">Nossos serviços</h2>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Reparo e manutenção de cilindros hidráulicos</li>
              <li>Fabricação sob desenho e usinagem</li>
              <li>Serralheria industrial e montagem</li>
              <li>Teste hidrostático e inspeção técnica</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold">Por que escolher a Dunati</h2>
            <div className="mt-2 text-sm">
              Atendimento rápido · Peças sob medida · Equipe especializada · Garantia de serviço
            </div>
          </section>

          <div className="flex gap-3 mt-6">
            <Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
              Entrar
            </Link>
            <a
              href=""
              className="inline-block px-4 py-2 border border-slate-300 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>


        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p><b>© 2025 Dunati</b> — Todos os direitos reservados.</p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
