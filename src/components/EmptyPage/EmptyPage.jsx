import Link from 'next/link';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EmptyPage({ title, subTitle, img }) {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        {img}
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{subTitle}</p>
        <div className="mt-5">
          <Button asChild className="w-full group">
            <Link href="/">
              Continue Explore
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        {/* <div className="mt-6">
          <p className="text-xs text-gray-500">
            Need help?{' '}
            <Link
              href="/all-products"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Contact our support team
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
