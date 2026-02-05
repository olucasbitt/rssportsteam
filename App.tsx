
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Instagram, 
  MessageSquare, 
  Target, 
  TrendingUp,
  Award,
  Menu,
  X
} from 'lucide-react';
import { ACHIEVEMENTS, FEATURES } from './constants';

const RSLogo = ({ className = "h-14" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/imagens/logo2.jpeg" 
      alt="RSSports Desenvolvimentos" 
      className="h-full w-auto object-contain"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Equipe', href: '#about' },
    { name: 'Rodrigo "Sucata" Dimare', href: '#sucata' },
    { name: 'Conquistas', href: '#achievements' },
    { name: 'Galeria', href: '#gallery' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-deepBlack/95 py-3 border-b border-racingYellow/20 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <RSLogo />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-racingYellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-racingYellow text-deepBlack font-black uppercase text-[10px] px-5 py-2 skew-box hover:bg-white transition-all shadow-[0_0_20px_rgba(214,255,0,0.2)]"
          >
            <span className="skew-box-reverse block">Contato</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 outline-none focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} className="text-racingYellow" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-deepBlack z-[99] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-racing font-black uppercase italic tracking-tighter text-white hover:text-racingYellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 bg-racingYellow text-deepBlack font-black uppercase text-center py-4 px-12 skew-box text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="skew-box-reverse block">Entrar em Contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="mb-10 relative">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-[2px] bg-racingYellow"></div>
      <span className="text-racingYellow uppercase font-black tracking-[0.2em] text-[9px]">{subtitle}</span>
    </div>
    <h2 className="text-2xl md:text-3xl font-racing font-black uppercase italic text-white leading-tight">
      {title}
    </h2>
  </div>
);

const Hero = () => (
  <section className="relative h-screen w-full flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-deepBlack via-deepBlack/60 to-transparent z-10"></div>
    <div className="absolute inset-0 bg-[#0B0B0B]">
      {/* Onix Verde - Representação Visual Premium */}
      <img 
        src="/imagens/onix.jpeg" 
        alt="Chevrolet Onix Performance" 
        className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105 contrast-125 saturate-150 grayscale-0 brightness-75"
      />
    </div>
    
    <div className="container mx-auto px-6 relative z-20 pt-24">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-racingYellow text-deepBlack skew-box mb-6 shadow-[0_0_20px_rgba(214,255,0,0.25)]">
          <span className="skew-box-reverse text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
            <Award size={12} /> A primeira equipe campeã das 500 Milhas de Interlagos
          </span>
        </div>
        
        <h1 className="text-3xl md:text-6xl font-racing font-black italic uppercase leading-[1] text-white mb-6">
          DESENVOLVIMENTO E <br />
          <span className="text-racingYellow drop-shadow-[0_0_15px_rgba(214,255,0,0.4)]">PERFORMANCE</span>
        </h1>
        
        <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 font-light leading-relaxed">
          Especialistas em endurance e preparação multimarcas. Da pista para a engenharia, transformamos tecnologia em resultados absolutos.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="bg-racingYellow text-deepBlack font-black uppercase text-xs px-8 py-4 skew-box hover:bg-white transition-all flex items-center gap-2">
            <span className="skew-box-reverse flex items-center gap-2">
              Seja um Patrocinador <ChevronRight size={16} />
            </span>
          </a>
          <a href="#about" className="border border-white/20 text-white font-black uppercase text-xs px-8 py-4 skew-box hover:bg-racingYellow hover:text-deepBlack hover:border-racingYellow transition-all">
            <span className="skew-box-reverse">
              Conheça a Equipe
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-deepBlack relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-3 border border-racingYellow/20 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
          <div className="relative aspect-[4/3] overflow-hidden bg-graphite shadow-2xl border border-white/5">
            {/* Foto Onix Verde Preparado */}
            <img 
              src="/imagens/polo_onix.jpg" 
              alt="Corrida" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 contrast-110" 
            />
            <div className="absolute bottom-4 left-4 bg-racingYellow p-4 skew-box shadow-xl">
              <div className="skew-box-reverse flex flex-col">
                <span className="text-deepBlack font-black text-xl font-racing italic leading-none">MULTIMARCAS</span>
                <span className="text-deepBlack/60 text-[8px] font-bold uppercase tracking-widest mt-1">Engenharia de Pista</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading subtitle="Sobre a Equipe" title="Expertise Sem Limites" />
          <div className="space-y-4 text-white/70 text-base leading-relaxed mb-10">
				<p>
				  A <span className="text-white font-bold">RSSports Team</span> nasceu da paixão pelo automobilismo e da busca constante por performance real em pista. Fundada por <span className="text-white font-bold">Rodrigo Sucata</span>, a equipe construiu sua trajetória unindo experiência prática, engenharia aplicada e mentalidade competitiva.
				</p>
				<p>
				  Com base no <span className="text-white font-bold">box de competição</span> em <span className="text-racingYellow italic font-bold">Tarumã (RS)</span>, a RSSports evoluiu dentro do ambiente de corrida, transformando conhecimento técnico em resultados concretos. Cada projeto carrega a mesma filosofia: <span className="text-white font-bold italic">preparação extrema, decisões estratégicas e foco absoluto em vitória</span>.
				</p>
			</div>
          
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex gap-3 p-4 glass-card group hover:bg-racingYellow/5 transition-colors border-l-2 border-l-transparent hover:border-l-racingYellow">
                <div className="text-racingYellow group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-racing font-bold uppercase text-white text-[11px] mb-1">{feature.title}</h4>
                  <p className="text-[10px] text-white/50 leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DriverProfile = () => (
  <section id="sucata" className="py-24 bg-gradient-to-b from-deepBlack to-graphite/20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 border border-racingYellow opacity-20 skew-box"></div>
            <div className="relative z-10 overflow-hidden bg-deepBlack border-b-4 border-racingYellow skew-box shadow-xl aspect-[4/5]">
             
              <img 
                src="/imagens/rodrigo.jpeg" 
                alt="Rodrigo Sucata - Piloto & Team Principal" 
                className="w-full h-full object-cover scale-105 skew-box-reverse hover:scale-110 transition-all duration-700 brightness-75 contrast-125 saturate-110"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-racingYellow"></div>
                    <span className="text-white font-racing font-black italic text-lg tracking-tighter uppercase text-nowrap">Rodrigo "Sucata" Dimare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <SectionHeading subtitle="Liderança" title="O Comandante da Operação" />
          <h3 className="text-lg font-racing font-bold italic text-white mb-6 border-l-4 border-racingYellow pl-5">
            Piloto & Chefe de Equipe
          </h3>
          <p className="text-white/100 text-lg italic mb-8 leading-relaxed font-light">
            "Em endurance, não vence o mais rápido. Vence quem erra menos por mais tempo."
          </p>
		  <p className="space-y-4 text-white/70 text-base leading-relaxed mb-10">
			A trajetória de <span className="text-white font-bold">Rodrigo “Sucata” Dimare</span>  começou no automobilismo resolvendo problemas dentro de oficina antes mesmo de liderar equipes na pista. A vivência prática, somada à obsessão por performance, moldou a base técnica e a mentalidade competitiva da equipe.
		  </p>
		  <p className="space-y-4 text-white/70 text-base leading-relaxed mb-10">
			Hoje, como <span className="text-white font-bold">piloto e chefe de equipe</span>, Rodrigo comanda cada detalhe da operação a partir do <span className="text-white font-bold">box de competição</span> em <span className="text-racingYellow italic font-bold">Tarumã (RS)</span>, transformando engenharia aplicada em resultado real. A filosofia segue a mesma desde o início: <span className="text-white font-bold italic">entender o carro por completo, tomar decisões sob pressão e competir para vencer — sempre</span>.
		  </p>
		  <br />
		 
		 
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h5 className="font-bold text-racingYellow uppercase text-[10px] tracking-widest flex items-center gap-2">
                <Target size={14} /> Foco Multimarcas
              </h5>
              <p className="text-white/60 text-xs">Visão técnica abrangente para extrair o máximo de cada plataforma (Onix, BMW, Polo, Audi).</p>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-racingYellow uppercase text-[10px] tracking-widest flex items-center gap-2">
                <TrendingUp size={14} /> Projetos de Engenharia
              </h5>
              <p className="text-white/60 text-xs">Desenvolvimento de soluções proprietárias que se tornaram referência no automobilismo gaúcho.</p>
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="h-[1px] flex-grow bg-white/10"></div>
            <a href="https://www.instagram.com/rssportsteam/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-racingYellow hover:text-deepBlack hover:border-racingYellow transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InstagramGallery = () => {
  const posts = [
    { type: 'image', url: './imagens/etios.jpg' },
    { type: 'image', url: './imagens/motor.jpg' },
    { type: 'image', url: './imagens/polo2.jpg' },
    { type: 'image', url: './imagens/etios2.jpg' },
    { type: 'image', url: './imagens/pitstop.jpg' },
    { type: 'image', url: './imagens/projeto.jpg' },
  ];

  return (
    <section id="gallery" className="py-24 bg-deepBlack">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading subtitle="Galeria" title="Performance Técnica" />
          <a href="https://www.instagram.com/rssportsteam/" className="flex items-center gap-2 text-white/40 hover:text-racingYellow transition-all group">
            <Instagram size={20} />
            <span className="font-bold uppercase text-[9px] tracking-[0.2em]">Siga @rssportsteam</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 shadow-2xl shadow-black">
          {posts.map((post, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden bg-graphite">
              <img src={post.url} alt="Ação RSSports" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 brightness-75 contrast-125 saturate-110 opacity-85 group-hover:opacity-100"
 />
              <div className="absolute inset-0 bg-racingYellow/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => (
  <section id="achievements" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Conquistas" title="Marcos de Vitória" />
      
      <div className="grid md:grid-cols-3 gap-8">
        {ACHIEVEMENTS.map((item, idx) => (
          <div key={idx} className="group relative glass-card p-8 border-b-2 border-b-transparent hover:border-b-racingYellow transition-all duration-500 overflow-hidden">
            <Award size={32} className="text-racingYellow/30 group-hover:text-racingYellow mb-6 transition-colors" />
            <span className="text-racingYellow font-black text-[9px] block mb-3 tracking-[0.2em]">{item.year}</span>
            <h4 className="text-xl font-racing font-black text-white mb-4 uppercase italic leading-tight">{item.title}</h4>
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-4">{item.category}</p>
            <p className="text-white/60 text-xs leading-relaxed mb-6">{item.description}</p>
            {item.highlight && (
              <div className="bg-racingYellow text-deepBlack px-3 py-1.5 text-[8px] font-black uppercase tracking-widest inline-block skew-box">
                <span className="skew-box-reverse block">{item.highlight}</span>
              </div>
            )}
            <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-all duration-700">
               <Award size={100} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SponsorsMarquee = () => (
  <section className="py-12 bg-deepBlack border-y border-white/5 overflow-hidden">
    <div className="animate-marquee">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center gap-16 px-8">
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">TOYOTA</span>
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">RSSPORTS</span>
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">CHEVROLET</span>
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">RSSPORTS</span>
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">AUDI</span>
          <span className="text-white/20 font-racing font-black text-2xl italic uppercase">BMW</span>
        </div>
      ))}
    </div>
  </section>
); 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Patrocínio",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xgolwpdj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-deepBlack">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 bg-racingYellow text-deepBlack">
              <h3 className="text-2xl font-racing font-black uppercase italic mb-6 leading-none">
                Acelere <br />
                Conosco
              </h3>
              <p className="font-bold text-sm mb-10 opacity-80 uppercase tracking-tight leading-snug">
                Torne sua marca parceira oficial da RSSports Team e conquiste visibilidade nacional.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div
                    className="w-11 h-11 bg-deepBlack text-white flex items-center justify-center shadow-lg"
                    role="img"
                    aria-label="WhatsApp Icon"
                  >
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-60">WhatsApp</p>
                    <p className="font-racing text-base">+55 (51) 98765.4321</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div
                    className="w-11 h-11 bg-deepBlack text-white flex items-center justify-center shadow-lg"
                    role="img"
                    aria-label="Sede Técnica Icon"
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Sede Técnica</p>
                    <p className="font-racing text-base uppercase">Tarumã, RS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-deepBlack/40">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome / Marca */}
                  <div className="space-y-0.5">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/40">
                      Nome / Marca
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-racingYellow outline-none transition-all text-xs"
                      placeholder="Sua Empresa"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-0.5">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/40">
                      E-mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-racingYellow outline-none transition-all text-xs"
                      placeholder="contato@empresa.com"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-0.5">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/40">
                      Telefone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-racingYellow outline-none transition-all text-xs"
                      placeholder="(51) 99999-9999"
                    />
                  </div>

                  {/* Interesse */}
                  <div className="space-y-0.5">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/40">
                      Interesse
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-racingYellow outline-none transition-all text-xs"
                    >
                      <option className="bg-deepBlack">Patrocínio</option>
                      <option className="bg-deepBlack">Projeto de Veículo</option>
                      <option className="bg-deepBlack">Parceria Técnica</option>
                      <option className="bg-deepBlack">Outro</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-0.5">
                    <label className="text-[8px] font-black uppercase tracking-widest text-white/40">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-racingYellow outline-none transition-all text-xs resize-none"
                      placeholder="Descreva brevemente sua proposta..."
                    />
                  </div>

                  {/* Botão */}
                  <button
                    type="submit"
                    className="w-full border border-racingYellow text-racingYellow hover:bg-racingYellow hover:text-deepBlack py-3 font-black uppercase tracking-[0.2em] transition-all text-[10px] skew-box"
                  >
                    Enviar
                  </button>
                </form>
              ) : (
                <div className="text-center text-racingYellow font-black text-sm uppercase tracking-wide py-20">
                  Sua solicitação foi recebida, <br /> em breve a RSSports Team entrará em contato.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 


const Footer = () => (
  <footer className="py-16 bg-deepBlack border-t border-white/5">
   <div className="flex flex-col items-center gap-1">
	  <RSLogo className="h-14" />
	  <div className="text-white/30 text-[8px] uppercase font-black tracking-[0.4em] text-center">
		<p>© 2015 RSSPORTS TEAM <br/> </p>
		<p>Desenvolvimento & Performance</p>
	 </div>
	  <a href="https://www.instagram.com/rssportsteam/" className="flex items-center gap-2 text-white/40 hover:text-racingYellow transition-all group">
            <Instagram size={20} />
            <span className="font-bold uppercase text-[9px] tracking-[0.2em]">Siga @rssportsteam</span>
          </a>
	</div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-white bg-deepBlack min-h-screen selection:bg-racingYellow selection:text-deepBlack">
      <Navbar />
      <main>
        <Hero />
        <SponsorsMarquee />
        <About />
        <DriverProfile />
        <Achievements />
        <InstagramGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
