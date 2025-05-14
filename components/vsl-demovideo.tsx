'use client'

// components/demo-video.jsx
export default function DemoVideo() {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl">
            {/* Substitua pela tag de vídeo ou iframe do seu VSL */}
            <iframe 
              className="w-full h-full"
              src="https://youtu.be/JL6QmfWhnxgv"
              title="Demonstração Dama.AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            
          </div>
        </div>
      </section>
    )
  }