"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Camera, Users, Music, ImageIcon, Bus } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

export default function HomePage() {
  return (
    (<div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header Melhorado */}
      <header
        className="bg-white/90 backdrop-blur-md shadow-lg border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-[50px] h-[50px] overflow-hidden">
                <Link href={'#home'}>
                  <Image
                    src="/logo.png"
                    alt="Bonecos Gigantes de Olinda"
                    fill
                    className="object-cover" />
                </Link>
              </div>
            </div>
            <nav className="w-full md:w-auto mt-4 md:mt-0">
              <div
                className="flex flex-row items-center justify-center space-x-4 md:space-x-6">
                <Link
                  href="#sobre"
                  className="text-blue-600 hover:text-blue-800 transition-all hover:scale-105 font-medium">
                  Sobre
                </Link>
                <Link
                  href="#historia"
                  className="text-green-600 hover:text-green-800 transition-all hover:scale-105 font-medium">
                  História
                </Link>
                <Link
                  href="#atrações"
                  className="text-yellow-600 hover:text-yellow-800 transition-all hover:scale-105 font-medium">
                  Atrações
                </Link>
                <Link
                  href="#horarios"
                  className="text-red-600 hover:text-red-800 transition-all hover:scale-105 font-medium">
                  Horários
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Melhorado */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto relative z-10">
          <div
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-10 px-4 md:px-10">
            <div className="space-y-6 md:space-y-8 animate-fade-in-up">
              <h1
                className="text-3xl md:text-5xl font-serif font-bold text-red-800 leading-tight">
                Casa dos Bonecos Gigantes e Mirins de Olinda
              </h1>
              <p className="text-lg md:text-2xl text-orange-700 font-semibold">
                A cultura popular pernambucana
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Uma experiência única no coração de Olinda, onde tradição, arte e identidade nordestina ganham vida em
                bonecos de mais de 2 metros de altura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://api.whatsapp.com/send/?phone=558198536019&text&type=phone_number&app_absent=0">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-red-500 bg-gradient-to-r from-red-600 to-orange-600 hover:bg-red-50 px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Visitar Agora
                  </Button>
                </Link>
                <Link href="#horarios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-red-500 bg-gradient-to-r from-red-600 to-orange-600 hover:bg-red-50 px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Ver Horários
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl animate-fade-in-right mt-8 md:mt-0">
              <Image
                src="/hero.jpg"
                alt="Bonecos Gigantes de Olinda"
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Casa Melhorado */}
      <section id="sobre" className="py-12 md:py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-5xl font-bold text-red-800 font-serif">
                Sobre a Casa
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p
                  className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-red-100">
                  A Casa dos Bonecos Gigantes é um dos espaços culturais mais marcantes de Olinda. Localizada no bairro
                  do Carmo, ela abriga dezenas de bonecos em tamanho gigante que representam personalidades históricas,
                  artistas populares e figuras icônicas da cultura nordestina.
                </p>
                <p
                  className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-orange-100">
                  Mais do que um ponto turístico, o espaço é um mergulho vivo na identidade e na alegria do povo
                  pernambucano. Aqui, você encontra apresentações ao vivo, dançarinos de frevo, exposições permanentes e
                  uma imersão encantadora no universo dos festejos populares.
                </p>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <Image
                src="/Casa.jpeg"
                alt="Interior da Casa dos Bonecos"
                width={400}
                height={500}
                className="relative w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História Melhorado */}
      <section id="historia" className="py-12 md:py-20 backdrop-blur-sm px-4 md:px-0">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-5xl font-bold text-center text-red-800 font-serif mb-12 md:mb-16">
              Nossa História
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6">
                <div
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    A tradição dos bonecos gigantes em Olinda começou a ganhar força nas festas populares como o Carnaval,
                    trazendo personagens em proporções exuberantes para as ladeiras da cidade. Inspirada por expressões
                    culturais europeias e adaptada ao ritmo brasileiro, a arte dos bonecos se tornou um símbolo local.
                  </p>
                </div>
                <div
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    A Casa dos Bonecos Gigantes surgiu como um espaço para preservar, celebrar e divulgar essa tradição.
                    Fundada por artista e entusiasta da cultura pernambucana, a Casa abriga hoje um acervo que mistura
                    humor, crítica social e homenagem a grandes nomes da história nordestina — como Luiz Gonzaga e muitos outros.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <div
                    className="absolute -inset-4 bg-gradient-to-r from-red-400 to-yellow-400 rounded-2xl blur opacity-20"></div>
                  <Image
                    src="/Carnaval.png"
                    alt="Bonecos históricos"
                    width={500}
                    height={600}
                    className="relative w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
                <div
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-100">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    Ao visitar a Casa, você não apenas vê os bonecos — você caminha entre eles, escuta suas histórias e
                    sente a vibração cultural que pulsa em cada detalhe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atrações Melhorado */}
      <section id="atrações" className="py-12 md:py-20 px-4 md:px-0">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold text-center text-red-800 font-serif mb-12 md:mb-16">
            O que você encontrará aqui
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-red-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Bonecos GIGANTES</h3>
              <p className="text-gray-600 text-base md:text-lg">Figuras populares, históricas e culturais em escala gigante.</p>
            </Card>

            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Apresentações culturais</h3>
              <p className="text-gray-600 text-base md:text-lg">Apresentações de passistas do frevo sexta, sábado e domingo.</p>
            </Card>

            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-yellow-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Exposição permanente</h3>
              <p className="text-gray-600 text-base md:text-lg">Um passeio visual e interativo pela cultura nordestina.</p>
            </Card>

            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-green-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Espaço instagramável</h3>
              <p className="text-gray-600 text-base md:text-lg">Traga sua câmera — aqui cada canto é uma foto inesquecível.</p>
            </Card>

            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Acesso fácil e visitação diária</h3>
              <p className="text-gray-600 text-base md:text-lg">Aberto todos os dias da semana, com entrada simples e rápida com um valor acessível.</p>
            </Card>

            <Card
              className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Bus className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Entrada gratuita</h3>
              <p className="text-gray-600 text-base md:text-lg">Para alunos e professores de escolas públicas com agendamento e ofício prévios.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Horários Melhorado */}
      <section id="horarios" className="py-12 md:py-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-5xl font-bold text-center text-red-800 font-serif mb-12 md:mb-16">
              Horários de Funcionamento
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card
                className="p-8 md:p-10 bg-white/90 backdrop-blur-sm shadow-2xl border border-red-100 hover:shadow-3xl transition-shadow rounded-2xl">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Endereço</h3>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  R. Bispo Coutinho, 780 - Carmo
                  <br />
                  Olinda - PE
                </p>
              </Card>

              <Card
                className="p-8 md:p-10 bg-white/90 backdrop-blur-sm shadow-2xl border border-orange-100 hover:shadow-3xl transition-shadow rounded-2xl">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Funcionamento</h3>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Todos os dias - das 09h00 às 17h30
                  <br />
                  Em férias escolares - das 09h00 às 19h00
                </p>
              </Card>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur opacity-20"></div>
                <Image
                  src="/fachada.png"
                  alt="Fachada da Casa dos Bonecos"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Melhorado */}
      <section
        className="py-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Planeje sua Visita
            </h2>
            <p
              className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 drop-shadow">
              Visitar a Casa dos Bonecos Gigantes é uma forma leve, divertida e emocionante de conhecer mais da alma
              nordestina. Seja você turista, morador ou estudante, temos certeza de que vai se encantar.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://api.whatsapp.com/send/?phone=558198536019&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-50 px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 rounded-xl">
                  🎭 Vamos Visitar! 🎪
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Melhorado */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Preservando a cultura nordestina através da arte e da tradição.
            </p>
            <div className="flex justify-center pt-2">
              <Link
                href="https://instagram.com/bonecosgigantesemirinsdeolinda"
                className="text-gray-300 hover:text-orange-400 transition-colors text-base md:text-lg hover:scale-105 transform duration-200"
                target="_blank"
                rel="noopener noreferrer">
                📱 Siga-nos no Instagram: @bonecosgigantesemirinsdeolinda
              </Link>
            </div>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Casa dos Bonecos Gigantes e Mirins de Olinda. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>)
  );
}
