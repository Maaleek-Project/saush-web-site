import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { toast } from "sonner";
import { company, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

const services = [
  "Identité visuelle",
  "Stratégie & plan de com'",
  "Site web / application",
  "Réseaux sociaux",
  "Production vidéo",
  "Publicité digitale",
  "Référencement SEO",
  "Diagnostic / audit",
];

const projectTypes = [
  "Lancement d'une marque",
  "Refonte / rebranding",
  "Croissance / expansion",
  "Présence digitale",
  "Campagne ponctuelle",
  "Autre",
];

const budgets = [
  "Moins de 200 000 FCFA",
  "200 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
  "Je ne sais pas encore",
];

type QuoteFormProps = {
  defaultServices?: string[];
  compact?: boolean;
  onSent?: () => void;
};

const QuoteForm = ({ defaultServices = [], compact = false, onSent }: QuoteFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    projectType: "",
    budget: "",
    message: "",
    consent: false,
  });
  const [selected, setSelected] = useState<string[]>(defaultServices);
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggle = (s: string) =>
    setSelected((list) => (list.includes(s) ? list.filter((x) => x !== s) : [...list, s]));

  const buildMessage = () => {
    const details: [string, string][] = [
      ["Nom", form.name],
      ["Organisation", form.organisation],
      ["E-mail", form.email],
      ["Téléphone", form.phone],
      ["Type de projet", form.projectType],
      ["Budget", form.budget],
      ["Services", selected.join(", ")],
    ];
    return [
      "Bonjour SAUSH, je souhaite obtenir un devis.",
      "",
      ...details.filter(([, v]) => v).map(([k, v]) => `${k} : ${v}`),
      "",
      "Projet :",
      form.message,
    ].join("\n");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      toast.error("Merci d'accepter d'être recontacté(e) pour envoyer votre demande.");
      return;
    }
    const text = buildMessage();
    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      const subject = `Demande de devis — ${form.organisation || form.name}`;
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
    toast.success("Votre demande est prête à être envoyée. Nous vous répondons sous 24h.");
    onSent?.();
  };

  const label = "mb-2 block text-sm font-medium text-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="q-name" className={label}>Nom complet *</label>
          <input id="q-name" required autoComplete="name" className="field" placeholder="Awa Koné" value={form.name} onChange={update("name")} />
        </div>
        <div>
          <label htmlFor="q-org" className={label}>Entreprise / organisation</label>
          <input id="q-org" autoComplete="organization" className="field" placeholder="Nom de votre structure" value={form.organisation} onChange={update("organisation")} />
        </div>
        <div>
          <label htmlFor="q-email" className={label}>E-mail *</label>
          <input id="q-email" type="email" required autoComplete="email" className="field" placeholder="vous@entreprise.com" value={form.email} onChange={update("email")} />
        </div>
        <div>
          <label htmlFor="q-phone" className={label}>Téléphone / WhatsApp</label>
          <input id="q-phone" type="tel" autoComplete="tel" className="field" placeholder="+225 07 00 00 00 00" value={form.phone} onChange={update("phone")} />
        </div>
        <div>
          <label htmlFor="q-type" className={label}>Type de projet</label>
          <select id="q-type" className="field appearance-none" value={form.projectType} onChange={update("projectType")}>
            <option value="">Sélectionner…</option>
            {projectTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="q-budget" className={label}>Budget indicatif</label>
          <select id="q-budget" className="field appearance-none" value={form.budget} onChange={update("budget")}>
            <option value="">Sélectionner…</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={label}>Ce dont vous avez besoin</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = selected.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggle(s)}
                aria-pressed={on}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors",
                  on ? "border-ink bg-ink text-paper" : "border-ink/15 bg-white text-ink/80 hover:border-ink/40",
                )}
              >
                {on && <Check className="h-3.5 w-3.5" />}
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="q-message" className={label}>Votre projet en quelques lignes *</label>
        <textarea
          id="q-message"
          required
          rows={compact ? 4 : 5}
          className="field resize-none"
          placeholder="Vos objectifs, votre cible, vos délais…"
          value={form.message}
          onChange={update("message")}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[hsl(var(--ink))]"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
        />
        <span>
          J'accepte d'être recontacté(e) par SAUSH au sujet de ma demande. Voir notre{" "}
          <Link to="/politique-confidentialite" className="underline underline-offset-2 hover:text-ink">politique de confidentialité</Link>.
        </span>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" onClick={() => setChannel("whatsapp")} className="btn btn-ink flex-1">
          Envoyer via WhatsApp <ArrowUpRight className="h-4 w-4" />
        </button>
        <button type="submit" onClick={() => setChannel("email")} className="btn btn-outline flex-1">
          <Mail className="h-4 w-4" /> Envoyer par e-mail
        </button>
      </div>
      <p className="text-center text-xs text-ink-muted">Gratuit et sans engagement · Réponse sous 24h ouvrées</p>
    </form>
  );
};

export default QuoteForm;
