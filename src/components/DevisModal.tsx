import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DevisModalProps {
  children: React.ReactNode;
}

const DevisModal = ({ children }: DevisModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-center">
            ✨ Demandez votre devis gratuitement
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] px-6">
          <div className="pb-6">
            <form className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  👤 Vos informations
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input 
                      id="firstName"
                      placeholder="Votre prénom"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input 
                      id="lastName"
                      placeholder="Votre nom"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+225 XX XX XX XX XX"
                      className="bg-input border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise / Organisation</Label>
                  <Input 
                    id="company"
                    placeholder="Nom de votre entreprise"
                    className="bg-input border-border focus:ring-primary"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  🎯 Votre projet
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Type de projet *</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Sélectionnez le type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup / Lancement</SelectItem>
                      <SelectItem value="rebrand">Refonte / Rebranding</SelectItem>
                      <SelectItem value="growth">Croissance / Expansion</SelectItem>
                      <SelectItem value="digital">Présence digitale</SelectItem>
                      <SelectItem value="campaign">Campagne marketing</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget approximatif *</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Sélectionnez votre budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">50.000 - 200.000 FCFA</SelectItem>
                      <SelectItem value="medium">200.000 - 500.000 FCFA</SelectItem>
                      <SelectItem value="large">500.000 - 1.000.000 FCFA</SelectItem>
                      <SelectItem value="enterprise">+ de 1.000.000 FCFA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description du projet *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Décrivez votre projet, vos objectifs..."
                    rows={4}
                    className="bg-input border-border focus:ring-primary resize-none"
                  />
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  🔮 Services souhaités
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="identite" />
                      <Label htmlFor="identite" className="text-sm font-medium">
                        🎨 Identité visuelle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="website" />
                      <Label htmlFor="website" className="text-sm font-medium">
                        💻 Site web / Application
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="social" />
                      <Label htmlFor="social" className="text-sm font-medium">
                        📱 Réseaux sociaux
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="seo" />
                      <Label htmlFor="seo" className="text-sm font-medium">
                        🔍 SEO / Référencement
                      </Label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="strategy" />
                      <Label htmlFor="strategy" className="text-sm font-medium">
                        📊 Stratégie marketing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="video" />
                      <Label htmlFor="video" className="text-sm font-medium">
                        🎥 Production vidéo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ads" />
                      <Label htmlFor="ads" className="text-sm font-medium">
                        🎯 Publicité digitale
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="print" />
                      <Label htmlFor="print" className="text-sm font-medium">
                        📰 Communication print
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  J'accepte d'être recontacté(e) par l'équipe SAUSH *
                </Label>
              </div>
              
              <Button className="w-full gradient-primary text-primary-foreground hover:shadow-magical transition-magical">
                Envoyer ma demande de devis 🚀
              </Button>
            </form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DevisModal;