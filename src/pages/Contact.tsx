import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/site/Reveal";
import { PageHero, SectionHeader } from "@/components/site/blocks";
import { SocialLinks } from "@/components/site/SocialLinks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company, faq, telLink, whatsappLink } from "@/data/site";

const Contact = () => {
  return (
    <Layout title="Contact" description="Contactez SAUSH à Abidjan (Cocody Riviera Palmeraie) : devis gratuit, réponse sous 24h par e-mail, téléphone ou WhatsApp.">
      <PageHero
        eyebrow="Contact"
        title={<>Une idée en tête&nbsp;? <span className="serif-accent text-lime-deep">Parlons-en.</span></>}
        intro="Chaque grande collaboration commence par une conversation. Dites-nous ce que vous voulez accomplir : nous revenons vers vous sous 24h."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-10 lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-ink">Votre demande</h2>
            <p className="mb-8 mt-2 text-ink-muted">Gratuit, sans engagement, et lu par une vraie personne.</p>
            <QuoteForm />
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={100} className="grain rounded-[2rem] bg-ink p-8 text-paper sm:p-10">
              <h2 className="font-display text-2xl font-semibold">Contact direct</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-lime-bright" />
                  <div>
                    <p className="text-sm text-paper/50">E-mail</p>
                    <a href={`mailto:${company.email}`} className="link-underline text-lg">{company.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-lime-bright" />
                  <div>
                    <p className="text-sm text-paper/50">Téléphone</p>
                    {company.phones.map((p) => (
                      <a key={p} href={telLink(p)} className="link-underline block w-fit text-lg">{p}</a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-lime-bright" />
                  <div>
                    <p className="text-sm text-paper/50">Adresse</p>
                    <p className="text-lg">{company.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-lime-bright" />
                  <div>
                    <p className="text-sm text-paper/50">Horaires</p>
                    <p className="text-lg">{company.hours}</p>
                  </div>
                </li>
              </ul>
              <a
                href={whatsappLink("Bonjour SAUSH, j'aimerais parler d'un projet.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime mt-10 w-full"
              >
                <MessageCircle className="h-4 w-4" /> Discuter sur WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-8 border-t border-paper/10 pt-6">
                <SocialLinks variant="dark" />
              </div>
            </Reveal>

            <Reveal delay={200} className="overflow-hidden rounded-[2rem] border border-ink/10">
              <iframe
                title="Localisation de SAUSH à Cocody Riviera Palmeraie, Abidjan"
                src="https://www.google.com/maps?q=Riviera+Palmeraie,+Cocody,+Abidjan&output=embed"
                className="h-72 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep/60 py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Questions fréquentes" title={<>Avant de <span className="serif-accent">nous écrire.</span></>} />
          </div>
          <Reveal className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-ink/10">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`c-${i}`} className="border-ink/10">
                  <AccordionTrigger className="py-6 text-left font-display text-xl font-semibold text-ink hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-ink-muted">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
