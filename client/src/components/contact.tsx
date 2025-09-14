import { useState } from "react";
import { Building, MapPin, Gavel, Sun, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      legalDomain: undefined,
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message envoyé",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-xl text-muted-foreground">Deux cabinets à votre service</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Offices Info */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Cabinet Grasse */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-border" data-testid="office-grasse">
              <div className="flex items-center mb-4">
                <Building className="text-primary h-8 w-8 mr-3" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Cabinet Principal</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Résidence Les Palmiers</p>
                    <p className="text-sm text-muted-foreground">78, Avenue Pierre Sémard</p>
                    <p className="text-sm text-muted-foreground">06130 GRASSE</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Gavel className="text-accent mr-3 h-5 w-5" />
                  <p className="text-sm text-muted-foreground">À proximité du Palais de Justice</p>
                </div>
              </div>
            </div>

            {/* Cabinet Cannes */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-border" data-testid="office-cannes">
              <div className="flex items-center mb-4">
                <Building className="text-accent h-8 w-8 mr-3" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Cabinet Secondaire</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Palais du Soleil</p>
                    <p className="text-sm text-muted-foreground">3, avenue de Lyon</p>
                    <p className="text-sm text-muted-foreground">06400 CANNES</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Sun className="text-primary mr-3 h-5 w-5" />
                  <p className="text-sm text-muted-foreground">Proximité centre-ville de Cannes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Nous contacter</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet *</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom et prénom" {...field} data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Votre numéro" {...field} value={field.value || ""} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="legalDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Domaine juridique</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger data-testid="select-domain">
                            <SelectValue placeholder="Sélectionnez un domaine" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immobilier">Droit immobilier</SelectItem>
                          <SelectItem value="famille">Droit de la famille</SelectItem>
                          <SelectItem value="responsabilite">Responsabilité civile</SelectItem>
                          <SelectItem value="consommation">Droit de la consommation</SelectItem>
                          <SelectItem value="autres">Autres</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Décrivez brièvement votre situation..." 
                          className="resize-none" 
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Les informations recueillies sont nécessaires au traitement de votre demande et sont destinées au cabinet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
