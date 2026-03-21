import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SubpageCardProps {
  title: string;
  synopsis: string;
  imageSrc: string;
  href: string;
}

export default function SubpageCard({ title, synopsis, imageSrc, href }: SubpageCardProps) {
  return (
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Backdrop image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
        <h3 className="font-serif text-xl font-semibold text-white mb-2 text-balance leading-tight">
          {title}
        </h3>
        <p className="text-white/85 text-sm leading-relaxed line-clamp-2 mb-3">
          {synopsis}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
          Read more
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
