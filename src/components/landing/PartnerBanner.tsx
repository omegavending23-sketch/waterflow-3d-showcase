import { motion } from "framer-motion";

import { openLeadForm } from "@/components/LeadFormDialog";
import banner from "@/assets/banner-partner.png";

const PartnerBanner = () => (
  <section className="px-4 pt-14 md:pt-20">
    <div className="container mx-auto max-w-5xl">
      <motion.button
        type="button"
        onClick={() => openLeadForm("formsubmit")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label="Стань партнёром ВОДОМАТ в своём регионе!"
        className="block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
      >
        <img
          src={banner}
          alt="Стань партнёром ВОДОМАТ в своём регионе!"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.button>
    </div>
  </section>
);

export default PartnerBanner;
