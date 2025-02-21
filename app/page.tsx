import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Volume2 } from "lucide-react";
import Image from "next/image";
import logo from "./logo.jpeg";
import produto from "./produto.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image src={logo} alt="Logo" width={50} className="my-5" />
          <span className="sr-only">Galatic Pinball</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Preço
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bem-vindo ao Galatic Pinball
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Descubra a magia do pinball como nunca antes! Um brinquedo
                    artesanal, feito à mão com materiais reciclados, pensado
                    para proporcionar diversão de forma sustentável e criativa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/3]">
                  <Image
                    src={produto}
                    alt="Galatic Pinball Game"
                    height={500}
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Por que escolher o Galatic Pinball?
            </h2>
            <p className="mb-8 text-center">
              Nosso brinquedo é mais do que um simples jogo. Ele une
              criatividade, sustentabilidade e muita diversão para as crianças
              explorarem um mundo cheio de desafios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Diversão Sustentável</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Produzido com materiais reciclados, o Galatic Pinball ensina
                  sobre reutilização e respeito ao meio ambiente de uma forma
                  lúdica.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Desafios Interativos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Cada jogada é uma nova missão! Acerte os alvos, supere
                  obstáculos e descubra novas formas de jogar.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Volume2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Experiência Imersiva</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Mecanismos simples e intuitivos garantem que cada jogada seja
                  emocionante e envolvente para as crianças.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Preço
            </h2>
            <div className="flex gap-8 justify-center">
              <div className=" w-full md:w-1/3 flex flex-col p-6 bg-primary text-primary-foreground rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Edição de Lançamento
                </h3>
                <p className="text-4xl font-bold mb-4">$109.99</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Feito 100% à mão
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Design exclusivo e sustentável
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Suporte prioritário para dúvidas
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-primary hover:bg-gray-100">
                  Compre agora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Galatic Pinball. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
