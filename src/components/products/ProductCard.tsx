import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { TVProduct } from '../../data/products';
import { Badge } from '../ui/Badge';
import { getQuickSalesUrl } from '../../utils/whatsapp';

export interface ProductCardProps {
  product: TVProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8, borderColor: 'rgba(255, 255, 255, 0.25)' }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl bg-[#0a0a0c] border border-white/10 overflow-hidden flex flex-col items-center text-center justify-between p-8 hover:shadow-zuvo-card transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center w-full">
        {/* Top Badge & Series Tag */}
        <div className="flex items-center justify-between w-full mb-6">
          <Badge variant="cyan">{product.badge || product.category}</Badge>
          <span className="text-xs font-semibold text-neutral-400">{product.series}</span>
        </div>

        {/* Product TV Mock Visual */}
        <div className="relative aspect-[16/9] w-full rounded-xl bg-gradient-to-b from-[#14151a] to-[#050508] border border-white/10 p-4 mb-6 flex flex-col items-center justify-between overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between w-full opacity-80">
            <img src="/zuvo-logo.svg" alt="ZUVO" className="h-4 w-auto" />
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              {product.resolution}
            </span>
          </div>

          <div className="my-auto text-center">
            <h4 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
              {product.name}
            </h4>
            <p className="text-neutral-400 text-xs mt-1">{product.sizes.join(' • ')} Sizes</p>
          </div>

          <div className="flex justify-center space-x-2 text-[10px] text-neutral-400 border-t border-white/5 pt-2 w-full">
            <span>{product.displayTech}</span>
          </div>
        </div>

        {/* Product Details */}
        <h3 className="text-2xl font-bold text-white mb-2 text-center">{product.name}</h3>
        <p className="text-neutral-400 text-xs leading-relaxed mb-6 text-center">
          {product.description}
        </p>

        {/* Specs List */}
        <div className="space-y-2 mb-8 flex flex-col items-center">
          {product.highlights.slice(0, 3).map((hl, i) => (
            <div key={i} className="flex items-center space-x-2 text-xs text-neutral-300">
              <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
              <span className="truncate">{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between w-full space-x-2">
        <a
          href={getQuickSalesUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 transition-all flex items-center justify-center"
          title={`Inquire about ${product.name} on WhatsApp`}
        >
          <MessageSquare size={16} />
        </a>
        <Link
          to={`/products/${product.id}`}
          className="px-4 py-2.5 rounded-full bg-white text-black text-xs font-bold tracking-wider hover:bg-neutral-200 transition-all flex items-center space-x-1 group-hover:shadow-zuvo-glow"
        >
          <span>VIEW SPECS</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};
