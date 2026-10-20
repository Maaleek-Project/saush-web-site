import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import QuoteForm from "@/components/QuoteForm";

type DevisModalProps = {
  children: ReactNode;
  defaultServices?: string[];
};

const DevisModal = ({ children, defaultServices }: DevisModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92dvh] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl border-ink/10 bg-paper p-6 sm:p-10">
        <div className="mb-2 space-y-3">
          <span className="eyebrow">Devis gratuit</span>
          <DialogTitle className="display-md text-ink">
            Parlons de <span className="serif-accent">votre projet</span>
          </DialogTitle>
          <DialogDescription className="text-ink-muted">
            Quelques informations suffisent. Nous revenons vers vous sous 24h avec une proposition adaptée.
          </DialogDescription>
        </div>
        <QuoteForm compact defaultServices={defaultServices} onSent={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DevisModal;
