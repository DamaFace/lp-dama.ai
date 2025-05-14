import Image from 'next/image';

const IntegrationLogos = () => {
  const logos = [
    { src: '/integration-logos/logo-webhooks.png', alt: 'Webhooks', baseSize: 'h-14' },
    { 
      src: '/integration-logos/logo-whatsapp.png', 
      alt: 'WhatsApp',
      baseSize: 'h-20', // Tamanho maior para o WhatsApp
      highlight: true 
    },
    { src: '/integration-logos/logo-chatgpt.png', alt: 'ChatGPT', baseSize: 'h-14' },
    { src: '/integration-logos/logo-n8n.png', alt: 'n8n', baseSize: 'h-14' },
    { src: '/integration-logos/logo-typebot.svg', alt: 'Typebot', isSvg: true, baseSize: 'h-14' },
    { src: '/integration-logos/logo-dialogflow.png', alt: 'Dialogflow', baseSize: 'h-14' },
  ];

  return (
    <><div id="integrations" ></div>
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Integrações com as melhores plataformas
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${logo.highlight ? 'transform hover:scale-105' : ''}`}
            >
              <div className={`relative ${logo.baseSize} w-full`}>
                {logo.isSvg ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    style={{ transform: 'scale(1.2)' }} // Aumenta SVG se necessário
                  />
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 100px, 200px"
                    className={`object-contain ${logo.highlight ? 'scale-125' : ''}`}
                    quality={100} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default IntegrationLogos;