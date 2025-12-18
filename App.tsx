
import React from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';

const App: React.FC = () => {
  const scrollToCheckout = () => {
    // In a real scenario, this would redirect to a checkout page
    alert("Redirecionando para o checkout seguro...");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-emerald-100">
      
      {/* 1. Hero Section - Dark background */}
      <Section className="bg-slate-900 text-white !py-12 md:!py-20 min-h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-block px-4 py-1.5 bg-emerald-500 text-xs font-bold rounded-full uppercase tracking-widest">
              Lançamento Exclusivo
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              MINI-HISTÓRIAS <span className="text-emerald-400">SEM FINAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              Produção oral espontânea na Educação Infantil: o material que faz a criança pensar, imaginar e falar.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-slate-400 line-through text-sm md:text-base">De R$ 47,00</span>
                <span className="text-2xl md:text-3xl font-black text-emerald-400 whitespace-nowrap">Por apenas R$ 10,00</span>
              </div>
              <Button text="EU QUERO O MEU AGORA" onClick={scrollToCheckout} fullWidth />
              <p className="text-sm text-center text-slate-400 italic">
                Acesso imediato via PDF após a confirmação do pagamento.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl group-hover:bg-emerald-500/30 transition duration-1000"></div>
            <img 
              src="https://picsum.photos/seed/cards/800/600" 
              alt="Mockup dos cartões sobre uma mesa" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full"
            />
          </div>
        </div>
      </Section>

      {/* 2. O que é este material? - White background */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-4xl">📘</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">O que é este material?</h2>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6 text-left">
            <p>
              <strong className="text-slate-900">Mini-Histórias Sem Final</strong> é um material pedagógico composto por cartões visuais com histórias incompletas, organizadas em três cenas ilustradas, sem texto e sem desfecho.
            </p>
            <p className="p-6 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl italic">
              "A proposta é simples e poderosa: a criança observa as imagens, compreende a sequência e cria oralmente o final da história."
            </p>
            <p className="text-center font-semibold text-slate-800">
              Não é um material para copiar, repetir ou decorar.<br/>
              É um material para pensar, imaginar e falar.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Qual o objetivo pedagógico? - Indigo/Blue background */}
      <Section className="bg-indigo-900 text-white">
        <div className="text-center mb-16">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">Qual é o objetivo pedagógico?</h2>
          <p className="mt-4 text-indigo-200">Desenvolvido de forma natural e lúdica para 4 e 5 anos</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Oralidade espontânea", desc: "Estimula o uso natural da fala." },
            { title: "Organização de ideias", desc: "Ajuda a estruturar o pensamento." },
            { title: "Sequência narrativa", desc: "Início – desenvolvimento – desfecho." },
            { title: "Ampliação de vocabulário", desc: "Novas palavras em contextos reais." },
            { title: "Expressão de emoções", desc: "Falar sobre o que sente e opina." },
            { title: "Zero Escrita", desc: "Foco total na comunicação verbal." },
          ].map((item, idx) => (
            <div key={idx} className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 hover:border-emerald-400 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-emerald-400">{item.title}</h3>
              <p className="text-indigo-100/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Como funciona a atividade? - Light/Sand background */}
      <Section className="bg-orange-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-4xl">🎲</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-8">Como funciona a atividade?</h2>
            <p className="text-lg text-slate-600 mb-8">O uso é intuitivo e o próprio material “ensina” como aplicar:</p>
            <ol className="space-y-6">
              {[
                "O professor apresenta os três cartões da história.",
                "As imagens mostram claramente o que aconteceu primeiro e depois.",
                "O final não aparece.",
                "A criança (ou o grupo) é convidada a responder oralmente: 'Como você acha que essa história termina?'",
                "O professor media a conversa com perguntas simples sugeridas."
              ].map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Onde utilizar:
              </h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div> Roda de conversa
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div> Atividade em dupla
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div> Atendimento individual
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div> Momentos de transição
                </li>
              </ul>
            </div>
            <img 
              src="https://picsum.photos/seed/kids/600/400" 
              alt="Criança apontando para os cartões" 
              className="rounded-2xl shadow-lg w-full object-cover h-64"
            />
          </div>
        </div>
      </Section>

      {/* 5. O que você vai receber - White background */}
      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-4xl">📦</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">O que você vai receber</h2>
          <p className="text-slate-500 mt-4">Material completo em PDF pronto para imprimir</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "15 Histórias", desc: "Com 3 cenas cada" },
            { title: "Tamanhos A5 e A6", desc: "Versatilidade no uso" },
            { title: "Guia de Perguntas", desc: "Mediação oral completa" },
            { title: "Ficha de Observação", desc: "Registro pedagógico" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-emerald-500 transition-all text-center group">
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="text-center">
             <span className="text-slate-500 line-through text-sm">De R$ 47,00</span>
             <p className="text-xl md:text-2xl font-black text-emerald-600 whitespace-nowrap">Por apenas R$ 10,00</p>
          </div>
          <Button text="GARANTIR MEU MATERIAL" onClick={scrollToCheckout} />
        </div>
      </Section>

      {/* 6. Para quem / Como usar - Slate 100 background */}
      <Section className="bg-slate-100">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">👩‍🏫</span> Para quem?
            </h2>
            <ul className="space-y-4">
              {[
                "Professoras da Educação Infantil (4 e 5 anos)",
                "Turmas que precisam falar mais e copiar menos",
                "Crianças tímidas ou com baixa iniciativa verbal",
                "Buscadores de atividades significativas"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="text-emerald-500 font-bold">✓</span> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">🖨️</span> Na prática
            </h2>
            <ul className="space-y-4">
              {[
                "Imprima os cartões em sua casa ou escola",
                "Plastifique para maior durabilidade",
                "Use em qualquer momento da rotina",
                "Sem preparo complexo nem explicação longa"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="text-indigo-500 font-bold">→</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 7. Por que este material funciona? - Dark gradient background */}
      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-4xl">✨</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-12">Por que este material funciona?</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              "Valoriza a fala da criança",
              "Respeita o desenvolvimento infantil",
              "Estimula a imaginação",
              "Transforma imagens em linguagem",
              "Ajuda a observar sem interromper"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl">
                <div className="w-10 h-10 flex-shrink-0 bg-emerald-500 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-2xl font-bold text-emerald-400">
            É um material simples, mas pedagogicamente potente.
          </p>
        </div>
      </Section>

      {/* Footer / Final CTA - Pure White */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center space-y-8 px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Pronto para transformar sua prática pedagógica?
          </h2>
          <p className="text-xl text-slate-500">
            Receba agora 15 histórias visuais completas e comece a aplicar ainda hoje.
          </p>
          <div className="py-8 bg-emerald-50 rounded-2xl border-2 border-emerald-100 flex flex-col items-center justify-center">
            <span className="text-slate-400 line-through text-base block">De R$ 47,00</span>
            <span className="text-3xl md:text-4xl font-black text-emerald-600 block my-2 whitespace-nowrap">Por apenas R$ 10,00</span>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-tighter italic">Oferta por tempo limitado</span>
          </div>
          <div className="pt-6">
            <Button text="QUERO O ACESSO AGORA" onClick={scrollToCheckout} className="w-full md:w-auto" />
          </div>
          <div className="flex justify-center items-center gap-8 pt-8 opacity-60">
            <img src="https://img.shields.io/badge/Compra-Segura-green?style=flat-square" alt="Compra segura" />
            <img src="https://img.shields.io/badge/Garantia-7%20dias-blue?style=flat-square" alt="Garantia" />
            <img src="https://img.shields.io/badge/Entrega-Imediata-orange?style=flat-square" alt="Entrega imediata" />
          </div>
        </div>
        <p className="text-slate-400 text-sm mt-12">
          &copy; {new Date().getFullYear()} Mini-Histórias Sem Final. Todos os direitos reservados.
        </p>
      </footer>

      {/* Sticky Mobile Button (Visible only on mobile for high conversion) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 md:hidden z-50 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 line-through leading-none">R$ 47</span>
          <span className="text-lg font-black text-emerald-600 leading-none whitespace-nowrap">R$ 10</span>
        </div>
        <Button text="COMPRAR" onClick={scrollToCheckout} className="!py-3 !px-6 !text-base flex-grow" />
      </div>

    </div>
  );
};

export default App;
