import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function AndreVasconcelosPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-700">André Vasconcelos</h1>
          <Link href="/">
            <Button variant="outline" className="border-primary-red bg-white text-red-700 hover:bg-red-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">O Artista por Trás dos Gigantes</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  André Vasconcelos é um renomado artista plástico e mestre bonequeiro de Olinda, Pernambuco. Com descendência indígena dos Caetés, ele esteve envolvido com a magia do Carnaval de Olinda desde a infância, tornando-se uma figura central na preservação e inovação da arte dos Bonecos Gigantes.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/hero.jpg"
                  alt="André Vasconcelos com um Boneco Gigante"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-xl mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Biography */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Um Legado de Dedicação</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed mb-4">
                Discípulo do icônico mestre Silvio Botelho, o criador da Casa dos Bonecos Gigantes, André começou sua jornada na confecção dos bonecos aos seis anos de idade. Hoje, ele dedica seus dias a criar novos personagens, utilizando materiais diversos como tecido, isopor, papel, madeira e fibra de vidro para dar vida a figuras que encantam o Brasil e o mundo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Além de seu trabalho como artesão, André Vasconcelos atua na curadoria e na disseminação da história e cultura por trás da tradição dos Bonecos Gigantes. Ele é uma peça-chave em projetos culturais que levam a arte de Olinda para novos públicos.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <Image
                  src="/Carnaval.png"
                  alt="Bonecos no Carnaval de Olinda"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Casarão - Um Novo Espaço para a Arte</h3>
                <p className="text-gray-700 leading-relaxed">
                  Recentemente, um novo espaço cultural foi inaugurado no Bairro do Recife, o Casarão - Bonecos Gigantes de Olinda em Recife. O local conta com uma exposição permanente de obras de André Vasconcelos, celebrando figuras da cultura popular pernambucana e grandes nomes da música brasileira, consolidando ainda mais seu legado.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Casa dos Bonecos Gigantes de Olinda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}