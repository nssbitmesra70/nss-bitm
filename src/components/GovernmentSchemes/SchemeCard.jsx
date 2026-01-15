import {
  IndianRupee,
  HeartPulse,
  GraduationCap,
  Laptop,
  Rocket,
  ArrowRight
} from 'lucide-react';

//Icon map 
const iconMap = {
  IndianRupee,
  HeartPulse,
  GraduationCap,
  Laptop,
  Rocket
};

function SchemeCard({ scheme }) {
  const Icon = iconMap[scheme.categoryIcon];

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                    flex flex-col h-full">

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
          {Icon && (
            <Icon className="w-6 h-6 text-red-600 group-hover:text-white" />
          )}
        </div>

        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 
                         bg-gray-100 text-gray-600 rounded-full 
                         group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
          {scheme.category}
        </span>
      </div>

      {/* Content */}
      <div className="grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 
                       group-hover:text-red-600 transition-colors">
          {scheme.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {scheme.shortInfo}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-50">
        <a
          href={scheme.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold 
                     text-red-600 hover:text-red-800 transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 rounded-b-2xl 
                      transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
}

export default SchemeCard;
