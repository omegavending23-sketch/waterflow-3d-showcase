import { motion } from "framer-motion";

import img1 from "@/assets/econ-1.png";
import img2 from "@/assets/econ-2.png";
import img3 from "@/assets/econ-3.png";
import banner from "@/assets/banner-partner.png";
import { openLeadForm } from "@/components/LeadFormDialog";

const cards = [img1, img2, img3];

const BusinessEconomics = () => (
  <>
    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => openLeadForm()}
          className="block w-full cursor-pointer group"
          aria-label="Стать партнёром — открыть форму заявки"
        >
          <img
            src={banner}
            alt="Экономика бизнеса ВОДОМАТ"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ clipPath: "inset(3.8% 0 0 0)" }}
            loading="lazy"
          />
        </motion.button>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Экономика бизнеса{" "}
        <span className="text-gradient-water">ВОДОМАТ</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {cards.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden glass-card-hover aspect-[900/1370] bg-background/40"
          >
            <img
              src={src}
              alt="Экономика бизнеса ВОДОМАТ"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  </>
);

export default BusinessEconomics;
