
const indicators = [
  { title: "Bovinos informados", value: "457", detail: "Contagem parcial do rebanho", icon: "🐂" },
  { title: "Matrizes", value: "150", detail: "Vacas de reprodução", icon: "🐄" },
  { title: "Touros", value: "7", detail: "Reprodutores", icon: "🐃" },
  { title: "Engorda", value: "300", detail: "Animais em terminação", icon: "🌾" },
];

const modules = [
  { name: "Agricultura", description: "Plantio, aplicações e colheita", icon: "🌱" },
  { name: "Pecuária", description: "Rebanho, reprodução e manejo", icon: "🐂" },
  { name: "Piquetes", description: "Rotação e manejo de pastagens", icon: "🌳" },
  { name: "Máquinas", description: "Equipamentos e manutenção", icon: "🚜" },
  { name: "Estoque", description: "Insumos, materiais e combustível", icon: "📦" },
  { name: "Financeiro", description: "Receitas, despesas e custos", icon: "💰" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f3] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col bg-[#173b2b] p-6 text-white md:flex">
          <div className="mb-12">
            <div className="text-2xl font-bold">🌿 Gestão Rural</div>
            <div className="mt-1 text-sm text-green-200">ERP · Gestão inteligente</div>
          </div>

          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-300">
            Menu principal
          </div>

          <nav className="space-y-2">
            {["Visão geral", "Agricultura", "Pecuária", "Piquetes", "Máquinas", "Estoque", "Financeiro", "Relatórios"].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-4 py-3 text-sm ${
                  index === 0
                    ? "bg-[#2c6247] font-semibold text-white"
                    : "text-green-100"
                }`}
              >
                {["▦", "🌱", "🐂", "🌳", "🚜", "📦", "💰", "📊"][index]} {item}
              </div>
            ))}
          </nav>

          <div className="mt-auto rounded-xl border border-green-700 bg-green-900/40 p-4">
            <div className="text-sm font-semibold">Propriedade ativa</div>
            <div className="mt-2 text-sm text-green-100">Fazenda · Comodoro-MT</div>
            <div className="mt-1 text-xs text-green-300">363 hectares (informação inicial)</div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5 md:px-10">
            <div>
              <div className="text-sm text-slate-500">Gestão da propriedade</div>
              <h1 className="text-2xl font-bold text-slate-900">Visão geral</h1>
            </div>
            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
              ● Ambiente de desenvolvimento
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 p-6 md:p-10">
            <div className="rounded-2xl bg-[#214d37] p-7 text-white shadow-sm md:p-9">
              <div className="text-sm font-medium text-green-200">
                BEM-VINDO AO SEU SISTEMA DE GESTÃO
              </div>
              <h2 className="mt-3 text-3xl font-bold">
                Gestão Rural ERP
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-green-100">
                Controle integrado da agricultura, pecuária, máquinas,
                estoque e finanças em um só lugar.
              </p>
              <div className="mt-6 inline-flex rounded-lg bg-white/10 px-4 py-2 text-sm">
                📍 Propriedade de referência: Comodoro – Mato Grosso
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-900">
                  Indicadores do rebanho
                </h2>
                <span className="text-xs text-slate-500">Dados iniciais</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {indicators.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{item.title}</span>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="mt-3 text-3xl font-bold text-slate-900">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-500">{item.detail}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                A contagem de 457 cabeças representa somente os animais informados até agora.
                Bezerros e animais de recria ainda serão cadastrados.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold text-slate-900">
                Módulos de gestão
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {modules.map((module) => (
                  <div key={module.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="text-3xl">{module.icon}</div>
                    <h3 className="mt-4 font-bold text-slate-900">{module.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{module.description}</p>
                    <div className="mt-4 text-xs font-semibold text-green-700">
                      Módulo planejado →
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <footer className="border-t border-slate-200 pt-5 text-center text-xs text-slate-500">
              Gestão Rural ERP · Projeto em desenvolvimento · Versão inicial
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
