import { motion } from "framer-motion";

import { openLeadForm } from "@/components/LeadFormDialog";
import banner from "@/assets/stan-predstavitelem.png.asset.json";

const PartnerBanner = () => (
  <motion.button
    type="button"
    onClick={() => openLeadForm("formsubmit")}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    aria-label="Стань партнёром ВОДОМАТ в своём регионе!"
    className="mb-14 block w-full cursor-pointer appearance-none overflow-hidden rounded-2xl p-0 text-left glass-card-hover hover:border-primary hover:!scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <img
      src={banner.url}
      alt="Стань партнёром ВОДОМАТ в своём регионе!"
      className="block h-auto w-full"
      loading="lazy"
    />
  </motion.button>
);

export default PartnerBanner;
