import { motion } from "framer-motion";

import { openLeadForm } from "@/components/LeadFormDialog";
import banner from "@/assets/banner-partner.png";

const PartnerBanner = () => (
  <div className="container mx-auto">
    <motion.button
      type="button"
      onClick={() => openLeadForm("formsubmit")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-label="Стань партнёром ВОДОМАТ в своём регионе!"
      className="block w-full cursor-pointer appearance-none overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
    >
      <img
        src={banner}
        alt="Стань партнёром ВОДОМАТ в своём регионе!"
        className="block h-auto w-full"
        loading="lazy"
      />
    </motion.button>
  </div>
);

export default PartnerBanner;
