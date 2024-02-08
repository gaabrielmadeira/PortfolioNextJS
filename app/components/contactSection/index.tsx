import { SectionTitle } from '../sectionTitles'
import { ContactForm } from './contactForm'

export const ContactSection = () => {
  return (
    <section className="py-16 px-6 mt-4 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="Contato"
          title="Quer entrar em contato? Envie a sua mensagem"
          className="items-center text-center"
        />
        <ContactForm />
      </div>
    </section>
  )
}
