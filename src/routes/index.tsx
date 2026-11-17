import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import hero from "@/assets/hero-costa.jpg";
import mala from "@/assets/mala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viagem sem Caos — Guia para viajar com calma" },
      { name: "description", content: "Planejamento, mala, documentos e roteiro: um guia editorial para viajar sem estresse." },
      { property: "og:title", content: "Viagem sem Caos — Guia para viajar com calma" },
      { property: "og:description", content: "Planejamento, mala, documentos e roteiro: um guia editorial para viajar sem estresse." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "planejar", label: "Planejar" },
  { id: "mala", label: "Mala" },
  { id: "documentos", label: "Documentos" },
  { id: "aeroporto", label: "Aeroporto" },
  { id: "contato", label: "Contato" },
];

function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setP((h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div aria-hidden className="fixed left-0 top-0 z-50 h-1 bg-accent transition-[width]" style={{ width: `${p}%` }} />;
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
      <div className="rule" />
    </header>
  );
}

function Index() {
  const [msg, setMsg] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("Inscrição feita! Em breve você recebe o checklist.");
    e.currentTarget.reset();
  };

  return (
    <>
      <Progress />
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#topo" className="font-serif text-2xl text-primary">Viagem sem Caos</a>
          <nav aria-label="Principal" className="hidden gap-7 md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-accent">{n.label}</a>
            ))}
          </nav>
          <a href="#contato" className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-coral-foreground transition hover:brightness-95">Checklist grátis</a>
        </div>
      </header>

      <main id="topo">
        {/* Abertura */}
        <section className="relative isolate overflow-hidden">
          <img src={hero} alt="Vila costeira à beira-mar ao pôr do sol" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="fade-in mx-auto max-w-6xl px-5 py-28 md:py-40">
            <p className="eyebrow !text-primary-foreground/85">Guia de viagem</p>
            <h1 className="mt-4 max-w-3xl text-5xl !text-primary-foreground md:text-7xl">Viaje leve. Chegue tranquilo.</h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">Um guia simples e cuidadoso para planejar cada etapa da sua viagem — do primeiro rascunho do roteiro até o desembarque.</p>
            <ul className="mt-8 grid max-w-xl gap-2 text-primary-foreground/90 sm:grid-cols-2">
              {["Planejamento em 4 passos", "Mala inteligente", "Documentos em dia", "Aeroporto sem pressa"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />{t}</li>
              ))}
            </ul>
            <a href="#planejar" className="mt-10 inline-block rounded-full bg-coral px-7 py-3 font-semibold text-coral-foreground transition hover:brightness-95">Começar o guia</a>
          </div>
        </section>

        {/* Planejar - largura total */}
        <section id="planejar" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead eyebrow="Capítulo 1" title="Planejar sem ansiedade" />
          <p className="prose-read text-lg">Uma boa viagem começa semanas antes do embarque. Separar o planejamento em etapas curtas evita decisões apressadas e deixa espaço para o que importa: aproveitar.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Defina o ritmo", "Quantos dias, quantas cidades e quanto tempo livre você quer."],
              ["02", "Orçamento real", "Some transporte, hospedagem, alimentação e uma reserva de 15%."],
              ["03", "Reserve o essencial", "Voos e hospedagem primeiro; passeios podem esperar."],
              ["04", "Roteiro flexível", "Uma atividade principal por dia é suficiente."],
            ].map(([n, t, d]) => (
              <article key={n} className="card-soft p-7 transition hover:-translate-y-1">
                <span className="font-serif text-3xl text-accent">{n}</span>
                <h3 className="mt-3 text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <div className="callout callout-tip prose-read mt-12">
            <p className="eyebrow">Dica</p>
            <p className="mt-1">Compre passagens às terças e quartas e ative alertas de preço com 2 a 3 meses de antecedência.</p>
          </div>
        </section>

        {/* Mala - texto + imagem vertical */}
        <section id="mala" className="bg-card/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHead eyebrow="Capítulo 2" title="A mala inteligente" />
              <p className="prose-read">Leve menos do que acha que precisa. Peças neutras que combinam entre si multiplicam as opções e liberam espaço para o que você trouxer de volta.</p>
              <ul className="list-teal prose-read mt-6">
                <li>Monte looks com 3 cores-base e um tom de destaque.</li>
                <li>Enrole as roupas e use organizadores por categoria.</li>
                <li>Remédios, carregador e uma muda de roupa vão na bagagem de mão.</li>
                <li>Deixe 20% da mala vazia na ida.</li>
              </ul>
            </div>
            <img src={mala} alt="Mala aberta com roupas dobradas e caderno" width={768} height={1024} loading="lazy" className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          </div>
        </section>

        {/* Documentos - tabela, sem imagem */}
        <section id="documentos" className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead eyebrow="Capítulo 3" title="Documentos em dia" />
          <p className="prose-read">Confira tudo com antecedência. Alguns documentos levam semanas para ficar prontos.</p>
          <div className="mt-10 overflow-x-auto rounded-xl border">
            <table className="table-clean min-w-[600px]">
              <thead><tr><th scope="col">Documento</th><th scope="col">Quando providenciar</th><th scope="col">Observação</th></tr></thead>
              <tbody>
                <tr><td>Passaporte</td><td>3 meses antes</td><td>Validade mínima de 6 meses no retorno</td></tr>
                <tr><td>Visto</td><td>2 a 4 meses antes</td><td>Varia conforme o destino</td></tr>
                <tr><td>Seguro viagem</td><td>Na compra da passagem</td><td>Obrigatório em vários países</td></tr>
                <tr><td>Vacinas</td><td>1 mês antes</td><td>Leve o certificado internacional</td></tr>
                <tr><td>Cópias digitais</td><td>1 semana antes</td><td>Guarde na nuvem e no celular</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout callout-warn prose-read mt-10">
            <p className="eyebrow !text-coral">Atenção</p>
            <p className="mt-1">Nunca despache documentos ou dinheiro. Eles devem ficar sempre com você.</p>
          </div>
        </section>

        {/* Aeroporto - imagem reservada */}
        <section id="aeroporto" className="bg-card/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHead eyebrow="Capítulo 4" title="Aeroporto sem pressa" />
              <p className="prose-read">Chegar cedo é o maior segredo de uma viagem tranquila. Com tempo sobrando, filas e imprevistos deixam de ser problema.</p>
              <ul className="list-teal prose-read mt-6">
                <li>Voos nacionais: chegue 2 horas antes.</li>
                <li>Voos internacionais: chegue 3 horas antes.</li>
                <li>Faça o check-in online 24 horas antes.</li>
              </ul>
            </div>
            <div role="img" aria-label="Espaço reservado para foto do aeroporto" className="placeholder-img mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-2xl">
              <span className="eyebrow">Foto em breve</span>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Receba o checklist completo</h2>
          <div className="rule mx-auto" />
          <form onSubmit={submit} className="card-soft mx-auto flex max-w-xl flex-col gap-3 p-6 sm:flex-row">
            <label htmlFor="email" className="sr-only">Seu e-mail</label>
            <input id="email" type="email" required placeholder="seu@email.com" className="flex-1 rounded-full border bg-background px-5 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110">Inscrever</button>
          </form>
          <p role="status" className="mt-4 text-accent">{msg}</p>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-12 md:flex-row md:justify-between">
          <span className="font-serif text-2xl">Viagem sem Caos</span>
          <span className="text-primary-foreground/80">© 2026 Viagem sem Caos. Viaje leve, chegue tranquilo.</span>
        </div>
      </footer>
    </>
  );
}
