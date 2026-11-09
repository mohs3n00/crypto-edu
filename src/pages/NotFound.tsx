import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <FileQuestion size={56} className="text-neutral-gray mb-6" aria-hidden="true" />

      {/* English */}
      <h1 className="text-4xl font-semibold text-near-black mb-2" dir="ltr">
        404
      </h1>
      <p className="text-dark-gray mb-2 text-lg" dir="ltr">
        Page not found
      </p>

      {/* Arabic */}
      <p
        className="text-dark-gray mb-8 text-base"
        dir="rtl"
        lang="ar"
        style={{ fontFamily: 'var(--font-arabic)' }}
      >
        الصفحة غير موجودة
      </p>

      <div className="flex gap-3">
        <Link
          to="/learn"
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-black text-white rounded border border-black hover:bg-near-black transition-colors no-underline"
        >
          Return to Course
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white text-near-black rounded border border-near-black hover:bg-near-white transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
