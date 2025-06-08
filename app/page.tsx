"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Car,
  Gauge,
  Settings,
  Zap,
  Shield,
  Award,
  Users,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current

      // Essayer de jouer la vidéo
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video is playing")
          })
          .catch((error) => {
            console.log("Video autoplay failed:", error)
            // La vidéo ne peut pas être jouée automatiquement
            // Le fallback background sera visible
          })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-white">Peak Performance Auto</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-red-500 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-red-500 transition-colors"
              >
                À Propos
              </button>
              <button
                onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-red-500 transition-colors"
              >
                Équipe
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-red-500 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA Button */}
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700">
              <Calendar className="w-4 h-4 mr-2" />
              Rendez-vous
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  À Propos
                </button>
                <button
                  onClick={() => {
                    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Équipe
                </button>
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Contact
                </button>
                <Button className="bg-red-600 hover:bg-red-700 w-full mt-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Rendez-vous
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fallback background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Peak+Performance+Auto')`,
          }}
        ></div>

        {/* Video background - hidden on small mobile for performance */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            console.log("Video failed to load, using fallback background")
            e.currentTarget.style.display = "none"
          }}
          onLoadStart={() => {
            console.log("Video loading started")
          }}
          onCanPlay={() => {
            console.log("Video can play")
          }}
        >
          <source src="https://autosynchro.ca/wp-content/uploads/2024/07/as.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-red-600 text-white text-sm">Service de Classe Mondiale</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Peak Performance Auto
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto px-2">
            Garage Peak Performance Auto offrant une gamme complète de services: mécanique générale, carrosserie,
            entretien, pneus, alignement et plus! Qualité et satisfaction garanties.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              (438) 227-5550
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black bg-white border-white hover:bg-gray-100 hover:text-black text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nos Services
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-red-600 py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 items-center justify-between text-white text-xs md:text-sm">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
              <span className="text-center md:text-left">6527 De la Côte-de-Liesse Rd, Montreal, QC</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              <span>(438) 227-5550</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              <span>Lun-Ven: 8h-17h | Sam-Dim: 8h-14h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-red-600 text-white">Nos Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-2">
              Service de Classe Mondiale pour les Plus Belles Voitures
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              De l'entretien de routine au réglage de précision, notre équipe d'experts s'assure que votre véhicule de
              luxe fonctionne à son apogée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Entretien de Base",
                description:
                  "Entretien préventif pratique ou réparations automobiles effectuées à votre domicile ou bureau.",
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Changements d'Huile",
                description:
                  "Gardez votre moteur en marche avec des changements d'huile premium qui optimisent les performances.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Inspections Pré-Achat",
                description:
                  "Nos inspections complètes fournissent des informations détaillées sur l'état du véhicule.",
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Alignements",
                description:
                  "Entretien préventif pratique ou réparations automobiles effectuées à votre domicile ou bureau.",
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Montage et Équilibrage de Pneus",
                description: "Expérience de conduite parfaite avec notre montage et équilibrage professionnel.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Équilibrage des Coins",
                description: "Nous ajustons la répartition du poids pour améliorer le contrôle et la stabilité.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader>
                  <div className="text-red-500 mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advanced Services */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Services Avancés de Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Configuration de Suspension",
                "Induction Forcée",
                "Reconstruction de Moteur",
                "Reconstruction de Transmission",
                "Réglage ECU",
                "Kits Turbo",
                "Équilibrage des Coins",
                "Réglage de Précision",
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 text-center hover:border-red-500 transition-colors"
                >
                  <CardContent className="pt-6">
                    <h4 className="text-white font-semibold">{service}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-red-600 text-white">Notre Histoire</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Construit sur la Passion, Guidé par l'Excellence
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Peak Performance Auto a commencé comme un petit garage avec une mission singulière : fournir le plus
                haut niveau de service à chaque voiture qui franchit ses portes. Fondé par un père et son fils qui
                partageaient une passion profonde pour les véhicules de performance, le garage a rapidement gagné une
                réputation pour son expertise, sa précision et son dévouement.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Aujourd'hui, cette même passion guide tout ce que nous faisons. Ce qui a commencé comme une opération
                modeste est devenu une destination de premier plan pour les voitures de luxe et de haute performance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">20+</div>
                  <div className="text-white">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">1000+</div>
                  <div className="text-white">Clients Satisfaits</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Excellence dans Chaque Détail</h3>
                <p className="text-gray-300 mb-6">
                  Chez Peak Performance Auto, nous sommes fiers de fournir un service exceptionnel pour les véhicules de
                  haute performance et de luxe. Notre équipe d'experts est formée pour gérer les marques de voitures les
                  plus prestigieuses.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-white">Service Certifié de Qualité</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-white">Équipe d'Experts Qualifiés</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-white">Garantie de Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-red-600 text-white">Notre Équipe</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Rencontrez l'Équipe Derrière Peak Performance Auto
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Chez Peak Performance Auto, notre équipe est l'épine dorsale de tout ce que nous faisons. Avec des
              décennies d'expérience combinée sur des véhicules de luxe et de performance haut de gamme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Emile</CardTitle>
                <CardDescription className="text-gray-300">Maître Mécanicien</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Plus de 40 ans d'expérience dans les garages les plus sophistiqués de Montréal. Reconnu pour son
                  attention aux détails et son expertise avec les véhicules de luxe.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Settings className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Benjamin</CardTitle>
                <CardDescription className="text-gray-300">Spécialiste Performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Apprend d'Emile depuis des années, maîtrisant les mêmes compétences et l'engagement envers la qualité.
                  Ses idées avant-gardistes ont été instrumentales dans la croissance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Sam</CardTitle>
                <CardDescription className="text-gray-300">Gestionnaire des Opérations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Supervise chaque projet, s'assurant qu'il progresse sans heurts dans le flux de travail tout en
                  gardant la satisfaction client comme priorité absolue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-red-600 text-white">Contactez-Nous</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Prêt à Optimiser Votre Véhicule?
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Que ce soit pour une urgence ou un entretien régulier, nous sommes là pour vous. Contactez-nous dès
              aujourd'hui pour prendre rendez-vous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-300">
                      6527 De la Côte-de-Liesse Rd
                      <br />
                      Montreal, Quebec H4T 1E5
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                    <p className="text-gray-300">(438) 227-5550</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Heures d'Ouverture</h4>
                    <div className="text-gray-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi:</span>
                        <span>8h00 - 17h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi:</span>
                        <span>8h00 - 14h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche:</span>
                        <span>8h00 - 14h00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Prendre Rendez-vous</CardTitle>
                <CardDescription className="text-gray-300">
                  Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                    <Phone className="w-5 h-5 mr-2" />
                    Appelez (438) 227-5550
                  </Button>
                  <p className="text-gray-400 mt-4">Ou visitez-nous directement à notre garage</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Peak Performance Auto</h3>
              <p className="text-gray-300 mb-4">
                Garage Peak Performance Auto offrant une gamme complète de services de qualité pour tous vos besoins
                automobiles. Satisfaction garantie.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  (438) 227-5550
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Mécanique Générale</li>
                <li>Carrosserie</li>
                <li>Entretien</li>
                <li>Pneus & Alignement</li>
                <li>Performance</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="text-gray-300 space-y-2">
                <p>6527 De la Côte-de-Liesse Rd</p>
                <p>Montreal, QC H4T 1E5</p>
                <p>(438) 227-5550</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Peak Performance Auto. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
