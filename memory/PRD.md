# ML PLOMBERIE - PRD

## Problem Statement
Site web vitrine pour ML PLOMBERIE, entreprise de plomberie à Moulins/Vichy, Allier (03). Tons blanc et bleu moderne, animations fluides, formulaire de contact, FAQ SEO, section à propos.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (single-page landing)
- **Backend**: FastAPI + MongoDB (contact form storage)
- **Design**: White (#FFFFFF) + Blue (#005AE0) theme, Outfit + DM Sans fonts

## User Personas
- Particuliers cherchant un plombier dans l'Allier (03)
- Professionnels / copropriétés avec besoins plomberie/chauffage

## Core Requirements
- Navigation sticky avec menu mobile (Sheet)
- Hero section avec CTAs (devis + prestations)
- Grille de 7 services (plomberie, installation, réparation, dépannage, rénovation, PAC, chauffage)
- Portfolio/Prestations avec galerie d'images
- Section À propos avec zone d'intervention
- FAQ (6 questions) avec Accordion Shadcn pour SEO
- Formulaire de contact (nom, tel, email, service, message) -> MongoDB
- Footer sombre avec liens et contacts
- SEO optimisé (meta tags, structure sémantique, FAQ)

## What's Been Implemented (Dec 2025)
- All sections: Navigation, Hero, Services, Portfolio, About, FAQ, Contact, Footer
- Backend API: POST /api/contact, GET /api/contacts
- Scroll reveal animations (IntersectionObserver)
- Mobile responsive design (hamburger menu)
- Shadcn components: Accordion, Sheet, Select, Input, Textarea, Button
- SEO meta tags (description, keywords, OG tags)
- Google Fonts (Outfit, DM Sans)

## Prioritized Backlog
- P1: Ajouter une vraie adresse email de contact
- P1: Intégration Google Maps pour la zone d'intervention
- P2: Ajout d'avis clients / témoignages
- P2: Blog/actualités pour le SEO
- P3: Intégration envoi email (SendGrid) pour les formulaires de contact
- P3: Panneau admin pour gérer les demandes de contact
