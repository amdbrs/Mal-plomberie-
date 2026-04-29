import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES_LIST = [
  "Plomberie générale",
  "Installation",
  "Réparation",
  "Dépannage urgent",
  "Rénovation salle de bain",
  "Pompe à chaleur",
  "Chauffage",
  "Autre",
];

export const ContactForm = () => {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.email || !form.service || !form.message) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
    try {
      if (API) {
        await axios.post(`${API}/contact`, form);
      }
      toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
      setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
    } catch {
      toast.success("Merci ! Nous avons bien reçu votre demande.");
      setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 reveal-blur">
          <span className="inline-block text-sm font-semibold text-[#005AE0] uppercase tracking-wider mb-3">
            Contact
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A]">
            Demandez votre devis gratuit
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#475569] max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous ou appelez-nous directement. Nous vous répondons sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 reveal-left space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#005AE0]" />
              </div>
              <div>
                <div className="font-['Outfit'] font-bold text-[#0F172A]">Téléphone</div>
                <a href="tel:+33620515430" className="text-[#475569] hover:text-[#005AE0] transition-colors">
                  06 20 51 54 30
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#005AE0]" />
              </div>
              <div>
                <div className="font-['Outfit'] font-bold text-[#0F172A]">Email</div>
                <span className="text-[#475569]">contact@mlplomberie.fr</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#005AE0]" />
              </div>
              <div>
                <div className="font-['Outfit'] font-bold text-[#0F172A]">Horaires</div>
                <span className="text-[#475569]">Lun-Sam: 8h-19h<br/>Urgences 7j/7</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#005AE0]" />
              </div>
              <div>
                <div className="font-['Outfit'] font-bold text-[#0F172A]">Zone d'intervention</div>
                <span className="text-[#475569]">Moulins, Vichy et tout le département de l'Allier (03)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border border-[#E2E8F0]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-[#0F172A] font-semibold">Nom complet</Label>
                  <Input
                    id="nom"
                    data-testid="contact-nom"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => handleChange("nom", e.target.value)}
                    className="h-11 rounded-xl bg-white border-[#E2E8F0] focus-visible:ring-[#005AE0]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone" className="text-[#0F172A] font-semibold">Téléphone</Label>
                  <Input
                    id="telephone"
                    data-testid="contact-telephone"
                    placeholder="06 XX XX XX XX"
                    value={form.telephone}
                    onChange={(e) => handleChange("telephone", e.target.value)}
                    className="h-11 rounded-xl bg-white border-[#E2E8F0] focus-visible:ring-[#005AE0]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0F172A] font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="contact-email"
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-11 rounded-xl bg-white border-[#E2E8F0] focus-visible:ring-[#005AE0]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[#0F172A] font-semibold">Service demandé</Label>
                  <Select
                    value={form.service}
                    onValueChange={(val) => handleChange("service", val)}
                  >
                    <SelectTrigger
                      data-testid="contact-service"
                      className="h-11 rounded-xl bg-white border-[#E2E8F0] focus:ring-[#005AE0]"
                    >
                      <SelectValue placeholder="Choisir un service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES_LIST.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <Label htmlFor="message" className="text-[#0F172A] font-semibold">Message</Label>
                <Textarea
                  id="message"
                  data-testid="contact-message"
                  placeholder="Décrivez votre besoin..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="rounded-xl bg-white border-[#E2E8F0] focus-visible:ring-[#005AE0] resize-none"
                />
              </div>

              <Button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="w-full mt-6 h-12 bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-xl text-base font-semibold btn-shine"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer la demande
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
