"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Camera, Users, Music, ImageIcon, Bus } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';
import Confetti from '@/components/Confetti';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
}

export default function HomePage() {
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newConfetti = {
        id: Date.now(),
        x: e.pageX,
        y: e.pageY,
      };
      setConfetti((prevConfetti) => [...prevConfetti, newConfetti]);

      setTimeout(() => {
        setConfetti((prevConfetti) => prevConfetti.slice(1));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-soft-red">
      {confetti.map((c) => (
        <Confetti key={c.id} x={c.x} y={c.y} />
      ))}
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-black" />
              </div>
              <span className="text-lg  md:text-xl font-bold text-red-700">Casa dos Bonecos Gigantes de Olinda</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/AndreVasconcelos" className="text-purple-700 hover:text-black transition-colors">
                Andre Vasconcelos
              </Link>
              <Link href="#sobre" className="text-blue-700 hover:text-black transition-colors">
                Sobre
              </Link>
              <Link href="#historia" className="text-green-700 hover:text-black transition-colors">
                História
              </Link>
              <Link href="#atrações" className="text-yellow-500 hover:text-black transition-colors">
                Atrações
              </Link>
              <Link href="#horarios" className="text-red-700 hover:text-black transition-colors">
                Horários
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-10 md:py-20 lg:py-32 overflow-hidden">
        <div className=" container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 leading-tight">
                Casa dos Bonecos Gigantes de Olinda
              </h1>
              <p className="text-xl lg:text-2xl text-yellow-400 font-medium">
                A cultura popular pernambucana
              </p>
              <p className="text-lg text-yellow-300 leading-relaxed">
                Uma experiência única no coração de Olinda, onde tradição, arte e identidade nordestina ganham vida em
                bonecos de mais de 2 metros de altura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"https://api.whatsapp.com/send/?phone=558198536019&text&type=phone_number&app_absent=0"}>
                <Button size="lg" className="bg-red-800 hover:bg-red-700 text-white px-8 py-3">
                  Visitar
                </Button>
                </Link>
                <Link href="#horarios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-red text-white hover:bg-soft-red px-8 py-3 bg-transparent"
                  >
                    Ver Horários
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero.jpg"
                alt="Bonecos Gigantes de Olinda"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Casa */}
      <section id="sobre" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Sobre a Casa</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A Casa dos Bonecos Gigantes é um dos espaços culturais mais marcantes de Olinda. Localizada no bairro
                  do Carmo, ela abriga dezenas de bonecos em tamanho gigante que representam personalidades históricas,
                  artistas populares e figuras icônicas da cultura nordestina.
                </p>
                <p>
                  Mais do que um ponto turístico, o espaço é um mergulho vivo na identidade e na alegria do povo
                  pernambucano. Aqui, você encontra apresentações ao vivo, dançarinos de frevo, exposições permanentes e
                  uma imersão encantadora no universo dos festejos populares.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Casa.jpeg"
                alt="Interior da Casa dos Bonecos"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">Nossa História</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A tradição dos bonecos gigantes em Olinda começou a ganhar força nas festas populares como o Carnaval,
                  trazendo personagens em proporções exuberantes para as ladeiras da cidade. Inspirada por expressões
                  culturais europeias e adaptada ao ritmo brasileiro, a arte dos bonecos se tornou um símbolo local.
                </p>
                <p>
                  A Casa dos Bonecos Gigantes surgiu como um espaço para preservar, celebrar e divulgar essa tradição.
                  Fundada por artistas e entusiastas da cultura pernambucana, a Casa abriga hoje um acervo que mistura
                  humor, crítica social e homenagem a grandes nomes da história nordestina — como Luiz Gonzaga, Lampião,
                  Ariano Suassuna e muitos outros.
                </p>
              </div>
              <div className="space-y-4">
                <Image
                  src="/Carnaval.png"
                  alt="Bonecos históricos"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  Ao visitar a Casa, você não apenas vê os bonecos — você caminha entre eles, escuta suas histórias e
                  sente a vibração cultural que pulsa em cada detalhe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você encontrará aqui */}
      <section id="atrações" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">O que você encontrará aqui</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bonecos GIGANTES</h3>
              <p className="text-gray-600">Figuras populares, históricas e culturais em escala gigante.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Apresentações culturais</h3>
              <p className="text-gray-600">Dançarinos de frevo e música ao vivo em horários selecionados.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exposição permanente</h3>
              <p className="text-gray-600">Um passeio visual e interativo pela cultura nordestina.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Espaço instagramável</h3>
              <p className="text-gray-600">Traga sua câmera — aqui cada canto é uma foto inesquecível.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Acesso fácil e visitação diária</h3>
              <p className="text-gray-600">Aberto todos os dias da semana, com entrada simples e rápida com um valor acessível.</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-soft-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrada gratuita</h3>
              <p className="text-gray-600">Para alunos e professores de escolas públicas com agendamento e ofício prévios.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Horários de Funcionamento */}
      <section id="horarios" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
              Horários de Funcionamento
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-700 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  R. Bispo Coutinho, 780 – Carmo
                  <br />
                  Olinda – PE
                </p>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-700 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Funcionamento</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  Todos os dias - das 09h00 às 17h30
                  <br />
                  Em férias escolares - das 09h00 às 19h00
                </p>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Image
                src="/fachada.png"
                alt="Fachada da Casa dos Bonecos"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planeje sua Visita */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-6">Planeje sua Visita</h2>
            <p className="text-lg text-yellow-500 leading-relaxed mb-8">
              Visitar a Casa dos Bonecos Gigantes é uma forma leve, divertida e emocionante de conhecer mais da alma
              nordestina. Seja você turista, morador ou estudante, temos certeza de que vai se encantar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://maps.app.goo.gl/fQj7K2Ua9ZKB8bEcA" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 hover:bg-red-700 text-black px-8 py-3">
                  Vamos Visitar!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Casa dos Bonecos Gigantes de Olinda</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Preservando a cultura nordestina através da arte e da tradição.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <Link
                href="https://instagram.com/bonecosgigantesolinda"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Siga-nos no Instagram: @bonecosgigantesolinda
              </Link>
            </div>
            <div className="border-t border-gray-700 pt-8 mt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Casa dos Bonecos Gigantes de Olinda. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
