import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutMePage() {
  return (
    <div className="flex flex-col justify-start w-full h-full">
      <div className="flex p-3 border-t border-b">
        <h1 className="text-lg font-bold">About me</h1>
      </div>
      <section className="flex justify-start items-center w-full p-12 gap-8">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/lucanevess87.png" />
          <AvatarFallback>LN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Luca Neves</h2>
          <p className="text-justify text-sm">
            Front-end developer and Information Systems student at UFPE. I started mine career as a
            developer before starting my higher education course at Loomi at the beginning of 2022,
            since then I have continued to evolve and accumulate technical and interpersonal
            relationships throughout the projects I participated in. Compesa, Suvinal, Diagonal Land
            Regularization, Smart Síndico, Untold, were some of the accounts I could directly impact
            my career so far. As a base of my stack of JS, React, Next JS, Typescript and Flutter
            technologies, as well as knowledge in Node JS, Express, RESTful API, SQL, React Native
            and Python.
          </p>
        </div>
      </section>
    </div>
  );
}
