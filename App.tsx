
import React, { useEffect, useState } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Check, ArrowRight, Play, BookOpen, Target, Layout, Users, Printer, Sparkles, ShieldCheck, Clock, Download } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    window.alert("Redirecionando para o checkout seguro...");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-emerald-100 font-['Montserrat']">
      
      {/* 1. HERO - DARK SECTION */}
      <Section className="bg-[#0f172a] text-white pt-24 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-left animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest mb-6 border border-emerald-500/30">
              <Sparkles size={14} /> Material Digital Premium
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              MINI-HISTÓRIAS <span className="text-emerald-400">SEM FINAL</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl">
              Produção oral espontânea na Educação Infantil através de narrativas visuais que despertam a imaginação.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <span className="text-slate-400 line-through text-sm block">De R$ 47,00</span>
                <span className="text-3xl font-black text-emerald-400">R$ 10,00</span>
              </div>
              <Button 
                text="QUERO O ACESSO IMEDIATO" 
                onClick={scrollToCheckout} 
                className="shadow-[0_0_30px_rgba(16,185,129,0.3)] !py-6"
              />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-500"/> Compra Segura</span>
              <span className="flex items-center gap-1"><Download size={14} className="text-emerald-500"/> Download Imediato</span>
              <span className="flex items-center gap-1"><Clock size={14} className="text-emerald-500"/> Acesso Vitalício</span>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl lg:max-w-none animate-slideInRight">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.tcdn.com.br/img/img_prod/841280/6_livros_historias_infantis_classic_stars_kit_3_todolivro_701565_1_0631b9564eb10b8ce0ff22a983960046.jpg" 
                  alt="Mockup Mini-Histórias" 
                  className="w-full aspect-[4/3] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-full h-20 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden">
                         <img 
                          src={`https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=200&sig=${i}`} 
                          alt="Cena exemplo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. O QUE É ESTE MATERIAL - LIGHT SECTION */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-4">
              <BookOpen size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">O que é este material?</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Material pedagógico composto por cartões visuais com histórias incompletas, organizadas em três cenas ilustradas, sem texto e sem desfecho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <blockquote className="text-xl md:text-2xl font-semibold text-slate-800 italic leading-snug">
                "A proposta é simples e poderosa: a criança observa as imagens, compreende a sequência e cria oralmente o final da história."
              </blockquote>
            </div>
            <div className="bg-emerald-500 p-8 rounded-3xl text-white flex flex-col justify-center text-center">
              <p className="text-lg font-medium opacity-90 mb-2">Conceito Central:</p>
              <p className="text-2xl font-extrabold">Não é para copiar ou decorar. É para pensar, imaginar e falar.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. OBJETIVO PEDAGÓGICO - ACCENT SECTION */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
            <Target size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Objetivos Pedagógicos</h2>
          <p className="text-slate-500 text-lg">Desenvolvimento natural sem exigência de escrita</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Oralidade espontânea", icon: <Users size={24}/> },
            { title: "Organização de ideias", icon: <Layout size={24}/> },
            { title: "Sequência narrativa", icon: <ArrowRight size={24}/> },
            { title: "Ampliação de vocabulário", icon: <Sparkles size={24}/> },
            { title: "Expressão de emoções", icon: <BookOpen size={24}/> },
            { title: "Zero Escrita", icon: <Check size={24}/> },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. COMO FUNCIONA - LIGHT SECTION */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800" 
                alt="Crianças brincando com histórias" 
                className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block border border-slate-100">
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                   <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div> 
                   Uso 100% Intuitivo
                </p>
                <p className="text-xs text-slate-500 mt-2">O material guia o professor através da mediação sugerida.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <div className="inline-block p-3 bg-orange-50 text-orange-600 rounded-2xl mb-4">
              <Play size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Como funciona a atividade?</h2>
            <div className="space-y-6">
              {[
                { n: "01", text: "O professor apresenta os três cartões da história." },
                { n: "02", text: "As imagens mostram o que aconteceu primeiro e depois." },
                { n: "03", text: "O final não aparece: o mistério gera o engajamento." },
                { n: "04", text: "A criança cria o final oralmente com perguntas-guia." },
                { n: "05", text: "O professor observa e registra a evolução narrativa." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="text-3xl font-black text-slate-200 leading-none">{step.n}</span>
                  <p className="text-lg text-slate-700 font-medium">{step.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500">
              <h4 className="font-bold text-slate-900 mb-2">Ideal para:</h4>
              <p className="text-slate-600 text-sm">Rodas de conversa, atividades em dupla, atendimento individual ou transições de rotina.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. VISUAL GALLERY - DARK SECTION */}
      <Section className="bg-[#0f172a] text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Visualize o Material</h2>
          <p className="text-slate-400">Exemplos de cenas ilustradas que compõem o kit</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400", title: "Cena 1: O Início" },
            { img: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?auto=format&fit=crop&q=80&w=400", title: "Cena 2: O Conflito" },
            { img: "https://images.tcdn.com.br/img/img_prod/841280/6_livros_historias_infantis_classic_stars_kit_3_todolivro_701565_1_0631b9564eb10b8ce0ff22a983960046.jpg", title: "Mediação Pedagógica" }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-emerald-400 text-xl font-bold mb-8">São 15 histórias completas esperando por você.</p>
          <Button text="EU QUERO ESSAS HISTÓRIAS" onClick={scrollToCheckout} className="!py-5 !px-12" />
        </div>
      </Section>

      {/* 6. O QUE VOCÊ VAI RECEBER - LIGHT SECTION */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-4">
            <Download size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">O que você vai receber</h2>
          <p className="text-slate-500">Conteúdo 100% digital, pronto para download</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "15 Histórias", desc: "45 cenas exclusivas no total", icon: <BookOpen /> },
            { title: "Formatos A5 e A6", desc: "Tamanhos ideais para mãos pequenas", icon: <Layout /> },
            { title: "Perguntas-Guia", desc: "Roteiro completo de mediação", icon: <Target /> },
            { title: "Ficha de Obs.", desc: "Para registrar o progresso oral", icon: <Check /> },
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] border-2 border-transparent hover:border-emerald-500 hover:bg-white transition-all text-center group">
              <div className="text-emerald-500 mb-6 flex justify-center scale-125">{item.icon}</div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. PARA QUEM É INDICADO - LIGHT GRAY SECTION */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-200">
            <div className="inline-block p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
              <Users size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Para quem este material é indicado?</h2>
            <ul className="space-y-4">
              {[
                "Professoras da Educação Infantil (4 e 5 anos)",
                "Turmas que precisam falar mais e copiar menos",
                "Crianças tímidas ou com pouca iniciativa verbal",
                "Professores que buscam atividades sem fichas mecânicas"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600">
                  <Check className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-200">
            <div className="inline-block p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-6">
              <Printer size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Como utilizar na prática?</h2>
            <ul className="space-y-4">
              {[
                "Imprima os cartões em PDF",
                "Plastifique para maior durabilidade",
                "Use em qualquer momento da rotina escolar",
                "Não exige preparo complexo nem explicações longas"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600">
                  <ArrowRight className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. POR QUE FUNCIONA - DARKER SECTION */}
      <Section className="bg-[#1e293b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl mb-6">
            <Sparkles size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Por que funciona?</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              "Valoriza a fala e o protagonismo da criança",
              "Respeita o tempo do desenvolvimento infantil",
              "Estimula a imaginação livre de julgamentos",
              "Transforma imagens em linguagem estruturada",
              "Ajuda o professor a observar sem interromper"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-5 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-10 h-10 flex-shrink-0 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black">
                  {i + 1}
                </div>
                <p className="text-lg font-medium text-slate-200">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER / FINAL CTA - WHITE SECTION */}
      <footer className="py-24 bg-white border-t border-slate-100 text-center px-6 relative">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Pronto para ver seus alunos contando histórias incríveis?
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">
            Receba agora as 15 histórias visuais completas e transforme sua prática ainda hoje.
          </p>
          
          <div className="p-10 bg-slate-50 rounded-[3rem] border-2 border-emerald-100 relative overflow-hidden inline-block w-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
            <span className="text-slate-400 line-through text-lg block mb-2">De R$ 47,00</span>
            <span className="text-5xl md:text-6xl font-black text-emerald-600 block mb-4">R$ 10,00</span>
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">Oferta Exclusiva</span>
            
            <div className="flex flex-col items-center gap-6">
              <Button text="QUERO O MATERIAL AGORA" onClick={scrollToCheckout} className="w-full md:w-auto shadow-2xl" />
              <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale mt-4">
                <img src="https://img.shields.io/badge/Compra-Segura-green?style=flat-square" alt="Compra segura" />
                <img src="https://img.shields.io/badge/Entrega-Imediata-orange?style=flat-square" alt="Entrega imediata" />
                <img src="https://img.shields.io/badge/Garantia-7%20dias-blue?style=flat-square" alt="Garantia" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-100">
           <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Mini-Histórias Sem Final. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* STICKY CTA BUTTON FOR MOBILE */}
      <div className={`fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 md:hidden z-50 flex items-center justify-between gap-4 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 line-through leading-none font-bold">R$ 47</span>
          <span className="text-xl font-black text-emerald-600 leading-none">R$ 10</span>
        </div>
        <Button text="QUERO AGORA" onClick={scrollToCheckout} className="!py-3 !px-6 !text-sm flex-grow shadow-lg" />
      </div>

    </div>
  );
};

export default App;
