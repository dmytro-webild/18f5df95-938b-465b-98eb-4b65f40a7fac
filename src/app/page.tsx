"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Coffee, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Darbar The Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      title="Welcome to Darbar The Cafe"
      description="Experience the finest blends and cozy vibes in the heart of the city."
      testimonials={[
        {
          name: "Emma R.",
          handle: "@emma.reads",
          testimonial: "The best latte I have ever had! Absolutely love the cozy atmosphere.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-woman-apron-barista-giving-you-cup-coffee-working-cafe-serving-dr_1258-138287.jpg",
        },
        {
          name: "James K.",
          handle: "@jamescoffee",
          testimonial: "Great coffee and even better service. A perfect spot to work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-reading-book-drinking-coffee_1303-21574.jpg",
        },
        {
          name: "Sophia L.",
          handle: "@sophia.bakes",
          testimonial: "Fresh pastries every single morning. My daily ritual.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064688.jpg",
        },
        {
          name: "Mark D.",
          handle: "@mark_d",
          testimonial: "The staff are so friendly and the place feels like home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/good-day-only-with-good-coffee_329181-2927.jpg",
        },
        {
          name: "Lucy H.",
          handle: "@lucy_h",
          testimonial: "Perfect location for meeting friends. The music is always on point.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-asian-barista-girl-giving-takeaway-coffee-cup-prepare-takeout-order-guest-cafe-wearing_1258-199322.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-cafe-interior-design_23-2151945689.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/empty-bench-restaurant_23-2147871253.jpg",
          alt: "An empty bench in the restaurant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-enjoying-reading-book-cafe_23-2150064719.jpg",
          alt: "Person enjoying reading a book in a cafe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friends-drinking_23-2148014989.jpg",
          alt: "Friends drinking",
        },
        {
          src: "http://img.b2bpic.net/free-photo/coffee-cup-table_23-2148164788.jpg",
          alt: "Coffee cup in a table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/decoration-aroma-blend-latte-mug_1232-3949.jpg",
          alt: "decoration aroma blend latte mug",
        },
      ]}
      avatarText="Join our community of coffee lovers."
      marqueeItems={[
        {
          type: "text",
          text: "Artisan Coffee",
        },
        {
          type: "text",
          text: "Fresh Pastries",
        },
        {
          type: "text",
          text: "Cozy Atmosphere",
        },
        {
          type: "text",
          text: "Expert Baristas",
        },
        {
          type: "text",
          text: "Open Daily",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Passion for Coffee"
      metrics={[
        {
          icon: Coffee,
          label: "Cups Served",
          value: "50,000+",
        },
        {
          icon: Users,
          label: "Happy Guests",
          value: "15,000+",
        },
        {
          icon: Award,
          label: "Years Active",
          value: "10+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      features={[
        {
          title: "Artisan Roasts",
          description: "Sourced from the best farms globally.",
          imageSrc: "http://img.b2bpic.net/free-photo/spanich-sandwich-shop-window_1398-4866.jpg",
        },
        {
          title: "Cozy Atmosphere",
          description: "Designed for relaxation and focus.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-wooden-spoon-paper_114579-16912.jpg",
        },
        {
          title: "Fresh Daily",
          description: "Baked goods delivered every morning.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pie-slice-with-fresh-red-strawberries-coffee-light-white-surface-cake-pie-biscuit-sweet-tea-sugar-cookies_140725-64516.jpg",
        },
      ]}
      title="Why Visit Darbar?"
      description="We craft every cup with love and dedication."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Signature Latte",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-quality-coffee-cup_23-2150691439.jpg",
        },
        {
          id: "2",
          name: "Buttery Croissant",
          price: "$3.00",
          imageSrc: "http://img.b2bpic.net/free-photo/womans-hand-hold-ice-latte-green-tropical-bushes_343596-1538.jpg",
        },
        {
          id: "3",
          name: "Double Espresso",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/square-slice-chocolate-cheesecake-stone-board_114579-16587.jpg",
        },
        {
          id: "4",
          name: "Iced Vanilla Latte",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-iced-coffee-with-splash-ice-cubes_84443-83799.jpg",
        },
        {
          id: "5",
          name: "Chocolate Brownie",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fruit-bread-kitchen-towel_23-2148695490.jpg",
        },
        {
          id: "6",
          name: "Fresh Baked Scone",
          price: "$3.25",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-cake-concept_23-2148761684.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Explore our curated selection of coffee and light bites."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "daily",
          badge: "Essential",
          price: "$29",
          subtitle: "For daily visitors",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "1 Free Coffee Daily",
            "10% Off Pastries",
            "Member Events",
          ],
        },
        {
          id: "monthly",
          badge: "Premium",
          price: "$79",
          subtitle: "For coffee lovers",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "Unlimited Coffee",
            "20% Off Pastries",
            "Priority Seating",
          ],
        },
        {
          id: "gift",
          badge: "Gift",
          price: "$150",
          subtitle: "Perfect for friends",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "Prepaid Balance",
            "Exclusive Merch",
            "Priority Access",
          ],
        },
      ]}
      title="Membership Plans"
      description="Get more from your coffee visits."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "1",
          name: "Sarah Khan",
          role: "Head Barista",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-barista-black-apron-holding-coffee-cup-laughing-standing-yellow-background_1258-163541.jpg",
        },
        {
          id: "2",
          name: "David Miller",
          role: "Shop Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-female-barista-small-coffee-shop_613910-10446.jpg",
        },
        {
          id: "3",
          name: "Nina Ross",
          role: "Lead Baker",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-asian-barista-coffee-shop-staff-gives-you-credit-card-machine-processing-payment-with-pos_1258-199466.jpg",
        },
      ]}
      title="Meet Our Team"
      description="The friendly faces behind Darbar."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Great Vibe",
          quote: "I love the vibe here, everything is so calm.",
          name: "Alex",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-is-using-app-her-smartphone-device-send-text-message-near-business-buildings_158595-6785.jpg",
        },
        {
          id: "2",
          title: "Top Quality",
          quote: "Consistency in quality is unmatched.",
          name: "Sam",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-reading-magazine-cafe_1150-12141.jpg",
        },
        {
          id: "3",
          title: "Lovely Place",
          quote: "A hidden gem in the city.",
          name: "Jamie",
          role: "Writer",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-good-looking-office-lady-enjoying-hot-coffee-holding-cup-sitttin-cafe-alone_197531-22846.jpg",
        },
        {
          id: "4",
          title: "Coffee Nirvana",
          quote: "Coffee is simply perfect.",
          name: "Jordan",
          role: "Developer",
          imageSrc: "http://img.b2bpic.net/free-photo/waitress-serving-cup-coffee-customers_1170-652.jpg",
        },
        {
          id: "5",
          title: "Five Stars",
          quote: "Always my go-to place.",
          name: "Riley",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/person-drinking-coffee-spacious-cafeteria_23-2150424026.jpg",
        },
      ]}
      title="Hear From Our Guests"
      description="Stories from people who make our cafe alive."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready for a Great Cup?"
      description="Come visit Darbar The Cafe. We are open every day from 8 AM."
      buttons={[
        {
          text: "Get Directions",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Darbar The Cafe"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Darbar The Cafe. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
